---
title: Accessible Excel workbooks in Office 2016
layout: layouts/base.njk
description: Accessible practices for Microsoft Excel 2016 document creation.
toggle: classeurs-excel-accessibles-dans-office-2016
---

<h2>Accessibility Checker</h2>

<p>Microsoft Office (Word, Excel, Power Point) provides a built-in
	accessibility validator. The checker does not identify all issues, but looks
	for things such as: missing alternative text, duplicate slide titles, and
	potential reading order issues.</p>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive" src="{{ rootPath }}img/en/office2016/excel-01.jpg" alt="Screenshot of Check for Issues menu">
	</div>
</div>

<p>How to use the Accessibility Checker:</p>

<ol>
	<li>Activate the <strong>File</strong> Tab &gt; <strong>Info</strong> &gt; <strong>Check for Issues</strong> &gt; <strong>Check Accessibility</strong></li>
	<li>Review the results in the <strong>Accessibility Checker</strong> pane</li>
	<li>Address the listed issues. Helpful information to understand and fix the
		different issues is provided at the bottom of the pane</li>
</ol>

<h2>Tables</h2>

<p>Avoid using complex table structures in all documents. If tables include nested tables, merged cells, split cells and/or blank rows/
	columns, they become difficult for screen readers to navigate . When using a table, design it to be as simple as possible. Assign meaningful names to the
	headers and rows to facilitate user navigation.</p>

<h2>Sheet tabs</h2>

<p>Give all sheet tabs in your document unique and meaningful names. Ensure that the name given to each tab accurately describes the contents found on the worksheet. This will make it easier to navigate through the workbook. It is best to remove all blank sheets from your document.</p>

<h2>Fonts</h2>

<p>Choose fonts and styles that are easy to read. </p>

<ul>
	<li>
		Use sans-serif fonts with sufficient spacing between letters<br>
		Ex. Arial, Verdana, Century Gothic</li>
	<li>Use fonts 11-14 points in size </li>
</ul>

<h3>Use of colour</h3>

<p>Use a <a href="https://webaim.org/resources/contrastchecker/">contrast checking tool</a> to check the contrast of the text (foreground) relative to the background. For
	most text, the contrast ratio must be 4.5:1. For large, bold text (14 point bold, or 18 point regular), this requirement is relaxed to 3:1. Since it is
	extremely likely that the sheet will be viewed at low zoom (so as to see more of it), all text should meet 4.5:1 minimum. The WCAG AAA requirement is 7:1 –
	aim for this.</p>

<p><strong>Do not</strong> use colour alone to convey meaning or emphasis in a word, cell or block of text. Patterns may be added to colour for those who are colour blind. Mandatory fields should be identified with an asterisk * and the word “required” rather than being labelled in red.</p>

<h2>Non-text elements</h2>

<h3>Alternative text</h3>

<p>Visual elements such as photos, screenshots, icons, videos and 3D models should all include alternative text. Alt text allows people who cannot
	see the image understand the message and what is important. A good alt text should be concise and to the point. It should not be more than a sentence or
	two and should include the important information the image conveys. When creating an alt text, do not begin with “this is an image of”. Do begin with
	“Screenshot of” for screenshots.</p>

<p>To assign alternative text to images:</p>
<ol>
	<li>Open the context menu for the image by right-clicking or pressing the applications key</li>
	<li>Activate <strong>Format Picture</strong></li>
	<li>Activate the <strong>Size and Property</strong> tool</li>
	<li>Enter a title in the <strong>Title</strong> field. Note: This field should only be filled in if you are entering a detailed or long explanation in the Description field</li>
	<li>Enter an appropriate alternative text in the <strong>Description</strong> field</li>
	<li>If the image is meaningful, convey in words the meaning, function, or purpose communicated by the image </li>
	<li>If an image conveys no information (i.e., it is decorative or redundant), enter the word “decorative” (no quotes)<strong> </strong><strong>in the</strong><strong> Description </strong><strong>field</strong></li>
	<li>Activate the <strong>Close</strong> button</li>
</ol>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive" src="{{ rootPath }}img/en/office2016/excel-02.jpg" alt="Screenshot of Format Picture sidebar" />
	</div>
</div>

<h3>Charts and diagrams</h3>

<p>Ensure complex images and charts provide long descriptions. Complex images include: schematics, plans, diagrams, or any other image that conveys a
	large amount of information. This is necessary as users who cannot see the complex image will not be able to sufficiently determine its value/purpose.</p>

<p>To add a long description to diagrams and chart:</p>

<ol>
	<li>Open the context menu for the chart/diagram and activate <strong>Format Chart Area</strong></li>
	<li>The <strong>Format Chart Area</strong> menu will open</li>
	<li>Activate <strong>Size and Properties</strong></li>
	<li>Provide a meaningful long description
		<ol>
			<li>Describe the title of the chart</li>
			<li> The role it plays in the document</li>
			<li>The relationship of elements in the correct order</li>
		</ol>
	</li>
	<li>Activate the <strong>Close</strong> button</li>
</ol>

<p>See <a href="https://www.w3.org/WAI/tutorials/images/complex/" rel="external">Complex Images</a> for more recommendations.</p>

<h2>Links</h2>

<p>People who use screen readers sometimes scan a list of links; therefore, ensure link text is meaningful within the context of the document.
	Link text should accurately reflect the target and purpose of the link. If link text is not provided, users will need to follow the link to determine its
	purpose, which can present difficulties for users of adaptive technology. An example of appropriate link text would be including the full title of the destination
	rather than linking to the text “Click Here”.</p>

<p>To add hyperlinks with meaningful text:</p>

<ol>
	<li>Type or paste a web address in your document</li>
	<li>Select the link and open the context menu</li>
	<li>Activate <strong>Hyperlink</strong></li>
	<li>Edit the <strong>Text to Display field with meaningful text</strong>.</li>
</ol>

<div class="row">
	<div class="col-md-7">
		<img class="img-responsive" src="{{ rootPath }}img/en/office2016/excel-03.jpg" alt="Screenshot of Insert Hyperlink dialog" />
	</div>
</div>

<h2>Additional resources</h2>
<ul>
	<li><a href="https://support.office.com/en-us/article/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593" rel="external">Microsoft: Make your Excel documents accessible to people with disabilities</a></li>
	<li><a href="https://support.office.com/en-us/article/accessibility-support-for-excel-0976b140-7033-4e2d-8887-187280701bf8" rel="external">Microsoft: Accessibility support for people who use a screen reader program</a></li>
</ul>
