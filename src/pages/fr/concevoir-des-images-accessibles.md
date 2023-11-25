---
title: Concevoir des images accessibles
layout: layouts/base.njk
description: Grâce à ce diagramme, vous apprendrez à faire le meilleur choix pour concevoir des images accessibles.
toggle: designing-accessible-images
---
<div class="row">
    <div class="col-md-10 col-xs-offset-1"><img src="/img/fr/introduction/image-accessible.jpg" class="img-responsive" alt="Une infographie sur la façon d'utiliser des images accessibles et d'utiliser le texte alternatif. Longue description ci-dessous" /></div>
</div>
<div class="col-md-10 col-xs-offset-1">
    <summary>Longue description</summary>
    <h2 class="mrgn-tp-0">L'objectif des images</h2>
    <p>Images informatives: Images qui représentent graphiquement des concepts et des informations, généralement des images, des photos et des illustrations. L'alternative textuelle doit être au moins une courte description transmettant l'information essentielle présentée par l'image.</p>
    <p>Images décoratives: Fournissez une alternative textuelle nulle (alt="") lorsque le seul but d'une image est d'ajouter une décoration visuelle à la page, plutôt que de transmettre des informations importantes pour la compréhension de la page.</p>
    <div class="row">
        <div>
            <ul class="lst-spcd">
                <li>Si c'est à des fins décoratives, nous utilisons alt="" ou CSS.</li>
                <li>Si c'est à des fins informatives, mais ajoute-t-il de nouvelles informations ?</li>
                <ul>
                    <li>Si non, il s'agit d'un élément décoratif. Nous utilisons alt="" ou CSS.</li>
                    <li>Si oui, quel type d'information ajoute-t-elle?</li>
                </ul>
                <li>S'il s'agit d'une information actionnable, nous utilisons alt="[label pour le lien]".</li>
                <li>S'il s'agit d'une information émotionnelle ou simple, nous utilisons alt="[description]".</li>
                <li>S'il s'agit d'une information complexe, nous utilisons alt="[description courte + emplacement de la description longue]".</li>
            </ul>
        </div>
    </div>
    <p>Pour plus d'informations, veuillez consulter le site <a hreflang="en" href="https://www.w3.org/WAI/tutorials/images/">W3.org</a> (en anglais seulement)</p>
</div>
