const { execSync } = require('child_process');
const chalk = require('chalk');
const fs = require('fs');

async function getChangedFiles() {
	try {
		const output = execSync('git diff --name-only upstream/main...HEAD', {
			encoding: 'utf8',
			stdio: ['pipe', 'pipe', 'ignore']
		}).trim();

		return output ? output.split('\n') : [];
	} catch (error) {
		console.log(chalk.dim('Could not determine changed files, checking all files'));
		return [];
	}
}

function getHtmlFilesFromChanges(changedFiles) {
	const htmlFiles = new Set();

	changedFiles.forEach(file => {
		if (file.includes('_scss') || file.includes('.eleventy') || file.includes('scripts/')) {
			return;
		}

		const match = file.match(/src\/pages\/(en|fr)\/(.+)\.(md|njk)$/);
		if (match) {
			const [, locale, filePath] = match;
			const htmlPath = `_site/${locale}/${filePath}/index.html`;
			htmlFiles.add(htmlPath);
		}
	});

	return Array.from(htmlFiles);
}

function getSourceFileFromHtml(htmlPath, cache) {
	if (cache.has(htmlPath)) {
		return cache.get(htmlPath);
	}

	try {
		const html = fs.readFileSync(htmlPath, 'utf8');
		const match = html.match(/<meta\s+name=["']source-file["']\s+content=["']([^"']+)["']/i);
		const sourceFile = match ? match[1].replace(/^\./, '') : null;
		cache.set(htmlPath, sourceFile);
		return sourceFile;
	} catch (error) {
		cache.set(htmlPath, null);
		return null;
	}
}

function mapOutputToSourceFiles(output) {
	if (!output) {
		return output;
	}

	const cache = new Map();
	const lines = output.split('\n');
	const mappedLines = lines.map(line => {
		const match = line.match(/^(_site\/[^:]+):(\d+):(\d+)/);
		if (!match) {
			return line;
		}

		const [fullMatch, htmlPath, lineNumber, columnNumber] = match;
		const sourceFile = getSourceFileFromHtml(htmlPath, cache);
		if (!sourceFile) {
			return line;
		}

		return line.replace(fullMatch, `${sourceFile}:${lineNumber}:${columnNumber}`);
	});

	return mappedLines.join('\n');
}

async function runQualityChecks() {
	const checkAllFiles = process.argv.includes('--all');

	let filesToCheck = '_site/**/*.html';
	let checkMessage = 'all HTML files';

	if (!checkAllFiles) {
		const changedFiles = await getChangedFiles();

		if (changedFiles.length > 0) {
			const changedHtmlFiles = getHtmlFilesFromChanges(changedFiles);

			if (changedHtmlFiles.length > 0) {
				filesToCheck = changedHtmlFiles.join(' ');
				checkMessage = `${changedHtmlFiles.length} changed file(s)`;
			} else {
				console.log(chalk.green('✅ No content changes detected, skipping spell check\n'));
				return;
			}
		}
	}

	console.log('\n' + chalk.blue.bold('🔍 Running Spell Check...\n'));
	console.log(chalk.dim(`Checking ${checkMessage}\n`));

	try {
		const output = execSync(`cspell --no-progress -u ${filesToCheck}`, {
			encoding: 'utf8',
			stdio: ['pipe', 'pipe', 'pipe']
		});
		const outputSourceFiles = mapOutputToSourceFiles(output);
		console.log('\n' + chalk.green('✅ Spell check passed'));
	} catch (error) {
		const output = error.stdout || error.message;
		const outputSourceFiles = mapOutputToSourceFiles(output);
		const issueCount = (output.match(/issue/gi) || []).length;

		console.log(chalk.yellow(`\n⚠️  Found ${issueCount} spelling issues\n`));
		if (outputSourceFiles) {
			console.log(outputSourceFiles.trim());
			console.log();
		}
		console.log(chalk.yellow.bold('💡 Tips:\n'));
		console.log(chalk.dim('  • Review the files above'));
		console.log(chalk.dim('  • Run full check: npm run spellcheck\n'));
		process.exit(0);
	}
}

runQualityChecks().catch(err => {
	console.error(chalk.red('Quality check error:'), err.message);
	process.exit(0);
});
