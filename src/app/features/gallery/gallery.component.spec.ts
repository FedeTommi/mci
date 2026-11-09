import { TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { GALLERY_GROUPS, GalleryGroup } from './gallery.model';

const photo = (id: string, caption?: string) => ({ id, src: `images/gallery/${id}.jpg`, thumbnail: `images/gallery/_thumbnails/${id}.webp`, width: 900, height: 600, alt: `Descrizione ${id}`, caption });
const collection: GalleryGroup[] = [
  { id: 'first', label: 'Primo gruppo', photos: Array.from({ length: 26 }, (_, i) => photo(`first-${i + 1}`, i === 0 ? 'Didascalia italiana' : undefined)) },
  { id: 'empty', label: 'Vuoto', photos: [] },
  { id: 'second', label: 'Secondo gruppo', photos: [photo('second-1'), photo('second-2')] },
];

async function page(groups = collection) {
  TestBed.configureTestingModule({ imports: [GalleryComponent], providers: [{ provide: GALLERY_GROUPS, useValue: groups }] });
  const fixture = TestBed.createComponent(GalleryComponent);
  await fixture.whenStable();
  const root: HTMLElement = fixture.nativeElement;
  const buttons = () => [...root.querySelectorAll<HTMLButtonElement>('button')];
  const click = async (label: string) => {
    const button = buttons().find((button) => (button.getAttribute('aria-label') ?? button.textContent?.trim()) === label);
    expect(button, label).toBeTruthy();
    button!.click();
    await fixture.whenStable();
  };
  return { fixture, root, click, thumbnails: () => [...root.querySelectorAll<HTMLImageElement>('.gallery-grid img')] };
}

describe('Gallery page', () => {
  afterEach(() => vi.unstubAllGlobals());

  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
    HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); this.dispatchEvent(new Event('close')); };
  });

  it('opens full photos, traverses unloaded batches and groups, wraps and returns to the selected thumbnail', async () => {
    const { fixture, root, click, thumbnails } = await page();
    await click('Apri: Descrizione first-1');
    const dialog = root.querySelector('dialog')!;
    const image = () => dialog.querySelector('img')!;
    expect(dialog.open).toBe(true);
    expect(image().getAttribute('src')).toBe('images/gallery/first-1.jpg');
    expect(dialog.textContent).toContain('Didascalia italiana');
    for (let i = 0; i < 12; i++) { await click('Foto successiva'); }
    expect(image().alt).toBe('Descrizione first-13');
    expect(thumbnails().length).toBeGreaterThanOrEqual(13);
    expect(dialog.textContent).not.toContain('Didascalia italiana');
    for (let i = 0; i < 14; i++) { await click('Foto successiva'); }
    expect(image().alt).toBe('Descrizione second-1');
    expect(root.querySelector('[aria-pressed="true"]')?.textContent?.trim()).toBe('Secondo gruppo');
    await click('Foto precedente');
    expect(image().alt).toBe('Descrizione first-26');
    await click('Chiudi fotografia');
    expect(dialog.open).toBe(false);
    expect(thumbnails()).toHaveLength(26);
    expect(document.activeElement?.getAttribute('data-photo')).toBe('first-26');
    expect(document.documentElement.classList.contains('cdk-global-scrollblock')).toBe(false);
    await click('Apri: Descrizione first-1');
    dialog.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    await fixture.whenStable();
    expect(image().alt).toBe('Descrizione second-2');
    dialog.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await fixture.whenStable();
    expect(image().alt).toBe('Descrizione first-1');
  });

  it('appends bounded batches without duplicates and ignores stale observations after group changes', async () => {
    const observations: { target: Element; notify: () => void }[] = [];
    vi.stubGlobal('IntersectionObserver', class {
      constructor(private callback: IntersectionObserverCallback) {}
      observe(target: Element) { observations.push({ target, notify: () => this.callback([{ target, isIntersecting: true } as IntersectionObserverEntry], this as unknown as IntersectionObserver) }); }
      disconnect() {}
    });
    const { fixture, click, thumbnails, root } = await page();
    const initialCount = thumbnails().length;
    const first = observations.at(-1)!;
    expect(first).toBeTruthy();
    first.notify(); first.notify();
    await fixture.whenStable();
    expect(thumbnails().length).toBe(initialCount * 2);
    expect(new Set(thumbnails().map((image) => image.alt)).size).toBe(thumbnails().length);
    const stale = observations.at(-1)!;
    await click('Secondo gruppo');
    stale.notify();
    await fixture.whenStable();
    expect(thumbnails()).toHaveLength(2);
    await click('Primo gruppo');
    first.notify();
    await fixture.whenStable();
    expect(thumbnails()).toHaveLength(initialCount);
    observations.at(-1)!.notify();
    await fixture.whenStable();
    observations.at(-1)!.notify();
    await fixture.whenStable();
    expect(thumbnails()).toHaveLength(26);
    expect(root.textContent).not.toContain('Mostra altre fotografie');
  });

  it('supports intentional touch swipes and recovers from unavailable images', async () => {
    const { root, click, fixture } = await page();
    await click('Apri: Descrizione first-1');
    const stage = root.querySelector('.viewer-stage')!;
    const pointer = (type: string, x: number, y: number) => {
      const event = new Event(type, { bubbles: true });
      Object.assign(event, { pointerType: 'touch', isPrimary: true, pointerId: 1, clientX: x, clientY: y });
      stage.dispatchEvent(event);
    };
    pointer('pointerdown', 200, 100); pointer('pointerup', 180, 110);
    await fixture.whenStable();
    expect(stage.querySelector('img')!.alt).toBe('Descrizione first-1');
    pointer('pointerdown', 250, 100); pointer('pointerup', 80, 110);
    await fixture.whenStable();
    expect(stage.querySelector('img')!.alt).toBe('Descrizione first-2');
    stage.querySelector('img')!.dispatchEvent(new Event('error'));
    await fixture.whenStable();
    expect(stage.textContent).toContain('Fotografia non disponibile');
    await click('Foto successiva');
    expect(stage.querySelector('img')!.alt).toBe('Descrizione first-3');
    stage.querySelector('img')!.dispatchEvent(new Event('load'));
    await fixture.whenStable();
    expect(stage.textContent).not.toContain('Fotografia non disponibile');
    await click('Chiudi fotografia');
  });

  it('handles empty groups and harmless single-photo wrapping', async () => {
    const empty = await page([{ id: 'empty', label: 'Vuoto', photos: [] }]);
    expect(empty.root.textContent).toContain('Non ci sono ancora fotografie');
    expect(empty.thumbnails()).toHaveLength(0);
    empty.fixture.destroy();
    TestBed.resetTestingModule();
    const single = await page([{ id: 'one', label: 'Una foto', photos: [photo('one')] }]);
    await single.click('Apri: Descrizione one');
    await single.click('Foto successiva');
    await single.click('Foto precedente');
    expect(single.root.querySelector('dialog img')?.getAttribute('alt')).toBe('Descrizione one');
    await single.click('Chiudi fotografia');
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true });
    single.root.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(false);
  });

  it('shows only the active group, lightweight lazy thumbnails and no grid captions', async () => {
    const { root, click, thumbnails } = await page();
    expect(thumbnails().length).toBeGreaterThan(0);
    expect(thumbnails().length).toBeLessThan(26);
    expect(thumbnails()[0].getAttribute('src')).toContain('_thumbnails/');
    expect(thumbnails()[0].loading ?? thumbnails()[0].getAttribute('loading')).toBe('lazy');
    expect(root.textContent).not.toContain('Didascalia italiana');
    await click('Secondo gruppo');
    expect(thumbnails().map((image) => image.alt)).toEqual(['Descrizione second-1', 'Descrizione second-2']);
    expect(root.querySelector('[aria-pressed="true"]')?.textContent?.trim()).toBe('Secondo gruppo');
  });
});
