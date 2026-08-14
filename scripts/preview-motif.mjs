// Rasterises the case-card motifs from src/components/SelectedWork.astro so you
// can actually look at them before shipping. Motifs are inline SVG drawn in CSS
// custom properties, which means they render as nothing outside the page: this
// script resolves the palette from src/styles/global.css, paints the card
// background behind the artwork, and writes PNGs to .motif-preview/.
//
// Run: npm run motif            — every motif, plus a contact sheet
//      npm run motif -- <slug>  — a single motif, larger
//
// Why bother: a motif that looks right in coordinates can still float too small
// in the card, clash with a neighbouring case, or lose contrast on the dark
// surface. Those are all things you only see by looking. See MOTIFS.md.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = path.join(ROOT, 'src/components/SelectedWork.astro');
const TOKENS = path.join(ROOT, 'src/styles/global.css');
const OUT = path.join(ROOT, '.motif-preview');

// The card sits on --surface-1; the motif never paints its own background, so
// the preview has to supply one or every stroke floats on white.
const CARD_BACKGROUND = '#141d29';

/** Resolve the palette from the stylesheet, so previews cannot drift from the site. */
async function readPalette() {
  const css = await fs.readFile(TOKENS, 'utf8');
  const palette = {};
  for (const [, name, value] of css.matchAll(/--([a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
    palette[`--${name}`] = value;
  }
  return palette;
}

/** Pull the `motifs` record out of the component and split it into slug -> svg. */
async function readMotifs() {
  const source = await fs.readFile(SOURCE, 'utf8');
  const block = source.match(/const motifs: Record<string, string> = \{([\s\S]*?)\n\};/);
  if (!block) throw new Error('motifs map not found in SelectedWork.astro');

  const motifs = new Map();
  for (const [, quoted, bare, svg] of block[1].matchAll(
    /(?:'([^']+)'|([A-Za-z][\w-]*)):\s*`([\s\S]*?)`,/g
  )) {
    motifs.set(quoted ?? bare, svg.trim());
  }
  return motifs;
}

function resolve(svg, palette) {
  const painted = svg.replace(/var\((--[a-z0-9-]+)\)/g, (whole, name) => palette[name] ?? whole);
  // Insert the card background as the first child, behind the artwork.
  return painted.replace(/(<svg[^>]*>)/, `$1<rect width="640" height="400" fill="${CARD_BACKGROUND}"/>`);
}

async function render(svg, file, width) {
  await sharp(Buffer.from(svg)).resize(width).png().toFile(file);
  return file;
}

/** Contact sheet: every motif stacked, which is how you spot one that does not belong. */
async function contactSheet(rendered, width) {
  const height = Math.round((width * 400) / 640);
  const sheet = await sharp({
    create: {
      width,
      height: height * rendered.length,
      channels: 3,
      background: CARD_BACKGROUND,
    },
  })
    .composite(rendered.map((file, i) => ({ input: file, top: i * height, left: 0 })))
    .png()
    .toBuffer();
  const file = path.join(OUT, '_planche.png');
  await fs.writeFile(file, sheet);
  return file;
}

const [, , only] = process.argv;
const palette = await readPalette();
const motifs = await readMotifs();

if (only && !motifs.has(only)) {
  console.error(`Unknown motif: ${only}`);
  console.error(`Available: ${[...motifs.keys()].join(', ')}`);
  process.exit(1);
}

await fs.mkdir(OUT, { recursive: true });

if (only) {
  const file = await render(resolve(motifs.get(only), palette), path.join(OUT, `${only}.png`), 1000);
  console.log(`  ${path.relative(ROOT, file)}`);
} else {
  const width = 620;
  const files = [];
  for (const [slug, svg] of motifs) {
    files.push(await render(resolve(svg, palette), path.join(OUT, `${slug}.png`), width));
    console.log(`  ${slug}`);
  }
  const sheet = await contactSheet(files, width);
  console.log(`\n  contact sheet: ${path.relative(ROOT, sheet)}  (${files.length} motifs)`);
}
