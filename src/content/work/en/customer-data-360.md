---
title: 'Customer Data 360'
outcome: 'High-volume customer data made reliable: quality controls and dashboards that sharpened market segmentation.'
stack: ['Python', 'Spark', 'SQL', 'Power BI']
year: '2023–present'
order: 4
confidential: true
---

## Context

One1Star Solutions works with high-volume customer data drawn from several sources, and volume multiplies every quality problem: duplicates, conflicting fields, gaps, drift. Before that data could drive market segmentation, it had to be made reliable.

## My role

As data consultant, I lead the workstream end to end: collection, cleaning, reliability controls, and the analytics and dashboards built on top.

## Approach

1. Mapped the sources and defined, field by field, what reliable means: types, formats, accepted values and owners.
2. Automated collection and cleaning in Python, with Spark where volumes demanded distributed processing.
3. Built quality and consistency controls into the pipeline itself, so records are checked on entry rather than discovered broken downstream.
4. Delivered Power BI dashboards for market segmentation, and automated the consumer-behaviour analysis behind them.

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
  <figcaption class="mono text-lo">FIG 01 · pattern-level view · client specifics removed</figcaption>
</figure>

## Governance decisions

- **Rules, not folklore.** Every quality control traces to a written rule with a named owner; data quality survives staff changes only when it is documented.
- **Checked at the boundary.** Records that fail validation are flagged and resolved, never silently passed through; a dashboard built on unchecked data is decoration.
- **Access and usage discipline.** Who may see and use customer data is defined and enforced, in line with the GDPR-compliant procedures I write for the firm.
- **Minimisation in analytics.** Analytical layers carry the minimum personal data the analysis needs; segmentation does not require identification.

## Outcome

The dashboards sharpened market segmentation because the data beneath them could be trusted, and the controls keep it that way as new data arrives. This case describes methods and patterns only; the confidentiality is part of the work.
