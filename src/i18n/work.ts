// Strings for SelectedWork.astro. EN copy is verbatim from the component;
// card titles, outcomes and stacks come from the localized content entries
// (src/content/work/<locale>/*.md), so only section chrome lives here.
import type { Locale } from './index';

interface Strings {
  eyebrow: string;
  heading: string;
  readCaseStudy: string;
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'Selected work',
    heading: 'Case studies in trustworthy data.',
    readCaseStudy: 'Read case study',
  },
  fr: {
    eyebrow: 'Sélection de réalisations',
    heading: 'Fiabilité des données: étude de cas.',
    readCaseStudy: "Lire l'étude de cas",
  },
};
