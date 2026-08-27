---
title: Vérifications faciles pour l'accessibilité du Web
description: Vérifications rapides de l'accessibilité couvrant la structure de la page, la navigation au clavier, les images, le multimédia et les formulaires.
toggle: Easy Checks for Web Accessibility
subject:
  - howTos
tags:
  - testYourProducts
toc: true
---

## Généralités

### Titre de page descriptif

<div class="row">

<div class="col-md-7">

#### Vérification

La page comporte un titre qui décrit son contenu et son objectif.

#### Comment vérifier

Faites un clic droit sur la page et vérifiez le code HTML pour voir la valeur dans l'élément `<title>` dans la balise `<head>`.

#### Résultat attendu

L'élément `<title>` contient un texte qui décrit fidèlement le contenu et l'objectif de la page.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple de titre de page descriptif visible dans l'onglet du navigateur et dans le code source HTML.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/tag-in-title-fr.png" alt="Exemple de la balise de titre de la page correspondant au texte affiché dans l'onglet du navigateur.">

<figcaption>

La fenêtre d'inspection des éléments met en évidence la balise de titre, qui fait référence au titre affiché en haut de la page Web. Une flèche relie la balise HTML au titre correspondant sur la page Web.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### HTML sémantique

#### Vérification

Le HTML sémantique est utilisé pour mettre des balises sur la structure de la page et représenter l'information plutôt que de s'appuyer sur des feuilles de style CSS personnalisées.

#### Comment vérifier

Vérifier le code pour s'assurer que les bons éléments HTML sont utilisés pour structurer le contenu en fonction de la signification de chaque élément plutôt que de son apparence. Par exemple, les titres devraient utiliser du HTML sémantique comme `<h1>` plutôt que d'utiliser du CSS pour styliser le texte de manière à ce qu'il ressemble à un titre H1. Les listes devraient utiliser des codes HTML sémantiques tels que `<ul>` et `<ol>` plutôt que d'utiliser des puces pour styliser le texte et lui donner l'apparence d'une liste.

#### Résultat attendu

La structure du contenu est transmise par des éléments HTML sémantiques appropriés plutôt que par la mise en forme visuelle seule.

### Structure des titres

<div class="row">

<div class="col-md-7">

#### Vérification

La page comporte des titres précis et pertinents, structurés à l'aide des balises de titre `<h1>` à `<h6>`, sans sauter de niveaux hiérarchiques.

#### Comment vérifier

Utilisez un vérificateur d'accessibilité automatisé tel que [Accessibility Insights for Web (anglais seulement)](https://accessibilityinsights.io/downloads/) ou [axe DevTools (anglais seulement)](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) pour identifier les problèmes de hiérarchie et de structure des titres. Pour plus d'informations, veuillez consulter [Quick Assess in Accessibility Insights for Web (anglais seulement)](https://accessibilityinsights.io/docs/web/getstarted/quickassess/).

#### Résultat attendu

Les niveaux de titre sont séquentiels (aucun niveau n'est sauté) et chaque titre décrit fidèlement le contenu de sa section.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre une bonne hiérarchie de titres bien organisée.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/heading-structure-fr.jpg" alt="Bon exemple d'une structure bien organisée de titres.">

<figcaption>

Une hiérarchie de titres bien structurée utilisant les balises `<h1>`, `<h2>` et `<h3>`, représentée sous forme d'arborescence.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Redimensionnement du texte

<div class="row">

<div class="col-md-7">

#### Vérification

La page demeure fonctionnelle et lisible lorsque le texte est agrandi à 200 % de sa taille initiale.

#### Comment vérifier

Faire un zoom sur la page à 200 % sur une fenêtre de 1280 px par 1024 px. Examiner la page pour détecter toute perte de contenu ou de fonctionnalité.

#### Résultat attendu

Aucun contenu ou fonctionnalité n'est perdu, et aucun texte n'est coupé, tronqué ou masqué.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un mauvais exemple où le texte est tronqué après le zoom.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/responsive-design-en.jpg" alt="Un exemple de problème de redimensionnement de texte.">

<figcaption>

Le texte du libellé ne rentre pas dans le champ de saisie de recherche, provoquant une troncature du texte.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Redistribution du contenu

<div class="row">

<div class="col-md-7">

#### Vérification

La refonte du contenu de la page n'entraîne pas de perte de contenu ou de fonctionnalité et ne nécessite pas de défilement horizontal lorsque la largeur de la fenêtre de visualisation est fixée à 320px.

#### Comment vérifier

Utilisez un simulateur de dispositif mobile, comme la [barre d'outils de l'appareil dans Chrome Dev Tools](https://developer.chrome.com/docs/devtools/device-mode?hl=fr), pour vérifier. Ouvrir les outils de développement dans votre navigateur. Utiliser le mode de conception réactive et régler la largeur de la fenêtre de visualisation à 320 px en réduisant la fenêtre du navigateur ou en effectuant un zoom avant. Pour ce faire, à partir d'une fenêtre de 1280 px et d'un zoom de 100 %, effectuez un zoom avant de 400 %.

#### Résultat attendu

Le contenu doit être présenté de manière à éviter toute perte d'information ou de fonctionnalité. Aucun défilement horizontal n'est nécessaire et aucun texte n'est coupé ou masqué.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un mauvais exemple où des barres de défilement horizontales apparaissent après le zoom.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/reflow-design.png" alt="Un exemple de contenu avec des bordures agrandies et des barres de défilement.">

<figcaption>

Texte agrandi avec des barres de défilement mises en évidence. Des flèches pointent vers la barre de défilement horizontale et les bordures du contenu agrandi pour montrer la relation entre ces éléments.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Langue de la page

<div class="row">

<div class="col-md-7">

#### Vérification

La langue principale de la page est définie à l'aide de l'attribut `lang` sur l'élément `<html>` avec un code de langue valide (par exemple `<html lang="en">` ou `<html lang="fr">`).

#### Comment vérifier

Inspecter le code source HTML et vérifier que l'élément `<html>` possède un attribut `lang` avec un code de langue valide correspondant à la langue principale du contenu de la page.

#### Résultat attendu

L'élément `<html>` possède un attribut `lang` dont la valeur identifie correctement la langue principale de la page.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple de l'attribut lang sur l'élément html.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/lang-attribute-page.png" alt="Exemple d'un attribut de langue.">

<figcaption>

L'attribut de langue `lang` est mis en évidence dans la fenêtre d'inspection des éléments, montrant qu'il s'agit d'une page en anglais avec l'attribut de langue « en » appliqué.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Contraste des couleurs

<div class="row">

<div class="col-md-7">

#### Vérification

Tous les éléments textuels et non textuels présentent un contraste suffisant entre les couleurs d'avant-plan et d'arrière-plan.

#### Comment vérifier

Utiliser l'outil d'analyse du contraste des couleurs ou un [vérificateur de contraste en ligne (anglais seulement)](https://webaim.org/resources/contrastchecker/) pour mesurer le rapport de contraste entre les couleurs d'avant-plan et d'arrière-plan.

#### Exigences

- Le texte et les images de texte doivent présenter un rapport de contraste d'au moins 4,5:1 par rapport à l'arrière-plan.
- Les éléments non textuels doivent présenter un rapport de contraste minimal de 3:1 avec les couleurs adjacentes.

#### Résultat attendu

Tous les rapports de contraste mesurés respectent ou dépassent les exigences minimales indiquées ci-dessus.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un mauvais exemple où une combinaison de couleurs ne respecte pas le ratio de contraste requis.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/contrast-checker-fr.jpg" alt="Un exemple d'interface d'outil de vérification de contraste.">

<figcaption>

Une page où un bouton avec un fond rose et un texte blanc est mis en évidence. La combinaison de couleurs rose et blanc est testée à l'aide d'un outil d'analyse de contraste des couleurs, avec des alertes informant l'utilisateur que cette combinaison ne respecte pas le ratio de contraste requis.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Langue des parties

<div class="row">

<div class="col-md-7">

#### Vérification

Les changements de langue sont balisés avec des valeurs d'attribut `lang` valides (par exemple `lang="en"` ou `lang="fr"`).

#### Comment vérifier

Repérer des passages ou des phrases rédigés dans une langue différente de la langue principale de la page. Ensuite, vérifier le code pour vous assurer que tout changement de langue est marqué à l'aide de l'attribut `lang`.

#### Résultat attendu

Chaque passage ou phrase rédigé dans une langue différente de la langue principale de la page est encadré par un élément possédant un attribut `lang` identifiant cette langue.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple d'un attribut lang appliqué à du texte dans une autre langue.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/lang-attribute.png" alt="Un exemple de l'inspecteur d'éléments affichant l'attribut HTML lang.">

<figcaption>

Une vue de l'inspecteur d'éléments montrant un attribut `lang` appliqué à une balise spécifique, différenciant la langue principale de celle de la page Web. L'attribut `lang` est mis en évidence en rouge, avec une flèche pointant vers le texte correspondant associé à cette balise sur la page Web.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Objectif des liens

<div class="row">

<div class="col-md-7">

#### Vérification

L'objectif de chaque lien peut être compris à partir de leur seul texte.

#### Comment vérifier

Vérifier si le texte du lien, pris seul, indique clairement sa destination ou sa fonction.

#### Résultat attendu

Le texte de chaque lien communique clairement ce que l'utilisateur peut s'attendre à trouver ou l'action qui se produira lorsque le lien est activé.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon et un mauvais exemple de texte de lien.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/link-purpose-fr.jpg" alt="Exemples de liens accessibles et inaccessibles.">

<figcaption>

Deux exemples de textes hyperliens, avec un exemple accessible (« En Savoir plus sur Calcul d'impôt ») et un autre exemple inaccessible (« En savoir plus »). La balise de lien de chaque texte est mise en évidence dans la fenêtre d'inspection des éléments.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

## Clavier

### Ordre du focus

<div class="row">

<div class="col-md-7">

#### Vérification

L'ordre de navigation des éléments pouvant faire l'objet d'un focus (liens, éléments de formulaire, boîtes de dialogue modales, etc.) est logique et intuitif, préservant la signification et l'exploitabilité du contenu.

#### Comment vérifier

Naviguer dans la page en utilisant la touche Tab ou Shift + Tab. Observer si l'ordre du focus suit l'ordre de lecture visuel et la séquence logique du contenu.

#### Résultat attendu

L'ordre des tabulations correspond à l'ordre de lecture de la page et ne saute pas de manière inattendue entre des sections non liées.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un ordre de tabulation accessible (logique) et un ordre inaccessible (désorganisé).

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/tab-order-fr.jpg" alt="Un exemple illustrant des ordres de tabulation accessibles et inaccessibles sur une page Web.">

<figcaption>

Instructions sur la structuration de l'ordre de tabulation d'une page Web. Deux exemples sont présentés : l'un montre une séquence de tabulation accessible et logique, tandis que l'autre présente une séquence inaccessible et désorganisée.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Visibilité du focus

<div class="row">

<div class="col-md-7">

#### Vérification

Tous les éléments pouvant faire l'objet d'un focus affichent un indicateur visuel lorsqu'ils sont mis en évidence et ne disparaissent pas lors de la tabulation.

#### Comment vérifier

Naviguer dans la page en utilisant la touche Tab ou Shift + Tab. Observer chaque élément pouvant faire l'objet d'un focus lorsqu'il reçoit le focus.

#### Résultat attendu

Chaque élément pouvant faire l'objet d'un focus affiche un indicateur clair et visible lorsqu'il a le focus.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple (focus visible) et un mauvais exemple (focus non visible).

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/focus-indicator-fr.jpg" alt="Exemples de visibilité du focus sur des boutons.">

<figcaption>

Deux exemples de boutons démontrant un principe d'accessibilité. Le premier exemple montre un bouton dont le focus est visible lorsqu'il est ciblé, le rendant accessible. Le deuxième exemple montre un bouton dont le focus n'est pas visible, ce qui le rend inaccessible.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Contournement de blocs

<div class="row">

<div class="col-md-7">

#### Vérification

La page dispose d'une méthode accessible au clavier pour contourner le contenu répétitif (comme les menus de navigation).

#### Comment vérifier

À l'aide du clavier uniquement, appuyer sur Tab à partir du haut de la page et vérifier s'il existe un mécanisme (comme un lien « Passer au contenu principal ») permettant de sauter des blocs d'informations répétées.

#### Résultat attendu

Un mécanisme accessible au clavier est disponible, permettant à l'utilisateur de contourner les blocs de contenu répétitif et de naviguer directement vers la zone de contenu principal.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

Une implémentation courante est un lien « Passer au contenu principal » comme premier élément interactif de la page. Lorsqu'il est activé, le lien déplace le focus vers le début du contenu principal.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/skip-to-main-content-fr.jpg" alt="Exemple d'un lien « Passer au contenu principal ».">

<figcaption>

Une balise de lien est mise en évidence dans la fenêtre d'inspection des éléments, montrant le lien « Passer au contenu principal » qui permet aux utilisateurs de passer directement au contenu principal d'une page Web. Une flèche pointe vers le haut de la page Web, indiquant l'emplacement de ce lien.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Opérabilité au clavier

<div class="row">

<div class="col-md-7">

#### Vérification

Un accès et un contrôle au clavier sont possibles pour tous les composants interactifs qui peuvent être accédés et contrôlés à l'aide de la souris.

#### Comment vérifier

Tenter d'accéder et d'utiliser chaque élément interactif de la page (liens, champs de formulaire, boutons, commandes des lecteurs multimédias, menus, boîtes de dialogue) en utilisant uniquement le clavier.

#### Résultat attendu

Chaque élément interactif utilisable avec la souris est également utilisable uniquement à l'aide du clavier.

#### Remarques

Modèles d'interaction clavier standard :

- Utilisez la touche `Tab` pour naviguer de manière linéaire à travers les éléments interactifs tels que les liens, les contrôles de formulaire et les boutons.
- Utilisez `Shift + Tab` pour revenir en arrière.
- Utilisez la touche `Entrée` (et parfois `Espace`) pour sélectionner un élément.
- Utilisez les flèches pour vous déplacer à l'intérieur de certains éléments, groupes d'éléments et widgets, tels que les champs de sélection de formulaire, les groupes de boutons radio et les ensembles d'onglets.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple de navigation au clavier à travers une interface utilisateur.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/tab-order-website-fr.jpg" alt="Exemple de navigation par tabulation sur une interface, montrant l'ordre de tabulation.">

<figcaption>

L'ordre de tabulation montre des champs qui peuvent être sélectionnés au moyen de nombres. Des flèches montrent l'ordre dans lequel un utilisateur passera d'un champ à un autre.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

## Images et multimédia

### Alternatives textuelles des images informatives

<div class="row">

<div class="col-md-7">

#### Vérification

Les images informatives ont une alternative textuelle qui sert un objectif équivalent.

#### Comment vérifier

Vérifier dans le code si l'image possède un attribut `alt`. Veiller à ce que sa valeur contienne un texte alternatif approprié qui décrit l'objectif de l'image d'une manière qui la remplace adéquatement.

#### Résultat attendu

Chaque image informative possède un attribut `alt` contenant un texte qui transmet la même information ou fonction que l'image.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple de texte alternatif pertinent sur une image informative.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/informative-image.png" alt="Un exemple de texte alternatif montrant le symbole du Gouvernement du Canada.">

<figcaption>

Dans la fenêtre d'inspection des éléments, une flèche pointe vers le texte alternatif d'une image, décrivant un symbole du Gouvernement du Canada. Cela démontre comment le texte alternatif fournit une description courte et significative de l'image pour l'accessibilité.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Images décoratives

<div class="row">

<div class="col-md-7">

#### Vérification

Les images décoratives sont codées de telle manière que les lecteurs d'écran peuvent les ignorer.

#### Comment vérifier

Vérifier dans le code si l'image possède un attribut `alt` et s'assurer que la valeur est vide (`alt=""`).

#### Résultat attendu

Chaque image décorative possède un attribut alt vide (`alt=""`).

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple d'images décoratives avec un texte alternatif vide dans le code source.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/decorative-image-fr.jpg" alt="Un exemple de code HTML pour les images décoratives.">

<figcaption>

La fenêtre d'inspection des éléments affiche le code HTML de trois images décoratives. Les parties du code montrant que le texte alternatif de chaque image est vide ont été mises en évidence en vert.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Sous-titres vidéo

<div class="row">

<div class="col-md-7">

#### Vérification

Le contenu multimédia préenregistré (les vidéos) est sous-titré.

#### Comment vérifier

Vérifier que des sous-titres sont disponibles pour les contenus vidéo et audio. Ils doivent être disponibles sous forme de sous-titres ouverts (des sous-titres qui s'affichent en permanence et qui ne peuvent pas être désactivés) ou de sous-titres fermés. Dans le second cas, rechercher un bouton de sous-titrage ou un moyen d'activer les sous-titres.

#### Résultat attendu

Des sous-titres sont disponibles pour le contenu vidéo.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple d'une vidéo affichant des sous-titres.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/captions-fr.jpg" alt="Un exemple d'une vidéo avec sous-titres.">

<figcaption>

Une capture d'écran d'une vidéo affichant des sous-titres correspondant au discours de l'hôte. L'image montre une capture du site « Guichet-Emplois Canada ».

</figcaption>
</figure>

</div>
</section>
</div>

</div>

## Formulaires

### Étiquettes de formulaire

<div class="row">

<div class="col-md-7">

#### Vérification

Tous les éléments du formulaire (champs de texte, cases à cocher, boutons radio, menus déroulants, etc.) ont des étiquettes descriptives et pertinentes.

#### Comment vérifier

Utiliser un vérificateur d'accessibilité automatisé comme [Accessibility Insights for Web - Fast Pass (anglais seulement)](https://accessibilityinsights.io/downloads) ou [axe DevTools (anglais seulement)](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) dans Chrome ou Firefox. Vous pouvez également inspecter manuellement chaque contrôle de formulaire pour vérifier qu'il possède une étiquette associée.

#### Résultat attendu

Chaque contrôle de formulaire possède une étiquette descriptive qui identifie clairement la saisie attendue.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple de formulaire avec des étiquettes descriptives pour chaque champ.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/form-labels-fr.jpg" alt="Un exemple d'étiquettes descriptives pour les éléments du formulaire (p. ex. champs de texte, cases à cocher, boutons radio, menus déroulants, etc.).">

<figcaption>

Une page de formulaire est affichée avec la fenêtre d'inspection des éléments à droite. Des flèches pointent vers chacun des champs d'étiquettes descriptives.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Instructions pour les champs obligatoires

<div class="row">

<div class="col-md-7">

#### Vérification

Des étiquettes ou des instructions sont fournies lorsque le contenu nécessite une intervention de l'utilisateur, y compris une indication claire des champs obligatoires.

#### Comment vérifier

Vérifier le code pour voir si des champs sont marqués comme obligatoires. Si le symbole de l'astérisque (*) est utilisé pour indiquer un champ obligatoire, vérifier qu'une explication de la signification du symbole est fournie avant les champs du formulaire.

#### Résultat attendu

Les champs obligatoires sont clairement identifiés et tout symbole utilisé pour indiquer le statut obligatoire est expliqué en haut du formulaire.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

L'exemple suivant montre un bon exemple de formulaire avec des instructions expliquant les champs obligatoires.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/required-field-instructions-fr.jpg" alt="Un exemple d'instructions pour les champs obligatoires.">

<figcaption>

Une légende de formulaire avec une étiquette indiquant que les champs sont requis.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Identification des erreurs

<div class="row">

<div class="col-md-7">

#### Vérification

Des messages d'erreur indiquent clairement où le problème s'est produit (par exemple, le nom du champ) et ce qui doit être corrigé.

#### Comment vérifier

Déclencher des erreurs de validation en soumettant le formulaire avec des données manquantes ou invalides. Vérifier que chaque message d'erreur identifie le champ en erreur et fournit des indications sur la manière de le corriger.

#### Résultat attendu

Chaque message d'erreur identifie le champ spécifique où le problème s'est produit et fournit des instructions claires sur la manière de le résoudre.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Exemple</h4>

</header>

<div class="panel-body">

La mention « Veuillez saisir votre nom » n'est pas aussi utile que la mention « Veuillez saisir votre prénom ».

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/validation-error-fr.jpg" alt="Un exemple de message d'erreur affiché dans un formulaire.">

<figcaption>

Une flèche pointe vers un message d'erreur indiquant qu'un champ ne peut pas être vide, en demandant à l'utilisateur d'entrer une valeur. Le texte d'erreur situé au-dessus du champ de saisie est surligné en rouge.

</figcaption>
</figure>

</div>
</section>
</div>

</div>
