# GC Design System Migration Inventory

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
- Discovery mapping remains tracked in [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773).
- No-1:1 replacement analysis remains tracked in [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774).

## Notes
This inventory is a working baseline and should be updated as [Inventory WET dependencies across templates, assets, CSS, and JS #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771) and [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772) are completed.
