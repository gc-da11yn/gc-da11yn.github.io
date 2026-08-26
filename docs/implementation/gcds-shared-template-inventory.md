# Shared Template Inventory

<!-- cspell:ignore landingpages pagedetails skipnav -->

**Issue:** [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772)
**Epic:** [Plan migration from WET to GC Design System #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
**Branch:** `migration/gcds` (PR #778)
**Date:** 2026-08-26
**Decision reference:** Decision 001 - native HTML for content, GCDS components for UI only

## Scope

This inventory identifies shared Eleventy layouts, includes, macros, and data contracts that affect the WET-to-GCDS migration. It records reuse relationships, separates shell-critical templates from feature-specific templates, and defines a migration order that limits cross-site regressions.

The inventory covers `src/_includes/`, the default layout assignment in `src/src.json`, shared data in `src/_data/`, and standalone pages that do not use the shared layout. Content fragments used by only one bilingual page family are noted but are not classified as shared shell templates.

## Template Entry Points

The following table describes the layouts and default layout assignment that control page rendering.

| File | Role | Reuse Relationship | Migration Classification |
| --- | --- | --- | --- |
| `src/src.json` | Eleventy directory data | Assigns `layouts/base.njk` to content under `src/` unless overridden | Shell-critical configuration |
| `src/_includes/layouts/base.njk` | Default document and page shell | Includes the shared head, header, footer, alerts, content utilities, and scripts | Shell-critical |
| `src/_includes/layouts/home.njk` | English and French home-page layout | Extends `base.njk` and replaces its `content` block | Shell-dependent |
| `src/index.html` | Bilingual splash page | Standalone HTML; does not use an Eleventy layout | Separate shell entry point |
| `src/404.html` | Bilingual not-found page | Standalone HTML; does not use an Eleventy layout | Separate shell entry point |

All ordinary content inherits `base.njk` through `src/src.json`. The English and French home pages explicitly select `home.njk`. A change to `base.njk` therefore affects almost every generated page, including pages rendered through `home.njk`.

## Base Layout Reuse Graph

The following list describes the include relationships rooted at `base.njk` in rendering order.

1. `redirect.njk` replaces the normal document when redirect front matter is present.
2. `head.njk` supplies metadata, favicon links, stylesheets, and the page title.
3. `archived.njk` is conditional and includes `archived-text.njk`.
4. `skipnav.njk` supplies the skip link.
5. `header.njk` includes `lang.njk` and `breadcrumbs.njk`.
6. The main content block includes `alerts.njk`, which conditionally includes `pageLabel.njk` in development.
7. The content block conditionally includes `office-toc.njk`, `office365Notice.njk`, `download.njk`, and `onThisPage.njk`.
8. `pagedetails.njk` follows page content.
9. `contribute.njk` includes `pageListLink.njk`.
10. `footer.njk` closes the shared visual shell.
11. `sa11y.njk` is included only in development or local builds.

`home.njk` overrides the content block and includes `alerts.njk`, `collectionsMain.njk`, `updatesMain.njk`, `about.njk`, and `pagedetails.njk`. It still receives the head, header, contribute section, footer, and scripts from `base.njk`.

## Shell-Critical Templates

The following table identifies templates whose migration can affect the complete site shell or a primary navigation path.

| File | Current Responsibility | Direct Dependencies | Migration Risk |
| --- | --- | --- | --- |
| `layouts/base.njk` | Document structure, main content wrapper, global scripts | All shell partials and conditional content utilities | Critical |
| `partials/head.njk` | Metadata, favicon, WET and site stylesheets | `settings`, page front matter | Critical |
| `partials/header.njk` | Government banner, search, navigation, language area, breadcrumbs | `header`, `lang.njk`, `breadcrumbs.njk` | Critical |
| `partials/footer.njk` | Contextual and Government of Canada footer links | `footer` | Critical |
| `partials/skipnav.njk` | Keyboard skip navigation | `skipnav` | Serious |
| `partials/lang.njk` | English/French page toggle | `toggle`, locale, home-page tags | Serious |
| `partials/breadcrumbs.njk` | Hierarchical navigation | Page URL and localized labels | Serious |
| `partials/contribute.njk` | Shared contribution links below main content | `contribute`, `pageListLink.njk` | Moderate |
| `partials/pagedetails.njk` | Shared date-modified region | `pagedetails`, page date | Moderate |
| `layouts/home.njk` | Home-page content composition | `base.njk` and home partials | Serious |

The first migration implementation should preserve the data contracts consumed by these templates. Replacing markup and assets without changing the localized data shape keeps English and French behavior aligned and reduces the number of simultaneous changes.

## Shared Feature Partials

The following table groups reusable partials that are shared across page families but are not required to render the global shell.

| Group | Files | Reuse Relationship | Migration Treatment |
| --- | --- | --- | --- |
| Page status | `alerts.njk`, `pageLabel.njk`, `archived.njk`, `archived-text.njk`, `standard-alert.njk`, `translation-en.njk` | Status and translation notices selected by layout or page front matter | Preserve logic; replace WET presentation patterns |
| Office navigation | `office-toc.njk`, `office365Notice.njk` | Conditional includes from `base.njk` | Replace grid and equal-height behavior after shell work |
| In-page navigation | `onThisPage.njk` | Uses headings from `eleventyComputed.js` | Preserve semantic HTML; restyle as needed |
| Downloads | `download.njk` | Conditional include from `base.njk` | Replace GCWeb classes and icon dependency |
| Home sections | `collectionsMain.njk`, `updatesMain.njk`, `about.njk` | Included only by `home.njk` | Migrate together after the base shell |
| Page directory | `pageList.njk`, `pageListTable.njk`, `pageListLink.njk` | Dedicated bilingual directory pages; `contribute.njk` links to them | Treat as a separate feature because WET supplies overlays, filtering, and tables |
| Analytics | `analytics-chart.njk`, `analytics-toc.njk` | Dedicated English and French analytics pages | Treat as a separate feature because WET supplies chart behavior |
| Role navigation | `role-mini-toc.njk`, `role-group-sections.njk`, `role-content-coming-soon.njk` | Dedicated bilingual role templates | Migrate as one page-family unit |
| Landing notices | `alert-landingpages.njk` | Included by English and French landing pages | Preserve as native content markup; restyle as needed |
| Build behavior | `redirect.njk`, `sa11y.njk` | Redirect rendering and development-only testing | Keep outside visual component mapping |

## Macro and Data Contracts

`src/_includes/macros/contentType.njk` exports `getContentType`, which is imported by `pageListTable.njk`. It contains classification logic rather than visual shell markup and can remain unchanged during the shell migration.

The following table lists shared data that templates consume directly.

| Data File | Primary Consumers | Migration Impact |
| --- | --- | --- |
| `src/_data/header.js` | `header.njk` | Preserve bilingual labels and links while changing component properties |
| `src/_data/footer.js` | `footer.njk` | Preserve bilingual link groups while changing component properties |
| `src/_data/settings.js` | `head.njk`, layouts | Preserve metadata, environment, and site URL behavior |
| `src/_data/skipnav.js` | `skipnav.njk` | Preserve bilingual accessible names |
| `src/_data/pagedetails.js` | `pagedetails.njk` | Preserve bilingual date label |
| `src/_data/onThisPage.js` | `onThisPage.njk` | Preserve bilingual heading label |
| `src/_data/pageList.js` | Page directory partials | Preserve bilingual control labels during feature redesign |
| `src/_data/alerts.js` | Alert partials | Preserve status messages and conditions |
| `src/_data/home.js` | `home.njk` | Preserve bilingual home-section headings |
| `src/_data/eleventyComputed.js` | `onThisPage.njk` | Preserve generated heading data |
| `src/_data/pathPrefix.js` | Shared templates and content | Preserve prefixed internal links |

## Content-Specific Includes and Exclusions

The directory `src/_includes/information-and-communication-technology-ict-accessibility-requirements/` contains reusable fragments for one large bilingual content page family. These fragments are content structure, not global UI. Under Decision 001, their native heading, table, figure, and prose markup should remain native HTML. WET utility classes within those fragments can be remediated during content cleanup.

The following files and directories are outside the shared-template migration inventory:

- `src/admin/` is the Decap CMS interface. Its generated configuration must not be edited as part of the site shell migration.
- `src/links/` contains redirect content rather than shared templates.
- `_site/` is generated output and must not be edited directly.
- `eleventy/plugins/` controls build behavior and collections but does not render the visual shell.

## Migration Order

1. Establish GCDS assets and metadata in `head.njk` while preserving current favicon and environment behavior until replacements are verified.
2. Replace `header.njk`, `lang.njk`, `breadcrumbs.njk`, and `skipnav.njk` as one navigation unit.
3. Replace `footer.njk` while preserving the `footer.js` bilingual data contract.
4. Update `base.njk` containers, content framing, and global scripts after the new shell components are available.
5. Validate `home.njk` and migrate its three home-section partials.
6. Migrate shared status, Office navigation, download, and page-detail patterns.
7. Redesign the page directory and analytics features that depend on WET JavaScript.
8. Migrate role templates and remaining landing-page presentation.
9. Migrate the standalone splash and not-found pages.
10. Remove obsolete WET assets only after all dependent templates and page families pass bilingual and accessibility checks.

## Completion Assessment

- Shared layouts, partials, macros, and data contracts are inventoried.
- Reuse and inheritance relationships are documented.
- Shell-critical files are explicitly classified.
- Standalone entry points and content-specific includes are identified.
- Exclusions prevent generated or infrastructure files from being changed accidentally.
- The recommended migration order is ready to inform component mapping in [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773).
