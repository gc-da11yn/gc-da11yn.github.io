---
title: GCDS migration documentation
description: Technical planning, discovery, and implementation documents for migrating the Digital Accessibility Toolkit from WET and GCWeb to GCDS.
permalink: "{{ permalinkPrefix }}en/gcds-migration/"
toc: true
---

## Planning and decisions

- [GC Design System Migration Plan]({{ pathPrefix }}/en/gcds-migration-plan/): Overview of the migration scope, phases, quality gates, and delivery approach.
- [GCDS Delivery Strategy]({{ pathPrefix }}/en/gcds-delivery-strategy/): Incremental delivery, review, cutover, and rollback strategy.
- [GCDS Migration: Implementation Decisions]({{ pathPrefix }}/en/gcds-implementation-decisions/): Architectural decisions governing the migration.
- [GCDS Phased Implementation Plan]({{ pathPrefix }}/en/gcds-phased-implementation-plan/): Work packages, dependencies, completion criteria, and verification requirements.
- [GC Design System Migration Issue Map]({{ pathPrefix }}/en/gcds-migration-issue-map/): Relationship between the epic, discovery issues, implementation phases, and completion conditions.

## Discovery and analysis

- [GC Design System Migration Inventory]({{ pathPrefix }}/en/gcds-migration-inventory/): Migration dependency hotspots, shared structures, and completed discovery artifacts.
- [WET/GCWeb Dependency Inventory]({{ pathPrefix }}/en/gcds-wet-dependency-inventory/): File-level inventory of framework, JavaScript, and custom CSS dependencies.
- [Shared Template Inventory]({{ pathPrefix }}/en/gcds-shared-template-inventory/): Shared Eleventy layouts, partials, macros, data contracts, and template relationships.
- [WET-to-GCDS Component Map]({{ pathPrefix }}/en/gcds-component-map/): Mapping to GCDS components, native HTML, custom implementations, and patterns without direct replacements.
- [GCDS No-Direct-Replacement Analysis]({{ pathPrefix }}/en/gcds-no-direct-replacement-analysis/): Redesign requirements for WET behaviors and patterns without complete GCDS replacements.
