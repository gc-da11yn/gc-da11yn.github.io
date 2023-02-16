<div lang="fr">

([Français](#Développement))

</div>

# Development

## Technology

The project is based on using the same technology as the [a11yproject](https://github.com/a11yproject/gc-da11yn.github.io).

Using [Eleventy](https://www.11ty.io), to build a simple static site which uses [nodeJS](https://nodejs.org/en/) to generate and deploying with [Github Actions](https://github.com/features/actions) to [Github Pages](https://pages.github.com) hosts the site.

Eleventy relies on [Markdown](https://daringfireball.net/projects/markdown/syntax), [Sass](https://sass-lang.com/), [Nunjucks](https://mozilla.github.io/nunjucks/), and [JSON](https://www.json.org/) to function.

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

2. After you created your fork from the Github web site. Clone your fork repository by entering this command into your command line application: Replace "$githubUsername" by your github username.

`git clone https://github.com/$githubUsername/gc-da11yn.github.io.git`

It will create a version controlled copy of the website in the directory you entered the command in.

3. Navigate into the project's [root directory](https://en.m.wikipedia.org/wiki/Root_directory) by typing the following change directory command in your command line application.

`cd gc-da11yn.github.io/`

4. Add a reference to the upstream.

`git remote add upstream https://github.com/gc-da11yn/gc-da11yn.github.io.git`

5. Fetch all the latest changes. It will make you local instance is aware of all the recent change made to upstream project, but nothing will be updated in your code.

`git fetch --all`

Ensure your local working copy include all the recent changesgit rebase upstream/main.

5a. Be attentive to rebase conflict, in such situation you can rollback by running

`git rebase --abort`

and then use a different strategy to update your working copy.

5b. You will see the following message if it went well

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

#### Creating a new folder and the files needed

To create a new folder for the site in both the `src/en` and `src/fr` directories along with the basic files needed for a page in these folders you can use `npm run new-folder`.

The script will need the name of the folder, the English title of the page, the French title of the page, the English description of the page, the French description of the page.

The script will create the json file for the breadcrumbs, an index.md, and the english and french folders.

#### Checking the spelling on the site

The `npm run spellcheck` command runs a spell checker on all the markdown and HTML files inside the `src` folder.

The script will then display possible spelling errors in the terminal.

#### Bulding the site for testing locally

The `npm run start` command is used to build the `_site` folder with all the files (HTML, CSS, JS and images) needed to host the site.

The script also runs a websever on your machine for you to view the site locally, usually set at _http://localhost:8081_ or the nearest unused port to **8081**, if it's in use.

## Updating the website

Saving project files will make Node.js regenerate the website to reflect the changes you made. Your command line application will display some new messaging to reflect this, including any errors you might accidentally make. Don't worry! Since the site uses version control, you're not in danger of seriously breaking anything. If you fix the error, Node.js should continue to run.

Make sure you edit the files in the `src/` subdirectory. Any edits made in the `_site` subdirectory will be overwritten by the next change to any file in `src/` and all your hard work will be lost!

## Quitting

You can tell Node.js to stop running by pressing the <kbd>Control</kbd> and <kbd>C</kbd> keys at the same time in your command line application, or by closing the command line application window or tab.
______________________
<div lang="fr">

# Développement

## Technologie

Le projet est basé sur l'utilisation de la même technologie que le projet [a11yproject](https://github.com/a11yproject/gc-da11yn.github.io).

En utilisant [Eleventy](https://www.11ty.io), pour construire un site statique simple qui utilise [nodeJS](https://nodejs.org/fr/) pour générer et déployer avec  [Github Actions](https://github.com/features/actions) aux [Github Pages](https://pages.github.com) hébergeant le site.

Eleventy s'appuie sur [Markdown](https://daringfireball.net/projects/markdown/syntax), [Sass](https://sass-lang.com/), [Nunjucks](https://mozilla.github.io/nunjucks/) et [JSON](https://www.json.org/) pour fonctionner.

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

2. Après avoir créé votre fork à partir du site web Github, clonez votre dépôt de fork en entrant cette commande dans votre application de ligne de commande : Remplacez "$githubUsername" par votre nom d'utilisateur Github.

`git clone https://github.com/$githubUsername/gc-da11yn.github.io.git`

 Cela créera une copie sous contrôle de version du site Web dans le répertoire dans lequel vous avez entré la commande.

 3. Naviguez dans le [répertoire racine](https://fr.wikipedia.org/wiki/R%C3%A9pertoire_racine) du projet en tapant la commande de changement de répertoire suivante dans votre application de ligne de commande.

 `cd gc-da11yn.github.io/`

 4. Ajoutez une référence à l'upstream.

 `git remote add upstream https://github.com/gc-da11yn/gc-da11yn.github.io.git`

 5. Récupérez toutes les dernières modifications. Cela fera en sorte que votre instance locale soit au courant de toutes       les modifications récentes apportées à l'upstream du projet, mais rien ne sera mis à jour dans votre code.

 `git fetch --all`

  Assurez vous que votre copie de travail locale inclut tous les changements récents git rebase upstream/main

  5a. Soyez attentif aux conflits de rebasement, dans une telle situation vous pouvez faire marche arrière en exécutant

  `git rebase --abort`

  et ensuite utiliser une stratégie différente pour mettre à jour votre copie de travail.

  5b. Si tout s'est bien passé, vous verrez le message suivant

  `Successfully rebased and updated refs/heads/main.`

 6. Installez les modules Node.js du projet en tapant `npm install` dans votre application de ligne de commande. Une liste      des modules devrait être affichée après leur téléchargement et leur installation.

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

#### Création d'un nouveau dossier et des fichiers requis


Pour créer un nouveau dossier pour le site dans les répertoires `src/en` et `src/fr` ainsi que les fichiers de base nécessaires pour une page dans ces dossiers, vous pouvez utiliser `npm run new-folder`.

Le script aura besoin du nom du dossier, du titre anglais de la page, du titre français de la page, de la description anglaise de la page, de la description française de la page.

Le script créera le fichier json pour les breadcrumbs, un index.md, et les dossiers anglais et français.

#### Vérification de l'orthographe sur le site

La commande `npm run spellcheck` lance un vérificateur d'orthographe sur tous les fichiers markdown et HTML du dossier `src`.

Le script affichera alors les éventuelles erreurs d'orthographe dans le terminal.

#### Construire le site pour le tester localement

La commande `npm run start` est utilisée pour construire le dossier `_site` avec tous les fichiers (HTML, CSS, JS et images) nécessaires pour héberger le site.

Le script exécute également un websever sur votre machine pour vous permettre de visualiser le site localement, généralement sur _http://localhost:8081_ ou sur le port inutilisé le plus proche de **8081**, s'il est utilisé.

## Mise à jour du site Web

En sauvegardant les fichiers du projet, Node.js régénérera le site Web pour refléter les changements que vous avez effectués. Votre application de ligne de commande affichera de nouveaux messages pour refléter cela, y compris toute erreur que vous pourriez accidentellement faire. Ne vous inquiétez pas ! Comme le site utilise la version de contrôle, vous ne risquez pas de casser sérieusement quoi que ce soit. Si vous corrigez l'erreur, Node.js devrait continuer à fonctionner.

Assurez-vous d'éditer les fichiers dans le sous-répertoire `src/`. Toute modification faite dans le sous-répertoire `_site` sera écrasée par la prochaine modification d'un fichier dans `src/` et tout votre travail sera perdu !

## Quitter

Vous pouvez demander à Node.js d'arrêter de s'exécuter en appuyant simultanément sur les touches <kbd>Control</kbd> et <kbd>C</kbd> dans votre application de ligne de commande, ou en fermant la fenêtre ou l'onglet de l'application de ligne de commande.
</div>
