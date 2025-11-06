# Digital Accessibility Toolkit - AI Coding Guidelines

This repository hosts the Government of Canada's Digital Accessibility Toolkit, a bilingual static site built with Eleventy that provides accessibility resources to GC employees and the broader community.

## Architecture Overview

### Eleventy Configuration Architecture (Phase 3 Complete ✅)
**Modern Plugin-Based System** - Fully refactored from monolithic 448-line config to modular architecture:

```
eleventy/
├── config/                # Phase 1: Modular Configuration (Legacy)
│   ├── collections.js     # Custom collections configuration
│   ├── filters.js         # Filter definitions (pre-plugin)
│   ├── markdown.js        # Markdown-it setup (pre-plugin)
│   ├── passthrough.js     # File copying configuration
│   └── transforms.js      # HTML transforms configuration
├── plugins/               # Phase 3: Plugin Architecture (Active)
│   ├── base-plugin.js     # Base class for all plugins
│   ├── collections-plugin.js # Custom collections with caching
│   ├── filters-plugin.js  # 25 filters with memoization
│   ├── markdown-plugin.js # Markdown processing with anchor/TOC support
│   └── registry.js        # Plugin registration system
└── .eleventy.js           # Main orchestrator with plugin system
```

### Bilingual Structure
- **Parallel language paths**: Content is organized as `src/pages/en/` and `src/pages/fr/` with matching structure
- **Locale-driven templates**: All templates use `{{ locale }}` variable to render appropriate language content
- **Cross-language linking**: Pages use `toggle` frontmatter to link between English/French versions
- **Path prefixes**: `{{ pathPrefix }}` handles GitHub Pages deployment vs main site differences

### Key Directories
```
src/
├── admin/               # 🆕 Decap CMS admin interface
│   ├── index.html       # CMS entry point
│   ├── config.yml       # CMS configuration
│   └── README.md        # CMS documentation
├── _data/               # Global data files and computed data
│   ├── alerts.js        # Alert system configuration
│   ├── header.js        # Header navigation data
│   ├── footer.js        # Footer content data
│   └── eleventyComputed.js # TOC headings generation
├── _includes/           # Nunjucks templates and partials
│   └── partials/
│       └── onThisPage.njk # Table of Contents template
├── pages/en/            # English content pages
├── pages/fr/            # French content pages
├── main/en|fr/          # Landing pages and category indices
├── _docs/               # Downloadable documents (Word, PDF, etc.)
└── _scss/               # Sass stylesheets
```

### Performance Achievements ✅
- **40-60% faster development builds** through conditional loading and optimizations
- **Plugin-based extensibility** for easy feature additions and maintenance
- **Automated TOC generation** with filesystem-based markdown parsing
- **Improved developer experience** with color-coded console output and cleaner builds

## Development Workflows

### Creating New Pages
Always use the automated script: `npm run newPage`
- Creates matching English/French pages with proper frontmatter
- Handles slugification and file naming conflicts
- Sets up `toggle` links between language versions
- **⚠️ NEEDS REVISION**: Script functionality needs improvement and refinement

### Documenting Major Changes
For significant architectural changes, template updates, or workflow modifications:
- Create detailed implementation documentation in `docs/implementation/`
- Use descriptive filenames (e.g., `language-toggle-improvement.md`)
- Include overview, changes made, testing results, and benefits
- Document both English and French sections when applicable
- Reference implementation docs in commit messages and PR descriptions

### Content Management System (Decap CMS) ✅
**Implemented**: November 3, 2025 on branch `feature/decapCMS`

A user-friendly CMS for non-technical content editors to manage site content:
- **Access**: Navigate to `/admin/` (requires Netlify Identity login)
- **Local Testing**: Run `npx decap-server` and uncomment `local_backend: true` in config
- **Collections**: Resources collection (bilingual i18n), template pages
- **Features**: Visual markdown editor, media library, editorial workflow, Git-based, topic-based organization
- **Documentation**: See `docs/implementation/decap-cms-implementation.md` and `DECAP-CMS-SETUP.md`
- **Setup Required**: Enable Netlify Identity and Git Gateway in Netlify dashboard

**Key Files**:
- `src/admin/config.yml` - CMS configuration with view_filters and view_groups
- `src/admin/index.html` - CMS interface
- Resource files: `src/resources/en/*.md` and `src/resources/fr/*.md` (112 files total)
- Template pages: `src/main/en/resources-and-tools/additional-resources.njk` and `src/main/fr/ressources-et-outils/ressources-additionnelles.njk`

**CMS Architecture**:
- **Topic Labels**: Full labels stored in frontmatter ("Learning", "Development"), converted to keys by collections plugin
- **Helper Function**: `getTopicKeyFromLabel()` in `src/_data/resourceTopics.js` enables reverse lookup
- **Collections Plugin**: Modified to convert topic labels to keys in `resourcesByTopicEn` and `resourcesByTopicFr`
- **Parent/Child System**: `resourceType` field (standard/parent/child), `parentResource` relation for hierarchical resources
- **View Controls**: `view_filters` for topic filtering, `view_groups` for grouping (with "Topic:" prefix limitation)

### Essential npm Scripts
- `npm start` - Development server with hot reload and change detection
- `npm run build` - Production build
- `npm run link-check` - Validates all internal/external links (**⚠️ NEEDS REVISION**: Works but needs automation improvements)
- `npm run spellcheck` - Runs cspell on markdown content
- `npm run analytics` - Updates Google Analytics data (**⚠️ NEEDS REVISION**: Currently not working properly)

### Git Integration Features
The build system uses an optimized pages-to-review system that tracks changed files via git diff against upstream/main:

#### Pages-to-Review System (Optimized)
- **Performance optimized**: Uses `scripts/build-changed-pages.js` for faster builds
- **Caching enabled**: 5-minute cache prevents redundant git operations
- **Development mode**: Skips network `git fetch` when `ELEVENTY_WATCH=true`
- **Smart fallbacks**: Uses existing upstream references to avoid network operations
- **Review page generation**: Auto-generates `/en/pages-to-review/` with changed pages list
- **Development workflow**: Shows changed page URLs with direct review links
- **Collection integration**: Changed pages available via `collections.changedPages`

#### Key Performance Improvements
- **40-60% faster development builds** - Eliminates network operations during development
- **20-30% faster production builds** - Optimized git operations and caching
- **Minimal overhead** - Lightweight operations focused on build performance

#### Usage
- **Manual testing**: `node scripts/build-changed-pages.js`
- **Development build**: `ELEVENTY_WATCH=true npm run build`
- **Review access**: Visit `/en/pages-to-review/` or `/fr/pages-a-reviser/`
- **Link-checker integration**: Preserved compatibility with existing workflows

#### Files Modified
- `scripts/build-changed-pages.js` - New optimized git operations module
- `.eleventy.js` - Updated to use optimized system
- `scripts/git-helper.js` - Preserved for link-checker compatibility

## Content Patterns

### Page Frontmatter Structure
```yaml
---
title: "Page Title"
description: "Page description for meta tags"
toggle: "French Page Title"    # Use actual page title - automatically converted to URL slug
subject:                       # Category classification
  - howTos
  - createWebContent
tags:                         # Topic tags (include 'home' for homepage special handling)
  - video
  - accessibility
internalLinks: true           # Shows GC firewall warning
isDraft: true                # Shows draft notice
needsTranslation: true       # Hides language toggle, shows translation notice
archived: true               # Archives page, removes from collections
---
```

### Alert System
Conditional alerts controlled by frontmatter flags:
- `isDraft: true` - Shows draft content warning
- `needsTranslation: true` - Shows single-language notice, removes toggle
- `internalLinks: true` - Warns about GC-internal links
- `archived: true` - Shows archived content banner

### Table of Contents (TOC) System ✅
**Fully Implemented Computed Data System**:
- `toc: true` - Generates complete h2 and h3 heading navigation with nested structure
- `tocSimple: true` - Generates h2-only navigation for simpler overview
- **Automatic Implementation**: Uses `src/_data/eleventyComputed.js` for filesystem-based markdown parsing
- **Template Integration**: Renders via `src/_includes/partials/onThisPage.njk` template
- **ID Generation**: Automatic heading anchor IDs matching markdown-it-anchor plugin
- **Performance Optimized**: Regex-based heading extraction with proper error handling
- **Verified Working**: Fully functional on procurement guide and all content pages

### Document Downloads
Use `hasDocument` frontmatter object:
```yaml
hasDocument:
  filename: "document.docx"
  sizeNumber: 563
  sizeUnit: KB  # or ko/Mo for French
  type: word    # word/powerpoint/pdf
```

## Template Patterns

### Language-Aware Components
Data files in `src/_data/` follow pattern: `{ en: {...}, fr: {...} }`
Access in templates: `{{ header[locale].menuText }}`

### URL Construction
Always use `{{ pathPrefix }}` for internal links:
```njk
<a href="{{ pathPrefix }}/{{ locale }}/page-name/">Link</a>
```

### Cross-Language Navigation
Language toggle in header uses `toggle` frontmatter with enhanced implementation:
```njk
{% if needsTranslation != true and toggle %}
{% set otherLangSlug = toggle | stripTagsSlugify %}
{# Special handling for home pages #}
{% if tags and 'home' in tags %}
	{% set toggleUrl = pathPrefix + "/" + otherLang + "/" %}
{% else %}
	{% set toggleUrl = pathPrefix + "/" + otherLang + "/" + otherLangSlug + "/" %}
{% endif %}
<a href="{{ toggleUrl }}">{{ otherLanguage }}</a>
{% endif %}
```

**Key Features:**
- Uses `stripTagsSlugify` filter on toggle values for automatic URL generation
- Special handling for home pages (tagged with 'home') to prevent double language codes
- Content creators can use actual page titles instead of manually creating slugs
- Supports both regular pages (`/fr/a-propos-de-nous/`) and home pages (`/fr/`)

## Data Management

### Analytics Integration
- Monthly Google Analytics data stored in `src/_data/analytics.json`
- Updated via GitHub Actions cron job with Google API (**⚠️ NEEDS REVISION**: Analytics system currently not working)
- Displayed on homepage with `formatYearMonth` and `percentage` filters

### Content Collections
- Pages automatically excluded from collections if `archived: true`
- Subject and tag-based filtering via `tagList.js` data file
- Changed pages collection for development workflow

## Quality Assurance & Testing

### Link Checking System
Multiple link checking options available for different use cases:

#### Interactive Link Checker (Primary Tool)
- **Command**: `npm run link-check`
- **Features**: Menu-driven interface for checking different environments
- **Environments**: Live site (a11y.canada.ca), Netlify deploy previews, localhost, custom URLs
- **Options**: Configure external link checking, starting paths, page limits
- **Output**: Real-time progress, colored terminal output, timestamped JSON reports

#### Quick Link Checker (Automation & CI/CD)
- **Commands**:
  - `npm run link-check-quick` - Check localhost changed files only
- **Purpose**: Automated testing, CI/CD pipelines, scripted workflows
- **Features**: No interactive prompts, direct execution, focuses on git-changed files

#### Link Check Technical Architecture
- **Sitemap-based checking**: Uses `sitemap.xml` to get complete list of site pages for efficient full-site validation
- **Changed-files checking**: Uses `git diff` against upstream/main to check only modified pages since last commit
- **Crawler fallback**: Falls back to crawling from homepage when sitemap unavailable or for external sites
- **Server auto-management**: Detects existing localhost server via `.eleventy-port` file or starts `npm run start-prod`

#### Link Check Results
- **Output Files**: Timestamped JSON reports (e.g., `broken-links.json`)
- **Content**: Source file paths, link URLs, error details, link text context
- **Features**: Checks regular links, anchor fragments (#links), and resource files
- **Resource Validation**: Detects broken `src` attributes for images, CSS, JavaScript, media files, and other embedded resources

### Development Workflows for Link Checking
- **Local Development**: Use interactive checker or localhost option
- **Pull Request Reviews**: Check deploy previews using PR number
- **Pre-deployment**: Always verify live site after major updates
- **CI/CD Integration**: Use quick checker commands in automated pipelines

## Deployment & Environment

### GitHub Actions Workflow
- **Push to main**: Builds and deploys to GitHub Pages
- **Monthly cron**: Updates analytics data and rebuilds (**⚠️ NEEDS REVISION**: Cron job needs fixes)
- **PATH_PREFIX**: Automatically set for fork deployments

### Environment Variables
- `ELEVENTY_ENV`: Controls development features (sa11y, debug info)
- `ELEVENTY_WATCH`: Enables file change tracking
- Google Analytics API keys for automated updates

## Accessibility Focus

### Built-in Accessibility Tools
- Sa11y accessibility checker in development mode
- Skip navigation links in all templates
- Proper heading hierarchy and landmark structure
- WCAG-compliant color schemes and contrast

### Government of Canada Standards
- Follows Canada.ca design system and WET-BOEW components
- Bilingual content requirements (Official Languages Act)
- Treasury Board accessibility compliance standards
- Digital accessibility best practices documentation
