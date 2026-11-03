// Minimal static server for Railway (no dependencies)
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname, port = process.env.PORT || 3000;
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.webp':'image/webp' };
const allowed = new Set(['index.html', 'config.js']);
http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/^\/+/, '') || 'index.html';
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(root, path.normalize(p));
  if (!file.startsWith(root + path.sep) || !(allowed.has(p) || p.startsWith('assets/'))) p = 'index.html';
  const target = allowed.has(p) || p.startsWith('assets/') ? path.join(root, p) : path.join(root, 'index.html');
  fs.readFile(target, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'Cache-Control': target.endsWith('.html') ? 'no-cache' : 'public, max-age=300' });
    res.end(data);
  });
}).listen(port, '0.0.0.0', () => console.log('Renom VSL listening on ' + port));
