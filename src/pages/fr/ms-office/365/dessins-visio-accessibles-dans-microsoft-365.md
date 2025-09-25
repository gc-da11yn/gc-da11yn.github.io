---
title: Dessins Visio accessibles dans Microsoft 365
description: Pratiques accessibles pour la création de diagrammes Microsoft Visio.
toggle: Accessible Visio drawings in Microsoft 365
fontIcon: fa-project-diagram
---

## Introduction

Le programme Microsoft Visio sert à créer des diagrammes, comme des organigrammes. Les problèmes d’accessibilité pour de tels diagrammes sont répartis en deux catégories&nbsp;: les problèmes qui concernent les utilisateurs voyants ayant une déficience visuelle (qui utilisent le diagramme de manière visuelle) et les problèmes qui concernent les utilisateurs aveugles (qui comptent sur les textes de remplacement). Suivre les recommandations d’accessibilité dans chacune de ces catégories aide également tous les utilisateurs.

## Accessibilité visuelle et générale

Bon nombre des directives générales relatives à l’accessibilité des documents et des infographies s’appliquent également aux documents Visio. Veuillez consulter les directives générales sur les documents et sur les infographies pour plus d’informations.

### Contraste du texte

Le contraste du texte doit être d’au moins 4,5:1 par rapport à l’arrière-plan. Comme les diagrammes sont souvent visualisés avec un zoom très faible, nous vous recommandons de maintenir, au minimum, ce niveau de contraste pour tous les textes, quelle qu’en soit la taille.

- Pour vérifier le contraste des couleurs, utilisez un outil comme l’<a href="https://developer.paciellogroup.com/resources/contrastanalyser/">Analyseur de contraste des couleurs<small> (en anglais seulement)</small></a> ou le <a href="https://webaim.org/resources/contrastchecker/">vérificateur de contraste de WebAIM<small> (en anglais seulement)</small></a>.
- Évitez de placer des images d’arrière-plan complexes derrière le texte.
- Lorsqu’il est nécessaire d’utiliser des images d’arrière-plan complexes ou des fonds à faible contraste, définissez un contour autour du texte offrant un contraste suffisant par rapport à la couleur du texte en premier plan.

### Utilisation de la couleur seule pour transmettre de l’information

Veillez à ce que la couleur ne soit pas le seul moyen utilisé pour transmettre de l’information. Comme le codage par couleur est une stratégie souvent utilisée en infographie, il s’agit d’un problème d’accessibilité fréquent. Toute l’information transmise par couleur doit également être offerte par le biais d’autres méthodes d’identification (de façon visuelle et textuelle), comme des étiquettes, des symboles ou l’ajout d’un motif unique à la zone colorée.

### Contraste sans texte

Selon WCAG&nbsp;2.1, tous les éléments graphiques importants doivent avoir un rapport de contraste de 3:1 par rapport à l’arrière-plan. Lorsque la couleur ou l’ombrage est utilisé pour identifier des zones du graphique, par exemple pour délimiter une boîte intérieure d’une boîte extérieure, les deux couleurs doivent avoir un rapport de contraste de 3:1 (car l’une d’entre elles constitue désormais «&#8201;l’arrière-plan&#8201;»).

Consultez la page <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html#graphical-objects">Comprendre le contraste sans texte<small> (en anglais seulement)</small></a> pour des exemples d’objets graphiques (icônes), de graphiques et d’infographies, et comment ils réussissent, échouent ou peuvent satisfaire à ce critère.

### Abréviations

Comme les diagrammes sont souvent remplis d’abréviations, la définition de ces abréviations favorise la compréhension de tous les utilisateurs. Consultez les directives sur les <a href="https://www.w3.org/WAI/WCAG21/Understanding/abbreviations">abréviations<small> (en anglais seulement)</small></a> de WCAG.

Si possible, selon la disposition, insérez les abréviations la première fois qu’elles apparaissent. P. ex. Programme d’accessibilité, d’adaptation et de technologie informatique adaptée (AATIA)

Étant donné que les diagrammes sont souvent visualisés dans un ordre non linéaire, il est généralement préférable de <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G62">fournir un glossaire<small> (en anglais seulement)</small></a>. Le glossaire doit faire partie du texte du document, sous un en-tête comme « Glossaire des abréviations », de manière à pouvoir le retrouver facilement.

### Texte intégré à des images

À moins que ce ne soit essentiel, <a href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html">n’intégrez pas de texte à des images<small> (en anglais seulement)</small></a>.

## Solutions de remplacement en format texte

Les diagrammes Visio, de par leur nature, transmettent l’information de façon visuelle. Bien que Visio comporte certaines fonctions pour aider les utilisateurs aveugles à naviguer à l’intérieur de documents (consultez la section « Caractéristiques d’accessibilité de Visio » ci-dessous), une solution de remplacement en format texte qui ne dépend pas de l’organisation visuelle est essentielle lors de l’exportation du document Visio au format PDF, en image ou lorsque vous intégrez le diagramme à un autre document ou à une page Web.

### Aperçu du texte (de remplacement) court

Un court texte (65 caractères ou moins) doit répondre à la question «&#8201;quelle est l’information transmise par le diagramme?&#8201;» Le texte court peut servir de titre évocateur au diagramme.

### Description textuelle longue

Selon le diagramme, il peut être difficile de fournir une description linéaire textuelle et complète. Imaginez que vous décriviez le diagramme à une personne par téléphone.

La description textuelle longue est utile pour tous les utilisateurs. Rendez-la visible sur la page Web ou le document PDF pour que tout le monde puisse la lire. Consultez la section <a href="https://www.w3.org/WAI/tutorials/images/complex/">Images complexes<small> (en anglais seulement)</small></a> pour des recommandations.

#### Exemples

Dans le cas d’une carte routière avec itinéraires, la description longue décrit chaque étape permettant de suivre les itinéraires.

<img src="{{ pathPrefix }}/img/fr/office365/visio-365-001.jpg" alt="Organigramme illustrant le processus de connexion">

Pour transmettre adéquatement à tous les utilisateurs le message d’un organigramme, la description longue utilise des éléments numériques.

**Organigramme illustrant le processus de connexion&nbsp;:**

- 1.0 Inscrivez le nom d’utilisateur
  - 1.1 Passez à l’étape 2.0
- 2.0 Le nom d’utilisateur est-il vide?
  - 2.1 Si oui, retournez à l’étape 1.0
  - 2.2 Sinon, passez à l’étape 3.0
- 3.0 Terminez la connexion

Pour un diagramme avec composants, la description longue commence par un résumé des composants principaux du diagramme (entre 3 et 10) et de la manière dont ils sont liés. Par la suite, placez les détails, comme le texte complet des composants, sous les en-têtes de chaque composant. Utilisez les divers niveaux de titres pour organiser les sous-composants. Les utilisateurs peuvent ainsi rechercher les composants qui les intéressent tant que le texte est compris dans la page.

### Représentation hypertexte

À l’aide du format HTML, il est possible d’offrir une description textuelle complète décrivant toutes les relations avec des hyperliens. Pour améliorer la convivialité, prolongez la description longue (décrite ci-dessus pour l’organigramme et le diagramme de composants) avec des liens intégrés à la page, vers des composants connexes. De cette façon, les utilisateurs de lecteurs d’écran ont la possibilité de «&#8201;suivre les flèches&#8201;» plus rapidement.

Exemple d’organigramme de flux de données complexe&nbsp;:

#### Composant D (en-tête)

#### Sources de données&nbsp;:

- [Composant A](#) (liens vers numéro d’en-tête du composant A)
- [Composant B](#) (liens vers numéro d’en-tête du composant B)

#### Flux de données vers&nbsp;:

- [Composant C](#) (liens vers numéro d’en-tête du composant C) à [Connecteur 1](#) (liens vers numéro d’en-tête du connecteur 1)

Ajoutez d’autres informations pertinentes sur le composant D.

## Caractéristiques d’accessibilité de Visio

Microsoft a récemment publié un guide sur [Rendre les diagrammes Visio accessibles](https://support.microsoft.com/fr-fr/office/rendre-votre-diagramme-visio-accessible-aux-personnes-atteintes-de-handicaps-e2c847a9-f010-4fef-af65-16e252829d44).

Il est important de comprendre [la façon dont un utilisateur de lecteur d’écran lit un diagramme Visio](https://support.microsoft.com/fr-fr/office/rendre-votre-diagramme-visio-accessible-aux-personnes-atteintes-de-handicaps-e2c847a9-f010-4fef-af65-16e252829d44)

- Ils utilisent la touche de tabulation pour passer d’une forme à l’autre dans un ordre prédéfini.
- Les formes sont décrites selon leur texte de remplacement (« alt text »), leur position et leur mise en forme.
- Les points de départ et d’arrivée des connecteurs sont énoncés.

Voici donc les deux principales caractéristiques d’accessibilité des documents Visio&nbsp;: l’ordre de lecture et le texte de remplacement.

### Ordre de lecture

En règle générale, les objets sont lus dans l’ordre dans lequel ils ont été ajoutés au document. Créez donc les objets dans l’ordre dans lequel vous voulez qu’ils soient lus.

Vous pouvez également consulter et modifier l’ordre de lecture. Sélectionnez **Affichage** &gt; **Volets des tâches** &gt; **Navigation** et ensuite glissez et déposez les formes pour reproduire un ordre de lecture logique.

Créez des connecteurs (flèches, etc.) dans l’ordre que vous voulez qu’ils soient lus. Commencez à dessiner à partir du point de départ (c.-à-d. le parent dans un organigramme de flux unidirectionnel); ne dessinez pas de flèche dans un sens pour ensuite l’orienter dans le sens contraire.

### Texte de remplacement («&nbsp;alt text&nbsp;»)

Visio offre la possibilité d’ajouter du texte de remplacement à des images, des formes et des pages entières. En règle générale, un texte de remplacement court est suffisant pour une image ou une forme. Une description plus longue convient à une page. Consultez les directives générales relatives à l’accessibilité et la page [Rendre les diagrammes Visio accessibles](https://support.microsoft.com/fr-fr/office/rendre-votre-diagramme-visio-accessible-aux-personnes-atteintes-de-handicaps-e2c847a9-f010-4fef-af65-16e252829d44).

Pour ajouter un texte de remplacement à une image ou une forme&nbsp;:

- Ouvrez le menu contextuel de l’image ou de la forme en cliquant à droite ou en appuyant sur la touche de l’application.
- Sélectionnez **Format de la forme**.
- Sélectionnez ![]({{ pathPrefix }}/img/en/office365/visio-365-002.gif) (**Taille et propriétés**) et saisissez le texte de remplacement dans la boîte **Description**.

Pour ajouter un texte de remplacement à une page complète, appuyez sur **Maj +&nbsp;F5**. Sélectionnez l’onglet **Texte de remplacement** et inscrivez la **Description**.

### Vérificateur d’accessibilité

Comme la plupart des produits Office, Visio dispose désormais d’un vérificateur d’accessibilité intégré.

À partir de la barre d’outils du ruban, rendez-vous à **Révision** &gt; **Vérifier l’accessibilité**. Sélectionnez chaque élément pour consulter les détails et corrigez les problèmes un à la fois.

## Ressources supplémentaires

- <a href="https://www.nvaccess.org">NVDA : Un lecteur d’écran gratuit (pratique pour la mise à l’essai)<small> (en anglais seulement)</small></a>
- [Règles pour l’accessibilité des contenus Web 2.1](https://www.w3.org/Translations/WCAG21-fr/)
