# WET-to-GCDS Component Map

<!-- cspell:ignore inview lightbox pagedetails skipnav tagfilter -->

**Issue:** [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773)
**Epic:** [Plan migration from WET to GC Design System #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
**Branch:** `migration/gcds` - [GCDS migration tracking PR #778](https://github.com/gc-da11yn/gc-da11yn.github.io/pull/778)
**Date:** 2026-08-26
**Decision reference:** [Decision 001 - use native HTML for content, GCDS components for UI](gcds-implementation-decisions.md#decision-001-use-native-html-for-content-gcds-components-for-ui)

## Purpose

This map converts the completed [WET/GCWeb Dependency Inventory](gcds-wet-dependency-inventory.md) and [Shared Template Inventory](gcds-shared-template-inventory.md) into implementation guidance. It distinguishes direct GCDS replacements from composed patterns, native or custom implementations, and patterns with no current GCDS equivalent.

The map reflects the [current GC Design System component catalog](https://design-system.canada.ca/en/components/) as reviewed on 2026-08-26. The implementation phase must pin and test a specific GCDS package version before relying on any component API.

## Migration Types

- **Direct:** A documented GCDS component addresses the same primary user need.
- **Composed:** Multiple GCDS components or native elements are required to preserve the behavior.
- **Native/custom:** Semantic HTML and purpose-built behavior are required, with [GCDS CSS Shortcuts](https://design-system.canada.ca/en/css-shortcuts/) or [GCDS design tokens](https://design-system.canada.ca/en/styles/design-tokens/) for presentation.
- **No equivalent:** GCDS does not currently provide the behavior; redesign or a separately evaluated dependency is required.
- **Remove:** The behavior is unnecessary after WET is removed.

## Component Mapping Matrix

The following table maps high-usage shared patterns to implementation targets. Bold text in the first column identifies each current pattern for easier row navigation.

| Current Pattern | Locations | Target GCDS Equivalent | Migration Type | Risk and Notes | Implementation Priority |
| --- | --- | --- | --- | --- | --- |
| **WET CSS and JavaScript runtime** | `head.njk`, `base.njk`, `index.html`, `404.html` | GCDS web components and [CSS Shortcuts](https://design-system.canada.ca/en/css-shortcuts/) | Direct foundation | Pin package versions and preserve a usable pre-upgrade render; remove jQuery only after all WET plugins are replaced | Foundation |
| **GCWeb branded header** | `header.njk` | [`<gcds-header>`](https://design-system.canada.ca/en/components/header/) | Direct | Compose related search, language, and navigation components; verify only one banner landmark | Shell |
| **Government signature and wordmark assets** | `header.njk`, `footer.njk`, `404.html` | [`<gcds-signature>`](https://design-system.canada.ca/en/components/signature/) or signature supplied by header/footer | Direct | Do not duplicate identity elements already rendered by the shell components | Shell |
| **Language toggle and custom counterpart URL logic** | `lang.njk`, `header.njk` | [`<gcds-lang-toggle>`](https://design-system.canada.ca/en/components/language-toggle/) | Composed | Preserve `toggle`, locale, home-page handling, and suppression when a translation is unavailable | Shell |
| **Canada.ca search form** | `header.njk` | [`<gcds-search>`](https://design-system.canada.ca/en/components/search/) | Direct | Preserve the search endpoint, query parameter, localized label, and keyboard submission | Shell |
| **Canada.ca theme and topic menu loaded by AJAX** | `header.njk` | [`<gcds-topic-menu>`](https://design-system.canada.ca/en/components/theme-and-topic-menu/) | Direct | Confirm the component supplies the required global links before removing `data-ajax-replace` | Shell |
| **Site navigation** | `header.njk` | [`<gcds-top-nav>`](https://design-system.canada.ca/en/components/top-navigation/) | Direct | Use for site links, not as a substitute for the Canada.ca theme and topic menu; verify active-page state | Shell |
| **Breadcrumb trail** | `breadcrumbs.njk` | [`<gcds-breadcrumbs>`](https://design-system.canada.ca/en/components/breadcrumbs/) | Direct | Preserve hierarchy and `pathPrefix`; verify the current page is represented according to the component API | Shell |
| **GCWeb branded footer** | `footer.njk` | [`<gcds-footer>`](https://design-system.canada.ca/en/components/footer/) | Direct | Map contextual links from `footer.js` without duplicating standard Government of Canada links | Shell |
| **WET skip links** | `skipnav.njk`, `base.njk` | Header skip-link API or a native skip link | Composed | The target must become visible on focus and move focus to an existing main-content target | Shell |
| **Bootstrap containers and columns** | `base.njk`, shared partials, landing pages, standalone pages | [`<gcds-container>`](https://design-system.canada.ca/en/components/container/) and [`<gcds-grid>`](https://design-system.canada.ca/en/components/grid/) | Direct | Replace layout classes by page family and test text reflow at 200% and 400% zoom | Foundation |
| **Date modified region** | `pagedetails.njk` | [`<gcds-date-modified>`](https://design-system.canada.ca/en/components/date-modified/) | Direct | Preserve the localized date and existing Eleventy date source | Shared UI |
| **Static warning and information alerts** | `alerts.njk`, `alert-landingpages.njk`, `standard-alert.njk`, `office365Notice.njk` | [`<gcds-notice>`](https://design-system.canada.ca/en/components/notice/) | Direct | Select information, success, warning, or danger from message meaning; static notices must not become live alerts | Shared UI |
| **Archived sticky and in-view banner** | `archived.njk`, `archived-text.njk` | `<gcds-notice>` plus optional custom sticky behavior | Composed | No direct replacement for `wb-inview` or `wb-overlay`; prefer one persistent notice and avoid obscuring focus or content | Shared UI |
| **WET screen-reader-only utility** | Shared templates, landing pages, content pages, `index.html`, `404.html` | [`<gcds-sr-only>`](https://design-system.canada.ca/en/components/screenreader-only/) or an equivalent CSS Shortcut | Direct | Use only where semantic HTML cannot provide the same context; hidden text must remain in the accessibility tree | Shared UI |
| **Glyphicons and FontAwesome icons** | Header, contribute, downloads, roles, alerts, page directory, landing pages | [`<gcds-icon>`](https://design-system.canada.ca/en/components/icon/) | Direct where icon exists | Preserve visible text for file types and external links; decorative icons must be hidden from assistive technology | Shared UI |
| **Bootstrap buttons** | Header, splash page, page directory | [`<gcds-button>`](https://design-system.canada.ca/en/components/button/) | Direct | Links that navigate remain links; use buttons only for actions | Shared UI |
| **GCWeb doormats and service-information lists** | `collectionsMain.njk`, `about.njk`, `role-group-sections.njk`, `updatesMain.njk`, bilingual landing pages | Native headings and link lists in `<gcds-grid>` | Native/custom | GCDS advises against using cards in place of Canada.ca doormats; preserve heading and list relationships | Page families |
| **Card-like content previews** | Page directory card view and any verified preview pattern | [`<gcds-card>`](https://design-system.canada.ca/en/components/card/) in `<gcds-grid>` | Direct when card use criteria fit | Do not convert every grouped link into a card; avoid nested interactive controls | Page families |
| **Office document navigation** | `office-toc.njk` | Labelled native navigation list or verified GCDS side navigation | Native/custom | The current links are peer-document navigation, not a multi-step process; do not map them to tabs or `<gcds-stepper>` | Page families |
| **Download block and file-type icons** | `download.njk` | Native download link, `<gcds-icon>`, and GCDS layout components | Composed | Keep file type and size as text; the icon cannot be the only indicator | Page families |
| **Page-directory overlays and clauses lightbox** | `pageList.njk`, `pageListTable.njk`, `scope.njk` | Native inline content or disclosure; `<dialog>` only for a confirmed modal task | No equivalent | GCDS has no modal or lightbox component; prefer inline access for filters and long reference content | Complex features |
| **Tag filtering and card search** | `pageList.njk` | GCDS form controls plus custom filtering and result status | No equivalent | Replace `wb-tagfilter`; group controls, preserve state, and announce result count and no-results changes politely | Complex features |
| **Enhanced directory table** | `pageListTable.njk` | [`<gcds-table>`](https://design-system.canada.ca/en/components/table/) plus separately justified custom enhancements | Composed | Table presentation is direct; filtering, sorting, pagination, result status, and column controls require independent redesign and testing | Complex features |
| **WET table-to-chart behavior** | `analytics-chart.njk`, `src/_scripts/chart.js` | Native data table plus separately evaluated chart enhancement | No equivalent | GCDS has no chart component; the table remains authoritative and the chart needs equivalent text and non-colour cues | Complex features |
| **WET footnotes** | Bilingual ICT procurement guides | Native reference links, footnotes section, and descriptive return links | Native/custom | Preserve stable identifiers and bidirectional keyboard navigation; plugin JavaScript is unnecessary | Page families |
| **Equal-height plugin** | `office-toc.njk`, `updatesMain.njk`, landing pages | `<gcds-grid>` or native CSS grid | Remove | Modern grid layout removes the need for equal-height JavaScript | Cleanup |
| **WET spacing, visibility, border, and text utilities** | Shared templates, SCSS, content pages | [GCDS CSS Shortcuts](https://design-system.canada.ca/en/css-shortcuts/) and [design tokens](https://design-system.canada.ca/en/styles/design-tokens/) | Direct styling | Replace by pattern rather than mechanical class substitution; responsive hiding must not remove required information | Cleanup |
| **Bootstrap wells and custom page banner** | `base.njk`, `home.njk`, `banner.scss`, content callouts | Native semantic content with [GCDS CSS Shortcuts](https://design-system.canada.ca/en/css-shortcuts/); `<gcds-notice>` only for actual notices | Native/custom | A visual box is not automatically a notice; preserve one page-level heading and avoid component wrapping for prose | Cleanup |
| **Inline WET classes in Markdown content** | `src/pages/**/*.md` | Native HTML plus [GCDS CSS Shortcuts](https://design-system.canada.ca/en/css-shortcuts/) where presentation remains necessary | Native/custom | Follow [Decision 001](gcds-implementation-decisions.md#decision-001-use-native-html-for-content-gcds-components-for-ui); remove obsolete classes without changing content semantics or bilingual parity | Cleanup |
| **Splash image randomizer** | `index.html` | Static presentation or separately justified custom script | No equivalent | Prefer removal; if retained, ensure full operation without JavaScript and prevent layout shift | Standalone pages |
| **Standalone splash and not-found shells** | `index.html`, `404.html` | Composed GCDS signature, container, grid, link, and footer patterns | Composed | These pages bypass Eleventy layouts and need independent bilingual, keyboard, and no-JavaScript validation | Standalone pages |

## Explicit Gaps and Redesign Inputs

The following WET behaviors have no current one-to-one GCDS replacement:

- Modal and side-panel overlays.
- Long-reference lightbox behavior.
- Card-view tag filtering and result announcements.
- Enhanced-table filtering, sorting, pagination, and column controls.
- Table-to-chart conversion.
- Randomized splash imagery.
- Sticky behavior for the archived-content notice.
- A Canada.ca doormat component.
- WET footnote presentation and return navigation.

These gaps are evaluated in the [No-Direct-Replacement Analysis](gcds-no-direct-replacement-analysis.md) for [issue #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774). They must not be implemented through speculative custom-element names.

## Implementation Guardrails

- Pin the GCDS component and [CSS Shortcuts](https://design-system.canada.ca/en/css-shortcuts/) versions before implementation.
- Preserve English and French data contracts, counterpart links, and route behavior.
- Keep Markdown-rendered content as native HTML under [Decision 001](gcds-implementation-decisions.md#decision-001-use-native-html-for-content-gcds-components-for-ui).
- Treat component replacement and behavior replacement as separate checks.
- Verify keyboard order, focus visibility, landmarks, accessible names, responsive reflow, and no-JavaScript rendering for each migrated page family.
- Keep native tables and text alternatives available when adding filtering, sorting, or charts.
- Remove WET JavaScript only after every dependent behavior has a tested replacement or an approved removal decision.

## Completion Assessment

- High-usage shared WET and GCWeb patterns are mapped.
- Current locations and target components are recorded.
- Migration type, implementation risk, and priority are explicit.
- Unknown and no-equivalent behaviors are marked as redesign inputs.
- The map links to the migration epic and is suitable for follow-up implementation planning.
