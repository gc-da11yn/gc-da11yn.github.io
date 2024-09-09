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
const resetColor = '\x1b[0m';        // Reset font to default

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

  eleventyConfig.addFilter("localeMatch", function (collection) {
    const { locale } = this.ctx; // avoid retrieving it for each item
    return collection.filter((item) => item.data.locale === locale);
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .setLocale("en")
      .toFormat("yyyy'-'MM'-'dd");
  });

  eleventyConfig.addPassthroughCopy({ "./src/_docs": "docs" });
  eleventyConfig.addPassthroughCopy({ "./src/_images": "img" });
  eleventyConfig.addPassthroughCopy({ "./src/CNAME": "CNAME" });

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
        // Store both the URL and title for each changed page
        changedPages.push({
          url: item.url,
          title: item.data.title || item.fileSlug // fallback to fileSlug if no title
        });
      }
    });
    return changedPages; // Returning the changed URLs and titles for the template
  });

  // Add custom Markdown filter for Nunjucks
  eleventyConfig.addNunjucksFilter("markdown", function (value) {
    return md.render(value);
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

  // Capture both committed and uncommitted changes using Git
  eleventyConfig.on('beforeBuild', () => {
    const gitChangedFiles = execSync('git diff --name-only HEAD').toString().trim().split('\n');

    gitChangedFiles.forEach((file) => {
      // Track .md or .njk files in the 'src/main' or 'src/pages' directories
      if ((file.startsWith('src/main/') || file.startsWith('src/pages/')) &&
        (file.endsWith('.md') || file.endsWith('.njk'))) {
        changedFilePaths.add(file);
      }
    });
  });

  // Hook into the HTML generation process (logging to the console)
  eleventyConfig.addTransform("captureGeneratedUrl", function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      const inputPath = path.relative('./', this.page.inputPath);

      // Check if this file was changed based on Git diff
      if (changedFilePaths.has(inputPath)) {
        const fullUrl = `${domain}:${port}${this.page.url}`;

        // Log the URL in blue and underlined
        console.log(`${underline}Captured URL: ${fullUrl}${resetColor}`);

        gitChangedUrls.push(fullUrl); // Store the URL to log later
      }
    }
    return content;
  });

  eleventyConfig.on('afterBuild', () => {
    const changedFilesCount = changedFilePaths.size;

    if (changedFilesCount > 0) {
      // Log summary and provide the correct link based on the environment
      console.log(`\n${changedFilesCount} page(s) changed.`);
      console.log(`Review the changed pages here: ${underline}${domain}/en/pages-to-review/${resetColor}\n`);
    } else {
      console.log('No pages to review.\n');
    }

    changedFilePaths.clear(); // Clear the set for the next watch cycle
  });

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
