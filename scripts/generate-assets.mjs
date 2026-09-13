// Regenerates PNG favicons and the OG image from the SVG sources in
// public/favicon.svg and scripts/og-image.svg. Run with:
//   npm run assets:generate
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(root, '..', 'public');

const faviconSvg = readFileSync(path.join(publicDir, 'favicon.svg'));
const ogSvg = readFileSync(path.join(root, 'og-image.svg'));

await Promise.all([
  sharp(faviconSvg).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png')),
  sharp(faviconSvg).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png')),
  sharp(faviconSvg).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png')),
  sharp(faviconSvg).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png')),
  sharp(faviconSvg).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png')),
  sharp(ogSvg).resize(1200, 630).png().toFile(path.join(publicDir, 'og-image.png')),
]);

console.log('Generated favicons and OG image in public/.');
