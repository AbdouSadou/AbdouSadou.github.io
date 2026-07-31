---
title: 'Registre des changements réseau'
outcome: 'Un historique des changements réseau traçable et cohérent, alimentant le programme de KPI qui a réduit les réclamations externes de 15 %.'
stack: ['Oracle', 'SQL', 'Python', 'Power BI']
year: '2020–2021'
order: 4
confidential: true
---

## Contexte

Dans un réseau mobile, les changements de configuration arrivent chaque jour, et de bien des mains. Sans un enregistrement unique de ce qui a changé, où et quand, chaque investigation de performance commence par de l'archéologie, et les changements non documentés ressurgissent plus tard sous forme de réclamations clients.

## Mon rôle

En tant qu'ingénieur Analytics & Planning chez Ooredoo, j'ai conçu la base de données interne qui a centralisé le suivi des changements réseau, et construit par-dessus les KPI de performance réseau et le reporting.

## Démarche

1. J'ai cartographié la manière dont les changements étaient réellement enregistrés d'une équipe à l'autre, et les endroits où l'historique se perdait.
2. J'ai conçu un schéma SQL qui a centralisé le suivi des changements : un seul registre, des champs contrôlés, une structure cohérente.
3. J'ai construit les KPI de performance réseau sur Oracle DB, lus au regard de l'historique des changements.
4. J'ai automatisé les tableaux de bord et le reporting avec Python, Pandas et Power BI, pour que les chiffres arrivent sans assemblage manuel.

<figure>
  <svg viewBox="0 0 640 240" aria-hidden="true" focusable="false" style="font-family: var(--font-mono); font-size: 11px;">
    <rect x="16" y="24" width="112" height="38" rx="6" style="fill: none; stroke: var(--chart-slate); stroke-width: 1.5;"/>
    <text x="72" y="47" text-anchor="middle" style="fill: var(--text-lo);">TEAM_A</text>
    <rect x="16" y="100" width="112" height="38" rx="6" style="fill: none; stroke: var(--chart-slate); stroke-width: 1.5;"/>
    <text x="72" y="123" text-anchor="middle" style="fill: var(--text-lo);">TEAM_B</text>
    <rect x="16" y="176" width="112" height="38" rx="6" style="fill: none; stroke: var(--chart-slate); stroke-width: 1.5;"/>
    <text x="72" y="199" text-anchor="middle" style="fill: var(--text-lo);">TEAM_C</text>
    <path d="M128 43 C 185 43, 185 110, 240 112" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <path d="M128 119 L 240 120" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <path d="M128 195 C 185 195, 185 130, 240 128" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <rect x="240" y="60" width="184" height="120" rx="8" style="fill: var(--surface); stroke: var(--verified); stroke-width: 1.5;"/>
    <text x="256" y="86" style="fill: var(--text-hi);">CHANGE_REGISTRY</text>
    <circle cx="400" cy="82" r="8" style="fill: none; stroke: var(--verified); stroke-width: 1.5;"/>
    <path d="M396.5 82 L 399 84.5 L 404 79.5" style="fill: none; stroke: var(--verified); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;"/>
    <line x1="256" y1="100" x2="408" y2="100" style="stroke: var(--line); stroke-width: 1;"/>
    <text x="256" y="126" style="fill: var(--text-lo);">what · where · when</text>
    <text x="256" y="150" style="fill: var(--text-lo);">owner · status</text>
    <path d="M424 100 C 452 100, 460 85, 488 85" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <path d="M424 140 C 452 140, 460 155, 488 155" style="fill: none; stroke: var(--lineage); stroke-width: 1.5; opacity: 0.7;"/>
    <rect x="488" y="66" width="136" height="38" rx="6" style="fill: none; stroke: var(--chart-slate); stroke-width: 1.5;"/>
    <text x="556" y="89" text-anchor="middle" style="fill: var(--text-lo);">KPI DASHBOARDS</text>
    <rect x="488" y="136" width="136" height="38" rx="6" style="fill: none; stroke: var(--chart-slate); stroke-width: 1.5;"/>
    <text x="556" y="159" text-anchor="middle" style="fill: var(--text-lo);">CHANGE HISTORY</text>
  </svg>
  <figcaption class="mono text-lo">FIG 01 · schéma de principe · un registre, plusieurs consommateurs · spécificités client retirées</figcaption>
</figure>

## Décisions de gouvernance

- **Un registre, pas une multitude de feuilles de calcul.** Une source unique de vérité pour l'historique des changements est le préalable à tout autre contrôle.
- **Des champs contrôlés.** Une structure cohérente et des valeurs contraintes réduisent les erreurs et les doublons au point d'entrée, l'endroit le moins coûteux pour les corriger.
- **La traçabilité comme produit.** Chaque changement porte assez de contexte (quoi, où, quand) pour être retrouvé ; le dépannage devient une recherche plutôt qu'un effort de mémoire.
- **La documentation dans le flux de travail.** Enregistrer un changement fait partie de sa réalisation, ce n'est pas une corvée à réclamer après coup.

## Résultat

Le programme de KPI que ce registre alimentait a réduit les réclamations externes de 15 %. L'historique des changements est devenu traçable et cohérent, la documentation s'est améliorée, et les erreurs comme les doublons ont reculé : le travail structurel et discret dont le chiffre visible dépendait.
