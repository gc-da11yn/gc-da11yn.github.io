---
title: Accessible Word documents in Office 2016
layout: layouts/base.njk
description: Accessible practices for Microsoft Word 2016 document creation.
tags:
  - createDocument
---

<div class="row mrgn-tp-lg">
	<ul class="toc lst-spcd col-md-12">
		<li class="col-md-4 col-sm-6"><a class="list-group-item" href="../">1. How to create accessible documents</a></li>
		<li class="col-md-4 col-sm-6"><a class="list-group-item active">2. Accessible Word documents</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-sm"><a class="list-group-item" href="../accessible-pdf-documents">3. Accessible PDF documents</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-md clr-lft-lg"><a class="list-group-item" href="../accessible-powerpoint-documents">4. Accessible PowerPoint presentations</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-sm"><a class="list-group-item" href="../accessible-excel-documents">5. Accessible Excel workbooks</a></li>
		<li class="col-md-4 col-sm-6"><a class="list-group-item" href="../accessible-visio-diagrams">6. Accessible Visio drawings</a></li>
	</ul>
</div>

<h2>Accessibility Checker</h2>
<p>Microsoft Office (Word, Excel, Power Point) provides a built-in accessibility validator. The checker does not identify all issues, but looks for things such as: missing alternative text, duplicate slide titles, and potential reading order issues.</p>

<div class="row">
	<div class="col-md-7 mrgn-bttm-md">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-01.jpg" alt="Screenshot of &quot;Check for issues&quot; menu">
	</div>
</div>

<p>How to use the Accessibility Checker:</p>
<ol>
	<li>Active the File Tab &gt; Info &gt; Check for Issues &gt; Check Accessibility</li>
	<li>Activate the results in the <strong>Accessibility Checker</strong> pane</li>
	<li>Address the listed issues. Helpful information to understand and fix the different issues is provided at the bottom of the pane</li>
</ol>

<h2>Templates</h2>
<p>Master templates are used to define the layout and content of a document/presentation. This can be used to create an accessible document template that does not require significant adaptation.</p>
<p>What to look for when creating an accessible template:</p>

<ol>
	<li>Colour contrast and use of colour</li>
	<li>Header and footer text</li>
	<li>Font size, font face, and spacing of content</li>
	<li>Consistent styles for headings, lists, etc.</li>
</ol>

<p>How to create a template:</p>
<ol>
	<li>Activate the <strong>File</strong> tab in the ribbon &gt; <strong>Save As</strong></li>
	<li>Activate <strong>Computer</strong> and choose a folder to save your template</li>
	<li>Type a name for your template in the&nbsp;<strong>File name</strong> field</li>
	<li>Activate the <strong>Word Template</strong> option in the&nbsp;<strong>Save as type</strong>&nbsp;list</li>
</ol>

<div class="row">
	<div class="col-md-7 mrgn-bttm-md">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-02.jpg" alt="Screenshot of saving as a template">
	</div>
</div>

<p>How to open a template:</p>
<ol>
	<li>Activate the <strong>File</strong> tab in the ribbon &gt; <strong>Open</strong></li>
	<li>Activate <strong>Computer</strong></li>
	<li>Press the <strong>Browse </strong>icon</li>
	<li>Open the file folder “<strong>Custom Office Templates</strong>” under <strong>My Documents</strong></li>
	<li>Select the template you created and activate <strong>Open</strong></li>
	<li>Make the changes you want, then save and close the template</li>
</ol>

<h2>Page layout</h2>
<p>Navigating and locating content can be a major challenge for users who have vision loss or learning / cognitive disabilities. To create an accessible document, use built-in styles.</p>

<h3>Headings</h3>
<p>Headings allow users to navigate and locate content. To ensure the document structure improves accessibility and readability, use built-in headings and styles. Using proper heading order makes it easier for screen readers to read a document correctly.</p>
<p>Ensure headings are denoted through structure and not only denoted implicitly (by using different fonts, font sizes, bolding, italics, etc.). Created styles will not be treated structurally as headings.</p>

<div class="row">
	<div class="col-md-9 mrgn-bttm-md">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-03.jpg" alt="Screenshot of Styles toolbar">
	</div>
</div>

<p>To style headings:</p>
<ol>
	<li>Find the <strong>Home</strong> tab</li>
	<li>Select the desired heading level from the <strong>Styles</strong> section of the ribbon</li>
	<li>To see more heading levels, expand the <strong>Styles</strong> section of the ribbon</li>
</ol>

<p>To check headings:</p>
<ol>
	<li>Select the text that appears to be a heading</li>
	<li>Open the <strong>Home</strong> tab and ensure the <strong>Styles</strong> toolbar on the ribbon is visible</li>
	<li>Place the cursor on each heading, and verify that it is linked to the appropriate heading style in the <strong>Styles</strong> toolbar</li>
</ol>

<h3>Headers and Footers</h3>
<p>Ensure headers and footers are properly formatted. When headers and footers are typed in as text on each page, users of adaptive technology often mistake them as part of the page content. Therefore, do not create headers and footers that can be accessed in the editable area of the document.</p>
<p>To use headers and footers in Word: </p>

<ol>
	<li>Select the Insert tab from the ribbon</li>
	<li>From the <strong>Headers and Footers</strong> section of the ribbon, select either “<strong>Header</strong>” or “<strong>Footer</strong>”</li>
	<li>Choose your preferred style</li>
	<li>After creating the <strong>Header</strong> or <strong>Footer</strong>, press the “<strong>Esc</strong>” key to return to the main body of the document</li>
</ol>

<div class="row">
	<div class="col-md-9">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-04.jpg" alt="Screenshot of Insert Header pop-up">
	</div>
</div>

<h3>Columns</h3>
<p>To ensure that multi-column content will be read in the proper order by screen readers, use the built-in columns feature to create structural columns.</p>
<p>To insert columns:</p>
<ol>
	<li>Select the <strong>Page Layout</strong> tab from the ribbon</li>
	<li>Choose &quot;<strong>Columns</strong>&quot; menu button under the &quot;<strong>Page Setup</strong>&quot; tools</li>
	<li>Select the desired number of columns from the grid </li>
	<li>As you type, the current column will fill and spill into the next</li>
</ol>

<div class="row">
	<div class="col-md-6">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-05.jpg" alt="Screenshot of Columns menu">
	</div>
</div>

<h3>Lists</h3>
<p>Lists are used to group and organize related items. Ensure lists and sub-lists are structured properly. Do not create lists manually using tabs, dashes, or asterisks. </p>
<p>Word provides features to create ordered (numbered) or unordered (bulleted) lists. Using the built-in list formatting allows users of screen readers to rapidly browse and access list content, and to understand the relationship between list items.</p>

<p>To create a list:</p>
<ul>
	<li>Open the <strong>Home</strong> tab in the ribbon</li>
	<li>Under the <strong>Paragraph</strong> toolbar, you will find list options such as <strong>bullets, numbering, sorting, etc.</strong></li>
</ul>

<div class="row">
	<div class="col-md-6">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-06.jpg" alt="Screenshot of Paragraph toolbar">
	</div>
</div>

<h2>Fonts</h2>
<p>Choose fonts and styles that are easy to read.</p>

<ul>
	<li>Use “sans serif” fonts with sufficient spacing between letters<br>
		Ex. Arial, Verdana, Century Gothic</li>
	<li>Use fonts 11-14 points in size for body text</li>
	<li>Fonts that are too small or too large may not be readable by some users</li>
</ul>

<h2>Non-text Elements</h2>
<h3>Alternative text</h3>
<p>Visual elements such as photos, screenshots, icons, videos and 3D models should all include alternative text. Alt text helps people who cannot see the image, understand the message and what is important. Good alt text should be concise and to the point. It should not be more than a sentence or two and should include the important information the image conveys. When creating an alt text, do not begin with “this is an image of”, but do begin with “Screenshot of” for screenshots.</p>
<p>To assign alternative text to images: </p>

<ol>
	<li>Open the context menu for the image by right-clicking or pressing the application key</li>
	<li>Activate <strong>Format Picture</strong></li>
	<li>Activate on the <strong>Layout and Property</strong> tool</li>
	<li>Enter a title in the <strong>Title</strong> field. Note: This field should only be filled in if you are entering a longer explanation in the Description field</li>
	<li>Enter an appropriate alternative text in the <strong>Description</strong> field</li>
	<li>If the image is meaningful, convey in words the meaning, function, or purpose communicated by the image </li>
	<li>If an image conveys no information (i.e., it is decorative or redundant), enter the word “decorative” (no quotes) in the <strong>Description field.</strong></li>
	<li>Activate the <strong>Close</strong> button</li>
</ol>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-07.jpg" alt="Screenshot of Format Picture menu">
	</div>
</div>

<h3>Charts and Diagrams</h3>
<p>Ensure complex images and charts provide long descriptions. Complex images include: schematics, plans, diagrams, or any other image that conveys a large amount of information. This is necessary, as users who cannot see the complex image will not be able to sufficiently determine its value/purpose.</p>
<p>To add a long description to diagrams and chart:</p>

<ol>
	<li>Open the context menu for the chart/diagram and activate <strong>Format Chart Area</strong></li>
	<li>The <strong>Format Chart Area</strong> menu will open</li>
	<li>Activate <strong>Layout and Properties</strong></li>
	<li>Provide a meaningful long description
		<ol class="lst-lwr-alph">
			<li>Describe the title of the chart</li>
			<li>The role it plays in the document</li>
			<li>The relationship of elements in the correct order</li>
		</ol>
	</li>
	<li>Activate the <strong>Close</strong> button</li>
</ol>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-08.jpg" alt="Screenshot of Format Chart Area menu">
	</div>
</div>

<h3>Links</h3>
<p>People who use screen readers sometimes scan a list of links; therefore, ensure link text is meaningful within the context of the document. Link text should accurately reflect the target and purpose of the link. If link text is not provided, users will need to follow the link to determine its purpose, which can present difficulties for users of adaptive technology. An example of appropriate link text would be including the full title of the destination rather than linking to the text “Click Here”.</p>
<p>To add hyperlinks with meaningful text:</p>

<ol>
	<li>Type or paste a web address in your document and press spacebar or &quot;Enter&quot; to convert into a hyperlink</li>
	<li>Select the link and open the context menu</li>
	<li>Activate <strong>Edit Hyperlink</strong> </li>
	<li>Edit the <strong>Text to Display </strong><strong>field with meaningful text</strong>.</li>
</ol>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/word-09.jpg" alt="Screenshot of Edit Hyperlink">
	</div>
</div>

<h2>Additional Resources</h2>

<ul>
	<li><a href="https://support.office.com/en-us/article/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d">Microsoft: Make your Word documents accessible to people with disabilities</a></li>
	<li><a href="https://webaim.org/techniques/word/">WebAIM: Microsoft Word, creating accessible documents</a></li>
</ul>

<ul class="pager mrgn-tp-xl">
	<li class="previous"><a href="../" rel="prev">Previous: How to create accessible documents</a></li>
	<li class="next"><a href="../accessible-pdf-documents" rel="next">Next: Accessible PDF documents</a></li>
</ul>
