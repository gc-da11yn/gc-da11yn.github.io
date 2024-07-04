const fs = require("fs");
const ps = require("prompt-sync");
const path = require("path");
const slugify = require("slugify");

const prompt = ps();

// Get user input
const titleEN = prompt("What is the *English* title value of your page?: ");
const descriptionEN = prompt("What is the *English* description value of your page?: ");
const titleFR = prompt("What is the *French* title value of your page?: ");
const descriptionFR = prompt("What is the *French* description value of your page?: ");

// Log the input to verify it's correct
console.log("English Title:", titleEN);
console.log("English Description:", descriptionEN);
console.log("French Title:", titleFR);
console.log("French Description:", descriptionFR);

// Slugify the titles for file names
const fileNameEN = slugify(titleEN, { lower: true }) + ".md";
const fileNameFR = slugify(titleFR, { lower: true }) + ".md";

// Prepare front matter content
const mdContentEN = `---
title: ${titleEN}
description: ${descriptionEN}
layout: layouts/base.njk
toggle: /fr/${fileNameFR}
---
`;
const mdContentFR = `---
title: ${titleFR}
description: ${descriptionFR}
layout: layouts/base.njk
toggle: /en/${fileNameEN}
---
`;

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
