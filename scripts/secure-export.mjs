import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { contentSecurityPolicy, securityHeaders } from './security.mjs';

const root = new URL('../out/', import.meta.url);
const scriptDirectory = new URL('_next/static/inline/', root);
await mkdir(scriptDirectory, { recursive: true });

async function secureHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) { await secureHtml(path); continue; }
    if (!entry.name.endsWith('.html')) continue;
    let html = await readFile(path, 'utf8');
    // Adjacent Next.js flight chunks can share one request without changing order.
    html = html.replace(/(?:<script>[\s\S]*?<\/script>){2,}/g, (group) => {
      const sources = [...group.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
      return `<script>${sources.join(';\n')}</script>`;
    });
    // Move build-generated inline scripts into same-origin, content-addressed files.
    // Preserve script order and attributes; no eval or unsafe-inline scripts needed.
    const matches = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
    for (const [tag, attributes, source] of matches) {
      if (/\bsrc\s*=/i.test(attributes) || !source.trim() || /application\/ld\+json/i.test(attributes)) continue;
      const name = createHash('sha256').update(source).digest('hex') + '.js';
      await writeFile(new URL(name, scriptDirectory), source);
      html = html.replace(tag, `<script${attributes} src="/_next/static/inline/${name}"></script>`);
    }
    // Meta policy protects exports even on hosts that do not support _headers.
    const metaPolicy = contentSecurityPolicy.replace(/; frame-ancestors 'none'/, '');
    html = html.replace('<head>', `<head><meta http-equiv="Content-Security-Policy" content="${metaPolicy}">`);
    await writeFile(path, html);
  }
}
await secureHtml(fileURLToPath(root));
const headers = '/*\n' + Object.entries(securityHeaders).map(([key, value]) => `  ${key}: ${value}`).join('\n')
  + '\n\n/_next/static/*\n  Cache-Control: public, max-age=31536000, immutable\n';
await writeFile(new URL('_headers', root), headers);
console.log('Static export secured: external scripts, CSP, security headers and immutable asset caching.');
