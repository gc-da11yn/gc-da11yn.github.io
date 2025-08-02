---
title: Microsoft document compliance checklist
description: Here you can find different questions to help you to know if your Microsoft 365 document is accessible or not.
toggle: liste-de-verification-de-la-conformite-des-documents-microsoft
subject:
  - howTos
tags:
  - createDocument
---

<!-- <div class="row">
<div class="col-sm-6">
<a class="gc-dwnld-lnk" href="{{ rootPath }}docs/MSDocument_COMPLIANCE_CHECKLIST.docx" download="{{ title | stripTagsSlugify }}">
<div class="well gc-dwnld">
<div class="row">
<div class="col-xs-4">
<p><img class="img-responsive thumbnail gc-dwnld-img" src="{{ rootPath }}img/doc.png" alt="" /></p>
</div>
<div class="col-xs-8">
<p class="gc-dwnld-txt">
<span>{{ title | safe }}</span>
<span class="gc-dwnld-info">(<i class="fas fa-file-word mrg-rght-sm" aria-hidden="true"></i> <abbr title="Microsoft Word Document">Word</abbr>, 56 <abbr title="KiloByte">KB</abbr>)</span>
</p>
</div>
</div>
</div>
</a>
</div>
</div> -->

Below are questions that will help you establish if your Microsoft 365 document is accessible. We provide the Success Criteria in reference with WCAG 2.1: [How to Meet WCAG - Quick Reference](http://www.w3.org/WAI/WCAG21/quickref/) and the [Canada.ca Content Style Guide](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-style-guide.html).

Remember to answer NA (not applicable) if a question is not relevant to your document. For example, there is no table of content in Excel documents.

If you answer ‘No’ to one of the following questions, then your document IS NOT accessible.

## General

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are document Properties filled out properly (title, author, subject)? (<a href="https://www.w3.org/TR/WCAG22/#page-titled">2.4.2: Page Titled</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the language of the document properly set? (<a href="https://www.w3.org/TR/WCAG22/#language-of-page">3.1.1: Language of Page</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the document free from content such as comments, track changes, and highlight? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the order of the content accurate and logical (instructions or introduction first)? (<a href="https://www.w3.org/TR/WCAG22/#meaningful-sequence">1.3.2: Meaningful Sequence</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the document free from electronically fillable forms? (<a href="https://www.w3.org/TR/WCAG22/#labels-or-instructions">3.3.2: Labels or Instructions</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Can all the text be resized and still be considered readable when magnified to 200%? (<a href="https://www.w3.org/TR/WCAG22/#resize-text">1.4.4: Resize Text</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Does the readability grade level meet the target audience: up to grade 8 for public audience and up to grade 10 for internal to ESDC?</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are all acronyms provided in full words (or spelled out) the first time they are used in the document? (<a href="https://www.w3.org/TR/WCAG22/#abbreviations">3.1.4: Abbreviations</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the spacing between lines of text a minimum of 1.5? (<a href="https://www.w3.org/TR/WCAG22/#text-spacing">1.4.12: Text Spacing</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the text free of any tabs or spaces to align or centre the text? Use the feature indent and spacing of the paragraph instead.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the text aligned left or right, and never justified (aligned on both sides)?</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the text free of empty new lines or hard returns to create space between the paragraphs? Use page break or before and after paragraph option instead.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Use italics only as recommended by the Canada.ca Content Style Guide.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Use Strong paragraph style text and only for certain words and short phrases not full sentences or paragraphs.</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Use only sans-serif styles like Verdana, Tahoma, Arial, Helvetica.</li>
</ul>

## Colour

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Does any information conveyed with color have a non-color method for understanding (is the information available when you remove the colors)? (<a href="https://www.w3.org/TR/WCAG22/#use-of-color">1.4.1: Use of Color</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Do all non-text objects like graphs or drawings (with the exception of logos and photographs) have a contrast ratio of 3:1 or greater? (<a href="https://www.w3.org/TR/WCAG22/#contrast-minimum">1.4.3: Contrast (Minimum)</a>)</li>
</ul>

## Links

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are links identified using the Hyperlink paragraph style? (<a href="https://www.w3.org/TR/WCAG22/#use-of-color">1.4.1: Use of Color</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Do hyperlinks provide link text that identifies the purpose of the link without needing additional context? (<a href="https://www.w3.org/TR/WCAG22/#link-purpose-in-context">2.4.4: Link Purpose</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Does generic link text have sufficient context (not using the words Link or click here)? (<a href="https://www.w3.org/TR/WCAG22/#link-purpose-in-context">2.4.4: Link Purpose (In Context)</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are all links properly linked (no broken links)?</li>
</ul>

## Images

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Do all informational images have alt text that provides the same level of understanding a visual user would gain? (<a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1: Non-text Content</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are all decorative images marked decorative (containing “ ” or the word “decorative” in the alt text field)? (<a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1: Non-text Content</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are multi-layered objects grouped into one object and appropriate alternative text applied, if required? (<a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1: Non-text Content</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Do complex informational (not decorative) images have an alternate accessible means of understanding (usually a long description or caption)? (<a href="https://www.w3.org/TR/WCAG22/#non-text-content">1.1.1: Non-text Content</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the document free from any content that should not be included as an image? (Picture of a table with text, image of text) (<a href="https://www.w3.org/TR/WCAG22/#images-of-text">1.4.5: Images of Text</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the document free from content that flashes more than 3 times per second? (<a href="https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold">2.3.1: Three Flashes or Below Threshold</a>)</li>
</ul>

## Tables

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Were tables created with the built in table styles (not with spaces or indent)? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Does the table structure match the visual table layout (simple layout structure – no merged or split cells)? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Do all tables have defined header row(s) and/or header column(s)? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the document free from tables used for content that is not a data (tables used for layout only)? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the document free from data tables with merged cells, both column and row header cells? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
</ul>

## Lists

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Does the document contain only lists built with list styles? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are multiple lists in the same document properly organized (grouped or at levels)? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
</ul>

## Headings

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is all text that acts as a visual heading marked with the proper heading style? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Do headings follow a logical hierarchical progression? (for example, H1-H2-H3) (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are all the headings visually modified via the heading style? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Does the heading text accurately describe the following content? (<a href="https://www.w3.org/TR/WCAG22/#headings-and-labels">2.4.6: Headings and Labels</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Does the document contain a heading style for each section? (<a href="https://www.w3.org/TR/WCAG22/#headings-and-labels">2.4.6: Headings and Labels</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Does the Navigation pane from the View menu show all the headings, and nothing more (including no empty lines)?</li>
</ul>

## Other elements

<ul class="list-unstyled mrgn-tp-lg mrgn-lft-lg">
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the table of contents (TOC) generated with the built in office styles? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Are citations and footnotes/endnotes created with the built in office styles? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is the language properly set for the corresponding language of words or phrases? (<a href="https://www.w3.org/TR/WCAG22/#language-of-parts">3.1.2: Language of Parts</a>)</li>
    <li class="mrgn-bttm-md"><span class="far fa-square mrgn-rght-md" aria-hidden="true"></span>Is information in the header, footer, watermark, speaker notes, etc. available in the main body of the document (except page numbering)? (<a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">1.3.1: Info and Relationships</a>)</li>
</ul>
