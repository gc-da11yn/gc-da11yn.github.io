# GCDS Delivery Strategy

**Issue:** [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775)
**Epic:** [Plan migration from WET to GC Design System #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
**Branch:** `migration/gcds` - [GCDS migration tracking PR #778](https://github.com/gc-da11yn/gc-da11yn.github.io/pull/778)
**Date:** 2026-08-31
**Status:** Accepted for implementation planning

## Decision

Use incremental development and review on the `migration/gcds` integration branch, followed by one production cutover to `main`.

Implementation is divided into small, sequential feature branches. Each branch starts from the latest `migration/gcds`, contains one cohesive change, and is reviewed through a pull request back into `migration/gcds`. The foundation and shared shell form an atomic milestone inside this sequence because the default layout and global assets affect nearly every page.

Production remains on the existing WET/GCWeb implementation until the parallel GCDS shell, shared UI, complex behaviors, standalone pages, and remaining content markup pass full-site quality assurance. The final release occurs through [PR #778](https://github.com/gc-da11yn/gc-da11yn.github.io/pull/778) from `migration/gcds` to `main`.

## Decision Drivers

- Make each change small enough for meaningful code, design, bilingual, and accessibility review.
- Keep `migration/gcds` available for rebases from `upstream/main` while content continues to change.
- Avoid editing English and French content files until shared templates and behaviors are stable.
- Preserve a usable WET production site until the complete GCDS experience is ready.
- Keep each approved work package independently revertible.
- Use existing Netlify deploy previews without introducing production deployment changes.
- Prevent WET and GCDS styles or runtimes from loading on the same rendered page.

## Delivery Models Considered

The following table compares the requested delivery models and the selected hybrid release approach.

| Model | Benefits | Risks | Decision |
| --- | --- | --- | --- |
| One implementation and cutover | Avoids transitional code and produces one final state | Creates a large review surface, delays feedback, combines unrelated accessibility risks, and makes rollback coarse | Rejected |
| Page-by-page production migration | Allows visible releases throughout implementation | Requires conditional layouts and assets, permits inconsistent user experiences, complicates bilingual QA, and increases WET/GCDS collision risk | Rejected |
| Incremental integration with one production cutover | Supports focused review and rollback while production remains stable | Requires a temporary parallel shell and disciplined integration-branch maintenance | Accepted |

## Architectural Constraints

### Shared Default Layout

`src/src.json` assigns `layouts/base.njk` by default, and `layouts/home.njk` extends that layout. A change to the default shell therefore affects most generated pages at once.

### Global Framework Assets

`partials/head.njk` loads WET/GCWeb and FontAwesome styles globally. `layouts/base.njk` loads jQuery and WET/GCWeb scripts globally. Loading GCDS beside these assets on the same page would make class ownership, component initialization, and regression diagnosis unreliable.

### Shared Bilingual Contracts

The header, language toggle, breadcrumbs, footer, page metadata, and route behavior depend on shared locale data and `toggle` values. Shell changes must preserve these contracts in both languages.

### Standalone Pages

`src/index.html` and `src/404.html` do not inherit the default Eleventy layout. They require explicit migration and testing before WET can be removed.

## Branch and Pull Request Workflow

1. Finish or close the current migration feature pull request before starting another work package.
2. Fetch `upstream` and rebase `migration/gcds` onto `upstream/main`.
3. Run the baseline build and focused checks on the rebased integration branch.
4. Create `feature/gcds-<short-task-name>` from `migration/gcds`.
5. Push the feature branch to `upstream`. Do not push migration work to `origin`.
6. Open a pull request from the feature branch into `migration/gcds`.
7. Review the code, Netlify deploy preview, English and French states, and accessibility behavior affected by the change.
8. Circulate the pull request for approval.
9. Merge only after required checks and review pass, then delete the feature branch.
10. Start the next work package from the updated `migration/gcds`.

Prefer one squash commit per feature pull request when repository settings and review needs permit it. This keeps each work package independently revertible. If squash merge is unavailable or would discard useful commit boundaries, use the repository's approved merge method while preserving a focused pull request scope.

## Migration Sequence

### 1. Delivery Decision

Complete discovery and delivery documentation before creating implementation branches. Issue #776 will convert this strategy and the earlier inventories into implementation issues.

### 2. Parallel GCDS Foundation

Create a small first implementation pull request that:

- Pins approved GCDS component and CSS Shortcuts versions.
- Adds a parallel GCDS layout and head foundation.
- Adds a dedicated preview fixture with representative English and French states.
- Leaves `src/src.json`, current content front matter, and normal WET output unchanged.
- Ensures the GCDS preview page loads only GCDS assets, not WET assets.

The preview fixture is required so reviewers can evaluate a rendered result. Adding unused template files without a rendered route would prove only that the build accepts them.

### 3. Header Group

Migrate the header as one cohesive user-facing group:

- Government of Canada identity.
- Language toggle.
- Search.
- Theme and topic menu.
- Site navigation.
- Skip navigation.

These elements share layout, keyboard order, accessible naming, and bilingual behavior. Splitting them into isolated pull requests would create shell states that cannot be reviewed meaningfully.

### 4. Footer Group

Migrate the footer and contextual links while preserving the existing bilingual data contract. Avoid duplicating identity elements supplied by GCDS shell components.

### 5. Page Shell

Complete the parallel base layout around:

- Main landmark and skip target.
- Page title and description region.
- Containers and grid.
- Breadcrumbs.
- Date modified region.

Treat the completed foundation, header, footer, and page shell as one atomic milestone. Do not make the GCDS layout the site default until the entire milestone passes bilingual and accessibility review.

### 6. Shared UI

Migrate shared UI in cohesive behavior groups rather than by arbitrary file count:

- Notices and archived state.
- On-this-page and Office navigation.
- Downloads and contribution block.
- Cards, doormats, and landing-page structures.

### 7. Complex Behaviors

Implement the approved recommendations from the [No-Direct-Replacement Analysis](gcds-no-direct-replacement-analysis.md). Directory filtering, enhanced tables, clauses reference content, footnotes, analytics, and splash behavior should each receive focused scope and validation.

### 8. Standalone Pages

Migrate the language-selection and not-found pages explicitly because they bypass the shared layout.

### 9. Content Markup

Leave content changes until shared templates and behaviors are complete. Continue rebasing `migration/gcds` onto `upstream/main` so new and updated content arrives before cutover.

After template migration, inventory remaining WET, GCWeb, Bootstrap, FontAwesome, and utility classes embedded in content. Migrate only the remaining inline dependencies, keeping English and French page pairs together.

### 10. Default Layout and Cleanup

Change the default layout only after all required shared and complex behavior work is complete. Remove WET assets and compatibility code only after source and rendered-output searches confirm that no page still depends on them.

Separating the default-layout switch from final dependency removal is acceptable when it makes review and rollback safer.

## Preview and Staging Approach

Netlify deploy previews are the staging environment for feature pull requests and the tracking pull request. The existing preview configuration builds with development settings so reviewers can use the Sa11y checker and inspect representative routes.

Each feature preview must include:

- The dedicated GCDS English and French fixture during parallel-shell development.
- Representative pages for every affected page family after the default-layout switch is proposed.
- A comparison against the current production page for content, route, and task parity.

Production continues to deploy from `main` through the existing GitHub Pages workflow. This strategy does not add feature flags, branch-based production deployment, or other deployment infrastructure.

## Quality Gates

### Every Feature Pull Request

- `npm run build` passes.
- Relevant Jest tests pass.
- Changed documentation and interface text pass CSpell.
- `npm run link-check-quick` completes against the accepted baseline.
- The Netlify deploy preview is available.
- Changed English and French states are reviewed.
- Keyboard operation, focus visibility, accessible names, landmarks, and reflow are checked when relevant.
- No rendered page loads both WET and GCDS framework assets.

### Shell Milestone

- Header, language toggle, search, menus, breadcrumbs, skip navigation, main landmark, and footer work together.
- Heading hierarchy and landmark structure are valid.
- English and French routes and counterpart links are correct.
- The shell works at 200% and 400% zoom and in forced-colour mode.
- Essential navigation remains usable when JavaScript is unavailable.

### Final Cutover

- All priority 1 redesign requirements from issue #774 are resolved or explicitly approved for removal.
- Full production builds, tests, spellcheck, and link checks pass.
- Representative content, landing, role, directory, Office, archived, downloadable-document, splash, and not-found pages are reviewed in both languages.
- Keyboard and screen-reader workflows pass for all shared and complex behaviors.
- Enhanced features retain their documented no-JavaScript baselines.
- Source and generated output contain no unexplained WET, GCWeb, Bootstrap, FontAwesome, jQuery, or WET plugin dependencies.
- A release owner, rollback owner, rollback trigger, and known-good commit are recorded before merging PR #778.

## Rollback Strategy

Focused feature pull requests provide the primary rollback boundary. Before production cutover, revert the affected feature merge on `migration/gcds`, rebuild the preview, and correct the work in a new branch.

After production cutover, revert the cutover merge on `main` and allow the existing GitHub Pages workflow to rebuild the previous WET site. The release checklist must identify the known-good commit and conditions that trigger rollback. No fixed rollback deadline is established by this decision.

## Risks and Mitigations

The following table identifies delivery risks and required controls.

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Shared-shell regression affects most pages | serious | Keep the GCDS shell parallel until its complete milestone passes review |
| WET and GCDS assets conflict | serious | Bind each layout to one framework asset set and test rendered output for mixed dependencies |
| Language routes or labels diverge | serious | Review representative English and French states in every shell and shared-UI pull request |
| Plugin replacement creates accessibility barriers | serious | Implement one behavior per focused pull request using issue #774 requirements |
| Long-lived integration branch drifts from content on `main` | moderate | Rebase from `upstream/main` before each sequential work package |
| Content migration creates recurring conflicts | moderate | Defer content-file changes and migrate remaining inline dependencies near cutover |
| Large final switch hides regressions | serious | Require feature previews, shell milestone review, page-family QA, and a documented rollback point |

## Consequences

### Positive

- Reviewers receive small changes and working previews.
- Content work on `main` remains largely independent of migration work.
- Accessibility and bilingual defects can be isolated to a focused work package.
- Production remains stable until the complete replacement is ready.
- Reverts correspond to cohesive user-facing changes.

### Costs

- Parallel layouts and partials exist temporarily.
- The team must maintain branch discipline and keep `migration/gcds` current with `main`.
- The final cutover still requires broad full-site validation.
- Preview fixtures and temporary migration tests must be removed or repurposed after cutover.

## Out of Scope

- Creating implementation feature branches or pull requests.
- Changing production deployment configuration.
- Assigning implementation estimates by person or day.
- Defining the detailed child-issue breakdown tracked by issue #776.

## Completion Assessment

- The recommended approach and rationale are documented.
- Risks and mitigations are explicit.
- The branch and pull request workflow uses only `upstream` and is defined from branch creation through merge.
- Netlify preview, production release, and rollback approaches reflect current repository capabilities.
- The decision links to epic #770 and provides direct inputs for issue #776.
