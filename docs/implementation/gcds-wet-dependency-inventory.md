# WET/GCWeb Dependency Inventory

**Issue:** #771  
**Epic:** #770 (WET-to-GCDS Migration)  
**Branch:** `migration/gcds` (PR #778)  
**Date:** 2026-04-28  
**Decision reference:** Decision 001 — native HTML for content, GCDS components for UI only

---

## Summary

| Dependency Category | Count of Files | Severity |
|---|---|---|
| CDN References (CSS/JS) | 4 | **Critical** — blocks entire migration |
| WET Plugin JS (`wb-*` data attrs) | 8 | **High** — requires JS replacement |
| GCWeb Structural Classes | 12+ | **High** — visual breakage without WET CSS |
| Bootstrap 3 Grid (`container`, `row`, `col-*`) | 20+ | **High** — layout foundation |
| Bootstrap 3 Utilities (visibility, glyphicons, `well`, `label-*`) | 15+ | **Medium** — scattered usage |
| WET Utility Classes (`mrgn-*`, `brdr-*`) | 20+ | **Medium** — spacing/borders throughout |
| FontAwesome 5 Icons | 6 | **Medium** — icon library swap |
| `data-ajax-replace` | 1 | **Medium** — canada.ca menu |
| Custom SCSS coupled to WET | 4 files | **Medium** — must be rewritten |
| Content pages with inline WET classes | 20+ | **Low** — gradual cleanup |

---

## 1. CDN References

### base.njk (`src/_includes/layouts/base.njk`)

| Line | WET Dependency | Type | GCDS Replacement | Notes |
|---|---|---|---|---|
| 84 | `jquery/2.2.4/jquery.js` | CDN JS | Remove | jQuery required by WET; GCDS doesn't need it |
| 85 | `wet-boew/js/wet-boew.min.js` | CDN JS | Remove | Core WET runtime — all `wb-*` plugins depend on this |
| 86 | `wet-boew/js/theme.min.js` | CDN JS | Remove | GCWeb theme JS — menu, search, overlay behaviors |
| 92 | `jquery.flot.valuelabels.min.js` | CDN JS plugin | Custom chart solution | Only loaded when `js === "chart"` |

### head.njk (`src/_includes/partials/head.njk`)

| Line | WET Dependency | Type | GCDS Replacement | Notes |
|---|---|---|---|---|
| 47 | FontAwesome 5.8.1 CSS | CDN CSS | GCDS icons or remove | Used for `fas fa-*` icons across templates |
| 48 | `wet-boew/css/theme.min.css` | CDN CSS | `@cdssnc/gcds-components` CSS | Main WET/GCWeb stylesheet — all layout/utility classes depend on this |
| 46 | `wet-boew/assets/favicon.ico` | CDN asset | GCDS/local favicon | Canada.ca favicon |

### index.html (splash page, `src/index.html`)

| Line | WET Dependency | Type | GCDS Replacement | Notes |
|---|---|---|---|---|
| 49 | FontAwesome 5.8.1 CSS | CDN CSS | Remove/GCDS icons | Duplicate of head.njk reference |
| 50 | `wet-boew/css/theme.min.css` | CDN CSS | GCDS CSS | Splash page loads its own WET CSS |
| 51 | `wet-boew/css/messages.min.css` | CDN CSS | Remove | WET error/messages styles — splash only |
| 112 | `jquery/2.2.4/jquery.min.js` (SRI) | CDN JS | Remove | Splash page has its own jQuery |
| 113 | `wet-boew.min.js` | CDN JS | Remove | (via canada.ca CDN) |
| 114 | `theme.min.js` | CDN JS | Remove | (via canada.ca CDN) |

### 404.html (`src/404.html`)

| Line | WET Dependency | Type | GCDS Replacement | Notes |
|---|---|---|---|---|
| 16 | `GCWeb/assets/favicon.ico` | CDN asset | Local/GCDS | Via `wet-boew.github.io` CDN |
| 17 | `GCWeb/css/theme-srv.css` | CDN CSS | GCDS CSS | Server-error variant of GCWeb theme |
| 25 | `GCWeb/assets/sig-blk-en.svg` | CDN asset | `<gcds-signature>` | Government of Canada signature image |
| 31 | `GCWeb/assets/wmms-blk.svg` | CDN asset | `<gcds-signature>` | Symbol of the Government of Canada |

---

## 2. WET Plugin Markers (JS-dependent `wb-*` classes/data attributes)

| File | WET Dependency | Type | GCDS Replacement | Notes |
|---|---|---|---|---|
| `index.html` L74 | `data-wb-randomize` | WET plugin | Custom JS or remove | Shuffles background images on splash page |
| `archived.njk` L2 | `wb-inview` + `data-inview="top-bar"` | WET plugin | IntersectionObserver or GCDS alert | Triggers sticky archive banner on scroll |
| `archived.njk` L11 | `wb-overlay wb-bar-t` | WET plugin | `<gcds-notice>` or custom sticky banner | Sticky top-bar overlay for archived pages |
| `analytics-chart.njk` L1 | `wb-charts wb-charts-bar` | WET plugin | Chart.js / custom charting | Converts `<table>` to bar chart — **no GCDS equivalent** |
| `pageList.njk` L6,34 | `wb-overlay overlay-def wb-popup-full` / `wb-panel-l` | WET plugin | `<dialog>` or `<gcds-modal>` | Full-screen and left-panel overlays for definitions/filters |
| `pageList.njk` L76 | `wb-tagfilter` + `wb-filter` + `data-wb-filter` | WET plugin | Custom filter JS | Tag-based card filtering with search — **complex, no GCDS equivalent** |
| `pageListTable.njk` L19 | `wb-overlay overlay-def wb-popup-full` | WET plugin | `<dialog>` or `<gcds-modal>` | Full-screen overlay for definitions |
| `pageListTable.njk` L56,121 | `wb-tagfilter` + `wb-tables` | WET plugin | Custom filter + DataTables alternative | Tag filtering on table + WET DataTables — **complex, no GCDS equivalent** |
| `header.njk` L58 | `data-ajax-replace` (canada.ca menu) | WET plugin | Static menu or `<gcds-top-nav>` | Loads GC mega-menu from canada.ca CDN via AJAX |
| `header.njk` L24-27 | `wb-srch-qry`, `wb-srch-q`, `wb-srch-sub` | WET search IDs/classes | `<gcds-search>` | Canada.ca search form integration |
| `office-toc.njk` L33 | `wb-eqht-grd` | WET plugin | CSS Grid / Flexbox | Equal-height grid for office document navigation |
| `updatesMain.njk` L18 | `wb-eqht-grd` | WET plugin | CSS Grid / Flexbox | Equal-height grid for recent updates |

---

## 3. GCWeb-Specific Structural Classes

| File | WET Dependency | Type | GCDS Replacement | Notes |
|---|---|---|---|---|
| `header.njk` L6 | `id="wb-bnr"` | GCWeb structure | `<gcds-header>` | Banner landmark ID expected by WET JS |
| `header.njk` L44 | `gcweb-menu` | GCWeb class | `<gcds-top-nav>` | GCWeb mega-menu component |
| `footer.njk` L2 | `id="wb-info"` | GCWeb structure | `<gcds-footer>` | Footer landmark ID expected by WET JS |
| `footer.njk` L3 | `gc-main-footer` | GCWeb class | `<gcds-footer>` | GCWeb footer structure |
| `footer.njk` L36 | `gc-sub-footer` | GCWeb class | `<gcds-footer>` | GCWeb sub-footer structure |
| `skipnav.njk` L3 | `id="wb-tphp"` | GCWeb structure | `<gcds-header>` skip links | WET skip nav container |
| `skipnav.njk` L4-8 | `wb-slc`, `wb-sl` | GCWeb classes | `<gcds-header>` built-in skip | Skip link styling/behavior |
| `lang.njk` L10 | `id="wb-lng"` | GCWeb structure | `<gcds-lang-toggle>` | Language toggle section |
| `breadcrumbs.njk` L53 | `id="wb-bc"` | GCWeb structure | `<gcds-breadcrumbs>` | Breadcrumb container |
| `pagedetails.njk` L2 | `pagedetails` class | GCWeb class | Custom or remove | Date-modified component |
| `pagedetails.njk` L4 | `id="wb-dtmd"` | GCWeb structure | Custom date-modified | WET date-modified widget ID |
| `collectionsMain.njk` L2 | `gc-srvinfo` | GCWeb class | `<gcds-card>` grid | Services/info doormat pattern |
| `about.njk` L7 | `gc-srvinfo` | GCWeb class | `<gcds-card>` grid | About section doormat |
| `role-group-sections.njk` L15 | `gc-drmt` | GCWeb class | `<gcds-card>` grid | Role page doormat layout |
| `archived.njk` L3,11 | `gc-archv` | GCWeb class | `<gcds-notice>` | Archived content banner styling |
| `download.njk` L5 | `gc-dwnld-lnk`, `gc-dwnld`, `gc-dwnld-img`, `gc-dwnld-txt`, `gc-dwnld-info` | GCWeb classes | Custom download component | GCWeb download block pattern |
| `updatesMain.njk` L4 | `provisional` | GCWeb modifier | Remove | GCWeb provisional feature flag |
| `office-toc.njk` L31 | `gc-stp-stp` | GCWeb class | GCDS stepper or tabs | Office document step navigation |

---

## 4. Bootstrap 3 Grid Usage

| File | Classes Used | GCDS Replacement | Notes |
|---|---|---|---|
| `header.njk` | `container`, `row`, `col-xs-9`, `col-sm-5`, `col-md-4`, `col-lg-offset-4`, `col-md-offset-4`, `col-sm-offset-2`, `col-xs-12`, `col-sm-5` | `<gcds-grid>` / `<gcds-container>` | Complex responsive header layout |
| `footer.njk` | `container`, `d-flex`, `align-items-center` | `<gcds-footer>` handles layout | Note: `d-flex` is BS4, not BS3 |
| `lang.njk` | `col-xs-3`, `col-sm-12`, `pull-right` | Part of `<gcds-header>` | Language toggle positioning |
| `breadcrumbs.njk` | `container`, `breadcrumb` (BS class) | `<gcds-breadcrumbs>` | Standard Bootstrap breadcrumb |
| `pagedetails.njk` | `container` | `<gcds-container>` | Wrapper only |
| `alerts.njk` | `container`, `alert alert-warning` | `<gcds-notice>` / `<gcds-alert>` | Bootstrap alert component |
| `contribute.njk` | `container`, `row`, `col-md-5`, `col-md-7` | `<gcds-grid>` | Contribute section layout |
| `pageLabel.njk` | `container`, `row`, `col-md-4` | `<gcds-grid>` | Page label/metadata layout |
| `collectionsMain.njk` | `row`, `col-md-6` | `<gcds-grid>` / `<gcds-card>` | Homepage collections grid |
| `about.njk` | `container`, `row`, `col-md-4` | `<gcds-grid>` | About section grid |
| `updatesMain.njk` | `container`, `row`, `col-xs-12`, `col-sm-6` | `<gcds-grid>` | Updates list grid |
| `download.njk` | `row`, `col-sm-6`, `col-xs-4`, `col-xs-8` | `<gcds-grid>` or custom | Download block layout |
| `pageList.njk` | `row`, `col-sm-4`, `col-md-5`, `col-lg-4`, `col-sm-8`, `col-md-7`, `col-lg-8`, `col-md-6`, `col-sm-12` | `<gcds-grid>` | Complex filter/card layout |
| `pageListTable.njk` | `container-fluid`, `row`, `col-md-4` | `<gcds-grid>` | Table view layout |
| `office-toc.njk` | `row`, `col-md-4`, `col-sm-6` | `<gcds-grid>` | Office TOC grid |
| `role-group-sections.njk` | `row`, `col-md-6` | `<gcds-grid>` | Role sections grid |
| `index.html` (splash) | `col-xs-12`, `col-xs-11`, `col-md-8`, `col-xs-6`, `col-xs-7`, `col-xs-5`, `col-md-4` | `<gcds-grid>` | Splash page layout |
| `404.html` | `container`, `row`, `col-sm-6`, `col-md-6` | `<gcds-grid>` | 404 page layout |
| `base.njk` (banner) | `container`, `well header-rwd` | `<gcds-container>` | Content area wrapper |
| `figures.njk` | `col-lg-6` (×24 figures) | `<gcds-grid>` | ICT requirements figures |
| **main/ landing pages** (46 files) | `row`, `col-md-6`, `gc-drmt`, `gc-srvinfo` | `<gcds-card>` + `<gcds-grid>` | Bilingual doormat landing pages (EN+FR mirrors) |

---

## 5. Bootstrap 3 Utilities & Components

| File(s) | Class/Component | Type | GCDS Replacement | Notes |
|---|---|---|---|---|
| `header.njk` | `glyphicon glyphicon-search`, `glyphicon-chevron-down` | BS3 icon font | GCDS icons | Search + menu chevron icons |
| `index.html` | `glyphicon glyphicon-asterisk` | BS3 icon font | GCDS icon or `·` separator | Splash page separator |
| `skipnav.njk`, `lang.njk`, `updatesMain.njk`, `office-toc.njk` | `visible-xs`, `visible-sm`, `visible-md`, `visible-lg`, `hidden-xs` | BS3 responsive visibility | CSS `@media` / GCDS responsive | Responsive show/hide |
| `lang.njk` | `pull-right` | BS3 float | CSS `float`/`flex` | Float-based positioning |
| `header.njk` | `form-control`, `form-group` | BS3 form | `<gcds-input>` / `<gcds-search>` | Search form styling |
| `header.njk`, `index.html`, `pageList.njk` | `btn btn-primary`, `btn-small`, `btn-block`, `btn-default` | BS3 buttons | `<gcds-button>` | Various button styles |
| `pageList.njk`, `pageListTable.njk` | `label label-info`, `label-success`, `label-warning`, `label-danger` | BS3 labels | `<gcds-badge>` or `<gcds-tag>` | Tag/category badges |
| `base.njk`, content pages | `well`, `well-sm`, `well-lg` | BS3 panel | `<gcds-notice>` or custom box | Callout/highlight boxes |
| `alerts.njk` | `alert alert-warning` | BS3 alert | `<gcds-notice>` | Warning alerts |
| `office-toc.njk` | `list-group-item` | BS3 list group | GCDS nav / custom | Step navigation items |
| `pageListTable.njk` | `table`, `table-bordered`, `table-striped`, `table-hover` | BS3 table | `<gcds-table>` or native + CSS | Data table styling |
| `pageList.njk` | `checkbox` | BS3 form | `<gcds-checkbox>` | Filter checkboxes |
| `base.njk`, `contribute.njk` | `list-inline`, `list-unstyled` | BS3 list | Native CSS | List styling utilities |

---

## 6. WET Utility Classes (from `theme.min.css`)

| Class Pattern | Used In | Count | GCDS Replacement | Notes |
|---|---|---|---|---|
| `wb-inv` | header, footer, lang, skipnav, alerts, download, pageList, main pages, index, 404 | ~25+ instances | `visually-hidden` CSS class or `<gcds-sr-only>` | Screen-reader-only text |
| `mrgn-tp-*`, `mrgn-bttm-*`, `mrgn-lft-*`, `mrgn-rght-*` | Nearly all templates + content pages | ~40+ instances | GCDS spacing tokens / custom CSS | WET margin utilities |
| `brdr-0`, `brdr-rds-0` | `updatesMain.njk`, `base.njk` | ~3 instances | CSS `border: 0` | Border removal |
| `text-right`, `text-center`, `text-uppercase` | header, lang, index, contribute | ~8 instances | CSS text-align | Text alignment |
| `colcount-sm-2`, `colcount-md-3` | `footer.njk` | 2 instances | CSS `column-count` | Multi-column layout |
| `list-col-xs-1`, `list-col-sm-2`, `list-col-md-3` | `footer.njk` | 1 instance | CSS `column-count` | Responsive multi-column lists |

---

## 7. FontAwesome 5 Usage

| File | Icons Used | GCDS Replacement | Notes |
|---|---|---|---|
| `contribute.njk` | `fab fa-github`, `fas fa-code`, `fas fa-exclamation-circle`, `fas fa-comments`, `fas fa-envelope` | GCDS icons or inline SVG | GitHub/contribute section icons |
| `download.njk` | `fas fa-file-*` (dynamic by file type) | GCDS icon or inline SVG | Document type icons |
| `role-group-sections.njk` | `fas fa-external-link-square-alt` | GCDS icon or inline SVG | External link indicator |
| `alerts.njk` | `fas fa-external-link-square-alt` | GCDS icon or inline SVG | Internal link indicator |
| `office-toc.njk` | `fas fa-lg {{ item.data.fontIcon }}` | GCDS icon or inline SVG | Dynamic per-page icons |
| `pageListTable.njk` | `fas fa-download` | GCDS icon or inline SVG | CSV download button |
| **main/ landing pages** (46 files) | `fas fa-external-link-square-alt` | GCDS icon or inline SVG | External link indicators in doormat links |
| **Content pages** (various `.md`) | `fas fa-external-link-square-alt` | Inline SVG or remove | Embedded in markdown content |

---

## 8. Custom SCSS Coupled to WET

### `src/_scss/custom.scss`

| Lines | WET Coupling | GCDS Impact | Notes |
|---|---|---|---|
| 17-43 | `.gc-drmt, .gc-srvinfo` overrides for `h2`, `li`, `blockquote`, `footer` | Must rewrite when doormat → `<gcds-card>` | GCWeb doesn't style these elements in doormat; custom fixes |
| 46-55 | `.well.header-rwd a` color overrides | Must rewrite with GCDS banner approach | White link colors for dark banner |
| 58-72 | `.splash .sp-hb` sizing | Must rewrite for GCDS splash | Splash page hero box widths |

### `src/_scss/banner.scss`

| Lines | WET Coupling | GCDS Impact | Notes |
|---|---|---|---|
| 4-23 | `.bg-gctheme.well.header-rwd` | Must rewrite entirely | Depends on `.well` (BS3) + custom theme color |

### `src/_scss/contribute.scss`

| Lines | WET Coupling | GCDS Impact | Notes |
|---|---|---|---|
| 1-52 | `.contribute` block | Low coupling | Mostly custom styles, but relies on BS3 grid context (`col-md-*`) and FontAwesome (`fa-fw`) |

### `src/_scss/base.scss`

| Lines | WET Coupling | GCDS Impact | Notes |
|---|---|---|---|
| 1-5 | `@use` imports | Orchestrator only | Imports the above three files |

---

## 9. sa11y.njk WET Reference

| File | Dependency | Type | Notes |
|---|---|---|---|
| `src/_includes/partials/sa11y.njk` L23 | `containerIgnore: '#wb-srch-q'` | Config reference | Sa11y ignores WET search input; update selector post-migration |

---

## 10. Content Pages with Inline WET/BS3 Classes

These markdown files embed WET/BS3 HTML classes directly in content. They need gradual cleanup but are **lower priority** since content stays as native HTML per Decision 001.

**English pages with WET classes (partial list):**
- `guide-for-including-accessibility-in-information-and-communication-technology-ict-related-procurement.md` — `well well-sm`, `mrgn-tp-md`, `wb-inv`, `fas fa-external-link-square-alt`
- `web-accessibility-checklist.md` — `list-unstyled mrgn-tp-lg`
- `tips-for-creating-online-courses.md` — `mrgn-*` utilities
- MS Office guides (365 + 2016, EN/FR) — various WET utilities

**French mirrors** of the above also exist with matching WET class usage.

---

## 11. Main Landing Pages (46 files)

All files under `src/main/en/` and `src/main/fr/` follow an identical template pattern:

```html
<div class="row wb-eqht mrgn-tp-lg gc-drmt">  <!-- or gc-srvinfo -->
  <div class="col-md-6">
    <h2><a ...>
      <span class="fas fa-external-link-square-alt mrgn-lft-sm mrgn-rght-sm" aria-hidden="true"></span>
      <span class="wb-inv">...</span>
      {{ title }}
    </a></h2>
  </div>
</div>
```

**Dependencies per landing page:**
- `wb-eqht` (equal height plugin)
- `gc-drmt` or `gc-srvinfo` (GCWeb doormat/services layout)
- `col-md-6` (BS3 grid)
- `fas fa-external-link-square-alt` (FontAwesome)
- `mrgn-*` (WET margin utilities)
- `wb-inv` (WET screen-reader-only class)

**GCDS replacement:** `<gcds-card>` components in a `<gcds-grid>` layout.

---

## Migration Priority Matrix

| Priority | Files | Rationale |
|---|---|---|
| **P0 — Do first** | `base.njk`, `head.njk` | CDN swap unblocks everything; single change propagates site-wide |
| **P1 — Core UI** | `header.njk`, `footer.njk`, `skipnav.njk`, `lang.njk`, `breadcrumbs.njk` | GCDS has direct component replacements (`<gcds-header>`, `<gcds-footer>`, `<gcds-breadcrumbs>`, `<gcds-lang-toggle>`) |
| **P2 — Page chrome** | `pagedetails.njk`, `alerts.njk`, `archived.njk`, `contribute.njk`, `download.njk` | Secondary UI areas; moderate complexity |
| **P3 — Landing pages** | `collectionsMain.njk`, `role-group-sections.njk`, `about.njk`, `updatesMain.njk`, 46× main/ pages | Repetitive doormat pattern → `<gcds-card>` grid |
| **P4 — Complex widgets** | `pageList.njk`, `pageListTable.njk`, `analytics-chart.njk`, `office-toc.njk` | Require custom JS replacements for `wb-tagfilter`, `wb-tables`, `wb-charts` |
| **P5 — Standalone pages** | `index.html` (splash), `404.html` | Self-contained; can be migrated independently |
| **P6 — Content cleanup** | `src/pages/**/*.md` with inline WET classes | Low priority; classes are cosmetic and content remains native HTML |
| **P7 — SCSS** | All 4 SCSS files | Rewrite after template migration is done |
