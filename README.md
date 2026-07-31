# abdousadou.github.io

Personal portfolio of Abdou Sadou: data governance, MDM, BI and big data consultant, and university lecturer. Built with **Astro 5** (static output), TypeScript strict and plain CSS custom properties, in the dark editorial design system **"The Golden Record"**: a deep blue-black canvas, semantic data-quality colour (verified teal, review amber, lineage violet), and one signature moment, duplicate records of me merging into a single verified golden record in the hero. The site also ships a full French mirror at `/fr/` (same slugs, hreflang alternates).

No cookies, no trackers, no third-party requests. Fonts are self-hosted. The only JavaScript shipped is the hero sequence (GSAP) and a handful of small vanilla observers.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the static site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run og` | Regenerate `public/og.png` (1200×630 Open Graph card) via sharp |

## Deployment

The site deploys to GitHub Pages with the official Actions flow (`.github/workflows/deploy.yml`: build → upload artifact → deploy). One-time setup:

1. Create a **public** repository named `AbdouSadou.github.io` (a user site must be public on the free plan; keep drafts and anything personal out of it).
2. Push this project to its `main` branch.
3. In the repository: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Done. Every push to `main` builds and publishes `https://abdousadou.github.io`. The workflow can also be run manually from the Actions tab.

`public/.nojekyll` ships with the build so Pages serves the bundle untouched.

## Structure

```
.github/workflows/deploy.yml   GitHub Pages deployment
public/                        Static assets: favicon.svg, og.png, robots.txt, .nojekyll
                               (+ CV.pdf, to be added, see checklist)
scripts/generate-og.mjs        Composes the OG card as SVG and rasterises it with sharp
src/
  consts.ts                    Site identity, links and nav items (single source of truth)
  content.config.ts            "work" content collection schema (case studies)
  content/work/{en,fr}/*.md    One markdown file per case study and locale, typed
                               frontmatter, identical slugs across locales
  layouts/Base.astro           Page shell: fonts, meta/OG, JSON-LD, reveal observer
  components/*.astro           One component per home-page section, styles scoped
  pages/                       index.astro, work/[slug], 404
  styles/global.css            Design tokens (§7 of the spec) and shared utilities
```

The full design/content specification (`abdou-sadou-portfolio-spec.md`) is **gitignored on purpose**: the repository is public, and internal drafts with unpublished personal data stay out of it (spec §10.4, data minimisation, practised).

## Launch checklist

Human tasks before the site goes live:

- [x] **CV privacy pass**: both CVs re-exported without the phone number; verified clean (email/LinkedIn/GitHub only).
- [x] **French copy**: reviewed and approved; the applied terminology decisions are recorded in FRENCH-REVIEW.md (gitignored).
- [x] **Portrait**: real photo integrated (`src/assets/portrait.png`, CSS duotone treatment, optimised AVIF/WebP generated at build).
- [x] **Credential URLs**: all four Verify links wired in `src/components/Certifications.astro`.
- [x] **LinkedIn**: confirmed as `linkedin.com/in/asadou` in `src/consts.ts`.
- [x] **Inventara screenshots**: three views integrated (dashboard, movement log, exports) with demo data only, in `src/content/work/screens/`; unused originals parked in `_drafts/` (gitignored — one contains realistic-looking contact details and must not enter the public repo).
- [x] **Decision-tree builder**: live demo linked from both case pages (`abdousadou.github.io/es_builder_clone`).
- [ ] **Custom domain (optional)**: register e.g. `abdousadou.com`, add CNAME + apex A/AAAA records, enable "Enforce HTTPS" in Pages settings.
- [ ] **GitHub profile pass**: pin the decision-tree builder repository (and other public work) with strong READMEs; the portfolio funnels visitors there. Inventara stays private (commercial product), so it is presented through its case study only.
- [ ] **OG card (optional polish)**: `og.png` currently renders with system fonts (sharp's SVG rasteriser cannot load webfonts); regenerate with the brand faces once installed locally.

© 2026 Abdou Sadou
