---
title: Dessins Visio accessibles dans Office 2016
description: Pratiques accessibles pour la création de diagrammes Microsoft Visio 2016.
layout: layouts/base.njk
toggle: accessible-visio-drawings-in-office-2016
---

<h2>Introduction</h2>
<p>Le programme Microsoft Visio sert à créer des diagrammes, comme des organigrammes. Les problèmes d’accessibilité pour de tels diagrammes sont répartis en deux catégories&nbsp;: les problèmes qui concernent les utilisateurs voyants ayant une déficience visuelle (qui utilisent le diagramme de manière visuelle) et les problèmes qui concernent les utilisateurs aveugles (qui comptent sur les textes de remplacement). Suivre les recommandations d’accessibilité dans chacune de ces catégories aide également tous les utilisateurs.</p>

<h2>Accessibilité visuelle et générale</h2>
<p>Bon nombre des directives générales relatives à l’accessibilité des documents et des infographies s’appliquent également aux documents Visio. Veuillez consulter les directives générales sur les documents et sur les infographies pour plus d’informations.</p>

<h3>Contraste du texte</h3>
<p>Le contraste du texte doit être d’au moins 4,5:1 par rapport à l’arrière-plan. Comme les diagrammes sont souvent visualisés avec un zoom très faible, nous vous recommandons de maintenir, au minimum, ce niveau de contraste pour tous les textes, quelle qu’en soit la taille.</p>

<ul>
	<li>Pour vérifier le contraste des couleurs, utilisez un outil comme l’<a href="https://developer.paciellogroup.com/resources/contrastanalyser/">Analyseur de contraste des couleurs (en anglais seulement)</a> ou le <a href="https://webaim.org/resources/contrastchecker/">vérificateur de contraste de WebAIM (en anglais seulement)</a>.</li>
	<li>Évitez de placer des images d’arrière-plan complexes derrière le texte.</li>
	<li>Lorsqu’il est nécessaire d’utiliser des images d’arrière-plan complexes ou des fonds à faible contraste, définissez un contour autour du texte offrant un contraste suffisant par rapport à la couleur du texte en premier plan.</li>
</ul>

<h3>Utilisation de la couleur seule pour transmettre de l’information</h3>
<p>Veillez à ce que la couleur ne soit pas le seul moyen utilisé pour transmettre de l’information. Comme le codage par couleur est une stratégie souvent utilisée en infographie, il s’agit d’un problème d’accessibilité fréquent. Toute l’information transmise par couleur doit également être offerte par le biais d’autres méthodes d’identification (de façon visuelle et textuelle), comme des étiquettes, des symboles ou l’ajout d’un motif unique à la zone colorée.</p>

<h3>Contraste sans texte</h3>
<p>Selon WCAG&nbsp;2.1, tous les éléments graphiques importants doivent avoir un rapport de contraste de 3:1 par rapport à l’arrière-plan. Lorsque la couleur ou l’ombrage est utilisé pour identifier des zones du graphique, par exemple pour délimiter une boîte intérieure d’une boîte extérieure, les deux couleurs doivent avoir un rapport de contraste de 3:1 (car l’une d’entre elles constitue désormais «&#8201;l’arrière-plan&#8201;»).</p>
<p>Consultez la page <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html#graphical-objects">Comprendre le contraste sans texte (en anglais seulement)</a> pour des exemples d’objets graphiques (icônes), de graphiques et d’infographies, et comment ils réussissent, échouent ou peuvent satisfaire à ce critère.</p>

<h3>Abréviations</h3>

<p>Comme les diagrammes sont souvent remplis d’abréviations, la définition de ces abréviations favorise la compréhension de tous les utilisateurs. Consultez les directives sur les <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html">abréviations (en anglais seulement)</a> de WCAG.</p>
<p>Si possible, selon la disposition, insérez les abréviations la première fois qu’elles apparaissent.<br>
	P. ex. Programme d’accessibilité, d’adaptation et de technologie informatique adaptée (AATIA)</p>
<p>Étant donné que les diagrammes sont souvent visualisés dans un ordre non linéaire, il est généralement préférable de <a href="https://www.w3.org/TR/WCAG20-TECHS/G62.html">fournir un glossaire (en anglais seulement)</a>. Le glossaire doit faire partie du texte du document, sous un en-tête comme «&#8201;Glossaire des abréviations&#8201;», de manière à pouvoir le retrouver facilement.</p>

<h3>Texte intégré à des images</h3>
<p>À moins que ce ne soit essentiel, <a href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html">n’intégrez pas de texte à des images (en anglais seulement)</a>.</p>

<h2>Solutions de remplacement en format texte</h2>
<p>Les diagrammes Visio, de par leur nature, transmettent l’information de façon visuelle. Bien que Visio comporte certaines fonctions pour aider les utilisateurs aveugles à naviguer à l’intérieur de documents (consultez la section «&#8201;Caractéristiques d’accessibilité de Visio&#8201;» ci-dessous), une solution de remplacement en format texte qui ne dépend pas de l’organisation visuelle est essentielle lors de l’exportation du document Visio au format PDF, en image ou lorsque vous intégrez le diagramme à un autre document ou à une page Web.</p>

<h3>Aperçu du texte (de remplacement) court</h3>
<p>Un court texte (65 caractères ou moins) doit répondre à la question «&#8201;quelle est l’information transmise par le diagramme?&#8201;» Le texte court peut servir de titre évocateur au diagramme. </p>

<h3>Description textuelle longue</h3>
<p>Selon le diagramme, il peut être difficile de fournir une description linéaire textuelle et complète. Imaginez que vous décriviez le diagramme à une personne par téléphone.</p>
<p>La description textuelle longue est utile pour tous les utilisateurs. Rendez-la visible sur la page Web ou le document PDF pour que tout le monde puisse la lire. Consultez la section <a href="https://www.w3.org/WAI/tutorials/images/complex/">Images complexes (en anglais seulement)</a> pour des recommandations.</p>

<h4>Exemples</h4>
<p>Dans le cas d’une carte routière avec itinéraires, la description longue décrit chaque étape permettant de suivre les itinéraires.</p>

<div class="row">
	<div class="col-md-7 mrgn-bttm-md">
		<img class="img-responsive"  src="{{ rootPath }}img/fr/office2016/visio-01.jpg" alt="Organigramme illustrant le processus de connexion">
	</div>
</div>

<p>Pour transmettre adéquatement à tous les utilisateurs le message d’un organigramme, la description longue utilise des éléments numériques.</p>

<div class="brdr-rds-0 well">
	<p><strong>Organigramme illustrant le processus de connexion&nbsp;:</strong></p>
	<ul>
		<li>1.0 Inscrivez le nom d’utilisateur
			<ul>
				<li>1.1 Passez à l’étape&nbsp;2.0</li>
			</ul>
		</li>
		<li>2.0 Le nom d’utilisateur est-il vide?
			<ul>
				<li>2.1 Si oui, retournez à l’étape&nbsp;1.0</li>
				<li>2.2 Sinon, passez à l’étape&nbsp;3.0</li>
			</ul>
		</li>
		<li>3.0 Terminez la connexion</li>
	</ul>
</div>

<p>Pour un diagramme avec composants, la description longue commence par un résumé des composants principaux du diagramme (entre 3 et 10) et de la manière dont ils sont liés. Par la suite, placez les détails, comme le texte complet des composants, sous les en-têtes de chaque composant. Utilisez les divers niveaux de titres pour organiser les sous-composants. Les utilisateurs peuvent ainsi rechercher les composants qui les intéressent tant que le texte est compris dans la page.</p>

<h3>Représentation hypertexte</h3>
<p>À l’aide du format HTML, il est possible d’offrir une description textuelle complète décrivant toutes les relations avec des hyperliens. Pour améliorer la convivialité, prolongez la description longue (décrite ci-dessus pour l’organigramme et le diagramme de composants) avec des liens intégrés à la page, vers des composants connexes. De cette façon, les utilisateurs de lecteurs d’écran ont la possibilité de «&#8201;suivre les flèches&#8201;» plus rapidement.</p>
<p>Exemple d’organigramme de flux de données complexe&nbsp;:</p>

<div class="brdr-rds-0 well">
	<h4>Composant D (en-tête)</h4>
	<h5>Sources de données&nbsp;:</h5>
	<ul>
		<li><a href="#composantA">Composant A</a> (liens vers numéro d’en-tête du composant A)</li>
		<li><a href="#composantB">Composant B</a> (liens vers numéro d’en-tête du composant B)</li>
	</ul>

	<h5>Flux de données vers&nbsp;:</h5>
	<ul>
		<li><a href="#composantC">Composant C</a> (liens vers numéro d’en-tête du composant C) à <a href="#connecteur1">Connecteur&nbsp;1</a> (liens vers numéro d’en-tête du connecteur&nbsp;1)</li>
	</ul>
	<p>Ajoutez d’autres informations pertinentes sur le composant D.</p>
</div>

<h2>Caractéristiques d’accessibilité de Visio</h2>
<p>Microsoft a récemment publié un guide sur <a href="https://support.office.com/en-us/article/make-your-visio-diagram-accessible-e2c847a9-f010-4fef-af65-16e252829d44">Rendre les diagrammes Visio accessibles (en anglais seulement)</a>.</p>
<p>Il est important de comprendre <a href="https://support.office.com/en-us/article/use-a-screen-reader-to-read-visio-diagrams-45ff89fc-fcd8-4c99-bc21-70eb9af29a61">la façon dont un utilisateur de lecteur d’écran lit un diagramme Visio&nbsp;(en anglais seulement):</a></p>

<ul>
	<li>Ils utilisent la touche de tabulation pour passer d’une forme à l’autre dans un ordre prédéfini.</li>
	<li>Les formes sont décrites selon leur texte de remplacement («&#8201;alt text&#8201;»), leur position et leur mise en forme.</li>
	<li>Les points de départ et d’arrivée des connecteurs sont énoncés.</li>
</ul>

<p>Voici donc les deux principales caractéristiques d’accessibilité des documents Visio&nbsp;: l’ordre de lecture et le texte de remplacement.</p>

<h3>Ordre de lecture</h3>
<p>En règle générale, les objets sont lus dans l’ordre dans lequel ils ont été ajoutés au document. Créez donc les objets dans l’ordre dans lequel vous voulez qu’ils soient lus.</p>
<p>Vous pouvez également consulter et modifier l’ordre de lecture. Sélectionnez <strong>Affichage</strong> &gt; <strong>Volets des tâches</strong> &gt; <strong>Navigation</strong> et ensuite glissez et déposez les formes pour reproduire un ordre de lecture logique.</p>
<p>Créez des connecteurs (flèches, etc.) dans l’ordre que vous voulez qu’ils soient lus. Commencez à dessiner à partir du point de départ (c.-à-d. le parent dans un organigramme de flux unidirectionnel); ne dessinez pas de flèche dans un sens pour ensuite l’orienter dans le sens contraire.</p>

<h3>Texte de remplacement («&nbsp;alt text&nbsp;»)</h3>
<p>Visio offre la possibilité d’ajouter du texte de remplacement à des images, des formes et des pages entières. En règle générale, un texte de remplacement court est suffisant pour une image ou une forme. Une description plus longue convient à une page. Consultez les directives générales relatives à l’accessibilité et la page <a href="https://support.office.com/en-us/article/make-your-visio-diagram-accessible-e2c847a9-f010-4fef-af65-16e252829d44">Rendre les diagrammes Visio accessibles (en anglais seulement)</a>.</p>
<p>Pour ajouter un texte de remplacement à une image ou une forme&nbsp;:</p>

<ul>
	<li>Ouvrez le menu contextuel de l’image ou de la forme en cliquant à droite ou en appuyant sur la touche de l’application.</li>
	<li>Sélectionnez <strong>Format de la forme</strong>.</li>
	<li>Sélectionnez <img  src="{{ rootPath }}img/fr/office2016/visio-02.gif" alt="icône taille et propriétés"> (<strong>Taille et propriétés</strong>) et saisissez le texte de remplacement dans la boîte <strong>Description</strong>.</li>
</ul>

<p>Pour ajouter un texte de remplacement à une page complète, appuyez sur <strong>Maj +&nbsp;F5</strong>. Sélectionnez l’onglet <strong>Texte de remplacement</strong> et inscrivez la <strong>Description</strong>.</p>

<h3>Vérificateur d’accessibilité</h3>
<p>Comme la plupart des produits Office, Visio dispose désormais d’un vérificateur d’accessibilité intégré.</p>
<p>À partir de la barre d’outils du ruban, rendez-vous à <strong>Révision</strong> &gt; <strong>Vérifier l’accessibilité</strong>. Sélectionnez chaque élément pour consulter les détails et corrigez les problèmes un à la fois.</p>

<h2>Ressources supplémentaires</h2>
<ul>
	<li><a href="https://www.nvaccess.org/about-nvda/">NVDA : Un lecteur d’écran gratuit (pratique pour la mise à l’essai) (en anglais seulement)</a></li>
	<li><a href="https://www.w3.org/TR/WCAG21/">Règles pour l’accessibilité des contenus Web 2.1 (en anglais seulement)</a></li>
</ul>
