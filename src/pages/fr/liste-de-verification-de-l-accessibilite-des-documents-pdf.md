---
title: Liste de vérification de l’accessibilité des documents PDF
layout: layouts/base.njk
description: Vous trouverez ici différentes questions pour vous aider à savoir si votre document pdf est accessible ou non.
internalLinks: true
toggle: pdf-accessibility-checklist
subject:
  - howTos
tags:
  - createDocument
---

## Introduction

La liste de vérification de l’accessibilité des documents PDF vise à aider les développeurs de documents PDF d’Emploi et Développement social Canada (EDSC) à s’assurer que l’accessibilité est conforme aux normes [Règles pour l'accessibilité des contenus Web (WCAG) 2.1](http://www.w3.org/WAI/WCAG21/quickref/) (anglais seulement). Veuillez noter que la liste de vérification ne contient que des critères WCAG liés aux erreurs les plus courantes relevées dans les documents PDF.

Nous avons dressé une liste d’outils et de ressources pour aider les développeurs à vérifier l’accessibilité de leurs documents, ainsi que la liste de vérification de l’accessibilité des documents PDF qui établit 27 critères de réussite pertinents pour les documents PDF.

## Outils et ressources

    <li><a href="http://iservice.prv/fra/giti/catalogue/service_logiciels_applications/foxit_phantomPDF_business.shtml">Foxit
            PhantomPDF <i class="fas fa-external-link-square-alt"></i><span class="wb-inv">
               Lien interne</span></a>&nbsp;: Outil recommand&eacute; par EDSC pour cr&eacute;er des documents PDF
        accessibles. Les employ&eacute;s d&rsquo;EDSC peuvent obtenir le logiciel en remplissant le formulaire
        <a
            href="https://dialogue/grp/EWCS-SCEW/SiteAssets/SitePages/License%20Request%20Forms/Foxit%20PhantomPDF%20Business%20Request%20form.docx">Formulaire
            de demande d&rsquo;affaires Foxit PDF Editor  <i class="fas fa-external-link-square-alt"></i><span class="wb-inv">
                Lien interne</span></a> et en ouvrant un billet aupr&egrave;s d&rsquo;<a
            href="http://srmis-sigdi-iagent.prv/">InfoService national  <i class="fas fa-external-link-square-alt"></i><span class="wb-inv">
                Lien interne</span></a>. </li>
    <li><a href="http://esdc.prv/fr/dgiit/se/smle/cenw/outils/index-fra.shtml#colour">Outil Colour Contrast
            Analyzer  <i class="fas fa-external-link-square-alt"></i><span class="wb-inv">
                Lien interne</span></a>&nbsp;: Outil recommand&eacute; par EDSC pour v&eacute;rifier le contraste des couleurs;
        les employ&eacute;s d&rsquo;EDSC peuvent obtenir le logiciel en ouvrant un billet aupr&egrave;s
        d&rsquo;<a href="http://srmis-sigdi-iagent.prv/">InfoService national  <i class="fas fa-external-link-square-alt"></i><span class="wb-inv">
            Lien interne</span></a>.</li>

### Ressources permettant de rendre les documents PDF accessibles

- [Techniques relatives aux WCAG 2.1 en format PDF](http://www.w3.org/WAI/WCAG21/Techniques/#pdf) (anglais seulement)
- [Accessibilité des fichiers PDF Foxit PDF Editor](https://www.foxitsoftware.com/fr/solution/accessibility/)
- [Tutoriels didactiques PhantomPDF de Foxit](https://www.foxitsoftware.com/fr/support/tutorial/?from=foxit%20phantompdf_business&utm_source=client-app)
- [Foxit : Utilisez l’assistant d’action pour rendre automatiquement les PDF conformes à la norme 508](https://www.foxitsoftware.com/blog/use-action-wizard-to-automatically-make-pdfs-508-compliant/) (anglais seulement)
- [WebAIM : Accessibilité Foxit et PDF](https://webaim.org/techniques/foxit/) (anglais seulement)
- [Choses à faire et à ne pas faire dans la conception accessible](../fr/index.html)

## Instructions pour la liste de vérification

Veuillez remplir la liste de vérification de l’accessibilité des documents PDF. Cela permet de s’assurer que les erreurs courantes en matière d’accessibilité sont corrigées.

Veuillez noter que les employés d’EDSC devront remplir cette liste de vérification avant de demander une vérification de l’accessibilité au Bureau de l’accessibilité des TI.

## Information de contact

Pour toute autre question ou commentaire concernant la liste de vérification de l’accessibilité des documents PDF, ou pour demander une vérification de l’accessibilité, veuillez remplir un nouveau [formulaire de demande](https://a11yrmt.ca/newrequest-fr.php).

## Liste de vérification

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>1 &ndash; Le
        titre du PDF est clairement précisé et saisi correctement au moyen de l’entrée de titre. Vous le
        trouverez dans le répertoire interne du PDF.
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>2 &ndash; La
        langue du PDF est définie dans le champ de saisie Lang (anglais / français).</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>3 &ndash; La
        langue d’un passage, d’une phrase ou d’un mot qui diffère de la langue du PDF est spécifiée dans la
        langue appropriée. </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>4 &ndash; Le
        document comporte des signets pour faciliter la navigation.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>5 &ndash; Il y a
        des en-têtes et des pieds de page au besoin pour que les utilisateurs sachent où ils se trouvent dans le
        PDF en tout temps.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>6 &ndash; Les
        pages sont clairement identifiées. P. ex. 1 – 2 – 3 / A – B – C, etc.
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>7 &ndash;
        L’ordre de lecture du PDF est correct.
        Les lecteurs d’écran lisent le contenu dans l’ordre logique.

    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>8
        &ndash; En utilisant la touche de tabulation, l’utilisateur peut naviguer dans le PDF et accéder à tous
        les champs de saisie et les liens, dans le bon ordre.
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>9
        &ndash; Les titres de page et les sous-titres sont inclus au besoin.
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>10
        &ndash; Les tableaux sont étiquetés correctement afin qu’ils soient reconnus par la technologie
        d’assistance.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>11 &ndash; Les
        listes de divers éléments connexes sont étiquetées correctement, comme des listes et des éléments de
        liste. </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>12 &ndash; Les
        images qui n’ajoutent aucune valeur au contenu et qui ne contiennent aucun texte sont marquées comme
        étant décoratives et ignorées par les lecteurs d’écran.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>13
        &ndash; Les éléments visuels comprennent une description écrite démontrant le contexte de l’élément
        visuel. Le texte de remplacement du visuel explique où se trouve la description.
        Les éléments visuels qui ne contiennent pas de description écrite dans le corps du document PDF ont un
        texte alternatif descriptif.
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>14
        &ndash; Lorsque vous utilisez des couleurs, des formes ou des aides visuelles pour transmettre un
        message, il existe d’autres descripteurs écrits pour transmettre le message.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>15
        &ndash; Le ratio de contraste du texte et des images de texte est d’au moins 4,5:1, sauf pour les gros
        caractères (au-dessus de la taille 14 gras ou au-dessus de la taille 18), qui exigent un ratio de
        contraste de 3:1.
        Ainsi, la palette de couleurs sera optimale pour les personnes ayant une déficience visuelle ou les
        personnes aveugles.
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>16 &ndash; Les
        liens sont clairement indiqués et contiennent du texte descriptif. </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>17 &ndash; Les
        options de saisie de formulaire sont clairement indiqués et décrits.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>18 &ndash; Les
        boutons radio qui permettent une sélection – ils sont clairement indiqués en cercles.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>19 &ndash; Les
        cases à cocher qui permettent des sélections multiples – elles sont clairement indiquées comme des
        carrés.
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>20 &ndash; Les
        liens sont clairement marqués d’un texte bleu souligné.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>21 &ndash; Les
        contrôles des formulaires sont bien affichés et indiqués sur le formulaire pour que les utilisateurs
        puissent y accéder facilement et s’identifier.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>22 &ndash; Tous
        les champs comportent un nom, un rôle et une valeur appropriés pour les utilisateurs.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>23 &ndash; Tous
        les champs de texte comportent un texte descriptif connexe.
        Cela permet à la technologie d’assistance de reconnaître et de comprendre les différents champs de
        formulaire.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>24 &ndash;
        Lorsqu’un utilisateur n’a pas entré correctement l’information dans un champ, un indicateur d’erreur
        clair lui signale l’erreur de manière visuelle ou sonore, ainsi que la façon de la corriger et de
        remplir correctement le champ.
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>25 &ndash;
        Le bouton Soumettre est clairement marqué pour que les utilisateurs sachent comment soumettre le
        formulaire qu’ils remplissent.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>26 &ndash;
        Meilleure pratique : lorsque vous utilisez un acronyme, assurez-vous qu’il est entièrement défini la
        première fois qu’il est mentionné dans le document PDF.
        P. ex. Emploi et Développement social Canada (EDSC)
    </li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>27 &ndash;
        Meilleure pratique : la police est sans empattement et est couramment utilisée (pour améliorer la
        lisibilité visuelle).

</ul>

## Glossaire

**Texte alternatif :** Texte associé à une image qui transmet la même information essentielle que l’image.

**La technologie d’assistance :** Tout outil ou appareil léger, moyen ou de haute technologie qui aide les personnes handicapées à accomplir leurs tâches avec plus de facilité ou d’autonomie.

**Signet :** Type de lien avec un texte représentatif qui facilite la navigation dans les documents.

**Texte descriptif :** Texte qui décrit le contenu d’un champ de formulaire à un utilisateur du lecteur d’écran. Il s’agit également d’une « étiquette ».

**Ordre de lecture :** Ceci est l’ordre dans lequel les technologies d’assistance, comme les lecteurs d’écran, présentent le contenu en format PDF. Les étiquettes dans l’arborescence des étiquettes déterminent cet ordre.

**En-têtes et pieds de page fixes :** Information répétée au haut ou au bas des pages d’un document. Ils contiennent souvent des renseignements comme le numéro de page, le nom du document, etc.

**Lecteur d’écran :** Logiciel utilisé pour permettre la lecture du contenu et la navigation à l’écran à l’aide d’une sortie vocale ou en braille. Utilisé principalement par les personnes aveugles ou malvoyantes.

**Balises :** Représentation textuelle structurée du contenu PDF auquel ont accès les lecteurs d’écran pour lire le document à haute voix.

<a class="btn btn-primary"
    href="{{ rootPath }}docs/Liste_de_verification_de_laccessibilite_des_documents_PDF.pdf"
    role="button">Télécharger la page (PDF, 355 Ko)</a>
