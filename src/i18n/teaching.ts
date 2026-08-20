// Strings for Teaching.astro. EN copy is extracted verbatim from the
// component; FR is a faithful mirror (vouvoiement-register prose, narrow
// no-break spaces before ':' per French typography).
import type { Locale } from './index';

interface Fact {
  label: string;
  value: string;
}

interface Strings {
  eyebrow: string;
  heading: string;
  para: string;
  closer: string;
  /** Mono card header; kept as an English system token in both locales. */
  cardKey: string;
  facts: readonly Fact[];
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'Teaching',
    heading: 'I also teach this.',
    para:
      "Since 2023 I've lectured in Business & Data Analytics at the University of Huddersfield: " +
      "BI, data science and statistical analysis for master's cohorts, plus SAP S/4HANA" +
      ', covering master data management and the full Sales & ' +
      'Distribution cycle. I hold a Postgraduate Certificate in Higher Education.',
    closer:
      "Teaching keeps my practice honest: if I can't explain a governance decision to a room of " +
      "students, it isn't finished.",
    cardKey: 'RECORD · teaching',
    facts: [
      { label: 'institution', value: 'University of Huddersfield' },
      { label: 'courses', value: 'BI · data science · statistical analysis · SAP S/4HANA SD' },
      { label: 'pgcert', value: 'Higher Education, 2023–2024' },
    ],
  },
  fr: {
    eyebrow: 'Enseignement',
    heading: "J'enseigne aussi tout cela.",
    para:
      "Depuis 2023, j'enseigne en Business & Data Analytics à l'université de " +
      'Huddersfield : BI, data science et analyse statistique pour des promotions de ' +
      "master, ainsi que SAP S/4HANA, en couvrant la " +
      'gestion des données de référence et le cycle complet Sales & Distribution. Je suis ' +
      "titulaire d'un Postgraduate Certificate in Higher Education.",
    closer:
      "L'enseignement garde ma pratique honnête : si je ne peux pas expliquer une décision " +
      "de gouvernance à une salle d'étudiants, c'est qu'elle n'est pas aboutie.",
    cardKey: 'RECORD · teaching',
    facts: [
      { label: 'établissement', value: 'University of Huddersfield' },
      { label: 'cours', value: 'BI · data science · analyse statistique · SAP S/4HANA SD' },
      { label: 'pgcert', value: 'Enseignement supérieur, 2023–2024' },
    ],
  },
};
