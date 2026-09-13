// A loopback-only static preview: no compiler, file watcher or background rebuilds.
import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { securityHeaders } from './security.mjs';

const root = await realpath(new URL('../out/', import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.txt': 'text/plain', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ttf': 'font/ttf' };

const server = createServer(async (request, response) => {
  for (const [name, value] of Object.entries(securityHeaders)) response.setHeader(name, value);
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname.split('/').some(part => part.startsWith('.') || part === '_headers') || pathname.includes('\\') || pathname.includes('\0')) {
      response.writeHead(404); response.end(); return;
    }
    let path = resolve(root, '.' + pathname);
    if (path !== root && !path.startsWith(root + sep)) throw new Error('Outside export');
    let file;
    for (const candidate of [path, path + '.html', resolve(path, 'index.html')]) {
      try {
        const actual = await realpath(candidate);
        if (actual.startsWith(root + sep) && (await stat(actual)).isFile()) { file = actual; break; }
      } catch { /* Try the next static route shape. */ }
    }
    if (!file) { file = resolve(root, '404.html'); response.statusCode = 404; }
    const body = await readFile(file);
    response.setHeader('Content-Type', mime[extname(file)] || 'application/octet-stream');
    response.setHeader('Content-Length', body.length);
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch { response.writeHead(400); response.end('Bad request'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${port}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => { server.closeAllConnections(); server.close(() => process.exit(0)); });
