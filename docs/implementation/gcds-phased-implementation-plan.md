# GCDS Phased Implementation Plan

<!-- cspell:ignore fieldsets lightbox pagedetails skipnav tagfilter unupgraded -->

**Issue:** [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776)
**Epic:** [Plan migration from WET to GC Design System #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
**Branch:** `migration/gcds` - [GCDS migration tracking PR #778](https://github.com/gc-da11yn/gc-da11yn.github.io/pull/778)
**Deploy preview:** [Digital Accessibility Toolkit / Boîte à outils de l'accessibilité numérique](https://deploy-preview-778--a11ycanada.netlify.app/)
**Date:** 2026-08-31
**Status:** Proposed for backlog approval

## Purpose

This plan converts the completed discovery work into an executable GCDS migration backlog. It defines phases, child-issue boundaries, dependencies, risk, completion criteria, and verification checkpoints.

The plan follows [Decision 001](gcds-implementation-decisions.md#decision-001-use-native-html-for-content-gcds-components-for-ui) and [Decision 002](gcds-implementation-decisions.md#decision-002-use-incremental-integration-with-one-production-cutover). Detailed evidence comes from the [WET/GCWeb Dependency Inventory](gcds-wet-dependency-inventory.md), [Shared Template Inventory](gcds-shared-template-inventory.md), [WET-to-GCDS Component Map](gcds-component-map.md), [No-Direct-Replacement Analysis](gcds-no-direct-replacement-analysis.md), and [GCDS Delivery Strategy](gcds-delivery-strategy.md).

## Delivery Rules

- Keep one active migration feature branch and pull request at a time.
- Rebase `migration/gcds` onto `upstream/main` before each work package.
- Create `feature/gcds-<short-task-name>` from the updated integration branch.
- Push migration branches only to `upstream` and target `migration/gcds` in each feature pull request.
- Keep the existing WET site authoritative until the final production cutover.
- Develop the GCDS shell in parallel and never load WET and GCDS framework assets on the same rendered page.
- Defer content-file changes until templates, shared UI, and complex behaviors are stable.
- Keep English and French behavior and data contracts equivalent.
- Use Netlify deploy previews for review and merge only after required checks and approvals pass.
- Do not merge PR #778 to `main` without explicit production-cutover approval.

## JavaScript and Fallback Standard

GCDS web components require JavaScript to register custom elements, attach Shadow DOM, and provide their enhanced presentation and behavior. The migration does not require the fully enhanced interface to behave identically when JavaScript is disabled.

Instead, each work package must determine whether its essential content or task remains available before component upgrade or without JavaScript. Use native links, forms, headings, lists, tables, and visible text as the baseline where practical. When a GCDS component cannot provide a usable native fallback, document the affected task, impact, and approved exception rather than claiming no-JavaScript parity.

## Common Definition of Done

Every child issue must meet these conditions unless its scope explains why a check does not apply:

- The feature branch contains only the named work package and necessary tests or documentation.
- Existing WET production templates remain unchanged until their planned cutover or content-migration issue.
- English and French states use shared data where appropriate and are reviewed together.
- Semantic HTML is used before ARIA, and accessible names match visible labels.
- The Netlify deploy preview renders the changed states without unexpected console errors.
- No rendered page loads both WET and GCDS framework assets.
- Automated and manual verification results are recorded in the pull request.
- New behavior and temporary compatibility code are documented where future cleanup depends on them.

## Common Verification

Every implementation pull request must run:

- `npm run build`
- Relevant Jest unit or integration tests
- CSpell for changed documentation and interface text
- `npm run link-check-quick` against the accepted baseline
- `git diff --check`

Manual verification must cover the changed English and French states, keyboard operation, focus visibility, accessible names, and responsive reflow when relevant. Interactive work must also assess screen-reader behavior and its native or no-JavaScript baseline.

## Phase and Dependency Summary

The following table lists the linear implementation order. Child issue numbers are assigned only after this backlog is approved and the issues are created.

| Order | Phase | Proposed Child Issue | Risk | Depends On |
| --- | --- | --- | --- | --- |
| 1 | Foundation | Establish parallel GCDS foundation and preview fixture | moderate | Discovery acceptance |
| 2 | Shell | Migrate header and global navigation group | serious | 1 |
| 3 | Shell | Migrate footer and contextual links | moderate | 2 |
| 4 | Shell | Complete and approve parallel page shell | serious | 3 |
| 5 | Components | Migrate notices and archived-content state | serious | 4 |
| 6 | Components | Migrate secondary navigation, downloads, and contribution UI | moderate | 5 |
| 7 | Components | Migrate landing, collection, update, and role templates | moderate | 6 |
| 8 | Behavior | Replace page-directory overlays with inline structure | serious | 7 |
| 9 | Behavior | Replace directory tag filtering with progressive enhancement | serious | 8 |
| 10 | Behavior | Replace enhanced directory table behavior | serious | 9 |
| 11 | Behavior | Replace clauses lightbox and WET footnotes with native references | moderate | 10 |
| 12 | Behavior | Remove or replace analytics chart enhancement | moderate | 11 |
| 13 | Cleanup | Migrate language-selection and not-found pages | serious | 12 |
| 14 | Cleanup | Migrate remaining inline content dependencies | serious | 13 |
| 15 | Cleanup | Activate GCDS default layout and remove legacy runtime | critical | 14 |
| 16 | QA/Cutover | Complete full-site QA and production cutover | critical | 15 |

Implementation remains sequential under Decision 002. Dependencies may be adjusted in the approved GitHub issue bodies only when doing so does not create concurrent feature branches or mix framework runtimes.

## Phase 0: Discovery

Issues #771 through #776 form the Discovery phase.

### Discovery Exit Gate

- WET, GCWeb, Bootstrap, FontAwesome, JavaScript, and custom-style dependencies are inventoried.
- Shared layouts, partials, macros, and data contracts are mapped.
- Direct, composed, native, removed, and no-equivalent replacements are classified.
- Redesign recommendations and accessibility constraints are documented.
- Incremental integration and single production cutover are accepted.
- This phased plan and child backlog are approved before implementation issues are created.

## Phase 1: Foundation

### Work Package 1: Establish Parallel GCDS Foundation and Preview Fixture

**Proposed branch:** `feature/gcds-foundation`

**Purpose:** Prove that GCDS can build and render independently without changing normal WET site output.

**Scope:**

- Select and pin exact versions of GCDS components and CSS Shortcuts in `package.json` and the lock file.
- Add a parallel GCDS base layout and head partial under `src/_includes/`.
- Preserve existing metadata, title, locale, alternate-language, analytics, favicon, and path-prefix behavior where applicable.
- Add dedicated English and French preview fixtures that explicitly use the parallel layout.
- Add integration assertions that both fixtures build and omit WET, jQuery, and FontAwesome assets.
- Leave `src/src.json`, current content front matter, and existing WET layouts unchanged.

**Exclusions:** Production layout changes, final header or footer design, content migration, and WET removal.

**Dependencies and blockers:** Discovery exit gate; exact package versions and supported import approach must be confirmed from official GCDS documentation.

**Risk:** `moderate`

**Definition of done:**

- Pinned dependencies install reproducibly.
- English and French fixture routes render through the parallel GCDS layout.
- The fixtures load GCDS assets and no WET, jQuery, or FontAwesome assets.
- Existing site routes continue to render through WET without output regressions caused by this work.
- The unupgraded custom-element state and JavaScript-disabled state are recorded for the fixture.

**Specific verification:**

- Inspect fixture network requests and generated HTML for mixed framework assets.
- Verify fixture titles, language metadata, and counterpart links.
- Disable JavaScript and record which native content and tasks remain available.
- Compare the normal English and French home output with the pre-change baseline.

## Phase 2: Shell

### Work Package 2: Migrate Header and Global Navigation Group

**Proposed branch:** `feature/gcds-header`

**Purpose:** Replace the global header as one coherent bilingual and keyboard-navigation unit.

**Scope:**

- Add GCDS header, signature, language toggle, Canada.ca search, theme and topic menu, top navigation, and skip-navigation partials.
- Reuse existing locale data and counterpart URL logic.
- Preserve search endpoint, query parameter, labels, path prefixes, home-page handling, and translation suppression.
- Bind the new header group only to the parallel GCDS layout and fixtures.

**Exclusions:** Footer, body grid, shared notices, page-family navigation, and changes to current WET header partials.

**Dependencies and blockers:** Work Package 1; official component APIs and slot composition must be confirmed for the pinned version.

**Risk:** `serious`

**Definition of done:**

- Header identity appears once and landmarks are not duplicated.
- English and French language toggles resolve to the correct fixture counterparts.
- Search submits the correct localized query.
- Global and site navigation have descriptive names and correct active-state behavior.
- The skip link is first in logical keyboard order, becomes visible on focus, and reaches the main target.

**Specific verification:**

- Test complete keyboard order at narrow and wide viewports.
- Verify search, menu, and language-toggle accessible names with a screen reader.
- Test 200% and 400% zoom for overlap or obscured focus.
- Assess essential navigation before component upgrade and with JavaScript disabled; document exceptions.

### Work Package 3: Migrate Footer and Contextual Links

**Proposed branch:** `feature/gcds-footer`

**Purpose:** Replace the global footer while preserving bilingual contextual navigation.

**Scope:**

- Add a GCDS footer partial to the parallel layout.
- Map contextual links from existing shared data to supported component properties or slots.
- Avoid duplicate Government of Canada identity, standard links, or content-information landmarks.

**Exclusions:** Contribution links outside the footer and removal of the WET footer.

**Dependencies and blockers:** Work Package 2; pinned footer API and content slots.

**Risk:** `moderate`

**Definition of done:**

- Footer and contextual links render correctly in both fixture languages.
- Standard identity and links appear once.
- Link names and reading order remain clear at narrow and wide viewports.
- Existing footer data contracts remain compatible or documented changes are tested.

**Specific verification:**

- Navigate the footer by keyboard and screen-reader links list.
- Check descriptive link text, footer landmark count, reflow, and component upgrade state.

### Work Package 4: Complete and Approve Parallel Page Shell

**Proposed branch:** `feature/gcds-page-shell`

**Purpose:** Complete the parallel shell milestone without making it the site default.

**Scope:**

- Implement the main landmark, stable skip target, page title and description region, containers, grid, breadcrumbs, and date modified.
- Add or adapt the parallel home layout where the shell requires it.
- Expand fixtures to cover nested breadcrumbs, long bilingual titles, missing descriptions, and representative metadata.
- Record shell milestone review results in the pull request or a focused review artifact.

**Exclusions:** Shared notices, page-family templates, complex behavior, content edits, and default-layout activation.

**Dependencies and blockers:** Work Package 3; design and accessibility reviewers must be available for milestone approval.

**Risk:** `serious`

**Definition of done:**

- The parallel shell has one banner, main, and content-information landmark and one page-level H1.
- Breadcrumbs preserve hierarchy and internal path prefixes.
- Date modified uses the existing date source and localized presentation.
- The shell milestone passes code, design, bilingual, keyboard, and accessibility review.
- No GCDS fixture loads WET assets, and normal site output remains on WET.

**Specific verification:**

- Test landmarks, heading hierarchy, skip-link focus, and reading order.
- Test 320 CSS pixels, 200% and 400% zoom, and forced-colour mode.
- Review English and French structure for parity.
- Assess native content and navigation before component upgrade and without JavaScript.

### Shell Exit Gate

Work Package 4 must record shell approval before component work begins. Any `critical` or `serious` shell finding blocks the next phase.

## Phase 3: Components

### Work Package 5: Migrate Notices and Archived-Content State

**Proposed branch:** `feature/gcds-notices`

**Purpose:** Replace static message and archived-state presentation without recreating unnecessary WET behavior.

**Scope:**

- Migrate general, landing-page, standard, Office, draft, and translation notices.
- Render archived content as one persistent inline notice near the page heading.
- Preserve conditional logic, localized text, and message meaning.
- Remove live alert semantics from messages present at initial page load.

**Exclusions:** Sticky, dismissible, or animated archived banners unless new evidence and a separate approved scope justify them.

**Dependencies and blockers:** Work Package 4; supported notice variants in the pinned GCDS version.

**Risk:** `serious`

**Definition of done:**

- Each message uses a notice type matching its meaning.
- Static messages are not exposed as live alerts.
- Archived content is announced once and does not obscure content or focus.
- English and French fixture states cover every conditional notice type.

**Specific verification:**

- Inspect accessibility-tree roles and names for each notice state.
- Test long messages at 400% zoom and with JavaScript disabled.

### Work Package 6: Migrate Secondary Navigation, Downloads, and Contribution UI

**Proposed branch:** `feature/gcds-secondary-ui`

**Purpose:** Migrate reusable supporting interfaces while retaining native semantics and visible information.

**Scope:**

- Migrate on-this-page navigation and Office peer-document navigation.
- Migrate download blocks while keeping file name, type, and size as text.
- Replace or remove FontAwesome icons in download and contribution interfaces.
- Migrate contribution links and associated bilingual labels.

**Exclusions:** Landing-page groups, directories, tables, and content-file icon markup.

**Dependencies and blockers:** Work Package 5; confirmed GCDS icon availability and Office navigation pattern.

**Risk:** `moderate`

**Definition of done:**

- Secondary navigation uses labelled native navigation and preserves link relationships.
- Download links retain visible file metadata and never rely on icons alone.
- Decorative icons are excluded from the accessibility tree.
- Contribution and download links work in both languages.

**Specific verification:**

- Test heading-navigation output, download accessible names, and link purpose out of context.
- Verify file downloads and internal URLs use `pathPrefix` where required.

### Work Package 7: Migrate Landing, Collection, Update, and Role Templates

**Proposed branch:** `feature/gcds-page-families`

**Purpose:** Replace recurring GCWeb and Bootstrap structures in high-use page families.

**Scope:**

- Migrate collections, about, updates, role-group sections, role mini-navigation, and related home-layout structures.
- Use native headings and link lists in GCDS grid for doormat-style navigation.
- Use cards only where each item is a verified content preview.
- Replace equal-height JavaScript with modern layout.

**Exclusions:** Page-directory filtering, enhanced tables, and residual WET classes embedded in Markdown content.

**Dependencies and blockers:** Work Package 6; confirmed grid and card use criteria.

**Risk:** `moderate`

**Definition of done:**

- Representative landing, collection, update, and role fixtures render in both languages.
- Heading and list relationships are preserved.
- Layout order remains logical across breakpoints without equal-height JavaScript.
- No migrated template uses WET or Bootstrap layout classes.

**Specific verification:**

- Compare representative English and French page-family output.
- Test reading order, descriptive links, 320 CSS pixels, and 400% zoom.

### Components Exit Gate

All migrated shared UI and page-family fixtures must render in both languages without WET assets. Any shared component still required by the GCDS default layout must be assigned to a later work package explicitly.

## Phase 4: Behavior

### Work Package 8: Replace Page-Directory Overlays With Inline Structure

**Proposed branch:** `feature/gcds-directory-structure`

**Purpose:** Remove modal and side-panel dependencies from directory definitions and filters.

**Scope:**

- Move definitions and filtering controls into logical inline document positions.
- Preserve headings, fieldsets, legends, and the complete generated result set.
- Remove `wb-overlay`, full-screen popup, and side-panel behavior from GCDS output.
- Add representative directory states to the GCDS preview surface.

**Exclusions:** Filtering JavaScript, sorting, pagination, and final content-file cleanup.

**Dependencies and blockers:** Work Package 7; no blockers because the approved #774 recommendation is inline structure.

**Risk:** `serious`

**Definition of done:**

- Definitions and filter controls are available in document order without a dialog.
- The complete list or table is available without JavaScript.
- Heading and form-group relationships are clear in both languages.
- WET overlay markers are absent from migrated directory output.

**Specific verification:**

- Navigate definitions, controls, and results by keyboard and screen reader.
- Test long filter groups at narrow widths and 400% zoom.

### Work Package 9: Replace Directory Tag Filtering With Progressive Enhancement

**Proposed branch:** `feature/gcds-directory-filtering`

**Purpose:** Replace `wb-tagfilter` with a focused native form and vanilla JavaScript enhancement.

**Scope:**

- Confirm and implement only the filters needed for directory tasks.
- Provide visibly labelled search and grouped checkbox controls.
- Add client-side filtering without jQuery.
- Preserve state, keep focus stable, provide reset, and announce result count and no-results changes through one polite status region.
- Keep the complete unfiltered results visible when JavaScript is unavailable.

**Exclusions:** Table sorting, pagination, and column visibility.

**Dependencies and blockers:** Work Package 8; product confirmation of the essential filter set.

**Risk:** `serious`

**Definition of done:**

- WET tag-filter behavior and classes are absent from GCDS output.
- Search, filters, reset, result status, and no-results state work in both languages.
- Dynamic updates do not move focus or produce duplicate announcements.
- The native baseline provides complete results without JavaScript.

**Specific verification:**

- Test combined filters, empty results, reset, repeated changes, and browser back/forward behavior where state is retained.
- Verify status announcements with a screen reader and rapid input.

### Work Package 10: Replace Enhanced Directory Table Behavior

**Proposed branch:** `feature/gcds-directory-table`

**Purpose:** Preserve a semantic directory table and add only justified enhancements.

**Scope:**

- Confirm which sorting, pagination, and column controls are essential.
- Render a complete captioned table with correct headers as the baseline.
- Implement approved enhancements without jQuery or WET table plugins.
- Expose sort and page state, preserve focus, and avoid removing essential columns at narrow widths.

**Exclusions:** Enhancements without a documented user need and unrelated static tables.

**Dependencies and blockers:** Work Package 9; product decision on essential table tasks.

**Risk:** `serious`

**Definition of done:**

- The full native table remains available without JavaScript.
- Approved sorting and pagination controls are keyboard operable and expose current state.
- Filter and table status messages do not conflict or duplicate announcements.
- Responsive presentation preserves the information needed to understand each row.

**Specific verification:**

- Test captions and header associations with a screen reader.
- Test sort direction, pagination boundaries, stable focus, filtering combinations, and narrow-screen access.

### Work Package 11: Replace Clauses Lightbox and WET Footnotes With Native References

**Proposed branch:** `feature/gcds-native-references`

**Purpose:** Replace two WET reference-navigation patterns with durable native links.

**Scope:**

- Replace the clauses lightbox with a clearly headed in-page section and stable fragment link.
- Preserve the bilingual clauses content and counterpart behavior.
- Retain native superscript footnote references, a headed notes section, and descriptive return links.
- Replace WET-only hidden-text styling without introducing popovers or custom widgets.

**Exclusions:** Copy editing and restructuring unrelated procurement content.

**Dependencies and blockers:** Work Package 10; none beyond verification of unique identifiers.

**Risk:** `moderate`

**Definition of done:**

- No GCDS output uses the WET lightbox or footnote plugin classes.
- Clauses are linkable, searchable, and available without JavaScript.
- Footnote references and return links are unique, bidirectional, localized, and meaningful out of context.
- English and French structures remain equivalent.

**Specific verification:**

- Navigate every reference and return path with keyboard and screen reader.
- Verify focus visibility and browser history after fragment navigation.

### Work Package 12: Remove or Replace Analytics Chart Enhancement

**Proposed branch:** `feature/gcds-analytics`

**Purpose:** Remove WET chart behavior while preserving authoritative analytics data.

**Scope:**

- Keep the captioned native data table as the authoritative presentation.
- Remove the chart enhancement unless a documented user need justifies retaining it.
- If retained, separately evaluate the chosen library for text alternatives, exact value access, non-colour cues, keyboard access, and reduced motion.
- Remove WET chart initialization and jQuery dependencies from GCDS output.

**Exclusions:** General analytics collection or reporting changes.

**Dependencies and blockers:** Work Package 11; evidence of user need and an approved library are blockers only if a chart is retained.

**Risk:** `moderate`

**Definition of done:**

- Analytics data remains complete and understandable in both languages.
- WET chart classes, initialization, and plugin URLs are absent from GCDS output.
- Any retained visualization is supplementary and meets its documented accessibility requirements.
- The analytics page remains useful without JavaScript.

**Specific verification:**

- Check table caption and header associations.
- If a chart remains, verify exact values without hover, text summary, non-colour cues, and reduced-motion behavior.

### Behavior Exit Gate

All priority 1 requirements from issue #774 must be implemented or explicitly approved for removal. Essential content and tasks must have tested native baselines or documented exceptions.

## Phase 5: Cleanup

### Work Package 13: Migrate Language-Selection and Not-Found Pages

**Proposed branch:** `feature/gcds-standalone-pages`

**Purpose:** Migrate entry and error pages that bypass the shared Eleventy layout.

**Scope:**

- Migrate `src/index.html` and `src/404.html` to approved GCDS and native patterns.
- Remove splash-image randomization and use one stable decorative image or no image.
- Preserve English and French language-selection and error-recovery tasks.
- Ensure essential links and content exist in native markup.

**Exclusions:** Default layout activation and general content-page migration.

**Dependencies and blockers:** Work Package 12; decision on whether one splash image remains.

**Risk:** `serious`

**Definition of done:**

- Both standalone pages render without WET, jQuery, Bootstrap, or FontAwesome assets.
- Language selection and recovery links are usable by keyboard and without JavaScript.
- Each page has coherent language metadata, landmarks, headings, focus order, and reflow.
- Decorative imagery is ignored by assistive technology and does not cause layout shift.

**Specific verification:**

- Test the root page and a real missing route in the built preview.
- Test keyboard, screen reader, 400% zoom, JavaScript disabled, and both languages.

### Standalone Page Checkpoint

The splash and not-found pages must be independently ready for the final runtime removal because they do not inherit the shared shell.

### Work Package 14: Migrate Remaining Inline Content Dependencies

**Proposed branch:** `feature/gcds-content-cleanup`

**Purpose:** Remove residual framework-dependent markup after reusable templates are stable.

**Scope:**

- Inventory remaining WET, GCWeb, Bootstrap, FontAwesome, layout, visibility, spacing, border, and hidden-text classes in Markdown and content-specific Nunjucks files.
- Map every match to native HTML, GCDS CSS Shortcuts, design tokens, an approved component, or intentional removal.
- Update English and French content pairs together in reviewable batches within this work package.
- Preserve wording and document semantics unless a change is necessary to remove the dependency.

**Exclusions:** Unrelated content editing, translation correction, and new content.

**Dependencies and blockers:** Work Package 13; stable shared replacements for every recurring pattern.

**Risk:** `serious`

**Definition of done:**

- Every remaining content-level framework match is removed or explicitly justified.
- English and French pairs retain equivalent structure and functioning links.
- Hidden text, tables, figures, headings, and lists preserve their semantics.
- No unrelated copy changes are included.

**Specific verification:**

- Record before-and-after source and generated-output inventories.
- Review representative pages for every replaced class family.
- Compare bilingual pairs and run focused accessibility checks on semantic changes.

### Work Package 15: Activate GCDS Default Layout and Remove Legacy Runtime

**Proposed branch:** `feature/gcds-default-cutover`

**Purpose:** Make GCDS authoritative in preview and remove runtime dependencies that are no longer needed.

**Scope:**

- Change `src/src.json` to the approved GCDS default layout.
- Remove preview-only layout binding or repurpose fixtures as regression pages.
- Remove WET/GCWeb styles and scripts, jQuery, FontAwesome, and plugin initializers only after dependency inventories confirm they are unused.
- Retire replaced layouts and partials using a reversible commit boundary.
- Record the known-good pre-activation commit.

**Exclusions:** Merging PR #778 to `main` and production deployment changes.

**Dependencies and blockers:** Work Package 14; zero unexplained source and generated-output legacy dependencies.

**Risk:** `critical`

**Definition of done:**

- All generated preview routes use the GCDS layout or an explicitly documented standalone structure.
- Source and generated output contain no unexplained legacy runtime URLs, classes, or initializers.
- Full build and automated regression suites pass.
- Reverting this work package restores the previous preview state without content loss.

**Specific verification:**

- Inventory WET, GCWeb, Bootstrap, FontAwesome, jQuery, and plugin identifiers in source and `_site`.
- Crawl representative routes for missing assets, console errors, mixed runtimes, and layout failures.
- Verify the recorded rollback commit and rehearse the revert procedure without pushing it.

### Cleanup Exit Gate

No unexplained legacy dependency may remain. Any approved exception must name its owner, affected routes, reason, and removal condition before full-site QA begins.

## Phase 6: QA and Production Cutover

### Work Package 16: Complete Full-Site QA and Production Cutover

**Proposed branch:** `feature/gcds-release-readiness`

**Purpose:** Verify the integrated migration and prepare the explicit production release decision.

**Scope:**

- Test representative content, landing, role, directory, Office, archived, download, analytics, splash, and not-found pages in English and French.
- Complete automated accessibility scans plus manual keyboard, screen-reader, reflow, forced-colour, reduced-motion, and fallback assessments.
- Verify routes, language toggles, internal links, search, filtering, tables, downloads, and error recovery.
- Record release owner, rollback owner, rollback triggers, known-good commit, findings, exceptions, and approvals.
- Approve PR #778 for an explicitly confirmed merge to `main` only after all gates pass.

**Exclusions:** Automatic merging, changing production deployment infrastructure, and unrelated remediation.

**Dependencies and blockers:** Work Package 15; unresolved `critical` or `serious` findings block cutover.

**Risk:** `critical`

**Definition of done:**

- Build, tests, CSpell, links, and deployment-preview checks pass.
- Representative page-family results and bilingual parity are documented.
- Shared and complex workflows pass keyboard and screen-reader testing.
- Essential native fallbacks or approved JavaScript exceptions are documented.
- Release and rollback ownership and triggers are complete.
- Required reviewers explicitly approve PR #778 for production merge.
- Production merge and post-deployment verification occur only after separate user confirmation.

**Specific verification:**

- Run the complete repository test and quality-check suite.
- Validate at 320 CSS pixels, 200% and 400% zoom, forced colours, and reduced motion.
- Test with JavaScript disabled and before component upgrade for representative essential tasks.
- After an approved production merge, verify GitHub Pages deployment and repeat critical bilingual workflows on production.

### Final Exit Gate

The migration is complete only when PR #778 is explicitly approved and merged, production verification passes, and the project records any deferred exceptions with owners and follow-up issues. Issue #770 is not closed automatically by this plan.

## Pattern Coverage

The following table demonstrates that each known migration area has an implementation owner.

| Discovery Pattern | Work Package |
| --- | --- |
| GCDS packages, CSS Shortcuts, parallel layout, head | 1 |
| Header, identity, language, search, global and site navigation, skip link | 2 |
| Footer and contextual links | 3 |
| Main shell, grid, title, breadcrumbs, date modified | 4 |
| Alerts, notices, archived state | 5 |
| On-this-page, Office navigation, downloads, contribution links, icons | 6 |
| Doormats, cards, collections, updates, roles, equal-height grids | 7 |
| Modal and side-panel overlays | 8 |
| Tag filtering and result announcements | 9 |
| Enhanced table behavior | 10 |
| Clauses lightbox and footnotes | 11 |
| Table-to-chart behavior | 12 |
| Splash randomizer and standalone shells | 13 |
| Inline content utilities, layout classes, and icons | 14 |
| Default layout, WET runtime, jQuery, FontAwesome, compatibility code | 15 |
| Full bilingual, accessibility, functional, and release verification | 16 |

## Issue Creation Workflow

This document is the review source for the proposed backlog. No child issue number in this plan is a GitHub issue number.

After approval:

1. Commit this plan and supporting documentation to `migration/gcds` and push only to `upstream`.
2. Move issue #776 to In Review.
3. Present the final 16 proposed titles before creating GitHub issues.
4. Create the issues with links to #770 and #776 and add them to Project 13 as Backlog.
5. Record the assigned issue numbers in this plan in a separate documentation commit.
6. Activate only Work Package 1; leave later work packages in Backlog until their dependencies pass.

## Completion Assessment

- Discovery, Foundation, Shell, Components, Behavior, Cleanup, and QA/Cutover work are sequenced.
- Sixteen reviewable child issues define titles, scope, exclusions, dependencies, risk, completion criteria, and verification.
- Dependencies, blockers, milestone gates, and production confirmation are explicit.
- Build, links, accessibility, bilingual routing, and JavaScript fallback assessment are defined phase by phase.
- The backlog is ready for review before GitHub issue and Project 13 creation.
