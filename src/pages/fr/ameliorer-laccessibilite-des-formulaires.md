---
title: Améliorer l’accessibilité des formulaires
description: Dans cette section, vous trouverez les étapes essentielles pour le développement d’un formulaire accessible.
subject:
  - howTos
tags:
  - createForms
toggle: find-out-how-to-make-accessible-digital-forms
internalLinks: true
---

## Le format de formulaire le plus accessible: HTML

HTML est le meilleur et le plus flexibles. Lorsqu’ils sont codés correctement, HTML offrent les meilleures caractéristiques en matière d’accessibilité, notamment:

- **Étiquettes programmatiques :** L’association entre les éléments du formulaire et leurs étiquettes répond aux technologies d’adaptation. Par exemple, un lecteur d’écran annoncera l’étiquette de champ du formulaire lorsque le champ est ciblé et un utilisateur de reconnaissance vocale pourra émettre une commande à l’aide de l’étiquette (p. ex. « Allez au champ du mot de passe »).
- **Adaptabilité :** La présentation peut être modifiée en fonction des exigences de l’utilisateur relativement à la police et à la couleur. La capacité de « redistribution » du HTML signifie que le formulaire pourra être utilisé à un zoom élevé ou sur de petits écrans (p. ex des appareils mobiles).
- **Regroupement des éléments :** Les boutons radio, les cases à cocher, etc. peuvent être accompagnés d’une question (« légende ») programmatiquement associée à un ensemble de réponses connexes (« champs »).
- **Validation :** JavaScript peut être utilisé pour valider les entrées et fournir des messages d’erreur de façon flexibles et accessible.

Pour les sites Web utilisant la Boîte à outils de l’expérience Web, veuillez suivre le [Guide de conception de la Boîte à outils de l’expérience Web](https://wet-boew.github.io/wet-boew-styleguide/design/forms-fr.html) pour créer un formulaire HTML accessible.

## Facile et accessible : un document Word simple

Les documents Microsoft Word (sans champs de formulaire) sont le deuxième meilleur outil pour créer des formulaires accessibles. On peut adapter un document Word comme on le fait pour un document HTML afin de répondre à des besoins particuliers de l’utilisateur (p. ex. la taille de la police peut être augmentée). Ce type de document peut constituer un bon choix pour l’accessibilité malgré ses limites. Le document devrait être structurer de façon simple, avec les questions et les réponses sous une seule colonne, qui comprends aussi un espace vide sous chaque question pour les réponses. Toutefois, dans un document Word simple, vous ne pourrez pas inclure d’éléments de formulaire, comme des cases à cocher ou un moyen automatisé de validation pour s’assurer que les champs requis ont été remplis. La protection du contenu que vous ne voulez pas modifier (comme les questions) peut rendre l’accès à ce contenu plus difficile pour les utilisateurs de la technologie adaptée. Si vous respectez ces limites, un document Word simple pourrait bien être tout ce dont vous avez besoin pour recueillir de l’information. Il s’agit à la fois du format le plus facile à créer et le plus facile à adapter aux besoins particuliers des utilisateurs.

## Non recommandé : un document Word complexe

Dans Microsoft Word, si vous utilisez des éléments de formulaire intégrés, comme les cases à cocher, le formulaire deviendra inaccessible. Pour en savoir plus sur les raisons de ces limites, consultez <a href="https://accessible-digital-documents.com/blog/you-cant-make-microsoft-word-forms-accessible-enough/">Les limites d’accessibilité des formulaires Microsoft Word <span lang="fr">(en anglais seulement)</span></a>. Microsoft a même caché ces fonctions dans les versions récentes de Word sous « anciens outils ». Dans un document Word, les champs de formulaire sont difficiles à atteindre à l’aide d’un clavier et ne comportent pas d’associations d’étiquettes explicites. Cela entraîne des difficultés pour les utilisateurs de technologies adaptées. Par exemple, l’utilisateur d’un lecteur d’écran devra s’éloigner du champ du formulaire afin de trouver l’étiquette correspondante – un problème aggravé par les difficultés de navigation à l’aide du clavier et d’accès au contenu protégé.

## Difficile et semi-accessible : le format PDF

Le format de document portable (<abbr>PDF</abbr>) est le format le plus couramment utilisé pour les formulaires au sein du gouvernement du Canada. C’est aussi l’un des formats les plus difficiles à rendre accessibles. Pour préserver le formatage lors de l’impression du formulaire, une grande partie de la présentation est « programmée » dans le fichier. Ceci limite considérablement l’adaptabilité du formulaire lorsqu’un utilisateur le remplit par voie électronique. Par exemple, la plupart des formulaires PDF ne sont pas reformatés avec succès lorsqu’e l’espace d’affichage est plus petit, ce qui en rend la lecture plus difficile sur des appareils mobiles ou pour des utilisateurs ayant une déficience visuelle. Les préférences des utilisateurs en matière de couleurs et de polices ne sont que rarement reflétées. Il est également difficile d’adapter un document PDF en d’autres formats, comme les gros caractères ou le braille.

Les formulaires PDF remplissable sont fréquemment utilisés parce qu’il offre plusieurs caractéristiques similaires à celles des formulaires HTML, soit des éléments de formulaire comme des cases à cocher, des étiquettes programmatiques et même la validation JavaScript. Si vous ne pouvez pas utiliser un formulaire HTML, mais que vous avez besoin de ces fonctions, prenez des mesures pour vous assurer que votre PDF soit aussi accessible que le format le permet.

### Créer un formulaire PDF

Bien qu’il existe des outils spécifiques pour créer des formulaires PDF (p. ex. Adobe LiveCycle), vous pouvez utiliser Microsoft Word comme point de départ pour créer un formulaire PDF (voir [Créer des fichiers PDF accessibles](https://support.microsoft.com/fr-fr/office/cr%C3%A9er-des-fichiers-pdf-accessibles-064625e0-56ea-4e16-ad71-3aa33bb4b7ed)). Ne créez pas les champs de formulaire dans Word. Laissez plutôt des espaces blancs pour les créer dans l’éditeur PDF (p. ex. Acrobat Pro, Foxit PDF Editor).

Premièrement, le document Word doit être lui-même accessible. En plus de suivre les lignes directrices générales concernant l’accessibilité du document, évitez les erreurs communes de conception de formulaires:

1. N’utilisez pas de tableaux pour la présentation visuelle.
    1. Utilisez plutôt l’ordre linéaire, qui est l’option la plus simple et la plus accessible, où chaque champ de formulaire sera sur une nouvelle ligne.
    2. Si vous souhaitez un style visuel sur « plusieurs colonnes », vous pouvez le faire à l’aide de tabulations ou de colonnes. Vous pouvez utiliser des styles personnalisés pour créer des encadrés. N’utilisez pas de zones de texte.
2. Des titres devraient être utilisés pour séparer les différentes sections afin de faciliter la navigation dans le formulaire.
    1. Notez que les titres ne fonctionneront qu’à l’extérieur d’un tableau.

Une fois que le modèle de formulaire a été créé en Word pour être le plus accessible possible, exportez-le en format PDF. Assurez-vous que les options sont sélectionnées pour créer, dans le PDF, des signets à partir des titres ainsi que des balises.

Vous devrez ensuite créer les champs de formulaire dans le logiciel PDF. Veuillez consulter ce [guide d’Adobe sur la création de formulaires accessibles dans Acrobat Pro DC](https://www.adobe.com/accessibility/products/acrobat/creating-accessible-forms.html). Il est très important que vous indiquiez explicitement en tant qu’« infobulles » les étiquettes des champs de formulaire. Voir aussi les [tutoriels vidéo](https://www.foxitsoftware.com/fr/support/tutorial/) et les [guides d’utilisation](https://www.foxitsoftware.com/fr/support/usermanuals.php) de Foxit PDF Editor.

## Signatures électroniques

Examinez attentivement les exigences relatives aux signatures. Le Secrétariat du Conseil du Trésor du Canada a publié un document intitulé [Orientation du gouvernement du Canada sur l’utilisation des signatures électroniques](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/securite-confidentialite-ligne/orientation-gouvernement-canada-utilisation-signatures-electroniques.html). Souvent, le fait de demander à l’utilisateur de taper son nom sur une ligne ou d’insérer une image de signature suffit pour un document Word ou un PDF. La vérification de l’identité s’effectue lorsque le document est envoyé en pièce jointe par courriel. Pour un formulaire HTML, le fait de demander à l’utilisateur de taper son nom et de cocher une case pour confirmer son identité peut également être suffisant.

Lorsqu’un niveau de sécurité accru est requis, une signature numérique peut être utilisée que ce soit dans un document PDF ou Word. Vous aurez besoin de votre clé Entrust pour signer un document de façon électronique. Pour plus de renseignements, consultez le <a href="https://wiki.gccollab.ca/images/5/57/TCDS_EN_HOWTO.DOCX" download>Guide de l’utilisateur technique des signatures numériques de Transports Canada <span lang="fr">(en anglais seulement)</span><span class="fas fa-external-link-square-alt mrgn-lft-sm mrgn-rght-sm" aria-hidden="true"></span><span class="wb-inv"> Lien interne</span>(<i class="fas fa-file-word mrg-rght-sm" aria-hidden="true"></i> <abbr title="Document Microsoft Word">Word</abbr>, 1.1 <abbr title="méga-octet">mo</abbr>)</a>.
