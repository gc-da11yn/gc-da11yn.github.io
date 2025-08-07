---
title: Accessible PDF documents in Microsoft 365
description: Accessible practices for PDF document creation.
role:
  - analysis
  - author
  - designer
  - development
  - testing
  - administration
toggle: documents-pdf-accessibles-dans-microsoft-365
fontIcon: fa-file-pdf
---

## Introduction

PDF (Portable Document Format) is a common format for distributing printable documents. This format was created by Adobe, and can be opened with Adobe Acrobat as well as many other tools and some web browsers.

## What makes a PDF accessible?

An accessible PDF is usable by persons with a variety of disabilities. For instance, a blind user may use a screen reader, a braille display, or even print the document in braille format. A person with a motor impairment may use a keyboard rather than a mouse to navigate between form fields. Other users may need to adjust the font size or spacing to compensate for vision loss or learning / cognitive disabilities.

General document accessibility guidelines also apply to PDFs. That means that the document should be properly structured with headings, there is sufficient contrast, and images have alternate text. Make sure to read the general document accessibility guide before continuing.

Since PDF documents often contain interactive components like forms, their accessibility should be evaluated based on the [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/). Following this guide does not ensure compliance with these guidelines, but it is a good start.

## Recommended authoring tools

### Microsoft Word

Note: These instructions apply to the current version of Word as of December 2020.

The easiest way to create an accessible PDF is to begin with an accessible Word document. Once you have created an accessible document in Word, if you do not have a professional version of a PDF authoring tool installed, export it through **File** > **Export** > **Create PDF/XPS Document** > **Create PDF/XPS** (do not use "print to PDF"!).

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ pathPrefix }}/img/en/office365/pdf-365-001.png" alt="Screenshot of Export dialog in Word demonstrating where in the file menu to export a PDF. Namely File > Export > Create PDF/XPS">
</div>
</div>

In the dialog box, select **Options** and check these boxes:

- Create bookmarks using: Headings (or bookmarks, if you have created them)
- Document properties
- Document structure tags

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ pathPrefix }}/img/en/office365/pdf-365-002.png" alt="Screenshot of PDF export options in Word">
</div>
</div>

If you do have a professional PDF authoring tool installed, a tab for the tool should be added to Microsoft Word Ribbon menu. To create a PDF:

- navigate the Ribbon menu
- find the PDF authoring tool tab
- make sure the options to create bookmarks and tags are enabled in the tool’s settings
- activate the Create PDF button

### Adobe products

Adobe Acrobat Pro, InDesign, FrameMaker, and LiveCycle Designer will export to tagged PDF, and offer more control over visual styles than Word. (LiveCycle Designer is specifically tailored to creating forms.)

### Other PDF authoring tools

Outside of the Adobe family of products as mentioned above, there are several PDF authoring tools out there such as Foxit PDF Editor and Kofax Power PDF. This document, however, focuses on using Foxit PDF Editor.

To create a PDF document using a professional version of Foxit PDF Editor, you can consult this tutorial about [Creating PDFs](https://youtu.be/tQYtVLmf2Yo).

## Validating and remediating accessibility with Foxit PDF Editor

Foxit PDF Editor is an essential tool for validating and remediating PDF accessibility. The current version as of December 2020 is Foxit PDF Editor Business 10.1. The following information is specific to this version.

### Automated validation

Foxit PDF Editor provides a built-in accessibility checker. The checker does not identify all issues, but looks for things such as: missing document title, tags, figures alternative text and other potential issues.

To run the accessibility checker, open your PDF document and **in the Ribbon** select the **Accessibility** tab then select **Full Check**.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ pathPrefix }}/img/en/office365/pdf-365-003.png" alt="Screenshot of Accessibility Checker in Phantom PDF">
</div>
</div>

Under **Report Options** uncheck "**Create accessibility report**" if you do not wish to export the issues, and select **Start Checking**.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ pathPrefix }}/img/en/office365/pdf-365-004.png" alt="Screenshot of the Accessibility Checker options menu in Phantom PDF">
</div>
</div>

This will generate a list of issues similar to the one pictured above. Inspect each failure, issues will need to be either resolved or checked manually.

### Remediating issues

Some issues can be fixed simply by opening the **context** menu (right-clicking) for the issue and selecting **Fix**.

## Common issues and solutions

Besides general accessibility issues, pay special attention to the following areas of PDF accessibility.

### Document structure (tags)

An important part of PDF accessibility is “tagging”. Using a recommended authoring tool, tags will be automatically created based on the existing document structure. For instance, a heading created in Microsoft Word will be tagged as a heading in the PDF when you export. These tags are similar to HTML.

To check if a document is tagged, navigate to **File** \> **Properties** or press **Control + D** to bring up the document properties, or run the Accessibility Checker. If not tagged, return to your authoring tool (e.g. Word) if possible, ensure you have structured the document correctly, and export again using the settings given above.

To manually set tags, use the [Reading Order tool](https://youtu.be/bi7HEfQj1AQ) (**Accessibility** > **Setup** > **Reading Order**)

### Alternative text (“alt text”) for Images

To set alt text in PhantomPDF, navigate to **Accessibility** \> **Alternate Text** > **Set Alternate Text**. If your image does not show up in the list of figures, or the message “There is no figure information to display” appears, the images have not been correctly tagged as figures, and you will first have to tag them.

Decorative images (which should be ignored by screen readers) should be tagged as “Background”.

### Language and title

A meaningful title and the document’s language need to be specified. In PhantomPDF, navigate to **File** > **Properties** or press **Control + D** to bring up the document’s properties. The language field can be found under the **Advanced** tab.

Bilingual PDF documents present special issues and should be avoided, especially for forms. It is preferable to offer multiple versions of the same PDF, one for each language.

A passage in a different language than the main language of the document must be tagged separately. For example, an English paragraph may appear in a French document indicating that the document is also available in English. For more information, visit the page about [Specifying the language for a passage or phrase](https://www.w3.org/TR/WCAG20-TECHS/PDF19.html). You can set the language for the text in a subtree of the tags tree in the Tags panel or in the Content panel located in the navigation pane. To do this, open the **context** menu (right-clicking) for an element, choose **Properties...**, and select a language in the Object Properties dialog box.

### Scanned documents: images of text

PDFs created from scanning in a paper document need, at minimum, to have the text recognized in order to be made accessible. This can be done automatically using Optical Character Recognition (OCR). Please note that OCR is not always 100% accurate, so be sure to review the text manually after conversion. See [Learn how to Scan and OCR editable PDFs](https://youtu.be/cZpmMMPhFbw).

### Bookmarks

Any PDF longer than one page should include bookmarks. These may be automatically generated (such as when exporting from Word, provided the correct settings are used – see Microsoft Word section above) or you may have to [create bookmarks manually within PhantomPDF](https://youtu.be/Ron1tiWgDJQ).

### Forms

Creating an accessible PDF form is tricky, as form fields created in other programs are not directly exported into the PDF. See [WebAIM’s guide to creating accessible forms in PhantomPDF](https://webaim.org/techniques/foxit/forms).

Some general tips:

- **Instructions**: Put instructions at the beginning of the form, rather than in between form fields.
- **Labels**: In PDF documents, there is no way to specify what label applies to what form field, so each form field must also have its label entered into the “Tooltip” field. Radio buttons and check boxes require additional steps.
- **Input format:** Ensure that the correct format is suggested, if one is required. Ex. Date of birth (YYYY-MM-DD). As with all labels, this should be repeated in the tooltip.
- **Required fields:** Indicate which fields are required. Do not rely solely on colour. If an asterisk (\*) is used to indicate required fields, include the following text at the start of the form (e.g. \* indicates a required field).
- **Tab order**: Test the form using only the keyboard (using the **Tab** key to move between fields).
  - Ensure that it is obvious (visually) which field is active at all times
  - Ensure that the tab order follows the expected (visual) order

### Reading order

Documents created in graphics software, rather than Word, may have issues with reading order. For instance, the elements might be read in the order they were created, rather than the visual order. Multiple columns of text can also cause reading order issues. This can be checked by navigating to **Home** > **Reflow** or pressing **Control + 4** to reflow the document (See “Other PDF accessibility testing tools” below). See [Review and repair the content order](https://webaim.org/techniques/foxit/phantompdf#content_order).

### Missing spaces and line breaks

Improper characters used by the author for spaces or line breaks causes words to jam together with reflow. This authoring problem occurs frequently with PDF. To test for this, export to plain text in PhantomPDF by navigating to **Convert** > **Export** > **To Other** > **To Plain Text**, or select all and copy / paste into a plain text editor like Notepad. In the plain text version, are there missing spaces and line breaks? If so, check your export settings in the authoring program. Next, try using a wider spaced font. If you have reduced the letter or word spacing, put this back to the default. If the issue persists, consider using a different authoring tool.

### Tables

Table cells must be associated with table headers. To make your life easier, begin with a simple table (one with no merged cells) in Microsoft Word. Ensure that it is correctly structured with table headers by checking with the aforementioned Reading Order tool. An example of a correctly structured table is shown here. See [PDF Accessibility: Make tables more Accessible](https://youtu.be/6V7vyKG6bKs).

## Other PDF accessibility testing tools

Enabling PhantomPDF’s built-in accessibility features, located in the Ribbon under the tab **Accessibility** \> **Configuration** > **Setup Assistant**, allows you to manually test the reading order and other structural issues. WebAIM recommends that you [should still manually review the accessibility of your PDF after using PhantomPDF's other accessibility tools and features](https://webaim.org/techniques/foxit/phantompdf#other).

Testing a form with [NVDA (a free screen reader)](https://www.nvaccess.org/) will quickly identify label and tab order issues. Try to fill out the form using nothing but your ears and your keyboard. This will give you an idea of what screen reader users will experience.

An alternative to PhantomPDF’s inbuilt accessibility checker is [Free PDF Accessibility Checker (PAC) 2021 - PDF/UA Foundation (pdfua.foundation)](https://pdfua.foundation/en/pdf-accessibility-checker-pac/). While this program alone won’t allow you to remediate issues, you may be able to make your fixes upstream in the authoring tool (Word, InDesign, etc.). It may also identify issues that PhantomPDF does not.

## Additional resources

- [W3C PDF Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG-TECHS/pdf.html "W3C WCAG 2.0 Accessibility Guidelines to Creating PDFs") 23 techniques for solving specific WCAG violations, mostly forms and tables (100 pages, 2016)
- [WebAIM: Foxit and PDF Accessibility](https://webaim.org/techniques/foxit/) An article by WebAIM that outlines how to make accessible PDFs with Foxit PDF Editor (4 pages, 2019)
- [Foxit PDF Editor Instructional Videos](https://www.foxitsoftware.com/support/tutorial/)
