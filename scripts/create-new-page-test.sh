#!/bin/bash

# Initialize a variable to store the created files and their corresponding directories
created_files=""

# Function to run the newPage script with predefined inputs and create the files
run_test() {
  EN_TITLE="$1"
  EN_DESC="$2"
  FR_TITLE="$3"
  FR_DESC="$4"
  INTERNAL_LINKS="$5"

  echo "Running script with:"
  echo "English Title: $EN_TITLE"
  echo "English Description: $EN_DESC"
  echo "French Title: $FR_TITLE"
  echo "French Description: $FR_DESC"
  echo "Internal Links: $INTERNAL_LINKS"

  # Ensure unique filenames for the titles
  EN_SLUG=$(slugify "$EN_TITLE")
  FR_SLUG=$(slugify "$FR_TITLE")

  EN_FILE="src/pages/en/${EN_SLUG}.md"
  FR_FILE="src/pages/fr/${FR_SLUG}.md"

  while [[ -f "$EN_FILE" ]]; do
    echo "The file $EN_FILE already exists."
    EN_TITLE="${EN_TITLE}_new"
    EN_SLUG=$(slugify "$EN_TITLE")
    EN_FILE="src/pages/en/${EN_SLUG}.md"
  done

  while [[ -f "$FR_FILE" ]]; do
    echo "The file $FR_FILE already exists."
    FR_TITLE="${FR_TITLE}_new"
    FR_SLUG=$(slugify "$FR_TITLE")
    FR_FILE="src/pages/fr/${FR_SLUG}.md"
  done

  # Run the Node.js script with predefined inputs
  EN_TITLE="$EN_TITLE" EN_DESC="$EN_DESC" FR_TITLE="$FR_TITLE" FR_DESC="$FR_DESC" INTERNAL_LINKS="$INTERNAL_LINKS" node << 'EOF'
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

const slugifyOptions = {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g
};

const titleEN = process.env.EN_TITLE;
const descriptionEN = process.env.EN_DESC;
const titleFR = process.env.FR_TITLE;
const descriptionFR = process.env.FR_DESC;
const hasInternalLinks = process.env.INTERNAL_LINKS.toLowerCase() === 'yes';

console.log("English Title:", titleEN);
console.log("English Description:", descriptionEN);
console.log("French Title:", titleFR);
console.log("French Description:", descriptionFR);
console.log("Has Internal Links:", hasInternalLinks);

// Get unique file names
const enSlug = slugify(titleEN, slugifyOptions);
const frSlug = slugify(titleFR, slugifyOptions);
const fileNameEN = `${enSlug}.md`;
const fileNameFR = `${frSlug}.md`;

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
EOF

}

# Utility function to slugify a string
slugify() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]+/-/g' -e 's/^-//' -e 's/-$//'
}

# Test cases
run_test "Welcome to My Blog!" "This is the first post on my blog, introducing the topics and themes that will be covered." "Bienvenue sur Mon Blog!" "Ceci est le premier article sur mon blog, introduisant les sujets et les thèmes qui seront abordés." "yes"
run_test "About Us: Our Mission & Vision" "Learn more about our mission, vision, and team members." "À Propos de Nous: Notre Mission & Vision" "En savoir plus sur notre mission, notre vision et les membres de notre équipe." "no"
run_test "Contact Information (2024)" "Find out how to get in touch with us for any inquiries or support." "Informations de Contact (2024)" "Découvrez comment nous contacter pour toute question ou assistance." "yes"
run_test "Our Services @ 2024" "An overview of the various services we offer to our clients." "Nos Services @ 2024" "Un aperçu des différents services que nous offrons à nos clients." "no"
run_test "Frequently Asked Questions & Answers" "Answers to the most common questions about our products and services." "Questions Fréquemment Posées & Réponses" "Réponses aux questions les plus courantes concernant nos produits et services." "yes"

# Remove the _site folder to ensure a clean build
echo "Cleaning up the _site folder..."
rm -rf _site

# Run the build process
echo "Running build process..."
npm run build
