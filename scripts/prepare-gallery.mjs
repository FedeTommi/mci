import { mkdir, readFile, readdir, writeFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const [source = 'public/images/gallery', metadataPath = 'gallery.metadata.json', output = 'src/app/features/gallery/gallery-data.json'] = process.argv.slice(2);
const title = (name) => name.replace(/\.[^.]+$/, '').replaceAll('-', ' ').replace(/^./, (letter) => letter.toUpperCase());
const fail = (message) => { throw new Error(message); };
const ordered = (items, metadata) => items.sort((a, b) => (metadata[a]?.order ?? Infinity) - (metadata[b]?.order ?? Infinity) || (a < b ? -1 : a > b ? 1 : 0));

try {
  const metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) {
    fail('metadata must be an object');
  }
  const groups = metadata.groups === undefined ? {} : metadata.groups;
  const photos = metadata.photos === undefined ? {} : metadata.photos;
  for (const [kind, values] of [['groups', groups], ['photos', photos]]) {
    if (!values || typeof values !== 'object' || Array.isArray(values)) {
      fail(`metadata ${kind} must be an object`);
    }
  }
  const result = [];
  const discovered = new Set();
  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '_thumbnails' && entry.isDirectory()) {
      continue;
    }
    if (!entry.isDirectory() || !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(entry.name)) {
      fail(`${entry.name}: expected an immediate group folder with a lowercase English slug`);
    }
  }
  for (const id of ordered(entries.filter((entry) => entry.name !== '_thumbnails').map((entry) => entry.name), groups)) {
    const files = await readdir(join(source, id), { withFileTypes: true });
    const groupPhotos = [];
    for (const file of files) {
      if (!file.isFile() || !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*\.(jpe?g|png|webp)$/i.test(file.name)) {
        fail(`${id}/${file.name}: expected a JPEG, PNG or WebP photo with a descriptive hyphenated filename; nested folders are unsupported`);
      }
    }
    const filenames = files.map((file) => file.name);
    const photoOrder = Object.fromEntries(filenames.map((filename) => [filename, photos[`${id}/${filename}`]]));
    for (const filename of ordered(filenames, photoOrder)) {
      const photoId = `${id}/${filename}`;
      discovered.add(photoId);
      const info = await sharp(join(source, photoId)).metadata().catch((error) => fail(`${photoId}: ${error.message}`));
      if (!['jpeg', 'png', 'webp'].includes(info.format) || !info.width || !info.height || (info.pages ?? 1) > 1) {
        fail(`${photoId}: expected a single JPEG, PNG or WebP still image`);
      }
      const isRotated = [5, 6, 7, 8].includes(info.orientation);
      groupPhotos.push({
        id: photoId,
        src: `images/gallery/${photoId}`,
        thumbnail: `images/gallery/_thumbnails/${photoId}.webp`,
        width: isRotated ? info.height : info.width,
        height: isRotated ? info.width : info.height,
        alt: photos[photoId]?.alt ?? title(filename),
        ...(photos[photoId]?.caption ? { caption: photos[photoId].caption } : {})
      });
    }
    result.push({ id, label: groups[id]?.label ?? title(id), photos: groupPhotos });
  }
  // Validate all input before replacing generated derivatives.
  for (const [kind, values, known, allowed] of [['group', groups, new Set(result.map((group) => group.id)), ['label', 'order']], ['photo', photos, discovered, ['alt', 'caption', 'order']]]) {
    for (const [id, value] of Object.entries(values)) {
      if (!known.has(id)) { fail(`Unknown ${kind} metadata reference: ${id}`); }
      if (!value || typeof value !== 'object' || Array.isArray(value)) { fail(`${id}: metadata must be an object`); }
      for (const [key, field] of Object.entries(value)) {
        if (!allowed.includes(key)) { fail(`${id}: unsupported metadata field ${key}`); }
        if (key === 'order' ? !Number.isSafeInteger(field) || field < 0 : typeof field !== 'string' || !field.trim()) {
          fail(`${id}: invalid ${key}`);
        }
      }
    }
  }
  for (const key of Object.keys(metadata)) {
    if (!['groups', 'photos'].includes(key)) { fail(`Unsupported metadata field: ${key}`); }
  }
  await rm(join(source, '_thumbnails'), { recursive: true, force: true });
  for (const group of result) {
    for (const photo of group.photos) {
      const thumbnailPath = join(source, '_thumbnails', `${photo.id}.webp`);
      await mkdir(dirname(thumbnailPath), { recursive: true });
      await sharp(join(source, photo.id)).rotate().resize(640, 480, { fit: 'cover', withoutEnlargement: true }).webp({ quality: 78 }).toFile(thumbnailPath);
    }
  }
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, `${JSON.stringify(result, null, 2)}\n`);
  console.log(`Prepared ${discovered.size} gallery photos in ${result.length} groups.`);
} catch (error) {
  console.error(`Gallery preparation failed: ${error.message}`);
  process.exitCode = 1;
}
