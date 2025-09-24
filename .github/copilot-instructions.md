# Digital Accessibility Toolkit - AI Coding Guidelines

This repository hosts the Government of Canada's Digital Accessibility Toolkit, a bilingual static site built with Eleventy that provides accessibility resources to GC employees and the broader community.

## Architecture Overview

### Bilingual Structure
- **Parallel language paths**: Content is organized as `src/pages/en/` and `src/pages/fr/` with matching structure
- **Locale-driven templates**: All templates use `{{ locale }}` variable to render appropriate language content
- **Cross-language linking**: Pages use `toggle` frontmatter to link between English/French versions
- **Path prefixes**: `{{ pathPrefix }}` handles GitHub Pages deployment vs main site differences

### Key Directories
```
src/
├── _data/           # Global data files (alerts.js, header.js, footer.js, etc.)
├── _includes/       # Nunjucks templates and partials
├── pages/en/        # English content pages
├── pages/fr/        # French content pages
├── main/en|fr/      # Landing pages and category indices
├── _docs/           # Downloadable documents (Word, PDF, etc.)
└── _scss/           # Sass stylesheets
```

## Development Workflows

### Creating New Pages
Always use the automated script: `npm run newPage`
- Creates matching English/French pages with proper frontmatter
- Handles slugification and file naming conflicts
- Sets up `toggle` links between language versions
- **⚠️ NEEDS REVISION**: Script functionality needs improvement and refinement

### Essential npm Scripts
- `npm start` - Development server with hot reload and change detection
- `npm run build` - Production build
- `npm run link-check` - Interactive link checker with menu options (RECOMMENDED)
- `npm run link-check-quick` - Quick automated link checking for CI/CD and development workflows
- `npm run spellcheck` - Runs cspell on markdown content
- `npm run analytics` - Updates Google Analytics data (**⚠️ NEEDS REVISION**: Currently not working properly)

### Git Integration Features
The build system tracks changed files using git diff against upstream/main:
- Development shows changed page URLs with review links
- Production logs changed file paths for verification
- Changed pages collection available in templates via `collections.changedPages`

## Content Patterns

### Page Frontmatter Structure
```yaml
---
title: "Page Title"
description: "Page description for meta tags"
toggle: french-page-slug    # Links to other language version
subject:                    # Category classification
  - howTos
  - createWebContent
tags:                       # Topic tags
  - video
  - accessibility
internalLinks: true         # Shows GC firewall warning
isDraft: true              # Shows draft notice
needsTranslation: true     # Hides language toggle, shows translation notice
archived: true             # Archives page, removes from collections
---
```

### Alert System
Conditional alerts controlled by frontmatter flags:
- `isDraft: true` - Shows draft content warning
- `needsTranslation: true` - Shows single-language notice, removes toggle
- `internalLinks: true` - Warns about GC-internal links
- `archived: true` - Shows archived content banner

### Table of Contents
- `toc: true` - Generates h2 and h3 heading navigation
- `tocSimple: true` - Generates h2-only navigation
- Automatic anchor generation using Eleventy's slugify filter

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
Language toggle in header uses `toggle` frontmatter:
```njk
{% if toggle %}
<a href="{{ pathPrefix }}/{{ otherLang }}/{{ toggle }}/">{{ otherLanguage }}</a>
{% endif %}
```

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
