# GC Design System Migration Issue Map

## What Is Now In Place
- Migration epic issue: [Plan migration from WET to GC Design System (discovery + phased implementation plan) #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)
- Discovery sub-issues:
  - [Inventory WET dependencies across templates, assets, CSS, and JS #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771)
  - [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772)
  - [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773)
  - [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774)
  - [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775)
  - [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776)

## Epic
- [Plan migration from WET to GC Design System (discovery + phased implementation plan) #770](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/770)

## Discovery Issues
- [Inventory WET dependencies across templates, assets, CSS, and JS #771](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/771)
- [Inventory shared layouts, includes, partials, and reusable template structure #772](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/772)
- [Map current WET patterns to GC Design System components #773](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/773)
- [Identify no 1:1 replacement patterns and redesign requirements #774](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/774)
- [Assess delivery strategy: incremental migration vs full cutover #775](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/775)
- [Draft phased implementation plan and child issue breakdown #776](https://github.com/gc-da11yn/gc-da11yn.github.io/issues/776)

## Recommended Execution Order
1. #771
2. #772
3. #773
4. #774
5. #775
6. #776

## Project Setup Expectations
- Milestone: `GCDS Migration`
- Project: `GCDS Migration` (GitHub Projects v2)
- Status field baseline:
  - Epic #770: In Progress (Discovery)
  - Discovery issues: Backlog (move to In Progress one at a time)

## Branch and PR Expectations
- Base integration branch: `migration/gcds`
- Discovery and implementation branches created from `migration/gcds`
- PRs target `migration/gcds`
- Final PR targets `main`

## Done Condition for Discovery
Discovery is complete when #771-#776 are closed and epic #770 discovery exit criteria are satisfied.
