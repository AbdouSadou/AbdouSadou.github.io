---
title: 'Data Governance Platform'
outcome: 'An end-to-end governance platform on French open data, where every rule is enforced by a test rather than written in a policy.'
stack: ['PostgreSQL', 'dbt', 'OpenMetadata', 'Soda']
year: '2026'
order: 2
screenshots:
  - src: '../screens/gouvernance-lignage.png'
    alt: 'End-to-end lineage graph in OpenMetadata, from the ingestion pipeline through the raw, staging and mart layers to the price indicator, with column-level links expanded'
    caption: 'FIG 01 · lineage · from the open data file to the indicator, at column level · public open data'
  - src: '../screens/gouvernance-glossaire.png'
    alt: 'French business glossary in OpenMetadata showing hierarchical terms for property transactions, companies and governance, with linked data assets'
    caption: 'FIG 02 · business glossary · 40 French terms linked to real columns · public open data'
  - src: '../screens/gouvernance-classification.png'
    alt: 'Column list of the establishment dimension with sensitivity and GDPR labels, showing masked personal data alongside public columns'
    caption: 'FIG 03 · classification · GDPR and sensitivity labels per column · public open data'
---

## Context

Data is only worth something when five questions have answers: what does it mean, who is accountable for it, where does it come from, how good is it, and what are we allowed to do with it. In most organisations those answers exist — scattered across a spreadsheet, three people's memory, and a wiki nobody has opened since the migration. I wanted to build the opposite, on data anyone can check: French property transactions, the national business register and the official geographic code.

## My role

Everything: specification, modelling, implementation and the governance documents themselves. Data owner and data steward on paper, data engineer in practice — which is exactly the cumulation a real organisation should avoid, and which the RACI in the charter describes as the target model rather than the reality of a solo project.

## Approach

1. Started with roles, the business glossary and the classification — not with pipelines. What the data means comes before how it moves.
2. Loaded three open datasets idempotently, recording for each file its resolved URL, licence, checksum and applied scope, so any figure can be traced back to its source.
3. Modelled in dbt across staging, intermediate and mart layers, documenting every model and every column in French, and made an undocumented column impossible to merge.
4. Encoded the GDPR rule as a single macro backed by four blocking tests, rather than as a paragraph in a policy.
5. Split quality across three tiers with one rule per tier — structural checks that block a build, observability that trends over time, and business rules a data owner can amend without writing SQL.

## Governance decisions

- **The masking rule lives in one place.** A single dbt macro carries the SIRENE *diffusion partielle* logic, so a DPO can review the whole rule without reading the project's SQL. Four tests at error severity make a leak unpublishable.
- **Stricter than the source, deliberately.** The statistics office keeps publishing precise geolocation for units that objected to disclosure — for a sole trader, that is a home address. The platform strips it, and the decision is written down with its reasoning.
- **The catalogue is the product, so documentation is a gate.** Every mart column carries a French description, and continuous integration fails if one is missing. Coverage is not an aspiration measured quarterly; it is a build condition.
- **Lineage starts at the source file, not at the database.** The ingestion pipelines are declared as catalogue entities, so the graph answers "where does this number come from" all the way back to the published open data file.
- **A control that has never caught anything is an assumption.** A reproducible drill injects a corrupted batch and requires both the transformation tests and the business rules to fail, then recover.

## Outcome

129 catalogued assets; 100% of mart columns documented, owned and assigned to a domain; a 40-term French glossary linked to real columns; 142 classification labels across 71 columns; 117 dbt nodes including four blocking GDPR controls; 26 business checks in Soda.

The result I did not expect was the incident drill catching me out. Its first version passed — the defects I had injected only tripped warning-level thresholds, so nothing blocked. The exercise reported it honestly, and I rebuilt the scenario against blocking controls. A governance dispositive that has never failed on purpose has not been tested, only described.

The code is public: [github.com/AbdouSadou/plateforme-gouvernance-donnees](https://github.com/AbdouSadou/plateforme-gouvernance-donnees). `make demo` reproduces the whole chain on synthetic fixtures in about ten minutes, offline.
