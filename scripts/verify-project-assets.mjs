import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, basename, join } from 'node:path';

const source = readFileSync('src/components/ProjectsSection.tsx', 'utf8');
for (const [, relative] of source.matchAll(/from '(\.\.\/assets\/images\/[^']+)'/g)) {
  const file = resolve('src/components', relative);
  assert(readdirSync(dirname(file)).includes(basename(file)), `Missing or wrong case: ${file}`);
}

const html = readFileSync('dist/index.html', 'utf8');
for (const prefix of ['/', '/portfolio/']) {
  for (const [, relative] of html.matchAll(/(?:src|href)="(\.\/[^\"]+)"/g)) {
    const url = new URL(relative, `https://example.test${prefix}`);
    assert(url.pathname.startsWith(prefix));
    assert(existsSync(join('dist', url.pathname.slice(prefix.length))), `Missing: ${url.pathname}`);
  }
}

const assets = readdirSync('dist/assets');
const references = new Set();
for (const file of assets.filter(file => file.endsWith('.js'))) {
  const js = readFileSync(join('dist/assets', file), 'utf8');
  for (const [image] of js.matchAll(/project_[A-Za-z0-9_-]+\.webp/g)) {
    assert(assets.includes(image), `Missing bundled image: ${image}`);
    references.add(image);
  }
}
assert.equal(references.size, 18, 'Expected nine previews and nine thumbnails');
console.log('Verified exact-case imports, 18 bundled images, and root/subdirectory entry assets.');
