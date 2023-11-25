---
title: Accessibility Testing 101
layout: layouts/base.njk
description: For anyone wanting to create accessible content, it is encouraged to use automated accessibility testing tools. These testing tools will help content creators as they build their content by finding errors and offering suggestions to improve the accessibility of their product, application or web site. On this page a list of recommended accessibility testing tools has been made available.
toggle: test-d-accessibilite-101
subject: howTos
tags: testYourProducts
---

## On this page
- [Building your toolset](#building-your-toolset)
  - [Tool: WAVE Browser Extensions](#tool-wave-browser-extensions)
  - [Tool: Accessibility Insights for Web](#tool-accessibility-insights-for-web)
  - [Tool: LightHouse](#tool-lighthouse)
- [Additional Help and Resources](#additional-help-and-resources)
  - [Keyboard and Manual testing of your site](#keyboard-and-manual-testing-of-your-site)
  - [Keyboard testing basics](#keyboard-testing-basics)
  - [Additional Resources](#additional-resources)

Please note that some of the accessibility testing tools listed will require administrative permissions to install on your device.

## Building your toolset

### Tool: WAVE Browser Extensions

WAVE for Chrome, Firefox, and Edge extensions allows you to evaluate web content for accessibility issues directly within your browser. Because the extension runs entirely within your web browser, no information is sent to the WAVE server.

While WAVE is most effective when used by someone knowledgeable about web accessibility, people who are not web accessibility experts can also benefit from WAVE.

If you are new to WAVE, take advantage of the [Introduction to WAVE video](https://www.youtube.com/watch?v=ITUDiTgAZY0&t=7s).

Browser Compatibility:

- [WAVE Edge Extension at Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/wave-evaluation-tool/khapceneeednkiopkkbgkibbdoajpkoj)
- [WAVE Firefox Extension at Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/)
- [WAVE Chrome Extension at the Google Web Store](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

Additional WAVE Documentation:

- [WAVE Documentation (webaim.org)](https://wave.webaim.org/api/docs?format=html)
- [WAVE Help (webaim.org)](https://wave.webaim.org/help)

WAVE Tips and Tricks:

- [Tips for Getting the Most Out of WAVE](https://webaim.org/blog/tips-for-getting-the-most-out-of-wave/)

The WAVE sidebar indicates if WAVE has detected any errors or not. The absence of errors DOES NOT mean your page is accessible or compliant. **RED icons** indicate accessibility errors that need to be fixed. **GREEN icons** indicate accessibility features - things that improve accessibility (though these should be verified). The other icons and indicators, particularly the yellow alert icons, highlight other elements that you should look at. WAVE brings the underlying accessibility information of a page to the forefront so it can be easily evaluated in context.

Styles and Code:

WAVE provides functionality for disabling page CSS (Cascading Style Sheets) styles. Complex, CSS-powered layouts may become difficult to read, especially after the WAVE icons have been embedded, so disabling styles can simplify the page presentation. Disabling styles also allow you to view the underlying reading and navigation order, the order in which keyboard-only and screen reader users will access the page. To view the relevant code for a particular WAVE icon, you can select the Code tab at the bottom of the page to view the underlying markup/DOM of your page.

### Tool: Accessibility Insights for Web

Accessibility Insights for Web is an extension for Chrome and Microsoft Edge that helps developers find and fix accessibility issues in web apps and sites.

The tool supports two primary scenarios:

- FastPass is a lightweight, two-step process that helps developers identify common, high-impact accessibility issues in less than five minutes.
  - Automated checks - the tool automatically checks for compliance with approximately 50 accessibility requirements.
  - Tab stops - the tool provides clear instructions, partial automation, and a visual helper that makes it easy to identify critical accessibility issues related to keyboard access, such as missing tab stops, keyboard traps, and incorrect tab order.
- Assessment allows anyone with HTML skills to verify that a web app or web site is compliant with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
  - Automated checks - the tool automatically checks for compliance with approximately 50 accessibility requirements.
  - Manual tests - the tool provides step-by-step instructions, examples, and how-to-fix guidance for approximately 20 tests; many tests are "assisted", which means that the tool identifies the test instances or provides a visual helper.

This is a tool for all levels, you do not need to know accessibility to use it, it will guide you through each step.

Browser Compatibility:

- For web:
  - [Add to Chrome](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni)
  - [Add to Edge](https://microsoftedge.microsoft.com/addons/detail/ghbhpcookfemncgoinjblecnilppimih)
- [Download for Windows](https://aka.ms/accessibilityinsights-windows/download)
- For Android:
  - [Download for Windows](https://aka.ms/accessibility-insights-for-android/downloads/Windows)
  - [Download on MacOS](https://aka.ms/accessibility-insights-for-android/downloads/MacOS)
  - [Download on Linux](https://aka.ms/accessibility-insights-for-android/downloads/Linux)

Accessibility Insights Documentation:

- [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/)
- [Accessibility Insights for Windows](https://accessibilityinsights.io/docs/windows/overview/)

Tips and Tricks:

- Get started by watching a video [Overview.](https://www.youtube.com/watch?v=m1l7ghxOKF0)
- Or read a tutorial:
  - [FastPass](https://accessibilityinsights.io/docs/web/getstarted/fastpass/)
  - [Assessment](https://accessibilityinsights.io/docs/web/getstarted/assessment/)

Keyboard Shortcuts:

- Increase your productivity with [Keyboard Shortcuts for Accessibility Insights for Web.](https://accessibilityinsights.io/docs/web/reference/keyboard/)

### Tool: LightHouse

Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO, and more. A very useful tool for Multimedia Developers and Web Accessibility Testers.

Browsers:

- [Run Lighthouse in Chrome DevTools](https://developer.chrome.com/docs/lighthouse/overview/#devtools)
- [Run Lighthouse as a Chrome Extension](https://developer.chrome.com/docs/lighthouse/overview/#extension)
- [How to use Lighthouse in Edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/accessibility/lighthouse)

LightHouse Extension Documentation:

- [Lighthouse - Chrome Developers](https://developer.chrome.com/docs/lighthouse/)
- [Lighthouse tool - Microsoft Edge Development \| Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/lighthouse/lighthouse-tool)

Additional Help:

- Use the [Lighthouse Viewer](https://googlechrome.github.io/lighthouse/viewer/) to view and share reports online.

## Additional Help and Resources

### Keyboard and Manual testing of your site

Automated tools and validators to identify accessibility issues:

- W3C Validator
- CSS HTML Validator
- axe DevTools

### Keyboard testing basics

- Go forward: use the tab key
- Go backwards: use the tab and shift keys
- Activate something: use the Enter key or space bar
- To check / uncheck a checkbox: use space bar
- Move around: use the arrow keys

Scrub your site for accessibility issues:

- Test all navigation/interactivity of each webpage using only the keyboard and assistive technologies such as JAWS, NVDA, ZoomText.
- Make sure images contain alt text or are marked as decorative (if no important and/or valuable information is being presented to users).
  - If an image provides important or valuable information, then proper alt text is required, no more than 150 characters. If the image contents cannot be explained within that limit, then a graphic description underneath the image is required.
- Tab between sections of a webpage to ensure content follows a meaningful top-to-bottom, left-to-right focus order.
  - Also ensure visible focus surrounds all tabbable / focusable elements.
- Ensure users do not encounter a page trap when using the keyboard.
- Check if you have bypass links to allow users to skip page content if lengthy and/or repetitive information is presented on each page.
  - For example, “Skip to main navigation”, “Skip to header” and “Skip to footer” links, depending on their need on the page.
- Test all links presented on each page to ensure they are working (internal, external, downloadable), and each link contains unique link text.
  - If a link opens in a new browser tab or window, it is recommended to inform users that this action will occur within the link text or link title tag, for example “Opens in a new browser tab/window”.
- Ensure all form elements (radio buttons, checkboxes, edit fields, drop-down lists, etc.) have proper labels.
  - Also ensure proper error prevention and suggestion is given to users when form errors must be corrected.
- Make sure videos have descriptive transcripts, and closed captioning is available, and users can turn it on and off.
- Ensure page content scales gracefully in all viewports and is usable when zoomed up to 400%.
- Ensure the HTML and CSS mark-up is correct by validating code through a validation tool such as W3C Validator or CSS HTML Validator.
- Conduct performance testing on different networks, as sometimes complex content (for example large images or page interactivity and functionality) takes a while to load on slower networks.
- Turn off the speaker, microphone, and use only the keyboard to access the webpage and assess if the experience was the same. Are you able to understand all audio/video content and participate in all activities presented on the page without any loss of information?

### Additional Resources

- [The WebAIM Million](https://webaim.org/projects/million/)
- [WebAIM: Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [WebAIM: Keyboard Shortcuts for NVDA](https://webaim.org/resources/shortcuts/nvda)
- [WebAIM: Keyboard Shortcuts for JAWS](https://webaim.org/resources/shortcuts/jaws)
