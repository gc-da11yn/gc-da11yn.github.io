---
title: Améliorer l’accessibilité des formulaires
description: Découvrez comment rendre les formulaires numériques accessibles.
layout: layouts/base.njk
subject:
  - howTos
tags:
  - createDocument
toggle: find-out-how-to-make-accessible-digital-forms
---


<h2>Le format de formulaire le plus accessible: HTML</h2>

<p>HTML est le meilleur format et le plus flexibles, même par rapport à Word et PDF. Les formulaires HTML, lorsqu’ils sont codés correctement, offrent les meilleures caractéristiques en matière d’accessibilité, notamment:</p>

<p>HTML est le meilleur et le plus flexibles. Lorsqu’ils sont codés correctement, HTML offrent les meilleures caractéristiques en matière d’accessibilité, notamment:</p>

<ul>
	<li><strong>Étiquettes programmatiques&nbsp;:</strong> L’association entre les éléments du formulaire et leurs étiquettes répond aux technologies d’adaptation. Par exemple, un lecteur d’écran annoncera l’étiquette de champ du formulaire lorsque le champ est ciblé et un utilisateur de reconnaissance vocale pourra émettre une commande à l’aide de l’étiquette (p. ex. « Allez au champ du mot de passe »).</li>
	<li><strong>Adaptabilité&nbsp;:</strong> La présentation peut être modifiée en fonction des exigences de l’utilisateur relativement à la police et à la couleur. La capacité de « redistribution » du HTML signifie que le formulaire pourra être utilisé à un zoom élevé ou sur de petits écrans (p. ex des appareils mobiles).</li>
	<li><strong>Regroupement des éléments&nbsp;:</strong> Les boutons radio, les cases à cocher, etc. peuvent être accompagnés d’une question (« légende ») programmatiquement associée à un ensemble de réponses connexes (« champs »).</li>
	<li><strong>Validation&nbsp;:</strong> JavaScript peut être utilisé pour valider les entrées et fournir des messages d’erreur de façon flexibles et accessible.</li>
</ul>

<p>Pour les sites Web utilisant la Boîte à outils de l’expérience Web, veuillez suivre le <a href="https://wet-boew.github.io/wet-boew-styleguide/design/forms-fr.html" rel="external">Guide de conception de la Boîte à outils de l’expérience Web</a> pour créer un formulaire HTML accessible.</p>

<h2>Facile et accessible&nbsp;: un document Word simple</h2>
<p>Les documents Microsoft Word (sans champs de formulaire) sont le deuxième meilleur outil pour créer des formulaires accessibles. On peut adapter un document Word comme on le fait pour un document HTML afin de répondre à des besoins particuliers de l’utilisateur (p. ex. la taille de la police peut être augmentée). Ce type de document peut constituer un bon choix pour l’accessibilité malgré ses limites. Le document devrait être structurer de façon simple, avec les questions et les réponses sous une seule colonne, qui comprends aussi un espace vide sous chaque question pour les réponses. Toutefois, dans un document Word simple, vous ne pourrez pas inclure d’éléments de formulaire, comme des cases à cocher ou un moyen automatisé de validation pour s’assurer que les champs requis ont été remplis. La protection du contenu que vous ne voulez pas modifier (comme les questions) peut rendre l’accès à ce contenu plus difficile pour les utilisateurs de la technologie adaptée. Si vous respectez ces limites, un document Word simple pourrait bien être tout ce dont vous avez besoin pour recueillir de l’information. Il s’agit à la fois du format le plus facile à créer et le plus facile à adapter aux besoins particuliers des utilisateurs.

	<h2>Non recommandé&nbsp;: un document Word complexe</h2>
	<p>Dans Microsoft Word, si vous utilisez des éléments de formulaire intégrés, comme les cases à cocher, le formulaire deviendra inaccessible. Pour en savoir plus sur les raisons de ces limites, consultez <a href="" rel="external">Les limites d’accessibilité des formulaires Microsoft Word</a> (en anglais seulement). Microsoft a même caché ces fonctions dans les versions récentes de Word sous « anciens outils ». Dans un document Word, les champs de formulaire sont difficiles à atteindre à l’aide d’un clavier et ne comportent pas d’associations d’étiquettes explicites. Cela entraîne des difficultés pour les utilisateurs de technologies adaptées. Par exemple, l’utilisateur d’un lecteur d’écran devra s’éloigner du champ du formulaire afin de trouver l’étiquette correspondante – un problème aggravé par les difficultés de navigation à l’aide du clavier et d’accès au contenu protégé.</p>

	<h2>Difficile et semi-accessible&nbsp;: le format PDF</h2>
	<p>Le format de document portable (PDF) est le format le plus couramment utilisé pour les formulaires au sein du gouvernement du Canada. C’est aussi l’un des formats les plus difficiles à rendre accessibles. Pour préserver le formatage lors de l’impression du formulaire, une grande partie de la présentation est « programmée » dans le fichier. Ceci limite considérablement l’adaptabilité du formulaire lorsqu’un utilisateur le remplit par voie électronique. Par exemple, la plupart des formulaires PDF ne sont pas reformatés avec succès lorsqu’e l’espace d’affichage est plus petit, ce qui en rend la lecture plus difficile sur des appareils mobiles ou pour des utilisateurs ayant une déficience visuelle. Les préférences des utilisateurs en matière de couleurs et de polices ne sont que rarement reflétées. Il est également difficile d’adapter un document PDF en d’autres formats, comme les gros caractères ou le braille.</p>
	<p>Les formulaires PDF remplissable sont fréquemment utilisés parce qu’il offre plusieurs caractéristiques similaires à celles des formulaires HTML, soit des éléments de formulaire comme des cases à cocher, des étiquettes programmatiques et même la validation JavaScript. Si vous ne pouvez pas utiliser un formulaire HTML, mais que vous avez besoin de ces fonctions, prenez des mesures pour vous assurer que votre PDF soit aussi accessible que le format le permet.</p>

	<h3>Créer un formulaire PDF</h3>
	<p>Bien qu’il existe des outils spécifiques pour créer des formulaires PDF (p. ex. Adobe LiveCycle), vous pouvez utiliser Microsoft Word comme point de départ pour créer un formulaire PDF (voir <a href="https://support.microsoft.com/fr-fr/office/cr%C3%A9er-des-fichiers-pdf-accessibles-064625e0-56ea-4e16-ad71-3aa33bb4b7ed" rel="external">Créer des fichiers PDF accessibles</a>). Ne créez pas les champs de formulaire dans Word. Laissez plutôt des espaces blancs pour les créer dans l’éditeur PDF (p. ex. Acrobat Pro, Foxit PhantomPDF).</p>
	<p>Premièrement, le document Word doit être lui-même accessible. En plus de suivre les lignes directrices générales concernant l’accessibilité du document, évitez les erreurs communes de conception de formulaires:</p>

	<ol>
		<li>N’utilisez pas de tableaux pour la présentation visuelle.
			<ol class="lst-lwr-alph">
				<li>Utilisez plutôt l’ordre linéaire, qui est l’option la plus simple et la plus accessible, où chaque champ de formulaire sera sur une nouvelle ligne.</li>
				<li>Si vous souhaitez un style visuel sur « plusieurs colonnes », vous pouvez le faire à l’aide de tabulations ou de colonnes. Vous pouvez utiliser des styles personnalisés pour créer des encadrés. N’utilisez pas de zones de texte.</li>
			</ol>
		</li>
		<li>Des titres devraient être utilisés pour séparer les différentes sections afin de faciliter la navigation dans le formulaire.
			<ol class="lst-lwr-alph">
				<li>Notez que les titres ne fonctionneront qu’à l’extérieur d’un tableau.</li>
			</ol>
		</li>
	</ol>

	<p>Une fois que le modèle de formulaire a été créé en Word pour être le plus accessible possible, exportez-le en format PDF. Assurez-vous que les options sont sélectionnées pour créer, dans le PDF, des signets à partir des titres ainsi que des balises.</p>
	<p>Vous devrez ensuite créer les champs de formulaire dans le logiciel PDF. Veuillez consulter ce <a href="https://www.adobe.com/accessibility/products/acrobat/creating-accessible-forms.html" rel="external">guide d’Adobe sur la création de formulaires accessibles dans Acrobat Pro DC</a>. Il est très important que vous indiquiez explicitement en tant qu’« infobulles » les étiquettes des champs de formulaire. Voir aussi les <a href="https://www.foxitsoftware.com/fr/support/tutorial/" rel="external">tutoriels vidéo</a> et les <a href="https://www.foxitsoftware.com/fr/support/usermanuals.php" rel="external">guides d’utilisation</a> de Foxit PhantomPDF.</p>

	<h2>Signatures électroniques</h2>
	<p>Examinez attentivement les exigences relatives aux signatures. Le Secrétariat du Conseil du Trésor du Canada a publié un document intitulé <a href="https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/securite-confidentialite-ligne/orientation-gouvernement-canada-utilisation-signatures-electroniques.html" rel="external">Orientation du gouvernement du Canada sur l’utilisation des signatures électroniques</a>. Souvent, le fait de demander à l’utilisateur de taper son nom sur une ligne ou d’insérer une image de signature suffit pour un document Word ou un PDF. La vérification de l’identité s’effectue lorsque le document est envoyé en pièce jointe par courriel. Pour un formulaire HTML, le fait de demander à l’utilisateur de taper son nom et de cocher une case pour confirmer son identité peut également être suffisant.</p>
	Lorsqu’un niveau de sécurité accru est requis, une signature numérique peut être utilisée que ce soit dans un document PDF ou Word. Vous aurez besoin de votre clé Entrust pour signer un document de façon électronique. Pour plus de renseignements, consultez le <a href="https://wiki.gccollab.ca/images/5/57/TCDS_EN_HOWTO.DOCX" rel="external">Guide de l’utilisateur technique des signatures numériques de Transports Canada</a>.
</p>
