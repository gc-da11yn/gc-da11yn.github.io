# GCDS No-Direct-Replacement Analysis

<!-- cspell:ignore inview laccessibilit lapprovisionnement linclusion linformation lightbox tagfilter -->

**Issue:** [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774)
**Epic:** [Plan migration from WET to GC Design System #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
**Branch:** `migration/gcds` - [GCDS migration tracking PR #778](https://github.com/gc-da11yn/gc-da11yn.github.io/pull/778)
**Date:** 2026-08-31
**Decision reference:** [Decision 001 - use native HTML for content, GCDS components for UI](gcds-implementation-decisions.md#decision-001-use-native-html-for-content-gcds-components-for-ui)

## Purpose

This analysis defines redesign requirements for WET plugins and custom interface patterns that do not have a complete one-to-one replacement in the [GC Design System component catalog](https://design-system.canada.ca/en/components/). It builds on the [WET/GCWeb Dependency Inventory](gcds-wet-dependency-inventory.md), [Shared Template Inventory](gcds-shared-template-inventory.md), and [WET-to-GCDS Component Map](gcds-component-map.md).

The recommendations separate visual replacement from behavioral replacement. A GCDS component may replace presentation while filtering, focus management, announcements, or progressive enhancement still require a separate design decision.

## Assessment Scale

- **Risk:** `serious` indicates that an incorrect redesign could significantly impede task completion for people using assistive technology; `moderate` indicates a partial impediment; `minor` indicates limited user impact.
- **Effort:** Small, medium, and large are relative implementation sizes. They are not estimates by person or day.
- **Priority:** 1 is required before WET removal, 2 is required for the affected page family, and 3 can follow the core migration when the current behavior can be safely removed.

## Redesign Summary

The following table prioritizes patterns that need redesign decisions rather than a mechanical component substitution.

| Pattern | Current Behavior | Recommended Direction | Risk | Effort | Priority |
| --- | --- | --- | --- | --- | --- |
| Page-directory overlays | Full-screen definitions and side-panel filters | Move supporting information and filters inline; use native `<dialog>` only for a confirmed modal task | serious | Medium | 1 |
| Clauses lightbox | Opens a long bilingual clauses reference in a WET lightbox | Use an in-page section with direct navigation; consider `<details>` only if collapsing the content improves comprehension | serious | Small | 1 |
| Card and table filtering | Searches and filters generated page collections | Build a progressively enhanced native form with visible result status and a complete no-JavaScript list or table | serious | Large | 1 |
| Enhanced directory table | Adds filtering, sorting, pagination, and column controls | Establish essential behaviors through user needs; retain only justified enhancements around a semantic table | serious | Large | 1 |
| Analytics chart | Converts a data table into a bar chart | Keep the table authoritative; remove the chart unless research supports an accessible enhancement | serious | Medium | 2 |
| Archived-content banner | Duplicates a notice in an in-view sticky overlay | Render one persistent inline notice; add non-obscuring sticky behavior only if evidence supports it | serious | Small | 1 |
| Canada.ca doormats | Presents grouped landing-page links | Use native headings and link lists in `<gcds-grid>` | moderate | Medium | 2 |
| WET footnotes | Connects references, notes, and return links | Preserve bidirectional native anchor links and descriptive accessible names without plugin JavaScript | moderate | Small | 2 |
| Randomized splash imagery | Selects a decorative image with custom JavaScript | Use one stable responsive image or remove the imagery | minor | Small | 3 |

## Page-Directory Overlays

**Locations:** `src/_includes/partials/pageList.njk` and `src/_includes/partials/pageListTable.njk`

### Overlay Replacement Gap

GCDS does not currently provide a modal, full-screen overlay, or side-panel component. The WET overlay classes currently supply interaction behavior, not only presentation.

### Overlay Options and Tradeoffs

1. **Inline content and filters:** Keeps all controls in document order, works without JavaScript, and avoids focus containment. It uses more vertical space but best matches the supporting nature of the current content.
2. **Native disclosure:** Can reduce initial page length for optional definitions. It must not hide controls users need for the primary task.
3. **Native `<dialog>`:** Appropriate only if user research confirms a modal task. It requires tested focus entry, focus containment, Escape handling, a visible close control, inert background content, and focus return.

### Overlay Recommendation

Move definitions and filtering controls inline with the directory. Use headings, `<fieldset>` elements, and legends to create a clear structure. Do not reproduce the side panel solely to preserve the current visual treatment.

### Overlay Accessibility Requirements

- Keep trigger and controlled-region names descriptive if disclosure remains.
- Preserve logical heading and keyboard order.
- Do not obscure focused controls or page content at 200% and 400% zoom.
- If `<dialog>` is justified, verify focus entry, containment, Escape dismissal, close control naming, and focus return.

## Clauses Lightbox

**Location:** `src/_includes/information-and-communication-technology-ict-accessibility-requirements/scope.njk`

### Lightbox Replacement Gap

The `wb-lbx` plugin presents a long clauses reference as a lightbox. GCDS has no lightbox component, and the content is reference material rather than a short modal task.

### Lightbox Options and Tradeoffs

1. **In-page section:** Provides direct links, browser history, find-in-page support, and reliable no-JavaScript access. It increases page length.
2. **Separate bilingual reference page:** Produces a focused, linkable resource but introduces another route and language-toggle contract.
3. **Native `<details>`:** Reduces visible length but can make a long reference harder to scan and navigate by heading.

### Lightbox Recommendation

Replace the lightbox trigger with a link to a clearly headed in-page section. Use a separate page only if the clauses need independent ownership or reuse. Do not use a modal dialog for long-form reference content.

### Lightbox Accessibility Requirements

- Preserve English and French content and counterpart behavior.
- Ensure the destination has a descriptive heading and a stable fragment identifier.
- Keep the content available without JavaScript.
- Verify that moving to the destination does not leave keyboard focus in an unexpected location.

## Card and Table Filtering

**Locations:** `src/_includes/partials/pageList.njk` and `src/_includes/partials/pageListTable.njk`

### Filtering Replacement Gap

GCDS form controls can provide the input interface, but no GCDS component replaces `wb-tagfilter` state management, combined text and checkbox filtering, result visibility, or result-count announcements.

### Filtering Options and Tradeoffs

1. **Client-side progressive enhancement:** Preserves immediate filtering and can retain the full list or table as the no-JavaScript baseline. It requires purpose-built state and announcement logic.
2. **Server-generated filtering:** Produces durable URLs and avoids a large client-side controller, but adds build or hosting requirements that the current static architecture does not provide.
3. **Remove secondary filters:** Reduces complexity when search alone meets user needs, but must be supported by content and usage evidence.

### Filtering Recommendation

Use a native search form and only the filters needed for real user tasks. Enhance the complete list or table on the client, preserve filter state during updates, and expose a concise result status. Evaluate whether local-only metadata controls belong in a separate maintainer tool rather than the public interface.

### Filtering Accessibility Requirements

- Associate every input with a visible label.
- Group related checkboxes with `<fieldset>` and `<legend>`.
- Announce result count and no-results changes through one polite status region.
- Do not move focus when results update.
- Provide a visible reset action and keep it keyboard operable.
- Retain a complete, understandable no-JavaScript result set.
- Test filtering in both languages and with 400% zoom reflow.

## Enhanced Directory Table

**Locations:** `src/_includes/partials/pageListTable.njk`, `src/pages/en/useful-links.md`, and `src/pages/fr/liens-utiles.md`

### Enhanced-Table Replacement Gap

`<gcds-table>` can provide table presentation, but it does not by itself replace WET filtering, sorting, pagination, responsive column removal, or column-visibility controls. These behaviors must be evaluated independently.

### Enhanced-Table Options and Tradeoffs

1. **Semantic table without enhancements:** Has the lowest interaction risk and strongest no-JavaScript behavior, but can become difficult to navigate with a large data set.
2. **Purpose-built enhancements:** Can support large directories when sorting and pagination are necessary. It requires keyboard-operable controls, programmatic sort state, stable focus, and result announcements.
3. **List-based directory:** Reflows more simply on narrow screens and may better fit content discovery, but loses efficient row-and-column comparison.

### Enhanced-Table Recommendation

Define the minimum required table tasks before selecting a technical approach. Keep a semantic captioned table as the baseline. Add sorting, pagination, or column controls only when each behavior has a documented user need and an accessibility test plan. Do not remove essential columns at narrow widths.

### Enhanced-Table Accessibility Requirements

- Preserve captions, column headers, row headers where needed, and header associations.
- Expose sort controls as buttons with current direction in their accessible names or state.
- Announce pagination and filter changes without duplicating messages.
- Keep focus stable after sorting and page changes.
- Reflow or scroll without hiding information required to understand a row.
- Provide the full table when JavaScript is unavailable.

## Analytics Chart

**Locations:** `src/_includes/partials/analytics-chart.njk` and `src/_scripts/chart.js`

### Chart Replacement Gap

GCDS does not provide a chart component. WET currently transforms a native data table into a visual bar chart.

### Chart Options and Tradeoffs

1. **Table only:** Keeps the data precise, compact, and accessible with no chart dependency. It provides less immediate visual trend recognition.
2. **Accessible chart enhancement:** Supports visual comparison but requires a separately evaluated library, equivalent text, non-colour cues, and access to exact values without pointer input.
3. **Static image with text alternative:** Reduces runtime complexity but creates maintenance and bilingual-description overhead.

### Chart Recommendation

Use the captioned data table as the authoritative presentation and remove the chart unless analytics users demonstrate a need for visual trend comparison. If retained, treat the chart as an optional enhancement and evaluate the chosen chart library independently.

### Chart Accessibility Requirements

- Keep the data table available in the document.
- Summarize the trend or purpose in text when a chart is present.
- Do not rely on colour alone to distinguish values or series.
- Make exact values available without hover or pointer input.
- Respect reduced-motion and forced-colour preferences.

## Archived-Content Banner

**Locations:** `src/_includes/partials/archived.njk` and `src/_includes/partials/archived-text.njk`

### Archived-Banner Replacement Gap

`<gcds-notice>` can replace the notice presentation, but no GCDS component replaces the current `wb-inview` and `wb-overlay` sticky behavior. The existing implementation also duplicates notice content and applies an alert role to static information.

### Archived-Banner Options and Tradeoffs

1. **One inline notice:** Avoids duplicate announcements and content obstruction. Users may not see the notice after scrolling.
2. **CSS sticky notice:** Maintains visibility without plugin JavaScript, but can cover content and focused controls at zoom.
3. **Dismissible sticky notice:** Reduces obstruction but adds state, control naming, and persistence requirements.

### Archived-Banner Recommendation

Render one inline `<gcds-notice>` near the page heading. Do not apply a live-region role to static archived-content information. Add sticky behavior only after validating that persistent visibility is necessary and can meet reflow and focus-not-obscured requirements.

### Archived-Banner Accessibility Requirements

- Expose the notice once in the accessibility tree.
- Do not use `role="alert"` for content present at page load.
- Ensure the notice does not cover focused elements or essential content.
- If dismissible, provide a clearly named keyboard-operable control and predictable persistence.

## Canada.ca Doormats

**Locations:** `src/_includes/partials/collectionsMain.njk`, `src/_includes/partials/about.njk`, `src/_includes/partials/role-group-sections.njk`, `src/_includes/partials/updatesMain.njk`, and bilingual landing pages

### Doormat Replacement Gap

The current GCWeb doormat is a grouped navigation pattern. GCDS does not provide a Canada.ca doormat component and advises against replacing doormats indiscriminately with cards.

### Doormat Options and Tradeoffs

1. **Native headings and link lists in `<gcds-grid>`:** Preserves structural relationships and supports responsive layout with minimal behavior.
2. **GCDS cards:** Appropriate only when each item is a distinct content preview. Applying cards to every link group adds visual and navigation overhead.
3. **Simple categorized list:** Offers the clearest structure when descriptions or previews are unnecessary.

### Doormat Recommendation

Use native headings and lists in `<gcds-grid>`. Reserve `<gcds-card>` for verified preview use cases that meet the component criteria.

### Doormat Accessibility Requirements

- Preserve a logical heading hierarchy and list relationships.
- Use descriptive link text that remains clear out of context.
- Keep English and French grouping equivalent.
- Verify link target size, reading order, and reflow.

## WET Footnotes

**Locations:** `src/pages/en/guide-for-including-accessibility-in-information-and-communication-technology-ict-related-procurement.md` and `src/pages/fr/guide-pour-linclusion-de-laccessibilit-dans-lapprovisionnement-lie-aux-technologies-de-linformation-et-des-communications-tic.md`

### Footnote Replacement Gap

GCDS does not provide a footnote component. The current WET pattern uses native fragment links plus WET classes for navigation and presentation, so plugin behavior is not required to preserve the core task.

### Footnote Options and Tradeoffs

1. **Native bidirectional links:** Keeps references and return links durable and requires no JavaScript. Authors must maintain unique identifiers.
2. **Endnotes without return links:** Simplifies markup but makes it harder for keyboard and screen reader users to resume reading.
3. **Popover notes:** Keep notes visually close to references but introduce disclosure, focus, and narrow-viewport complexity.

### Footnote Recommendation

Retain native superscript reference links, a clearly headed footnotes section, and descriptive return links. Remove WET-specific classes after equivalent visible and screen-reader-only text styling is available. Do not replace footnotes with popovers.

### Footnote Accessibility Requirements

- Give every reference and note a unique, stable identifier.
- Make reference and return-link names meaningful out of context.
- Preserve bidirectional keyboard navigation.
- Verify focus visibility after fragment navigation.
- Keep the English and French note structures equivalent.

## Randomized Splash Imagery

**Location:** `src/index.html`

### Splash-Image Replacement Gap

The randomizer is a custom presentation behavior rather than a design-system component. It adds JavaScript and potential layout movement without changing the language-selection task.

### Splash-Image Options and Tradeoffs

1. **One stable responsive image:** Preserves visual identity while improving predictability, caching, and layout stability.
2. **No image:** Produces the smallest and most robust language-selection page.
3. **Retained randomizer:** Preserves variety but keeps custom code with no demonstrated task benefit.

### Splash-Image Recommendation

Remove the randomizer. Use one stable decorative image only if the splash page needs imagery after the shell redesign.

### Splash-Image Accessibility Requirements

- Keep decorative imagery out of the accessibility tree.
- Reserve image dimensions to prevent layout shift.
- Keep language selection complete and usable without JavaScript.
- Do not let imagery change reading order, contrast, or focus visibility.

## Patterns Resolved Without Custom Interaction

The following items do not require separate interactive redesigns:

- Replace equal-height JavaScript with `<gcds-grid>` or native CSS grid.
- Replace WET spacing and visual utility classes by layout pattern using GCDS CSS Shortcuts and design tokens.
- Keep Office peer-document navigation as a labelled native navigation list unless a documented GCDS side-navigation pattern is confirmed.
- Compose download blocks from native download links, visible file metadata, icons where useful, and GCDS layout components.
- Keep banners and callouts as native semantic content unless the message is genuinely a notice.

These changes still require bilingual, responsive, keyboard, and no-JavaScript checks, but they do not justify new custom widgets.

## Implementation Sequence

1. Decide which overlay, filtering, enhanced-table, archived-notice, and chart behaviors are essential before removing WET JavaScript.
2. Prototype the page directory as a complete native list or table with no JavaScript.
3. Add only the approved progressive enhancements and test each behavior independently.
4. Replace the clauses lightbox, footnotes, doormats, and archived notice with native or GCDS-supported structures.
5. Remove the splash randomizer and other unnecessary plugin behavior.
6. Validate representative English and French pages with keyboard, screen reader, zoom, forced-colour, reduced-motion, and no-JavaScript checks.

## Completion Assessment

- All known no-direct-replacement patterns are documented with redesign options.
- Each recommendation includes accessibility implications and relative risk and effort.
- `serious` redesigns are prioritized before WET removal.
- The analysis links to the migration epic and the preceding discovery artifacts.
- Building redesigned components and assigning person-day estimates remain out of scope.
