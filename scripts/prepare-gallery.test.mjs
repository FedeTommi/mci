import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import sharp from 'sharp';

test('CLI discovers and orders photos, preserves originals and excludes derivatives', async () => {
  const root = await mkdtemp(join(tmpdir(), 'gallery-'));
  try {
    const source = join(root, 'photos');
    for (const group of ['alpha', 'beta', 'empty']) {
      await mkdir(join(source, group), { recursive: true });
    }
    const image = await sharp({ create: { width: 900, height: 600, channels: 3, background: 'red' } }).jpeg().toBuffer();
    for (const name of ['alpha/zebra.jpg', 'alpha/apple.jpg', 'alpha/bread.jpg', 'beta/table.jpg']) {
      await writeFile(join(source, name), image);
    }
    const metadata = join(root, 'metadata.json');
    await writeFile(metadata, JSON.stringify({ groups: { beta: { label: 'Insieme', order: 0 } }, photos: { 'alpha/zebra.jpg': { order: 0, alt: 'Fiori', caption: 'Un cesto.' } } }));
    const run = () => spawnSync(process.execPath, ['scripts/prepare-gallery.mjs', source, metadata, join(root, 'data.json')], { encoding: 'utf8' });
    assert.equal(run().status, 0);
    const output = await readFile(join(root, 'data.json'), 'utf8');
    const groups = JSON.parse(output);
    assert.deepEqual(groups.map((g) => g.id), ['beta', 'alpha', 'empty']);
    assert.equal(groups[0].label, 'Insieme');
    assert.deepEqual(groups[1].photos.map((p) => p.id), ['alpha/zebra.jpg', 'alpha/apple.jpg', 'alpha/bread.jpg']);
    assert.equal(groups[1].photos[0].caption, 'Un cesto.');
    assert.equal(groups[1].photos[1].alt, 'Apple');
    assert.equal(groups[1].photos[1].caption, undefined);
    assert.deepEqual(await readFile(join(source, 'alpha/apple.jpg')), image);
    assert.equal((await sharp(join(source, '_thumbnails/alpha/apple.jpg.webp')).metadata()).width, 640);
    assert.equal(run().status, 0);
    assert.equal(await readFile(join(root, 'data.json'), 'utf8'), output);
    assert.equal((await readdir(join(source, '_thumbnails'))).length, 2);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('CLI rejects misplaced, nested, corrupt and unsupported content and invalid metadata', async () => {
  const root = await mkdtemp(join(tmpdir(), 'gallery-invalid-'));
  try {
    const source = join(root, 'photos');
    const metadata = join(root, 'metadata.json');
    await mkdir(join(source, 'group'), { recursive: true });
    await writeFile(metadata, '{}');
    const run = () => spawnSync(process.execPath, ['scripts/prepare-gallery.mjs', source, metadata, join(root, 'data.json')], { encoding: 'utf8' });
    for (const [file, message] of [['stray.jpg', /immediate group folder/], ['group/file.txt', /expected a JPEG/], ['group/broken.jpg', /unsupported image format/]]) {
      await writeFile(join(source, file), 'invalid');
      const result = run();
      assert.equal(result.status, 1);
      assert.match(result.stderr, message);
      await rm(join(source, file));
    }
    await writeFile(join(source, 'group/vector.jpg'), '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"></svg>');
    assert.equal(run().status, 1);
    assert.match(run().stderr, /group\/vector.jpg: expected a single JPEG, PNG or WebP/);
    await rm(join(source, 'group/vector.jpg'));
    await mkdir(join(source, 'group/nested'));
    assert.match(run().stderr, /nested folders are unsupported/);
    await rm(join(source, 'group/nested'), { recursive: true });
    for (const [data, message] of [[{ groups: null }, /metadata groups must be an object/], [{ photos: { 'group/missing.jpg': {} } }, /Unknown photo metadata reference/], [{ groups: { group: { order: -1 } } }, /invalid order/], [{ groups: { group: { label: '' } } }, /invalid label/]]) {
      await writeFile(metadata, JSON.stringify(data));
      assert.equal(run().status, 1);
      assert.match(run().stderr, message);
    }
    await writeFile(metadata, '{}');
    await rm(join(source, 'group'), { recursive: true });
    assert.equal(run().status, 0);
    assert.deepEqual(JSON.parse(await readFile(join(root, 'data.json'), 'utf8')), []);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
