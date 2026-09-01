---
title: GC Design System Migration Inventory
description: Inventory of WET and GCWeb dependency hotspots, shared structures, reusable patterns, and completed migration discovery artifacts.
toc: true
---

<!-- cspell:ignore skipnav pagedetails lightbox -->

## Purpose

Track current WET/GCWeb dependency hotspots and the reusable structures affected by migration.

## What Is Now In Place

- Migration epic issue: [Plan migration from WET to GC Design System (discovery + phased implementation plan) #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
- Discovery sub-issues:
  - [Inventory WET dependencies across templates, assets, CSS, and JS #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771)
  - [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772)
  - [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773)
  - [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774)
  - [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775)
  - [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776)

## Detailed Inventories

- [WET/GCWeb Dependency Inventory]({{ pathPrefix }}/en/gcds-wet-dependency-inventory/) - complete file-by-file inventory of every WET, GCWeb, Bootstrap 3, and FontAwesome dependency (#771)
- [Shared Template Inventory]({{ pathPrefix }}/en/gcds-shared-template-inventory/) - shared layouts, partials, macros, data contracts, reuse relationships, and shell-critical classifications (#772)
- [WET-to-GCDS Component Map]({{ pathPrefix }}/en/gcds-component-map/) - direct, composed, native, and no-equivalent mappings with implementation priorities (#773)
- [No-Direct-Replacement Analysis]({{ pathPrefix }}/en/gcds-no-direct-replacement-analysis/) - redesign options, accessibility requirements, recommendations, risks, and relative effort for patterns without complete GCDS replacements (#774)
- [GCDS Delivery Strategy]({{ pathPrefix }}/en/gcds-delivery-strategy/) - incremental branch and review workflow, atomic shell milestone, content-last sequencing, quality gates, cutover, and rollback decision (#775)
- [GCDS Phased Implementation Plan]({{ pathPrefix }}/en/gcds-phased-implementation-plan/) - seven implementation phases and a proposed 16-item child backlog with dependencies, risk, completion criteria, and verification (#776)

## High-Impact WET Dependency Hotspots

- `src/_includes/partials/head.njk`
  - WET theme CSS includes
- `src/_includes/layouts/base.njk`
  - WET JS includes and shell-level script initialization
- `src/index.html`
  - splash page WET includes and randomizer behavior

## Shared Shell Templates Affected

- `src/_includes/layouts/base.njk`
- `src/_includes/layouts/home.njk`
- `src/_includes/partials/head.njk`
- `src/_includes/partials/header.njk`
- `src/_includes/partials/lang.njk`
- `src/_includes/partials/breadcrumbs.njk`
- `src/_includes/partials/footer.njk`
- `src/_includes/partials/skipnav.njk`
- `src/_includes/partials/pagedetails.njk`

## Reusable Components and Patterns Affected

- `src/_includes/partials/collectionsMain.njk`
- `src/_includes/partials/role-group-sections.njk`
- `src/_includes/partials/pageList.njk`
- `src/_includes/partials/pageListTable.njk`
- `src/_includes/partials/analytics-chart.njk`
- `src/_includes/partials/archived.njk`
- `src/_includes/partials/office-toc.njk`
- `src/_includes/information-and-communication-technology-ict-accessibility-requirements/scope.njk`

## Known WET Behaviors In Use

- overlays and modal panels
- tag-based filtering
- enhanced tables
- equal-height grids
- footnotes
- lightbox popup behavior
- chart behavior wrappers
- in-view behavior for alerts/banners
- splash randomizer

## Custom CSS Coupled to WET Patterns

- `src/_scss/custom.scss`
  - includes GCWeb/WET extension behavior and utility-class-based styling assumptions

## Mapping Status

- The component mapping for [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773) is complete.
- The redesign analysis for [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774) is complete.
- The delivery decision for [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775) is documented.
- The proposed backlog for [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776) is documented and awaits approval before child issues are created.

## Notes

The discovery artifacts for [WET dependencies #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771), [shared templates #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772), [component mapping #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773), [no-direct-replacement analysis #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774), [delivery strategy #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775), and [phased implementation plan #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776) are documented. Child issue creation follows approval of the #776 backlog.
