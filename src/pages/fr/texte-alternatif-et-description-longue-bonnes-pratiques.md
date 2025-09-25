---
title: Texte alternatif et description longue - Bonnes pratiques
layout: layouts/base.njk
description: Un texte alternatif (ou texte alt) est un texte qui décrit et transmet la signification d'un élément visuel non textuel tel qu'une image, un organigramme, un graphique, etc. Ce document vous aidera à déterminer le type de texte alternatif nécessaire et vous donnera des conseils pour rédiger un texte alternatif et des descriptions longues pour des images simples et complexes, telles que des graphiques, des cartes, etc.
toggle: Alternative text and long description – Best practices
subject:
  - howTos
tags:
  - createWebContent
---

## Description

Le texte alternatif, également connu sous le nom de texte de remplacement ou de texte Alt, est un texte qui décrit et transmet la signification d'un élément visuel non textuel tel qu'une image, un organigramme, un graphique ou un tableau.

L'ajout d'un texte alternatif profite à de nombreux utilisateurs, tels que:

- Les personnes qui utilisent des lecteurs d'écran ou qui ont des difficultés à comprendre la signification d'un contenu visuel. Les lecteurs d'écran lisent le texte alternatif à l'utilisateur, ce qui lui permet de comprendre ce qui est affiché à l'écran et d'éviter de manquer des informations/contenus importants.
- Les personnes sourdes et aveugles peuvent lire le texte en braille.

## Déterminer le type de texte alternatif

Posez-vous les questions suivantes:

- Cette image contient-elle des informations importantes?
- Si l'image était supprimée, quelqu'un obtiendrait-il encore toutes les informations de la page?

Si l'image ne transmet pas d'information ou si l'information est disponible dans le document/la page, elle est décorative.

## Texte alternatif pour les images décoratives

Pour Word et PowerPoint, tapez « Décoratif » dans la zone de texte de remplacement. Ne cochez pas la case « Marquer comme décoratif », car certaines personnes peuvent utiliser une version plus ancienne de Word/PowerPoint et la case ne s'appliquera pas.

Le fait de marquer une image comme décorative varie selon les systèmes de gestion de l'apprentissage. Lors de la conception d'un produit web en HTML, le W3C recommande d'utiliser un texte alternatif nul (ou vide) qui est un guillemet ouvert et fermé (alt="").

## Un texte alternatif qui est significatif

- Le contexte de l'image est essentiel! Demandez-vous quelles informations l'image transmet-elle?
- Une approche consiste à imaginer que vous décrivez l'image à une personne au téléphone.
- Le texte doit être court et simple, comme un tweet (125 caractères maximum). Il est parfois difficile de décrire une image en 125 caractères ou moins parce qu'elle est très détaillée. Si votre texte alternatif est plus long, vous devrez ajouter une description longue et mentionner dans votre texte alternatif qu'une description longue suit. Par exemple: Le cycle de l'eau, une longue description suit.
- Veillez à fournir un texte alternatif concis pour aider les lecteurs à décider s'ils sont intéressés par la description plus longue.
- Ne commencez pas votre texte alternatif par « image de » ou « photo de ». Le lecteur d'écran indiquera à l'utilisateur qu'il s'agit d'une image.
- Pour la suite Office, ajoutez le texte alternatif uniquement dans le champ « Description », laissez le champ « Titre » vide.

## Texte en tant qu'image

Parfois, les utilisateurs souhaitent personnaliser le texte en fonction de leurs besoins, par exemple en augmentant la taille de la police, en modifiant sa couleur, etc. Lorsque le texte est présenté sous forme d'image, il est difficile pour l'utilisateur de le personnaliser. Dans la mesure du possible, utilisez du texte avec des feuilles de style CSS pour appliquer un style comme la famille de polices et la couleur.

Si un logo est utilisé, fournissez un texte alternatif du texte se trouvant dans le logo.

## Images complexes

### Tableaux et graphiques

Le texte alternatif doit contenir les informations suivantes :

- le type de tableau ou de graphique
- le type de données
- une brève description du tableau ou du graphique
  - Par exemple : Un graphique à barres du nombre de cours suivis au quatrième trimestre par rapport au troisième trimestre, montrant une légère augmentation des chiffres.

Votre description longue doit fournir les mêmes informations que celles présentées dans le tableau ou le graphique. Elle doit inclure des informations telles que

- l'information véhiculée par le graphique
- les tendances
- les catégories
- l'information sur les axes (X et Y)
- les valeurs minimales et maximales

En fonction du graphique et des informations qu'il tente de transmettre, la description longue peut être présentée sous la forme d'un tableau, en tenant compte des éléments nécessaires à la création d'un tableau accessible. Voici quelques exemples de descriptions longues de graphiques et de tableaux.

- [L'insécurité alimentaire des ménages au Canada en 2007-2008 : Statistiques et graphiques clés - Canada.ca](https://www.canada.ca/fr/sante-canada/services/aliments-nutrition/surveillance-aliments-nutrition/sondages-sante-nutrition/enquete-sante-collectivites-canadiennes-escc/insecurite-alimentaire-menages-canada-survol/insecurite-alimentaire-menages-canada-2007-2008-statistiques-graphiques-cles-surveillance-aliments-nutrition-sante-canada.html)
- [Statistiques - Canada.ca](https://www.canada.ca/fr/externe-examen-griefs-militaires/services/publications-cgf/statistiques.html)
- [Statistiques du programme de passeport - Canada.ca](https://www.canada.ca/fr/emploi-developpement-social/services/passeport/statistiques.html)

### Organigrammes et cartes conceptuelles

Lorsqu'on utilise un organigramme ou une carte conceptuelle pour montrer un processus ou la relation entre des concepts, la description longue peut être rédigée sous la forme d'une liste. Voici deux exemples de descriptions longues pour les organigrammes:

- [Diagramme de processus pour la réalisation des plans d'achats écologiques - Achats écologiques - Achats et ventes - TPSGC (tpsgc-pwgsc.gc.ca)](https://www.tpsgc-pwgsc.gc.ca/app-acq/ae-gp/opp-pfc-fra.html)
- [Accessibilité à Penn State | Organigrammes et cartes conceptuelles (psu.edu) (en anglais seulement)](https://accessibility.psu.edu/images/flowcharts/)

### Tableaux

#### Pour Word et PowerPoint

- Les tableaux ont besoin d'un texte alternatif pour donner à l'utilisateur une idée des données qu'il va trouver:
  - Cliquez avec le bouton droit de la souris sur le tableau, sélectionnez « Propriétés du tableau », puis l'onglet « Texte de remplacement ». Ne saisissez des informations que dans le champ de description, et non dans le champ de titre.
- N'incluez pas « tableau de », le lecteur d'écran annoncera qu'il s'agit d'un tableau.
- Le texte alternatif doit fournir des détails sur ce que le tableau montre. Par exemple: Nombre de cours suivis dans les domaines de la finance, des ressources humaines et de la sécurité d'avril à juin 2022\.
- Identifiez les en-têtes de ligne:
  - Sélectionnez la ligne, cliquez dessus avec le bouton droit de la souris et sélectionnez Propriétés du tableau. Sélectionnez l'onglet de la ligne et cochez « Répéter en haut de chaque page comme ligne d'en-tête ».
- Placez le titre du tableau en tant qu'en-tête à l'extérieur du tableau, et non dans une ligne fusionnée.
- Créez plusieurs tableaux simples au lieu de fusionner des cellules. Les lecteurs d'écran risquent de ne pas lire les données correctement.

#### HTML:

- Utilisez les balises HTML appropriées pour créer un tableau, ne créez pas de faux tableaux à l'aide de CSS et de l'élément de division du contenu (div):
  - `<table\>` définit un tableau
  - `<th\>` définit une cellule d'en-tête dans un tableau
  - `<tr\>` définit une ligne dans un tableau
  - `<td\>` définit une cellule dans un tableau
  - `<thead\>` définit un contenu d'en-tête dans un tableau
  - `<tbody\>` définit le contenu du corps d'un tableau
  - `<tfoot\>` définit le contenu du pied de page d'un tableau
- Les en-têtes de tableau doivent être marqués par `<th\>` :
  - La portée de l'en-tête doit être ajoutée dans la balise `<th\>`.
    - `scope = "col"`
    - `scope = "row"`
  - Utilisez scope = "colgroup" ou scope = "rowgroup" pour fusionner plusieurs colonnes ou lignes sous un même en-tête.
- Tous les tableaux doivent être accompagnés d'une légende :
  - Les légendes identifient le sujet général d'un tableau et sont utiles dans la plupart des situations.
- Un résumé est nécessaire pour les tableaux complexes (plusieurs en-têtes de colonne) :
  - Un résumé fournit des conseils d'orientation ou de navigation dans les tableaux complexes.
- Les en-têtes de tableau ne doivent pas renvoyer à des tableaux imbriqués, fusionnés ou séparés.
- Ne pas utiliser les tableaux de la mise en page.

### Cartes

Comme pour les autres images, lorsque vous réfléchissez au texte alternatif des cartes, pensez à l'objectif ou au contexte de la carte. Montre-t-elle un lieu? Plusieurs lieux? Des directions?

#### Un lieu ou des points de repère ou des lieux

Indiquez le point de repère et l'adresse. Par exemple: la Chambre des communes est située à l'édifice de l'Ouest (111, rue Wellington) sur la colline du Parlement à Ottawa (Ontario).

#### Plusieurs lieux ou points de repère

Fournir un contexte sur la nature des lieux ou des points de repère. Si la carte montre plusieurs lieux ou points de repère, une longue description sera probablement nécessaire. Par exemple: Emplacement des arrêts d'autobus au centre-ville de Fredericton. Une longue description suit.

#### Itinéraire

Si la carte indique des directions, le texte alternatif doit le refléter. La description longue serait un simple texte d'orientation. Par exemple: Itinéraire depuis la gare de l'aéroport (arrêt ID 5844) jusqu'au ministère de la Justice du Canada. Une description longue suit.

## Conseils pour la rédaction de descriptions longues

- Les descriptions longues expliquent les informations présentées dans des infographies ou des images complexes. Vous devez fournir une description longue si vous ne pouvez pas décrire le contenu et la fonction de l'image en moins de 125 caractères. Si vous pouvez décrire l'image en moins de 125 caractères, utilisez un texte alternatif.
- La description longue est généralement placée juste en dessous de l'image.
- Si une explication détaillée et équivalente de l'image figure dans le texte immédiatement avant ou après une image complexe, il n'est pas nécessaire de fournir une longue description.
- Si vous fournissez une description longue pour une image, vous devez également fournir un texte alternatif pour l'image avec la mention que la description longue suit.
- Dans certains cas, l'information transmise est l'apparence d'une image (par exemple, une œuvre d'art, un détail architectural, etc.) Dans ce cas, la description longue doit être une représentation textuelle de l'information importante véhiculée par l'image.

## Liens utiles sur le texte alternatif

- <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html">Contenu non textuel - Comprendre SC 1.1.1 (<abbr>WCAG</abbr>)<small> (en anglais seulement)</small></a>
- <a href="https://html.spec.whatwg.org/multipage/images.html#alt">Obligation de fournir du texte pour remplacer les images (HTML5)<small> (en anglais seulement)</small></a>
- <a href="https://www.w3.org/TR/turingtest/">Inaccessibilité du CAPTCHA (Note du projet du groupe W3C)<small> (en anglais seulement)</small></a>
- [Images et vidéos (Guide de rédaction de contenu du site Canada.ca)](https://conception.canada.ca/guide-redaction/#toc10)
- Il peut être difficile de savoir ce qu'il faut mettre dans un texte alternatif, et de savoir quand un texte alternatif est nécessaire et quand il ne l'est pas. <a href="https://www.w3.org/WAI/tutorials/images/decision-tree/">L'arbre de décision pour texte alternatif du W3C<small> (en anglais seulement)</small></a> peut vous aider à déterminer ce qu'il faut faire dans certaines situations.
- [Guide de rédaction du contenu du site Canada.ca - Ajouter une description longue pour expliquer les images complexes](https://conception.canada.ca/guide-redaction/#wp6-3)
