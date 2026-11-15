// Run against a locally served production build and an isolated Chromium CDP session.
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const [debugPort = '9333', url = 'http://localhost:4300/mci/gallery/'] = process.argv.slice(2);
const tabs = await (await fetch(`http://localhost:${debugPort}/json`)).json();
const socket = new WebSocket(tabs.find((tab) => tab.type === 'page').webSocketDebuggerUrl);
await new Promise((resolve) => socket.addEventListener('open', resolve, { once: true }));
let nextId = 0;
const pending = new Map();
const requests = [];
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data);
  if (message.method === 'Network.requestWillBeSent') {
    requests.push(message.params.request.url);
  }
  if (message.id) {
    const request = pending.get(message.id);
    pending.delete(message.id);
    message.error ? request.reject(message.error) : request.resolve(message.result);
  }
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++nextId;
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, method, params }));
});
const evaluate = async (expression) => {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  assert.equal(result.exceptionDetails, undefined, JSON.stringify(result.exceptionDetails));
  return result.result.value;
};
const wait = async (expression) => {
  for (let attempt = 0; attempt < 100; attempt++) {
    if (await evaluate(expression)) { return; }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  assert.fail(`Timed out: ${expression}`);
};
const click = async (selector) => {
  const point = await evaluate(`(() => { const element = document.querySelector(${JSON.stringify(selector)}); element.scrollIntoView({block: 'center'}); const rect = element.getBoundingClientRect(); return {x: rect.x + rect.width / 2, y: rect.y + rect.height / 2}; })()`);
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', button: 'left', clickCount: 1, ...point });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', button: 'left', clickCount: 1, ...point });
};
const key = async (key, extra = {}) => {
  const windowsVirtualKeyCode = { Tab: 9, Escape: 27, ArrowLeft: 37, ArrowRight: 39 }[key];
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key, code: key, windowsVirtualKeyCode, ...extra });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code: key, windowsVirtualKeyCode, ...extra });
};
const dialog = 'mci-gallery dialog';
const current = () => evaluate(`document.querySelector('${dialog} img')?.alt`);
const timeout = setTimeout(() => { console.error('Browser check timed out'); process.exit(1); }, 60000);
try {
  await send('Network.enable');
  await send('Page.enable');
  for (const [width, height, mobile] of [[1440, 1000, false], [390, 844, true]]) {
    requests.length = 0;
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile });
    await send('Emulation.setTouchEmulationEnabled', { enabled: mobile });
    await send('Page.navigate', { url });
    await wait("document.querySelector('mci-gallery .gallery-grid img') && document.querySelector('mci-gallery button')?.onclick !== undefined");
    await new Promise((resolve) => setTimeout(resolve, 300));
    assert.equal(await evaluate('document.documentElement.scrollWidth <= innerWidth'), true, 'No page overflow');
    assert.equal(requests.some((url) => /\/images\/gallery\/(?!_thumbnails\/)/.test(url)), false, 'No original requests before opening');
    const first = await evaluate("document.querySelector('mci-gallery .gallery-grid img').alt");
    const hasBatches = await evaluate("!!document.querySelector('mci-gallery .load-more')");
    if (hasBatches) {
      assert.equal(await evaluate("document.querySelectorAll('mci-gallery .gallery-grid img').length"), 12);
      assert(new Set(requests.filter((url) => url.includes('/images/gallery/_thumbnails/'))).size <= 12, 'Distant unrendered thumbnails are not requested');
    }
    assert.equal(await evaluate("getComputedStyle(document.querySelector('mci-gallery .group-controls')).position"), 'sticky');
    assert.equal(await evaluate("document.querySelector('mci-gallery .gallery-grid img').getBoundingClientRect().height > 0"), true);
    await click('mci-gallery .gallery-grid button');
    await wait(`document.querySelector('${dialog}').open`);
    await wait(`document.querySelector('${dialog} img')?.complete`);
    assert.equal(await current(), first);
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('${dialog} img')).objectFit`), 'contain');
    assert.equal(await evaluate('document.documentElement.classList.contains("cdk-global-scrollblock")'), true);
    const top = await evaluate('document.documentElement.getBoundingClientRect().top');
    await send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: width / 2, y: height / 2, deltaX: 0, deltaY: 400 });
    await new Promise((resolve) => setTimeout(resolve, 100));
    assert.equal(await evaluate('document.documentElement.getBoundingClientRect().top'), top, 'Background stays locked');
    // Shift-Tab from the close control stays in the document; forward Tab may visit browser chrome.
    await key('Tab', { modifiers: 8 });
    assert.equal(await evaluate(`document.querySelector('${dialog}').contains(document.activeElement)`), true);
    assert.notEqual(await evaluate('getComputedStyle(document.activeElement).outlineStyle'), 'none');
    for (let i = 0; i < 5; i++) { await key('Tab'); }
    assert.equal(await evaluate(`document.querySelector('${dialog}').contains(document.activeElement)`), true, 'Native modal focus containment');
    await key('ArrowLeft');
    await wait(`document.querySelector('${dialog} img')?.alt !== ${JSON.stringify(first)}`);
    assert.equal(await evaluate("document.querySelector('mci-gallery .group-controls button:last-child').getAttribute('aria-pressed')"), 'true', 'Backward global wrap selects final group');
    await key('ArrowRight');
    await wait(`document.querySelector('${dialog} img')?.alt === ${JSON.stringify(first)}`);
    if (mobile) {
      const point = await evaluate("(() => { const rect = document.querySelector('mci-gallery .viewer-stage').getBoundingClientRect(); return {x: rect.x + rect.width * .8, y: rect.y + rect.height / 2}; })()");
      await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ ...point, id: 1 }] });
      await send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: point.x - 150, y: point.y + 5, id: 1 }] });
      await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    } else {
      await click(`${dialog} [aria-label="Foto successiva"]`);
    }
    await wait(`document.querySelector('${dialog} img')?.alt !== ${JSON.stringify(first)}`);
    const unavailable = await evaluate("document.querySelector('mci-gallery .gallery-grid button:nth-child(3) img').src.replace('/_thumbnails/', '/').replace(/\\.webp$/, '')");
    await send('Network.setBlockedURLs', { urls: [unavailable] });
    await click(`${dialog} [aria-label="Foto successiva"]`);
    await wait(`document.querySelector('${dialog}').textContent.includes('Fotografia non disponibile')`);
    await click(`${dialog} [aria-label="Foto successiva"]`);
    await wait(`!document.querySelector('${dialog}').textContent.includes('Fotografia non disponibile')`);
    await send('Network.setBlockedURLs', { urls: [] });
    const selected = await current();
    await wait(`document.querySelector('${dialog} img')?.naturalWidth > 0 && document.querySelector('${dialog} figure').getAttribute('aria-busy') === 'false'`);
    await evaluate(`document.querySelector('${dialog} img').decode().then(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))`);
    const screenshot = await send('Page.captureScreenshot');
    await writeFile(`/tmp/mci-gallery-viewer-${width}.png`, Buffer.from(screenshot.data, 'base64'));
    await key('Escape');
    await wait(`!document.querySelector('${dialog}').open`);
    await wait(`document.activeElement?.getAttribute('aria-label') === ${JSON.stringify(`Apri: ${selected}`)}`);
    assert.equal(await evaluate('document.documentElement.classList.contains("cdk-global-scrollblock")'), false);
    assert.equal(await evaluate('document.documentElement.scrollWidth <= innerWidth'), true);
    await evaluate('new Promise(resolve => requestAnimationFrame(resolve))');
    const gridScreenshot = await send('Page.captureScreenshot');
    await writeFile(`/tmp/mci-gallery-grid-${width}.png`, Buffer.from(gridScreenshot.data, 'base64'));
    assert(requests.some((url) => url.includes('/images/gallery/_thumbnails/')), 'Grid requested derivatives');
    if (hasBatches) {
      for (let batch = 0; batch < 2; batch++) {
        await evaluate("document.querySelector('mci-gallery .load-more')?.scrollIntoView({block:'center'})");
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      await wait("!document.querySelector('mci-gallery .load-more')");
      assert.equal(await evaluate("new Set([...document.querySelectorAll('mci-gallery .gallery-grid img')].map(img => img.alt)).size"), 26);
      await evaluate("document.querySelector('mci-gallery .group-controls button:last-child').click()");
      await wait("document.querySelectorAll('mci-gallery .gallery-grid img').length === 2");
      assert.equal(await evaluate("(() => { const rect = document.querySelector('mci-gallery .gallery-grid button').getBoundingClientRect(); return rect.top >= 0 && rect.top < innerHeight; })()"), true, 'Selecting a short group from deep scroll reveals its photos');
    }
    console.log(`PASS ${width}×${height}: layout, thumbnail requests, native dialog, focus, scroll lock, global wrap, ${mobile ? 'touch swipe' : 'buttons/keys'}, Escape${hasBatches ? ', real observer batches' : ''}`);
  }
} finally {
  clearTimeout(timeout);
  socket.close();
}
