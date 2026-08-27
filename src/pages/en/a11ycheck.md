---
title: Easy Checks for Web Accessibility
description: Quick accessibility checks covering page structure, keyboard navigation, images, multimedia, and forms.
toggle: Vérifications faciles pour l'accessibilité du Web
subject:
  - howTos
tags:
  - testYourProducts
toc: true
---

## General

### Descriptive page title

<div class="row">

<div class="col-md-7">

#### Check

The page has a title that describes the page content and purpose.

#### How to test

Right-click on the page and inspect the HTML source. Locate the `<title>` element within the `<head>` section and read its text content.

#### Expected result

The `<title>` element contains text that accurately describes the page's content and purpose.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of a descriptive page title visible in the browser tab and in the HTML source.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/tag-in-title.png" alt="Example of the page's title tag matching the text displayed in the browser tab.">

<figcaption>

The inspect element window highlights the title tag, which references the title displayed at the top of the webpage. An arrow points from the HTML tag to the matching title on the webpage.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Semantic HTML

#### Check

Semantic HTML is used to mark up the structure of the page and represent the information, rather than relying on custom CSS to create the appearance of structure.

#### How to test

Check the code to see if correct HTML elements are used to structure the content based on each element's meaning, not its appearance. For example, verify that headings use `<h1>` through `<h6>` elements rather than styled `<div>` or `<span>` elements, and that lists use `<ul>` or `<ol>` rather than manually formatted text.

#### Expected result

Content structure is conveyed through appropriate semantic HTML elements rather than through visual styling alone.

### Heading structure

<div class="row">

<div class="col-md-7">

#### Check

The page has accurate and informative headings that are structured using `<h1>` through `<h6>` heading tags without skipping hierarchical levels.

#### How to test

Use an automated accessibility checker like [Accessibility Insights for Web](https://accessibilityinsights.io/downloads/) or [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) to check heading hierarchy and structure. For more information, consult [Quick Assess in Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/getstarted/quickassess/).

#### Expected result

Heading levels are sequential (no levels are skipped), and each heading accurately describes the content of its section.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of a well-organized heading hierarchy.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/heading-structure-en.jpg" alt="Good example of a well-organized heading structure.">

<figcaption>

A well-structured heading hierarchy using `<h1>`, `<h2>`, and `<h3>` tags, represented using a tree view.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Text resize

<div class="row">

<div class="col-md-7">

#### Check

Pages remain functional and readable when text is magnified to 200% of its initial size.

#### How to test

Set the browser zoom to 200% using a 1280 by 1024 viewport. Review the page for any loss of content or functionality.

#### Expected result

No content or functionality is lost, and text is not clipped, truncated, or obscured.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a bad example where text is truncated after zooming.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/responsive-design-en.jpg" alt="An example of a text resizing issue.">

<figcaption>

The label text does not fit within the search input field, causing the text to be truncated.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Content reflow

<div class="row">

<div class="col-md-7">

#### Check

Page content reflows without loss of content or functionality and without requiring horizontal scrolling when the viewport width is set to 320px.

#### How to test

Use a mobile device simulator such as the [Toggle device toolbar in Chrome DevTools](https://developer.chrome.com/docs/devtools/device-mode). Open the developer tools in your browser and use responsive design mode. Set the viewport width to 320px by narrowing the browser window or by zooming in. To do this when starting with a 1280px viewport width at 100% browser zoom, zoom in to 400%.

#### Expected result

All content remains visible and functional. No horizontal scrolling is required, and no text is clipped or hidden.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a bad example where horizontal scrollbars appear after zooming.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/reflow-design.png" alt="An example of content with zoomed-in borders and scrollbars.">

<figcaption>

Zoomed-in text with scrollbars highlighted. Arrows point to the horizontal scrollbar and the zoomed-in content's borders to show the relationship between these elements.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Page language

<div class="row">

<div class="col-md-7">

#### Check

The primary language of the page is identified using the `lang` attribute on the `<html>` element with a valid language code (e.g. `<html lang="en">` or `<html lang="fr">`).

#### How to test

Inspect the HTML source and verify that the `<html>` element has a `lang` attribute with a valid language code that matches the primary language of the page content.

#### Expected result

The `<html>` element has a `lang` attribute whose value correctly identifies the primary language of the page.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of the lang attribute on the html element.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/lang-attribute-page.png" alt="Example of a lang attribute.">

<figcaption>

The lang attribute is highlighted within the inspect element window, showing that this is an English page with the "en" lang attribute applied.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Colour contrast

<div class="row">

<div class="col-md-7">

#### Check

All text elements and non-text elements have sufficient colour contrast between the foreground and background.

#### How to test

Use a contrast analyser tool or an [online contrast checker](https://webaim.org/resources/contrastchecker/) to measure the contrast ratio between foreground and background colours.

#### Requirements

- Text and images of text should have a contrast ratio of at least 4.5:1 against the background.
- Non-textual elements should have a minimum contrast ratio of 3:1 with adjacent colours.

#### Expected result

All measured contrast ratios meet or exceed the minimum requirements listed above.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a bad example where a colour combination fails the contrast ratio requirement.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/contrast-checker-en.jpg" alt="An example of a contrast checker tool interface.">

<figcaption>

A page where a button with a pink background and white text is highlighted. The pink and white color combination is being tested using a colour contrast analyser tool, with alerts notifying the user that this combination fails to meet the necessary contrast ratio.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Language of parts

<div class="row">

<div class="col-md-7">

#### Check

Inline language changes are marked up with valid `lang` attribute values (e.g. `lang="en"` or `lang="fr"`).

#### How to test

Identify passages or phrases written in a language different from the primary language of the page. Then, inspect the code to verify that each passage has a `lang` attribute with the correct language code applied to its containing element.

#### Expected result

Every passage or phrase in a different language from the page's primary language is wrapped in an element with a `lang` attribute identifying that language.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of an inline lang attribute applied to foreign-language text.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/lang-attribute.png" alt="An example of the inspect element displaying the HTML lang attribute.">

<figcaption>

An inspect element view showing a `lang` attribute applied to a specific tag, differentiating it from the main language of the webpage. The `lang` attribute is highlighted in red, with an arrow pointing to the corresponding text associated with this tag on the webpage.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Link purpose

<div class="row">

<div class="col-md-7">

#### Check

The purpose of each link can be understood from the link text alone.

#### How to test

Review the link text for each hyperlink on the page. Determine whether the link text alone provides a clear indication of the link's destination or function.

#### Expected result

Each link's text clearly communicates what the user can expect to find or what action will occur when the link is activated.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows both a good and a bad example of link text.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/link-purpose-en.jpg" alt="Examples of accessible and inaccessible links.">

<figcaption>

Two examples of hyperlink text, with one example labelled accessible ("Read more about Tax Calculation") and the other inaccessible ("Read more"). The link tag for each has been highlighted in the inspect element window.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

## Keyboard

### Focus order

<div class="row">

<div class="col-md-7">

#### Check

The navigation order of focusable elements (links, form elements, modal dialogs, etc.) is logical and intuitive, preserving the meaning and operability of the content.

#### How to test

Navigate through the page using Tab and Shift + Tab. Observe whether the focus order follows the visual reading order and logical content sequence.

#### Expected result

The tabbing order matches the reading order of the page and does not jump unexpectedly between unrelated sections.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows both an accessible (logical) and an inaccessible (disorganized) tab order.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/tab-order-en.jpg" alt="An example illustrating accessible and inaccessible tab orders on a webpage.">

<figcaption>

Instructions on structuring the tab order of a webpage. Two examples are presented: one demonstrating an accessible and logical tab sequence, and the other showcasing an inaccessible, disorganized sequence.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Focus visible

<div class="row">

<div class="col-md-7">

#### Check

All focusable elements display a visible focus indicator when they receive focus, and the indicator does not disappear while tabbing.

#### How to test

Navigate through the page using Tab and Shift + Tab. Observe each focusable element as it receives focus.

#### Expected result

Every focusable element displays a clear, visible indicator when it has focus.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows both a good example (focus visible) and a bad example (focus not visible).

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/focus-indicator-en.jpg" alt="Examples of focus visibility on buttons.">

<figcaption>

Two examples of buttons demonstrating a principle of accessibility. The first example shows a button where the focus is visible when focused, making it accessible. In the second example, the focus is not visible, making the button inaccessible.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Bypass blocks

<div class="row">

<div class="col-md-7">

#### Check

The page has a keyboard-accessible method to bypass repetitive content (such as navigation menus).

#### How to test

Using only the keyboard, press Tab from the top of the page and check whether a mechanism exists (such as a "Skip to main content" link) that allows users to skip blocks of repeated material.

#### Expected result

A keyboard-accessible mechanism is available that allows the user to bypass blocks of repeated content and navigate directly to the main content area.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

One common implementation is a "Skip to Main Content" link as the first interactive item on the page. When activated, the link moves focus to the beginning of the main content.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/skip-to-main-content-en.png" alt="Example of a 'Skip to main content' link.">

<figcaption>

A tag link highlighted in the inspect element window with an arrow pointing to the top of the webpage, indicating the corresponding "Skip to main content" link which enables users to skip to the main content.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Keyboard operability

<div class="row">

<div class="col-md-7">

#### Check

Keyboard access and control are available for all interactive components that can be accessed and controlled with a mouse.

#### How to test

Attempt to access and operate every interactive element on the page (links, form fields, buttons, media player controls, menus, dialogs) using only the keyboard.

#### Expected result

Every interactive element that is operable with a mouse is also operable using only the keyboard.

#### Notes

Standard keyboard interaction patterns:

- Use the `Tab` key to move forward through focusable elements (links, form controls, buttons).
- Use `Shift + Tab` to move backward.
- Use `Enter` (and sometimes `Space`) to activate an element.
- Use Arrow keys to move within certain elements, element groups, and widgets, such as form select elements, radio button groups, and sets of tabs.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of keyboard navigation through a user interface.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/tab-order-website-en.jpg" alt="An example of keyboard navigation on a user interface, showing the tab order.">

<figcaption>

A user interface displaying multiple elements such as selectable fields, buttons, and links, with numbered arrows indicating the tabbing sequence between elements.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

## Images and Multimedia

### Informative image alternatives

<div class="row">

<div class="col-md-7">

#### Check

Informative images have a text alternative that serves the equivalent purpose.

#### How to test

Inspect the code to verify the image has an `alt` attribute. Read the alt text and assess whether it describes the purpose or information conveyed by the image in a way that adequately substitutes for it.

#### Expected result

Each informative image has an `alt` attribute containing text that conveys the same information or function as the image.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of meaningful alternative text on an informative image.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/informative-image.png" alt="An example of alternative text showing the symbol of the Government of Canada.">

<figcaption>

Within the inspect element window, an arrow points to the alternative text of an image, describing a symbol of the Government of Canada. This demonstrates how alternative text provides a brief and meaningful description of the image for accessibility.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Decorative images

<div class="row">

<div class="col-md-7">

#### Check

Decorative images are coded so that screen readers can ignore them.

#### How to test

Inspect the code to verify the image has an `alt` attribute and that its value is empty (`alt=""`).

#### Expected result

Each decorative image has an empty alt attribute (`alt=""`).

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of decorative images with empty alt text in the source code.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/decorative-image-en.jpg" alt="Example of HTML code for decorative images.">

<figcaption>

The inspect element window displaying HTML code for three decorative images. The sections of code demonstrating that each image's alt text is empty have been highlighted in green.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Video captions

<div class="row">

<div class="col-md-7">

#### Check

Pre-recorded multimedia (video) content has captions.

#### How to test

Play the video and look for captions. Check whether open captions (always visible, cannot be turned off) or closed captions (activated via a CC button or settings menu) are available.

#### Expected result

Captions are available for the video content.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of a video displaying captions.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/captions-en.jpg" alt="An example of a video with captions.">

<figcaption>

A screencapture of a video displaying captions that correspond to the host's speech. Displayed within the video is an image of the "Job Bank Canada" website.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

## Forms

### Form labels

<div class="row">

<div class="col-md-7">

#### Check

All form elements (text fields, checkboxes, radio buttons, drop-down menus, etc.) have descriptive and meaningful labels.

#### How to test

Use an automated accessibility checker like [Accessibility Insights for Web - Fast Pass](https://accessibilityinsights.io/downloads) or [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) in Chrome or Firefox. You can also manually inspect each form control to verify it has an associated label.

#### Expected result

Every form control has a descriptive label that clearly identifies the expected input.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of a form with descriptive labels for each field.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/form-labels-en.jpg" alt="Example of descriptive form labels (e.g. text fields, checkboxes, radio buttons, drop-down menus etc.).">

<figcaption>

A form page with the inspect element window to its right. Arrows point to each descriptive label field.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Required field instructions

<div class="row">

<div class="col-md-7">

#### Check

Labels or instructions are provided when content requires user input, including clear indication of which fields are required.

#### How to test

Check the code to see if required fields are identified. If an asterisk (*) or other symbol is used to indicate required fields, verify that an explanation of the symbol's meaning is provided before the form fields.

#### Expected result

Required fields are clearly identified, and any symbols used to indicate required status are explained at the top of the form.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

The following shows a good example of a form with instructions explaining required fields.

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/required-field-instructions-en.jpg" alt="Example of form instructions for required fields.">

<figcaption>

A form legend with a label indicating that the fields are required.

</figcaption>
</figure>

</div>
</section>
</div>

</div>

### Error identification

<div class="row">

<div class="col-md-7">

#### Check

Error messages clearly identify where the issue occurred (e.g., the field name) and describe what needs to be corrected.

#### How to test

Trigger form validation errors by submitting the form with missing or invalid data. Review each error message to determine whether it identifies the field in error and provides guidance on how to correct it.

#### Expected result

Each error message identifies the specific field where the problem occurred and provides clear instructions on how to resolve it.

</div>

<div class="col-md-5">
<section class="panel panel-default">
<header class="panel-heading">

<h4 class="panel-title">Example</h4>

</header>

<div class="panel-body">

"Please enter your name" is not as helpful as "Please enter your first name."

<figure>

<img class="img-responsive mrgn-bttm-md" src="/img/a11ycheck/validation-error-en.jpg" alt="Example of error message displayed on a form.">

<figcaption>

An arrow pointing to an error message indicating that a field cannot be left empty and instructing the user to enter a value. The error text above the input field is highlighted in red.

</figcaption>
</figure>

</div>
</section>
</div>

</div>
