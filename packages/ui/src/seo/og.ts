export type OgBrand = 'group' | 'transport' | 'tommy';

export interface OgOptions {
  brand: OgBrand;
  eyebrow: string;
  title: string;
  subtitle?: string;
  domain: string;
}

const BRAND_LABEL: Record<OgBrand, string> = {
  group: 'BYLO GROUP',
  transport: 'BYLO TRANSPORT',
  tommy: 'TOMMY BY',
};

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const FONT_FAMILY = 'Arial, Helvetica, sans-serif';
const MAX_TITLE_WIDTH = 1040;

function approxWidth(text: string, fontSize: number, weight: number): number {
  const factor = weight >= 700 ? 0.58 : 0.52;
  return text.length * fontSize * factor;
}

function wrapByWidth(text: string, fontSize: number, weight: number, maxWidth: number, maxLines: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? cur + ' ' + w : w;
    if (approxWidth(next, fontSize, weight) > maxWidth && cur) {
      lines.push(cur);
      cur = w;
      if (lines.length === maxLines) break;
    } else {
      cur = next;
    }
  }
  if (cur && lines.length < maxLines) lines.push(cur);
  const remaining = words.slice(lines.join(' ').split(/\s+/).filter(Boolean).length);
  if (remaining.length > 0 && lines.length === maxLines) {
    let last = lines[maxLines - 1];
    while (approxWidth(last + '…', fontSize, weight) > maxWidth && last.includes(' ')) {
      last = last.replace(/\s*\S*$/, '');
    }
    lines[maxLines - 1] = last + '…';
  }
  return lines;
}

function fitTitle(title: string): { lines: string[]; fontSize: number } {
  for (const fs of [92, 76, 64, 56]) {
    const maxLinesForSize = fs >= 80 ? 2 : 3;
    const lines = wrapByWidth(title, fs, 900, MAX_TITLE_WIDTH, maxLinesForSize);
    const allFit = lines.every((l) => approxWidth(l, fs, 900) <= MAX_TITLE_WIDTH);
    if (allFit && !lines[lines.length - 1].endsWith('…')) {
      return { lines, fontSize: fs };
    }
    if (allFit && fs === 56) return { lines, fontSize: fs };
  }
  return { lines: wrapByWidth(title, 56, 900, MAX_TITLE_WIDTH, 3), fontSize: 56 };
}

export function renderOgSvg(opts: OgOptions): string {
  const { brand, eyebrow, title, subtitle, domain } = opts;
  const eyebrowFull = `${BRAND_LABEL[brand]} · ${eyebrow.toUpperCase()}`;

  const fitted = fitTitle(title);
  const titleFontSize = fitted.fontSize;
  const titleLines = fitted.lines;
  const titleLineHeight = titleFontSize * 1.05;
  const titleStartY = titleLines.length === 1 ? 320 : titleLines.length === 2 ? 280 : 240;

  const subtitleLines = subtitle ? wrapByWidth(subtitle, 26, 400, MAX_TITLE_WIDTH, 2) : [];
  const subtitleStartY = titleStartY + (titleLines.length - 1) * titleLineHeight + 70;

  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="80" y="${titleStartY + i * titleLineHeight}" font-family="${FONT_FAMILY}" font-weight="900" font-size="${titleFontSize}" fill="#ffffff">${escapeXml(line)}</text>`,
    )
    .join('\n  ');

  const subtitleSvg = subtitleLines
    .map(
      (line, i) =>
        `<text x="80" y="${subtitleStartY + i * 36}" font-family="${FONT_FAMILY}" font-weight="400" font-size="26" fill="#cccccc">${escapeXml(line)}</text>`,
    )
    .join('\n  ');

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
    <radialGradient id="glow" cx="100%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.03"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <text x="80" y="180" font-family="${FONT_FAMILY}" font-weight="700" font-size="22" fill="#fbbf24" letter-spacing="6">${escapeXml(eyebrowFull)}</text>

  ${titleSvg}

  ${subtitleSvg}

  <line x1="80" y1="540" x2="200" y2="540" stroke="#fbbf24" stroke-width="3"/>
  <text x="80" y="585" font-family="${FONT_FAMILY}" font-weight="500" font-size="20" fill="#aaaaaa">${escapeXml(domain)}</text>
</svg>`;
}

export async function renderOgPng(opts: OgOptions): Promise<Buffer> {
  const sharp = (await import('sharp')).default;
  const svg = renderOgSvg(opts);
  return sharp(Buffer.from(svg)).png({ quality: 90, compressionLevel: 9 }).toBuffer();
}
