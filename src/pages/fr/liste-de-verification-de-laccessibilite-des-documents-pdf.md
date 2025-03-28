---
title: Liste de vérification de l’accessibilité des documents PDF
description: Vous trouverez ici différentes questions pour vous aider à savoir si votre document pdf est accessible ou non.
internalLinks: true
toggle: pdf-accessibility-checklist
subject:
  - howTos
tags:
  - createDocument
hasDocument:
  filename: "liste_accessibilite_pdf.docx"
  sizeNumber: 12.5
  sizeUnit: "KB"
  type: "word"
---

<div class="row">
<div class="col-sm-6">
<a class="gc-dwnld-lnk" href="{{ rootPath }}docs/Liste_de_verification_de_laccessibilite_des_documents_PDF.pdf" download="{{ title | stripTagsSlugify }}">
<div class="well gc-dwnld">
<div class="row">
<div class="col-xs-4">
<p><img class="img-responsive thumbnail gc-dwnld-img" src="{{ rootPath }}img/doc.png" alt="" /></p>
</div>
<div class="col-xs-8">
<p class="gc-dwnld-txt">
<span>{{ title | safe }}</span>
<span class="gc-dwnld-info">(<i class="fas fa-file-pdf mrg-rght-sm" aria-hidden="true"></i> <abbr lang="en" title="Portable Document Format">PDF</abbr>, 355 <abbr title="KiloByte">KB</abbr>)</span>
</p>
</div>
</div>
</div>
</a>
</div>
</div>

## Introduction

La liste de vérification de l’accessibilité des documents PDF vise à aider les développeurs de documents PDF d’Emploi et Développement social Canada (<abbr>EDSC</abbr>) à s’assurer que l’accessibilité est conforme aux normes [Règles pour l’accessibilité des contenus Web 2.1](https://www.w3.org/Translations/WCAG21-fr/). Veuillez noter que la liste de vérification ne contient que des critères WCAG liés aux erreurs les plus courantes relevées dans les documents PDF.

Nous avons dressé une liste d’outils et de ressources pour aider les développeurs à vérifier l’accessibilité de leurs documents, ainsi que la liste de vérification de l’accessibilité des documents PDF qui établit 27 critères de réussite pertinents pour les documents PDF.

## Outils et ressources

-[Foxit PhantomPDF Lien interne](http://iservice.prv/fra/giti/catalogue/service_logiciels_applications/foxit_phantomPDF_business.shtml) : Outil recommandé par EDSC pour créer des documents PDF accessibles. Les employés d’EDSC peuvent obtenir le logiciel en remplissant le formulaire [Formulaire de demande d’affaires Foxit PDF Editor Lien interne](https://dialogue/grp/EWCS-SCEW/SiteAssets/SitePages/License%20Request%20Forms/Foxit%20PhantomPDF%20Business%20Request%20form.docx) et en ouvrant un billet auprès d’[InfoService national Lien interne](http://srmis-sigdi-iagent.prv/).
-[Outil Colour Contrast Analyzer Lien interne](http://esdc.prv/fr/dgiit/se/smle/cenw/outils/index-fra.shtml#colour) : Outil recommandé par EDSC pour vérifier le contraste des couleurs; les employés d’EDSC peuvent obtenir le logiciel en ouvrant un billet auprès d’[InfoService national Lien interne](http://srmis-sigdi-iagent.prv/).

### Ressources permettant de rendre les documents PDF accessibles

- <a href="http://www.w3.org/WAI/WCAG21/Techniques/#pdf">Techniques relatives aux WCAG 2.1 en format PDF<small> (en anglais seulement)</small></a>
- [Accessibilité des fichiers PDF Foxit PDF Editor](https://www.foxitsoftware.com/fr/solution/accessibility/)
- [Tutoriels didactiques PhantomPDF de Foxit](https://www.foxitsoftware.com/fr/support/tutorial/?from=foxit%20phantompdf_business&utm_source=client-app)
- <a href="https://www.foxitsoftware.com/blog/use-action-wizard-to-automatically-make-pdfs-508-compliant/">Foxit : Utilisez l’assistant d’action pour rendre automatiquement les PDF conformes à la norme 508<small> (en anglais seulement)</small></a>
- <a href="https://webaim.org/techniques/foxit/">WebAIM : Accessibilité Foxit et PDF<small> (en anglais seulement)</small></a>
- [Choses à faire et à ne pas faire dans la conception accessible]({{ rootPath }}fr/a-faire-et-a-ne-pas-faire-pour-developper-des-cours-en-ligne)

## Instructions pour la liste de vérification

Veuillez remplir la liste de vérification de l’accessibilité des documents PDF. Cela permet de s’assurer que les erreurs courantes en matière d’accessibilité sont corrigées.

Veuillez noter que les employés d’EDSC devront remplir cette liste de vérification avant de demander une vérification de l’accessibilité au Bureau de l’accessibilité des TI.

## Information de contact

Pour toute autre question ou commentaire concernant la liste de vérification de l’accessibilité des documents PDF, ou pour demander une vérification de l’accessibilité, veuillez remplir un nouveau [formulaire de demande](https://a11yrmt.ca/newrequest-fr.php).

## Liste de vérification

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>1 &ndash; Le itre du PDF est clairement précisé et saisi correctement au moyen de l’entrée de titre. Vous le rouverez dans le répertoire interne du PDF.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>2 &ndash; La angue du PDF est définie dans le champ de saisie Lang (anglais / français).</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>3 &ndash; La angue d’un passage, d’une phrase ou d’un mot qui diffère de la langue du PDF est spécifiée dans la angue appropriée. </li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>4 &ndash; Le ocument comporte des signets pour faciliter la navigation.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>5 &ndash; Il y a es en-têtes et des pieds de page au besoin pour que les utilisateurs sachent où ils se trouvent dans le DF en tout temps.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>6 &ndash; Les ages sont clairement identifiées. P. ex. 1 – 2 – 3 / A – B – C, etc.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>7 &ndash; L’ordre de lecture du PDF est correct. es lecteurs d’écran lisent le contenu dans l’ordre logique.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>8 &ndash; En utilisant la touche de tabulation, l’utilisateur peut naviguer dans le PDF et accéder à tous es champs de saisie et les liens, dans le bon ordre.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>9 &ndash; Les titres de page et les sous-titres sont inclus au besoin.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>10 &ndash; Les tableaux sont étiquetés correctement afin qu’ils soient reconnus par la technologie ’assistance.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>11 &ndash; Les istes de divers éléments connexes sont étiquetées correctement, comme des listes et des éléments de iste. </li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>12 &ndash; Les mages qui n’ajoutent aucune valeur au contenu et qui ne contiennent aucun texte sont marquées comme tant décoratives et ignorées par les lecteurs d’écran.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>13 &ndash; Les éléments visuels comprennent une description écrite démontrant le contexte de l’élément isuel. Le texte de remplacement du visuel explique où se trouve la description. es éléments visuels qui ne contiennent pas de description écrite dans le corps du document PDF ont un exte alternatif descriptif.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>14 &ndash; Lorsque vous utilisez des couleurs, des formes ou des aides visuelles pour transmettre un essage, il existe d’autres descripteurs écrits pour transmettre le message.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>15 &ndash; Le ratio de contraste du texte et des images de texte est d’au moins 4,5:1, sauf pour les gros aractères (au-dessus de la taille 14 gras ou au-dessus de la taille 18), qui exigent un ratio de ontraste de 3:1. insi, la palette de couleurs sera optimale pour les personnes ayant une déficience visuelle ou les ersonnes aveugles.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>16 &ndash; Les iens sont clairement indiqués et contiennent du texte descriptif. </li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>17 &ndash; Les ptions de saisie de formulaire sont clairement indiqués et décrits.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>18 &ndash; Les outons radio qui permettent une sélection – ils sont clairement indiqués en cercles.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>19 &ndash; Les ases à cocher qui permettent des sélections multiples – elles sont clairement indiquées comme des arrés.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>20 &ndash; Les iens sont clairement marqués d’un texte bleu souligné.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>21 &ndash; Les ontrôles des formulaires sont bien affichés et indiqués sur le formulaire pour que les utilisateurs uissent y accéder facilement et s’identifier.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>22 &ndash; Tous es champs comportent un nom, un rôle et une valeur appropriés pour les utilisateurs.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>23 &ndash; Tous es champs de texte comportent un texte descriptif connexe. ela permet à la technologie d’assistance de reconnaître et de comprendre les différents champs de ormulaire.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>24 &ndash; orsqu’un utilisateur n’a pas entré correctement l’information dans un champ, un indicateur d’erreur lair lui signale l’erreur de manière visuelle ou sonore, ainsi que la façon de la corriger et de emplir correctement le champ.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>25 &ndash; Le bouton Soumettre est clairement marqué pour que les utilisateurs sachent comment soumettre le ormulaire qu’ils remplissent.</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>26 &ndash; Meilleure pratique : lorsque vous utilisez un acronyme, assurez-vous qu’il est entièrement défini la remière fois qu’il est mentionné dans le document PDF. . ex. Emploi et Développement social Canada (<abbr>EDSC</abbr>)</li>
<li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>27 &ndash; Meilleure pratique : la police est sans empattement et est couramment utilisée (pour améliorer la isibilité visuelle).
</ul>

## Glossaire

<dl>
<dt>Texte alternatif :</dt>
<dd>Texte associé à une image qui transmet la même information essentielle que l’image.</dd>
<dt>La technologie d’assistance :</dt>
<dd>Tout outil ou appareil léger, moyen ou de haute technologie qui aide les personnes handicapées à accomplir leurs tâches avec plus de facilité ou d’autonomie.</dd>
<dt>Signet :</dt>
<dd>Type de lien avec un texte représentatif qui facilite la navigation dans les documents.</dd>
<dt>Texte descriptif :</dt>
<dd>Texte qui décrit le contenu d’un champ de formulaire à un utilisateur du lecteur d’écran. Il s’agit également d’une « étiquette ».</dd>
<dt>Ordre de lecture :</dt>
<dd>Ceci est l’ordre dans lequel les technologies d’assistance, comme les lecteurs d’écran, présentent le contenu en format PDF. Les étiquettes dans l’arborescence des étiquettes déterminent cet ordre.</dd>
<dt>En-têtes et pieds de page fixes :</dt>
<dd>Information répétée au haut ou au bas des pages d’un document. Ils contiennent souvent des renseignements comme le numéro de page, le nom du document, etc.</dd>
<dt>Lecteur d’écran :</dt>
<dd>Logiciel utilisé pour permettre la lecture du contenu et la navigation à l’écran à l’aide d’une sortie vocale ou en braille. Utilisé principalement par les personnes aveugles ou malvoyantes.</dd>
<dt>Balises :</dt>
<dd>Représentation textuelle structurée du contenu PDF auquel ont accès les lecteurs d’écran pour lire le document à haute voix.</dd>
</dl>

