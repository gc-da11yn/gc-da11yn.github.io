---
title: "GCDS Migration: Implementation Decisions"
description: Architectural and implementation decisions governing the migration from WET and GCWeb to GCDS.
toc: true
---

<!-- cspell:ignore wordmark -->

This document records architectural and implementation decisions made during the migration from WET/GCWeb to the GC Design System (GCDS). Each decision is numbered and includes context, rationale, and implications to support long-term maintainability.

---

## Decision 001: Use native HTML for content, GCDS components for UI

### Decision 001 Status

Accepted

### Decision 001 Date

2026-03-19

### Decision 001 Context

The GC Design System provides web components (`<gcds-button>`, `<gcds-nav>`, `<gcds-header>`, etc.) for building Government of Canada interfaces. During migration planning, the question arose whether all existing HTML should be converted to GCDS web components, or whether native HTML should be retained where appropriate.

The site is content-heavy - the majority of pages are bilingual documentation written in Markdown and rendered through Eleventy templates. Only a small portion of the markup involves interactive or structured UI elements like navigation, buttons, forms, and the global shell (header, footer, breadcrumbs).

### Decision 001 Outcome

- Use **native HTML** (`<h1>` through `<h6>`, `<p>`, `<ul>`, `<ol>`, `<table>`, `<a>`, `<blockquote>`, `<code>`, etc.) for all content output from Markdown and Nunjucks templates.
- Use **GCDS web components** for interactive and structured UI: navigation, header, footer, breadcrumbs, buttons, forms, cards, and other design-system-specific patterns.
- Keep Eleventy templates simple and readable - avoid wrapping static content in web components when native HTML serves the same purpose.

### Decision 001 Rationale

1. **Markdown compatibility** - Eleventy renders Markdown to native HTML. Wrapping that output in web components would require post-processing transforms or custom Markdown plugins, adding complexity with no accessibility or usability benefit.
2. **Accessibility** - Native HTML elements have built-in semantics and full assistive technology support. Web components for static content add a layer of abstraction without improving the user experience.
3. **Performance** - Native HTML renders immediately. Web components require JavaScript registration and may introduce a flash of undefined content (FOUC) for elements that don't need interactivity.
4. **Maintainability** - Content authors write Markdown. Keeping the rendered output as native HTML means authors don't need to know about GCDS component APIs. Templates remain straightforward Nunjucks with standard HTML.
5. **GCDS alignment** - The GC Design System itself is designed to complement native HTML, not replace it. GCDS components target UI patterns (navigation, forms, feedback) rather than content markup.

### Decision 001 Implications

- Markdown content pages require **no GCDS component wrapping** - they render as-is.
- GCDS components are used in **layout templates** (`base.njk`, `header.njk`, `footer.njk`, `breadcrumbs.njk`) and **interactive partials** (`pageList.njk`, `pageListTable.njk`, forms).
- CSS must style both native HTML content and GCDS components. The GCDS utility classes and design tokens should be used for consistent spacing, typography, and colour, but the content HTML itself stays native.
- Future content pages added via Decap CMS or Markdown files will automatically follow this pattern with no additional configuration.

### Decision 001 Notes

- This decision should be revisited if GCDS introduces content-level components (e.g., a `<gcds-prose>` wrapper) that provide clear benefits over native HTML.
- The WET migration inventory (issue #771) will identify all current WET-dependent markup. The replacement mapping should follow this decision: content stays native, UI converts to GCDS.

## Decision 002: Use incremental integration with one production cutover

### Decision 002 Status

Accepted for implementation planning

### Decision 002 Date

2026-08-31

### Decision 002 Context

The migration needs small, reviewable changes while new and updated bilingual content continues to arrive on `main`. Most pages share `layouts/base.njk` and global WET assets, so a page-by-page production rollout would require conditional framework loading and create inconsistent shell behavior.

### Decision 002 Outcome

- Create one sequential `feature/gcds-<short-task-name>` branch at a time from `migration/gcds`.
- Push migration branches only to `upstream` and open feature pull requests into `migration/gcds`.
- Develop a parallel GCDS shell without changing the default WET layout or content files.
- Treat the completed foundation and shared shell as an atomic milestone within the incremental program.
- Defer residual WET-dependent content markup until shared templates and behaviors are stable.
- Release once through the final `migration/gcds` to `main` pull request after full-site quality assurance.

### Decision 002 Rationale

This approach provides focused previews, review, and rollback while preserving a stable production site and reducing conflicts with ongoing content work. It also prevents WET and GCDS framework assets from being mixed on the same rendered page.

### Decision 002 Implications

- Parallel layouts and partials will exist temporarily.
- `migration/gcds` must be rebased onto `upstream/main` before each new work package.
- Netlify deploy previews provide staging for feature and integration review.
- Production remains on WET until the final cutover.
- The [GCDS Delivery Strategy]({{ pathPrefix }}/en/gcds-delivery-strategy/) is the canonical record for workflow, sequencing, quality gates, risks, and rollback.

## Decision 003: Use a simple GCDS look with toolkit-specific navigation

### Decision 003 Status

Accepted for implementation planning

### Decision 003 Date

2026-11-25

### Decision 003 Context

The previous visual language is based on GCWeb and the Canada.ca shell. The migration should adopt GCDS rather than reproduce that visual treatment, while retaining required Government of Canada identity and the toolkit's existing user-facing functions.

### Decision 003 Outcome

- Keep the Government of Canada signature and wordmark and retain localized search.
- Do not reproduce the Canada.ca theme or topic menu.
- Design and approve the toolkit's own bilingual site menu, including its labels, hierarchy, responsive behavior, and keyboard interaction.
- Use GCDS components, design tokens, CSS Shortcuts, and semantic native HTML first, with the least custom CSS needed for site-specific presentation.
- Preserve user-facing behavior supplied by WET. Use a native or GCDS solution where one exists and focused custom JavaScript where a required behavior has no replacement.

### Decision 003 Rationale

A simple GCDS direction makes the target visual system clear, while a toolkit-specific menu can reflect the site's information architecture rather than Canada.ca's broader navigation. Prioritizing system styles reduces maintenance and avoids rebuilding GCWeb in custom CSS. Preserving behavior avoids treating a visual migration as an unapproved removal of user functions.

### Decision 003 Implications

- The toolkit site-menu design must be approved before Work Package 2 begins.
- Work Package 12 replaces the analytics chart rather than assuming it can be removed.
- Custom CSS and JavaScript require a documented gap and focused regression coverage.
- Material changes to site navigation or user-facing functions require an explicit product or accessibility decision.
