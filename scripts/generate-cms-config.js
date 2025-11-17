#!/usr/bin/env node

/**
 * Generate Decap CMS Configuration from Data Files
 *
 * This script generates src/admin/config.yml dynamically from:
 * - src/_data/tagList.js (subjects and tags for content pages)
 * - src/_data/roles.js (role options for content pages)
 * - src/_data/resourceTopics.js (topic options for resources)
 *
 * Run: npm run cms:config [--local]
 *
 * Local backend is automatically enabled when:
 *   - ELEVENTY_ENV is 'dev', 'development', or 'local'
 *   - --local flag is passed
 *
 * This ensures CMS dropdowns stay in sync with the site's data files.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Import data files
const tagList = require('../src/_data/tagList');
const roles = require('../src/_data/roles');
const resourceTopics = require('../src/_data/resourceTopics');

// Check for local development mode
// Enable local_backend if:
// 1. --local flag is passed, OR
// 2. ELEVENTY_ENV is 'dev', 'development', or 'local'
const isLocal = process.argv.includes('--local') ||
                ['dev', 'development', 'local'].includes(process.env.ELEVENTY_ENV);

console.log('🔧 Generating Decap CMS configuration...');
if (isLocal) {
  const reason = process.argv.includes('--local')
    ? '--local flag'
    : `ELEVENTY_ENV=${process.env.ELEVENTY_ENV}`;
  console.log(`   🏠 Local backend mode enabled (${reason})`);
}

// Build subject options from tagList.subjects
const subjectOptions = Object.entries(tagList.subjects.en)
  .map(([key, label]) => ({
    label: label,
    value: key
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

console.log(`   ✅ ${subjectOptions.length} subjects loaded`);

// Build tag options from tagList.tags
const tagOptions = Object.entries(tagList.tags.en)
  .map(([key, label]) => ({
    label: label,
    value: key
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

console.log(`   ✅ ${tagOptions.length} tags loaded`);

// Build role options from roles.labels.en
const roleOptions = Object.entries(roles.labels.en)
  .map(([key, label]) => ({
    label: label,
    value: key
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

console.log(`   ✅ ${roleOptions.length} roles loaded`);

// Build topic options from resourceTopics
const topicOptions = Object.entries(resourceTopics.en)
  .sort((a, b) => a[1].order - b[1].order) // Sort by order field
  .map(([key, data]) => ({
    label: data.label,
    value: data.label // Store as label (as in existing resources)
  }));

console.log(`   ✅ ${topicOptions.length} resource topics loaded`);

// ========== Define Reusable Field Definitions ==========
// These fields can be referenced across multiple collections

const commonFields = {
  title: {
    label: 'Title (required)',
    name: 'title',
    widget: 'string',
    i18n: true,
    hint: 'Page title (required)'
  },
  description: {
    label: 'Description (required)',
    name: 'description',
    widget: 'text',
    i18n: true,
    hint: 'Page description for meta tags and search (optional)'
  },
  toggle: {
    label: 'Other language page title (required)',
    name: 'toggle',
    widget: 'string',
    i18n: true,
    hint: 'Enter the exact title of this page in the other language (e.g., if editing EN page, enter FR title). Used to generate language toggle link.'
  },
  subject: {
    label: 'Subject',
    name: 'subject',
    widget: 'select',
    i18n: 'duplicate',
    required: false,
    options: subjectOptions,
    hint: 'Select subject (controls breadcrumbs and collections)'
  },
  tags: {
    label: 'Secondary Subject',
    name: 'tags',
    widget: 'select',
    multiple: true,
    i18n: 'duplicate',
    required: false,
    options: tagOptions,
    hint: 'Select secondary subject/subjects (controls breadcrumbs and collections)'
  },
  role: {
    label: 'Role',
    name: 'role',
    widget: 'select',
    multiple: true,
    i18n: 'duplicate',
    required: false,
    options: roleOptions,
    hint: 'Select relevant role(s) for this page'
  },
  body: {
    label: 'Body (required)',
    name: 'body',
    widget: 'markdown',
    i18n: true,
    hint: 'Main page content in markdown format (HTML allowed)'
  },
  layout: {
    label: 'Layout',
    name: 'layout',
    widget: 'hidden',
    default: 'layouts/base.njk',
    i18n: 'duplicate'
  },
  toc: {
    label: 'Table of Contents',
    name: 'toc',
    widget: 'boolean',
    i18n: 'duplicate',
    required: false,
    default: false,
    hint: 'Generate full TOC with h2 and h3 headings'
  },
  tocSimple: {
    label: 'Simple Table of Contents',
    name: 'tocSimple',
    widget: 'boolean',
    required: false,
    i18n: 'duplicate',
    default: false,
    hint: 'Generate TOC with h2 headings only'
  },
  isDraft: {
    label: 'Draft',
    name: 'isDraft',
    widget: 'boolean',
    i18n: 'duplicate',
    required: false,
    default: false,
    hint: 'Mark as draft - shows banner to users'
  },
  needsTranslation: {
    label: 'Needs Translation',
    name: 'needsTranslation',
    widget: 'boolean',
    i18n: 'duplicate',
    required: false,
    default: false,
    hint: 'Hide language toggle - shows translation notice'
  },
  archived: {
    label: 'Archived',
    name: 'archived',
    widget: 'boolean',
    i18n: 'duplicate',
    required: false,
    default: false,
    hint: 'Archive page - removes from collections and shows banner'
  },
  internalLinks: {
    label: 'Internal GC Links',
    name: 'internalLinks',
    widget: 'boolean',
    i18n: 'duplicate',
    required: false,
    default: false,
    hint: 'Shows warning about GC network access requirement'
  },
  mainAbout: {
    label: 'Show on Homepage About Section',
    name: 'mainAbout',
    widget: 'boolean',
    i18n: 'duplicate',
    required: false,
    default: false,
    hint: 'If enabled, this page will appear in the About section on the homepage (for About pages only)'
  },
  hasDocument: {
    label: 'Document Download',
    name: 'hasDocument',
    widget: 'object',
    required: false,
    i18n: 'duplicate',
    collapsed: true,
    hint: 'Add downloadable document information (Word, PDF, PowerPoint)',
    fields: [
      {
        label: 'Filename',
        name: 'filename',
        widget: 'string',
        required: false,
        hint: 'e.g., document.docx'
      },
      {
        label: 'File Size (Number)',
        name: 'sizeNumber',
        widget: 'number',
        required: false,
        hint: 'e.g., 563'
      },
      {
        label: 'File Size (Unit)',
        name: 'sizeUnit',
        widget: 'select',
        options: ['KB', 'MB', 'ko', 'Mo'],
        required: false,
        hint: 'Use KB/MB for English, ko/Mo for French'
      },
      {
        label: 'Document Type',
        name: 'type',
        widget: 'select',
        options: ['word', 'powerpoint', 'pdf'],
        required: false
      }
    ]
  }
};

console.log('   ✅ Reusable field definitions created');

// Build view_filters for resource topics
const topicViewFilters = topicOptions.map(topic => ({
  label: topic.label,
  field: 'topic',
  pattern: topic.value
}));

// Build Resources collection with resourceTopics
const resourcesCollection = {
  name: 'resources',
  label: 'Resources',
  label_singular: 'Resource',
  description: 'Manage bilingual resource items for the Additional Resources page. Use filters to find resources by topic, or toggle \'Group by Topic\' for organized view.',
  folder: 'src/resources',
  create: true,
  slug: '{{slug}}',
  preview_path: 'en/additional-resources/',

  // View filters for easy navigation by topic
  view_filters: [
    { label: 'Drafts', field: 'draft', pattern: true }
  ].concat(topicViewFilters),

  // Group by topic
  view_groups: [
    { label: 'Topic', field: 'topic' }
  ],

  sortable_fields: ['title', 'topic'],
  summary: '{{title}} ({{topic}})',
  i18n: true,
  editor: {
    preview: false
  },

  fields: [
    {
      label: 'Title (required)',
      name: 'title',
      widget: 'string',
      i18n: true,
      hint: 'Resource title (provide both English and French)'
    },
    {
      label: 'Description (required)',
      name: 'description',
      widget: 'text',
      i18n: true,
      hint: 'May include HTML tags like <abbr>, <strong>, etc.'
    },
    {
      label: 'URL (required)',
      name: 'url',
      widget: 'string',
      i18n: true,
      hint: 'Full URL to the resource (provide both English and French)'
    },
    {
      label: 'Topic (required)',
      name: 'topic',
      widget: 'select',
      i18n: 'duplicate',
      options: topicOptions,
      hint: 'Category for grouping resources (same for both languages - set in English tab)'
    },
    {
      label: 'Internal Links',
      name: 'internalLinks',
      widget: 'boolean',
      default: false,
      required: false,
      i18n: 'duplicate',
      hint: 'Check if resource requires GC network access (same for both languages - set in English tab)'
    },
    {
      label: 'Language Availability',
      name: 'languageAvailability',
      widget: 'select',
      default: 'both',
      required: false,
      i18n: 'duplicate',
      options: [
        { label: 'Available in both languages', value: 'both' },
        { label: 'English only', value: 'en' },
        { label: 'French only', value: 'fr' }
      ],
      hint: 'Indicates if resource is only available in one language (same for both languages - set in English tab)'
    },
    {
      label: 'Resource Type',
      name: 'resourceType',
      widget: 'select',
      default: 'standard',
      required: false,
      i18n: 'duplicate',
      options: [
        { label: 'Standard resource', value: 'standard' },
        { label: 'Parent resource (has sub-resources)', value: 'parent' },
        { label: 'Child resource (belongs under a parent)', value: 'child' }
      ],
      hint: 'Determines heading level (same for both languages - set in English tab)'
    },
    {
      label: 'Parent Resource',
      name: 'parentResource',
      widget: 'relation',
      collection: 'resources',
      search_fields: ['title'],
      value_field: '{{slug}}',
      display_fields: ['{{title}}'],
      required: false,
      i18n: 'duplicate',
      hint: 'Search and select the parent resource (same for both languages - set in English tab)',
      options_length: 100,
      filters: [
        { field: 'resourceType', values: ['parent'] }
      ]
    }
  ]
};console.log('   ✅ Resources collection generated with topic options');

// Build an "About" folder collection for About Us pages
// Pages should be in src/pages/subjects/aboutUs/en and src/pages/subjects/aboutUs/fr
const aboutCollection = {
  name: 'about',
  label: 'About Pages',
  label_singular: 'About Page',
  description: 'Manage About Us pages (incremental CMS rollout)',
  folder: 'src/pages/subjects/aboutUs',
  preview_path: 'en/aboutUs/',
  create: true,
  i18n: true,
  editor: {
    preview: false
  },

  fields: [
    commonFields.archived,
    commonFields.isDraft,
    commonFields.needsTranslation,
    commonFields.title,
    commonFields.toggle,
    commonFields.description,
    commonFields.subject,
    commonFields.tags,
    commonFields.role,
    commonFields.mainAbout,
    commonFields.toc,
    commonFields.internalLinks,
    commonFields.body
  ]
};

console.log('   ✅ About Pages folder collection configured (src/pages/subjects/aboutUs/)');

// Remove the old files-based About collection scanning code
// (keeping it simple with folder collection)

// Build complete CMS configuration
const cmsConfig = {
  backend: {
    name: 'github',
    repo: 'gc-da11yn/gc-da11yn.github.io',
    branch: 'main',
    base_url: 'https://api.netlify.com',
    auth_endpoint: 'auth'
  },
  media_folder: 'src/_images',
  public_folder: '/img',
  publish_mode: 'editorial_workflow',
  // Note: site_url set to production domain (a11y.canada.ca)
  // OAuth via Netlify works for both a11y.canada.ca and a11ycanada.netlify.app
  site_url: 'https://a11y.canada.ca',
  deploy_preview_url: 'https://deploy-preview-{{pr_number}}--a11ycanada.netlify.app',

  i18n: {
    structure: 'multiple_folders',
    locales: ['en', 'fr'],
    default_locale: 'en'
  },

  collections: [
    resourcesCollection,
    aboutCollection
  ]
};

// Add local_backend if --local flag is passed
if (isLocal) {
  cmsConfig.local_backend = true;
}

// Generate YAML with custom formatting
const yamlOptions = {
  indent: 2,
  lineWidth: -1, // Don't wrap lines
  noRefs: true,
  quotingType: '"',
  forceQuotes: false
};

const yamlStr = yaml.dump(cmsConfig, yamlOptions);

// Add header and inline comments
const header = `# Decap CMS Configuration
#
# ⚠️ AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
#
# This file is generated from data files in src/_data/:
#   - tagList.js (subjects and tags for content pages)
#   - roles.js (role options for content pages)
#   - resourceTopics.js (topic options for resources)
#
# To update dropdowns, edit the corresponding data file and run:
#   npm run cms:config
#
# Local backend is automatically enabled when:
#   - ELEVENTY_ENV is 'dev', 'development', or 'local'
#   - --local flag is passed: npm run cms:config -- --local
#
# Generated: ${new Date().toISOString()}
# Environment: ${process.env.ELEVENTY_ENV || 'production'}
# Local backend: ${isLocal ? 'enabled' : 'disabled'}
#
# For more info, see:
#   - docs/implementation/decap-cms-implementation.md
#   - DECAP-CMS-SETUP.md
#

`;

// Add inline comments to YAML
let finalYaml = header + yamlStr;

// Add comments to backend section
finalYaml = finalYaml.replace(
  /branch: main\n/,
  'branch: main # Base branch for PRs\n'
);
finalYaml = finalYaml.replace(
  /base_url: https:\/\/api\.netlify\.com\n/,
  'base_url: https://api.netlify.com  # Netlify\'s OAuth provider\n'
);
finalYaml = finalYaml.replace(
  /auth_endpoint: auth\n/,
  'auth_endpoint: auth                 # OAuth endpoint\n  # open_authoring: true # Uncomment to allow fork-based contributions\n'
);

// Add comment for local_backend
if (isLocal) {
  finalYaml = finalYaml.replace(
    /local_backend: true\n/,
    '# Uncomment for local development testing\nlocal_backend: true\n'
  );
} else {
  finalYaml = finalYaml.replace(
    /auth_endpoint: auth                 # OAuth endpoint\n  # open_authoring: true # Uncomment to allow fork-based contributions\n/,
    'auth_endpoint: auth                 # OAuth endpoint\n  # open_authoring: true # Uncomment to allow fork-based contributions\n\n# Uncomment for local development testing\n# local_backend: true\n'
  );
}

// Add media folder comments
finalYaml = finalYaml.replace(
  /media_folder: src\/_images\n/,
  '\n# Media files configuration\nmedia_folder: "src/_images"\n'
);
finalYaml = finalYaml.replace(
  /public_folder: \/img\n/,
  'public_folder: "/img"\n'
);

// Add publish mode comment
finalYaml = finalYaml.replace(
  /publish_mode: editorial_workflow\n/,
  '\n# Publish mode\npublish_mode: editorial_workflow\n'
);

// Add site URL comments
finalYaml = finalYaml.replace(
  /site_url: https:\/\/a11ycanada\.netlify\.app\n/,
  '\n# Site URL for deploy previews\nsite_url: https://a11ycanada.netlify.app\n'
);
finalYaml = finalYaml.replace(
  /deploy_preview_url: https:\/\/deploy-preview-\{\{pr_number\}\}--a11ycanada\.netlify\.app\n/,
  '# Deploy preview template - {{pr_number}} is replaced with PR number\n# Resources page path appended to preview URL\ndeploy_preview_url: https://deploy-preview-{{pr_number}}--a11ycanada.netlify.app\n'
);

// Add i18n comment
finalYaml = finalYaml.replace(
  /i18n:\n/,
  '\n# i18n configuration for bilingual content\ni18n:\n'
);

// Add Resources collection comment
finalYaml = finalYaml.replace(
  /  - name: resources\n/,
  '  # Resources Collection (Bilingual)\n  - name: "resources"\n'
);

// Write to file
const outputPath = path.join(__dirname, '../src/admin/config.yml');
fs.writeFileSync(outputPath, finalYaml, 'utf8');

// Try to read the port from .eleventy-port file
let port = '8080'; // Default port
const portFilePath = path.join(__dirname, '../.eleventy-port');
try {
  if (fs.existsSync(portFilePath)) {
    port = fs.readFileSync(portFilePath, 'utf8').trim();
  }
} catch (err) {
  // If file doesn't exist or can't be read, use default
}

console.log('');
console.log('✅ CMS configuration generated successfully!');
console.log('');
console.log('📊 Summary:');
console.log(`   - Subjects: ${subjectOptions.length}`);
console.log(`   - Tags: ${tagOptions.length}`);
console.log(`   - Roles: ${roleOptions.length}`);
console.log(`   - Resource Topics: ${topicOptions.length}`);
console.log(`   - Local backend: ${isLocal ? 'enabled' : 'disabled'}`);
console.log('');
console.log(`📄 Output: ${outputPath}`);
console.log('');
console.log('💡 Next steps:');
if (isLocal) {
  console.log('   Local CMS development mode enabled!');
  console.log('   Run: npm run start-cms');
  console.log('   This will start both decap-server and the dev server.');
  console.log(`   Then access CMS at: http://localhost:${port}/admin/`);
} else {
  console.log('   Production build mode - CMS will use GitHub OAuth');
  console.log('   Access CMS at: https://a11y.canada.ca/admin/');
  console.log('   Or staging: https://a11ycanada.netlify.app/admin/');
}
console.log('');
