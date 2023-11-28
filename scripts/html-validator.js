const { HtmlValidate, StaticConfigLoader } = require("html-validate");
const fs = require("fs");
const path = require("path");

const loader = new StaticConfigLoader({
  extends: ["html-validate:recommended"],
  rules: {
    "no-trailing-whitespace": "off",
    "id-pattern": "off",
    "close-order": "error",
    "meta-refresh": "off",
    "tel-non-breaking": "off",
    "long-title": "off",
    "wcag/h63": "off",
    "require-sri": "off",
    "require-csp-nonce": "off",
    "attr-quotes": "off",
    "attribute-boolean-style": "off",
    "attribute-empty-style": "off",
    "class-pattern": "off",
    "void-style": "off",

  },
});
const htmlValidate = new HtmlValidate(loader);

async function validateHTMLFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return htmlValidate.validateString(content);
}

async function validateAllHTMLFiles(directory) {
  const results = [];

  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const subdirResults = await validateAllHTMLFiles(filePath); // Recursive call for directories
      results.push(...subdirResults);
    } else if (file.endsWith(".html")) {
      const validationResult = await validateHTMLFile(filePath);

      const result = {
        filePath,
        messages: validationResult.results || [],
        errorCount: validationResult.errorCount || 0,
        warningCount: validationResult.warningCount || 0
      };

      results.push(result);
    }
  }

  return results;
}

async function main() {
  try {
    const siteDirs = ["_site/en", "_site/fr"];
    const allResults = [];

    for (const dir of siteDirs) {
      console.log(`Validating HTML files in: ${dir}`);
      const dirResults = await validateAllHTMLFiles(dir);
      allResults.push(...dirResults);
    }

    const errorResults = allResults.filter(result => result.errorCount > 0 || result.warningCount > 0);

    const outputFilePath = path.join(__dirname, "html-validation.json");
    fs.writeFileSync(outputFilePath, JSON.stringify(errorResults, null, 2));

    console.log("Validation results saved to html-validation.json");
  } catch (error) {
    console.error("Error during validation:", error);
  }
}

main();
