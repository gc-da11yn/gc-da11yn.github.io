const fs = require("fs");
const ps = require("prompt-sync");

const prompt = ps();

console.log(process.cwd());

const folderName = prompt("What is the name of your new folder?: ");
const titleEN = prompt("What is the *english* title value of your page?: ");
const descriptionEN = prompt(
	"What is the *english* description value of your page?: "
);

var htmlContentEN = `
---
title: ${titleEN}
layout: layouts/base.njk
description: ${descriptionEN}
---

<!-- HTML starts here -->`;

var jsonContentEN = `
{
	"breadcrumbs": [
		{
			"title": "${titleEN}",
			"link": "/en/${folderName}/"
		}
	]
}
`;

try {
	if (!fs.existsSync("src/en/" + folderName)) {
		fs.mkdirSync("src/en/" + folderName);
	}
} catch (err) {
	console.error(err);
}

fs.writeFile(
	"src/en/" + folderName + "/index.html",
	htmlContentEN,
	function (err, result) {
		if (err) console.log("error", err);
	}
);
fs.writeFile(
	"src/en/" + folderName + `/${folderName}.json`,
	jsonContentEN,
	function (err, result) {
		if (err) console.log("error", err);
	}
);

//---------------------------------------------------------------------------------------------

const titleFR = prompt("What is the *french* title value of your page?: ");
const descriptionFR = prompt(
	"What is the *french* description value of your page?: "
);

var htmlContentFR = `
---
title: ${titleFR}
layout: layouts/base.njk
description: ${descriptionFR}
---

<!-- HTML starts here -->`;

var jsonContentFR = `
{
	"breadcrumbs": [
		{
			"title": "${titleFR}",
			"link": "/en/${folderName}/"
		}
	]
}
`;

try {
	if (!fs.existsSync("src/fr/" + folderName)) {
		fs.mkdirSync("src/fr/" + folderName);
	}
} catch (err) {
	console.error(err);
}

fs.writeFile(
	"src/fr/" + folderName + "/index.html",
	htmlContentFR,
	function (err, result) {
		if (err) console.log("error", err);
	}
);
fs.writeFile(
	"src/fr/" + "/" + folderName + `/${folderName}.json`,
	jsonContentFR,
	function (err, result) {
		if (err) console.log("error", err);
	}
);
