---
title: GC Design System Migration Plan
description: Overview of the scope, phases, quality gates, and delivery approach for migrating the Digital Accessibility Toolkit to GCDS.
toc: true
---

<!-- cspell:ignore lightbox -->

## Overview

This plan defines how the Digital Accessibility Toolkit will migrate from [WET/GCWeb](https://wet-boew.github.io/GCWeb/index-en.html) patterns to the [GC Design System](https://design-system.canada.ca/en/). The [GCDS Delivery Strategy]({{ pathPrefix }}/en/gcds-delivery-strategy/) records the controlling decision: incremental development and review on `migration/gcds`, a parallel shell during implementation, and one final production cutover.

The [GC Design System](https://design-system.canada.ca/en/) is the Government of Canada's new standard for web interfaces and will eventually replace the current [WET/GCWeb](https://wet-boew.github.io/GCWeb/index-en.html) approach.

## What Is Now In Place

- Migration epic issue: [Plan migration from WET to GC Design System (discovery + phased implementation plan) #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
- Discovery sub-issues:
  - [Inventory WET dependencies across templates, assets, CSS, and JS #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771)
  - [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772)
  - [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773)
  - [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774)
  - [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775)
  - [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776)
- Planning documentation added:
  - [GC Design System Migration Plan]({{ pathPrefix }}/en/gcds-migration-plan/)
  - [GC Design System Migration Inventory]({{ pathPrefix }}/en/gcds-migration-inventory/)
  - [GC Design System Migration Issue Map]({{ pathPrefix }}/en/gcds-migration-issue-map/)
  - [GC Design System Implementation Decisions]({{ pathPrefix }}/en/gcds-implementation-decisions/)
  - [GCDS Delivery Strategy]({{ pathPrefix }}/en/gcds-delivery-strategy/)
  - [GCDS Phased Implementation Plan]({{ pathPrefix }}/en/gcds-phased-implementation-plan/)
- Migration tracking PR: [GCDS migration tracking branch: migration/gcds -> main #778](https://github.com/gc-da11yn/gc-da11yn.github.io/pull/778)

## Key References

- [WET/GCWeb (current framework)](https://wet-boew.github.io/GCWeb/index-en.html)
- [GC Design System (target framework)](https://design-system.canada.ca/en/)

## Scope

- Keep Eleventy architecture in place.
- Replace shared shell and reusable components first.
- Remove WET dependencies in stages.
- Preserve bilingual behavior, accessibility quality, and existing content structure.

## Branch and PR Strategy

- Long-lived integration branch: `migration/gcds`
- Feature branches: `feature/gcds-<short-task-name>` created from `migration/gcds`
- Push migration and feature branches only to `upstream`.
- Feature PR target: `migration/gcds`
- Complete and review one migration feature PR before starting the next work package.
- Rebase `migration/gcds` onto `upstream/main` before each new work package.
- Final cutover PR: `migration/gcds` -> `main`
- Netlify deploy previews are used throughout migration for validation.
- Production remains on WET until the final cutover.

## Phases

The [GCDS Phased Implementation Plan]({{ pathPrefix }}/en/gcds-phased-implementation-plan/) is the canonical source for child-issue scope, dependencies, risk, completion criteria, and verification.

### 1. Discovery

- Confirm WET dependency inventory and template/component inventory.
- Finalize component mapping, no-direct-replacement analysis, delivery strategy, and implementation backlog.

### 2. Foundation

- Pin GCDS versions.
- Add an isolated parallel layout and English/French preview fixtures.
- Keep normal site output on WET.

### 3. Shell

- Build a parallel GCDS shell without changing the default layout or content files.
- Migrate header/navigation, footer, and page-shell groups in sequential pull requests.
- Complete a shell milestone review before shared component work.

### 4. Components

- Migrate notices, archived state, secondary navigation, downloads, contribution UI, and recurring page-family templates.

### 5. Behavior

- Replace overlays, filtering, enhanced tables, clauses references, footnotes, and chart behavior using the approved redesign decisions.
- Preserve native content and task baselines where practical.

### 6. Cleanup

- Migrate the language-selection and not-found pages.
- Migrate residual WET-dependent markup in bilingual content pairs after templates and behaviors are stable.
- Remove WET/GCWeb CSS/JS includes and class-level dependencies.
- Remove transitional compatibility code no longer needed.

### 7. QA and Cutover

- Run build, spellcheck, and link checks.
- Validate bilingual routing/toggle behavior.
- Run accessibility checks and manual regression checks.
- Merge final PR from `migration/gcds` to `main` only after explicit approval.

## QA Gates Per Phase

- Build passes (`npm run build`)
- Spellcheck passes (`npm run spellcheck`)
- Link-check baseline completed (`npm run link-check-quick`)
- Accessibility checks completed for changed templates/components
- EN/FR toggle and path behavior verified

## Risks and Mitigations

- Accessibility behavior regressions in plugin replacement
  - Mitigation: replace behavior in small PRs with focused validation.
- Bilingual URL/toggle regressions
  - Mitigation: test EN/FR page pairs for every shell or routing change.
- Visual regressions from utility class replacement
  - Mitigation: template-by-template visual checks in Netlify previews.

## Related Issues

- Epic: [Plan migration from WET to GC Design System (discovery + phased implementation plan) #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
- Discovery sub-issues:
  - [Inventory WET dependencies across templates, assets, CSS, and JS #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771)
  - [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772)
  - [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773)
  - [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774)
  - [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775)
  - [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776)
