---
title: 'Inventara'
outcome: 'An inventory SaaS for the chemical industry, shipped end to end, solo, with governance built into the schema.'
stack: ['FastAPI', 'Next.js', 'PostgreSQL']
year: '2024–present'
order: 1
screenshots:
  - src: '../screens/inventara-dashboard.png'
    alt: 'Inventara dashboard showing stock value, products in stock, undocumented transactions, expiring lots and pending regularisations'
    caption: 'FIG 01 · dashboard · stock value, expiry and regularisation alerts · demo data'
  - src: '../screens/inventara-movements.png'
    alt: 'Inventara transaction log listing entries, exits and transfers with lot numbers, documentation status and regularisation state per movement'
    caption: 'FIG 02 · movement log · lot-level traceability and documentation status · demo data'
  - src: '../screens/inventara-exports.png'
    alt: 'Inventara reports page with CSV exports for transactions, current stock, expiring lots and the regularisation backlog'
    caption: 'FIG 03 · exports · expiring lots and regularisation backlog · demo data'
---

## Context

Chemical-industry inventory is unforgiving: materials arrive in batches, batches expire, and a stock error is a compliance problem before it is an accounting one. Most inventory tools treat those constraints as edge cases. Inventara is the product I designed and built for that reality: an inventory SaaS for the chemical industry, from schema to interface.

## My role

Everything: I designed, built and shipped the product alone. Data model, API, interface, and the operational decisions around backup and recovery.

## Approach

1. Modelled the master data first (products, third parties and warehouses) and agreed the lifecycle of each entity before writing any application code.
2. Built the API with FastAPI over PostgreSQL, keeping the integrity rules in the database where no client can bypass them.
3. Built the Next.js interface around the daily flows: goods in, goods out, batch allocation, movement history.
4. Tested the constraints deliberately, trying to break referential integrity before a user could.
5. Shipped end to end, then kept iterating.

## Governance decisions

- **Master data with lifecycle rules.** Products, third parties and warehouses are governed records: controlled value lists and lifecycle states prevent the duplicates and orphans that quietly corrupt inventory data.
- **Batch management with FEFO.** Every batch carries an expiry date, and allocation is first-expired-first-out; the system enforces the rule people are tempted to skip.
- **Traceability by design.** Integrity constraints are tested, and every stock movement is logged, so any quantity on screen can be explained by its history.
- **Backups that prove themselves.** Off-site backups are encrypted, and restore verification is automated: an untested backup is a hope, not a control.
- **Personal-data minimisation.** The schema stores the minimum personal data the system needs to operate, and nothing more.

## Outcome

Inventara is one of two data products I have designed, built and shipped end to end, solo. The governance here is not a policy document sitting beside the system; it is implemented in the schema, the constraints and the operations. Inventara is a commercial product, so its code stays private.
