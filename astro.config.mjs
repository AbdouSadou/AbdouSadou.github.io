// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://abdousadou.github.io',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  markdown: {
    // Keep apostrophes/quotes exactly as authored (house style: straight ')
    smartypants: false,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
