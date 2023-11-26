---
title: Accessible Word documents in Office 2016
layout: layouts/base.njk
description: Accessible practices for Microsoft Word 2016 document creation.
toggle: documents-word-accessibles-dans-office-2016
fontIcon: fa-file-word
---

## Accessibility Checker

Microsoft Office (Word, Excel, Power Point) provides a built-in accessibility validator. The checker does not identify all issues, but looks for things such as: missing alternative text, duplicate slide titles, and potential reading order issues.

<div class="row">
<div class="col-md-7 mrgn-bttm-md">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/word-01.jpg" alt="Screenshot of &quot;Check for issues&quot; menu">
</div>
</div>

How to use the Accessibility Checker:

1. Active the File Tab > Info > Check for Issues > Check Accessibility
2. Activate the results in the **Accessibility Checker** pane
3. Address the listed issues. Helpful information to understand and fix the different issues is provided at the bottom of the pane

## Templates

Master templates are used to define the layout and content of a document/presentation. This can be used to create an accessible document template that does not require significant adaptation.

What to look for when creating an accessible template:

1. Colour contrast and use of colour
2. Header and footer text
3. Font size, font face, and spacing of content
4. Consistent styles for headings, lists, etc.

How to create a template:

1. Activate the **File** tab in the ribbon > **Save As**
2. Activate **Computer** and choose a folder to save your template
3. Type a name for your template in the **File name** field
4. Activate the **Word Template** option in the **Save as type** list

<div class="row">
<div class="col-md-7 mrgn-bttm-md">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/word-02.jpg" alt="Screenshot of saving as a template">
</div>
</div>

How to open a template:

1. Activate the **File** tab in the ribbon > **Open**
2. Activate **Computer**
3. Press the **Browse** icon
4. Open the file folder “**Custom Office Templates**” under **My Documents**
5. Select the template you created and activate **Open**
6. Make the changes you want, then save and close the template

## Page layout

Navigating and locating content can be a major challenge for users who have vision loss or learning / cognitive disabilities. To create an accessible document, use built-in styles.

### Headings

Headings allow users to navigate and locate content. To ensure the document structure improves accessibility and readability, use built-in headings and styles. Using proper heading order makes it easier for screen readers to read a document correctly.

Ensure headings are denoted through structure and not only denoted implicitly (by using different fonts, font sizes, bolding, italics, etc.). Created styles will not be treated structurally as headings.

<div class="row">
<div class="col-md-9 mrgn-bttm-md">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/word-03.jpg" alt="Screenshot of Styles toolbar">
</div>
</div>

To style headings:

1. Find the **Home** tab
2. Select the desired heading level from the **Styles** section of the ribbon
3. To see more heading levels, expand the **Styles** section of the ribbon

To check headings:

1. Select the text that appears to be a heading
2. Open the **Home** tab and ensure the **Styles** toolbar on the ribbon is visible
3. Place the cursor on each heading, and verify that it is linked to the appropriate heading style in the **Styles** toolbar

### Headers and Footers

Ensure headers and footers are properly formatted. When headers and footers are typed in as text on each page, users of adaptive technology often mistake them as part of the page content. Therefore, do not create headers and footers that can be accessed in the editable area of the document.

To use headers and footers in Word:

1. Select the Insert tab from the ribbon
2. From the **Headers and Footers** section of the ribbon, select either “**Header**” or “**Footer**”
3. Choose your preferred style
4. After creating the **Header** or **Footer**, press the “**Esc**” key to return to the main body of the document

<div class="row">
<div class="col-md-9">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/word-04.jpg" alt="Screenshot of Insert Header pop-up">
</div>
</div>

### Columns

To ensure that multi-column content will be read in the proper order by screen readers, use the built-in columns feature to create structural columns.

To insert columns:

1. Select the **Page Layout** tab from the ribbon
2. Choose "**Columns**" menu button under the "**Page Setup**" tools
3. Select the desired number of columns from the grid
4. As you type, the current column will fill and spill into the next

![Screenshot of Columns menu]({{ rootPath }}img/en/office2016/word-05.jpg)

### Lists

Lists are used to group and organize related items. Ensure lists and sub-lists are structured properly. Do not create lists manually using tabs, dashes, or asterisks.

Word provides features to create ordered (numbered) or unordered (bulleted) lists. Using the built-in list formatting allows users of screen readers to rapidly browse and access list content, and to understand the relationship between list items.

To create a list:

- Open the **Home** tab in the ribbon
- Under the **Paragraph** toolbar, you will find list options such as **bullets, numbering, sorting, etc.**

<div class="row">
<div class="col-md-6">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/word-06.jpg" alt="Screenshot of Paragraph toolbar">
</div>
</div>

## Fonts

Choose fonts and styles that are easy to read.

- Use “sans serif” fonts with sufficient spacing between letters (Ex. Arial, Verdana, Century Gothic)
- Use fonts 11-14 points in size for body text
- Fonts that are too small or too large may not be readable by some users

## Non-text Elements

### Alternative text

Visual elements such as photos, screenshots, icons, videos and 3D models should all include alternative text. Alt text helps people who cannot see the image, understand the message and what is important. Good alt text should be concise and to the point. It should not be more than a sentence or two and should include the important information the image conveys. When creating an alt text, do not begin with “this is an image of”, but do begin with “Screenshot of” for screenshots.

To assign alternative text to images:

1. Open the context menu for the image by right-clicking or pressing the application key
2. Activate **Format Picture**
3. Activate on the **Layout and Property** tool
4. Enter a title in the **Title** field. Note: This field should only be filled in if you are entering a longer explanation in the Description field
5. Enter an appropriate alternative text in the **Description** field
6. If the image is meaningful, convey in words the meaning, function, or purpose communicated by the image
7. If an image conveys no information (i.e., it is decorative or redundant), enter the word “decorative” (no quotes) in the **Description field.**
8. Activate the **Close** button

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/word-07.jpg" alt="Screenshot of Format Picture menu">
</div>
</div>

### Charts and Diagrams

Ensure complex images and charts provide long descriptions. Complex images include: schematics, plans, diagrams, or any other image that conveys a large amount of information. This is necessary, as users who cannot see the complex image will not be able to sufficiently determine its value/purpose.

To add a long description to diagrams and chart:

1. Open the context menu for the chart/diagram and activate **Format Chart Area**
2. The **Format Chart Area** menu will open
3. Activate **Layout and Properties**
4. Provide a meaningful long description
    1. Describe the title of the chart
    2. The role it plays in the document
    3. The relationship of elements in the correct order
5. Activate the **Close** button

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/word-08.jpg" alt="Screenshot of Format Chart Area menu">
</div>
</div>

### Links

People who use screen readers sometimes scan a list of links; therefore, ensure link text is meaningful within the context of the document. Link text should accurately reflect the target and purpose of the link. If link text is not provided, users will need to follow the link to determine its purpose, which can present difficulties for users of adaptive technology. An example of appropriate link text would be including the full title of the destination rather than linking to the text “Click Here”.

To add hyperlinks with meaningful text:

1. Type or paste a web address in your document and press spacebar or "Enter" to convert into a hyperlink
2. Select the link and open the context menu
3. Activate **Edit Hyperlink**
4. Edit the **Text to Display** **field with meaningful text**.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/word-09.jpg" alt="Screenshot of Edit Hyperlink">
</div>
</div>

## Additional Resources

- [Microsoft: Make your Word documents accessible to people with disabilities](https://support.office.com/en-us/article/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d)
- [WebAIM: Microsoft Word, creating accessible documents](https://webaim.org/techniques/word/)
