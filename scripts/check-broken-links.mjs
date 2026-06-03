// One-shot: cerca link interni rotti nelle build statiche dei 3 siti.
// Non modifica nulla. Uso: node scripts/check-broken-links.mjs
import fs from 'node:fs';
import path from 'node:path';

function walk(d, acc) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

for (const app of ['bylo-group', 'bylo-logistica', 'bylo-racing']) {
  const dist = path.join('apps', app, 'dist');
  if (!fs.existsSync(dist)) { console.log(app, 'NO DIST'); continue; }
  const files = walk(dist, []);
  const htmls = files.filter((f) => f.endsWith('.html'));
  const exists = new Set(files.map((f) => '/' + path.relative(dist, f).split(path.sep).join('/')));
  const broken = {};
  for (const h of htmls) {
    const html = fs.readFileSync(h, 'utf8');
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    for (let href of hrefs) {
      if (/^(https?:|mailto:|tel:|#|javascript:|data:)/.test(href)) continue;
      href = href.split('#')[0].split('?')[0];
      if (!href.startsWith('/')) continue;
      let target = href;
      if (href.endsWith('/')) target = href + 'index.html';
      else if (!path.extname(href)) target = href + '/index.html';
      if (!exists.has(target) && !exists.has(href)) {
        const page = '/' + path.relative(dist, h).split(path.sep).join('/');
        (broken[href] = broken[href] || new Set()).add(page);
      }
    }
  }
  const keys = Object.keys(broken).sort();
  console.log(`\n===== ${app} (${htmls.length} html) — link interni rotti: ${keys.length} =====`);
  for (const k of keys) {
    const pages = [...broken[k]];
    console.log(`  ${k}   <- ${pages.slice(0, 3).join(', ')}${pages.length > 3 ? ` (+${pages.length - 3})` : ''}`);
  }
}
