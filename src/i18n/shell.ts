// Shell strings — Nav, Footer, MetaRail (one dict file for the three shell
// components). EN values are the original copy verbatim; FR is the /fr/
// mirror. System/mono catalogue tokens stay English where they read as
// data-catalogue output (e.g. GOLDEN RECORD).
import type { Locale } from './index';
import type { NAV_ITEMS } from '../consts';

/** Keyed by the EN labels in NAV_ITEMS so a consts change breaks the build here. */
type NavLabel = (typeof NAV_ITEMS)[number]['label'];

interface NavStrings {
  /** aria-label of the desktop <nav> landmark */
  primary: string;
  links: Record<NavLabel, string>;
  /** sr-only suffix after the visible 'CV ↓' (leading space included) */
  cvSrSuffix: string;
  menuOpen: string;
  menuClose: string;
  /** aria-label of the mobile overlay dialog */
  overlayLabel: string;
  /** aria-label of the EN · FR language toggle */
  langLabel: string;
}

interface FooterStrings {
  line1: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  /** sr-only suffix on external links (leading space included) */
  newTabSuffix: string;
  colophon: string;
}

interface RailStrings {
  /** Catalogue keys, in scroll order — serialized to JSON for the client script,
   *  so property order here is load-bearing. */
  sectionKeys: {
    hero: string;
    proof: string;
    work: string;
    experience: string;
    teaching: string;
    certifications: string;
    skills: string;
    about: string;
    contact: string;
  };
  /** Appended to the key while in Selected Work (leading ' · ' included) */
  workCount: string;
  updated: string;
}

interface Strings {
  nav: NavStrings;
  footer: FooterStrings;
  rail: RailStrings;
}

export const t: Record<Locale, Strings> = {
  en: {
    nav: {
      primary: 'Primary',
      links: {
        Work: 'Work',
        Experience: 'Experience',
        Teaching: 'Teaching',
        About: 'About',
        Contact: 'Contact',
      },
      cvSrSuffix: ' (download PDF)',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      overlayLabel: 'Menu',
      langLabel: 'Language',
    },
    footer: {
      line1: 'Abdou Sadou · Data governance, BI & big data · University lecturer',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      newTabSuffix: ' (opens in a new tab)',
      colophon:
        'Built with Astro & GSAP · Hosted on GitHub Pages · No cookies, no trackers · © 2026 Abdou Sadou',
    },
    rail: {
      sectionKeys: {
        hero: '00 · GOLDEN RECORD',
        proof: '01 · PROOF',
        work: '02 · SELECTED WORK',
        experience: '03 · EXPERIENCE',
        teaching: '04 · TEACHING',
        certifications: '05 · CERTIFICATIONS',
        skills: '06 · SKILLS',
        about: '07 · ABOUT',
        contact: '08 · CONTACT',
      },
      workCount: ' · 4 case studies',
      updated: 'last updated 2026-07',
    },
  },
  fr: {
    nav: {
      primary: 'Principale',
      links: {
        Work: 'Projets',
        Experience: 'Expériences',
        Teaching: 'Enseignement',
        About: 'À propos',
        Contact: 'Contact',
      },
      cvSrSuffix: ' (télécharger le PDF)',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      overlayLabel: 'Menu',
      langLabel: 'Langue',
    },
    footer: {
      line1: 'Abdou Sadou · Gouvernance des données, BI & big data · Conférencier',
      emailLabel: 'E-mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      newTabSuffix: ' (ouvre un nouvel onglet)',
      colophon:
        'Conçu avec Astro & GSAP · Hébergé sur GitHub Pages · Sans cookies, sans traceurs · © 2026 Abdou Sadou',
    },
    rail: {
      sectionKeys: {
        // GOLDEN RECORD kept in English: MDM term of art + brand motif.
        hero: '00 · GOLDEN RECORD',
        proof: '01 · PREUVES',
        work: '02 · SÉLECTION',
        experience: '03 · EXPÉRIENCES',
        teaching: '04 · ENSEIGNEMENT',
        certifications: '05 · CERTIFICATIONS',
        skills: '06 · SKILLS',
        about: '07 · À PROPOS',
        contact: '08 · CONTACT',
      },
      workCount: ' · 4 études de cas',
      updated: 'daté 2026-07',
    },
  },
};
