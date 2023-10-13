---
title: Liste de vérification pour l'accessibilité Web
layout: layouts/base.njk
description: Liste de vérification pour vérifier si le contenu d'une page web est accessible ou non
toggle: web-accessibility-checklist
subject:
  - accessibilityInTheGovernmentOfCanada
tags:
  - procurement
---
<ul class="list-unstyled mrgn-tp-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>N’utilisez pas de balise <code>&lt;table&gt;</code> pour la mise en page.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>N’utilisez pas la balise <code>&lt;br&gt;</code> ou &nbsp; pour créer des espaces. Utilisez plutôt le CSS.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le niveau de contraste de la présentation visuelle du texte et des images de texte est d'au moins 4,5 : 1 sur toutes les pages.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Vous devez pouvoir redimensionner (c'est-à-dire zoomer) jusqu'à 200%, sans perte de contenu ou de fonctionnalité.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les pages fonctionnent bien sur les appareils mobiles (en modifiant la taille de la fenêtre).</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Toutes les fonctionnalités du contenu sont accessibles à l’aide du clavier.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Un mécanisme est disponible pour contourner les blocs de contenu qui se répètent sur plusieurs pages Web.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les pages Web ont des titres uniques qui décrivent le sujet ou l'objectif.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>L'objectif de chaque lien peut être déterminé à partir du texte du lien.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les titres doivent être significatifs et utilisés pour créer une structure hiérarchique. (Les niveaux de titres ne doivent pas être sautés).</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le « focus » est toujours visible lors de l'utilisation d’un clavier.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Tous les éléments d’un formulaire doivent avoir un « label » associé.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le langage de la page et de son contenu doit être programmée.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Toutes les pages qui contiennent des tableaux pour transmettre des données utilisent soit <a href="https://webaim.org/techniques/tables/data#scope"><code>scope</code> (disponible seulement en anglais)</a> ou <a href="https://webaim.org/techniques/tables/data#id"><code>id</code> with <code>headers</code> (disponible seulement en anglais)</a>.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Utilisez la <a href="https://wet-boew.github.io/wet-boew/demos/formvalid/formvalid-fr.html">validation de formulaire</a> de la <a href="https://wet-boew.github.io/wet-boew/index-fr.html"><abbr title="Boîte à outils de l’expérience Web">BOEW</abbr></a>.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Toutes les pages doivent être validées : <a hreflang="en" lang="en" href="https://validator.w3.org/">Markup Validation Service<span lang="fr"> (disponible seulement en anglais)</span></a>.</li>
</ul class="list-unstyled mrgn-tp-lg">
