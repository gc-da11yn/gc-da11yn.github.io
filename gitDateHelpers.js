const spawn = require("cross-spawn");

// https://github.com/11ty/eleventy/blob/main/src/Util/DateGitLastUpdated.js
function getGitLastUpdatedTimeStamp(filePath) {
	return (
		parseInt(
			spawn
				.sync(
					"git",
					// Formats https://www.git-scm.com/docs/git-log#_pretty_formats
					// %at author date, UNIX timestamp
					["log", "-1", "--format=%at", filePath]
				)
				.stdout.toString("utf-8")
		) * 1000
	);
}

// https://github.com/11ty/eleventy/blob/main/src/Util/DateGitFirstAdded.js
function getGitFirstAddedTimeStamp(filePath) {
	return (
		parseInt(
			spawn
				.sync(
					"git",
					// Formats https://www.git-scm.com/docs/git-log#_pretty_formats
					// %at author date, UNIX timestamp
					["log", "--diff-filter=A", "--follow", "-1", "--format=%at", filePath]
				)
				.stdout.toString("utf-8")
		) * 1000
	);
}

module.exports = { getGitLastUpdatedTimeStamp, getGitFirstAddedTimeStamp };
