---
title: Liste de vérification de la conformité des documents Microsoft
description: Vous trouverez ici différentes questions qui vous aideront à savoir si votre document Word est accessible ou non.
toggle: microsoft-document-compliance-checklist
subject:
  - howTos
tags:
  - createDocument
---

<!-- <div class="row">
<div class="col-sm-6">
<a class="gc-dwnld-lnk" href="{{ rootPath }}docs/MSDocument_COMPLIANCE_CHECKLIST_FR.docx" download="{{ title | stripTagsSlugify }}">
<div class="well gc-dwnld">
<div class="row">
<div class="col-xs-4">
<p><img class="img-responsive thumbnail gc-dwnld-img" src="{{ rootPath }}img/doc.png" alt="" /></p>
</div>
<div class="col-xs-8">
<p class="gc-dwnld-txt">
<span>{{ title | safe }}</span>
<span class="gc-dwnld-info">(<i class="fas fa-file-word mrg-rght-sm" aria-hidden="true"></i> <abbr title="Document Microsoft Word">Word</abbr>, 62 <abbr title="kilo-octet">ko</abbr>)</span>
</p>
</div>
</div>
</div>
</a>
</div>
</div> -->

Vous trouverez ci-dessous des questions qui vous indiqueront si votre document Microsoft Office est accessible. Les critères de réussite renvoient aux Règles pour l’accessibilité des contenus Web (<abbr>WCAG</abbr>) 2.1 : <a href="http://www.w3.org/WAI/WCAG21/quickref/">How to Meet WCAG - Quick Reference<small> (en anglais seulement)</small></a> et le [Guide de rédaction du contenu du site Canada.ca](https://conception.canada.ca/guide-redaction/).

Si une question ne s’applique pas à votre document, indiquez « S.O. » pour « Sans objet ». Par exemple, il n’y a pas de table des matières dans un document Excel.

Si vous répondez « Non » à l’une des questions suivantes, votre document N’EST PAS accessible.

## Renseignements d’ordre général

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les propriétés du document sont-elles remplies de manière conforme (titre, auteur, sujet) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#page-titled">2.4.2 : Titre de page</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>La langue du document est-elle bien définie ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#language-of-page">3.1.1 : Langue de la page</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le document est-il libre de commentaires, de suivi des modifications et de surligne ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>L’ordre de présentation du contenu est-il exact et logique? (<a href="https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence">1.3.2 : Ordre séquentiel logique</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le document est-il exempt de formulaires électroniques à remplir ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions">3.3.2 : Étiquettes ou instructions</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Est-il possible de redimensionner l’ensemble du texte et demeure-t-il lisible lorsqu’il est grossi à 200 % ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#resize-text">1.4.4 : Redimensionnement du texte</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le niveau de lisibilité est-il compatible avec le public cible: maximum grade 8 pour publique générale et maximum grade 10 à l'interne de EDSC ?</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Tous les acronymes sont-ils définis dès qu’ils sont mentionnés la première fois dans le document ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#abbreviations">3.1.4 : Abréviations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>L'espacement de contenu textuel est-il d'au moins 1.5 (interligne) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#text-spacing">1.4.12 : Espacement du texte</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le texte est-il exempt de tabulations ou d’espaces pour aligner ou centrer le texte ? Utilisez plutôt le retrait et l’espacement des caractéristiques du paragraphe.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le texte est-il aligné à gauche ou à droite, et n’est-il jamais justifié (aligné des deux côtés) ?</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le texte est-il exempt de nouvelles lignes vides ou de retours forcés pour créer de l’espace entre les paragraphes ? Utilisez plutôt l’option de saut de page ou l’option de paragraphe avant et après.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>N’utilisez l’italique que comme recommandé par le Guide de style du contenu Canada.ca.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Utilisez un texte de style paragraphe fort et uniquement pour certains mots et phrases courtes, pas pour des phrases complètes ou des paragraphes.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>N’utilisez que des styles sans empattement comme Verdana, Tahoma, Arial, Helvetica</li>
</ul>

## Couleur

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Est-ce que tous les objets (tableaux et graphiques) de couleur sont assortis d’une méthode qui ne repose pas sur les couleurs pour assurer a compréhension (utilisation de figures ou *) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#use-of-color">1.4.1 : Utilisation de la couleur</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Tous les objets non textuels tels que les graphiques ou les dessins (à l’exception des logos et des photographies) ont-ils un rapport de contraste de 3:1 ou plus ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#contrast-minimum">1.4.3 : Contraste (minimum)</a>)</li>
</ul>

## Liens

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Tous les liens sont-ils identifiés à l’aide du style de paragraphe de lien hypertexte ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#use-of-color">1.4.1 : Utilisation de la couleur</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les hyperliens fournissent-ils un texte de lien qui identifie l’objectif du lien sans avoir besoin de contexte supplémentaire ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#link-purpose-in-context">2.4.4 : Fonction du lien</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le texte générique des liens est-il suffisamment contextuel? (Vous n’utilisez pas le mot Lien ou la formule cliquez ici) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#link-purpose-in-context">2.4.4 : Fonction du lien (selon le contexte)</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Tous les liens sont-ils correctement liés (pas de liens brisés) ?</li>
</ul>

## Images

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Toutes les images contenant de l’information comportent-elles du texte de remplacement qui fournit le même niveau de compréhension qu’un utilisateur visuel obtiendrait ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#non-text-content">1.1.1 : Contenu non textuel</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Toutes les images décoratives sont-elles marquées décoratives (contenant " " ou le mot « décoratif » dans le champ de texte alternatif) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#non-text-content">1.1.1 : Contenu non textuel</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les objets multicouches sont-ils regroupés en un seul objet ou aplanis et un texte de remplacement approprié est-il appliqué, si nécessaire ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#non-text-content">1.1.1 : Contenu non textuel</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les images d’information complexes (non décoratives) sont-elles assorties d’un autre moyen de compréhension (habituellement une longue description) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#non-text-content">1.1.1 : Contenu non textuel</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le document est-il exempt de tout contenu qui ne devrait pas être inclus comme image ? (Image d’un tableau avec texte, image de texte) (<a href="https://www.w3.org/Translations/WCAG21-fr/#images-of-text">1.4.5 : Texte sous forme d’image</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le document est-il exempt de contenu qui clignote plus de 3 fois par seconde ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#three-flashes-or-below-threshold">2.3.1 : Pas plus de trois flashs ou sous le seuil critique</a>)</li>
</ul>

## Tableaux

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le tableau a-t-il été créé à l’aide des styles de tableau intégrés (et non avec des espaces ou des tabulations) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>La structure du tableau correspond-elle à la disposition visuelle du tableau (structure simple de disposition – aucune cellule fusionnée ou fractionnée) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>•	Toutes les tables ont-elles des lignes d’en-tête et/ou des colonnes d’en-tête définies ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le document est-il exempt de tableaux utilisés pour du contenu qui n’est pas une donnée (tableaux utilisés pour la mise en page seulement) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le document est-il exempt de tableaux de données contenant des cellules fusionnées, cellules d’en-tête de ligne et de colonne ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
</ul>

## Listes

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le document contient-il uniquement des listes créées avec des styles de liste ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les listes multiples d’un même document sont-elles bien organisées (regroupées ou à divers niveaux) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
</ul>

## En-têtes

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Est-ce que tout le texte qui sert d’en-tête visuel est marqué par le style d’en-tête approprié ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les titres suivent-ils une progression hiérarchique logique? (H1-H2-H3) (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les changements apportés au style des titres ont-ils été effectués moyen de la fonction « modifier le style de l’en-tête » ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le texte de l’en-tête décrit-il correctement le contenu suivant ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels">2.4.6 : En-têtes et étiquettes</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le document contient-il un style d’en-tête pour chaque section identifiée ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels">2.4.6 : En-têtes et étiquettes</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le volet de navigation du menu Affichage affiche-t-il tous les en-têtes, et rien de plus (y compris aucune ligne vide) ?</li>
</ul>
</ul>

## Autres éléments

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>La table des matières est-elle produite à l’aide des styles Office intégrés ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les citations et les notes de bas de page/notes de fin de document sont-elles créées à l’aide des styles Office intégrés ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>La langue est-elle correctement réglée pour la langue correspondante des mots ou des phrases ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#language-of-parts">3.1.2 : Langue d’un passage</a>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>L’information contenue l’en-tête, le pied de page, le filigrane, les notes du conférencier, etc. est-elle disponible dans le corps principal du document (sauf la numérotation des pages) ? (<a href="https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships">1.3.1 : Information et relations</a>)</li>
</ul>
