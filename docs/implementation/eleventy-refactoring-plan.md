# Eleventy Configuration Refactoring Plan

**Date**: September 26, 2025
**Status**: Phase 1 - In Progress
**Branch**: `fix/sitemap`

## Overview

The `.eleventy.js` file has grown to 448 lines and handles multiple concerns, affecting both maintainability and performance. This document outlines a three-phase refactoring plan to improve build performance, code organization, and developer experience.

## Current Issues

### Performance Bottlenecks

- Git operations run on every build regardless of file changes
- Markdown parser initialized on every build even if not used
- Git creation date computation runs `execSync` for every page on every build
- No memoization for expensive operations like heading extraction
- All transforms run on every HTML file when they could be selective

### Maintainability Issues

- Single 448-line file handles multiple responsibilities
- Mixed concerns: configuration, data processing, git operations, transforms
- Difficult to test individual components
- Hard for multiple developers to work on different features

## Architecture Goals

### Target Structure

```text
eleventy/
├── config/
│   ├── markdown.js         # Markdown-it setup and plugins
│   ├── transforms.js       # HTML transforms (beautify, CSV UTF-8 BOM)
│   ├── filters.js          # Date formatting, locale matching, etc.
│   ├── collections.js      # All custom collections
│   └── passthrough.js      # File copying configuration
├── plugins/
│   ├── changed-pages.js    # Git diff and change tracking
│   ├── git-computed.js     # Git creation dates with caching
│   └── toc-generator.js    # Table of contents functionality
└── .eleventy.js            # Main config (orchestration only)
```

### Performance Targets

- **Phase 1**: 5-10% build time improvement through better organization
- **Phase 2**: 15-30% build time improvement through optimization
- **Phase 3**: 20-40% build time improvement through advanced caching

---

## Phase 1: Extract Configuration Objects ⚡ Low Risk, Immediate Benefits

### Goals

- Improve code organization and maintainability
- Set foundation for performance optimizations
- Maintain 100% backward compatibility
- Enable easier testing and debugging

### Tasks

- [ ] Create `eleventy/config/` directory structure
- [ ] Extract filters to `eleventy/config/filters.js`
- [ ] Extract transforms to `eleventy/config/transforms.js`
- [ ] Extract collections to `eleventy/config/collections.js`
- [ ] Extract passthrough copy to `eleventy/config/passthrough.js`
- [ ] Extract markdown configuration to `eleventy/config/markdown.js`
- [ ] Update main `.eleventy.js` to import modules
- [ ] Test build process and functionality

### Expected Benefits

- **Maintainability**: Each module has single responsibility
- **Team Collaboration**: Multiple developers can work on different modules
- **Debugging**: Easier to isolate issues to specific functionality
- **Testing**: Individual modules can be unit tested
- **Performance**: 5-10% improvement from better module loading

### Risk Level: **LOW** ✅

- No functional changes, only code organization
- Easy to rollback by reverting file moves
- Can be done incrementally

---

## Phase 2: Optimize Performance 🔥 Medium Risk, Significant Benefits

### Goals

- Add memoization and caching for expensive operations
- Implement conditional loading based on environment
- Optimize git operations and collection processing
- Reduce redundant computations

### Tasks

- [ ] Add memoization for git creation dates
- [ ] Implement conditional transform loading (beautify only in production)
- [ ] Cache expensive collection computations
- [ ] Optimize changed pages detection with file system watchers
- [ ] Add lazy loading for markdown processing
- [ ] Implement environment-specific configurations

### Expected Benefits

- **Build Speed**: 15-30% faster builds
- **Development Experience**: Faster hot reloads
- **Resource Usage**: Lower memory consumption
- **Scalability**: Better performance as content grows

### Risk Level: **MEDIUM** ⚠️

- Involves changing build behavior
- Requires thorough testing across environments
- May need rollback plan for caching issues

---

## Phase 3: Advanced Modularization 🚀 Higher Risk, Long-term Benefits

### Goals

- Create plugin architecture for extensibility
- Implement advanced caching strategies
- Add environment-specific optimizations
- Enable feature flags for experimental improvements

### Tasks

- [ ] Design plugin architecture with hooks
- [ ] Implement persistent caching system
- [ ] Add build performance monitoring
- [ ] Create feature flag system
- [ ] Add advanced development tools
- [ ] Implement incremental build capabilities

### Expected Benefits

- **Extensibility**: Plugin system for custom features
- **Performance**: 20-40% faster builds with advanced caching
- **Developer Tools**: Better debugging and profiling
- **Future-Proofing**: Scalable architecture for growth

### Risk Level: **HIGHER** 🔴

- Significant architectural changes
- Potential breaking changes for advanced features
- Requires comprehensive testing strategy

---

## Testing Strategy

### Phase 1 Testing

- [ ] Verify all existing functionality works unchanged
- [ ] Test build process in development and production
- [ ] Validate output files are identical
- [ ] Check all npm scripts continue to work

### Phase 2 Testing

- [ ] Performance benchmarking before/after changes
- [ ] Test caching behavior across different scenarios
- [ ] Validate conditional loading in different environments
- [ ] Memory usage profiling

### Phase 3 Testing

- [ ] Integration testing for plugin architecture
- [ ] End-to-end build testing with monitoring
- [ ] Performance regression testing
- [ ] Backward compatibility validation

---

## Implementation Notes

### Development Workflow

1. Work on feature branch for each phase
2. Create small, focused commits for each module extraction
3. Test thoroughly before merging each phase
4. Update this document as implementation progresses

### Rollback Strategy

- Each phase can be rolled back independently
- Git tags for each completed phase
- Backup of original `.eleventy.js` configuration
- Documentation of any breaking changes

### Performance Monitoring

- Baseline measurements before starting
- Benchmark after each phase completion
- Track build times, memory usage, and output size
- Document performance improvements

---

## Status Updates

### Phase 1 Progress

**Started**: September 26, 2025

**Completed**: September 26, 2025

**Status**: ✅ COMPLETED

**Completed Tasks**:

- ✅ Created `eleventy/config/` directory structure
- ✅ Extracted filters to `eleventy/config/filters.js` (14 filters)
- ✅ Extracted transforms to `eleventy/config/transforms.js` (3 transforms)
- ✅ Extracted collections to `eleventy/config/collections.js` (4 collections)
- ✅ Extracted passthrough copy to `eleventy/config/passthrough.js`
- ✅ Extracted markdown configuration to `eleventy/config/markdown.js`
- ✅ Updated main `.eleventy.js` to import modules (reduced from 448 to 170 lines)
- ✅ Tested build process - all 257 files generated successfully in 113.48 seconds

**Results**:

- **File Size Reduction**: Main config reduced by 62% (278 lines extracted)
- **Maintainability**: Each module now has single responsibility
- **Modularity**: Easy to work on individual components
- **Build Process**: No functionality changes, 100% backward compatible

**Files Created**:

- `eleventy/config/filters.js` (93 lines)
- `eleventy/config/transforms.js` (78 lines)
- `eleventy/config/collections.js` (77 lines)
- `eleventy/config/passthrough.js` (15 lines)
- `eleventy/config/markdown.js` (75 lines)
- Updated `.eleventy.js` (170 lines, down from 448)

**Next Phase**: Ready to begin Phase 2 - Performance optimizations

---

**This document will be updated as implementation progresses through each phase.**
