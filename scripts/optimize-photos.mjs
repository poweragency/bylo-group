// Ricomprime le foto di bylo-racing mantenendo le dimensioni in pixel e i 3
// formati (jpg/webp/avif). La sorgente di fedelta' e' il .jpg esistente.
// Qualita' conservativa per evitare degrado visibile. Reversibile via git.
// Uso:
//   node scripts/optimize-photos.mjs            (dry-run: stampa solo i risparmi)
//   node scripts/optimize-photos.mjs --write     (scrive i file ottimizzati)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DIR = path.join('apps', 'bylo-racing', 'public', 'photos');
const WRITE = process.argv.includes('--write');
const Q = { jpg: 80, webp: 76, avif: 52 };

const jpgs = fs.readdirSync(DIR).filter((f) => /\.jpe?g$/i.test(f));
let beforeTot = 0;
let afterTot = 0;

for (const jpg of jpgs) {
  const base = jpg.replace(/\.jpe?g$/i, '');
  const src = path.join(DIR, jpg);
  const input = fs.readFileSync(src);
  const meta = await sharp(input).metadata();

  const targets = [
    { ext: 'jpg', buf: await sharp(input).jpeg({ quality: Q.jpg, mozjpeg: true }).toBuffer() },
    { ext: 'webp', buf: await sharp(input).webp({ quality: Q.webp, effort: 5 }).toBuffer() },
    { ext: 'avif', buf: await sharp(input).avif({ quality: Q.avif, effort: 4 }).toBuffer() },
  ];

  for (const t of targets) {
    const outPath = path.join(DIR, `${base}.${t.ext}`);
    const before = fs.existsSync(outPath) ? fs.statSync(outPath).size : 0;
    const after = t.buf.length;
    beforeTot += before;
    afterTot += after;
    const pct = before ? Math.round((1 - after / before) * 100) : 0;
    console.log(
      `${base}.${t.ext}`.padEnd(30) +
        `${meta.width}x${meta.height}`.padEnd(12) +
        `${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB  (${pct >= 0 ? '-' : '+'}${Math.abs(pct)}%)`,
    );
    if (WRITE && after < before) fs.writeFileSync(outPath, t.buf);
    else if (WRITE && after >= before) console.log(`   skip (non migliora): ${base}.${t.ext}`);
  }
}

console.log(
  `\nTOTALE: ${(beforeTot / 1048576).toFixed(2)}MB -> ${(afterTot / 1048576).toFixed(2)}MB  ` +
    `(-${Math.round((1 - afterTot / beforeTot) * 100)}%)  ${WRITE ? '[SCRITTO]' : '[dry-run]'}`,
);
