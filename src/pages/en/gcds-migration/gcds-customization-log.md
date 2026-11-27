---
title: GCDS Custom CSS and JavaScript Log
description: Plain-language record of site-specific CSS and JavaScript used during the GCDS migration, including the reason and removal plan.
toc: true
---

<!-- cspell:ignore lang-href skip-to-href workarounds -->

This log records site-owned CSS and JavaScript added around the GC Design System (GCDS). Its purpose is to help the implementation team explain each customization and remove it when GCDS, a native HTML pattern, or a shared toolkit pattern can replace it.

Do not edit files inside `node_modules/@gcds-core/` or replace the GCDS base CSS or JavaScript. Use the options below in this order:

1. Configure the documented GCDS component.
2. Use GCDS design tokens or CSS Shortcuts.
3. Use semantic native HTML.
4. Add a small, documented site-owned customization only when the first three options do not provide the required behavior.
5. Record why the customization exists, its accessibility impact, and the condition for removing it.

## Current summary

- Site-owned GCDS CSS: `src/_scss/gcds-foundation.scss`
- Site-owned GCDS JavaScript: none
- Purpose of the current CSS: keep native fallbacks available before component upgrade and remove duplicate fallback content after upgrade
- Production GCDS base assets: not modified

## How to add an entry

Add a new section for each customization using the following fields:

- **Status**: Active, proposed, or removable
- **Related issue**: GitHub issue that owns the change
- **Files**: Site-owned files containing the customization
- **GCDS option checked**: Component attributes, slots, tokens, or CSS Shortcuts already considered
- **Why it is needed**: Gap the customization solves
- **What changed**: Plain-language description
- **Accessibility impact**: Keyboard, screen reader, language, reflow, or no-JavaScript behavior
- **Removal condition**: Change that would let the customization be removed

## Header fallback visibility

### Status

Active

### Related issue

[Migrate header and custom site navigation #813](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/813)

### Files

- `src/_scss/gcds-foundation.scss`
- `src/_includes/partials/gcds-header.njk`
- `src/_includes/partials/pe-site-nav.njk`

### GCDS option checked

The header uses the documented `lang-href` and `skip-to-href` attributes, the `search` slot, the default Government of Canada signature, and `<gcds-side-nav>`.

### Why it is needed

GCDS web components need JavaScript to register and render their enhanced interface. Essential navigation, search, and language links must remain available when JavaScript is disabled or the component module does not load.

### What changed

The site shows native signature, search, language, and navigation fallbacks by default. After the related GCDS custom elements register, the selectors hide only the duplicated fallback versions. The GCDS component remains the enhanced presentation.

### Accessibility impact

- Native navigation, forms, links, and landmarks remain available without JavaScript.
- The fallback has descriptive labels and list semantics.
- Tests verify that fallback links and search remain visible when GCDS does not upgrade.
- No custom keyboard behavior was added to recreate a web-component interaction.

### Removal condition

Remove these selectors if a supported GCDS progressive-enhancement API guarantees the essential controls remain available as native light-DOM content without JavaScript.

## Native skip-link fallback

### Status

Active

### Related issue

[Migrate header and custom site navigation #813](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/813)

### Files

- `src/_scss/gcds-foundation.scss`
- `src/_includes/layouts/gcds-base.njk`

### GCDS option checked

The upgraded header uses the documented `skip-to-href="#main-content"` attribute. The GCDS component supplies its own skip-to-content link.

### Why it is needed

Before JavaScript registers `<gcds-header>`, its skip-to-content link is unavailable. The native fallback link keeps the page bypass mechanism available in that state.

### What changed

The native link is positioned off-screen and appears when focused. Once `<gcds-header>` registers, the site hides the native fallback so users receive only the GCDS skip link.

### Accessibility impact

- The fallback is the first focusable item before component upgrade.
- Its target is the single native `<main>` element.
- Keyboard tests verify focus appears on the link and moves to `<main>`.
- GCDS supplies the enhanced skip link after registration.

### Removal condition

Remove the fallback if the GCDS header renders a usable native skip link before JavaScript registration or if the site adopts another documented GCDS primitive with the same no-JavaScript behavior.

## Native fallback list reset

### Status

Active

### Related issue

[Migrate header and custom site navigation #813](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/813)

### Files

- `src/_scss/gcds-foundation.scss`
- `src/_includes/partials/pe-site-nav.njk`

### GCDS option checked

`<gcds-side-nav>` is used for the enhanced navigation. CSS Shortcuts do not provide the small native-list reset required by the fallback.

### Why it is needed

The no-JavaScript fallback uses a standard list. Default browser list markers and spacing do not match the navigation treatment.

### What changed

The stylesheet removes the fallback list's default margin, padding, and markers. It does not change GCDS component internals.

### Accessibility impact

The list remains a native list with six semantic links. Only visual browser defaults are removed; list and link semantics are unchanged.

### Removal condition

Remove the override if the native fallback can use an existing toolkit or GCDS CSS Shortcut that provides the same result.

## Breadcrumb fallback layout

### Status

Active

### Related issue

[Migrate header and custom site navigation #813](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/813)

### Files

- `src/_scss/gcds-foundation.scss`
- `src/_includes/partials/gcds-breadcrumbs.njk`
- `src/_includes/partials/pe-breadcrumbs.njk`

### GCDS option checked

The enhanced state uses `<gcds-breadcrumbs>` in the documented header `breadcrumb` slot. GCDS supplies the breadcrumb presentation and Canada.ca root link.

### Why it is needed

The breadcrumb fallback must remain available before component registration or when JavaScript is disabled.

### What changed

The stylesheet presents the native ordered list as a wrapping horizontal trail and removes browser list markers. It does not change GCDS breadcrumb markup.

### Accessibility impact

The fallback retains one named navigation landmark and ordered links. The enhanced state uses the GCDS breadcrumb component. Tests verify both GCDS and fallback states.

### Removal condition

Remove the customization if GCDS provides a native pre-upgrade breadcrumb fallback with equivalent semantics and presentation.

## Footer fallback visibility and layout

### Status

Active

### Related issue

[Migrate footer and contextual links #814](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/814)

### Files

- `src/_scss/gcds-foundation.scss`
- `src/_includes/partials/gcds-footer.njk`
- `src/_includes/layouts/gcds-base.njk`

### GCDS option checked

The enhanced footer uses the documented full display, contextual heading, and contextual-links property. GCDS supplies the Government of Canada identity and standard government, theme, and corporate links.

### Why it is needed

GCDS needs JavaScript to register `<gcds-footer>` and create its footer landmark. A native fallback keeps the contextual and standard footer links available before component upgrade or without JavaScript.

### What changed

The stylesheet hides the GCDS host before registration, presents a native full-footer fallback, and removes that fallback after the component registers. Only fallback spacing, wrapping, and duplicate-content visibility are customized.

### Accessibility impact

- The enhanced and fallback states each expose one content-information landmark.
- Contextual and corporate links remain native links in both states.
- The fallback list wraps without horizontal scrolling at narrow viewports.
- No custom keyboard or screen-reader behavior is added.

### Removal condition

Remove the customization if GCDS provides a usable native light-DOM footer and its contextual links before JavaScript registration.

## Date-modified fallback

### Status

Active

### Related issue

[Complete and approve parallel page shell #815](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/815)

### Files

- `src/_scss/gcds-foundation.scss`
- `src/_includes/layouts/gcds-base.njk`
- `src/_includes/partials/gcds-date-modified.njk`
- `eleventy/plugins/filters-plugin.js`

### GCDS option checked

The enhanced state uses the supported `<gcds-date-modified>` component and its localized label. The date comes from the existing `page.date` source.

### Why it is needed

The GCDS component requires JavaScript to register and render its visible date label and semantic definition list. A native fallback keeps the localized modification date and its label available before upgrade and without JavaScript.

### What changed

The page renders the localized date in GCDS light DOM and a native definition list containing a machine-readable `<time>`. The fallback is hidden only after the custom element registers.

### Accessibility impact

- The visible date and label remain available without JavaScript.
- The fallback uses native definition-list and time semantics.
- The enhanced component supplies the same localized English or French text.
- The existing `page.date` source remains the single date input.

### Removal condition

Remove the fallback CSS and native definition list if a supported GCDS API preserves the visible label and date before JavaScript registration.

## Main grid reflow

### Status

Active

### Related issue

[Complete and approve parallel page shell #815](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/815)

### Files

- `src/_scss/gcds-foundation.scss`
- `src/_includes/layouts/gcds-base.njk`

### GCDS option checked

The shell uses the GCDS page container and grid. The existing `<gcds-side-nav>` responsive threshold remains unchanged.

### Why it is needed

A grid item's default minimum width can be wider than its available track when long page titles or zoomed content approaches a narrow layout.

### What changed

The stable `<main>` target can shrink below its min-content width, and long words wrap inside the content column.

### Accessibility impact

The shell remains readable without horizontal scrolling at narrow widths and high zoom. Reading order and focus behavior are unchanged.

### Removal condition

Remove the two overrides if a GCDS container or grid update prevents grid-item min-content overflow with equivalent narrow-layout behavior.

## Custom JavaScript

No site-owned browser JavaScript has been added for the GCDS foundation or shell. The `localizedDate` Eleventy filter runs only during the build and is not shipped to users. Playwright JavaScript files in `tests/playwright/` are test code and are not shipped to users.

Future custom JavaScript must be documented here with:

- the existing user behavior it preserves;
- why native HTML and GCDS cannot provide that behavior;
- the smallest supported interaction model;
- keyboard and screen-reader behavior;
- the no-JavaScript baseline;
- a removal or replacement condition.
