const fs = require("fs");
const ps = require("prompt-sync");
const path = require("path");
const slugify = require("slugify");

const prompt = ps();

// Configure slugify to match Eleventy's default behavior
const slugifyOptions = {
	lower: true,
	strict: true,
	remove: /[*+~.()'"!:@]/g
};

// Function to get a unique slugified file name
function getUniqueFileName(directory, title) {
	let slug = slugify(title, slugifyOptions);
	let fileName = `${slug}.md`;
	while (fs.existsSync(path.join(directory, fileName))) {
		console.log(`The file ${path.join(directory, fileName)} already exists.`);
		title = prompt(`Please provide a new title for your page: `);
		slug = slugify(title, slugifyOptions);
		fileName = `${slug}.md`;
	}
	return { title, fileName };
}

// Get user input for English
let titleEN = prompt("What is the *English* title value of your page?: ");
const descriptionEN = prompt("What is the *English* description value of your page?: ");
const enResult = getUniqueFileName(path.join("src", "pages", "en"), titleEN);
titleEN = enResult.title;
const fileNameEN = enResult.fileName;

// Get user input for French
let titleFR = prompt("What is the *French* title value of your page?: ");
const descriptionFR = prompt("What is the *French* description value of your page?: ");
const frResult = getUniqueFileName(path.join("src", "pages", "fr"), titleFR);
titleFR = frResult.title;
const fileNameFR = frResult.fileName;

const hasInternalLinks = prompt("Are there any internal to GC links in the content? (yes/no): ").toLowerCase() === "yes";

// Log the input to verify it's correct
console.log("English Title:", titleEN);
console.log("English Description:", descriptionEN);
console.log("French Title:", titleFR);
console.log("French Description:", descriptionFR);
console.log("Has Internal Links:", hasInternalLinks);

// Prepare front matter content with quoted values
let mdContentEN = `---
title: "${titleEN}"
description: "${descriptionEN}"
layout: layouts/base.njk
toggle: /fr/${fileNameFR}`;
if (hasInternalLinks) {
	mdContentEN += `
internalLinks: true`;
}
mdContentEN += `
---`;

let mdContentFR = `---
title: "${titleFR}"
description: "${descriptionFR}"
layout: layouts/base.njk
toggle: /en/${fileNameEN}`;
if (hasInternalLinks) {
	mdContentFR += `
internalLinks: true`;
}
mdContentFR += `
---`;

// Define file paths
const filePathEN = path.join("src", "pages", "en", fileNameEN);
const filePathFR = path.join("src", "pages", "fr", fileNameFR);

// Create directories if they do not exist
if (!fs.existsSync(path.dirname(filePathEN))) {
	fs.mkdirSync(path.dirname(filePathEN), { recursive: true });
}
if (!fs.existsSync(path.dirname(filePathFR))) {
	fs.mkdirSync(path.dirname(filePathFR), { recursive: true });
}

// Write the files
fs.writeFileSync(filePathEN, mdContentEN, function (err) {
	if (err) console.error("Error writing English file:", err);
});
fs.writeFileSync(filePathFR, mdContentFR, function (err) {
	if (err) console.error("Error writing French file:", err);
});

console.log("Files created successfully!");
