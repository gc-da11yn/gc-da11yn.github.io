---
title: GCDS Parallel Page Shell Milestone Review
description: Accessibility, bilingual, responsive, fallback, and production-isolation review outcome for GCDS migration Work Package 4.
toc: true
---

<!-- cspell:ignore gcds hreflang path-prefix -->

{% set documentDetails %}

- **Issue:** [Complete and approve parallel page shell #815](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/815)
- **Branch:** `feature/gcds-page-shell`
- **Date:** November 26, 2026
- **Status:** Approved for issue #815 exit gate
- **Accessibility Lead decision:** Approve

{% endset %}
<!-- markdownlint-disable MD033 -->
<div class="well well-lg">
{{ documentDetails | markdown | safe }}
</div>
<!-- markdownlint-enable MD033 -->

## Scope

This milestone completes the parallel English and French GCDS page shell without changing the production WET layouts. It covers the main landmark, stable skip target, page introduction, GCDS grid, hierarchical breadcrumbs, localized date modified, a parallel home shell, and native fallback states.

## Accessibility review outcome

The Accessibility Lead approved the shell for the Work Package 4 exit gate. No critical, serious, moderate, or minor findings remained after re-review.

The first review identified a serious counterpart mismatch for the parallel home fixtures. The header logic now uses locale-root URLs only for the actual `/en/` and `/fr/` pages, while home-tagged fixtures use their paired `toggle` routes. Re-review confirmed that `hreflang`, the visible language link, and the enhanced `lang-href` agree.

## Verified states

- English and French enhanced fixtures.
- Parallel English and French home fixtures.
- English and French fixtures without descriptions.
- Nested breadcrumbs with path-prefix-aware internal links.
- Long bilingual page titles and representative metadata.
- JavaScript-disabled and failed-component-upgrade fallback states.
- One banner, main, and content-information landmark.
- One page-level H1 and a non-skipping heading sequence.
- Skip-link focus transfer to the stable `#main-content` target.
- Logical header, navigation, main, and footer reading order.
- A 320 CSS pixel viewport and effective 200% and 400% zoom viewports.
- Forced-colour focus appearance.
- Localized visible dates and matching machine-readable `page.date` values.
- GCDS fixtures without WET, jQuery, or FontAwesome assets.
- Normal English and French pages that continue to render with WET.

## Verification results

- `npm run build`: passed.
- Focused Jest shell and path-prefix assertions: 9 passed.
- Focused Playwright shell assertions: 14 passed.
- Scoped CSpell: passed with zero issues.
- `npm run link-check-quick`: passed with no broken links.
- `git diff --check`: passed.

The full build-validation test file was also exercised during development. The shell assertions passed; its unrelated pre-existing CSV BOM assertion failed because the generated English CSV begins with content bytes instead of a UTF-8 BOM.

## Exit gate

The shell milestone is approved for issue #815. No shell blocker remains for proceeding to Work Package 5 after this pull request is reviewed and merged into `migration/gcds`.
