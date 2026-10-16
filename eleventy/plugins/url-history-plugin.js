const fs = require('fs');
const path = require('path');
const {
  MANIFEST, DEFAULT_INPUT, validateHistory, readPage,
  singlePages, mergeHistory, outputFile, renderRedirect, fingerprint
} = require('../../scripts/url-history');
const getPrefix = require('../../src/_data/pathPrefix');

module.exports = function urlHistoryPlugin(eleventyConfig) {
  let previous;
  eleventyConfig.on('eleventy.before', ({ dir, incremental, outputMode }) => {
    if (incremental || outputMode !== 'fs') {
      throw new Error('URL history requires a full filesystem build (no incremental/JSON output).');
    }
    const input = process.env.URL_HISTORY_INPUT || DEFAULT_INPUT;
    if (!fs.existsSync(input)) {
      throw new Error(`URL history baseline missing: ${input}. Run npm run url-history:prepare first.`);
    }
    if (!previous) previous = validateHistory(JSON.parse(fs.readFileSync(input, 'utf8')));
    const localManifest = path.resolve(dir.output, MANIFEST);
    if (fs.existsSync(localManifest)) {
      const local = validateHistory(JSON.parse(fs.readFileSync(localManifest, 'utf8')));
      const removable = [];
      for (const artifact of local.artifacts || []) {
        const file = path.resolve(dir.output, artifact.file);
        if (fs.existsSync(file)) {
          if (fingerprint(fs.readFileSync(file)) !== artifact.hash) {
            throw new Error(`URL history will not remove an externally changed file: ${file}`);
          }
          removable.push(file);
        }
      }
      for (const file of removable) fs.unlinkSync(file);
    }
  });

  eleventyConfig.on('eleventy.after', ({ results, dir }) => {
    const output = path.resolve(dir.output);
    const pages = singlePages(results.filter(result =>
      result.outputPath && result.outputPath.endsWith('.html') && typeof result.content === 'string'
    ).map(result => readPage(result.content, result.inputPath, result.url)));
    const overrides = JSON.parse(fs.readFileSync(
      path.join(__dirname, '../../src/_data/urlHistoryOverrides.json'), 'utf8'
    ));
    const { history, redirects, missing } = mergeHistory(
      previous, pages, overrides, process.env.GITHUB_SHA || process.env.COMMIT_REF || previous.revision
    );
    for (const source of missing) {
      console.warn(`URL history: no current destination for ${source}; history retained. Use previousSources for a file move.`);
    }
    const liveFiles = new Set(results.filter(result => result.outputPath)
      .map(result => path.resolve(result.outputPath)));
    const writes = redirects.map(redirect => {
      const file = path.join(output, outputFile(redirect.from));
      if (liveFiles.has(file) || fs.existsSync(file)) {
        throw new Error(`URL history alias overwrites existing output: ${redirect.from} (${redirect.source})`);
      }
      return [file, renderRedirect(redirect, {
        prefix: getPrefix(), domain: process.env.DEPLOY_URL || 'https://a11y.canada.ca'
      })];
    });
    for (const [file, content] of writes) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, content);
    }
    const artifacts = results.filter(result =>
      result.outputPath && result.outputPath.endsWith('.html') && /^\/(?:en|fr)\//.test(result.url)
    ).map(result => path.resolve(result.outputPath));
    history.artifacts = [...artifacts, ...writes.map(([file]) => file)].map(file => ({
      file: path.relative(output, file).split(path.sep).join('/'),
      hash: fingerprint(fs.readFileSync(file))
    }));
    validateHistory(history);
    fs.writeFileSync(path.join(output, MANIFEST), JSON.stringify(history, null, 2) + '\n');
    // Keep intermediate watch URLs usable until the next clean build.
    previous = history;
    console.log(`URL history: wrote ${redirects.length} redirects for ${pages.length} pages`);
  });
};
