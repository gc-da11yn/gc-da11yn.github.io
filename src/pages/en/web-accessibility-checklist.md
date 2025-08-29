---
title: Web Accessibility Checklist
description: Checklist to verify the web page content if it is accessible or not.
toggle: liste-de-verification-pour-laccessibilite-web
role:
  - qaAutomated
  - qaManual
subject:
- howTos
tags:
- testYourProducts
---

<ul class="list-unstyled mrgn-tp-lg">
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Informative images have short, descriptive alt text and all decorative images have empty alt attributes <code>&lt;alt=""&gt;</code>.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Headings must be meaningful and used to create a hierarchical structure (heading levels must not be skipped).</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Layout does not use <code>&lt;table&gt;</code>.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>All pages that contain tables to convey relational data markup are using either <a href="https://webaim.org/techniques/tables/data#scope"><code>scope</code></a> or <a href="https://webaim.org/techniques/tables/data#id"><code>id</code> with <code>headers</code></a>.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Items of information and definitions are properly structured as ordered <code>&lt;ol&gt;</code>, unordered <code>&lt;ul&gt;</code> or definitions lists <code>&lt;dl&gt;</code>.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>The reading order of the page is logical and intuitive.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>The visual presentation of text and images of text on all pages has a contrast ratio of at least 4.5:1.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Users are able to resize (for example, zoom in) up to 200%, without loss of content or functionality</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Page content reflows on mobile devices (by changing the viewport size, 320px and up) as zoom increases up to 400%.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Interactive elements (links, buttons, menus, expand and collapse toggles, etc) always receive focus when using keyboard.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Static content (like headings, paragraphs, list items, etc) should not receive focus by default when using keyboard.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Web pages have unique titles that describe topic or purpose.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>The purpose of each link can be determined from the link text.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>The language of the page and content is programmatically determined.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>All form elements have an associated <code>label</code>.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Refer to the <a href="https://wet-boew.github.io/wet-boew/demos/formvalid/formvalid-en.html">WET form validation</a> page for generic validation and error message handling for Web forms.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span><code>&lt;br&gt;</code> tags are not used to create whitespace; CSS is used instead.</li>
  <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Use the <a href="https://validator.w3.org/">W3C Markup Validation Service</a> to validate page markup.</li>
</ul>
