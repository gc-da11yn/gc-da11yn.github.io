---
title: Designing accessible images
layout: layouts/base.njk
description: With this diagram, you will learn how to make the best choice for designing accessible images.
toggle: concevoir-des-images-accessibles
---
<div class="row">
    <div class="col-md-10 col-xs-offset-1"><img src="/img/en/introduction/accessible-image.jpg" class="img-responsive" alt="An infographic on how to use accessible images and use alternative text. Long description below" /></div>
</div>
<div class="col-md-10 col-xs-offset-1">
    <summary>Long Description</summary>
    <h2 class="mrgn-tp-0">The purpose of images</h2>
    <p>Informative images: Images that graphically represent concepts and information, typically pictures, photos and illustrations. The text alternative should be at least a short description conveying the essential information presented by the image.</p>
    <p>Decorative images: Provide a null text alternative (alt="") when the only purpose of an image is to add visual decoration to the page, rather than to convey information that it is important to understanding the page.</p>
    <div class="row">
        <div>
            <ul class="lst-spcd">
                <li>If it is for decorative purposes, we use alt="" or CSS.</li>
                <li>If it is for informative purposes, but does it add new info?</li>
                <ul>
                    <li>If not, it is for decorative purposes. We use alt="" or CSS.</li>
                    <li>If yes, what kind of info does it add?</li>
                </ul>
                <li>If it is for actionable purposes, we use alt="[label for the link]".</li>
                <li>If it is for emotional or simple purposes, we use alt="[description]".</li>
                <li>If it is for complex purposes, we use alt="[short description + location of the long description]".</li>
            </ul>
        </div>
    </div>
    <p>For more information, please visit <a href="https://www.w3.org/WAI/tutorials/images/">W3.org</a></p>
</div>
