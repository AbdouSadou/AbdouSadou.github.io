# Case-card motifs — how to draw one

Every case study on the home page carries an abstract inline SVG above its
title. These are the **motifs**: hand-written, palette-only line drawings, one
per case. This is the working method, including the traps that cost time the
first time round.

They are not images. There is no file to export, no asset pipeline, no alt text
— they are strings of SVG markup living in a map inside a component.

---

## 1. Where they live, and the trap that comes with it

`src/components/SelectedWork.astro` holds a record keyed by case slug:

```ts
const motifs: Record<string, string> = {
  inventara: `<svg …>…</svg>`,
  'customer-data-360': `<svg …>…</svg>`,
};
```

and renders it with:

```ts
set:html={motifs[entry.id.split('/')[1]] ?? ''}
```

> **Trap #1 — a missing motif fails silently.**
> The `?? ''` means an unknown slug renders an **empty box**. No build error, no
> console warning, no schema violation: `npm run build` passes and the card
> simply looks broken next to the others. Adding a case study and adding its
> motif are two separate jobs, and nothing reminds you about the second.

The slug is the markdown filename, identical in `work/en/` and `work/fr/`. One
motif serves both locales — never put text in a motif.

---

## 2. The contract

Copy this skeleton:

```html
<svg viewBox="0 0 640 400" width="640" height="400" fill="none"
     xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  …
</svg>
```

| Attribute | Why it is not optional |
|---|---|
| `viewBox="0 0 640 400"` | Fixed 16:10 across all cases; the grid depends on it |
| `width` + `height` | Reserve the box before paint, so **CLS stays at 0** |
| `fill="none"` | Root default; otherwise every stroked path gets a black fill |
| `aria-hidden="true"` | Decorative. The card's meaning is in its title and outcome |
| `focusable="false"` | Legacy Edge/IE put SVGs in the tab order without it |

The wrapper `.work-card__visual` desaturates the motif at rest and lifts it to
full colour on hover/focus-within. Draw at **full** colour; the CSS handles rest
state.

---

## 3. The palette, and what each colour means

Use CSS custom properties **only** — never a hex literal. The site has one
palette and the motifs must move with it.

| Token | Role in a motif |
|---|---|
| `var(--chart-slate)` | Neutral structure: boxes, rows, grids, ordinary nodes |
| `var(--lineage)` (violet) | Flow, derivation, edges — anything that moves or maps |
| `var(--verified)` (teal) | The resolved end state. Usually one check circle |
| `var(--review)` (amber) | The exception: the batch expiring, the field redacted, the node pending |
| `var(--surface-2)` | Fill for nodes that sit *above* the surface |

The semantics are the point. A motif that uses amber decoratively rather than
for "the thing needing attention" breaks the language the whole site speaks.

**Fill or no fill** carries meaning too: unfilled shapes read as sources or
containers, `--surface-2`-filled shapes read as objects sitting on the canvas.

Conventional weights: `stroke-width="1.5"` for primary shapes, `1` for grids and
secondary threads; `opacity` 0.65 for text-like bars, 0.18–0.4 for background
rulings.

---

## 4. Composition rules

1. **One idea per motif.** Not a diagram of the architecture — a single legible
   metaphor. "Two tables feed a queue, oldest exits first." "Sources resolve to
   one record."
2. **Fill the canvas.** Aim for roughly `y = 64 … 330`, `x = 36 … 604`.
3. **Be different from the neighbours.** The set currently uses: curved flow
   (inventara), radial hub (customer-data-360), branching tree
   (decision-tree-builder), graph over a ledger (network-change-registry),
   linear pipeline (plateforme-gouvernance-donnees). A sixth should not repeat
   one of those silhouettes.
4. **~20–30 elements.** The card renders around 560 px wide; more detail becomes
   noise.
5. **No text.** Rasterisers do not have the site's webfonts, and one motif has
   to work in both languages. Use bars as stand-ins for text.

The check-mark idiom, for a circle of radius `r` at `(cx, cy)`:

```html
<circle cx="548" cy="84" r="20" fill="var(--surface-2)" stroke="var(--verified)" stroke-width="1.5"/>
<path d="M539 84l6 6 13-13" stroke="var(--verified)" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"/>
```

Start the tick at roughly `cx − r/2`, on the centre line.

---

## 5. The method, step by step

**1. Write down the sentence first.** One line describing what the drawing says.
It becomes the comment above the motif, and if you cannot write it, the drawing
will not be legible either.

**2. Lay out the coordinates on paper (or in your head) before typing.** Decide
the columns and the baseline. For a linear composition: node width, gap, and a
shared centre line at `y = 200`.

**3. Write the SVG** into the `motifs` map, with the sentence as a comment above
it, matching the surrounding style.

**4. Look at it.** This is the step people skip.

```bash
npm run motif -- plateforme-gouvernance-donnees   # one motif, large
npm run motif                                     # all of them + a contact sheet
```

`scripts/preview-motif.mjs` resolves the palette from `src/styles/global.css`,
paints the card background behind the artwork and writes PNGs to
`.motif-preview/` (gitignored).

**5. Check the contact sheet.** `.motif-preview/_planche.png` stacks every motif.
It is the fastest way to catch one that is too dense, too sparse, or repeats a
neighbour's silhouette.

**6. Build and verify it actually shipped.**

```bash
npm run build
```

then confirm the motif is in the output rather than trusting the preview:

```bash
grep -c "viewBox" dist/index.html dist/fr/index.html
```

---

## 6. Traps worth remembering

**A motif renders as nothing outside the page.** `var(--verified)` has no
meaning in a standalone SVG file or in a rasteriser. Any preview must resolve
the tokens first — which is exactly what `npm run motif` does, reading them from
the stylesheet so previews cannot drift from the site.

**The preview needs a real background rectangle.** `style="background: …"` on
the `<svg>` element is ignored by sharp's rasteriser (librsvg): the artwork lands
on white, every slate stroke looks fine, and you ship something with no contrast
on the dark card. Inject `<rect width="640" height="400" fill="…"/>` as the first
child instead.

**First drafts come out too small.** It is natural to draw within the middle of
the canvas. The first version of the governance motif occupied only `y = 94…260`
— about 40 % of the height — and floated in the card next to Inventara's, which
spans `y = 64…326`. Measure your extent; if it is under ~250 px tall, spread it.

**Rigid compositions need a second reading.** Four evenly spaced boxes look like
a wireframe. The governance motif gained a second, fainter violet thread across
the top row of each node — column-level lineage — which both filled the rhythm
and said something true about the project.

**Do not describe what you cannot show.** If a motif implies a claim (a check
mark says "verified"), make sure the case study backs it.

---

## 7. Checklist before committing

- [ ] Slug key matches the markdown filename exactly, in both locales
- [ ] `viewBox`, `width`, `height`, `fill="none"`, `aria-hidden`, `focusable`
- [ ] Palette tokens only — no hex literals
- [ ] Amber used for the exception, teal for the resolved state
- [ ] Extent roughly `y = 64…330`
- [ ] Silhouette differs from the other cases
- [ ] No text in the drawing
- [ ] `npm run motif` reviewed, contact sheet checked
- [ ] `npm run build` passes and the motif appears in `dist/`
- [ ] A one-line comment above the motif says what it means
