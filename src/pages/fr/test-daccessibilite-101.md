---
title: Test d’accessibilité 101
description: Nous encourageons tous ceux qui souhaitent créer du contenu accessible à utiliser des outils de test d’accessibilité automatisés. Ces outils aident les créateurs de contenu à développer leurs contenus en détectant les erreurs et en proposant des suggestions pour améliorer l’accessibilité de leur produit, de leur application ou de leur site Web. Cette page présente une liste d’outils de test d’accessibilité recommandés.
toggle: accessibility-testing-101
subject:
  - howTos
tags:
  - testYourProducts
toc: true
---

Veuillez noter que certains des outils de test d’accessibilité répertoriés nécessitent des autorisations administratives pour être installés sur votre appareil.

## Création d’un ensemble d’outils

### Outil : Extensions de navigateur WAVE

L’extension WAVE pour Chrome, Firefox et Edge vous permet d’évaluer le contenu web pour les problèmes d’accessibilité directement dans votre navigateur. Comme l’extension fonctionne entièrement dans votre navigateur web, aucune information n’est envoyée au serveur WAVE.

Bien que WAVE soit plus efficace lorsqu’il est utilisé par une personne connaissant bien l’accessibilité du web, les personnes qui ne sont pas des experts en accessibilité du web peuvent également en tirer profit.

Si vous ne connaissez pas WAVE, profitez de la <a href="https://youtu.be/ITUDiTgAZY0?si=zZN1yARdVlkk3v50">vidéo d’introduction à WAVE<small> (en anglais seulement)</small></a>.

Compatibilité des navigateurs:

- [WAVE pour le navigateur Edge sur Modules complémentaires Edge](https://microsoftedge.microsoft.com/addons/detail/wave-evaluation-tool/khapceneeednkiopkkbgkibbdoajpkoj?hl=fr-CA&gl=CA)
- [WAVE pour le navigateur Firefox sur Mozilla Add-ons](https://addons.mozilla.org/fr/firefox/addon/wave-accessibility-tool/)
- [WAVE pour le navigateur Chrome sur le Chrome Web Store](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

Documentation supplémentaire sur WAVE:

- <a href="https://wave.webaim.org/api/docs?format=html">Documentation WAVE (webaim.org)<small> (en anglais seulement)</small></a>
- <a href="https://wave.webaim.org/help">Aide WAVE (webaim.org)<small> (en anglais seulement)</small></a>

Trucs et astuces sur WAVE:

- <a href="https://webaim.org/blog/tips-for-getting-the-most-out-of-wave/">Conseils pour tirer le meilleur parti de WAVE<small> (en anglais seulement)</small></a>

La barre latérale de WAVE indique si WAVE a détecté des erreurs ou non. L’absence d’erreurs ne signifie **pas** que votre page est accessible ou conforme. Les **icônes rouges** indiquent les erreurs d’accessibilité qui doivent être corrigées. Les **icônes vertes** indiquent des caractéristiques d’accessibilité, c’est-à-dire des éléments qui améliorent l’accessibilité (bien qu’il faille les vérifier). Les autres icônes et indicateurs, en particulier les icônes d’alerte jaunes, mettent en évidence d’autres éléments qu’il convient d’examiner. WAVE met en évidence les informations sous-jacentes relatives à l’accessibilité d’une page afin qu’elles puissent être facilement évaluées dans leur contexte.

Styles et code:

WAVE permet de désactiver les feuilles de style en cascade (<abbr>CSS</abbr>) des pages. Les mises en page complexes basées sur les feuilles de style en cascade peuvent devenir difficiles à lire, en particulier après l’intégration des icônes WAVE, de sorte que la désactivation des styles peut simplifier la présentation de la page. La désactivation des styles vous permet également de voir l’ordre de lecture et de navigation sous-jacent; c’est-à-dire l’ordre dans lequel les utilisateurs, de clavier (seulement) et de lecteurs d’écran, accèdent à la page. Pour visualiser le code correspondant à une icône WAVE particulière, vous pouvez sélectionner l’onglet Code au bas de la page pour visualiser le balisage/DOM sous-jacent de votre page.

### Outil : Accessibility Insights for Web

« Accessibility Insights for Web » est une extension pour Chrome et Microsoft Edge qui aide les développeurs à trouver et à résoudre les problèmes d’accessibilité dans les applications et les sites Web.

L’outil prend en charge deux scénarios principaux:

- « FastPass » est un processus léger en deux étapes qui aide les développeurs à identifier les problèmes d’accessibilité courants et à fort impact en moins de cinq minutes.
  - Vérifications automatisées — l’outil vérifie automatiquement la conformité à environ 50 exigences en matière d’accessibilité.
  - Arrêts de tabulation — l’outil fournit des instructions claires, une automatisation partielle et une aide visuelle qui facilitent l’identification des problèmes d’accessibilité critiques liés à l’accès au clavier, tels que les arrêts de tabulation manquants, les pièges à clavier et l’ordre incorrect des tabulations.
- « Assessment » permet à toute personne ayant des compétences en HTML de vérifier qu’une application Web ou un site Web est conforme aux directives d’accessibilité au contenu web (<abbr>WCAG</abbr>) 2.1 niveau AA.
  - Contrôles automatisés — l’outil vérifie automatiquement la conformité à environ 50 exigences d’accessibilité.
  - Tests manuels — l’outil fournit des instructions étape par étape, des exemples et des conseils sur la manière de résoudre les problèmes pour environ 20 tests; de nombreux tests sont « assistés », ce qui signifie que l’outil identifie les instances de test ou fournit une aide visuelle.

Il s’agit d’un outil pour tous les niveaux, vous n’avez pas besoin de connaître l’accessibilité pour l’utiliser, il vous guidera à chaque étape.

Compatibilité des navigateurs:

- Pour le web:
  - [Ajouter à Chrome](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni)
  - [Ajouter à Edge](https://microsoftedge.microsoft.com/addons/detail/wave-evaluation-tool/khapceneeednkiopkkbgkibbdoajpkoj?hl=fr-CA&gl=CA)
- [Télécharger pour Windows](https://aka.ms/accessibilityinsights-windows/download)
- Pour Android:
  - <a href="https://aka.ms/accessibility-insights-for-android/downloads/Windows">Télécharger pour Windows<small> (en anglais seulement)</small></a>
  - <a href="https://aka.ms/accessibility-insights-for-android/downloads/MacOS">Télécharger sur MacOS<small> (en anglais seulement)</small></a>
  - [Télécharger sur Linux](https://aka.ms/accessibility-insights-for-android/downloads/Linux)

Documentation sur Accessibility Insights:

- <a href="https://accessibilityinsights.io/docs/web/overview/">Accessibility Insights pour le Web<small> (en anglais seulement)</small></a>
- <a href="https://accessibilityinsights.io/docs/windows/overview/">Accessibility Insights pour Windows<small> (en anglais seulement)</small></a>

Conseils et astuces:

- Commencez par regarder une <a href="https://www.youtube.com/watch?v=m1l7ghxOKF0">vidéo offrant une vue d’ensemble<small> (en anglais seulement)</small></a>
- Ou lisez un tutoriel:
  - <a href="https://accessibilityinsights.io/docs/web/getstarted/fastpass/">FastPass<small> (en anglais seulement)</small></a>
  - <a href="https://accessibilityinsights.io/docs/web/getstarted/assessment/">Assessment<small> (en anglais seulement)</small></a>

Raccourcis clavier:

- Augmentez votre productivité avec les <a href="https://accessibilityinsights.io/docs/web/reference/keyboard/">raccourcis clavier pour Accessibility Insights<small> (en anglais seulement)</small></a>

### Outil: LightHouse

Lighthouse est un outil automatisé à code source ouvert qui permet d’améliorer la qualité des pages web. Il peut être exécuté sur n’importe quelle page web, qu’elle soit publique ou qu’elle nécessite une authentification. Il propose des audits pour les performances, l’accessibilité, les applications web progressives, le référencement, etc. Un outil très utile pour les développeurs multimédias et les testeurs d’accessibilité du web.

Navigateurs:

- <a href="https://developer.chrome.com/docs/lighthouse/overview/#devtools">Exécuter Lighthouse dans Chrome DevTools<small> (en anglais seulement)</small></a>
- <a href="https://developer.chrome.com/docs/lighthouse/overview/#extension">Exécuter Lighthouse en tant qu’extension Chrome<small> (en anglais seulement)</small></a>
- [Comment utiliser Lighthouse dans Edge](https://learn.microsoft.com/fr-ca/microsoft-edge/devtools-guide-chromium/accessibility/lighthouse)

Documentation sur l’extension LightHouse:

- <a href="https://developer.chrome.com/docs/lighthouse/overview/">Lighthouse - Chrome Developers<small> (en anglais seulement)</small></a>
- [Outil Lighthouse - Microsoft Edge \| documentation pour développeurs](https://learn.microsoft.com/fr-ca/microsoft-edge/devtools-guide-chromium/lighthouse/lighthouse-tool)

Aide supplémentaire:

- Utilisez le <a href="https://googlechrome.github.io/lighthouse/viewer/">Lighthouse Viewer<small> (en anglais seulement)</small></a> pour afficher et partager des rapports en ligne.

## Aide et ressources supplémentaires

### Tests clavier et manuels de votre site

Outils automatisés et validateurs pour identifier les problèmes d’accessibilité :

- Valideur W3C
- Valideur CSS HTML
- axe DevTools

### Principes de base des tests au clavier

- Aller vers l’avant : utiliser la touche de tabulation
- Reculer : utiliser les touches Majuscule et Tabulation
- Activer quelque chose: utiliser la touche Entrée ou la barre d’espacement
- Pour cocher / décocher une case à cocher: utilisez la barre d’espacement
- Se déplacer dans la page et les listes déroulantes, modifier la sélection des boutons radio: utiliser les touches fléchées

Examinez ou testez votre site périodiquement pour vous assurer qu’il n’y a pas de nouvelles erreurs et qu’il reste accessible.

- Testez la navigation et l’interactivité de chaque page web en utilisant uniquement le clavier et des technologies d’assistance telles que JAWS, NVDA, ZoomText.
- Assurez-vous que les images contiennent un texte alternatif ou qu’elles sont marquées comme décoratives si aucune information importante ou utile n’est présentée aux utilisateurs.
  - Si une image fournit des informations importantes ou utiles, elle doit être accompagnée d’un texte alternatif approprié, ne dépassant pas 150 caractères. Si le contenu de l’image ne peut être expliqué dans cette limite, une description graphique doit figurer sous l’image.
- Utilisez la touche de tabulation entre les sections d’une page web pour s’assurer que le contenu suit un ordre significatif de haut en bas et de gauche à droite.
  - Veillez également à ce qu’une mise en évidence visible entoure tous les éléments pouvant faire l’objet d’une tabulation ou d’un focus.
- Veillez à ce que les utilisateurs ne rencontrent pas de « piège » lorsqu’ils utilisent le clavier.
- Vérifiez si vous disposez de liens de contournement permettant aux utilisateurs de sauter le contenu d’une page si des informations longues ou répétitives sont présentées sur chaque page.
  - Par exemple, les liens « Passer à la navigation principale », « Passer à l’en-tête » et « Passer au pied de page », en fonction de leur utilité sur la page.
- Testez tous les liens présentés sur chaque page pour vous assurer qu’ils fonctionnent (internes, externes, téléchargeables) et que chaque lien contient un texte unique.
  - Si un lien s’ouvre dans un nouvel onglet ou une nouvelle fenêtre du navigateur, il est recommandé d’informer les utilisateurs de cette action dans le texte du lien ou dans la balise de titre du lien, par exemple« S’ouvre dans un nouvel onglet ou une nouvelle fenêtre du navigateur".
- Veillez à ce que tous les éléments de formulaire tels que les boutons radio, les cases à cocher, les champs d’édition et les listes déroulantes soient correctement étiquetés.
  - Prévenir les erreurs et suggérer aux utilisateurs de corriger les erreurs de formulaire.
- Veillez à ce que les vidéos soient accompagnées de transcriptions descriptives et proposez des sous-titres codés que les utilisateurs peuvent activer ou désactiver.
- Veillez à ce que le contenu de la page s’adapte de façon harmonieuse à toutes les fenêtres de visualisation et soit utilisable avec un zoom de 400 %.
- S’assurer que le balisage HTML et CSS est correct en validant le code à l’aide d’un outil de validation tel que W3C Validator ou CSS HTML Validator.
- Effectuez des tests de performance sur différents réseaux, car il arrive que des contenus complexes (par exemple des images de grande taille ou des pages interactives et fonctionnelles) mettent du temps à se charger sur des réseaux plus lents.
- Désactivez le haut-parleur et le microphone et utilisez uniquement le clavier pour accéder à la page web et évaluez si l’expérience est la même. Êtes-vous en mesure de comprendre tout le contenu audio/vidéo et de participer à toutes les activités présentées sur la page sans aucune perte d’information?

### Ressources supplémentaires

- <a href="https://webaim.org/projects/million/">WebAIM Million<small> (en anglais seulement)</small></a>
- <a href="https://webaim.org/techniques/keyboard/">WebAIM: Accessibilité du clavier<small> (en anglais seulement)</small></a>
- <a href="https://webaim.org/resources/shortcuts/nvda">WebAIM: Raccourcis clavier pour NVDA<small> (en anglais seulement)</small></a>
- <a href="https://webaim.org/resources/shortcuts/jaws">WebAIM: Raccourcis clavier pour JAWS<small> (en anglais seulement)</small></a>
