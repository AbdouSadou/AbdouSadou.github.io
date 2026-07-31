// Hero strings (src/components/Hero.astro). The `en` values are the live
// site copy extracted verbatim — do not edit them here without editing the
// site's voice on purpose. System/mono tokens deliberately stay English in
// both locales: the record head key, the data-field attribute values (they
// are CSS/JS hooks, set in the component), NULL, and most dirty-duplicate
// fragments, which read as raw catalogue output.
import type { Locale } from './index';

/** One line of a dirty duplicate card; `nullToken` renders the styled NULL <em>. */
export type DupeLine = string | { pre: string; nullToken: true };

interface Strings {
  eyebrow: string;
  h1: string;
  sub: string;
  ctaWork: string;
  ctaCv: string;
  /** Small line under the CV button, e.g. 'CV.pdf · EN' */
  ctaCvSub: string;
  /** sr-only label of the invisible full-card replay button */
  replayLabel: string;
  cueLabel: string;
  /** Record card head key — system token, identical in both locales */
  recordHead: string;
  record: {
    roleKey: string;
    roleValue: string;
    locationKey: string;
    locationValue: string;
    specialismsKey: string;
    specialismsValue: string;
    statusKey: string;
    statusValue: string;
  };
  /**
   * Candidate values each conflict row flickers through during the GSAP
   * sequence. Server-rendered into data-conflict-values so the single JS
   * bundle serves both locales.
   */
  conflicts: {
    role: readonly string[];
    location: readonly string[];
    status: readonly string[];
  };
  /** Six decorative duplicate cards (aria-hidden), three lines each. */
  dupes: ReadonlyArray<readonly DupeLine[]>;
}

export const t: Record<Locale, Strings> = {
  en: {
    eyebrow: 'Data consultant & university lecturer · West Yorkshire, UK',
    h1: 'One version of the truth.',
    sub: "I'm Abdou Sadou. I help organisations govern, clean and use their data with confidence: governance frameworks, master data, GDPR-compliant procedures, and the pipelines and dashboards that put them to work.",
    ctaWork: 'See selected work',
    ctaCv: 'Download CV',
    ctaCvSub: 'CV.pdf · EN',
    replayLabel: 'Replay the golden record animation',
    cueLabel: 'SCROLL',
    recordHead: 'PERSON · abdou_sadou',
    record: {
      roleKey: 'role',
      roleValue: 'Data consultant & lecturer',
      locationKey: 'location',
      locationValue: 'West Yorkshire, United Kingdom',
      specialismsKey: 'specialisms',
      specialismsValue: 'governance · MDM · BI · big data',
      statusKey: 'status',
      statusValue: 'VERIFIED',
    },
    conflicts: {
      role: ['Data Analyst', 'BI Consultant', 'Lecturer'],
      location: ['Algiers', 'west yorks'],
      status: ['unverified', 'NULL'],
    },
    dupes: [
      ['name: ABDOU S.', 'role: Data Analyst', 'since: 12/03/2021'],
      ['id: a.sadou', 'loc: west yorks', 'status: unverified'],
      ['name: Sadou, Abderrahmane', 'role: BI Consultant', 'updated: 2021-03-12'],
      ['name: abdou sadou', { pre: 'role: ', nullToken: true }, 'loc: Algiers'],
      ['id: A_SADOU', 'specialism: mdm', 'location:'],
      ['id: sadou_m_a', 'role: Lecturer', 'since: 03-12-21'],
    ],
  },
  fr: {
    eyebrow: 'Consultant data & conférencier · West Yorkshire, Royaume-Uni',
    h1: 'Une seule version de la vérité.',
    sub: "Je suis Abdou Sadou. J'aide les organisations à gouverner, nettoyer et exploiter leurs données en toute confiance\u202F: cadres de gouvernance, données de référence, procédures conformes au RGPD, et les pipelines et tableaux de bord qui les mettent en œuvre.",
    ctaWork: 'Voir les travaux',
    ctaCv: 'Télécharger le CV',
    ctaCvSub: 'CV.pdf · FR',
    replayLabel: "Rejouer l'animation",
    cueLabel: 'DÉFILER',
    recordHead: 'PERSON · abdou_sadou',
    record: {
      roleKey: 'rôle',
      roleValue: 'Consultant data & conférencier',
      locationKey: 'localisation',
      locationValue: 'West Yorkshire, Royaume-Uni',
      specialismsKey: 'spécialités',
      specialismsValue: 'gouvernance · MDM · BI · big data',
      statusKey: 'statut',
      statusValue: 'VÉRIFIÉ',
    },
    conflicts: {
      // Legacy-source flavour: one raw English survivor, the rest localized.
      role: ['Data Analyst', 'Consultant BI', 'Conférencier'],
      location: ['Alger', 'west yorks'],
      status: ['non vérifié', 'NULL'],
    },
    dupes: [
      ['name: ABDOU S.', 'role: Analyste', 'since: 12/03/2021'],
      ['id: a.sadou', 'loc: west yorks', 'status: unverified'],
      ['name: Sadou, Abderrahmane', 'role: Consultant BI', 'maj: 2021-03-12'],
      ['name: abdou sadou', { pre: 'role: ', nullToken: true }, 'loc: Alger'],
      // Accent-stripped on purpose — legacy exports drop diacritics.
      ['id: A_SADOU', 'specialite: mdm', 'location:'],
      ['id: sadou_m_a', 'role: Conférencier', 'since: 03-12-21'],
    ],
  },
};
