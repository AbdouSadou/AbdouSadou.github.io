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
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'Certifications',
    heading: 'Verified in 2025.',
    verify: 'Verify',
    srCredential: (name) => `${name} credential, opens in a new tab`,
  },
  fr: {
    eyebrow: 'Certifications',
    heading: 'Vérifiées en 2025.',
    verify: 'Vérifier',
    srCredential: (name) => `Certificat ${name}, s'ouvre dans un nouvel onglet`,
  },
};
