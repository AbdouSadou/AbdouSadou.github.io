// Strings for the page shells: home-page meta and the case-study template
// (CasePage.astro). English values are the canonical live copy; the home
// meta re-exports SITE so it can never drift from consts.ts.
import type { Locale } from './index';
import { SITE } from '../consts';

interface HomeStrings {
  /** <title> of the home page */
  title: string;
  /** Meta description of the home page */
  description: string;
}

interface CaseStrings {
  /** aria-label of the breadcrumb <nav> */
  breadcrumbAria: string;
  /** Root crumb linking back to /#work (rendered uppercase in the mono crumb) */
  breadcrumbRoot: string;
  /** Notice shown on confidential case studies */
  confidential: string;
  /** Mono catalogue token opening the footer stack line (kept English in FR as data-catalogue output) */
  stack: string;
  /** Back link to the work index */
  allWork: string;
  /** Label above the next-case card */
  nextCase: string;
  /** Live-demo link shown in the case hero when frontmatter has `demo` */
  liveDemo: string;
  /** sr-only suffix on the live-demo external link */
  newTabSr: string;
  /** Mono eyebrow above the screenshot gallery */
  screensEyebrow: string;
}

interface Strings {
  home: HomeStrings;
  case: CaseStrings;
}

export const t: Record<Locale, Strings> = {
  en: {
    home: {
      title: SITE.title,
      description: SITE.description,
    },
    case: {
      breadcrumbAria: 'Breadcrumb',
      breadcrumbRoot: 'WORK',
      confidential: 'Details abstracted to protect client confidentiality.',
      stack: 'STACK',
      allWork: 'All work',
      nextCase: 'Next case study',
      liveDemo: 'Open the live demo',
      newTabSr: ' (opens in a new tab)',
      screensEyebrow: 'Screens · demo data only',
    },
  },
  fr: {
    home: {
      title: 'Abdou Sadou · Consultant Gouvernance des Données & BI',
      description:
        'Consultant en gouvernance des données, gestion des données de référence, BI et big data, et conférencier dans le West Yorkshire, Royaume-Uni. Je rends les données fiables : cadres de gouvernance, pipelines et tableaux de bord.',
    },
    case: {
      breadcrumbAria: "Fil d'Ariane",
      breadcrumbRoot: 'TRAVAUX',
      confidential: 'Détails anonymisés pour préserver la confidentialité du client.',
      stack: 'STACK',
      allWork: 'Tous les travaux',
      nextCase: 'Étude de cas suivante',
      liveDemo: 'Ouvrir la démo en ligne',
      newTabSr: ' (ouvre un nouvel onglet)',
      screensEyebrow: 'Captures · données de démonstration uniquement',
    },
  },
};
