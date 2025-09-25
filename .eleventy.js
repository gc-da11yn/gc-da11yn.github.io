const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const nunjucks = require('nunjucks');  // Import Nunjucks for rendering
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const { stripHtml } = require('string-strip-html');
const beautify = require('js-beautify').html;
const { DateTime } = require('luxon');
const changedPageUrls = [];

// ANSI escape codes for blue underline
const underline = '\x1b[4m';  // Underline font
const resetColor = '\x1b[0m'; // Reset font to default

// Check if we are in watch mode (development)
const isWatchMode = process.env.ELEVENTY_WATCH === 'true';

module.exports = function (eleventyConfig) {
  const eleventySlugify = eleventyConfig.getFilter('slug');

  let markdownItOptions = {
    html: true, // Enable HTML tags in Markdown
  };

  const md = markdownIt(markdownItOptions)
    .use(markdownItAttrs)
    .use(markdownItAnchor, {
      slugify: s => eleventySlugify(s, { lower: true, strict: true, locale: 'fr' }),
      permalink: false, // Disable permalinks
    });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addShortcode('extractHeadings', function (content, tocType) {
    const tokens = md.parse(content, {});
    const levels = tocType === 'tocSimple' ? 1 : 2; // tocSimple only includes level 2 headings
    const validTags = Array.from({ length: levels + 1 }, (_, i) => `h${i + 2}`);
    const headings = tokens.filter(token =>
      validTags.includes(token.tag) && token.type === 'heading_open'
    ).map(token => {
      const level = token.tag;
      const rawText = tokens[tokens.indexOf(token) + 1].content;
      const text = stripHtml(rawText).result; // Strip HTML tags from the heading text
      const id = eleventySlugify(text, { lower: true, strict: true, locale: 'fr' });
      return { level, text, id };
    });

    // Create TOC HTML
    let tocHTML = '<aside><h2>{{ onThisPage[locale].heading }}</h2><ul>';
    const levelsStack = [];

    headings.forEach(heading => {
      const levelIndex = parseInt(heading.level.substring(1)) - 1;

      while (levelsStack.length && levelsStack[levelsStack.length - 1] > levelIndex) {
        tocHTML += '</ul></li>';
        levelsStack.pop();
      }

      if (levelsStack.length && levelsStack[levelsStack.length - 1] === levelIndex) {
        tocHTML += '</li>';
      }

      if (!levelsStack.length || levelsStack[levelsStack.length - 1] < levelIndex) {
        tocHTML += '<ul>';
        levelsStack.push(levelIndex);
      }

      tocHTML += `<li><a href="#${heading.id}">${heading.text}</a>`;
    });

    while (levelsStack.length) {
      tocHTML += '</ul></li>';
      levelsStack.pop();
    }

    tocHTML += '</ul></aside>';

    return tocHTML;
  });

  eleventyConfig.addFilter("stripTagsSlugify", (str) => {
    if (!str) return;
    return eleventySlugify(stripHtml(str).result, { lower: true, strict: true, locale: 'fr' });
  });

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Format HTML output
  eleventyConfig.addTransform("htmlbeautify", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return beautify(content, {
        indent_size: 2,
        indent_char: ' ',
        preserve_newlines: false,
        max_preserve_newlines: 1,
        wrap_line_length: 0,
        end_with_newline: true,
      });
    }
    return content;
  });

  // Add UTF-8 BOM to CSV files for proper Excel encoding
  eleventyConfig.addTransform("csvUtf8Bom", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".csv")) {
      // For Excel compatibility, we need to ensure the content is properly encoded
      // Try a different approach with UTF-8 BOM and ensure content is UTF-8
      const utf8Bom = '\uFEFF'; // Use Unicode BOM character instead of bytes
      return utf8Bom + content;
    }
    return content;
  });

  eleventyConfig.addFilter("localeMatch", function (collection) {
    const { locale } = this.ctx; // avoid retrieving it for each item
    return collection.filter((item) => item.data.locale === locale);
  });

  // Specific postDate filter for blog posts or other content with strict formatting
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setLocale("en")
      .toFormat("yyyy'-'MM'-'dd");
  });

  // Format date filter to display full date
  eleventyConfig.addFilter("formatDate", function (dateObj) {
    const locale = this.ctx.locale || 'en';  // Use the locale from the context, default to 'en'

    let luxonDate;

    // Check if the dateObj is an ISO string and parse it to a DateTime object
    if (typeof dateObj === 'string') {
      luxonDate = DateTime.fromISO(dateObj);  // Handle ISO strings
    } else if (dateObj instanceof Date) {
      luxonDate = DateTime.fromJSDate(dateObj);  // Handle JS Date objects
    } else {
      return "Invalid Date";  // Return fallback if neither works
    }

    return luxonDate.setLocale(locale).toLocaleString(DateTime.DATE_HUGE);  // Use DATE_HUGE for formatting
  });

  // Format year and month to display "Month Year" in the correct locale
  eleventyConfig.addFilter("formatYearMonth", function (dateString) {
    const locale = this.ctx.locale || 'en';  // Use the locale from the context, default to 'en'

    return DateTime.fromFormat(dateString, 'yyyy-MM')
      .setLocale(locale)
      .toFormat('LLLL yyyy');  // Use LLLL for full month name
  });

  eleventyConfig.addFilter("percentage", function (value) {
    return (parseFloat(value) * 100).toFixed(2) + '%';
  });

  eleventyConfig.addFilter("recentMonths", function (analytics) {
    const sortedMonths = Object.entries(analytics).sort(([a], [b]) => b.localeCompare(a)); // Reverse sort by month key
    return sortedMonths.slice(0, 3); // Get the last three months
  });

  eleventyConfig.addPassthroughCopy({ "./src/_docs": "docs" });
  eleventyConfig.addPassthroughCopy({ "./src/_images": "img" });
  eleventyConfig.addPassthroughCopy({ "./src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "./src/_scripts": "js" });

  eleventyConfig.addCollection("allHeadings", function (collectionApi) {
    return collectionApi.getAll().map(item => {
      if (item.data.toc || item.data.tocSimple) {
        const tokens = md.parse(item.template.frontMatter.content, {});
        const levels = item.data.tocSimple ? 1 : 2; // tocSimple only includes level 2 headings
        const validTags = Array.from({ length: levels + 1 }, (_, i) => `h${i + 2}`);
        const headings = tokens.filter(token =>
          validTags.includes(token.tag) && token.type === 'heading_open'
        ).map(token => {
          const level = token.tag;
          const rawText = tokens[tokens.indexOf(token) + 1].content;
          const text = stripHtml(rawText).result; // Strip HTML tags from the heading text
          const id = eleventySlugify(text, { lower: true, strict: true, locale: 'fr' });
          return { level, text, id };
        });
        item.data.headings = headings;
      }
      return item;
    });
  });

  // Custom collection for changed pages
  eleventyConfig.addCollection('changedPages', function (collectionApi) {
    const changedPages = [];
    collectionApi.getAll().forEach(item => {
      const normalizedInputPath = path.relative('./', item.inputPath);
      if (changedFilePaths.has(normalizedInputPath)) {
        // Store both the URL, title, and locale for each changed page
        changedPages.push({
          url: item.url,
          title: item.data.title || item.fileSlug, // fallback to fileSlug if no title
          locale: item.data.locale || 'en' // default to 'en' if no locale is set
        });
      }
    });
    return changedPages; // Returning the changed URLs, titles, and locales for the template
  });

  // Get the role keys that belong to a given group
  eleventyConfig.addFilter("roleKeysForGroup", function (groupKey, rolesData) {
    if (!groupKey || !rolesData || !rolesData.roles) return [];
    return Object.entries(rolesData.roles)
      .filter(([, meta]) => meta.group === groupKey)
      .map(([key]) => key);
  });

  // Given a list of role keys, return all pages that match ANY of them
  eleventyConfig.addFilter("byAnyRole", function (collection, roleKeys) {
    if (!collection || !roleKeys || !roleKeys.length) return [];
    return collection.filter((item) => {
      const r = item.data.role;
      if (!r) return false;
      const arr = Array.isArray(r) ? r : [r];
      return arr.some((k) => roleKeys.includes(k));
    });
  });

  // Collection of all pages that have at least one role
  eleventyConfig.addCollection("rolePages", (api) =>
    api.getAll().filter((item) => !!item.data.role)
  );

  // Custom collection for role groups to work around pagination tag issues
  eleventyConfig.addCollection("roleGroup", (api) => {
    // Find all pages generated from the roles-group.njk template OR
    // pages with URLs matching role group patterns
    return api.getAll().filter((item) => {
      // Check if the page was generated from the roles-group template
      const fromRoleGroupTemplate = item.inputPath && item.inputPath.includes('roles-group.njk');

      // Check if URL matches role group pattern (e.g., /en/roles/business/, /fr/roles/design/)
      const matchesRoleGroupPattern = item.url && item.url.match(/^\/(en|fr)\/roles\/(administration|author|business|design|development|testing)\/$/);

      return fromRoleGroupTemplate || matchesRoleGroupPattern;
    });
  });

  // Add custom Markdown filter for Nunjucks
  eleventyConfig.addNunjucksFilter("markdown", function (value) {
    return md.render(value);
  });

  // Add split filter for Nunjucks
  eleventyConfig.addNunjucksFilter("split", function (str, separator) {
    if (typeof str !== 'string') return [];
    return str.split(separator || ' ');
  });

  // Add wordCount filter for convenience
  eleventyConfig.addNunjucksFilter("wordCount", function (content) {
    if (!content) return 0;
    const text = typeof content === 'string' ? content : String(content);
    const stripped = stripHtml(text).result;
    const words = stripped.trim().split(/\s+/);
    return words.length === 1 && words[0] === '' ? 0 : words.length;
  });

  let changedFilesMap = new Map();
  let changedFilePaths = new Set();
  let gitChangedUrls = [];
  let domain = 'http://localhost';
  let port = '8080'; // Default port

  // Detect GitHub Codespaces
  if (process.env.CODESPACES && process.env.CODESPACE_NAME) {
    // Use the correct format for Codespaces URLs with the .app domain
    domain = `https://${process.env.CODESPACE_NAME}-${port}.app.github.dev`;
  }

  // Detect Netlify Deploy Preview
  if (process.env.DEPLOY_URL) {
    domain = process.env.DEPLOY_URL;
  }

  // Read the .eleventy-port file to get the correct port for local development
  if (fs.existsSync('.eleventy-port')) {
    port = fs.readFileSync('.eleventy-port', 'utf8').trim();
    if (domain === 'http://localhost') {
      domain = `${domain}:${port}`; // Apply the port for localhost
    }
  }

  // Capture changed files before the build starts (Method 1: Eleventy watch)
  eleventyConfig.on('beforeWatch', (changedFiles) => {
    changedFiles.forEach(file => {
      console.log(`Changed source file: ${file}`);
      changedFilesMap.set(file, null); // Track the file
    });
  });

  // Capture both committed and uncommitted changes using Git (Method 2: Git diff)
  eleventyConfig.on('beforeBuild', () => {
    // Fetch the `main` branch from the upstream repository directly
    const upstreamUrl = 'https://github.com/gc-da11yn/gc-da11yn.github.io';

    try {
      execSync(`git fetch ${upstreamUrl} main:upstream-main --force`);
    } catch (err) {
      console.error('Error fetching the upstream main branch', err);
    }

    // Get the diff between the current branch and `upstream-main`
    const gitChangedFiles = execSync('git diff upstream-main --name-only').toString().trim().split('\n');

    gitChangedFiles.forEach((file) => {
      if ((file.startsWith('src/main/') || file.startsWith('src/pages/')) &&
        (file.endsWith('.md') || file.endsWith('.njk'))) {
        // Track the file
        changedFilePaths.add(file);
      }
    });

    // Clean up: delete the upstream-main branch after the diff
    try {
      execSync('git branch -D upstream-main');
    } catch (err) {
      console.error('Error deleting the upstream-main branch', err);
    }
  });

  // Hook into the HTML generation process (logging to the console)
  eleventyConfig.addTransform("captureGeneratedUrl", function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      const inputPath = path.relative('./', this.page.inputPath);

      // Check if this file was changed based on Git diff
      if (changedFilePaths.has(inputPath)) {
        // Adjust URL generation to prevent double port addition
        let fullUrl = domain;

        // Only add the port if it's localhost and it hasn't been added already
        if (domain.includes('localhost') && !domain.includes(`:${port}`)) {
          fullUrl += `:${port}`;
        }

        // Append the page URL
        fullUrl += this.page.url;

        if (isWatchMode) {
          // Log individual URLs for each changed page in dev mode
          console.log(`${underline}Captured URL: ${fullUrl}${resetColor}`);
        } else {
          // Log file paths in production mode
          console.log(`${underline}Changed file: ${inputPath}${resetColor}`);
        }

        // Track the URL or file path for summary logging later
        gitChangedUrls.push(isWatchMode ? fullUrl : inputPath);
      }
    }
    return content;
  });

  // After build, log a summary and provide a link to the review page in local development
  eleventyConfig.on('afterBuild', () => {
    const changedFilesCount = changedFilePaths.size;

    if (changedFilesCount > 0) {
      // Log the summary of changed pages
      console.log(`\n${changedFilesCount} page(s) changed.`);

      // Log individual URLs or file paths, depending on mode
      gitChangedUrls.forEach((changedItem) => {
        console.log(`${underline}${changedItem}${resetColor}`);
      });

      // Add a blank line after the list of changed pages
      console.log('');

      // Only log the review page link in local development mode
      if (isWatchMode) {
        let reviewPageLink = `${domain}`;
        if (domain.includes('localhost') && !domain.includes(`:${port}`)) {
          reviewPageLink += `:${port}`;
        }
        reviewPageLink += '/en/pages-to-review/';

        console.log(`\nReview the changed pages here: ${underline}${reviewPageLink}${resetColor}\n`);
      }
    } else {
      console.log('No pages to review.\n');
    }

    // Clear the set for the next watch cycle
    changedFilePaths.clear();
    gitChangedUrls = [];
  });

  // Add computed data for git creation dates
  eleventyConfig.addGlobalData("eleventyComputed", {
    gitCreated: (data) => {
      if (data.page && data.page.inputPath) {
        try {
          const gitCommand = `git log --format="%ai" --reverse "${data.page.inputPath}" | head -1`;
          const result = execSync(gitCommand, { encoding: 'utf8' }).trim();

          if (result) {
            return new Date(result);
          }
        } catch (error) {
          // Silently handle errors - some files might not have git history
          // console.error(`Error getting git creation date for ${data.page.inputPath}:`, error.message);
        }
      }
      return null;
    }
  });

  // Ignore template files from being built
  eleventyConfig.ignores.add("src/pages/_template.md");
  eleventyConfig.ignores.add("src/links/_template.md");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk", "css"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    setUseGitIgnore: false
  };
};
