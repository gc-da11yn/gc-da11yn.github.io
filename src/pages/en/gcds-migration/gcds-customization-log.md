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

## Custom JavaScript

No site-owned JavaScript has been added for the GCDS foundation or header work. Playwright JavaScript files in `tests/playwright/` are test code and are not shipped to users.

Future custom JavaScript must be documented here with:

- the existing user behavior it preserves;
- why native HTML and GCDS cannot provide that behavior;
- the smallest supported interaction model;
- keyboard and screen-reader behavior;
- the no-JavaScript baseline;
- a removal or replacement condition.
