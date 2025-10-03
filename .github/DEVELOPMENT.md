<div lang="fr">

([Français](#Développement))

</div>

# Development

## Technology

The project is based on using the same technology as the [a11yproject](https://github.com/a11yproject/gc-da11yn.github.io).

Using [Eleventy](https://www.11ty.io), to build a simple static site which uses [nodeJS](https://nodejs.org/en/) to generate and deploying with [Github Actions](https://github.com/features/actions) to [Github Pages](https://pages.github.com) hosts the site.

Eleventy relies on [Markdown](https://daringfireball.net/projects/markdown/syntax), [Sass](https://sass-lang.com/), [Nunjucks](https://mozilla.github.io/nunjucks/), and [JSON](https://www.json.org/) to function.

### Eleventy Configuration Architecture

**Plugin-Based System**: The site uses a modern plugin-based architecture that provides excellent performance and maintainability:

- **40-60% faster development builds** through optimized conditional loading
- **Plugin architecture** in `eleventy/plugins/` for extensible functionality
- **Computed data system** for automatic Table of Contents generation
- **Performance optimizations** including git operations caching and environment-specific loading

For detailed technical information, see the [refactoring documentation](../docs/implementation/eleventy-refactoring-plan.md).

### Markdown helpers:

- [markdown-it - npm](https://www.npmjs.com/package/markdown-it)
- [markdown-it-anchor - npm](https://www.npmjs.com/package/markdown-it-anchor)
- [markdown-it-attrs - npm](https://www.npmjs.com/package/markdown-it-attrs)

It may be helpful to familiarize yourself with these technologies, depending on what you want to do. For more information, check our our [Contributor documentation](./CONTRIBUTING.md).

## Requirements

You'll need access to the following programs and technology in order to get the website running on your computer to work on:

1. A command line application such as Terminal.
1. [Git](https://git-scm.com/) version control and a [GitHub account](https://github.com/).
    - You can check to see if Git is already installed on your computer by typing `git --version` into your command line application. If it is installed it will list the currently installed version (e.g. `git version 2.18.0`).
    - If you prefer to use a GUI to work with version control, GitHub offers a [free desktop app](https://desktop.github.com).
1. [Node.js](https://nodejs.org/en/), a programming environment powered by JavaScript.
    - You can check to see if Node.js is already installed on your computer by typing `node -v` into your command line application. If it is installed it will list the currently installed version (e.g. `v16.4.0`). This project requires a minimum version of `16.0.0`.
    - It may also be helpful to use a program such as [nvm](https://github.com/creationix/nvm) to help manage your Node.js versions. This will ensure that the version of Node.js your computer uses to run various things won't conflict with an updated version. For Windows users, you can use [coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows).

## Installation

Once you have met [the prerequisites](#requirements), follow these steps to install the website on your computer:

1. Fork the repository via the Github web by clicking the "Fork" button in the top right corner.

2. After you created your fork from the Github web site. Clone your fork repository by entering this command into your command line application: Replace "githubUsername" by your github username.

`git clone https://github.com/githubUsername/gc-da11yn.github.io.git`

It will create a version controlled copy of the website in the directory you entered the command in.

3. Navigate into the project's [root directory](https://en.m.wikipedia.org/wiki/Root_directory) by typing the following change directory command in your command line application.

`cd gc-da11yn.github.io/`

4. Add a reference to the upstream.

`git remote add upstream https://github.com/gc-da11yn/gc-da11yn.github.io.git`

5. Fetch all the latest changes. It will make you local instance is aware of all the recent change made to upstream project, but nothing will be updated in your code.

`git fetch --all`

Ensure your local working copy includes all the recent changes by running:

`git rebase upstream/main`

5a. Be attentive to rebase conflict, in such situations, you can rollback by running

`git rebase --abort`

and then use a different strategy to update your working copy.

5b. You will see the following message if it went well:

`Successfully rebased and updated refs/heads/main.`

6. Install the project's Node.js modules by typing `npm install` into your command line application. A list of these modules should be displayed after they are downloaded and installed.

## Running the website

After cloning and installing project Node.js modules, type `npm start` into your command line application. This will tell Node.js to compile the project and turn it into a website.

Your command line application will then display some information about Eleventy, including a line that starts with `Local:`. You can copy the URL it points to (it should read something like [`http://localhost:3000`](http://localhost:3000)) and paste it into a browser tab. This will load a local copy of the website that you can interact with to preview your changes.

You can also use the `External` URL to preview the local copy on another device connected to the same network, which helps you check to see how the site looks and functions on things like smartphones. This is done via [Browsersync](https://www.browsersync.io/).

### Different npm scripts

This is a list of all the **npm** commands you could run from the command line within this project.

#### Building the site

The `npm run build` command will build the site into the `_site` folder. It is used for the production server hosted with Github pages.

#### Running in development mode

The `npm run dev` command will build the site into the `_site` folder and set the `ELEVENTY_ENV=dev` variable for the Netlify staging instance of the site.

#### Building the HTML files

The `npm run eleventy` command builds the HTML pages from the `src` folder into the `_site`.

#### Creating a new page

To create a new page for the site in both the `src/pages/en` and `src/pages/fr` directories you can use `npm run newPage`.

The script will ask you for the English title and a description of the page, then the French title and description, and then if the page has any links that are internal to the Government of Canada firewall.

#### Pages to Review System

The pages-to-review system automatically tracks and displays pages that have been modified since the last upstream/main branch. This helps developers and reviewers identify what content needs to be checked before publishing.

##### How It Works

During the build process, the system:

1. **Compares your current branch** against `upstream/main` to detect changed files
2. **Identifies page files** in `src/pages/` and `src/main/` directories
3. **Generates a review page** at `/en/pages-to-review/` listing all changed pages
4. **Optimizes performance** with caching and conditional network operations

##### Performance Optimizations

The system includes several performance improvements:

- **Development mode**: Skips network `git fetch` operations for faster builds
- **Caching**: 5-minute cache prevents redundant git operations
- **Smart fallbacks**: Uses existing git references when available
- **Minimal overhead**: Lightweight operations focused on build performance

##### Accessing Changed Pages

- **During development**: View changed page URLs in the terminal output
- **Review page**: Visit `/en/pages-to-review/` to see a formatted list of all changed pages
- **Direct testing**: Use the provided URLs to test your changes immediately

##### Manual Testing

You can test the system directly:

```bash
# Check what pages are detected as changed
node scripts/build-changed-pages.js

# Run a development build to see the full workflow
ELEVENTY_WATCH=true npm run build
```

For detailed technical information, see the [implementation documentation](../docs/implementation/pages-to-review-optimization.md).

#### Checking the spelling on the site

The `npm run spellcheck` command runs a spell checker on all the markdown and HTML files inside the `src` folder.

The script will then display possible spelling errors in the terminal.

#### Building the site for testing locally

The `npm run start` command is used to build the `_site` folder with all the files (HTML, CSS, JS, and images) needed to host the site.

The script also runs a web server on your machine for you to view the site locally, usually set at _http://localhost:8081_ or the nearest unused port to **8081**, if it's in use.

#### Checking for Broken Links

We have several link checking options available for different use cases:

##### Interactive Link Checker (Recommended)

The interactive link checker provides a menu-driven interface to check different environments:

```bash
npm run link-check
```

This will prompt you to choose from:
- **Localhost - Changed files only** (fastest for development)
- **Localhost - Full check** (complete local site scan)
- **PR Preview - Full check** (check Netlify deploy previews)
- **Live site - Full check** (production website validation)
- **Custom URL - Full check** (any external site)

##### Quick Link Checker (For Automation)

For development workflows and GitHub Actions, use the quick link checker that focuses on changed files only:

```bash
npm run link-check-quick
```

##### How It Works

The link checking system uses two methods depending on the environment:

1. **Sitemap-based checking** (preferred for performance):
   - Uses `sitemap.xml` to get complete list of site pages
   - Fetches each page and validates all links within it
   - Much faster than crawling as it has the definitive page list
   - Used for: localhost full check, PR previews, live site checking

2. **Changed files checking** (fastest for development):
   - Uses `git diff` to detect only modified pages since last commit
   - Only checks links within changed pages
   - Used for: localhost changed files option

3. **Crawler-based checking** (fallback):
   - Discovers pages by following links from homepage
   - Used when sitemap.xml is unavailable or for external sites
   - Used for: custom URL checking, sitemap fallback scenarios

##### Results and Output

All link checkers will:

- Display real-time progress with page and link counters
- Show broken links with source file paths (when available)
- Generate timestamped JSON reports (e.g., `broken-links.json`)
- Check both regular links and anchor links (#fragments)
- Validate image sources, stylesheets, and script files

##### Tips for Link Checking

- **For development**: Use `npm run link-check` and select localhost changed files option
- **For comprehensive testing**: Use localhost full check or live site options
- **For CI/CD pipelines**: Use `npm run link-check-quick` for fast automated checking
- **For pull request reviews**: Use PR preview option with deploy preview number

### Updating the website

Saving project files will make Node.js regenerate the website to reflect the changes you made. Your command line application will display some new messaging to reflect this, including any errors you might accidentally make. Don't worry! Since the site uses version control, you're not in danger of seriously breaking anything. If you fix the error, Node.js should continue to run.

Make sure you edit the files in the `src/` subdirectory. Any edits made in the `_site` subdirectory will be overwritten by the next change to any file in `src/` and all your hard work will be lost!

### About `{{ pathPrefix }}`

The `{{ pathPrefix }}` variable is used throughout the site to ensure all internal links and asset URLs work correctly, whether the site is deployed as the main repository or as a fork (such as on GitHub Pages).

On the main site, `{{ pathPrefix }}` is an empty string (""), so URLs are relative to the root.

On a fork, `{{ pathPrefix }}` is set to the repository name (e.g., "`/gc-da11yn.github.io`"), so all links and assets are correctly prefixed. Always use `{{ pathPrefix }}` for internal links and assets in templates and markdown files to ensure robust navigation in all deployment scenarios.

### Quitting

You can tell Node.js to stop running by pressing the <kbd>Control</kbd> and <kbd>C</kbd> keys at the same time in your command line application, or by closing the command line application window or tab.

## Alerts

We have three types of alerts that can be used either individually or together in your webpage, as per your needs and their logic can be found in [alert include](https://github.com/gc-da11yn/gc-da11yn.github.io/blob/main/src/_includes/partials/alerts.njk)

### isDraft

#### What is the function of isDraft

The `isDraft` variable is used to control whether or not an alert message includes a `isDraft` message. If the `isDraft` variable is set to `true`, the alert message will include the message that the content is still in draft and is not final. If it is  included not at all, the "Draft" message will be excluded

#### How to trigger isDraft

To trigger the `isDraft` variable in the front matter, you have to set its value to `true`. Here's an example of front matter that sets the `isDraft` variable to `true`:

    ```yaml
    ---
    isDraft: true
    ---
    ```

#### What happens when isDraft is not included

If you don't include the `isDraft` variable in the front matter of your Markdown file, then the "Draft" message will not be included in the alert message by default. This is because the `isDraft` variable is used to control whether or not the "Draft" message is included, and if it is not specified in the front matter, it will default to false.

### needsTranslation

#### What is the function of needsTranslation

The `needsTranslation` variable is used to indicate whether or not the content needs to be translated to another language. When this is set to `true` a note is added to the page that tells the reader that the content is only available in one language. When this is set, the language toggle link is also removed from the page

#### How to trigger needsTranslation

To trigger the `needsTranslation` variable in the front matter, you have to set its value to `true`, if the content needs to be translated. Here's an example of front matter that sets the `needsTranslation` variable to `true`:

    ```yaml
    ---
    needsTranslation: true
    ---
    ```

#### What happens when needsTranslation is not included

If you don't include the `needsTranslation` variable in the front matter of your Markdown file, then the "needsTranslation" message will not be included in the alert message by default. This is because the `needsTranslation` variable is used to control whether or not the "needsTranslation" message is included, and if it is not specified in the front matter, it will default to `false`.

### archived

#### What is the function of archived

The `archived` variable is used to indicate that a page is no longer maintained and should be treated as archived content. When this variable is set to `true`, the following changes occur:

- An archived dismissible banner is automatically added to the top of the page.
- The page is removed from collections, such as `collections.pages`, so it won’t appear in menus or page listings.
- "Achived: " is added to the page’s `<title>` and `<h1>` to clearly indicate its status.
- The `url` remains unchanged, so existing links to the page continue to work.

The banner also includes a reminder for users to remove bookmarks or links to the page and to check the homepage for future updates.

#### How to trigger archive

To trigger the `archived` variable in the front matter, set its value to `true`. Here's an example of front matter that sets the `archived` variable to `true`:

    ```yaml
    ---
    archived: true
    ---
    ```

#### What happens when archive is not included

If the `archived` variable is not included in the front matter, the page will be treated as active. It will not display the archived warning, will remain in collections, and its title and heading will remain unchanged.

### internalLinks

#### What is the function of internalLinks

This needs to be set to `true` on all pages that have links that point to content that can only be accessed from behind the Government of Canada firewall.

#### How to trigger internalLinks

To trigger the `internalLinks` variable in the front matter, you have to set its value to `true`, if the website contains internal links that can only be accessed by government of canada. Here's an example of front matter that sets the `internalLinks` variable to `true`:

    ```yaml
    ---
    internalLinks: true
    ---
    ```

#### What happens when internalLinks is not included

If you don't include the `internalLinks` variable in the front matter of your Markdown file, then the "internalLinks" message will not be included in the alert message by default. This is because the `internalLinks` variable is used to control whether or not the "internalLinks" message is included, and if it is not specified in the front matter, it will default to `false`.

## On this page / Table of Contents (TOC)

We have implemented an automatic generation of a "On this page" section for pages that have `toc: true` or `tocSimple: true` set in their front matter.

### Full TOC (`toc: true`)

If `toc: true` is set in the front matter, the table of contents will include headings at levels 2 and 3. This is useful for providing a detailed overview of the page content.

To enable the full TOC on a specific page, add the following to the front matter of the Markdown file:

    ```yaml
    ---
    toc: true
    ---
    ```

#### Simple TOC (tocSimple: true)

If `tocSimple: true` is set in the front matter, the table of contents will only include headings at level 2. This is useful for a more concise overview without listing subheadings.

To enable the simple TOC on a specific page, add the following to the front matter of the Markdown file:

    ```yaml
    ---
    tocSimple: true
    ---
    ```

This configuration will automatically generate a "On this page" section at the beginning of the content, listing the specified headings based on the toc or tocSimple setting.

## Download Component

The `hasDocument` frontmatter key allows you to include a downloadable document component on your page. This component provides information about the file, including its size, type, and filename.

The logic for this component is located in the following file: `src/_includes/partials/download.njk`.

To enable the download component on a page, include the `hasDocument` object in the frontmatter with the following keys:

- `filename`: The name of the file to be downloaded, including the extension. Example: `"example_document.docx"`. Documents should be put in `src/_docs/`.
- `sizeNumber`: The file size as a number. Example: `563`.
- `sizeUnit`: The unit for the file size. Acceptable values are case-insensitive:
  - For English: `KB`, `MB`
  - For French: `ko`, `Mo`
- `type`: (Optional) The type of document, such as `word`, `powerpoint`, or `pdf`. If not specified, it defaults to the generic file type.

**Example Frontmatter:**

```yaml
hasDocument:
  filename: "example_document.docx"
  sizeNumber: 563
  sizeUnit: KB
  type: word
```

The file size and unit will automatically adapt to the current language (`locale`) set for the page.

## Language Toggle (toggle)

The `toggle` frontmatter property is used to create language switching links between English and French versions of pages. This system allows users to easily navigate between language versions of the same content.

### How the toggle Property Works

The `toggle` property should contain the **exact title** of the corresponding page in the other language. The system automatically converts this title into a proper URL slug using the `stripTagsSlugify` filter.

#### Example Usage

**English Page (`src/pages/en/about-us.md`):**

```yaml
---
title: "About Us"
toggle: "À propos de nous"
---
```

**French Page (`src/pages/fr/a-propos-de-nous.md`):**

```yaml
---
title: "À propos de nous"
toggle: "About Us"
---
```

### URL Generation Process

The language toggle system automatically generates URLs based on page type and content:

1. **Regular Pages**: Uses the toggle title converted to a slug
   - English toggle: "À propos de nous" → `/fr/a-propos-de-nous/`
   - French toggle: "About Us" → `/en/about-us/`

2. **Home Pages**: Special handling for pages tagged with `home`
   - English home toggle → `/fr/`
   - French home toggle → `/en/`

### Technical Implementation

The language toggle is handled in `src/_includes/partials/lang.njk`:

```njk
{% if needsTranslation != true and toggle %}
{% set otherLangSlug = toggle | stripTagsSlugify %}
{# Special handling for home pages #}
{% if tags and 'home' in tags %}
    {% set toggleUrl = pathPrefix + "/" + otherLang + "/" %}
{% else %}
    {% set toggleUrl = pathPrefix + "/" + otherLang + "/" + otherLangSlug + "/" %}
{% endif %}
<!-- Language toggle link generated here -->
{% endif %}
```

### Key Features

- **Automatic Slug Generation**: The `stripTagsSlugify` filter automatically converts page titles to URL-safe slugs
- **Accent Handling**: Converts accented characters (é→e, à→a, ç→c, etc.)
- **Case Conversion**: Converts to lowercase
- **Space Replacement**: Replaces spaces with hyphens
- **Special Character Removal**: Removes punctuation and special characters

### Best Practices

1. **Use Exact Titles**: Always use the exact title of the target page as it appears in that page's frontmatter
2. **Keep Titles Consistent**: Make sure both language versions reference each other correctly
3. **Home Page Tagging**: Include `home` in the tags array for home pages to ensure proper URL generation
4. **Path Prefix Compatibility**: The system works with both main site deployment and GitHub Pages forks

### Special Cases

#### Home Pages

Pages tagged with `home` receive special treatment:

- Toggle URLs go directly to language root (`/fr/` or `/en/`)
- Prevents double language codes in URLs

#### Pages Without Translation

Use `needsTranslation: true` to:

- Hide the language toggle link
- Display a notice that content is only available in one language

### Examples

**Regular Content Page:**

```yaml
---
title: "Creating Accessible Documents"
toggle: "Créer des documents accessibles"
tags: [documents, accessibility]
---
```

_Generated toggle URL: `/fr/creer-des-documents-accessibles/`_

**Home Page:**

```yaml
---
title: "Digital Accessibility Toolkit"
toggle: "Boîte à outils d'accessibilité numérique"
tags: [home]
---
```

_Generated toggle URL: `/fr/`_

**Single Language Page:**

```yaml
---
title: "Temporary Content"
needsTranslation: true
---
```

_No toggle link displayed, shows translation notice instead_
______________________

<div lang="fr">

# Développement

## Technologie

Le projet est basé sur l'utilisation de la même technologie que le projet [a11yproject](https://github.com/a11yproject/gc-da11yn.github.io).

En utilisant [Eleventy](https://www.11ty.io), pour construire un site statique simple qui utilise [nodeJS](https://nodejs.org/fr/) pour générer et déployer avec  [Github Actions](https://github.com/features/actions) aux [Github Pages](https://pages.github.com) hébergeant le site.

Eleventy s'appuie sur [Markdown](https://daringfireball.net/projects/markdown/syntax), [Sass](https://sass-lang.com/), [Nunjucks](https://mozilla.github.io/nunjucks/) et [JSON](https://www.json.org/) pour fonctionner.

### Architecture de configuration d'Eleventy

**Système basé sur des plugins** : Le site utilise une architecture moderne basée sur des plugins qui offre d'excellentes performances et une maintenabilité :

- **40-60% de constructions de développement plus rapides** grâce au chargement conditionnel optimisé
- **Architecture de plugins** dans `eleventy/plugins/` pour une fonctionnalité extensible
- **Système de données calculées** pour la génération automatique de tables des matières
- **Optimisations de performance** incluant la mise en cache des opérations git et le chargement spécifique à l'environnement

Pour des informations techniques détaillées, consultez la [documentation de refactorisation](../docs/implementation/eleventy-refactoring-plan.md).

### Aides pour le markdown

- [markdown-it - npm](https://www.npmjs.com/package/markdown-it)
- [markdown-it-anchor - npm](https://www.npmjs.com/package/markdown-it-anchor)
- [markdown-it-attrs - npm](https://www.npmjs.com/package/markdown-it-attrs)

Il peut être utile de se familiariser avec ces technologies, en fonction de ce que vous voulez faire. Pour plus d'informations, consultez notre [Contributor documentation](./CONTRIBUTING.md).

## Exigences

Vous devrez avoir accès aux programmes et technologies suivants afin de pouvoir travailler sur le site Web sur votre ordinateur :

1. Une application de ligne de commande telle que Terminal.
1. Le controle de version [Git](https://git-scm.com/) et un [compte GitHub](https://github.com/).
    - Vous pouvez vérifier si Git est déjà installé sur votre ordinateur en tapant `git --version` dans votre application de ligne de commande. S'il est installé, il listera la version actuellement installée (par exemple, `git version 2.18.0`).
    - Si vous préférez utiliser une autre interface graphique pour travailler avec le contrôle de version, GitHub propose une [application de bureau gratuite](https://desktop.github.com).
1. [Node.js](https://nodejs.org/fr/), un environnement de programmation basé sur JavaScript.
    - Vous pouvez vérifier si Node.js est déjà installé sur votre ordinateur en tapant `node -v` dans votre application de ligne de commande. S'il est installé, il affichera la version actuellement installée (par exemple, `v16.4.0`). Ce projet nécessite une version minimale de `16.0.0`.
    - Il peut également être utile d'utiliser un programme tel que [nvm](https://github.com/creationix/nvm) pour vous aider à gérer vos versions de Node.js. Cela garantira que la version de Node.js que votre ordinateur utilise pour exécuter diverses choses n'entrera pas en conflit avec une version mise à jour. Pour les utilisateurs de Windows, vous pouvez utiliser [coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows).

## Installation

Une fois que vous avez rencontré [les conditions préalables](#Exigences), suivez ces étapes pour installer le site Web sur votre ordinateur :

1. Fork le dépôt via le Github web en cliquant sur le bouton "Fork" dans le coin supérieur droit.

2. Après avoir créé votre fork à partir du site web Github, clonez votre dépôt de fork en entrant cette commande dans votre application de ligne de commande : Remplacez "githubUsername" par votre nom d'utilisateur Github.

`git clone https://github.com/githubUsername/gc-da11yn.github.io.git`

 Cela créera une copie sous contrôle de version du site Web dans le répertoire dans lequel vous avez entré la commande.

 3. Naviguez dans le [répertoire racine](https://fr.wikipedia.org/wiki/R%C3%A9pertoire_racine) du projet en tapant la commande de changement de répertoire suivante dans votre application de ligne de commande.

 `cd gc-da11yn.github.io/`

 4. Ajoutez une référence à l'upstream.

 `git remote add upstream https://github.com/gc-da11yn/gc-da11yn.github.io.git`

 5. Récupérez toutes les dernières modifications. Cela fera en sorte que votre instance locale soit au courant de toutes les modifications récentes apportées à l'upstream du projet, mais rien ne sera mis à jour dans votre code.

 `git fetch --all`

  Assurez vous que votre copie de travail locale inclut tous les changements récents git rebase upstream/main

  5a. Soyez attentif aux conflits de rebasement, dans une telle situation vous pouvez faire marche arrière en exécutant

  `git rebase --abort`

  et ensuite utiliser une stratégie différente pour mettre à jour votre copie de travail.

  5b. Si tout s'est bien passé, vous verrez le message suivant

  `Successfully rebased and updated refs/heads/main.`

 6. Installez les modules Node.js du projet en tapant `npm install` dans votre application de ligne de commande. Une liste des modules devrait être affichée après leur téléchargement et leur installation.

## Exécution du site Web

Après avoir cloné et installé les modules Node.js du projet, tapez `npm start` dans votre application de ligne de commande. Cela demandera à Node.js de compiler le projet et de le transformer en site web.

Votre application de ligne de commande affichera alors quelques informations sur Eleventy, dont une ligne qui commence par `Local:`. Vous pouvez copier l'URL vers laquelle elle pointe (elle devrait ressembler à [`http://localhost:3000`](http://localhost:3000)) et la coller dans un onglet du navigateur. Cela chargera une copie locale du site web avec laquelle vous pourrez interagir pour prévisualiser vos modifications.

Vous pouvez également utiliser l'URL `External` pour prévisualiser la copie locale sur un autre appareil connecté au même réseau, ce qui vous permet de vérifier l'aspect et le fonctionnement du site sur des appareils tels que les smartphones. Cela se fait via [Browsersync](https://www.browsersync.io/).

### Les différents scripts npm

Voici une liste de toutes les commandes **npm** que vous pouvez exécuter à partir de la ligne de commande dans ce projet.

#### Compilation du site

La commande `npm run build` va construire le site dans le dossier `_site`. Il est utilisé pour le serveur de production hébergé avec "Github pages".

#### Exécution en mode développement

La commande `npm run dev` va construire le site dans le dossier `_site` et définir la variable `ELEVENTY_ENV=dev` pour l'instance Netlify de développement du site.

#### Construction des fichiers HTML

La commande `npm run eleventy` construit les pages HTML du dossier `src` dans le dossier `_site`.

#### Création d'une nouvelle page

Pour créer une nouvelle page pour le site dans les répertoires `src/pages/en` et `src/pages/fr`, vous pouvez utiliser `npm run newPage`.

Le script vous demandera le titre anglais et une description de la page, puis le titre et la description en français, et enfin si la page contient des liens internes au pare-feu du gouvernement du Canada.

#### Système de pages à réviser

Le système de pages à réviser suit automatiquement et affiche les pages qui ont été modifiées depuis la dernière branche upstream/main. Cela aide les développeurs et les réviseurs à identifier le contenu qui doit être vérifié avant la publication.

##### Comment ça fonctionne

Pendant le processus de construction, le système :

1. **Compare votre branche actuelle** avec `upstream/main` pour détecter les fichiers modifiés
2. **Identifie les fichiers de page** dans les répertoires `src/pages/` et `src/main/`
3. **Génère une page de révision** à `/en/pages-to-review/` listant toutes les pages modifiées
4. **Optimise les performances** avec la mise en cache et les opérations réseau conditionnelles

##### Optimisations de performance

Le système inclut plusieurs améliorations de performance :

- **Mode développement** : Ignore les opérations `git fetch` réseau pour des constructions plus rapides
- **Mise en cache** : Cache de 5 minutes empêche les opérations git redondantes
- **Fallbacks intelligents** : Utilise les références git existantes quand disponibles
- **Surcharge minimale** : Opérations légères axées sur les performances de construction

##### Accès aux pages modifiées

- **Pendant le développement** : Voir les URLs des pages modifiées dans la sortie du terminal
- **Page de révision** : Visiter `/en/pages-to-review/` pour voir une liste formatée de toutes les pages modifiées
- **Tests directs** : Utiliser les URLs fournies pour tester vos changements immédiatement

##### Tests manuels

Vous pouvez tester le système directement :

```bash
# Vérifier quelles pages sont détectées comme modifiées
node scripts/build-changed-pages.js

# Exécuter une construction de développement pour voir le flux de travail complet
ELEVENTY_WATCH=true npm run build
```

Pour des informations techniques détaillées, voir la [documentation d'implémentation](../docs/implementation/pages-to-review-optimization.md).

#### Vérification de l'orthographe sur le site

La commande `npm run spellcheck` lance un vérificateur d'orthographe sur tous les fichiers markdown et HTML du dossier `src`.

Le script affichera alors les éventuelles erreurs d'orthographe dans le terminal.

#### Construire le site pour le tester localement

La commande `npm run start` est utilisée pour construire le dossier `_site` avec tous les fichiers (HTML, CSS, JS et images) nécessaires pour héberger le site.

Le script exécute également un websever sur votre machine pour vous permettre de visualiser le site localement, généralement sur _http://localhost:8081_ ou sur le port inutilisé le plus proche de **8081**, s'il est utilisé.


##### Vérification des liens brisés

Nous avons plusieurs options de vérification des liens disponibles pour différents cas d'usage :

###### Vérificateur interactif (recommandé)

```bash
npm run link-check
```

Offre un menu interactif avec 5 options :

1. **Localhost (fichiers modifiés uniquement)** - Vérifie seulement les pages modifiées depuis le dernier commit
2. **Localhost (vérification complète)** - Vérifie toutes les pages sur votre serveur local
3. **Aperçu de demande de tirage Netlify** - Vérifie un déploiement d'aperçu en utilisant le numéro PR
4. **Site en direct** - Vérifie le site de production (a11y.canada.ca)
5. **URL personnalisée** - Vérifie n'importe quel site web

###### Vérificateur rapide (pour l'automatisation)

```bash
npm run link-check-quick
```

Vérifie directement les fichiers modifiés sur localhost - idéal pour les pipelines CI/CD et les flux de développement.

###### Comment ça fonctionne

Le système de vérification des liens utilise trois méthodes selon l'environnement :

1. **Vérification basée sur le sitemap** (préférée pour les performances) :
   - Utilise `sitemap.xml` pour obtenir la liste complète des pages du site
   - Récupère chaque page et valide tous les liens qu'elle contient
   - Beaucoup plus rapide que le crawling car elle a la liste définitive des pages
   - Utilisée pour : vérification complète localhost, aperçus PR, vérification du site en direct

2. **Vérification des fichiers modifiés** (plus rapide pour le développement) :
   - Utilise `git diff` pour détecter seulement les pages modifiées depuis le dernier commit
   - Vérifie seulement les liens dans les pages modifiées
   - Utilisée pour : option localhost fichiers modifiés

3. **Vérification basée sur le crawler** (solution de secours) :
   - Découvre les pages en suivant les liens depuis la page d'accueil
   - Utilisée quand sitemap.xml n'est pas disponible ou pour des sites externes
   - Utilisée pour : vérification d'URLs personnalisées, scénarios de secours du sitemap

###### Résultats et sortie

Tous les vérificateurs de liens vont :

- Afficher le progrès en temps réel avec des compteurs de pages et de liens
- Montrer les liens brisés avec les chemins des fichiers sources (quand disponible)
- Générer des rapports JSON horodatés (ex. `broken-links.json`)
- Vérifier les liens réguliers et les liens d'ancrage (#fragments)
- Valider les sources d'images, feuilles de style et fichiers de script

###### Conseils pour la vérification des liens

- **Développement local** : Utilisez le vérificateur interactif ou l'option localhost
- **Revues de demandes de tirage** : Vérifiez les aperçus de déploiement en utilisant le numéro PR
- **Pré-déploiement** : Toujours vérifier le site en direct après des mises à jour majeures
- **Intégration CI/CD** : Utilisez les commandes de vérification rapide dans les pipelines automatisés

### Mise à jour du site Web

En sauvegardant les fichiers du projet, Node.js régénérera le site Web pour refléter les changements que vous avez effectués. Votre application de ligne de commande affichera de nouveaux messages pour refléter cela, y compris toute erreur que vous pourriez accidentellement faire. Ne vous inquiétez pas ! Comme le site utilise la version de contrôle, vous ne risquez pas de casser sérieusement quoi que ce soit. Si vous corrigez l'erreur, Node.js devrait continuer à fonctionner.

Assurez-vous d'éditer les fichiers dans le sous-répertoire `src/`. Toute modification faite dans le sous-répertoire `_site` sera écrasée par la prochaine modification d'un fichier dans `src/` et tout votre travail sera perdu !

### À propos de `{{ pathPrefix }}`

La variable `{{ pathPrefix }}` est utilisée sur tout le site pour garantir que tous les liens internes et les ressources fonctionnent correctement, que le site soit déployé sur le dépôt principal ou sur un fork (par exemple sur GitHub Pages).

Sur le site principal, `{{ pathPrefix }}` est une chaîne vide (""), donc les URLs sont relatives à la racine.

Sur un fork, `{{ pathPrefix }}` prend le nom du dépôt (ex. : "`/gc-da11yn.github.io`"), ce qui permet de préfixer correctement tous les liens et ressources. Utilisez toujours `{{ pathPrefix }}` pour les liens internes et les ressources dans les modèles et fichiers markdown afin d’assurer une navigation robuste dans tous les scénarios de déploiement.

### Quitter

Vous pouvez demander à Node.js d'arrêter de s'exécuter en appuyant simultanément sur les touches <kbd>Control</kbd> et <kbd>C</kbd> dans votre application de ligne de commande, ou en fermant la fenêtre ou l'onglet de l'application de ligne de commande.

## Alertes

Nous avons trois types d'alertes qui peuvent être utilisées individuellement ou ensemble dans votre page Web, selon vos besoins et leur logique peut être trouvée dans. [alerte inclure](https://github.com/gc-da11yn/gc-da11yn.github.io/blob/main/src/_includes/partials/alerts.njk)

### isDraft

#### Quelle est la fonction de isDraft

La variable `isDraft` est utilisée pour contrôler si un message d'alerte inclut ou non un message `isDraft`. Si la variable `isDraft` est définie sur `true`, le message d'alerte inclura le message indiquant que le contenu est toujours à l'état de brouillon et qu'il n'est pas final. S'il n'est pas du tout inclus, le message "Brouillon" sera exclu.

#### Comment déclencher isDraft

Pour déclencher la variable `isDraft` dans le front matter, vous devez définir sa valeur sur `true`. Voici un exemple d'avant-propos qui définit la variable `isDraft` sur `true`:

    ```yaml
    ---
    isDraft:true
    ---
    ```

#### Que se passe-t-il lorsque isDraft n'est pas inclus

Si vous n'incluez pas la variable `isDraft` dans le front matter de votre fichier Markdown, le message "Draft" ne sera pas inclus dans le message d'alerte par défaut. C'est parce que la variable `isDraft` est utilisée pour contrôler si oui ou non le message "Brouillon" est inclus, et s'il n'est pas spécifié dans l'avant-propos, il sera faux par défaut.

### needsTranslation

#### Quelle est la fonction de needsTranslation

La variable `needsTranslation` est utilisée pour indiquer si le contenu doit ou non être traduit dans une autre langue. Lorsque cette option est définie sur `true`, une note est ajoutée à la page pour indiquer au lecteur que le contenu n'est disponible que dans une seule langue. Lorsque cette option est définie, le lien de basculement de langue est également supprimé de la page

#### Comment déclencher needsTranslation

Pour déclencher la variable `needsTranslation` dans le front matter, vous devez définir sa valeur sur `true`, si le contenu doit être traduit. Voici un exemple d'avant-propos qui définit la variable `needsTranslation` sur `true`:

    ```yaml
    ---
    needsTranslation:true
    ---
    ```

#### Que se passe-t-il lorsque needsTranslation n'est pas inclus

Si vous n'incluez pas la variable `needsTranslation` dans le front matter de votre fichier Markdown, le message "needsTranslation" ne sera pas inclus dans le message d'alerte par défaut. C'est parce que la variable `needsTranslation` est utilisée pour contrôler si le message "needsTranslation" est inclus ou non, et s'il n'est pas spécifié dans l'avant-propos, il sera par défaut à `false`.

### archived

#### Quelle est la fonction de archived

La variable `archived` est utilisée pour indiquer qu'une page n'est plus maintenue et doit être considérée comme du contenu archivé. Lorsque cette variable est définie à `true`, les changements suivants s’appliquent :

- Une bannière d’archivage fermable est automatiquement ajoutée en haut de la page.
- La page est retirée des collections, telles que `collections.pages`, ce qui empêche son affichage dans les menus ou les listes de pages.
- « Archivé : » est ajouté au `<title>` et au `<h1>` de la page pour indiquer clairement son statut.
- L’`url` reste inchangée, de sorte que les liens existants vers la page continuent de fonctionner.

La bannière comprend également un rappel pour que les utilisateurs suppriment leurs favoris ou liens vers la page, et consultent la page d’accueil pour toute mise à jour future.

#### Comment déclencher archive

Pour déclencher la variable `archived` dans les métadonnées (front matter), vous devez définir sa valeur à `true`. Voici un exemple :

    ```yaml
    ---
    archived: true
    ---
    ```

#### Que se passe-t-il lorsque archive n’est pas inclus

Si la variable `archived` n’est pas incluse dans les métadonnées, la page sera considérée comme active. Elle n’affichera pas l’avertissement d’archivage, restera présente dans les collections, et son titre ainsi que son en-tête ne seront pas modifiés.

### internalLinks

#### Quelle est la fonction de internalLinks

Cela doit être défini sur vrai sur toutes les pages qui ont des liens pointant vers du contenu accessible uniquement à partir de derrière le pare-feu du gouvernement du Canada.

#### Comment déclencher internalLinks

Pour déclencher la variable `internalLinks` dans le front matter, vous devez définir sa valeur sur `true`, si le site Web contient des liens internes qui ne peuvent être consultés que par le gouvernement du canada. Voici un exemple d'avant-propos qui définit la variable `internalLinks` sur `true`:

    ```yaml
    ---
    internalLinks:true
    ---
    ```

#### Que se passe-t-il lorsque internalLinks n'est pas inclus

Si vous n'incluez pas la variable `internalLinks` dans l'avant-propos de votre fichier Markdown, le message "internalLinks" ne sera pas inclus dans le message d'alerte par défaut. C'est parce que la variable `internalLinks` est utilisée pour contrôler si le message "internalLinks" est inclus ou non, et s'il n'est pas spécifié dans l'avant-propos, il sera par défaut à `false`.

## Sur cette page / Table des matières (TOC)

Nous avons mis en place une génération automatique d'une section "Sur cette page" pour les pages qui ont `toc: true` ou `tocSimple: true` définies dans leur front matter.

### TOC complet (`toc: true`)

Si `toc: true` est défini dans le front matter, la table des matières inclura les titres aux niveaux 2 et 3. Cela est utile pour fournir un aperçu détaillé du contenu de la page.

Pour activer le TOC complet sur une page spécifique, ajoutez ce qui suit dans le front matter du fichier Markdown :

    ```yaml
    ---
    toc: true
    ---
    ```

### TOC simple (`tocSimple: true`)

Si `tocSimple: true` est défini dans le front matter, la table des matières n'inclura que les titres de niveau 2. Cela est utile pour un aperçu plus concis sans lister les sous-titres.

Pour activer le TOC simple sur une page spécifique, ajoutez ce qui suit dans le front matter du fichier Markdown :

    ```yaml
    ---
    tocSimple: true
    ---
    ```

Cette configuration générera automatiquement une section "Sur cette page" au début du contenu, listant les titres spécifiés en fonction du paramètre `toc` ou `tocSimple`.

## Composant de téléchargement

La clé `hasDocument` dans le front matter vous permet d'ajouter un composant de document téléchargeable sur votre page. Ce composant fournit des informations sur le fichier, y compris sa taille, son type et son nom.

La logique de ce composant se trouve dans le fichier suivant : `src/_includes/partials/download.njk`.

Pour activer le composant de téléchargement sur une page, incluez l'objet `hasDocument` dans le frontmatter avec les clés suivantes :

- `filename` : Le nom du fichier à télécharger, y compris l'extension. Exemple : `"example_document.docx"`. Les documents doivent être placés dans `src/_docs/`.
- `sizeNumber` : La taille du fichier en tant que nombre. Exemple : `563`.
- `sizeUnit` : L'unité de la taille du fichier. Les valeurs acceptables ne tiennent pas compte de la casse :
  - Pour l'anglais : `KB`, `MB`
  - Pour le français : `ko`, `Mo`
- `type` : (Optionnel) Le type de document, tel que `word`, `powerpoint` ou `pdf`. Si ce n'est pas spécifié, il sera défini par défaut sur le type de fichier générique.

**Exemple de front matter :**

```yaml
hasDocument:
  filename: "example_document.docx"
  sizeNumber: 563
  sizeUnit: KB
  type: word
```

La taille et l'unité du fichier s'adapteront automatiquement à la langue actuelle (`locale`) définie pour la page.

## Basculement de langue (toggle)

La propriété `toggle` dans le front matter est utilisée pour créer des liens de basculement de langue entre les versions anglaise et française des pages. Ce système permet aux utilisateurs de naviguer facilement entre les versions linguistiques du même contenu.

### Comment fonctionne la propriété toggle

La propriété `toggle` doit contenir le **titre exact** de la page correspondante dans l'autre langue. Le système convertit automatiquement ce titre en un slug d'URL approprié en utilisant le filtre `stripTagsSlugify`.

#### Exemple d'utilisation

**Page anglaise (`src/pages/en/about-us.md`) :**

```yaml
---
title: "About Us"
toggle: "À propos de nous"
---
```

**Page française (`src/pages/fr/a-propos-de-nous.md`) :**

```yaml
---
title: "À propos de nous"
toggle: "About Us"
---
```

### Processus de génération d'URL

Le système de basculement de langue génère automatiquement des URL basées sur le type de page et le contenu :

1. **Pages régulières** : Utilise le titre de basculement converti en slug
   - Basculement anglais : "À propos de nous" → `/fr/a-propos-de-nous/`
   - Basculement français : "About Us" → `/en/about-us/`

2. **Pages d'accueil** : Traitement spécial pour les pages étiquetées avec `home`
   - Basculement page d'accueil anglaise → `/fr/`
   - Basculement page d'accueil française → `/en/`

### Implémentation technique

Le basculement de langue est géré dans `src/_includes/partials/lang.njk` :

```njk
{% if needsTranslation != true and toggle %}
{% set otherLangSlug = toggle | stripTagsSlugify %}
{# Traitement spécial pour les pages d'accueil #}
{% if tags and 'home' in tags %}
    {% set toggleUrl = pathPrefix + "/" + otherLang + "/" %}
{% else %}
    {% set toggleUrl = pathPrefix + "/" + otherLang + "/" + otherLangSlug + "/" %}
{% endif %}
<!-- Lien de basculement de langue généré ici -->
{% endif %}
```

### Fonctionnalités clés

- **Génération automatique de slug** : Le filtre `stripTagsSlugify` convertit automatiquement les titres de page en slugs sécurisés pour les URL
- **Gestion des accents** : Convertit les caractères accentués (é→e, à→a, ç→c, etc.)
- **Conversion de casse** : Convertit en minuscules
- **Remplacement d'espaces** : Remplace les espaces par des tirets
- **Suppression de caractères spéciaux** : Supprime la ponctuation et les caractères spéciaux

### Meilleures pratiques

1. **Utiliser des titres exacts** : Toujours utiliser le titre exact de la page cible tel qu'il apparaît dans le front matter de cette page
2. **Maintenir la cohérence des titres** : S'assurer que les deux versions linguistiques se référencent correctement
3. **Étiquetage des pages d'accueil** : Inclure `home` dans le tableau des étiquettes pour les pages d'accueil afin d'assurer une génération d'URL appropriée
4. **Compatibilité avec le préfixe de chemin** : Le système fonctionne avec le déploiement du site principal et les forks GitHub Pages

### Cas particuliers

#### Pages d'accueil

Les pages étiquetées avec `home` reçoivent un traitement spécial :

- Les URL de basculement vont directement à la racine de la langue (`/fr/` ou `/en/`)
- Empêche les doubles codes de langue dans les URL

#### Pages sans traduction

Utiliser `needsTranslation: true` pour :

- Masquer le lien de basculement de langue
- Afficher un avis indiquant que le contenu n'est disponible que dans une seule langue

### Exemples

**Page de contenu régulière :**

```yaml
---
title: "Créer des documents accessibles"
toggle: "Creating Accessible Documents"
tags: [documents, accessibility]
---
```

_URL de basculement générée : `/en/creating-accessible-documents/`_

**Page d'accueil :**

```yaml
---
title: "Boîte à outils d'accessibilité numérique"
toggle: "Digital Accessibility Toolkit"
tags: [home]
---
```

_URL de basculement générée : `/en/`_

**Page en une seule langue :**

```yaml
---
title: "Contenu temporaire"
needsTranslation: true
---
```

_Aucun lien de basculement affiché, affiche plutôt un avis de traduction_

</div>
