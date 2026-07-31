// Strings for About.astro. EN copy is extracted verbatim from the component;
// FR is a faithful mirror (narrow no-break spaces before ':' per French
// typography). Degree names: official English titles kept where they are the
// awarded title; USTHB degrees rendered in French.
import type { Locale } from './index';

interface EduItem {
  degree: string;
  institution: string;
  dates: string;
}

interface Strings {
  eyebrow: string;
  heading: string;
  /** alt text of the portrait photo */
  portraitAlt: string;
  figcaption: string;
  bio1: string;
  bio2: string;
  /** sr-only prefix announced before the languages line */
  langsSrLabel: string;
  langs: string;
  eduHeading: string;
  education: readonly EduItem[];
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'About',
    heading: 'Strategy that ships.',
    portraitAlt: 'Portrait of Abdou Sadou',
    figcaption: 'Abdou Sadou · West Yorkshire, UK',
    bio1:
      "I'm a data consultant and lecturer based in West Yorkshire, England. Over five-plus " +
      "years, from telecoms in Algiers to consulting and academia in Yorkshire, I've worked " +
      'where data strategy meets execution: writing the governance frameworks, master-data ' +
      'models and GDPR-compliant procedures, then building the ETL pipelines, models and ' +
      'dashboards that turn them into working products.',
    bio2:
      'Outside client work I design and ship my own: Inventara, an inventory SaaS for the ' +
      'chemical industry, and a decision-tree builder, both built end to end, alone. I care ' +
      'about data people can actually trust: accurate, documented, secure, and used.',
    langsSrLabel: 'Languages: ',
    langs: 'English (fluent) · French (DALF C2) · Arabic (native)',
    eduHeading: 'Education',
    education: [
      {
        degree: 'PGCert Higher Education',
        institution: 'University of Huddersfield',
        dates: '2023–24',
      },
      {
        degree: 'MSc Business Intelligence & Analytics',
        institution: 'University of Huddersfield',
        dates: '2021–22',
      },
      { degree: 'MSc Computer Science', institution: 'USTHB', dates: '2016–18' },
      { degree: 'BSc Electronics & Telecommunications', institution: 'USTHB', dates: '2012–15' },
    ],
  },
  fr: {
    eyebrow: 'À propos',
    heading: 'Une stratégie qui aboutit.',
    portraitAlt: "Portrait d'Abdou Sadou",
    figcaption: 'Abdou Sadou · West Yorkshire, Royaume-Uni',
    bio1:
      'Je suis consultant data et conférencier, basé dans le West Yorkshire, en ' +
      "Angleterre. Depuis plus de cinq ans, des télécoms à Alger au conseil et à " +
      "l'enseignement dans le Yorkshire, je travaille là où la stratégie data rencontre " +
      "l'exécution : rédiger les cadres de gouvernance, les modèles de données de " +
      'référence et les procédures conformes au RGPD, puis construire les pipelines ETL, les ' +
      'modèles et les tableaux de bord qui les transforment en produits opérationnels.',
    bio2:
      'En dehors des missions clients, je conçois et livre mes propres produits : ' +
      "Inventara, un SaaS de gestion des stocks pour l'industrie chimique, et un outil de " +
      "création d'arbres de décision, tous deux construits de bout en bout, seul. Ce qui " +
      "m'importe, ce sont des données auxquelles on peut réellement se fier : exactes, " +
      'documentées, sécurisées et utilisées.',
    langsSrLabel: 'Langues : ',
    langs: 'anglais (courant) · français (DALF C2) · arabe (langue maternelle)',
    eduHeading: 'Formation',
    education: [
      {
        degree: 'PGCert en enseignement supérieur',
        institution: 'University of Huddersfield',
        dates: '2023–24',
      },
      {
        degree: 'MSc Business Intelligence & Analytics',
        institution: 'University of Huddersfield',
        dates: '2021–22',
      },
      { degree: 'MSc en informatique', institution: 'USTHB', dates: '2016–18' },
      {
        degree: 'BSc en électronique et télécommunications',
        institution: 'USTHB',
        dates: '2012–15',
      },
    ],
  },
};
