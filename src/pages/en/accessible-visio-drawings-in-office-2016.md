---
title: Accessible Visio drawings in Office 2016
layout: layouts/base.njk
description: Accessible practices for Microsoft Visio 2016 diagram creation.
---

<div class="row mrgn-tp-lg">
	<ul class="toc lst-spcd col-md-12">
		<li class="col-md-4 col-sm-6"><a class="list-group-item" href="../">1. How to create accessible documents</a></li>
		<li class="col-md-4 col-sm-6"><a class="list-group-item" href="../accessible-word-documents">2. Accessible Word documents</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-sm"><a class="list-group-item" href="../accessible-pdf-documents">3. Accessible PDF documents</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-md clr-lft-lg"><a class="list-group-item" href="../accessible-powerpoint-documents">4. Accessible PowerPoint presentations</a></li>
		<li class="col-md-4 col-sm-6 clr-lft-sm"><a class="list-group-item" href="../accessible-excel-documents">5. Accessible Excel workbooks</a></li>
		<li class="col-md-4 col-sm-6"><a class="list-group-item active">6. Accessible Visio drawings</a></li>
	</ul>
</div>

<h2>Introduction</h2>

<p>Microsoft Visio is used to create diagrams such as flow charts. The accessibility issues for such a diagram fall into two categories: those affecting sighted users with disabilities (who will be using the diagram visually), and those affecting blind users (who rely on the text alternatives). Following accessibility recommendations in each of these areas will also be of benefit to all users.</p>

<h2>Visual and general accessibility</h2>

<p>Many of the general document and infographic accessibility guidelines also apply to Visio documents. Please review the General and Infographic guides for more information.</p>

<h3>Text contrast</h3>
<p>Text contrast must be at least 4.5:1 against the background. Because diagrams are often viewed at very low zoom, we recommend that you maintain at least this level of contrast for all text, regardless of size.</p>
<ul>
	<li>To verify colour contrast, use a tool such as <a href="https://developer.paciellogroup.com/resources/contrastanalyser/">Colour Contrast Analyser</a> or <a href="https://webaim.org/resources/contrastchecker/">WebAIM Contrast Checker</a></li>
	<li>Do not place complex background images behind text</li>
	<li>When complex background images or low-contrast backgrounds must be used, provide an outline around the text that provides sufficient contrast against the text foreground colour</li>
</ul>

<h3>Using colour alone to convey information</h3>

<p>Ensure that colour is not the sole means of communicating information.
	As colour coding is a common strategy in infographics, this is a common
	accessibility failure. All information communicated via colour should also be
	available through other methods of identification (visually and textually),
	such as text labels, symbols, or adding a unique pattern to the colour coded
	area.</p>

<h3>Non-text contrast</h3>

<p>In WCAG 2.1, all meaningful graphical elements must have a
	3:1 contrast ratio against the background. Where colour or shading is used to
	identify areas of the chart, such as to delineate an inner box from an outer
	box, the two colours must have a 3:1 contrast ratio (as one of them is now the
	“background”).</p>

<p>See <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html#graphical-objects">Understanding
		non-text contrast</a> for examples of graphical objects (icons), charts, and
	infographics and how they pass, fail, or can be made to pass this criterion.</p>

<h3>Abbreviations</h3>

<p>As diagrams are often dense with abbreviations, defining
	these abbreviations will aid in understanding for all users. See WCAG’s
	guidelines for <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html">Abbreviations</a></p>

<p>If possible within the layout, you can define abbreviations
	inline at their first occurrence.<br>
	ex. Accessibility, Accommodations, and Adaptive Computer Technology (AAACT)</p>

<p>Due to diagrams often being viewed in a non-linear order, it
	is usually preferable to <a href="https://www.w3.org/TR/WCAG20-TECHS/G62.html">provide
		a glossary</a>. The glossary should be in text within the document, under a
	heading such as “Glossary of abbreviations” so that it can be easily found.</p>

<h3>Text in images</h3>

<p>Unless it is essential to do so, <a href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html">do not
		embed text inside images</a>.</p>

<h2>Text alternatives</h2>

<p>Visio diagrams, by their nature, communicate information
	visually. Although Visio has some capability for blind users to navigate
	documents (see “Visio accessibility features” below), a text alternative that
	doesn’t depend on the visual organization is essential when you are
	distributing the Visio document as a PDF or image, or embedding the diagram in
	another document / web page.</p>

<h3>Short (alt) text summary</h3>

<p>A short text (65 characters or less) should answer the
	question “What information is the diagram conveying?” The short text can act as
	a meaningful title for the diagram. </p>

<h3>Long text description</h3>

<p>Depending on the diagram, it may be difficult to provide a
	complete linear description in text. Imagine that you are describing the
	diagram to a person over the phone.</p>

<p>The long text summary is useful for all users. Make it
	visible in the web page or PDF so that everyone can read it. See <a href="https://www.w3.org/WAI/tutorials/images/complex/">Complex Images </a>for recommendations.</p>

<h4>Examples</h4>

<p>For a road map with directions, the long description should
	describe each step to follow the directions.</p>

<div class="row">
	<div class="col-md-7 mrgn-bttm-md">
		<img class="img-responsive"  src="{{ rootPath }}img/en/office2016/visio-01.gif" alt="Flowchart illustrating the login process">
	</div>
</div>

<p>In order to best convey the message of the above flow chart to all users, the long description should use numbered components:</p>

<div class="brdr-rds-0 well">
	<p><strong>Flowchart illustrating the login process:</strong></p>

	<ul>
		<li>1.0 Get Username
			<ul>
				<li> 1.1 Go to Step 2.0</li>
			</ul>
		</li>
		<li>2.0 Is Username blank?
			<ul>
				<li>2.1 If Yes, go back to step 1.0</li>
				<li>2.2 If No, continue to step 3.0</li>
			</ul>
		</li>
		<li>3.0 Complete login</li>
	</ul>
</div>

<p>For a component diagram, the long description should begin
	with a summary of the major components of the diagram (between 3 and 10) and
	how they are related. Following that, details such as the complete text within
	the components can be placed under headings for each component. Make use of the
	various levels of headings to organize the sub-components. Users can search for
	components of interest to them as long as the text is included in the page.</p>

<h3>Hypertext representation</h3>

<p>Using HTML, a complete textual description including all
	relationships with hyperlinks may be possible. Extending the long description
	format (described above for flowchart and component diagram) with in-page links
	to related components could improve usability, as screen reader users could
	more quickly “follow the arrows”.</p>

<p>Example for complex data flow diagram:</p>

<div class="brdr-rds-0 well">
	<h4>Component D (Header)</h4>
	<h5>Data Sources:</h5>
	<ul>
		<li><a href="#componentA">Component A</a> (links to #id of Component A header)</li>
		<li><a href="#componentB">Component B</a> (links to #id of Component B header)</li>
	</ul>

	<h5>Data Flows to:</h5>
	<ul>
		<li><a href="#componentC">Component C</a> (links to #id of Component C header) through <a href="#connector1">Connector 1</a> (links to #id of Connector 1 header)</li>
	</ul>

	<p>Follow with other relevant information about component D.</p>
</div>

<h2>Visio accessibility features</h2>

<p>Microsoft has recently published a guide on <a href="https://support.office.com/en-us/article/make-your-visio-diagram-accessible-e2c847a9-f010-4fef-af65-16e252829d44">making Visio diagrams accessible</a>.</p>

<p>It is important to understand <a href="https://support.office.com/en-us/article/use-a-screen-reader-to-read-visio-diagrams-45ff89fc-fcd8-4c99-bc21-70eb9af29a61">how
		a screen reader user would read a Visio diagram</a>:</p>

<ul>
	<li>They will use the Tab key to move through the shapes in a pre-specified order</li>
	<li>Shapes will be described according to their alt text, position, and formatting</li>
	<li>The starting and ending points for connectors are announced</li>
</ul>

<p>This brings up the two main accessibility features for Visio
	documents: reading order and alt text.</p>

<h3>Reading order</h3>

<p>Generally, objects will be read in the order in which they
	were added to the document. Create the objects in the order in which you want
	them to be read.</p>

<p>You can also review and edit the reading order. Select <strong>View</strong>
	&gt; <strong>Task Panes</strong> &gt; <strong>Navigation</strong>, and then drag and drop the
	shapes to reflect a logical reading order.</p>

<p>Create connectors (arrows, etc.) in the order you want them to
	be read. Begin drawing from the starting point (i.e. the parent in a
	unidirectional flowchart) – do not draw any arrows “backwards” and then style
	them to face the opposite way.</p>

<h3>Alternative text (“alt text”)</h3>

<p>Visio has the ability to add alt text to images, shapes, and
	entire pages. Generally, no more than short alt text would be required for an
	image or shape. A longer description would be suitable for a page. Refer to the
	general accessibility guidelines and <a href="https://support.office.com/en-us/article/make-your-visio-diagram-accessible-e2c847a9-f010-4fef-af65-16e252829d44">making
		Visio diagrams accessible</a>.</p>

<p>To add alt text to an image or shape:</p>

<ul>
	<li>Open the context menu for the image or shape by right-clicking or pressing the application key</li>
	<li>Select <strong>Format Shape</strong>.</li>
	<li>Select <img  src="{{ rootPath }}img/en/office2016/visio-02.gif" alt=""> <strong>Size &amp; Properties</strong> and enter the alternate text under <strong>Description</strong>.</li>
</ul>

<p>To add alt text to entire page, press <strong>Shift+F5</strong>. Select the <strong>Alt Text</strong> tab and enter the <strong>Description</strong>.</p>

<h3>Accessibility checker</h3>

<p>Like most Office products, Visio now has a built-in accessibility checker.</p>

<p>In the ribbon toolbar, go to <strong>Review</strong> &gt; <strong>Check Accessibility</strong>. Select each item to view details and fix the issues one by one.</p>

<h2>Additional resources</h2>

<ul>
	<li><a href="https://www.nvaccess.org/about-nvda/">NVDA: Free screen reader</a> (useful for testing)</li>
	<li><a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines 2.1</a></li>
</ul>

<ul class="pager mrgn-tp-xl">
	<li class="previous"><a href="../accessible-excel-documents" rel="prev">Previous: Accessible Excel workbooks</a></li>
	<li class="next disabled"><a href="../accessible-excel-documents" rel="next">Next:</a></li>
</ul>
