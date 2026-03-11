# GC Design System Migration Plan

## Overview
This plan defines how the Digital Accessibility Toolkit will migrate from WET/GCWeb patterns to the GC Design System with a controlled, incremental approach.

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
  - [GC Design System Migration Plan](gcds-migration-plan.md)
  - [GC Design System Migration Inventory](gcds-migration-inventory.md)
  - [GC Design System Migration Issue Map](gcds-migration-issue-map.md)

## Scope
- Keep Eleventy architecture in place.
- Replace shared shell and reusable components first.
- Remove WET dependencies in stages.
- Preserve bilingual behavior, accessibility quality, and existing content structure.

## Branch and PR Strategy
- Long-lived integration branch: `migration/gcds`
- Feature branches: `feature/gcds-<short-task-name>` created from `migration/gcds`
- Feature PR target: `migration/gcds`
- Final cutover PR: `migration/gcds` -> `main`
- Netlify deploy previews are used throughout migration for validation.

## Phases
1. Discovery
- Confirm WET dependency inventory and template/component inventory.
- Finalize component mapping and no-1:1 redesign list.

2. Shell
- Migrate global shell templates and wrappers:
  - head
  - header
  - language toggle wrapper
  - breadcrumbs
  - footer
  - skip nav
  - date modified wrapper

3. Components
- Migrate shared cards, alerts, list/table wrappers, and other reusable partials.

4. Behaviors
- Replace interactive WET behaviors in priority order:
  - overlays/modals
  - tag filtering
  - enhanced tables
  - charts
  - splash randomizer
  - footnotes/lightbox patterns

5. Cleanup
- Remove WET/GCWeb CSS/JS includes and class-level dependencies.
- Remove transitional compatibility code no longer needed.

6. QA and Cutover
- Run build, spellcheck, and link checks.
- Validate bilingual routing/toggle behavior.
- Run accessibility checks and manual regression checks.
- Merge final PR from `migration/gcds` to `main`.

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
