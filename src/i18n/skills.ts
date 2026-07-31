// Strings for Skills.astro, "The catalogue" (spec §5.7). Six domains; the
// spec bans percentage bars, star ratings and radar charts in every locale.
// EN rows are verbatim from the component. FR keeps product names as-is
// (SQL Server, Power BI, ...) and translates only descriptive skill chips.
import type { Locale } from './index';

interface CatalogueRow {
  /** Lowercase mono catalogue key rendered between backticks. */
  key: string;
  tools: string[];
}

interface Strings {
  eyebrow: string;
  heading: string;
  catalogue: CatalogueRow[];
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'Skills',
    heading: 'A catalogue, not a cloud.',
    catalogue: [
      {
        key: 'governance & mdm',
        tools: [
          'governance frameworks',
          'data mapping',
          'master data management',
          'data quality',
          'data-management procedures',
          'GDPR compliance',
          'ETL',
        ],
      },
      {
        key: 'databases',
        tools: ['SQL Server', 'PostgreSQL', 'Oracle', 'MongoDB'],
      },
      {
        key: 'programming & analytics',
        tools: ['Python', 'SQL', 'R', 'Apache Spark', 'Databricks'],
      },
      {
        key: 'bi & visualisation',
        tools: ['Power BI', 'Tableau', 'Looker', 'Excel'],
      },
      {
        key: 'cloud & big data',
        tools: ['AWS', 'Azure', 'Google Cloud', 'Snowflake'],
      },
      {
        key: 'ml & statistics',
        tools: ['predictive modelling', 'A/B testing', 'regression analysis'],
      },
    ],
  },
  fr: {
    eyebrow: 'Skills',
    heading: 'Un catalogue, pas un nuage.',
    catalogue: [
      {
        key: 'gouvernance & mdm',
        tools: [
          'cadres de gouvernance',
          'cartographie des données',
          'master data management',
          'qualité des données',
          'procédures de gestion des données',
          'conformité RGPD',
          'ETL',
        ],
      },
      {
        key: 'bases de données',
        tools: ['SQL Server', 'PostgreSQL', 'Oracle', 'MongoDB'],
      },
      {
        key: 'programmation & analytique',
        tools: ['Python', 'SQL', 'R', 'Apache Spark', 'Databricks'],
      },
      {
        key: 'bi & visualisation',
        tools: ['Power BI', 'Tableau', 'Looker', 'Excel'],
      },
      {
        key: 'cloud & big data',
        tools: ['AWS', 'Azure', 'Google Cloud', 'Snowflake'],
      },
      {
        key: 'ml & statistiques',
        tools: ['modélisation prédictive', 'A/B testing', 'analyse de régression'],
      },
    ],
  },
};
