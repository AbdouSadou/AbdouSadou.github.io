---
title: 'Customer Data 360'
outcome: 'Des données clients volumineuses rendues fiables : contrôles de qualité et tableaux de bord qui ont affiné la segmentation du marché.'
stack: ['Python', 'Spark', 'SQL', 'Power BI']
year: '2023–aujourd''hui'
order: 3
confidential: true
---

## Contexte

One1Star Solutions travaille avec des données clients volumineuses issues de plusieurs sources, et le volume multiplie chaque problème de qualité : doublons, champs contradictoires, lacunes, dérive. Avant que ces données puissent piloter la segmentation du marché, il fallait les rendre fiables.

## Mon rôle

En tant que consultant data, je pilote le chantier de bout en bout : collecte, nettoyage, contrôles de fiabilité, ainsi que les analyses et tableaux de bord construits par-dessus.

## Démarche

1. J'ai cartographié les sources et défini, champ par champ, ce que fiable veut dire : types, formats, valeurs acceptées et responsables.
2. J'ai automatisé la collecte et le nettoyage en Python, avec Spark là où les volumes exigeaient un traitement distribué.
3. J'ai intégré les contrôles de qualité et de cohérence dans le pipeline lui-même, de sorte que les enregistrements sont vérifiés à l'entrée plutôt que découverts défectueux en aval.
4. J'ai livré des tableaux de bord Power BI pour la segmentation du marché et automatisé l'analyse du comportement des consommateurs qui les alimente.

<figure>
  <svg viewBox="0 0 640 250" aria-hidden="true" focusable="false" style="font-family: var(--font-mono); font-size: 11px;">
    <rect x="16" y="30" width="120" height="38" rx="6" style="fill: none; stroke: var(--chart-slate); stroke-width: 1.5;"/>
    <text x="76" y="53" text-anchor="middle" style="fill: var(--text-lo);">SRC_CRM</text>
    <rect x="16" y="106" width="120" height="38" rx="6" style="fill: none; stroke: var(--chart-slate); stroke-width: 1.5;"/>
    <text x="76" y="129" text-anchor="middle" style="fill: var(--text-lo);">SRC_WEB</text>
    <rect x="16" y="182" width="120" height="38" rx="6" style="fill: none; stroke: var(--chart-slate); stroke-width: 1.5;"/>
    <text x="76" y="205" text-anchor="middle" style="fill: var(--text-lo);">SRC_OPS</text>
    <path d="M136 49 C 190 49, 200 115, 248 117" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <path d="M136 125 L 248 125" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <path d="M136 201 C 190 201, 200 135, 248 133" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <rect x="248" y="100" width="144" height="50" rx="6" style="fill: none; stroke: var(--review); stroke-width: 1.5;"/>
    <text x="320" y="129" text-anchor="middle" style="fill: var(--text-lo);">QUALITY RULES</text>
    <path d="M392 125 L 452 125" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <rect x="452" y="76" width="172" height="98" rx="8" style="fill: var(--surface); stroke: var(--verified); stroke-width: 1.5;"/>
    <text x="468" y="102" style="fill: var(--text-hi);">CUSTOMER_360</text>
    <circle cx="600" cy="98" r="8" style="fill: none; stroke: var(--verified); stroke-width: 1.5;"/>
    <path d="M596.5 98 L 599 100.5 L 604 95.5" style="fill: none; stroke: var(--verified); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;"/>
    <line x1="468" y1="118" x2="608" y2="118" style="stroke: var(--line); stroke-width: 1;"/>
    <line x1="468" y1="138" x2="580" y2="138" style="stroke: var(--line); stroke-width: 1;"/>
    <line x1="468" y1="158" x2="596" y2="158" style="stroke: var(--line); stroke-width: 1;"/>
    <path d="M538 174 L 538 206" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <text x="538" y="228" text-anchor="middle" style="fill: var(--text-lo);">SEGMENTATION · POWER BI</text>
  </svg>
  <figcaption class="mono text-lo">FIG 01 · schéma de principe · spécificités client retirées</figcaption>
</figure>

## Décisions de gouvernance

- **Des règles, pas du folklore.** Chaque contrôle de qualité renvoie à une règle écrite avec un responsable nommé ; la qualité des données ne survit aux changements d'équipe que si elle est documentée.
- **Un contrôle à la frontière.** Les enregistrements qui échouent à la validation sont signalés puis résolus, jamais laissés passer en silence ; un tableau de bord construit sur des données non vérifiées est de la décoration.
- **Une discipline d'accès et d'usage.** Qui peut voir et utiliser les données clients est défini et appliqué, en accord avec les procédures conformes au RGPD que je rédige pour l'entreprise.
- **La minimisation dans l'analytique.** Les couches analytiques ne portent que le minimum de données personnelles dont l'analyse a besoin ; la segmentation n'exige pas l'identification.

## Résultat

Les tableaux de bord ont affiné la segmentation du marché parce que les données en dessous étaient dignes de confiance, et les contrôles les maintiennent ainsi à mesure que de nouvelles données arrivent. Cette étude de cas ne décrit que des méthodes et des patterns ; la confidentialité fait partie du travail.
