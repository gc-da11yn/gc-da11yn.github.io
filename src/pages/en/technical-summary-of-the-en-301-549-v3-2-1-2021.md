---
title: Technical Summary of the EN 301 549 v3.2.1 (2021)
description: This technical summary provides the reader a simplified summary of the technical requirements from the EN 301 549 V3.2.1 (2021-03) Harmonised European Standard for <abbr title="Information and communication technology">ICT</abbr> Products and Services accessibility. Each clause or group of related clauses have been re-worded in plain language and examples have been added to help readers understand the requirements at a high-level. This document is especially useful for those who would like an understanding of the EN 301 549’s requirements without having to read through the full standard.
toggle: resume-technique-de-la-norme-en-301-549-v3-2-1-2021
subject:
  - accessibilityInTheGovernmentOfCanada
tags:
  - procurement
---

<div class="row">
	<div class="col-sm-6">
		<a class="gc-dwnld-lnk" href="{{ rootPath }}docs/SSC_Technical_Summary_of_the_EN_301_549_v3.2.1_(2021)_30May2024_EN.docx" download="{{ title | stripTagsSlugify }}">
			<div class="well gc-dwnld">
				<div class="row">
					<div class="col-xs-4">
						<p><img class="img-responsive thumbnail gc-dwnld-img" src="{{ rootPath }}img/doc.png" alt="" /></p>
					</div>
					<div class="col-xs-8">
						<p class="gc-dwnld-txt">
							<span>{{ title }}</span>
							<span class="gc-dwnld-info">(<i class="fas fa-file-word mrg-rght-sm" aria-hidden="true"></i> <abbr title="Document Microsoft Word">Word</abbr>, 78 <abbr title="KiloByte">KB</abbr>)</span>
						</p>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

## About this document and Copyright Notice

This document was prepared by the Government of Canada’s (<abbr>GC</abbr>) Shared Services Canada’s (<abbr>SSC</abbr>) Accessibility, Accommodations and Adaptive Computer Technology (<abbr>AAACT</abbr>) team and a small <abbr title="Government of Canada">GC</abbr> working group including membership from the Government of Canada (Shared Services Canada, Canada Revenue Agency, Canada School of Public Service).

This document is intended to provide a brief high-level technical overview of the key topics in the EN 301 549 (2021). The intention is to provide the reader an understanding of the requirements the EN 301 549 contains as well as the types of Information and communication technology (<abbr>ICT</abbr>) each section applies to.

To fully understand each clause, it is essential that the full EN 301 549 (2021) standard is consulted. This document in no way is intended to replace the EN 301 549 document, rather to supplement and increase people’s general understanding of the requirements, particularly individuals who need to understand the technical ramifications of utilizing the EN 301 549 as part of policy.

This document is for informational purposes only.

This document was drafted by SSC. It is a technical summary (the “Technical Summary”) of the [EN 301 549 (V3.2.1 (2021-03) Harmonised European Standard "Accessibility requirements for ICT products and services"](https://www.etsi.org/standards#page=1&search=EN%20301%20549&title=1&etsiNumber=1&content=1&version=0&onApproval=1&published=1&withdrawn=1&historical=1&isCurrent=1&superseded=1&startDate=1988-01-15&endDate=2021-07-22&harmonized=0&keyword=&TB=&stdType=&frequency=&mandate=&collection=&sort=1) (© European Telecommunications Standards Institute  © Comité Européen de Normalisation. © Comité Européen de Normalisation Électrotechnique. All rights reserved.) and reproduces extracts of it. Users of the Technical Summary may download a copy for their personal, non-commercial use. Users may not translate, modify or distribute the Technical Summary.

Questions regarding the Technical Summary should be sent to AAACT / AATIA (SSC/SPC) <aaact-aatia@ssc-spc.gc.ca>.

## On this page

- [4 Functional performance](#4-functional-performance)
- [5 Generic requirements](#5-generic-requirements)
- [6 <abbr title="Information and communication technology">ICT</abbr> with two-way voice communication](#6-ict-with-two-way-voice-communication)
- [7 <abbr title="Information and communication technology">ICT</abbr> with video capabilities](#7-ict-with-video-capabilities)
- [8 Hardware](#8-hardware)
- [9 Web](#9-web)
- [10 Non-web documents](#10-non-web-documents)
- [11 Software](#11-software)
- [12 Documentation and support services](#12-documentation-and-support-services)
- [13 <abbr title="Information and communication technology">ICT</abbr> providing relay or emergency service access](#13-ict-providing-relay-or-emergency-service-access)
- [14 Conformance](#14-conformance)
- [Other Annexes in the EN 301 549](#other-annexes-in-the-en-301-549)

## 4 Functional performance

Refer to Annex E (informative): Guidance for users of the present document in the EN 301 549 (V3.2.1 (2021-03)) Harmonised European Standard Accessibility requirements for <abbr title="Information and communication technology">ICT</abbr> products and services.

Clause 4 from the EN 301 549 explains what functionality is needed to enable end users to locate, identify and operate functions in technology, no matter of their abilities. These performance statements themselves do not provide specific criteria, but rather are met when the related criteria in clauses 5 to 13 are met. If all clauses are supported in clauses 5 to 13, it is reasonable to expect that all the needed functionality should be available as well. This summary does not address any Notes, unless it is critical to the understanding of the clause.

- 4.2.1 Usage without vision:
  - The <abbr title="Information and communication technology">ICT</abbr> provides a way to be operated without vision.
- 4.2.2 Usage with limited vision:
  - The <abbr title="Information and communication technology">ICT</abbr> provides a way for individuals with limited vision to better use their limited vision.
- 4.2.3 Usage without perception of colour:
  - The <abbr title="Information and communication technology">ICT</abbr> can be visually used without the ability to see colour.
- 4.2.4 Usage without hearing:
  - The <abbr title="Information and communication technology">ICT</abbr> can be operated without the ability to hear.
- 4.2.5 Usage with limited hearing:
  - The <abbr title="Information and communication technology">ICT</abbr> provides a way for individuals with limited hearing to better use their limited hearing.
- 4.2.6 Usage with no or limited vocal capability:
  - If the <abbr title="Information and communication technology">ICT</abbr> has an option to use voice input, then an alternative is provided that does not require voice input.
- 4.2.7 Usage with limited manipulation or strength:
  - If the <abbr title="Information and communication technology">ICT</abbr> has controls which require manual operation, then alternatives are provided that do not require simultaneous actions or hand strength.
- 4.2.8 Usage with limited reach:
  - If the <abbr title="Information and communication technology">ICT</abbr> is part of the built environment, then all controls need to be in reach of all types of users.
- 4.2.9 Minimize photosensitive seizure triggers:
  - If the <abbr title="Information and communication technology">ICT</abbr> has a visual interface, then photosensitive triggers will be minimized.
- 4.2.10 Usage with limited cognition, language or learning:
  - The <abbr title="Information and communication technology">ICT</abbr> provides features and/or presentation that makes it simpler and easier to understand, operate, and use.
- 4.2.11 Privacy:
  - Equitable privacy features are available to all users.

## 5 Generic requirements

The general requirements from the EN 301 549 contain a few different key categories which can be applied to different types of <abbr title="Information and communication technology">ICT</abbr>. Each of the main categories is outlined below.

### 5.1 Closed functionality

Closed and partially closed systems are types of <abbr title="Information and communication technology">ICT</abbr> which restrict the user from being able to install or use their own assistive technology. Closed and partially closed systems need to provide ways for all users to be able to access the system in the absence of supplemental assistive technology.

For example, a user is not able to install or use their own screen reader onto a bank machine or a ticket kiosk at the airport. Therefore, some form of speech output must be provided for those users. Other examples include:

- The <abbr title="Information and communication technology">ICT</abbr> provides an option where text is large enough for most users with low vision.
- Important audio output is also available visually as text.
- The <abbr title="Information and communication technology">ICT</abbr> is operable without vision.
- Speech is not the only mode of input for a function.

### 5.2 Activation of accessibility features

If a system has an accessibility feature it needs to be possible to activate it by users who need it. For example, sight must not be required to activate the speech equivalent of what is on screen.

### 5.3 Biometrics

<abbr title="Information and communication technology">ICT</abbr> cannot use biological characteristics as the only means of access. For example, fingerprints cannot be the only way to unlock a mobile device.

### 5.4 Preservation of accessibility information during conversion

When <abbr title="Information and communication technology">ICT</abbr> converts information, it should make sure to keep all the relevant details that make the information accessible, as much as the new format allows. For example, when converting a Word document which has an image with alternative text into a PDF, the accessibility information (alt text) should be preserved.

### 5.5 Operable parts

Operable parts are interactive parts of <abbr title="Information and communication technology">ICT</abbr> to activate, deactivate or adjust the <abbr title="Information and communication technology">ICT</abbr>. They can be provided in either hardware (a physical knob) or software (a button on a touch screen). Note that operable parts exclude parts involved only in maintenance or repair.

<abbr title="Information and communication technology">ICT</abbr> with operable parts must:

- not require pinching, grasping, or twisting of the wrist as the only way to operate. For example, adjusting the temperature by rotating a dial on a touch screen has the alternative of pressing up and down buttons on the touch screen to adjust the temperature.
- be discernable without requiring vision. For example, the raised tactile marker on a button to convey the information to someone who cannot visually see the button.

### 5.6 Locking or toggle controls

Locking or toggle controls such as a caps lock key on the keyboard can have their status determined both visually and non-visually, such as through touch or sound.

### 5.7 Key repeat

Where <abbr title="Information and communication technology">ICT</abbr> has a key repeat function (i.e., a function that repeats a key input multiple times), that cannot be turned off, the following two requirements must be met:

- The delay before the input is repeated must be adjustable to at least 2 seconds, and
- the rate that the input is repeated must be adjustable down to 1 character per 2 seconds.

For example, this would apply to a standard keyboard when you hold down one of the letter keys and the letter is repeatedly typed out.

### 5.8 Double-strike key acceptance

Where <abbr title="Information and communication technology">ICT</abbr> has a keyboard or keypad, the time in which a consecutive key press of the same key is not registered is adjustable up to 0.5 seconds.

### 5.9 Simultaneous user actions

This section requires that a user does not have to perform simultaneous actions to use the <abbr title="Information and communication technology">ICT</abbr>. Examples of simultaneous user actions would be using two hands to open a laptop lid, having to hold down two keys at once, or having to touch a touchscreen with more than one finger.

## 6 <abbr title="Information and communication technology">ICT</abbr> with two-way voice communication

Clause 6 is focused on <abbr title="Information and communication technology">ICT</abbr> which contains two-way audio communication such as a phone call or video call that includes audio.

### 6.1 Audio bandwidth for speech

This is a single clause which states that a call must be able to meet specific metrics for audio quality in order to make it easier to hear what is being said.

### 6.2 Real-Time Text (RTT) functionality

This set of clauses outlines that where the <abbr title="Information and communication technology">ICT</abbr> provides two-way voice communication, RTT functionality needs to be provided in systems where it is feasible to do so. For example, this would not require the addition of hardware to <abbr title="Information and communication technology">ICT</abbr> in order to enable this functionality. It also outlines specific requirements such as how the <abbr title="Real-Time Text">RTT</abbr> should be displayed, interoperability with existing telecommunications technologies and how responsive the RTT is.

### 6.3 Caller ID

This clause indicates that caller identification or similar functions should be available in either text form and be understandable by assistive technology.

### 6.4 Alternatives to voice-based services

This clause requires that for voice-based services (such as a phone system) there should be a way to access features, such as voicemail and features which require voice-based interaction, without the use of hearing or speech.

### 6.5 Video Communication

This set of clauses provides requirements for <abbr title="Information and communication technology">ICT</abbr> which has two-way audio communication that also contains two-way video communication. It outlines minimum requirements around resolution, frame rate, audio/video synchronization, and indication of audio and sign-language activity.

### 6.6 Alternatives to video-based services

This clause is specific to <abbr title="Information and communication technology">ICT</abbr> with video communication features which also offers answering machine, auto attendant or interactive response facilities. It stipulates that alternatives exist for audio, features which use speech, or visual content.

## 7 <abbr title="Information and communication technology">ICT</abbr> with video capabilities

This clause applies to <abbr title="Information and communication technology">ICT</abbr> which contains video capabilities, and generally provides requirements related to captioning (such as closed captioning) and audio descriptions.

### 7.1 Caption processing technology

This set of clauses indicates that <abbr title="Information and communication technology">ICT</abbr> should have the ability to display captions when audio and video are synchronized, captions should be synchronized with the video, captions should be customizable, and have a spoken output option. Furthermore, when video is transmitted, converted or recorded, it preserves captioning.

### 7.2 Audio description technology

This set of clauses indicates requirements around being able to play audio descriptions, including that they are synchronized to the video and that when transmitted, converted or recorded, the audio description is preserved.

### 7.3 User controls for captions and audio description

This clause is applicable to <abbr title="Information and communication technology">ICT</abbr> that has the main purpose of playing audio/video content. It requires that the controls for captioning and audio descriptions are as immediately available as the primary controls (for example, the play/pause buttons).

## 8 Hardware

### 8.1 General

This section references that the generic requirements from [clause 5](#5-generic-requirements) are applicable, along with requiring that standard connections be used when connecting peripherals such as via USB or Bluetooth, and that color alone is not the only way of conveying information or actions.

### 8.2 Hardware products with speech output

This section covers requirements which apply to hardware that have speech output and includes specific requirements around volume range, volume increments, and magnetic coupling of wired and wireless devices to work with hearing enhancement technology.

### 8.3 Stationary <abbr title="Information and communication technology">ICT</abbr>

This section is specific to <abbr title="Information and communication technology">ICT</abbr> that is built into the physical environment, such as a kiosk for buying a movie ticket. While this is only applicable to <abbr title="Information and communication technology">ICT</abbr> which is physically located in the environment, it does not directly set out requirements for where the <abbr title="Information and communication technology">ICT</abbr> is located, only that there is sufficient ability to access it. Some of the key requirements from this section:

- Controls are physically located in positions which can be reached by everyone (not too high, low or far).
- Sufficient space exists for knee and toe clearance (especially applicable to people who use a wheelchair).
- Appropriate ramps exist whenever there is a change in floor level or height which is required to access the <abbr title="Information and communication technology">ICT</abbr>.
- There exists sufficient space around the <abbr title="Information and communication technology">ICT</abbr> for everyone to be able to operate it.
- When <abbr title="Information and communication technology">ICT</abbr> contains a display screen, it should be visible to a person sitting in a wheelchair.
- Installation instructions are provided with the <abbr title="Information and communication technology">ICT</abbr> which allows it to be installed accessibly into the physical environment.

### 8.4 Mechanically operable parts

This section outlines requirements for <abbr title="Information and communication technology">ICT</abbr> which has controls such as buttons, keys, knobs, etc. The high-level requirements cover:

- Number pads have a tactile indicator on the “5” key
- Controls that require grasping, pinching or twisting the wrist have accessible alternatives
- Controls are easy to press
- Keys, tickets and fare cards have tactilely discernible direction if needed

### 8.5 Tactile indication of speech mode

This clause indicates that there should be a tactile indication of the way to activate the speech output mode, such as braille on a button.

## 9 Web

### 9.1 to 9.4 – Perceivable, Operable, Understandable and Robust

The first 4 sections of clause 9 requirements are the same as Web Content Accessibility Guidelines (<abbr>WCAG</abbr>) 2.1 at level A and AA. For more information on <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> you can review it on the [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>) 2.1](https://www.w3.org/TR/WCAG21/)on the World Wide Web Consortium (<abbr>W3C</abbr>) website..

### 9.5 <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 AAA Success Criteria

This clause encourages developers and procurement accessibility specialists to consider trying to meet the level AAA criteria of <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1, when possible, which is in alignment with the advice in <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 regarding conformance to these criteria.

### 9.6 <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> conformance requirements

This clause indicates that all web pages must meet the following five conformance requirements of <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 at level AA:

- Conformance level
- Full pages
- Complete processes
- Only accessibility-supported ways of using technologies
- Non-interference

## 10 Non-web documents

This section outlines the requirements specific to non-web documents such as Word, Excel, PowerPoint, email, <abbr title="Portable Document Format">PDF</abbr>, pictures, or video or similar documents that are not embedded in a web page, or are downloadable. These requirements apply to all documents regardless of where they originate (such as those created in a word processor or generated by a web-based reporting tool).

### 10.1 to 10.4 – Perceivable, Operable, Understandable, and Robust

These 4 sections are mostly the same as the <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 at level A and AA. The criteria have been modified to refer to “non-web document” rather than “web/web page/website” to make them more applicable, but the requirements are essentially the same as the web versions, with some exceptions where additional notes have been added to clarify applicability of the specific <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> criteria.

### 10.5 Captioning positioning

This clause provides the requirement that where a non-web document is or contains video or audio that is synchronized with second format for presenting information, and has captioning, the captions themselves should not obscure important information in the video.

### 10.6 Audio description timing

This clause indicates that when <abbr title="Information and communication technology">ICT</abbr> is or contains video or audio that is synchronized with a second format for presenting information, and also has an audio description, the audio description must not interfere with the audio.

## 11 Software

The software section is the largest block of requirements and covers a wide range of non-web software, including:

- An operating system
- Native mobile or desktop applications such as desktop Office Suite applications, or a web browser
- Software installed on closed systems such as kiosks
- Authoring tools
- Assistive technology

Software that does not contain a user interface is not subject to these requirements.

### 11.1 to 11.4 – Perceivable, Operable, Understandable, Robust

The first 4 subsections of the software section are an adaptation of <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 at levels A and AA to support software. The same core criteria apply to both open and closed systems. In some cases, however, additional clauses have been added to specify applicability to closed systems as needed.

### 11.5 Interoperability with assistive technology

This section of the software requirements contains a number of clauses focused on platforms providing adequate accessibility support, applications that run on the platform use the accessibility services, and that the services are documented. It also provides specific clauses for the types of information which software needs to provide to assistive technologies in a programmatic way. Furthermore, it provides specific clauses for the types of actions and modifications which software must allow these assistive technologies to perform, when permitted by security requirements. These clauses allow technologies such as a screen reader to understand the interface content and be able to present it to the user, as well as interact and modify said content.

In addition to platforms themselves, if the <abbr title="Information and communication technology">ICT</abbr> is a form of assistive technology, it must also use the documented accessibility services, where possible.

The above requirements do not apply to the closed functionality of software that conforms to clause 5.1.

### 11.6 Documented accessibility usage

This set of clauses provides requirements that assistive technology, as a documented part of platform software, should be accessible to the user without assistance and that software running on the platform cannot interrupt its usage, unless initiated by the user. For example, if the platform provides an assistive technology like a screen reader, then the end user should be able to turn it on, and other software cannot interrupt or disable the screen reader unless the user initiates it.

### 11.7 User preferences

This clause indicates that when the user has made specific selections in their operating system (platform software) such as unit of measure, colour, contrast, font size and type, and focus cursor indicators, they will be used in software running on the platform, unless the user has changed it. For example, a user sets up their computer operating system to use a high contrast theme. When they open the word processing application, the application does not override or disturb the high contrast theme set at the platform level. If the user wants to change the visual settings within the word processing application, they can do so without affecting the global accessibility features of the operating system.

### 11.8 Authoring tools

This set of clauses is applicable to both web and non-web authoring tools and is any tool that allows the user to design content. For example, Microsoft Word, or a web-based content management system. The key requirements are:

- Authoring tools have features which allow accessible content to be created that conforms to clause 9 (Web documents) or clause 10 (Non-web documents) as appropriate.
- When an authoring tool provides features that transform the structure or format of content, information required for accessibility will be preserved wherever supported by the output format.
- Authoring tools which have automated accessibility checks will provide suggestions to the user to remediate accessibility issues found through these automated accessibility checks.
- For tools that have templates, at least one of the templates should be accessible according to clause 9 (Web documents) or 10 (Non-web documents) as appropriate and identified as an accessible template.

## 12 Documentation and support services

### 12.1 Product documentation

This set of clauses indicates that the <abbr title="Information and communication technology">ICT</abbr>s documentation provided should list and include information about how to use any accessibility features it contains, and requires that the documentation itself conforms to either clause 9 (Web documents) or clause 10 (Non-web documents).

### 12.2 Support services

This set of clauses is primarily for, but not limited to:

- Help desks
- Call centers
- Technical support
- Relay services
- Training services.

It requires that support services can provide information on any documented accessibility services or features and will communicate in a way that meets the needs of the user. Additionally, any documentation provided by support services must be available in a web format that conforms to clause 9 (Web documents) or a non-web format that conforms to clause 10 (Non-web documents).

## 13 <abbr title="Information and communication technology">ICT</abbr> providing relay or emergency service access

### 13.1 Relay services requirements

These clauses outline the requirements for relay services, which are meant to act as an intermediator to convert speech, text or sign language to meet the needs of the different users/operators. These services are normally provided by humans. These services provide text, sign language, lip reading, telephone audio captions, and speech-to-speech interpretation to enable communication involving at least one speaking user. For instance, a telephony captioning service aids deaf or hard-of-hearing users during spoken conversations by providing text captions.

### 13.2 Access to relay services

This clause requires that when <abbr title="Information and communication technology">ICT</abbr> supporting two-way communication is intended for use with relay services, access to those services is not blocked.

### 13.3 Access to emergency services

This clause requires that when <abbr title="Information and communication technology">ICT</abbr> supporting two-way communication is intended for use with emergency services, access to those services is not blocked.

## 14 Conformance

This section of the EN 301 549 outlines how this standard should be understood and how <abbr title="Information and communication technology">ICT</abbr> can meet it. The high-level information is:

- To meet the standard, <abbr title="Information and communication technology">ICT</abbr> must meet all the clauses (as written in the full EN 301 549 standard) which use “shall”, while the clauses that use “should” are recommendations. This technical summary does not use these terms in this regard, and cannot be relied upon for conformance with the EN 301 549 standard.
- Except for clause 12, all clauses indicate what type or functionality of <abbr title="Information and communication technology">ICT</abbr> they apply to.
- Clauses which are not applicable do not have to be met to reach full conformance.
- <abbr title="Information and communication technology">ICT</abbr> is often comprised of two or more items of <abbr title="Information and communication technology">ICT</abbr>. These items together can complement each other and meet the accessibility requirements when combined. However, if the items all fail any given requirement, then the combined <abbr title="Information and communication technology">ICT</abbr> does not meet that requirement.
- No priority is given to one clause over another.
- No specific sampling methodologies are provided by this standard.
- The EN 301 549 does not apply when <abbr title="Information and communication technology">ICT</abbr> is not working as intended (e.g. is broken), is currently under maintenance, or is in transitional state (such as startup or shutdown) which does not require user interaction. If it is safe to do so, the EN 301 549 encourages <abbr title="Information and communication technology">ICT</abbr> to try and meet any requirements they can under these conditions.

## Other Annexes in the EN 301 549

Refer to the EN 301 549 for further information on:

- [Annex A (informative): Relationship between the present document and the essential requirements of Directive 2016/21](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=89)
- [Annex B (informative): Relationship between requirements and functional performance statements](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=105)
- [Annex C (normative): Determination of conformance](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=115)
- [Annex D (informative): Further resources for cognitive accessibility](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=181)
- [Annex E (informative): Guidance for users of the present document](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=182)
- [Annex F (informative): Change history](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=185)
