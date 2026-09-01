---
title: GC Design System Migration Issue Map
description: Relationship between the GCDS migration epic, discovery issues, implementation phases, branches, and completion conditions.
toc: true
---

## What Is Now In Place

- Migration epic issue: [Plan migration from WET to GC Design System (discovery + phased implementation plan) #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
- Discovery sub-issues:
  - [Inventory WET dependencies across templates, assets, CSS, and JS #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771)
  - [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772)
  - [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773)
  - [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774)
  - [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775)
  - [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776)

## Epic

- [Plan migration from WET to GC Design System (discovery + phased implementation plan) #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)

## Discovery Issues

- [Inventory WET dependencies across templates, assets, CSS, and JS #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771)
- [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772)
- [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773)
- [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774)
- [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775)
- [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776)

## Recommended Execution Order

1. #771
2. #772
3. #773
4. #774
5. #775
6. #776

## Migration Phases

The [GCDS Phased Implementation Plan]({{ pathPrefix }}/en/gcds-phased-implementation-plan/) defines the proposed child-issue backlog. Issue numbers will be added after the backlog is approved and the issues are created.

1. Discovery
2. Foundation
3. Shell
4. Components
5. Behavior
6. Cleanup
7. QA and production cutover

## Project Setup Expectations

- Milestone: `GCDS Migration`
- Project: `GCDS Migration` (GitHub Projects v2)
- Status field baseline:
  - Epic #770: In Progress (Discovery)
  - Discovery issues: Backlog (move to In Progress one at a time)
  - Approved implementation child issues: Backlog
  - Active sequential work package: In Progress

## Branch and PR Expectations

- Base integration branch: `migration/gcds`
- Discovery and implementation branches created from `migration/gcds`
- Push migration branches only to `upstream`
- PRs target `migration/gcds`
- Final PR targets `main`
- Keep one active migration feature PR at a time

## Done Condition for Discovery

Discovery is complete when #771-#776 artifacts are accepted and the child backlog is approved. Closing or moving issue #770 requires a separate decision.

## Done Condition for Migration

Migration is complete when all approved implementation child issues meet their definitions of done, PR #778 is explicitly approved and merged, production verification passes, and deferred exceptions have owners and follow-up issues.
