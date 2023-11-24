---
title: Accessible PDF documents in Microsoft 365
layout: layouts/base.njk
description: Accessible practices for PDF document creation.
toggle: documents-pdf-accessibles-dans-microsoft-365
fontIcon: fa-file-pdf
---

<h2>Introduction</h2>
<p>PDF (Portable Document Format) is a common format for distributing printable documents. This format was created by Adobe, and can be opened with Adobe Acrobat as well as many other tools and some web browsers.</p>

<h2>What makes a PDF accessible?</h2>
<p>An accessible PDF is usable by persons with a variety of disabilities. For instance, a blind user may use a screen reader, a braille display, or even print the document in braille format. A person with a motor impairment may use a keyboard rather than a mouse to navigate between form fields. Other users may need to adjust the font size or spacing to compensate for vision loss or learning / cognitive disabilities.</p>
<p>General document accessibility guidelines also apply to PDFs. That means that the document should be properly structured with headings, there is sufficient contrast, and images have alternate text. Make sure to read the general document accessibility guide before continuing.</p>
<p>Since PDF documents often contain interactive components like forms, their accessibility should be evaluated based on the <a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines</a>. Following this guide does not ensure compliance with these guidelines, but it is a good start.</p>

<h2>Recommended authoring tools</h2>

<h3>Microsoft Word</h3>
<p>Note: These instructions apply to the current version of Word as of December 2020.</p>
<p>The easiest way to create an accessible PDF is to begin with an accessible Word document. Once you have created an accessible document in Word, if you do not have a professional version of a PDF authoring tool installed, export it through <strong>File</strong> &gt; <strong>Export</strong> &gt; <strong>Create PDF/XPS Document</strong> &gt; <strong>Create PDF/XPS</strong> (do not use "print to PDF"!).</p>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office365/pdf-365-001.png" alt="Screenshot of Export dialog in Word demonstrating where in the file menu to export a PDF. Namely File > Export > Create PDF/XPS">
	</div>
</div>

<p>In the dialog box, select <strong>Options </strong>and check these boxes:</p>

<ul>
	<li>Create bookmarks using: Headings<br>
		(or bookmarks, if you have created them)</li>
	<li>Document properties</li>
	<li>Document structure tags</li>
</ul>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office365/pdf-365-002.png" alt="Screenshot of PDF export options in Word">
	</div>
</div>

<p>If you do have a professional PDF authoring tool installed, a tab for the tool should be added to Microsoft Word Ribbon menu. To create a PDF:</p>

<ul>
	<li>navigate the Ribbon menu</li>
	<li>find the PDF authoring tool tab</li>
	<li>make sure the options to create bookmarks and tags are enabled in the tool’s settings</li>
	<li>activate the Create PDF button</li>
</ul>

<h3>Adobe products</h3>
<p>Adobe Acrobat Pro, InDesign, FrameMaker, and LiveCycle Designer will export to tagged PDF, and offer more control over visual styles than Word. (LiveCycle Designer is specifically tailored to creating forms.)</p>

<h3>Other PDF authoring tools</h3>
<p>Outside of the Adobe family of products as mentioned above, there are several PDF authoring tools out there such as Foxit PDF Editor and Kofax Power PDF. This document, however, focuses on using Foxit PDF Editor.</p>
<p>To create a PDF document using a professional version of Foxit PDF Editor, you can consult this tutorial about <a href="https://youtu.be/tQYtVLmf2Yo">Creating PDFs</a>.</p>

<h2>Validating and remediating accessibility with PhantomPDF</h2>
<p>Foxit PDF Editor is an essential tool for validating and remediating PDF accessibility. The current version as of December 2020 is PhantomPDF Business 10.1. The following information is specific to this version.</p>

<h3>Automated validation</h3>
<p>Foxit PDF Editor provides a built-in accessibility checker. The checker does not identify all issues, but looks for things such as: missing document title, tags, figures alternative text and other potential issues.</p>
<p>To run the accessibility checker, open your PDF document and <strong>in the Ribbon</strong> select the <strong>Accessibility</strong> tab then select <strong>Full Check</strong>.</p>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office365/pdf-365-003.png" alt="Screenshot of Accessibility Checker in Phantom PDF">
	</div>
</div>

<p>Under <strong>Report Options</strong> uncheck "<strong>Create accessibility report</strong>" if you do not wish to export the issues, and select <strong>Start Checking</strong>.</p>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office365/pdf-365-004.png" alt="Screenshot of the Accessibility Checker options menu in Phantom PDF">
	</div>
</div>

<p>This will generate a list of issues similar to the one pictured above. Inspect each failure, issues will need to be either resolved or checked manually.</p>

<h3>Remediating issues</h3>
<p>Some issues can be fixed simply by opening the <strong>context</strong> menu (right-clicking) for the issue and selecting <strong>Fix</strong>.</p>

<h2>Common issues and solutions</h2>
<p>Besides general accessibility issues, pay special attention to the following areas of PDF accessibility.</p>

<h3>Document structure (tags)</h3>
<p>An important part of PDF accessibility is “tagging”. Using a recommended authoring tool, tags will be automatically created based on the existing document structure. For instance, a heading created in Microsoft Word will be tagged as a heading in the PDF when you export. These tags are similar to HTML.</p>
<p>To check if a document is tagged, navigate to <strong>File</strong> &gt; <strong>Properties</strong> or press <strong>Control + D </strong>to bring up the document properties, or run the Accessibility Checker. If not tagged, return to your authoring tool (ie.g. Word) if possible, ensure you have structured the document correctly, and export again using the settings given above.</p>
<p>To manually set tags, use the <a href="https://youtu.be/bi7HEfQj1AQ">Reading Order tool</a> (<strong>Accessibility</strong> &gt; <strong>Setup</strong> &gt; <strong>Reading Order</strong>)</p>

<h3>Alternative text (“alt text”) for Images</h3>

<p>To set alt text in PhantomPDF, navigate to <strong>Accessibility </strong> &gt; <strong>Alternate Text</strong> &gt; <strong>Set Alternate Text</strong>. If your image does not show up in the list of figures, or the message “There is no figure information to display” appears, the images have not been correctly tagged as figures, and you will first have to tag them.</p>
<p>Decorative images (which should be ignored by screen readers) should be tagged as “Background”.</p>

<h3>Language and title </h3>
<p>A meaningful title and the document’s language need to be specified. In PhantomPDF, navigate to <strong>File</strong> &gt; <strong>Properties</strong> or press <strong>Control + D </strong>to bring up the document’s properties. The language field can be found under the <strong>Advanced </strong>tab.</p>
<p>Bilingual PDF documents present special issues and should be avoided, especially for forms. It is preferable to offer multiple versions of the same PDF, one for each language.</p>

<p>A passage in a different language than the main language of the document must be tagged separately. For example, an English paragraph may appear in a French document indicating that the document is also available in English. For more information, visit the page about <a href="https://www.w3.org/TR/WCAG20-TECHS/PDF19.html">Specifying the language for a passage or phrase</a>. You can set the language for the text in a subtree of the tags tree in the Tags panel or in the Content panel located in the navigation pane. To do this, open the <strong>context</strong> menu (right-clicking) for an element, choose <strong>Properties...</strong>, and select a language in the Object Properties dialog box.</p>

<h3>Scanned documents: images of text</h3>
<p>PDFs created from scanning in a paper document need, at minimum, to have the text recognized in order to be made accessible. This can be done automatically using Optical Character Recognition (OCR). Please note that OCR is not always 100% accurate, so be sure to review the text manually after conversion. See <a href="https://youtu.be/cZpmMMPhFbw">Learn how to Scan and OCR editable PDFs</a>. </p>

<h3>Bookmarks</h3>

<p>Any PDF longer than one page should include bookmarks. These may be automatically generated (such as when exporting from Word, provided the correct settings are used – see Microsoft Word section above) or you may have to <a href="https://youtu.be/Ron1tiWgDJQ">create bookmarks manually within PhantomPDF</a>.</p>

<h3>Forms</h3>
<p>Creating an accessible PDF form is tricky, as form fields created in other programs are not directly exported into the PDF. See <a href="https://webaim.org/techniques/foxit/forms">WebAIM’s guide to creating accessible forms in PhantomPDF</a>.</p>
<p>Some general tips:</p>

<ul>
	<li><strong>Instructions</strong>: Put instructions at the beginning of the form, rather than in between form fields.</li>
	<li><strong>Labels</strong>: In PDF documents, there is no way to specify what label applies to what form field, so each form field must also have its label entered into the “Tooltip” field. Radio buttons and check boxes require additional steps.</li>
	<li><strong>Input format: </strong>Ensure that the correct format is suggested, if one is required.<br>
		Ex. Date of birth (YYYY-MM-DD). As with all labels, this should be repeated in the tooltip.</li>
	<li><strong>Required fields: </strong>Indicate which fields are required. Do not rely solely on colour. If an asterisk (*) is used to indicate required fields, include the following text at the start of the form (e.g. * indicates a required field).</li>
	<li><strong>Tab order</strong>: Test the form using only the keyboard (using the <strong>Tab</strong> key to move between fields).</li>
	<li>Ensure that it is obvious (visually) which field is active at all times</li>
	<li>Ensure that the tab order follows the expected (visual) order</li>
</ul>

<h3>Reading order</h3>

<p>Documents created in graphics software, rather than Word, may have issues with reading order. For instance, the elements might be read in the order they were created, rather than the visual order. Multiple columns of text can also cause reading order issues. This can be checked by navigating to <strong>Home</strong> &gt; <strong>Reflow</strong> or  pressing <strong>Control + 4</strong> to reflow the document (See “Other PDF accessibility testing tools” below). See <a href="https://webaim.org/techniques/foxit/phantompdf#content_order">Review and repair the content order</a>.</p>

<h3>Missing spaces and line breaks</h3>
<p>Improper characters used by the author for spaces or line breaks causes words to jam together with reflow. This authoring problem occurs frequently with PDF. To test for this, export to plain text in PhantomPDF by navigating to <strong>Convert</strong> &gt; <strong>Export</strong> &gt; <strong>To Other</strong> &gt; <strong>To Plain Text</strong>, or select all and copy / paste into a plain text editor like Notepad. In the plain text version, are there missing spaces and line breaks? If so, check your export settings in the authoring program. Next, try using a wider spaced font. If you have reduced the letter or word spacing, put this back to the default. If the issue persists, consider using a different authoring tool.</p>

<h3>Tables</h3>
<p>Table cells must be associated with table headers. To make your life easier, begin with a simple table (one with no merged cells) in Microsoft Word. Ensure that it is correctly structured with table headers by checking with the aforementioned Reading Order tool. An example of a correctly structured table is shown here. See <a href="https://youtu.be/6V7vyKG6bKs">PDF Accessibility: Make tables more Accessible</a>.</p>

<h2>Other PDF accessibility testing tools</h2>
<p>Enabling PhantomPDF’s built-in accessibility features, located in the Ribbon under the tab <strong>Accessibility </strong> &gt; <strong>Configuration</strong> &gt; <strong>Setup Assistant</strong>, allows you to manually test the reading order and other structural issues. WebAIM recommends that you <a href="https://webaim.org/techniques/foxit/phantompdf#other">should still manually review the accessibility of your PDF after using PhantomPDF's other accessibility tools and features</a>.</p>
<p>Testing a form with <a href="https://www.nvaccess.org/">NVDA (a free screen reader)</a> will quickly identify label and tab order issues. Try to fill out the form using nothing but your ears and your keyboard. This will give you an idea of what screen reader users will experience.</p>
<p>An alternative to PhantomPDF’s inbuilt accessibility checker is <a href="https://www.access-for-all.ch/en/pdf-accessibility-checker.html">Free PDF Accessibility Checker (PAC 3)</a>. While this program alone won’t allow you to remediate issues, you may be able to make your fixes upstream in the authoring tool (Word, InDesign, etc.). It may also identify issues that PhantomPDF does not.</p>

<h2>Additional resources</h2>

<ul>
	<li><a href="https://www.w3.org/TR/WCAG-TECHS/pdf.html" title="W3C WCAG 2.0 Accessibility Guidelines to Creating PDFs">W3C PDF Techniques for WCAG 2.0</a><br>
		23 techniques for solving specific WCAG violations, mostly forms and tables (100 pages, 2016)</li>
	<li><a href="https://webaim.org/techniques/foxit/">WebAIM: Foxit and PDF Accessibility</a><br>
		An article by WebAIM that outlines how to make accessible PDFs with Foxit PDF Editor (4 pages, 2019)</li>
	<li><a href="https://www.foxitsoftware.com/support/tutorial/">Foxit PDF Editor Instructional Videos</a></li>
</ul>
