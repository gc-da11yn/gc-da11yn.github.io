---
title: Liste de vérification pour l'accessibilité Web
description: Liste de vérification pour vérifier si le contenu d'une page web est accessible ou non.
toggle: web-accessibility-checklist
role:
  - qaAutomated
  - qaManual
subject:
- howTos
tags:
- testYourProducts
---

<ul class="list-unstyled mrgn-tp-lg">
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les images informatives ont un texte alternatif court et descriptif, et toutes les images d&eacute;coratives ont des attributs alternatifs vides <code>&lt;alt=&ldquo;&rdquo;&gt;</code>.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les titres sont significatifs et utilis&eacute;s pour cr&eacute;er une structure hi&eacute;rarchique. (Les niveaux de titres ne doivent pas &ecirc;tre saut&eacute;s).</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>La balise <code>&lt;table&gt;</code> n&rsquo;est pas utilis&eacute;e pour la mise en page.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Toutes les pages qui contiennent des tableaux pour transmettre des donn&eacute;es utilisent soit <a href="https://webaim.org/techniques/tables/data#scope"><code>scope</code> (<small>seulement en anglais</small>)</a> ou <a href="https://webaim.org/techniques/tables/data#id"><span lang="en"><code>id</code> with <code>headers</code></span> (<small>seulement en anglais</small>)</a>.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les &eacute;l&eacute;ments d'information et les d&eacute;finitions sont correctement structur&eacute;s sous forme de listes ordonn&eacute;es <code>&lt;ol&gt;</code>, non ordonn&eacute;es <code>&lt;ul&gt;</code> ou de d&eacute;finitions <code>&lt;dl&gt;</code>.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>L'ordre de lecture des pages est logique et intuitif.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le niveau de contraste de la pr&eacute;sentation visuelle du texte et des images de texte est d'au moins 4,5:1 sur toutes les pages.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les utilisateurs peuvent redimensionner (par exemple, zoomer) jusqu'&agrave; 200 %, sans perte de contenu ou de fonctionnalit&eacute;.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le contenu de la page est redistribu&eacute; sur les appareils mobiles (en modifiant la taille de la fen&ecirc;tre d&rsquo;affichage, &agrave; partir de 320 px) &agrave; mesure que le zoom augmente, jusqu'&agrave; 400%.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les &eacute;l&eacute;ments interactifs (liens, boutons, menus, boutons d'expansion et de r&eacute;duction, etc.) re&ccedil;oivent toujours la priorit&eacute; lorsqu'on utilise le clavier.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Le contenu statique (comme les titres, les paragraphes, les &eacute;l&eacute;ments de liste, etc.) ne doit pas &ecirc;tre mis en &eacute;vidence par d&eacute;faut lors de l'utilisation du clavier.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Un m&eacute;canisme est disponible pour contourner les blocs de contenu qui se r&eacute;p&egrave;tent sur plusieurs pages web.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Les pages web ont des titres uniques qui d&eacute;crivent le sujet ou l'objectif.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>L'objectif de chaque lien peut &ecirc;tre d&eacute;termin&eacute; &agrave; partir du texte du lien.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>La langue de la page et de son contenu est programm&eacute;e.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Chaque &eacute;l&eacute;ment d&rsquo;un formulaire a un &laquo; <code lang="en">label</code> &raquo; associ&eacute;.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Se r&eacute;f&eacute;rer &agrave; la page de <a href="https://wet-boew.github.io/wet-boew/demos/formvalid/formvalid-fr.html">validation des formulaires Boîte à outils de l'expérience Web (<abbr>BOEW</abbr>)</a> pour la validation g&eacute;n&eacute;rique et la gestion des messages d'erreur pour les formulaires Web.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>La balise <code>&lt;br&gt;</code> n&rsquo;est pas utilis&eacute;e pour cr&eacute;er des espaces; le CSS est plut&ocirc;t utilis&eacute;.</li>
	<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Utilisez <a href="https://validator.w3.org/"><span lang="en">Markup Validation Service</span> (<small>seulement en anglais</small>)</a> pour valider le balisage des pages.</li>
</ul>
