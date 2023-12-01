---
title: Find out how to make accessible digital forms
description: With this guide, find out what the best format is and other helpful tips for making accessible digital forms.
subject:
  - howTos
tags:
  - createForms
toggle: ameliorer-l-accessibilite-des-formulaires
internalLinks: true
---
## The most accessible format for forms: HTML

HTML is the best and most flexible format, even compared to Word and PDF. When coded correctly, HTML forms provide the best accessibility features including:

- **Programmatic labels:** The association between form elements and their labels is provided to adaptive technologies. For example, a screen-reader will announce the form field label when the field is focused and a voice recognition user can issue a command using the label (e.g. “Go to Password field”).
- **Adaptability:** The presentation can be altered to suit the user’s font and color requirements. HTML’s ability to “reflow” means that the form will be usable at high zoom and on small screens (e.g. mobile devices).
- **Grouping elements:** Radio buttons, checkboxes, etc. can have a question (“legend”) programmatically associated with the set of related answers (“fields”).
- **Validation:** JavaScript can be used to validate entries and provide error messages in flexible and accessible ways.

For websites using the Web Experience Toolkit, follow the [Web Experience Toolkit Design Guide](https://wet-boew.github.io/wet-boew-styleguide/design/forms-en.html) to create an accessible HTML form.

## Easy and accessible: simple Word document

Microsoft Word documents (without form fields) are the next best option to create accessible forms. A Word document, like HTML, can be adapted to meet specific user needs (e.g. font size can be increased), and can be a good choice despite some limitations. The document should be laid out in a simple, single column question and answer style, with a blank line provided under each question for the response to be entered. However, in such a simple Word document, you will not be able to provide form elements such as checkboxes or automated validation to ensure that required fields have been completed. Protecting content which you don’t want edited (such as the form questions) can make it difficult for users of adaptive technology to access that content at all. Working within these limitations, a simple Word document may be all you need to gather information. It is both the easiest format to create, and the easiest to adapt to specific user needs.

## Not recommended: complex Word document

Using built-in form elements such as checkboxes in Microsoft Word will result in an inaccessible form. For more information on why this is, read the [accessibility limitations of Microsoft Word forms](https://accessible-digital-documents.com/blog/you-cant-make-microsoft-word-forms-accessible-enough/). Microsoft has even hidden these features in recent versions of Word under “Legacy tools”. Form fields in Word are difficult to navigate using only the keyboard, and don’t have explicit label associations. This poses difficulties for users of adaptive technologies. For example, a screen reader user will need to navigate away from the form field to find a nearby label – an issue compounded by the difficulties in keyboard navigation and accessing protected content.

## Difficult and semi-accessible: PDF

Portable Document Format (PDF) is the most common format for forms in the GC. It is also one of the hardest formats to make accessible. In order to preserve the formatting when printing the form, much of the presentation is “baked in” into the file. This significantly limits adaptability when a user is filling a PDF form electronically. For example, most PDF forms do not successfully reflow in response to a smaller viewport, decreasing usability for users with low vision or on mobile devices. User preferences for colors and fonts are rarely reflected. It is also difficult to adapt a pdf form to alternate formats such as large print or braille.

Fillable pdf forms are widely used because they offer many of the features of HTML forms: form elements like checkboxes, programmatic labels, and even JavaScript validation. If you can’t use an HTML form but need these features, take steps to ensure the PDF is as accessible as the format allows.

### Creating a PDF form

While specific tools for creating PDF forms exist (e.g. Adobe LiveCycle), you can use Microsoft Word as a starting point to create a PDF form (See [Create accessible PDFs](https://support.microsoft.com/en-us/office/create-accessible-pdfs-064625e0-56ea-4e16-ad71-3aa33bb4b7ed)). Do not create the form fields themselves in Word. Rather, just leave blank space to create them in the PDF editor (e.g. Acrobat Pro, Foxit PDF Editor).

First, the Word document must itself be accessible. In addition to following general document accessibility guidelines, avoid common form design errors:

1. Don’t use tables for visual layout.
    1. Instead, a linear order is the simplest and most accessible option, with each form field on a new line.
    2. If you want a “multi-column” visual style, use tab stops or columns. You can use custom Styles to create box outlines. Do not use text boxes.
2. Create headings to identify the various sections of the form, to make it easier to navigate.
    1. Note that headings will only work outside of a table.

Once the form template has been created in Word to be as accessible as possible, export it to PDF. Ensure that the options are selected to create Bookmarks from headings and to create tags in the PDF.

You will then have to create the form fields in the PDF software. Please see this [guide from Adobe on creating accessible forms in Acrobat Pro DC](https://www.adobe.com/accessibility/products/acrobat/creating-accessible-forms.html). You must explicitly indicate form field labels as “tooltips”. See also Foxit PDF Editor [video tutorials](https://www.foxitsoftware.com/support/tutorial/) and [user manuals](https://www.foxitsoftware.com/support/usermanuals.php).

## E-signatures

Carefully consider the requirements for a signature. The Treasury Board of Canada Secretariat provides [guidance on using electronic signatures](https://www.canada.ca/en/government/system/digital-government/online-security-privacy/government-canada-guidance-using-electronic-signatures.html). Often, asking the user to type their name on a line or insert a signature image is sufficient for a Word or PDF document. The identity verification is accomplished by sending the document as an email attachment. For an HTML form, asking the user to type their name and select a checkbox confirming their identity may also be sufficient.

When greater security is required, a digital signature can be used in both PDF and Microsoft Word documents. In order to digitally sign a document, you will need to have a myKey. See <a href="https://wiki.gccollab.ca/images/5/57/TCDS_EN_HOWTO.DOCX" download>Transport Canada’s Digital Signatures Technical User Guide<span class="fas fa-external-link-square-alt mrgn-lft-sm mrgn-rght-sm" aria-hidden="true"></span><span class="wb-inv"> Internal link</span><i class="fas fa-file-word mrg-rght-sm" aria-hidden="true"></i> <abbr title="Document Microsoft Word">Word</abbr>, 1.1 <abbr title="MegaByte">MB</abbr></a> for more information.
