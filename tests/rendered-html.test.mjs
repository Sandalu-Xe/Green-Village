import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import test from 'node:test';
import { visibleCopy } from './content.mjs';
import { securityHeaders } from '../scripts/security.mjs';
import { galleryPhotos, guestPhotos, stayPhotos, tourPhotos } from '../app/gallery-data.ts';

const out = new URL('../out/', import.meta.url);
const expected = JSON.parse(await readFile(new URL('expected-content.json', import.meta.url), 'utf8'));

for (const [route, copy] of Object.entries(expected)) {
  test(`${route}: preserves copy and a single shared layout`, async () => {
    const html = await readFile(new URL(`${route}.html`, out), 'utf8');
    assert.equal(visibleCopy(html), copy);
    assert.equal((html.match(/class="site-header"/g) || []).length, 1);
    assert.equal((html.match(/class="site-footer"/g) || []).length, 1);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
    // Every inline executable script must be externalized for script-src 'self'.
    for (const [, attributes, source] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      assert.ok(/\bsrc=/.test(attributes) || !source.trim());
    }
    assert.match(html, /http-equiv="Content-Security-Policy"/);
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/[^"?#]+)"/g)) {
      if (/\.(?:js|css|woff2|png|jpe?g|avif|webp|svg)$/.test(asset)) await access(new URL('.'+asset,out));
    }
  });
}

test('all 47 photos remain available; all 15 uploads are unique', async () => {
  assert.equal(galleryPhotos.length, 47);
  assert.equal(guestPhotos.length, 15);
  assert.equal(stayPhotos.length + tourPhotos.length, 47);
  assert.equal(new Set(galleryPhotos.map(photo => photo.src)).size, 47);
  for (const photo of galleryPhotos) {
    assert.ok(photo.alt && photo.caption);
    await access(new URL('.'+photo.src, out));
  }
  for (const photo of guestPhotos) assert.ok(galleryPhotos.includes(photo));
});

test('collapsed galleries only render six images per stack', async () => {
  const home = await readFile(new URL('index.html', out), 'utf8');
  const gallery = await readFile(new URL('gallery.html', out), 'utf8');
  assert.equal((home.match(/<figure\b/g) || []).length, 6);
  assert.equal((gallery.match(/<figure\b/g) || []).length, 12);
});

test('security headers match on Sites and Vercel; exports contain no server or secrets', async () => {
  const headers = await readFile(new URL('_headers', out), 'utf8');
  const vercel = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
  for (const [key,value] of Object.entries(securityHeaders)) {
    assert.ok(headers.includes(`${key}: ${value}`));
    assert.ok(vercel.headers[0].headers.some(header => header.key === key && header.value === value));
  }
  assert.ok(headers.split('\n').every(line => line.length <= 2000));
  assert.match(headers, /script-src 'self';/);
  assert.doesNotMatch(headers, /unsafe-eval|script-src[^;]*unsafe-inline/);
  const files = await readdir(out, { recursive: true });
  assert.ok(!files.some(file => /(^|\/)(?:node_modules|\.env[^/]*|\.git|server)(\/|$)|\.map$/.test(file)));
});
