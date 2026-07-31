// Generates public/og.png and public/og-fr.png (1200x630) — the branded Open
// Graph cards (spec §10.3), one per locale. Composes an SVG in the site
// palette and rasterises it with sharp (devDependency).
//
// Run: npm run og   (or: node scripts/generate-og.mjs)
//
// NOTE: sharp's SVG rasteriser (librsvg) only sees fonts installed on the OS,
// not the site's webfonts. The card therefore uses generic bold sans-serif /
// monospace, which is close enough in spirit. TODO (spec §11): regenerate with
// the brand faces (Bricolage Grotesque / IBM Plex Mono) installed locally, or
// via a headless-browser screenshot, before calling the design final.

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

// Palette — spec §7.2
const INK = '#0E141D';
const SURFACE = '#151D28';
const LINE = 'rgba(234,241,247,0.10)';
const RULING = 'rgba(234,241,247,0.05)';
const TEXT_LO = '#9DACBD';
const TEXT_HI = '#EAF1F7';
const VERIFIED = '#2FBFAE';

// Per-locale copy. All layout, sizes and the record-card motif are shared;
// only the strings (and the FR subtitle's two-line wrap) differ.
//
// The French subtitle is too wide for the left column at the shared 26px
// (measured 848px against the ~684px available before the record card), so it
// wraps at the ' · ' separator instead of shrinking; both lines fit at full
// size (491px / 335px measured). `subtitleLines` is [text, baselineY][], and
// `taglineY` drops on fr so the block keeps an even rhythm.
const STRINGS = {
  en: {
    file: 'og.png',
    name: 'Abdou Sadou',
    subtitleLines: [['Data Governance & BI Consultant · West Yorkshire, UK', 352]],
    tagline: 'ONE VERSION OF THE TRUTH.',
    taglineY: 430,
  },
  fr: {
    file: 'og-fr.png',
    name: 'Abdou Sadou',
    subtitleLines: [
      ['Consultant Gouvernance des Données & BI', 352],
      ['West Yorkshire, Royaume-Uni', 386],
    ],
    tagline: 'LA VERSION UNIQUE DE LA VÉRITÉ.',
    taglineY: 448,
  },
};

/** Minimal XML text escaping for the SVG <text> payloads. */
function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Faint hairline graph rulings every 80px (spec §7.5, at OG scale). */
function rulings() {
  const lines = [];
  for (let x = 80; x < WIDTH; x += 80) {
    lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${HEIGHT}" stroke="${RULING}" stroke-width="1"/>`);
  }
  for (let y = 80; y < HEIGHT; y += 80) {
    lines.push(`<line x1="0" y1="${y}" x2="${WIDTH}" y2="${y}" stroke="${RULING}" stroke-width="1"/>`);
  }
  return lines.join('\n    ');
}

/** One abstract record field: a short slate label bar + a longer value bar. */
function fieldRow(x, y, labelW, valueW, valueColour = TEXT_LO, valueOpacity = 0.55) {
  return `
    <rect x="${x}" y="${y}" width="${labelW}" height="10" rx="5" fill="${TEXT_LO}" opacity="0.35"/>
    <rect x="${x}" y="${y + 20}" width="${valueW}" height="12" rx="6" fill="${valueColour}" opacity="${valueOpacity}"/>`;
}

// The resolved record-card motif, right-hand side.
const CARD_X = 764;
const CARD_Y = 168;
const CARD_W = 356;
const CARD_H = 294;

const recordCard = `
    <!-- resolved record card -->
    <rect x="${CARD_X}" y="${CARD_Y}" width="${CARD_W}" height="${CARD_H}" rx="18" fill="${SURFACE}" stroke="${LINE}" stroke-width="1"/>
    <!-- header row: record-key bar + verified tick -->
    <rect x="${CARD_X + 28}" y="${CARD_Y + 30}" width="150" height="12" rx="6" fill="${VERIFIED}" opacity="0.85"/>
    <circle cx="${CARD_X + CARD_W - 46}" cy="${CARD_Y + 36}" r="16" fill="none" stroke="${VERIFIED}" stroke-width="2"/>
    <path d="M ${CARD_X + CARD_W - 53} ${CARD_Y + 36} l 5 5 l 9 -10" fill="none" stroke="${VERIFIED}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="${CARD_X + 28}" y1="${CARD_Y + 62}" x2="${CARD_X + CARD_W - 28}" y2="${CARD_Y + 62}" stroke="${LINE}" stroke-width="1"/>
    <!-- field rows -->
    ${fieldRow(CARD_X + 28, CARD_Y + 84, 64, 208)}
    ${fieldRow(CARD_X + 28, CARD_Y + 142, 88, 168, VERIFIED, 0.7)}
    ${fieldRow(CARD_X + 28, CARD_Y + 200, 72, 236)}`;

/** Full card SVG for one locale's strings. */
function buildSvg({ name, subtitleLines, tagline, taglineY }) {
  const subtitle = subtitleLines
    .map(
      ([text, y]) =>
        `<text x="80" y="${y}" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="26" fill="${TEXT_LO}">${escapeXml(text)}</text>`
    )
    .join('\n  ');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${INK}"/>
  <g>
    ${rulings()}
  </g>
  <g>${recordCard}
  </g>
  <!-- left column -->
  <text x="80" y="298" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-weight="bold" font-size="76" fill="${TEXT_HI}">${escapeXml(name)}</text>
  ${subtitle}
  <text x="80" y="${taglineY}" font-family="IBM Plex Mono, Consolas, monospace" font-size="20" letter-spacing="4" fill="${VERIFIED}">${escapeXml(tagline)}</text>
</svg>`;
}

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

let failed = false;
for (const strings of Object.values(STRINGS)) {
  const outPath = path.join(publicDir, strings.file);
  await sharp(Buffer.from(buildSvg(strings))).png().toFile(outPath);

  const { width, height, format } = await sharp(outPath).metadata();
  console.log(`Wrote ${outPath} (${format}, ${width}x${height})`);
  if (width !== WIDTH || height !== HEIGHT) {
    console.error(`Expected ${WIDTH}x${HEIGHT} — got ${width}x${height}`);
    failed = true;
  }
}
if (failed) process.exitCode = 1;
