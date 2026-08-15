---
title: 'Network Change Registry'
outcome: 'Traceable, consistent network-change history, feeding the KPI programme that cut external complaints by 15%.'
stack: ['Oracle', 'SQL', 'Python', 'Power BI']
year: '2020–2021'
order: 6
confidential: true
---

## Context

In a mobile network, configuration changes land daily, from many hands. Without a single record of what changed, where and when, every performance investigation starts with archaeology, and undocumented changes surface later as customer complaints.

## My role

As Analytics & Planning Engineer at Ooredoo, I designed the internal database that centralised network-change tracking, and built the network-performance KPIs and reporting on top of it.

## Approach

1. Mapped how changes were actually being recorded across teams, and where history was being lost.
2. Designed a SQL schema that centralised change tracking: one registry, controlled fields, one consistent structure.
3. Built network-performance KPIs on Oracle DB, read against the change history.
4. Automated the dashboards and reporting with Python, Pandas and Power BI, so the numbers arrived without manual assembly.

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
  <figcaption class="mono text-lo">FIG 01 · pattern-level view · one registry, many consumers · client specifics removed</figcaption>
</figure>

## Governance decisions

- **One registry, not many spreadsheets.** A single source of truth for change history is the precondition for every other control.
- **Controlled fields.** Consistent structure and constrained values cut errors and duplicates at the point of entry, the cheapest place to fix them.
- **Traceability as the product.** Every change carries enough context (what, where, when) to be found again; troubleshooting becomes lookup rather than recollection.
- **Documentation inside the workflow.** Recording a change is part of making it, not an afterthought to chase later.

## Outcome

The KPI programme this fed cut external complaints by 15%. Change history became traceable and consistent, documentation improved, and errors and duplicates fell: the quiet, structural work the visible number depended on.
