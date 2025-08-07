---
title: Alternative text and long description – Best practices
layout: layouts/base.njk
description: Alternative text (or alt text) is text that describes and conveys the meaning of a visual non-text item like an image, flowchart, graph and so on. This document will guide you to determine the type of alt text needed and provide you with tips on writing an alt text and long descriptions for simple and complex images, like charts, maps and so on.
role:
  - author
  - development
  - testing
toggle: texte-alternatif-et-description-longue-bonnes-pratiques
subject:
  - howTos
tags:
  - createWebContent
---

## Description

Alternative text, also known as alt text or alt tags is text that describes and conveys the meaning of a visual non-text item like an image, flowchart, graph or table.

Adding an alt text benefits many users, such as:

- People who use screen readers or have difficulty understanding the meaning of visual content. Screen readers will read the alt text to the user, allowing them to understand what is on the screen and avoid missing out on important information/content.
- People who are deaf-blind can read the text in braille.

## Determining the type of alt text

Ask yourself the following questions:

- Does this image contain important information?
- If the image was removed, would someone still get all the information from the page?

If the image does not convey information or the information is available in the document/page, it’s decorative.

## Alt text for decorative images

For Word and PowerPoint, type ‘Decorative’ in the alt text box. Do not check the box ‘Mark it as decorative’ as some people may use an older version of Word/PowerPoint and the checkbox will not apply.

Marking an image as decorative varies between Learning Management Systems (<abbr>LMSs</abbr>). When designing a web product in HTML, W3C recommends using a null (or empty) alt text which is an open and closed quotation mark (`alt=“”`).

## Meaningful alt text

- The context of the image is key! Ask yourself, what information does the image convey?
- One approach is to imagine that you are describing the image to a person over the phone.
- Keep it short and simple like a tweet (125 characters maximum). Sometimes it’s hard to describe an image in 125 characters or less because it’s very detailed. If your alt text is longer than this, you will need to add a long description and mention in your alt text that a long description follows.

For example: The water cycle, a long description follows.

- Be sure to provide concise alternative text to help readers decide if they are interested in the longer description.
- Don't start your alt text with "image of" or "photo of". The screen reader will let the user know it’s an image.
- For Office Suite, leave the ‘Title’ field empty when entering alt text, only the ‘Description’ box needs to be filled.

## Text as images

Sometimes users will want to customize text to suit their needs, like increase the font size, change the font color and so on. When text is presented as an image, it’s difficult for a user to customize the text. When possible, use text along with CSS to apply styling like the font family, color.

If a logo is being used, provide an alt text of the text in the logo.

## Complex images

### Charts and Graphs

The alt text should include the following information:

- The chart or graph type
- Type of data
- Brief description of the chart or graph
  - For example: A bar graph of the number of courses taken in Q4 compared to Q3 showing a slight increase in numbers.

Your long description should provide the same information that’s presented in the chart or graph. It should include information like:

- The information the graph is conveying
- Trends
- Categories
- Axis information (X and Y)
- Minimum and maximum values

Depending on the graph and the information it’s trying to convey, the long description can be presented as a table, keeping in mind the elements needed to create an accessible table.

### Flowcharts and concept maps

When using a flowchart or concept map to show a process or the relationship between concepts, the long description can be written in a list-based outline format. PennState provides some [examples of long descriptions for flowcharts and concept maps](https://accessibility.psu.edu/images/flowcharts/).

### Tables

#### For Word and PowerPoint

- Tables will need an alt text to give the user an idea of what data they will come across:
  - Right click on the table, select Table properties, then the Alt text tab. Only enter information in the description field, not the title field.
- Do not include ‘table of’, the screen reader will announce it’s a table.
- The alternative text should provide some details about what the table shows. For example: Number of courses taken in Finance, Human Resource and Security from April to June 2022.
- Identify the row headers:
  - Select the row, right click on it and select Table properties. Select the row tab and check ‘Repeat as header’ at the top of each page.
- Place the title of the table as a heading outside of the table, not in a merged row.
- Have multiple simple tables instead of merging cells. Screen readers may not read the data properly.

#### HTML:

- Use proper HTML markup to create a table, don’t create fake tables using CSS and div’s:

  - `<table>` defines a table
  - `<th>` defines a header cell in a table
  - `<tr>` defines a row in a table
  - `<td>` defines a cell in a table
  - `<thead>` defines a header content in a table
  - `<tbody>` defines a body content in a table
  - `<tfoot>` defines footer content in a table

- Table headers must be marked with `<th>`:
  - Scope of the header must be added in the `<th>` tag
    - `scope=“col”`
    - `scope=“row”`
  - Use `scope=“colgroup”` or `scope=“rowgroup”` when merging multiple columns or rows under one header.
- All tables require a caption:
  - Captions identify the overall topic of a table and is useful in most situations.
- A summary is required for complex tables (multiple column headers):
  - A summary provides orientation or navigation hints in complex tables.
- Do not refer table headers to nested, merged or separated tables.
- Do not use tables for purely visual layout purposes.

### Maps

Like other images, when thinking of the alt text for maps, think about the purpose or context of the map. Is it showing a location? Multiple locations? Directions?

#### A location or landmarks or locations

Include the landmark and address. For example: The House of Commons is located at West Block (111 Wellington Street) on Parliament Hill in Ottawa, Ontario.

#### Multiple locations or landmarks

Provide context on what the locations or landmarks are of. If the map is showing multiple locations or landmarks, a long description will most likely be needed. For example: Bus stop locations in Downtown Fredericton. Long description follows.

#### Directions

If the map is showing directions, the alt text should reflect that. The long description would be a simple, text based directions. For example: Directions from Airport Station (stop ID 5844) to the Canada Justice Department. Long description follows.

## Tips for writing long descriptions

- Long descriptions explain information that is presented in complex infographics or images. You must provide a long description if you can't describe the content and function of the image in less than 140 characters. If you can describe the image in less than 140 characters, use alternative text instead.
- A long description usually goes right below the image.
- If a detailed and equivalent explanation of the image appears in the text immediately before or after a complex image, you don't have to provide a long description.
- If you provide a long description for an image, you must also provide alternative text for the image with information that the long description follows.
- In some cases, the information conveyed is the appearance of an image (e.g., a work of art, an architectural detail, etc.). In these cases, the long description should be a textual representation of the important information conveyed by the image.

## Useful links about text alternative

- [Non-text content – Understanding SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) (WCAG)
- [Requirement for providing text to act as an alternative for images](https://html.spec.whatwg.org/multipage/images.html#alt) (HTML5)
- [Innaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/) (W3C Group Draft Note)
- [Images and videos](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-style-guide.html#toc10) (Canada.ca Content Style Guide)
- It can be difficult to know what to put in alt text, as well as when alt text is needed and when it isn't. [W3C Alt Decision](https://www.w3.org/WAI/tutorials/images/decision-tree/) Tree can help you determine what to do in certain situations.
- [Canada.ca Style Guide - Include long descriptions for complex images](https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-content-style-guide.html#wp6-3)
