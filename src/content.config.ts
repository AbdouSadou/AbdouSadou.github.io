import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Case studies (spec §6). Body markdown carries the five template sections
// as h2s: Context, My role, Approach, Governance decisions, Outcome.
// English entries live in work/en/, French mirrors in work/fr/ (same slugs).
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One-line outcome shown on the card and case hero — not a description */
      outcome: z.string(),
      stack: z.array(z.string()),
      year: z.string(),
      /** Card order on the home page and next-case sequence */
      order: z.number(),
      /** Pattern-level confidentiality: renders the abstraction notice */
      confidential: z.boolean().default(false),
      /** Live demo URL: renders a prominent link in the case hero */
      demo: z.string().url().optional(),
      /** Product screenshots (demo data only) rendered after the body */
      screenshots: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string(),
          })
        )
        .optional(),
    }),
});

export const collections = { work };
