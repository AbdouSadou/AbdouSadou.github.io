// Strings for Certifications.astro. Issuers, certificate names and dates are
// the official credential titles and stay English in both locales; only the
// section chrome and link labels are localized here.
import type { Locale } from './index';

interface Strings {
  eyebrow: string;
  heading: string;
  verify: string;
  /** sr-only text on the Verify link; receives the official certificate name. */
  srCredential: (name: string) => string;
  /** Validity period of the featured MDQM credential (it has a lifecycle) */
  mdqmDates: string;
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'Certifications',
    heading: 'Independently verifiable.',
    verify: 'Verify',
    srCredential: (name) => `${name} credential, opens in a new tab`,
    mdqmDates: 'Jul 2026 – Jul 2028',
  },
  fr: {
    eyebrow: 'Certifications',
    heading: 'Vérifiables en toute indépendance.',
    verify: 'Vérifier',
    srCredential: (name) => `Certificat ${name}, s'ouvre dans un nouvel onglet`,
    mdqmDates: 'juil. 2026 – juil. 2028',
  },
};
