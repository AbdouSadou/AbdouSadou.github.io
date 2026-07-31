// Proof band strings (src/components/ProofBand.astro). The `en` values are
// the live site copy extracted verbatim. The numerals themselves (5+, 15%,
// 4, 2) live in the component; `labels` must stay in that fixed order.
import type { Locale } from './index';

interface Strings {
  /** sr-only section heading */
  srHeading: string;
  /** Labels for the four proof points, in the component's 5+ / 15% / 4 / 2 order. */
  labels: readonly [string, string, string, string];
}

export const t: Record<Locale, Strings> = {
  en: {
    srHeading: 'Proof points',
    labels: [
      'years in data across telecoms, consulting & higher education',
      'fewer external complaints · Ooredoo KPI programme',
      'professional certifications earned in 2025',
      'data products shipped end to end, solo',
    ],
  },
  fr: {
    srHeading: 'Points de preuve',
    labels: [
      'années de data\u202F: télécoms, conseil & enseignement supérieur',
      'de réclamations externes en moins · programme KPI Ooredoo',
      'certifications professionnelles obtenues en 2025',
      'produits data livrés de bout en bout, en solo',
    ],
  },
};
