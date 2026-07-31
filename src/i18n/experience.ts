// Experience strings (src/components/Experience.astro). The `en` entries are
// the live site copy, verbatim from the spec — do not edit here. Org names
// are proper nouns and stay identical in both locales. `present` drives the
// amber date styling and must match between locales.
import type { Locale } from './index';

export interface ExperienceEntry {
  role: string;
  org: string;
  dates: string;
  location: string;
  body: string;
  present?: boolean;
}

interface Strings {
  eyebrow: string;
  heading: string;
  entries: readonly ExperienceEntry[];
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'Experience',
    heading: 'Where strategy met execution.',
    entries: [
      {
        role: 'Data Consultant',
        org: 'One1Star Solutions',
        dates: 'Oct 2023 – present',
        location: 'York, England',
        body: "I lead data-governance delivery: data mapping, role definitions, usage and access rules, and GDPR-compliant data-management procedures. I design and optimise the ETL processes, data models and workflows behind the firm's BI capability, identify data-valorisation use cases, and advise stakeholders on architecture and technical debt.",
        present: true,
      },
      {
        role: 'Lecturer, Business & Data Analytics',
        org: 'University of Huddersfield',
        dates: 'Jan 2023 – present',
        location: 'Huddersfield, England',
        body: "I teach business intelligence, data science and statistical analysis to master's students, and supervise applied research projects in data and machine learning. As an SAP-accredited educator (SAP University Alliances), I teach master data management and end-to-end S/4HANA Sales & Distribution, from master data to financial documents.",
        present: true,
      },
      {
        role: 'Analytics & Planning Engineer',
        org: 'Ooredoo',
        dates: 'Oct 2020 – Aug 2021',
        location: 'Algiers, Algeria',
        body: 'I built and tracked network-performance KPIs that cut external complaints by 15%, automated dashboards and reporting with Python, Pandas and Power BI, and designed the internal database that made network-change history traceable and consistent.',
      },
      {
        role: 'IP Engineer',
        org: 'Huawei Technologies',
        dates: 'May 2020 – Oct 2020',
        location: 'Algiers, Algeria',
        body: "Technical studies and low-level designs for the modernisation of Algeria's ISP network; configuration and deployment of NE40E routers, S12700 switches and NCE servers; supervision of subcontractor teams.",
      },
      {
        role: 'IT Engineer',
        org: 'AGENOR',
        dates: 'Oct 2018 – May 2020',
        location: 'Algiers, Algeria',
        body: "BI reporting with Excel and SQL for sales and finance; centralised multi-site infrastructure with VPN access and hardened data security; authored the company's IT charter and governance policies.",
      },
    ],
  },
  fr: {
    eyebrow: 'Expérience',
    heading: "Là où la stratégie rencontre l'exécution.",
    entries: [
      {
        role: 'Consultant data',
        org: 'One1Star Solutions',
        dates: "oct. 2023 – aujourd'hui",
        location: 'York, Angleterre',
        body: "Je pilote la mise en place de la gouvernance des données\u202F: cartographie des données, définition des rôles, règles d'usage et d'accès, et procédures de gestion des données conformes au RGPD. Je conçois et optimise les processus ETL, les modèles de données et les workflows qui portent la BI du cabinet, j'identifie les cas d'usage de valorisation des données et je conseille les parties prenantes sur l'architecture et la dette technique.",
        present: true,
      },
      {
        role: 'Conférencier, Business & Data Analytics',
        org: 'University of Huddersfield',
        dates: "janv. 2023 – aujourd'hui",
        location: 'Huddersfield, Angleterre',
        body: "J'enseigne la business intelligence, la data science et l'analyse statistique à des étudiants de master, et j'encadre des projets de recherche appliquée en data et machine learning. Enseignant accrédité SAP (SAP University Alliances), j'enseigne la gestion des données de référence et le cycle complet S/4HANA Sales & Distribution, des données de référence aux documents financiers.",
        present: true,
      },
      {
        role: 'Ingénieur analytics & planification',
        org: 'Ooredoo',
        dates: 'oct. 2020 – août 2021',
        location: 'Alger, Algérie',
        body: "J'ai construit et suivi des KPI de performance réseau qui ont réduit les réclamations externes de 15\u202F%, automatisé les tableaux de bord et le reporting avec Python, Pandas et Power BI, et conçu la base de données interne qui a rendu l'historique des changements réseau traçable et cohérent.",
      },
      {
        role: 'Ingénieur IP',
        org: 'Huawei Technologies',
        dates: 'mai 2020 – oct. 2020',
        location: 'Alger, Algérie',
        body: 'Études techniques et low-level designs pour la modernisation du réseau FAI algérien\u202F; configuration et déploiement de routeurs NE40E, de commutateurs S12700 et de serveurs NCE\u202F; supervision des équipes de sous-traitants.',
      },
      {
        role: 'Ingénieur informatique',
        org: 'AGENOR',
        dates: 'oct. 2018 – mai 2020',
        location: 'Alger, Algérie',
        body: "Reporting BI avec Excel et SQL pour les ventes et la finance\u202F; infrastructure multisite centralisée avec accès VPN et sécurité des données renforcée\u202F; rédaction de la charte informatique et des politiques de gouvernance de l'entreprise.",
      },
    ],
  },
};
