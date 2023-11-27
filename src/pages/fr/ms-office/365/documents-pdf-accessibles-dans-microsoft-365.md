---
title: Documents PDF accessibles dans Microsoft 365
description: Pratiques accessibles pour la création de documents PDF.
toggle: accessible-pdf-documents-in-microsoft-365
fontIcon: fa-file-pdf
---

## Introduction

Le format PDF (Portable Document Format) est un format fréquemment utilisé pour la distribution de documents imprimables. Ce format, créé par Adobe, peut être ouvert avec Adobe Acrobat ainsi qu’avec autres outils et de nombreux navigateurs Web.

## Qu’est-ce qui rend un PDF accessible?

Un fichier PDF accessible est utilisable par des personnes avec ou sans handicaps qui utilisent des technologies ou des techniques adaptées pour accéder à l’information. Par exemple, un utilisateur aveugle peut utiliser un lecteur d’écran ou un afficheur braille. Une personne ayant une déficience motrice peut utiliser un clavier plutôt qu’une souris pour naviguer d’un champ à l’autre, dans un formulaire. D’autres utilisateurs peuvent avoir besoin d’ajuster la taille de la police ou l’espacement des caractères pour compenser une perte de vision ou des troubles d’apprentissage ou cognitifs.

Les directives générales relatives à l’accessibilité des documents s’appliquent également aux documents PDF. Cela signifie que le document doit être adéquatement structuré avec des titres, que le contraste est suffisant et que les images comportent un texte de remplacement. Assurez-vous de lire les directives générales relatives à l’accessibilité des documents avant de continuer.

Puisque les documents PDF contiennent souvent des éléments interactifs, comme des formulaires, leur accessibilité doit être évaluée selon les [Règles pour l’accessibilité des contenus Web 2.1](https://www.w3.org/Translations/WCAG21-fr/). Le respect de ce guide ne garantit pas la conformité à ces directives, mais c’est un bon début.

## Outils d’édition recommandés

### Microsoft Word

Remarque&nbsp;: Ces instructions font référence à la version actuelle de Word à compter de décembre 2020.

Le moyen le plus simple de créer un fichier PDF accessible consiste à commencer par un document Word accessible. Une fois que vous avez créé un document accessible dans Word et n’avez pas un outil de création de PDF professionnelle, vous pouvez l’exporter en cliquant sur **Fichier** &gt; **Exporter** &gt; **Créer un document PDF/XPS** &gt; **Créer PDF/XPS** (n’utilisez jamais la fonction Imprimer au format PDF!).

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/fr/office365/pdf-365-001.jpg" alt="Capture écran qui démontre le processus d'exportation d'un PDF dans Word. Fichier > Exporter > Créer un document PDF/XPS > Créer PDF/XPS">
</div>
</div>

Dans la boîte de dialogue, sélectionnez **Options** et cochez les cases suivantes&nbsp;:

- Créer des signets à l’aide de : Titres (ou signets, si vous les avez créés).
- Propriétés du document.
- Balises de structure du document.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/fr/office365/pdf-365-002.jpg" alt="Capture écran qui démontre le bouton « Options » activé lors du processus d'exportation de PDF dans Word.">
</div>
</div>

Si vous avez un outil de création PDF professionnelle installée, un onglet devrait être présent dans le menu ruban du haut dans Microsoft Word. Pour créer un PDF&nbsp;:

- Naviguez au menu ruban
- Trouver l’outil de création PDF
- Assurez-vous que la case « créer des étiquettes » est cochée dans les paramètres de l’outil
- Activez le bouton **Créer un PDF**

### Produits Adobe

Les produits Adobe Acrobat Pro, InDesign, FrameMaker et LiveCycle Designer exportent au format PDF balisé et offrent davantage de contrôle sur les styles visuels que Word. (LiveCycle Designer est spécialement conçu pour la création de formulaires)

### Autres outils de création PDF

Autre que les outils qui font partie de la famille Adobe mentionnée précédemment, il existe aussi des outils tels que Foxit PDF Editor et Kofax Power PDF. Dans ce document, nous allons mettre la cible sur Foxit PDF Editor.

Afin de créer un document PDF en se servant de la version professionnelle de Foxit PDF Editor, veuillez consulter ce tutoriel au sujet de la [Création de PDF](https://www.youtube.com/watch?v=vqjIMg3Fe6E).

## Vérification et correction de l’accessibilité avec Foxit PDF Editor

Foxit PDF Editor est un outil essentiel pour la vérification et la correction de l’accessibilité des documents PDF. La version actuelle, en vigueur depuis décembre 2020, est Foxit PDF Editor Business 10.1. L’information qui suit porte sur cette version.

### Vérification automatisée

Foxit PDF Editor offre un outil d’évaluation d’accessibilité intégré. L’outil ne souligne pas toutes les erreurs, mais identifie des erreurs comme&nbsp;: un titre, des étiquettes, figures ou texte de remplacement manquants, ainsi que d’autres problèmes potentiels.

Pour se servir du vérificateur d’accessibilité, ouvrir votre document PDF et choisir Accessibilité dans le menu ruban. Ensuite sélectionner **Vérification complète**.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/fr/office365/pdf-365-003.jpg" alt="Capture d’écran de la liste des succès et échecs d'accessibilité dans Phantom PDF">
</div>
</div>

Sous **Options de rapport**, désélectionner « Créer un rapport d’accessibilité » si vous ne désirez pas exporter un document qui souligne les erreurs et ensuite choisir **Commencer la vérification**.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/fr/office365/pdf-365-004.jpg" alt="Capture d’écran du menu Options de vérificateur d'accessibilité">
</div>
</div>

Ceci permettra a généré une liste des échecs semblable a celles dans la photo précédente. Vérifier chaque échec, car elles auront à être corrigées, souvent de façon manuelle.

### Correction des erreurs

Certaines erreurs peuvent être corrigées simplement en ouvrant le menu contextuel du problème et en sélectionnant **Corriger**.

## Erreurs et solutions fréquentes

Accordez une attention particulière aux éléments liés à l’accessibilité des PDF suivants.

### Structure du document (balises)

Le «&#8201;balisage&#8201;» est un élément important de l’accessibilité des PDF. Les balises décrivent la représentation structurelle d’un élément au sein du document. Par exemple, il est important que la balise d’un lien indique bien qu’il s’agit d’un lien et qu’un titre est bien un titre pour qu’il apparaisse dans le volet de navigation.

À l’aide d’un outil d’édition recommandé, des balises sont automatiquement créées selon la structure du document actuel. Par exemple, un en-tête créé dans Microsoft Word sera balisé comme un en-tête dans le fichier PDF lors de l’exportation.

Pour vérifier si un document est balisé, naviguer a **Fichier** &gt; **Propriétés** ou appuyer sur **Contrôle + D** pour afficher les propriétés du document ou exécuter le Vérificateur d’accessibilité. Si ce n’est pas le cas, retournez, dans la mesure du possible, dans votre outil d’édition (c.-à-d. Word), assurez-vous que la structure de votre document est adéquate et exportez-le à nouveau en utilisant les paramètres indiqués dans la section Microsoft Word ci-dessus.

Pour définir les balises manuellement, utilisez [Comment étiqueter vos PDF avec l’outil Ordre de lecture](https://youtu.be/9SKRZ-BUqRQ) (**Outils** &gt; **Accessibilité** &gt; **Configuration** &gt; **Ordre de lecture**).

### Texte de remplacement (« alt text ») pour les images

Pour ajouter un texte de remplacement dans Foxit PDF Editor, rendez-vous à **Outils** &gt; **Accessibilité** &gt; **Texte de remplacement** &gt; **Ajouter texte de remplacement**. Si votre image n’apparaît pas dans la liste d’images, ou le message «&#8201;Aucune information d’image à afficher&#8201;» apparaît, les images n’ont pas été correctement balisées et vous devrez d’abord les baliser.

Les images décoratives (qui sont ignorées par les lecteurs d’écran) doivent être balisées comme «&#8201;Arrière-plan&#8201;».

### Langue et titre

Il est important de préciser un titre évocateur et la langue du document. Dans Foxit PDF Editor, naviguer a **Fichier** &gt; **Propriétés** ou appuyer sur **Contrôle + D** pour afficher les propriétés du document. Le champ de langue se trouve sous l’onglet **Avancé**.

Les documents PDF bilingues présentent des problèmes particuliers et doivent être évités, en particulier pour ce qui est des formulaires. Il est préférable d’offrir plusieurs versions du même PDF, une pour chaque langue.

Un passage dans une langue autre que la langue principale du document doit être balisé séparément. Par exemple, un paragraphe anglais dans un document français qui indique que le document est également disponible en anglais. Consultez la page [Préciser la langue d’un passage ou d’une phrase](https://www.w3.org/TR/WCAG20-TECHS/PDF19.html) (en anglais seulement). Vous pouvez choisir le langage du texte dans le sous-menu de l’onglet **Étiquettes** ou dans le panneau **Contenu** dans le panneau de navigation. Afin d’effectuer cette action, ouvrez le menu **Contenu** en cliquant avec le bouton droit sur un élément et choisir **Propriétés**… ensuite choisissez **Langue** dans la boite de dialogue Propriétés d’objet.

### Documents numérisés&nbsp;: images d’un texte

Les documents PDF créés à partir de la numérisation d’un document papier doivent au moins reconnaître le texte pour être accessibles. Il est possible de le faire automatiquement à l’aide de la fonction de Reconnaissance optique de caractères (ROC). Le procédé ROC n’est pas fiable à 100&nbsp;%, il est donc important d’examiner le texte vous-même par la suite. [Voir Comment numériser, reconnaître et rendre des PDF modifiables](https://youtu.be/4Rj2Tc6muIw).

### Signets

Tout PDF de plus d’une page doit contenir des signets. Les signets peuvent être générés automatiquement (par exemple lors de l’exportation à partir de Word, à condition que les paramètres utilisés soient adéquats - indiqués dans la section Microsoft Word ci-dessus) ou vous devez [créer des signets manuellement dans Foxit PDF Editor](https://youtu.be/BmZG3IYcxRo).

### Formulaires

La création d’un formulaire PDF accessible est délicate, car les champs de formulaire créés dans d’autres programmes ne sont pas directement exportés dans le fichier PDF. Consultez le [Guide sur la création de formulaires accessibles d’Adobe](https://helpx.adobe.com/fr/acrobat/11/using/creating-accessible-pdfs.html#workflow_for_creating_accessible_pdfs). Quelques conseils généraux&nbsp;:

- **Instructions** : Placez les instructions au début du formulaire, plutôt qu’entre les champs du formulaire.
- **Balises** : Dans les documents PDF, il n’existe aucun moyen de savoir quelle balise s’applique à quel champ de formulaire. Par conséquent, la balise de chaque champ de formulaire doit également être indiquée dans le champ « Infobulle ». Les boutons radio et les cases à cocher exigent des étapes supplémentaires.
- **Format d’entrée des données :** Veillez à ce que le bon format soit suggéré, le cas échéant. - P. ex., date de naissance (AAAA-MM-JJ). Comme pour toutes les balises, le format doit être répété dans l’infobulle.
- **Champs obligatoires :** Déterminez les champs obligatoires. Ne comptez pas uniquement sur la couleur. Si un astérisque (\*) est utilisé pour indiquer les champs obligatoires, indiquez le texte suivant au début du formulaire (par exemple, \* indique un champ obligatoire).
- **Ordre de tabulation** : Vérifiez l’accessibilité du formulaire en utilisant uniquement le clavier (utilisez la **touche de tabulation** pour vous déplacer d’un champ à l’autre).
  - Veillez à ce que le champ actif soit facilement reconnaissable (visuellement), en tout temps.
  - Veillez à ce que l’ordre de tabulation suive l’ordre (visuel) attendu.

### Ordre de lecture

Les documents créés avec un logiciel graphique, plutôt que Word, peuvent présenter l’information dans le mauvais ordre pour les lecteurs d’écran et d’autres technologies adaptées. Par exemple, il se peut que les éléments soient lus dans l’ordre dans lequel ils ont été créés, plutôt que dans l’ordre visuel prévu. Plusieurs colonnes de texte peuvent également occasionner des problèmes d’ordre de lecture. Pour vérifier l’ordre de lecture, naviguez à l’onglet **Accueil** &gt; **Réorganiser** ou appuyez sur **Contrôle +&nbsp;4** pour rediffuser le document (consultez «&#8201;Autres outils de vérification d’accessibilité PDF&#8201;» ci-dessous). Consultez la page [Comment étiqueter vos PDF avec l’outil Ordre de lecture](https://youtu.be/9SKRZ-BUqRQ).

### Espaces et sauts de ligne manquants

L’utilisation par l’auteur de caractères inappropriés pour les espaces où les sauts de ligne occasionne un regroupement des mots lors de la redistribution. Ce problème d’édition se produit fréquemment avec les documents PDF. Pour le vérifier, exportez-le en texte brut dans Foxit PDF Editor en naviguant à **Convertir** &gt; **Exporter** &gt; **Dans un autre format** &gt; **Vers du texte brut** ou sélectionnez tout le texte et faites un copier-coller dans un éditeur de texte brut, comme Notepad. Dans la version texte brut, manque-t-il des espaces et des sauts de ligne? Si c’est le cas, vérifiez vos paramètres d’exportation dans le programme d’édition. Ensuite, essayez une police dont les caractères sont plus espacés. Si vous avez réduit l’espacement des lettres ou des mots, retournez aux valeurs par défaut. Si le problème persiste, envisagez l’utilisation d’un autre outil d’édition.

### Tableaux

Les cellules de tableau doivent être associées aux en-têtes du tableau. Commencez par un tableau simple (sans cellules fusionnées) dans Microsoft Word. Assurez-vous qu’il est correctement structuré avec des en-têtes de tableau en vérifiant avec l’outil d’ordre de lecture susmentionné. Un exemple de tableau correctement structuré est présenté ici. Consultez [Comment rendre les tableaux plus accessibles dans les documents PDF](https://youtu.be/y1T6mr1Mltw).

## Autres outils de vérification d’accessibilité PDF

L’activation des fonctions d’accessibilité intégrées de Foxit PDF Editor, dans l'onglet **Accessibilité** &gt; **Configuration** &gt; **Assistant de configuration**, vous permet de vérifier manuellement l’ordre de lecture et d’autres problèmes structurels. Consultez [comment rendre facilement accessibles des documents PDF avec l’assistant d’action](https://youtu.be/FK2kWIe6xq0) pour plus d’information.

Vérifiez votre formulaire avec <a href="https://www.nvaccess.org/" hreflang="en">NVDA (un lecteur d’écran gratuit)<small> (en anglais seulement)</small></a> pour repérer rapidement les problèmes liés à l’ordre des balises et des tabulations. Tentez de remplir le formulaire en n’utilisant que vos oreilles et votre clavier. Cela vous donnera une idée de l’expérience des utilisateurs de lecteurs d’écran.

Outre le vérificateur d’accessibilité intégré de Foxit PDF Editor, un autre outil est le <a href="https://www.access-for-all.ch/en/pdf-accessibility-checker.html" hreflang="en">Vérificateur d’accessibilité PDF gratuit (PAC 3)<small> (en anglais seulement)</small></a>. Bien que ce programme ne vous permette pas, à lui seul, de remédier aux problèmes, il est possible que vous puissiez effectuer vos corrections dans l’outil d’édition au préalable (Word, InDesign, etc.). Il peut également cerner des problèmes que Foxit PDF Editor n’a pas su reconnaître.

## Ressources supplémentaires

- <a href="https://www.w3.org/TR/WCAG-TECHS/pdf.html" hreflang="en">Techniques PDF de W3C pour WCAG 2.0<small> (en anglais seulement)</small></a> - Vingt-trois techniques permettant de résoudre des infractions particulières au WCAG, principalement dans le cadre de formulaires et de tableaux (100 pages, 2016).
- <a href="https://webaim.org/techniques/foxit/" hreflang="en">WebAIM : Foxit and PDF Accessibility<small> (en anglais seulement)</small></a> - Un guide pour la création de PDF accessibles avec Foxit PDF Editor par WebAIM (4 pages, 2019).
- [Tutoriels vidéo pour Foxit PDF Editor](https://www.foxitsoftware.com/fr/support/tutorial/)
