---
title: Documents PDF accessibles dans Office 2016
description: Pratiques accessibles pour la création de documents PDF 2016.
layout: layouts/base.njk
subject:
  - howTos
tags:
  - createDocument
---

<div class="row mrgn-tp-lg">
	<ul class="toc lst-spcd col-md-12">
		<li class="col-md-4 col-sm-6"><a class="list-group-item" href="../">1. Comment créer des documents accessibles</a></li>
		<li class="col-md-4 col-sm-6"><a class="list-group-item" href="../accessible-word-documents">2. Documents Word accessibles</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-sm"><a class="list-group-item active">3. Documents PDF accessibles</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-md clr-lft-lg"><a class="list-group-item" href="../accessible-powerpoint-documents">4. Présentations PowerPoint accessibles</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-sm"><a class="list-group-item" href="../accessible-excel-documents">5. Classeurs Excel accessibles</a></li>
		<li class="col-md-4 col-sm-6"><a class="list-group-item" href="../accessible-visio-diagrams">6. Dessins Visio accessibles</a></li>
	</ul>
</div>

<h2>Introduction</h2>
<p>Le format PDF (Portable Document Format) est un format fréquemment utilisé pour la distribution de documents imprimables. Ce format, créé par Adobe, peut être ouvert avec Adobe Acrobat ainsi qu’avec autres outils et de nombreux navigateurs Web.</p>

<h2>Qu’est-ce qui rend un PDF accessible?</h2>
<p>Un fichier PDF accessible est utilisable par des personnes avec ou sans handicaps qui utilisent des technologies ou des techniques adaptées pour accéder à l’information. Par exemple, un utilisateur aveugle peut utiliser un lecteur d’écran ou un afficheur braille. Une personne ayant une déficience motrice peut utiliser un clavier plutôt qu’une souris pour naviguer d’un champ à l’autre, dans un formulaire. D’autres utilisateurs peuvent avoir besoin d’ajuster la taille de la police ou l’espacement des caractères pour compenser une perte de vision ou des troubles d’apprentissage ou cognitifs.</p>
<p>Les directives générales relatives à l’accessibilité des documents s’appliquent également aux documents PDF. Cela signifie que le document doit être adéquatement structuré avec des titres, que le contraste est suffisant et que les images comportent un texte de remplacement. Assurez-vous de lire les directives générales relatives à l’accessibilité des documents avant de continuer.</p>
<p>Puisque les documents PDF contiennent souvent des éléments interactifs, comme des formulaires, leur accessibilité doit être évaluée selon les <a href="https://www.w3.org/TR/WCAG21/">Règles pour l’accessibilité des contenus Web</a> (en anglais seulement). Le respect de ce guide ne garantit pas la conformité à ces directives, mais c’est un bon début.</p>

<h2>Outils d’édition recommandés</h2>
<h3>Microsoft Word</h3>
<p>Remarque&nbsp;: Ces instructions font référence à Word 2013 et 2016.</p>
<p>Le moyen le plus simple de créer un fichier PDF accessible consiste à commencer par un document Word accessible. Une fois que vous avez créé un document accessible dans Word, exportez-le en cliquant sur <strong>Fichier</strong> &gt; <strong>Exporter</strong> &gt; <strong>Créer un document PDF/XPS</strong> &gt; <strong>Créer PDF/XPS</strong> (n’utilisez jamais la fonction Imprimer au format PDF!).</p>

<div class="row">
	<div class="col-md-7 mrgn-bttm-md">
		<img class="img-responsive"  src="{{ rootPath }}img/fr/office2016/pdf-01.jpg" alt="Capture d’écran de exporter le texte en format Word">
	</div>
</div>

<p>Dans la boîte de dialogue, sélectionnez <strong>Options </strong>et cochez les cases suivantes&nbsp;:</p>

<ul>
	<li>Créer des signets à l’aide de&nbsp;: Titres (ou signets, si vous les avez créés).</li>
	<li>Propriétés du document.</li>
	<li>Balises de structure du document.</li>
</ul>

<p>Les cases restantes doivent être décochées.</p>

<div class="row">
	<div class="col-md-9">
		<img class="img-responsive"  src="{{ rootPath }}img/fr/office2016/pdf-02.jpg" alt="Capture d’écran de Options d’exportation du format PDF au format Word">
	</div>
</div>

<h3>Produits Adobe</h3>
<p>Les produits Adobe Acrobat Pro, InDesign, FrameMaker et LiveCycle Designer exportent au format PDF balisé et offrent davantage de contrôle sur les styles visuels que Word. (LiveCycle Designer est spécialement conçu pour la création de formulaires)</p>

<h3>Autres outils de création PDF</h3>
<p>Autre que les outils qui font partie de la famille Adobe mentionnée précédemment, il existe aussi des outils tels que Foxit PhantomPDF et Kofax Power PDF. Dans ce document, nous allons mettre la cible sur Foxit PhantomPDF.</p>
<p>Afin de créer un document PDF en se servant de la version professionnelle de Foxit PhantomPDF, veuillez consulter ce tutoriel au sujet de la <a href="https://www.youtube.com/watch?v=vqjIMg3Fe6E">Création de PDF</a>.</p>

<h2>Vérification et correction de l’accessibilité avec Foxit PhantomPDF</h2>
<p>Foxit PhantomPDF est un outil essentiel pour la vérification et la correction de l’accessibilité des documents PDF. La version actuelle, en vigueur depuis décembre 2020, est Foxit PhantomPDF Business 10.1. L’information qui suit porte sur cette version.</p>

<h3>Vérification automatisée</h3>
<p>Foxit PhantomPDF offre un outil d’évaluation d’accessibilité intégré. L’outil ne souligne pas toutes les erreurs, mais identifie des erreurs comme&nbsp;: un titre, des étiquettes, figures ou texte de remplacement manquants, ainsi que d’autres problèmes potentiels.</p>
<p>Pour se servir du vérificateur d’accessibilité, ouvrir votre document PDF et choisir Accessibilité dans le menu ruban. Ensuite sélectionner <strong>Vérification complète</strong>.</p>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/fr/office2016/pdf-03.jpg" alt="Capture d’écran de la liste des succès et échecs d'accessibilité dans Phantom PDF">
	</div>
</div>

<p>Sous <strong>Options de rapport</strong>, désélectionner « Créer un rapport d’accessibilité » si vous ne désirez pas exporter un document qui souligne les erreurs et ensuite choisir <strong>Commencer la vérification</strong>.</p>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/fr/office2016/pdf-04.jpg" alt="Capture d’écran du menu Options de vérificateur d'accessibilité">
	</div>
</div>

<p>Ceci permettra a généré une liste des échecs semblable a celles dans la photo précédente. Vérifier chaque échec, car elles auront à être corrigées, souvent de façon manuelle.</p>

<h3>Correction des erreurs</h3>
<p>Certaines erreurs peuvent être corrigées simplement en ouvrant le menu contextuel du problème et en sélectionnant <strong>Corriger</strong>.</p>

<h2>Erreurs et solutions fréquentes</h2>
<p>Accordez une attention particulière aux éléments liés à l’accessibilité des PDF suivants.</p>

<h3>Structure du document (balises)</h3>
<p>Le «&#8201;balisage&#8201;» est un élément important de l’accessibilité des PDF. Les balises décrivent la représentation structurelle d’un élément au sein du document. Par exemple, il est important que la balise d’un lien indique bien qu’il s’agit d’un lien et qu’un titre est bien un titre pour qu’il apparaisse dans le volet de navigation.</p>
<p>À l’aide d’un outil d’édition recommandé, des balises sont automatiquement créées selon la structure du document actuel. Par exemple, un en-tête créé dans Microsoft Word sera balisé comme un en-tête dans le fichier PDF lors de l’exportation.</p>
<p>Pour vérifier si un document est balisé, naviguer a <strong>Fichier</strong> &gt; <strong>Propriétés</strong> ou appuyer sur <strong>Contrôle + D </strong>pour afficher les propriétés du document ou exécuter le Vérificateur d’accessibilité. Si ce n’est pas le cas, retournez, dans la mesure du possible, dans votre outil d’édition (c.-à-d. Word), assurez-vous que la structure de votre document est adéquate et exportez-le à nouveau en utilisant les paramètres indiqués dans la section Microsoft Word ci-dessus.</p>
<p>Pour définir les balises manuellement, utilisez <a href="https://youtu.be/9SKRZ-BUqRQ">Comment étiqueter vos PDF avec l’outil Ordre de lecture</a> (<strong>Outils</strong> &gt; <strong>Accessibilité</strong> &gt; <strong>Configuration</strong> &gt; <strong>Ordre de lecture</strong>).</p>

<h3>Texte de remplacement (« alt text ») pour les images</h3>
<p>Pour ajouter un texte de remplacement dans Foxit PhantomPDF, rendez-vous à <strong>Outils</strong> &gt; <strong>Accessibilité</strong> &gt; <strong>Texte de remplacement</strong> &gt; <strong>Ajouter texte de remplacement</strong>. Si votre image n’apparaît pas dans la liste d’images, ou le message «&#8201;Aucune information d’image à afficher&#8201;» apparaît, les images n’ont pas été correctement balisées et vous devrez d’abord les baliser.</p>
<p>Les images décoratives (qui sont ignorées par les lecteurs d’écran) doivent être balisées comme «&#8201;Arrière-plan&#8201;».</p>

<h3>Langue et titre</h3>
<p>Il est important de préciser un titre évocateur et la langue du document. Dans Foxit PhantomPDF, naviguer a <strong>Fichier</strong> &gt; <strong>Propriétés</strong> ou appuyer sur <strong>Contrôle + D </strong>pour afficher les propriétés du document. Le champ de langue se trouve sous l’onglet <strong>Avancé</strong>.</p>
<p>Les documents PDF bilingues présentent des problèmes particuliers et doivent être évités, en particulier pour ce qui est des formulaires. Il est préférable d’offrir plusieurs versions du même PDF, une pour chaque langue.</p>
<p>Un passage dans une langue autre que la langue principale du document doit être balisé séparément. Par exemple, un paragraphe anglais dans un document français qui indique que le document est également disponible en anglais. Consultez la page <a href="https://www.w3.org/TR/WCAG20-TECHS/PDF19.html">Préciser la langue d’un passage ou d’une phrase</a> (en anglais seulement). Vous pouvez choisir le langage du texte dans le sous-menu de l’onglet <strong>Étiquettes</strong> ou dans le panneau <strong>Contenu</strong> dans le panneau de navigation. Afin d’effectuer cette action, ouvrez le menu <strong>Contenu</strong> en cliquant avec le bouton droit sur un élément et choisir <strong>Propriétés</strong>… ensuite choisissez <strong>Langue</strong> dans la boite de dialogue Propriétés d’objet.</p>

<h3>Documents numérisés&nbsp;: images d’un texte</h3>
<p>Les documents PDF créés à partir de la numérisation d’un document papier doivent au moins reconnaître le texte pour être accessibles. Il est possible de le faire automatiquement à l’aide de la fonction de Reconnaissance optique de caractères (ROC). Le procédé ROC n’est pas fiable à 100&nbsp;%, il est donc important d’examiner le texte vous-même par la suite. <a href="https://youtu.be/4Rj2Tc6muIw">Voir Comment numériser, reconnaître et rendre des PDF modifiables</a>.</p>

<h3>Signets</h3>
<p>Tout PDF de plus d’une page doit contenir des signets. Les signets peuvent être générés automatiquement (par exemple lors de l’exportation à partir de Word, à condition que les paramètres utilisés soient adéquats - indiqués dans la section Microsoft Word ci-dessus) ou vous devez <a href="https://youtu.be/BmZG3IYcxRo">créer des signets manuellement dans Foxit PhantomPDF</a>.</p>

<h3>Formulaires</h3>
<p>La création d’un formulaire PDF accessible est délicate, car les champs de formulaire créés dans d’autres programmes ne sont pas directement exportés dans le fichier PDF. Consultez le <a href="https://helpx.adobe.com/fr/acrobat/11/using/creating-accessible-pdfs.html#workflow_for_creating_accessible_pdfs">Guide sur la création de formulaires accessibles d’Adobe</a>. Quelques conseils généraux&nbsp;:</p>
<ul>
	<li><strong>Instructions</strong>&nbsp;: Placez les instructions au début du formulaire, plutôt qu’entre les champs du formulaire.</li>
	<li><strong>Balises</strong>&nbsp;: Dans les documents PDF, il n’existe aucun moyen de savoir quelle balise s’applique à quel champ de formulaire. Par conséquent, la balise de chaque champ de formulaire doit également être indiquée dans le champ «&#8201;Infobulle&#8201;». Les boutons radio et les cases à cocher exigent des étapes supplémentaires; consultez le <a href="https://www.uottawa.ca/respect/carrefour-accessibilite/formations/accessibilite-pdf-pc">Guide d’accessibilité PDF de l’Université d’Ottawa</a>, particulièrement la section «&#8201;Erreurs communes d’accessibilité PDF avec solutions&#8201;» &gt; «&#8201;Propriétés des champs de formulaire&#8201;».</li>
	<li><strong>Format d’entrée des données&nbsp;:</strong> Veillez à ce que le bon format soit suggéré, le cas échéant.<br>
		P. ex., date de naissance (AAAA-MM-JJ). Comme pour toutes les balises, le format doit être répété dans l’infobulle.</li>
	<li><strong>Champs obligatoires&nbsp;:</strong> Déterminez les champs obligatoires. Ne comptez pas uniquement sur la couleur. Si un astérisque (*) est utilisé pour indiquer les champs obligatoires, indiquez le texte suivant au début du formulaire (par exemple, * indique un champ obligatoire).</li>
	<li><strong>Ordre de tabulation</strong>&nbsp;: Vérifiez l’accessibilité du formulaire en utilisant uniquement le clavier (utilisez la <strong>touche de tabulation</strong> pour vous déplacer d’un champ à l’autre).
		<ul>
			<li>Veillez à ce que le champ actif soit facilement reconnaissable (visuellement), en tout temps.</li>
			<li>Veillez à ce que l’ordre de tabulation suive l’ordre (visuel) attendu.</li>
		</ul>
	</li>
</ul>

<h3>Ordre de lecture</h3>
<p>Les documents créés avec un logiciel graphique, plutôt que Word, peuvent présenter l’information dans le mauvais ordre pour les lecteurs d’écran et d’autres technologies adaptées. Par exemple, il se peut que les éléments soient lus dans l’ordre dans lequel ils ont été créés, plutôt que dans l’ordre visuel prévu. Plusieurs colonnes de texte peuvent également occasionner des problèmes d’ordre de lecture. Pour vérifier l’ordre de lecture, naviguez à l’onglet <strong>Accueil</strong> &gt; <strong>Réorganiser</strong> ou appuyez sur <strong>Contrôle +&nbsp;4</strong> pour rediffuser le document (consultez «&#8201;Autres outils de vérification d’accessibilité PDF&#8201;» ci-dessous). Consultez la page <a href="https://youtu.be/9SKRZ-BUqRQ">Comment étiqueter vos PDF avec l’outil Ordre de lecture</a>.</p>

<h3>Espaces et sauts de ligne manquants</h3>
<p>L’utilisation par l’auteur de caractères inappropriés pour les espaces où les sauts de ligne occasionne un regroupement des mots lors de la redistribution. Ce problème d’édition se produit fréquemment avec les documents PDF. Pour le vérifier, exportez-le en texte brut dans Foxit PhantomPDF en naviguant à <strong>Convertir</strong> &gt; <strong>Exporter</strong> &gt; <strong>Dans un autre format</strong> &gt; <strong>Vers du texte brut</strong> ou sélectionnez tout le texte et faites un copier-coller dans un éditeur de texte brut, comme Notepad. Dans la version texte brut, manque-t-il des espaces et des sauts de ligne? Si c’est le cas, vérifiez vos paramètres d’exportation dans le programme d’édition. Ensuite, essayez une police dont les caractères sont plus espacés. Si vous avez réduit l’espacement des lettres ou des mots, retournez aux valeurs par défaut. Si le problème persiste, envisagez l’utilisation d’un autre outil d’édition.</p>

<h3>Tableaux</h3>
<p>Les cellules de tableau doivent être associées aux en-têtes du tableau. Commencez par un tableau simple (sans cellules fusionnées) dans Microsoft Word. Assurez-vous qu’il est correctement structuré avec des en-têtes de tableau en vérifiant avec l’outil d’ordre de lecture susmentionné. Un exemple de tableau correctement structuré est présenté ici. Consultez <a href="https://youtu.be/y1T6mr1Mltw">Comment rendre les tableaux plus accessibles dans les documents PDF</a>.</p>

<h2>Autres outils de vérification d’accessibilité PDF</h2>
<p>L’activation des fonctions d’accessibilité intégrées de Foxit PhantomPDF, dans l'onglet <strong>Accessibilité</strong> &gt; <strong>Configuration</strong> &gt; <strong>Assistant de configuration</strong>, vous permet de vérifier manuellement l’ordre de lecture et d’autres problèmes structurels. Consultez <a href="https://youtu.be/FK2kWIe6xq0">comment rendre facilement accessibles des documents PDF avec l’assistant d’action</a> pour plus d’information.</p>
<p>Vérifiez votre formulaire avec <a href="https://www.nvaccess.org/">NVDA (un lecteur d’écran gratuit)</a> (en anglais seulement) pour repérer rapidement les problèmes liés à l’ordre des balises et des tabulations. Tentez de remplir le formulaire en n’utilisant que vos oreilles et votre clavier. Cela vous donnera une idée de l’expérience des utilisateurs de lecteurs d’écran.</p>
<p>Outre le vérificateur d’accessibilité intégré de Foxit PhantomPDF, un autre outil est le <a href="https://www.access-for-all.ch/en/pdf-accessibility-checker.html">Vérificateur d’accessibilité PDF gratuit (PAC 3)</a> (en anglais seulement). Bien que ce programme ne vous permette pas, à lui seul, de remédier aux problèmes, il est possible que vous puissiez effectuer vos corrections dans l’outil d’édition au préalable (Word, InDesign, etc.). Il peut également cerner des problèmes que Foxit PhantomPDF n’a pas su reconnaître.</p>

<h2>Ressources supplémentaires</h2>
<ul>
	<li><a href="https://www.w3.org/TR/WCAG-TECHS/pdf.html">Techniques PDF de W3C pour WCAG&nbsp;2.0</a> (en anglais seulement)<br>
		Vingt-trois techniques permettant de résoudre des infractions particulières au WCAG, principalement dans le cadre de formulaires et de tableaux (100 pages, 2016).</li>
	<li><a href="https://webaim.org/techniques/foxit/">WebAIM&nbsp;: Foxit and PDF Accessibility</a> (en anglais seulement)<br>
		Un guide pour la création de PDF accessibles avec Foxit PhantomPDF par WebAIM (4 pages, 2019).</li>
	<li><a href="http://www.uottawa.ca/respect/sites/www.uottawa.ca.respect/files/fss-fixing-accessibility-errors-in-pdfs.pdf">10 erreurs fréquentes en matière d’accessibilité avec les solutions</a> (en anglais seulement)<br>
		Le produit de la révision de plus de 1&#8201;500 documents PDF, ce guide de U Ottawa fournit des détails, y compris des captures d’écran concernant la résolution de problèmes fréquents (24 pages, 2014).</li>
	<li><a href="https://www.foxitsoftware.com/fr/support/tutorial/">Tutoriels vidéo pour Foxit PhantomPDF</a>
</ul>

<ul class="pager mrgn-tp-xl">
	<li class="previous small"><a href="../accessible-word-documents" rel="prev">Précédent : Documents Word accessibles</a></li>
	<li class="next small"><a href="../accessible-powerpoint-documents" rel="next">Suivant : Présentations PowerPoint accessibles</a></li>
</ul>
