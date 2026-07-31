// Strings for Contact.astro. EN copy is extracted verbatim from the
// component; FR is a faithful mirror. The status flourish is translated (it
// reads as a human-facing availability line, not catalogue output); the CSS
// uppercases it either way. mailto/social hrefs stay in the component.
import type { Locale } from './index';

interface Strings {
  eyebrow: string;
  heading: string;
  line: string;
  emailCta: string;
  linkedinLabel: string;
  githubLabel: string;
  /** sr-only suffix on links that open in a new tab */
  newTabSr: string;
  statusLine: string;
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'Contact',
    heading: "Let's make your data trustworthy.",
    line: 'Open to consulting engagements and data leadership roles.',
    emailCta: 'Email me',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    newTabSr: '(opens in a new tab)',
    statusLine: 'Status · Open to engagements',
  },
  fr: {
    eyebrow: 'Contact',
    heading: 'Rendons vos données dignes de confiance.',
    line: 'Ouvert aux missions de conseil et aux postes de direction data.',
    emailCta: "M'écrire",
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    newTabSr: "(s'ouvre dans un nouvel onglet)",
    statusLine: 'Statut · Ouvert aux missions',
  },
};
