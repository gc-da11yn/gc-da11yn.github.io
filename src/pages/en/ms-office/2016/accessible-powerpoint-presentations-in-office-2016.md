---
title: Accessible PowerPoint presentations in Office 2016
layout: layouts/base.njk
description: Accessible practices for Microsoft PowerPoint 2016 document creation.
toggle: presentations-powerpoint-accessibles-dans-office-2016
fontIcon: fa-file-powerpoint
---

## Accessibility Checker

The Microsoft Office suite (Word, Excel, Power Point) provides a built-in accessibility validator. The checker does not identify all issues but looks for things such as missing alternative text, duplicate slide titles and potential reading order issues.

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/powerpoint-01.jpg" alt="Screenshot of Check for Issues menu" />
</div>
</div>

How to use the Accessibility Checker:

1. On the **File** Tab > **Info** > **Check for Issues** > **Check Accessibility**
2. Review the results in the **Accessibility Checker** pane
3. Address the listed issues. Helpful information to understand and fix the different issues is provided at the bottom of the pane

## PowerPoint structure

### Design themes

The slide theme or template has a large effect on accessibility. The **Design** tab contains many built-in **Themes** and colour **Variants** that can be used to change the look of a presentation. PowerPoint also offers the ability to create custom themes.

Choose themes that meet colour contrast requirements and that have simple backgrounds making them easier to read. If the presentation will be viewed on a projector, the contrast and readability may need to be even more pronounced than on a computer monitor.

### Slide title

Give every slide a unique title. People who have vision loss or learning / cognitive disabilities rely on slide titles to navigate. For example, by skimming or using a screen reader, they can quickly scan through a list of slide titles and go right to the slide they want.

1. To restore all placeholders for the selected slide, on the **Home** tab, in the **Slides** group, select **Reset**
2. On the slide, type a unique and descriptive title

To make a title invisible on the slide, but still voiced by screen readers:

1. The **Home** tab, in the **Drawing** group, select **Arrange**
2. In the **Arrange** menu, select **Selection Pane**
3. In the **Selection** pane, locate the **Title** text box, and then activate the eye icon next to it

### Text structure

#### Text formatting

Ensure that the type is large enough to read easily. If your presentation will be viewed via projector, the type should be larger than on printed handouts.

Recommended formatting to improve legibility:

- 30-point type
- Sans-serif fonts, such as Arial, Helvetica, Verdana, Calibri, or Century Gothic

Three to seven bullet points per slide is a good rule of thumb.

Avoid using all capitals or excessive italics or underline.

Ensure there are blank spaces between sentences or paragraphs.

#### Headings

Ensure headings and labels are descriptive and unique. Section headings facilitate navigation and comprehension of presentations. To evaluate headings:

- Determine if headings and labels are provided
- Are the headings descriptive?
- Are the headings and labels unique?
- Are the headings provided using titles and sub-title placeholders?

To verify that headings and labels have been properly structured, navigate on the **Home** tab to **Slides**, select **Slide Layout**. Verify that the slide layout matches the layout on the current slide.

### Reading order

By default, a screen reader will read the slide title first, followed by other content in elements defined in the slide layout. Then it will read any additional content on the side in the order it was added to the slide. If you add content with this principle in mind, it should be presented to screen reader users in a logical order.

Use the **Selection Pane** to set the order in which the screen readers read the slide contents. The **Selection Pane** lists the objects on the slide in bottom to top order in the Office 2013 version of PowerPoint and top to bottom in the Office 2016 version of PowerPoint. When the screen reader reads this slide, it reads the objects in the reverse order listed in the **Selection Pane**. The pane will show every object on the slide. Highlighting an object in the pane will also highlight it in the slide.

1. On the **Home** tab, in the **Drawing** group, select **Arrange**
2. In the **Arrange** menu, select **Selection Pane**
3. In the **Selection Pane**, to change the reading order, do one of the following:
    1. Drag and drop items to the new location
    2. Select the item and then select the Up arrow button (Bring Forward) or Down arrow button (Send Backward)

### Tables

PowerPoint allows you to identify a single row of column headers and a single column of row headers.

Most screen readers do not identify table headers in PowerPoint, but we still recommend going through this process. It is important to identify headers visually. These headers will be maintained when saving to PDF.

To identify table headers:

1. Focus the table by clicking inside or tabbing to the content. The Table Tools options should appear and the **Design** tab should be open
2. If the top row of the table contains headers for each column (most tables do), make sure the **Header Row** checkbox is checked
3. If the first column of the table contains headers for each row, make sure the **First Column** checkbox is checked
4. In the Table Styles section, select a style where the table headers are clearly identified visually. Make sure the style has good contrast

## Visuals and alternative text (“alt text”)

Use alt text to describe pictures, images, graphics, graphs, tables, and flowcharts, so that a screen reader can access them.

Alt text should always communicate the purpose of visual images accurately and succinctly. In general, it is a short description of the image that answers the question “What information is this image conveying?”. A longer description may be needed for complex diagrams and images. General guidelines for creating alt text include:

- Don’t repeat the text of an adjacent caption. Screen readers read both the caption and the alt text, so avoid having the same details in both.
- Use punctuation for full sentences

### Images

PowerPoint presentations usually include images. Images need equivalent alternative text. To add **alt text** to an image:

1. Open the context menu for the image by right-clicking or pressing the application key.
2. Choose **Format Picture**
3. In the **Format Picture** sidebar, activate the **Size & Properties** icon and expand **Alt Text**
4. Enter a title in the **Title** box. Note: This box should only be filled in if you are entering a detailed or long explanation in the Description box
5. Enter an appropriate alternative text in the in the **Description** box
6. Activate the **Close** button

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/powerpoint-02.jpg" alt="Screenshot of Format Picture tool">
</div>
</div>

Tips and Guidelines:

- Don’t begin with the words “Image of” at the start of the alt text. Screen readers tell the user that there is an image and then read the alt text.
- Do begin with “Screenshot of…” if the image is a screenshot
- An image requires no alternative text if it is purely decorative. Set the alt text to “decorative” (no quotes).

### SmartArt graphics (charts and diagrams)

Ensure complex images and charts provide long descriptions. Complex images include schematics, plans, diagrams or any other image that conveys a large amount of information. This is necessary as users who cannot see the complex image will not be able to sufficiently determine its value/purpose.

To add a long description to a diagram or chart:

1. Open the context menu for the chart/diagram and activate **Format Chart Area**
2. The **Format Chart Area** sidebar will appear
3. Activate **Layout and Properties**
4. Provide a meaningful long description
    1. Describe the title of the chart
    2. The role it plays in the document
    3. The relationship of elements in the correct order
5. Activate the **Close** Button

Ensure that colour is not being used as the only way information is being conveyed in any graphics.

### Video and audio

PowerPoint 2016 supports the playback of video with multiple audio tracks. It also supports closed captions and subtitles that are embedded in video files.

Supported video formats for captions and subtitles vary depending on the operating system that you're using. Each operating system has settings to adjust how the closed captions or subtitles are displayed. Embedded audio also requires a transcript. Closed captions typically also describe audio cues such as music or sound effects that occur off-screen.

Video description means audio-narrated descriptions of a video's key visual elements. These descriptions are inserted into natural pauses in the program's dialogue. Video description makes video more accessible to individuals who are blind or visually impaired. Subtitles typically contain a transcription (or translation) of the dialogue.

If you embed video, make sure that the player controls — start, pause and stop — are accessible using the keyboard.

## Additional features

### Transitions and animations

It is best practice to keep any transitions and animations simple and brief. Complex or automatic transitions and animations can be distracting or add a layer of further comprehension that is unnecessary.

Limiting the use of transitions and animation to one per slide will help to improve the usability of your presentation for screen reader users. If you must use Animations in your PowerPoint presentations, they should be made accessible.

In addition, you should carefully consider your use of decorative animations. Constant motion on the screen may cause a screen reader to refresh frequently, thus making the presentation more difficult to use. Keeping animations to a minimum or eliminating them altogether will increase the accessibility of your content.

### Grouping elements

Grouping visual elements such as images, shapes, or SmartArt should generally be avoided as it changes the information that will be read by screen readers.

However, if it is more meaningful to group elements that have a relationship, there are techniques to do so. When using the Group feature to combine visual elements, ensure that sufficient alt text is used to indicate any conveyed information to the user. Correspondingly, if the grouped elements are purely decorative, indicate this in your alt text by marking it as such.

1. Select the visual elements you want to group together while holding down **CTRL**
2. Open the context menu and activate **Group**

Alternatively, you can do one of the following after selecting the element you wish to group:

1. To group shapes and other objects, on the **Drawing Tools Format** tab, activate **Group > Group**
2. To group pictures, on the **Picture Tools Format** tab, activate **Group > Group**

<div class="row">
<div class="col-md-7">
<img class="img-responsive" src="{{ rootPath }}img/en/office2016/powerpoint-03.jpg" alt="Screenshot of Group menu">
</div>
</div>

## Additional resources

- [Web AIM: Creating Accessible PowerPoint Presentations](https://webaim.org/techniques/powerpoint/)
- [Microsoft: How to Make Your PowerPoint Presentation Accessible](https://support.office.com/en-us/article/make-your-powerpoint-presentations-accessible-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25)
- [Queen's University: Accessible PowerPoints Checklists](https://www.queensu.ca/accessibility/how-info/accessible-documents/accessible-powerpoint-presentations-checklist)
