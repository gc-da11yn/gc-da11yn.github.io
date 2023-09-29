---
title: Web Accessibility Checklist
layout: layouts/base.njk
description: Checklist to verify the web page content if it is accessible or not
toggle: liste-de-verification-pour-laccessibilite-web
---
<ul class="list-unstyled mrgn-tp-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Do not use a <code>&lt;table&gt;</code> for layout.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Do not use <code>&lt;br&gt;</code> tags, or &nbsp; to create whitespace. Use CSS instead.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>The visual presentation of text and images of text on all pages has a contrast ratio of at least 4.5:1.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>You need to be able to resize (ie: zoom in) up to 200%, without loss of content or functionality.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Ensure pages work on mobile devices (by changing the viewport size).</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>All functionality of the content is operable through a keyboard.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Web pages have unique titles that describe topic or purpose.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>The purpose of each link can be determined from the link text.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Headings must be meaningful and used to create a hierarchical structure. (Heading levels should not be skipped.).</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Focus is always visible when using keyboard.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>All form elements must have an associated label.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Language of the page and content must be programmatically determined.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>All pages that contain tables to convey relational data markup are using either <code><a href="https://webaim.org/techniques/tables/data#scope">scope</a></code> or <a href="https://webaim.org/techniques/tables/data#id"><code>id</code> with <code>headers</code></a>.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Use <a href="https://wet-boew.github.io/wet-boew/index-en.html"><abbr title="Web Experience Toolkit">WET</abbr></a>’s <a href="https://wet-boew.github.io/wet-boew/demos/formvalid/formvalid-en.html">form validation</a>.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>All pages must validate: Use the <a href="https://validator.w3.org/"> Markup Validation Service</a>.</li>
</ul>
