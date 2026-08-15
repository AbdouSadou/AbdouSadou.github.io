---
title: 'Company Reference Data'
outcome: 'A golden-record master built on a deliberately corrupted CRM whose answer key I hold: F1 of 0.977 and SIRET completeness lifted from 60% to 99.5% — measured, not asserted.'
stack: ['Python', 'Splink', 'DuckDB', 'PostgreSQL', 'Streamlit']
year: '2026'
order: 3
screenshots:
  - src: '../screens/mdm-precision-rappel.png'
    alt: 'Precision, recall and F1 curves plotted from 0.50 to 0.95, with a vertical line marking the chosen automatic matching threshold of 0.85'
    caption: 'FIG 01 · threshold policy · the precision/recall trade-off that justifies the chosen threshold · reduced test set'
  - src: '../screens/mdm-completude-siret.png'
    alt: 'Bar chart comparing SIRET completeness before consolidation, after consolidation in raw terms, and after consolidation across matchable rows only'
    caption: 'FIG 02 · enrichment · SIRET completeness before and after, raw and across matchable rows · reduced test set'
  - src: '../screens/mdm-regles-survivance.png'
    alt: 'Horizontal bar chart of the survivorship rules actually triggered, from consensus down to best geocoding score'
    caption: 'FIG 03 · survivorship · which rule actually chose each value, counted over 4,485 attribute decisions · reduced test set'
---

## Context

A CRM holds the same company several times over, spelled differently each time: accents lost on import, `BD` for `BOULEVARD`, `S.A.R.L.` for `SARL`, and the company registration number missing six times out of ten. Master data management is the work of deciding which value is the right one — and being able to justify that field by field.

The hard part of demonstrating this is not technical, it is epistemic: **you cannot prove it works**. "I merged twelve thousand duplicates" — merged against what? With no known answer, a deduplication rate is just a count of rows that disappeared, and an over-aggressive model produces exactly the same count as a good one.

So I inverted the problem. Rather than hunting for a dirty dataset, I manufacture one: I sample real establishments from the French national business register, duplicate them, degrade them with operators whose rates I control, and keep the answer key quarantined. Every figure published here is measured against it.

## My role

Everything, as with the governance platform: specification, matching model design, implementation, the governance documents, and the evaluation itself — which is to say the role an organisation normally gives a data steward and the one it gives a data engineer, held by the same person. It is also why the quarantine on the ground truth is enforced by a test rather than by my discipline: when you write both the model and its examination, the separation cannot rest on good faith.

## Approach

1. **Manufacture the mess before cleaning it.** Nine corruption operators, each a pure function tested on its own: typos landing on adjacent AZERTY keys, stripped accents, abbreviated street types, legal-form variants, registration numbers missing, wrong or transposed, seven phone layouts. The achieved rates are reported against the configured ones on every run.
2. **Standardise both sides through the same functions.** Register and CRM go through identical code and the same geocoding service. An asymmetry here would surface downstream as a missed match that no amount of training recovers — and would stay invisible: the model would simply look mediocre.
3. **Match in two passes.** Deterministic first: a registration number whose check digit holds and which exists in the register matches for free. Then probabilistic, on what remains. The first pass doubles as a guard rail for the second — those pairs are labelled examples obtained without ever consulting the answer key.
4. **Let values survive by rule, not by table precedence.** Each attribute carries its own ordered rule list; the first rule that discriminates wins, and its name is written to the log.
5. **Make the review band arbitrable.** Between 0.50 and 0.85 the model is neither confident enough to merge nor confident enough to reject. A console puts the fields side by side and records the decision, which is then replayable.

## Governance decisions

- **The ground truth is isolated physically, not by convention.** It lives in its own file, its path is written in exactly one module, and a test parses the syntax tree of every file in the project to fail if anything else imports it. A "please don't read this table" instruction survives neither a refactor nor an audit; this one is a red line in continuous integration.
- **The synthetic CRM is drawn only from publicly diffusible rows.** The statistics institute publishes some establishments under partial diffusion: their owners objected to redistribution. The governance platform loads them and masks them downstream; here I do not load them at all, because this project *derives* records from those rows. Manufacturing fictitious customers out of data somebody opted out of would be indefensible, however synthetic the result. Filtering at the source makes it impossible rather than merely forbidden.
- **A wrong registration number is worth less than none.** An identifier that fails its check digit is not kept as an identifier: it would produce a confident deterministic match that is wrong — an error wearing the appearance of certainty.
- **A steward's rejection is applied before clustering, not after.** Clustering is transitive: a rejected pair re-joined through a third record would make human arbitration decorative. Cutting the edge first is the only way the refusal means anything.
- **The chosen threshold is not the F1 optimum, and that is written down.** The maximum sits at 0.90 on the test set; I keep 0.85, which feeds a wider review band. A threshold tuned to maximise a metric on its own measurement set is an overfitted threshold.

## Outcome

F1 of **0.977** at the chosen threshold (precision 0.973, recall 0.981), cluster purity of **0.992**, and **0.00%** residual duplicates: 345 golden records for 347 genuinely distinct entities. Registration-number completeness rises from **60.1% to 99.5%** across matchable rows. All 47 pure-noise rows — prospects matching no company in the register — were left isolated. Two runs from a clean state produce identical counts, and continuous integration checks it.

Two results did not please me at the time, and they are the ones I keep.

The first: my initial version topped out at F1 0.787 and I assumed a threshold problem. Recall, however, was **flat at 0.947 across the entire range from 0.50 to 0.90** — and recall that does not move when you lower the threshold is not saying "the threshold is wrong", it is saying "these pairs are never scored at all". The defect was upstream, in the blocking rules. Twenty true pairs never reached the model. No threshold would have brought them back.

The second: I was comparing addresses by edit distance over the whole line, which scores `12 RUE DE RIVOLI` and `18 RUE DE RIVOLI` one edit apart — two different buildings counted as the same address. Separating the number, compared exactly, from the street, compared approximately, moved F1 from 0.787 to 0.971. A single wrong assumption about one field was costing thirty points of precision.

One figure remains that I deliberately do not maximise. Raw completeness tops out at 89.6%, and that is correct: ten per cent of the rows have no counterpart in the register at all. Giving them a registration number would be an error — precisely the one measured on the line above, at one hundred per cent. A good quality indicator is not one you push towards one.

The code is public: [github.com/AbdouSadou/referentiel-entreprises-mdm](https://github.com/AbdouSadou/referentiel-entreprises-mdm). `make demo-small` replays the whole chain offline in about a minute on synthetic test data, and writes the report that produced the figures above.
