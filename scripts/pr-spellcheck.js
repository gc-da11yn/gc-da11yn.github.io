const { spawnSync } = require("node:child_process");
const path = require("node:path");
const { fileURLToPath } = require("node:url");

const result = spawnSync(
	"cspell",
	[
		"--reporter",
		"@cspell/cspell-json-reporter",
		"--no-progress",
		"-u",
		"_site/**/*.html",
	],
	{
		encoding: "utf8",
		maxBuffer: 50 * 1024 * 1024,
	}
);

if (result.error) {
	console.error(`Failed to run cspell: ${result.error.message}`);
	process.exit(1);
}

if (result.stderr) {
	process.stderr.write(result.stderr);
}

let report;

try {
	report = JSON.parse(result.stdout);
} catch (error) {
	console.error(`Failed to read cspell report: ${error.message}`);
	if (result.stdout) {
		console.error(result.stdout);
	}
	process.exit(1);
}

if (
	!Array.isArray(report.issues) ||
	!Array.isArray(report.error) ||
	typeof report.result?.files !== "number" ||
	typeof report.result.errors !== "number"
) {
	console.error("CSpell returned an incomplete report.");
	process.exit(1);
}

const issues = report.issues || [];
const reportedErrors = report.error || [];
const summary = report.result || {};

for (const issue of issues) {
	const file = issue.uri?.startsWith("file:")
		? path.relative(process.cwd(), fileURLToPath(issue.uri))
		: issue.uri;
	const type = issue.isFlagged ? "Flagged word" : "Unknown word";
	console.log(`${file}:${issue.row}:${issue.col} - ${type} (${issue.text})`);
}

console.log(
	`CSpell: Files checked: ${summary.files || 0}, Issues found: ${issues.length} in ${
		summary.filesWithIssues?.length || 0
	} files.`
);

if (reportedErrors.length || summary.errors > 0 || summary.files === 0) {
	console.error("CSpell reported an execution error:");
	console.error(JSON.stringify(reportedErrors, null, 2));
	process.exit(1);
}

if (result.status !== 0 && !(result.status === 1 && issues.length > 0)) {
	console.error(`CSpell exited with status ${result.status}.`);
	process.exit(1);
}

if (issues.length > 0) {
	console.log("Spelling findings are non-blocking in pull request checks.");
}
