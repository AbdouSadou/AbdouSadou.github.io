---
title: 'Decision Tree Builder'
outcome: 'A decision-support tool where nothing malformed gets in: strict validation, interactive evaluation, full edit history.'
stack: ['Next.js', 'TypeScript']
year: '2024'
order: 4
demo: 'https://abdousadou.github.io/es_builder_clone/'
---

## Context

Decision logic tends to live in slide decks and spreadsheets, where it cannot be tested and is rarely kept current. I wanted a tool where a decision tree is a real data structure: something you can validate, evaluate interactively and export.

## My role

My second solo product: I designed and built it end to end in Next.js and TypeScript.

## Approach

1. Modelled the tree as a strict data structure first, so every later feature had a defined shape to work against.
2. Built import validation covering type, structure, depth and volume: malformed input is rejected at the boundary with a precise reason.
3. Added interactive evaluation, so a tree can be walked question by question instead of read as a diagram.
4. Finished with an undo/redo edit history and export to JSON, TXT and DOC.

## Governance decisions

- **Validation before entry.** Nothing joins the model until it passes the type, structure, depth and volume checks: the same at-the-gate principle I apply to enterprise pipelines, scaled down.
- **Declared limits.** Depth and volume ceilings are explicit, rather than discovered at the point of failure.
- **Recoverable edits.** The undo/redo history means no destructive change is final; user error is assumed and designed for.
- **Portable outputs.** JSON, TXT and DOC export keeps the user's decision logic theirs. No lock-in.
- **Invariants in the type system.** TypeScript carries the structure's rules, so an invalid tree is unrepresentable rather than merely unlikely.

## Outcome

The second of two products I have designed, built and shipped end to end, solo. Small on purpose, and a compact demonstration of the principle behind the larger systems: decide what valid means, then enforce it at the gate.
