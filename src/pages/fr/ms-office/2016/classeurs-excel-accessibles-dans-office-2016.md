---
title: Classeurs Excel accessibles dans Office 2016
description: Pratiques accessibles pour la création de documents Microsoft Excel 2016.
toggle: Accessible Excel workbooks in Office 2016
fontIcon: fa-file-excel
---

## Vérificateur d’accessibilité

Microsoft Office (Word, Excel, PowerPoint) comporte un programme intégré de vérification de l’accessibilité. Le vérificateur ne détecte pas tous les problèmes, mais recherche des éléments, comme les textes de remplacement manquants, les titres de diapositive en double et les problèmes potentiels d’ordre de lecture.

<div class="row">
<div class="col-md-7 mrgn-bttm-md">
<img class="img-responsive" src="{{ pathPrefix }}/img/fr/office2016/excel-01.jpg" alt="Capture d’écran de menu vérification de l’accessibilité" />
</div>
</div>

Comment utiliser le vérificateur d’accessibilité&nbsp;:

1. Activez l’onglet **Fichier** > **Informations** > **Vérifier l’absence de problèmes** > **Vérifier l’accessibilité.**
2. Examinez les résultats dans le volet **Vérificateur d’accessibilité**.
3. Corrigez les problèmes énumérés. Au bas du volet, vous trouverez des renseignements pratiques pour comprendre et résoudre les différents problèmes.

## Tableaux

Évitez les structures de tableau complexes dans tous les documents. Si les tableaux comprennent des tableaux imbriqués, des cellules fusionnées, des cellules fractionnées, des lignes ou des colonnes vides, ces tableaux entravent la navigation des lecteurs d’écran. Lorsque vous utilisez un tableau, concevez-le aussi simplement que possible. Donnez des titres évocateurs aux colonnes et aux lignes afin de faciliter la navigation de l’utilisateur.

## Onglets des feuilles de calcul

Donnez des noms uniques et évocateurs à toutes les feuilles de votre document. Veillez à ce que le nom donné à chaque onglet décrive avec précision le contenu de la feuille de calcul. Cela facilitera la navigation à l’intérieur du classeur. Il est préférable de supprimer toutes les feuilles vierges de votre document.

## Polices

Choisissez des polices et des styles faciles à lire.

- Utilisez des polices « sans empattement » (sans serif) avec suffisamment d’espace entre les lettres : Par exemple : Arial, Verdana, Century Gothic.
- Utilisez des tailles de police de 11 à 14 points.

### Utilisation de la couleur

Utilisez un [outil de vérification du contraste (en anglais seulement)](https://webaim.org/resources/contrastchecker/) pour vérifier le contraste du texte (en premier plan) par rapport à l’arrière-plan. Pour la plupart des textes, le rapport de contraste doit être de 4,5:1. Pour les polices de grandes tailles et en caractère gras (caractère gras de 14 points ou régulier de 18 points), cette exigence est assouplie à 3:1. Comme il est très probable que la feuille soit visualisée à un zoom faible (pour en voir plus), tout le texte doit respecter un rapport minimum de 4,5:1. Visez l’exigence WCAG AAA de 7:1.

**Évitez d’utiliser** uniquement la couleur pour donner un sens ou une importance à un mot, une cellule ou un bloc de texte. Il est possible d’ajouter un motif à la couleur pour les utilisateurs daltoniens. Les champs obligatoires doivent être identifiés par un astérisque (*) et le mot «&nbsp;requis&nbsp;» plutôt qu’inscrits en rouge.

## Éléments non textuels

### Texte de remplacement

Les éléments visuels comme les photos, les captures d’écran, les icônes, les vidéos et les modèles 3D doivent tous comprendre un texte de remplacement. Le texte de remplacement permet aux personnes qui ne peuvent pas voir l’image, de comprendre le message et ce qui est important. Un bon texte de remplacement est concis et pertinent. Il ne doit pas être plus long qu’une ou deux phrases et doit indiquer l’information importante transmise par l’image. Lors de la création d’un texte de remplacement, évitez de commencer par «&#8201;ceci est une image de&#8201;». Par contre, pour les captures d’écran, commencez par «&nbsp;capture d’écran de&nbsp;».

Pour attribuer du texte de remplacement aux images&nbsp;:

1. Ouvrez le menu contextuel en cliquant à droite sur l’image ou en appuyant sur la touche de l’application.
2. Activez **Format de l’image**.
3. Activez l’outil **Taille et propriétés**.
4. Saisissez un titre dans le champ **Titre**. Remarque : Ne remplissez ce champ que si vous saisissez une description est longue et détaillée dans le champ Description.
5. Saisissez un texte de remplacement pertinent dans le champ **Description**.
6. Si l’image est importante, communiquez en mots le sens, la fonction ou l’objectif transmis par l’image.
7. Si une image ne transmet aucune information (c’est-à-dire qu’elle est décorative ou redondante), saisissez le mot « décoratif » (sans les guillemets) dans le champ** Description**.
8. Activez le bouton **Fermer**.

<div class="row">
<div class="col-md-9">
<img class="img-responsive" src="{{ pathPrefix }}/img/fr/office2016/excel-02.jpg" alt="Capture d’écran de Outil Format de l’image" />
</div>
</div>

### Graphiques et diagrammes

Veillez à ce que les images et les graphiques complexes comportent de longues descriptions. Les images complexes comprennent : les schémas, les plans, les diagrammes ou toute autre image véhiculant une grande quantité d’informations. Une telle description est nécessaire, car les utilisateurs qui ne sont pas en mesure de voir l’image complexe ne comprendront pas suffisamment sa valeur ou son objectif.

Pour ajouter une description longue aux diagrammes et aux graphiques&nbsp;:

1. Activez le menu contextuel du graphique ou du diagramme et activez **Format de la zone de graphique**.
2. Le menu **Format de la zone de graphique** apparaît.
3. Activez **Taille et propriétés**.
4. Indiquez une description longue pertinente.
    1. Décrivez le titre du graphique.
    2. Le rôle qu’il joue dans le document.
    3. L’interrelation des éléments dans le bon ordre.
5. Activez le bouton **Fermer**.

Consultez la page <a href="https://www.w3.org/WAI/tutorials/images/complex/">Images complexes<small> (en anglais seulement)</small></a> pour d’autres recommandations.

## Hyperliens

Les utilisateurs de lecteurs d’écran parcourent parfois la liste des liens. Veillez donc à ce que le titre des liens soit pertinent dans le contexte du document. Le titre du lien doit transmettre avec précision l’intention et l’objectif du lien. Si aucun texte n’est fourni avec le lien, les utilisateurs devront suivre le lien pour en déterminer l’objectif, ce qui peut présenter des difficultés pour les utilisateurs de technologies adaptées. Un exemple de titre de lien pertinent comprend le titre complet de la destination plutôt qu’un lien vers le texte «&#8201;Cliquez ici&#8201;».

Pour ajouter des hyperliens avec un titre pertinent&nbsp;:

1. Saisissez ou collez une adresse Web dans votre document.
2. Sélectionnez le lien et ouvrez le menu contextuel.
3. Activez **Lien hypertexte**.
4. Modifiez le **Texte à afficher** par un texte pertinent.

<div class="row">
<div class="col-md-9">
<img class="img-responsive" src="{{ pathPrefix }}/img/fr/office2016/excel-03.jpg" alt="Capture d’écran de Insérer un lien hypertexte" />
</div>
</div>

## Ressources supplémentaires

- [Microsoft : Rendre vos documents Excel accessibles aux personnes atteintes de handicaps](https://support.microsoft.com/fr-fr/office/rendre-vos-documents-excel-accessibles-aux-personnes-atteintes-d-un-handicap-6cc05fc5-1314-48b5-8eb3-683e49b3e593?ui=en-us&rs=en-us&ad=us)
- [Microsoft : Prise en charge de l’accessibilité dans Excel](https://support.office.com/fr-fr/article/prise-en-charge-de-l-accessibilit%C3%A9-dans-excel-0976b140-7033-4e2d-8887-187280701bf8)
