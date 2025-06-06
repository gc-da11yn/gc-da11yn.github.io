---
title: Information and Communication Technology (<abbr>ICT</abbr>) Accessibility Requirements
description: This page is to share some of the work that Shared Services Canada (<abbr>SSC</abbr>) has done for the piloting of the CAN/ASC - EN 301 549:2024 / EN 301 549 V3.2.1 (2021-03) Harmonised European Standard Accessibility requirements for ICT products and services. This is not a full copy / paste / translation of the CAN/ASC - EN 301 549:2024/ EN 301 549 (2021) or Web Content Accessibility Guidelines (<abbr>WCAG</abbr>) 2.1.
subject:
  - accessibilityInTheGovernmentOfCanada
tags:
  - procurement
hasDocument:
  filename: "AnnexX-ICTAccessibilityRequirements.docx"
  sizeNumber: 447
  sizeUnit: "KB"
  type: "word"
toggle: exigences-en-matiere-de-technologies-de-linformation-et-des-communications-tic-accessibles
---

{% include "information-and-communication-technology-ict-accessibility-requirements/intro.njk" %}
{% include "information-and-communication-technology-ict-accessibility-requirements/part-a.njk" %}
{% include "information-and-communication-technology-ict-accessibility-requirements/part-b.njk" %}
{% include "information-and-communication-technology-ict-accessibility-requirements/scope.njk" %}

## Found in this section

- [5 Generic requirements](#5)
- [6 ICT with two-way voice communication](#6)
- [7 ICT with video capabilities](#7)
- [8 Hardware](#8)
- [9 Web](#9)
- [10 Non-web documents](#10)
- [11 Software](#11)
- [12 Documentation and support services](#12)
- [13 ICT providing relay or emergency service access](#13)
- [Annex - Tables and figures (from EN 301 549)](#annex-tables-and-figures-from-en-301-549)
- [Annex – Chapter 14 Conformance](#annex-chapter-14-conformance)

<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>
				<p><strong>EN 301 549 clause</strong></p>
			</th>
			<th>
				<p><strong>Determination of conformance</strong></p>
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<p id="5"><strong>5 Generic requirements</strong></p>
			</td>
			<td>
				<p><strong>C.5 Generic requirements</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1"><strong>5.1 Closed functionality</strong></p>
			</td>
			<td>
				<p><strong>C.5.1 Closed functionality</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.1"><strong>5.1.1 Introduction (informative)</strong></p>
				<p>ICT has closed functionality for many reasons, including design or policy. Some of the functionality of products can be closed because the product is self-contained and users are precluded from adding peripherals or software in order to access that functionality.</p>
				<p>ICT may have closed functionality in practice even though the ICT was not designed, developed or supplied to be closed.</p>
				<p>Computers that do not allow end-users to adjust settings or install software are functionally closed.</p>
			</td>
			<td>
				<p><strong>C.5.1.1 Introduction (informative)</strong></p>
				<p>Clause 5.1.1 is informative and does not contain requirements that require testing.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.2"><strong>5.1.2 General</strong></p>
			</td>
			<td>
				<p><strong>C.5.1.2 General</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.2.1"><strong>5.1.2.1 Closed functionality</strong></p>
				<p>Where ICT has closed functionality, it shall meet the requirements set out in clauses 5.2 to 13, as applicable.</p>
				<p>NOTE 1: ICT may close some, but not all, of its functionalities. Only the closed functionalities have to conform to the requirements of clause 5.1.</p>
				<p>NOTE 2: The requirements within this clause replace those in clauses 5.2 to 13 that specifically state that they do not apply to closed functionality. This may be because they relate to compatibility with assistive technology or to the ability for the user to adjust system accessibility settings in products with closed functionality (e.g. products that prevent access to the system settings control panel).</p>
			</td>
			<td>
				<p><strong>C.5.1.2.1 Closed functionality</strong></p>
				<p>See clauses C.5.2 to C.13, as applicable.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.2.2"><strong>5.1.2.2 Assistive technology</strong></p>
				<p>Where ICT has closed functionality, that closed functionality shall be operable without requiring the user to attach, connect or install assistive technology and shall conform to the generic requirements of clauses 5.1.3 to 5.1.6 as applicable. Personal headsets and personal induction loops shall not be classed as assistive technology for the purpose of this clause.</p>
			</td>
			<td>
				<p><strong>C.5.1.2.2 Assistive technology</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Determine the closed functions of the ICT.</li>
					<li>Check that the tests C.5.1.3 to C.5.1.6 can be carried out without the attachment or installation of any assistive technology except personal headsets or inductive loops.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 2 is true</p>
				<p>Fail: Check 2 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3"><strong>5.1.3 Non-visual access</strong></p>
			</td>
			<td>
				<p><strong>C.5.1.3 Non-visual access</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.1"><strong>5.1.3.1 Audio output of visual information</strong></p>
				<p>Where visual information is needed to enable the use of those functions of ICT that are closed to assistive technologies for screen reading, ICT shall provide at least one mode of operation using non-visual access to enable the use of those functions.</p>
				<p>NOTE 1: Non-visual access may be in an audio form, including speech, or a tactile form such as braille for deaf-blind users.</p>
				<p>NOTE 2: The visual information needed to enable use of some functions may include operating instructions and orientation, transaction prompts, user input verification, error messages and non-text content.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.1 Audio output of visual information</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Visual information is needed to enable the use of those functions of the ICT that are closed to assistive technology for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Determine the functions of the ICT closed to screen reading.</li>
					<li>Check that they are all operable using audio output access.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 2 is true</p>
				<p>Fail: Check 2 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.2"><strong>5.1.3.2 Auditory output delivery including speech</strong></p>
				<p>Where auditory output is provided as non-visual access to closed functionality, the auditory output shall be delivered:</p>
				<ol>
					<li>either directly by a mechanism included in or provided with the ICT; or</li>
					<li>by a personal headset that can be connected through a 3,5 mm audio jack, or an industry standard connection, without requiring the use of vision.</li>
				</ol>
				<p>NOTE 1: Mechanisms included in or provided with ICT may be, but are not limited to, a loudspeaker, a built-in handset/headset, or other industry standard coupled peripheral.</p>
				<p>NOTE 2: An industry standard connection could be a wireless connection.</p>
				<p>NOTE 3: Some users may benefit from the provision of an inductive loop.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.2 Auditory output delivery including speech</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Auditory output is provided as non-visual access to closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the auditory output is delivered by a mechanism included in or provided with the ICT.</li>
					<li>Check that the auditory output is delivered by a personal headset that can be connected through a 3,5 mm audio jack or an industry standard connection without requiring the use of vision.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 or 2 is true</p>
				<p>Fail: Checks 1 and 2 are false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.3"><strong>5.1.3.3 Auditory output correlation</strong></p>
				<p>Where auditory output is provided as non-visual access to closed functionality, and where information is displayed on the screen, the ICT should provide auditory information that allows the user to correlate the audio with the information displayed on the screen.</p>
				<p>NOTE 1: Many people who are legally blind still have visual ability, and use aspects of the visual display even if it cannot be fully comprehended. An audio alternative that is both complete and complementary includes all visual information such as focus or highlighting, so that the audio can be correlated with information that is visible on the screen at any point in time.</p>
				<p>NOTE 2: Examples of auditory information that allows the user to correlate the audio with the information displayed on the screen include structure and relationships conveyed through presentation.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.3 Auditory output correlation</strong></p>
				<p>Clause 5.1.3.3 is informative only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.4"><strong>5.1.3.4 Speech output user control</strong></p>
				<p>Where speech output is provided as non-visual access to closed functionality, the speech output shall be capable of being interrupted and repeated when requested by the user, where permitted by security requirements.</p>
				<p>NOTE 1: It is best practice to allow the user to pause speech output rather than just allowing them to interrupt it.</p>
				<p>NOTE 2: It is best practice to allow the user to repeat only the most recent portion rather than requiring play to start from the beginning.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.4 Speech output user control</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Speech output is provided as non-visual access to closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the speech output is capable of being interrupted when requested by the user.</li>
					<li>Check that the speech output is capable of being repeated when requested by the user.</li>
				</ol>
				<p>Result</p>
				<p>Pass: All checks are true</p>
				<p>Fail: Any check is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.5"><strong>5.1.3.5 Speech output automatic interruption</strong></p>
				<p>Where speech output is provided as non-visual access to closed functionality, the ICT shall interrupt current speech output when a user action occurs and when new speech output begins.</p>
				<p>NOTE: Where it is essential that the user hears the entire message, e.g. a safety instruction or warning, the ICT may need to block all user action so that speech is not interrupted.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.5 Speech output automatic interruption</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Speech output is provided as non-visual access to closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Determine the closed functions of the ICT.</li>
					<li>Check that the speech output for each single function is interrupted on a user action.</li>
					<li>Check that the speech output for each single function is interrupted when new speech output begins.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 2 and 3 are true</p>
				<p>Fail: Check 2 or 3 are false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.6"><strong>5.1.3.6 Speech output for non-text content</strong></p>
				<p>Where ICT presents non-text content, the alternative for non-text content shall be presented to users via speech output unless the non-text content is pure decoration or is used only for visual formatting. The speech output for non-text content shall follow the guidance for "text alternative" described in WCAG 2.1 [5] Success Criterion 1.1.1.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.6 Speech output for non-text content</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Non-text content is presented to users via speech output.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that speech output is provided as an alternative for non-text content.</li>
					<li>Check that the non-text content is not pure decoration.</li>
					<li>Check that the non-text content is not used only for visual formatting.</li>
					<li>Check that the speech output follows the guidance for "text alternative" described in WCAG 2.1 Success Criterion 1.1.1 Non-text content.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 and 3 and 4 are true; or 1 and 2 are false; or 1 and 3 are false</p>
				<p>Fail: Checks 1 is true and 2 false; or 1 is true and 3 false; or 1 and 2 and 3 are true and 4 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.7"><strong>5.1.3.7 Speech output for video information</strong></p>
				<p>Where pre-recorded video content is needed to enable the use of closed functions of ICT and where speech output is provided as non-visual access to closed functionality, the speech output shall present equivalent information for the pre-recorded video content.</p>
				<p>NOTE: This speech output can take the form of an audio description or an auditory transcript of the video content.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.7 Speech output for video information</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Pre-recorded video content is needed to enable the use of closed functions of ICT.</li>
					<li>Speech output is provided as non-visual access to non-text content displayed on closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the speech output presents equivalent information for the pre-recorded video content.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-conditions 1 or 2 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.8"><strong>5.1.3.8 Masked entry</strong></p>
				<p>Where auditory output is provided as non-visual access to closed functionality, and the characters displayed are masking characters, the auditory output shall not be a spoken version of the characters entered unless the auditory output is known to be delivered only to a mechanism for private listening, or the user explicitly chooses to allow non-private auditory output.</p>
				<p>NOTE 1: Masking characters are usually displayed for security purposes and include, but are not limited to asterisks representing personal identification numbers.</p>
				<p>NOTE 2: Unmasked character output might be preferred when closed functionality is used, for example, in the privacy of the user's home. A warning highlighting privacy concerns might be appropriate to ensure that the user has made an informed choice.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.8 Masked entry</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Auditory output is provided as non-visual access to closed functionality.</li>
					<li>The characters displayed are masking characters.</li>
					<li>Any option to allow non-private auditory output has not been activated.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the auditory output is not a spoken version of the characters entered.</li>
					<li>Check that the auditory output is known to be delivered only to a mechanism for private listening.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Any check is true</p>
				<p>Fail: All checks are false</p>
				<p>Not applicable: Pre-conditions 1 or 2 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.9"><strong>5.1.3.9 Private access to personal data</strong></p>
				<p>Where auditory output is provided as non-visual access to closed functionality, and the output contains data that is considered to be private according to the applicable privacy policy, the corresponding auditory output shall only be delivered through a mechanism for private listening that can be connected without requiring the use of vision, or through any other mechanism explicitly chosen by the user.</p>
				<p>NOTE 1: This requirement does not apply in cases where data is not defined as being private according to the applicable privacy policy or where there is no applicable privacy policy.</p>
				<p>NOTE 2: Non-private output might be preferred when closed functionality is used, for example, in the privacy of the user's home. A warning highlighting privacy concerns might be appropriate to ensure that the user has made an informed choice.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.9 Private access to personal data</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Auditory output is provided as non-visual access to closed functionality.</li>
					<li>The output contains data.</li>
					<li>There is an applicable privacy policy which considers that data to be private.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the auditory output is only delivered through a mechanism for private listening.</li>
					<li>Check that the mechanism for private listening can be connected without requiring the use of vision.</li>
					<li>Check that the auditory output is delivered through all user-selectable mechanisms.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 or 3 are true</p>
				<p>Fail: Checks 1 or 2 and 3 are false</p>
				<p>Not applicable: Pre-conditions 1 or 3 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.10"><strong>5.1.3.10 Non-interfering audio output</strong></p>
				<p>Where auditory output is provided as non-visual access to closed functionality, the ICT shall not automatically play, at the same time, any interfering audible output that lasts longer than three seconds.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.10 Non-interfering audio output</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Auditory output is provided as non-visual access to closed functionality.</li>
					<li>The ICT automatically plays interfering audible output.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the interfering audible output lasts no longer than three seconds.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-conditions 1 or 2 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.11"><strong>5.1.3.11 Private listening volume</strong></p>
				<p>Where auditory output is provided as non-visual access to closed functionality and is delivered through a mechanism for private listening, ICT shall provide at least one non-visual mode of operation for controlling the volume.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.11 Private listening volume</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The auditory output is provided as non-visual access to closed functionality.</li>
					<li>The auditory output is delivered through a mechanism for private listening.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is at least one non-visual mode of operation for controlling the volume.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-conditions 1 or 2 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.12"><strong>5.1.3.12 Speaker volume</strong></p>
				<p>Where auditory output is provided as non-visual access to closed functionality and is delivered through speakers on ICT, a non-visual incremental volume control shall be provided with output amplification up to a level of at least 65 dBA (-29 dBPaA).</p>
				<p>NOTE: For noisy environments, 65 dBA may not be sufficient.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.12 Speaker volume</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The auditory output is provided as non-visual access to closed functionality.</li>
					<li>The auditory output is delivered through speakers.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that a non-visual incremental volume control is provided.</li>
					<li>Check that output amplification up to a level of at least 65 dBA (-29 dBPaA) is available.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Check 1 or 2 is false</p>
				<p>Not applicable: Pre-conditions 1 or 2 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.13"><strong>5.1.3.13 Volume reset</strong></p>
				<p>Where auditory output is provided as non-visual access to closed functionality, a function that resets the volume to be at a level of 65 dBA or less after every use, shall be provided, unless the ICT is dedicated to a single user.</p>
				<p>NOTE: A feature to disable the volume reset function may be provided in order to enable the single-user exception to be met.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.13 Volume reset</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The auditory output is provided as non-visual access to closed functionality.</li>
					<li>The ICT is not dedicated to a single user.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that a function is provided to automatically reset the volume to be at a level of 65 dBA or less after every use.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-conditions 1 or 2 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.14"><strong>5.1.3.14 Spoken languages</strong></p>
				<p>Where speech output is provided as non-visual access to closed functionality, speech output shall be in the same human language as the displayed content provided, except:</p>
				<p>a) for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text;</p>
				<p>b) where the content is generated externally and not under the control of the ICT vendor, the present clause shall not be required to apply for languages not supported by the ICT's speech synthesizer;</p>
				<p>c) for displayed languages that cannot be selected using non-visual access;</p>
				<p>d) where the user explicitly selects a speech language that is different from the language of the displayed content.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.14 Spoken languages</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The speech output is provided as non-visual access to closed functionality.</li>
					<li>The speech output is not proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.</li>
					<li>The content is not generated externally and is under the control of the ICT vendor.</li>
					<li>The displayed languages can be selected using non-visual access.</li>
					<li>The user has not selected a speech language that is different from the language of the displayed content.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the speech output is in the same human language of the displayed content provided.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-conditions 1 or 3 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.15"><strong>5.1.3.15 Non-visual error identification</strong></p>
				<p>Where speech output is provided as non-visual access to closed functionality and an input error is automatically detected, speech output shall identify and describe the item that is in error.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.15 Non-visual error identification</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Speech output is provided as non-visual access to closed functionality.</li>
					<li>An input error is automatically detected.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that speech output identifies the item that is in error.</li>
					<li>Check that the speech output describes the item that is in error.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Check 1 or check 2 false</p>
				<p>Not applicable: Pre-conditions 1 or 2 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.3.16"><strong>5.1.3.16 Receipts, tickets, and transactional outputs</strong></p>
				<p>Where ICT is closed to visual access and provides receipts, tickets or other outputs as a result of a self-service transaction, speech output shall be provided which shall include all information necessary to complete or verify the transaction. In the case of ticketing machines, printed copies of itineraries and maps shall not be required to be audible.</p>
				<p>NOTE: The speech output may be provided by any element of the total ICT system.</p>
			</td>
			<td>
				<p><strong>C.5.1.3.16 Receipts, tickets, and transactional outputs</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is closed to visual access</li>
					<li>The ICT provides receipts, tickets, or other outputs as a result of a self-service transaction.</li>
					<li>The information being checked is not printed copies of itineraries and maps.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that speech output is provided which includes all information necessary to complete or verify the transaction.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-conditions 1, 2 or 3 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.4"><strong>5.1.4 Functionality closed to text enlargement</strong></p>
				<p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
				<p>The subtended angle, in degrees, may be calculated from:</p>
				<p>Ψ = (180 x H) / (π x D)</p>
				<p>Where:</p>
				<ul>
					<li>ψ is the subtended angle in degrees</li>
					<li>H is the height of the text</li>
					<li>D is the viewing distance</li>
					<li>D and H are expressed in the same units</li>
				</ul>
				<p>NOTE 1: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
				<p>NOTE 2: Table 5.1 and Figure 1 illustrate the relationship between the maximum viewing distance and minimum character height at the specified minimum subtended angle.</p>
				<p>(See Table 5.1 and Figure 1)</p>
			</td>
			<td>
				<p><strong>C.5.1.4 Functionality closed to text enlargement</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>A functionality of the ICT is closed to enlargement features of platform or assistive technology.</li>
					<li>A viewing distance is specified by the supplier.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Measure the height of a capital letter H.</li>
					<li>Check that it subtends an angle of at least 0,7 degrees at the specified viewing distance.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 2 is true</p>
				<p>Fail: Check 2 is false</p>
				<p>Not applicable: Pre-conditions 1 or 2 are not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.5"><strong>5.1.5 Visual output for auditory information</strong></p>
				<p>Where auditory information is needed to enable the use of closed functions of ICT, the ICT shall provide visual information that is equivalent to the auditory output.</p>
				<p>NOTE: This visual information can take the form of captions or text transcripts.</p>
			</td>
			<td>
				<p><strong>C.5.1.5 Visual output for auditory information</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Pre-recorded auditory information is needed to enable the use of closed functions of ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the visual information is equivalent to the pre-recorded auditory output.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.6"><strong>5.1.6 Operation without keyboard interface</strong></p>
			</td>
			<td>
				<p><strong>C.5.1.6 Operation without keyboard interface</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.6.1"><strong>5.1.6.1 Closed functionality</strong></p>
				<p>Where ICT functionality is closed to keyboards or keyboard interfaces, all functionality shall be operable without vision as required by clause 5.1.3.</p>
			</td>
			<td>
				<p><strong>C.5.1.6.1 Closed functionality</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT functionality is closed to keyboards or keyboard interfaces.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that all functionality is operable without vision.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.6.2"><strong>5.1.6.2 Input focus</strong></p>
				<p>Where ICT functionality is closed to keyboards or keyboard interfaces and where input focus can be moved to a user interface element, it shall be possible to move the input focus away from that element using the same mechanism, in order to avoid trapping the input focus.</p>
			</td>
			<td>
				<p><strong>C.5.1.6.2 Input focus</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT functionality is closed to keyboards or keyboard interfaces.</li>
					<li>Input focus can be moved to a user interface element.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that it is possible to move the input focus away from that element using the same mechanism.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.1.7"><strong>5.1.7 Access without speech</strong></p>
				<p>Where speech is needed to operate closed functions of ICT, the ICT shall provide at least one mode of operation using an alternative input mechanism that does not require speech.</p>
			</td>
			<td>
				<p><strong>C.5.1.7 Access without speech</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Speech is needed to enable the use of closed functions of ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the closed functions can be enabled by an alternative input mechanism that does not require speech.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.2"><strong>5.2 Activation of accessibility features</strong></p>
				<p>Where ICT has documented accessibility features, it shall be possible to activate those documented accessibility features that are required to meet a specific need without relying on a method that does not support that need.</p>
			</td>
			<td>
				<p><strong>C.5.2 Activation of accessibility features</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has documented accessibility features to meet a specific need.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that it is possible to activate those accessibility features without relying on a method that does not support that need.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.3"><strong>5.3 Biometrics</strong></p>
				<p>Where ICT uses biological characteristics, it shall not rely on the use of a particular biological characteristic as the only means of user identification or for control of ICT.</p>
				<p>NOTE 1: Alternative means of user identification or for control of ICT could be non-biometric or biometric.</p>
				<p>NOTE 2: Biometric methods based on dissimilar biological characteristics increase the likelihood that individuals with disabilities possess at least one of the specified biological characteristics. Examples of dissimilar biological characteristics are fingerprints, eye retinal patterns, voice, and face.</p>
			</td>
			<td>
				<p><strong>C.5.3 Biometrics</strong></p>
				<p><strong>Type of assessment</strong></p>
				<p><strong>Test 1</strong></p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT uses biological characteristic for user identification.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that more than one means can be used for user identification.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
				<p><strong>Type of assessment</strong></p>
				<p><strong>Test 2</strong></p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT uses biological characteristic for control of ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that more than one means can be used for control of ICT.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.4"><strong>5.4 Preservation of accessibility information during conversion</strong></p>
				<p>Where ICT converts information or communication it shall preserve all documented non-proprietary information that is provided for accessibility, to the extent that such information can be contained in or supported by the destination format.</p>
			</td>
			<td>
				<p><strong>C.5.4 Preservation of accessibility information during conversion</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The non-proprietary information provided for accessibility is documented.</li>
					<li>The ICT converts information or communication.</li>
					<li>The non-proprietary information provided for accessibility can be contained in the destination format.</li>
					<li>The non-proprietary information provided for accessibility can be supported by the destination format.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the non-proprietary information provided for accessibility is preserved when the ICT converts information or communication.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2, 3 or 4 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.5"><strong>5.5 Operable parts</strong></p>
			</td>
			<td>
				<p><strong>C.5.5 Operable parts</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.5.1"><strong>5.5.1 Means of operation</strong></p>
				<p>Where ICT has operable parts that require grasping, pinching, or twisting of the wrist to operate, an accessible alternative means of operation that does not require these actions shall be provided.</p>
			</td>
			<td>
				<p><strong>C.5.5.1 Means of operation</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<p>The ICT has operable parts that require grasping, pinching, or twisting of the wrist to operate.</p>
				<p>Procedure</p>
				<ol>
					<li>Check that there is an accessible alternative means of operation that does not require these actions.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.5.2"><strong>5.5.2 Operable parts discernibility</strong></p>
				<p>Where ICT has operable parts, it shall provide a means to discern each operable part, without requiring vision and without performing the action associated with the operable part.</p>
				<p>NOTE: One way of meeting this requirement is by making the operable parts tactilely discernible.</p>
			</td>
			<td>
				<p><strong>C.5.5.2 Operable parts discernibility</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<p>The ICT has operable parts.</p>
				<p>Procedure</p>
				<ol>
					<li>Identify that there is a means to discern each operable part without vision.</li>
					<li>Check that the action associated with the operable part has not been performed when using the means to discern each operable part of step 1.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Checks 1 or 2 are false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.6"><strong>5.6 Locking or toggle controls</strong></p>
			</td>
			<td>
				<p><strong>C.5.6 Locking or toggle controls</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.6.1"><strong>5.6.1 Tactile or auditory status</strong></p>
				<p>Where ICT has a locking or toggle control and the status of that control is visually presented to the user, the ICT shall provide at least one mode of operation where the status of the control can be determined either through touch or sound without operating the control.</p>
				<p>NOTE 1: Locking or toggle controls are those controls that can only have two or three states and that keep their state while being used.</p>
				<p>NOTE 2: An example of a locking or toggle control is the "Caps Lock" key found on most keyboards. Another example is the volume button on a pay telephone, which can be set at normal, loud, or extra loud volume.</p>
			</td>
			<td>
				<p><strong>C.5.6.1 Tactile or auditory status</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has a locking or toggle control.</li>
					<li>The locking or toggle control is visually presented to the user.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is at least one mode of operation where the status of all locking or toggle controls can be determined through touch without operating the control.</li>
					<li>Check that there is at least one mode of operation where the status of all locking or toggle controls can be determined through sound without operating the control.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 or 2 is true</p>
				<p>Fail: Checks 1 and 2 are false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.6.2"><strong>5.6.2 Visual status</strong></p>
				<p>Where ICT has a locking or toggle control and the status of the control is non-visually presented to the user, the ICT shall provide at least one mode of operation where the status of the control can be visually determined when the control is presented.</p>
				<p>NOTE 1: Locking or toggle controls are those controls that can only have two or three states and that keep their state while being used.</p>
				<p>NOTE 2: An example of a locking or toggle control is the "Caps Lock" key found on most keyboards. An example of making the status of a control determinable is a visual status indicator on a keyboard.</p>
			</td>
			<td>
				<p><strong>C.5.6.2 Visual status</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has a locking or toggle control.</li>
					<li>The locking or toggle control is presented to the user.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is at least one mode of operation where the status of all locking or toggle controls can be visually determined when the control is presented.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.7"><strong>5.7 Key repeat</strong></p>
				<p>Where ICT has a key repeat function that cannot be turned off:</p>
				<p>a) the delay before the key repeat shall be adjustable to at least 2 seconds; and</p>
				<p>b) the key repeat rate shall be adjustable down to one character per 2 seconds.</p>
			</td>
			<td>
				<p><strong>C.5.7 Key repeat</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has a key repeat function or a keyboard or keypad with key repeat is provided.</li>
					<li>The key repeat cannot be turned off.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the delay before key repeat can be adjusted to at least 2 seconds.</li>
					<li>Check that the key repeat rate can be adjusted to 2 seconds per character.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Check 1 or 2 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.8"><strong>5.8 Double-strike key acceptance</strong></p>
				<p>Where ICT has a keyboard or keypad, the delay after any keystroke, during which an additional key-press will not be accepted if it is identical to the previous keystroke, shall be adjustable up to at least 0,5 seconds.</p>
			</td>
			<td>
				<p><strong>C.5.8 Double-strike key acceptance</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has a keyboard or keypad.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a mechanism that allows adjustment of the delay after any keystroke, during which an additional key-press will not be accepted if it is identical to the previous keystroke.</li>
					<li>Adjust that mechanism to its maximum setting.</li>
					<li>Press any key.</li>
					<li>After a delay of 0,5 seconds press the same key as that pressed in step 3.</li>
					<li>Check whether the keystroke of step 4 has been accepted.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true and check 5 is false</p>
				<p>Fail: Check 1 is false or check 5 is true</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="5.9"><strong>5.9 Simultaneous user actions</strong></p>
				<p>Where ICT has a mode of operation requiring simultaneous user actions for its operation, such ICT shall provide at least one mode of operation that does not require simultaneous user actions to operate the ICT.</p>
				<p>NOTE: Having to use both hands to open the lid of a laptop, having to press two or more keys at the same time or having to touch a surface with more than one finger are examples of simultaneous user actions.</p>
			</td>
			<td>
				<p><strong>C.5.9 Simultaneous user actions</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT has a mode of operation requiring simultaneous user actions.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a mode of operation that does not require simultaneous user actions.</li>
					<li>Determine all the user controllable functions of the ICT.</li>
					<li>Check that each user controllable function can be operated with a single user action.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 3 is true</p>
				<p>Fail: Check 3 is false for all modes of operation.</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6"><strong>6 ICT with two-way voice communication</strong></p>
			</td>
			<td>
				<p><strong>C.6 ICT with two-way voice communication</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.1"><strong>6.1 Audio bandwidth for speech</strong></p>
				<p>Where ICT provides two-way voice communication, in order to provide good audio quality, that ICT shall be able to encode and decode two-way voice communication with a frequency range with an upper limit of at least 7 000 Hz.</p>
				<p>NOTE 1: For the purposes of interoperability, support of Recommendation ITU-T G.722 [i.21] is widely used.</p>
				<p>NOTE 2: Where codec negotiation is implemented, other standardized codecs such as Recommendation ITU-T G.722.2 [i.22] are sometimes used so as to avoid transcoding.</p>
			</td>
			<td>
				<p><strong>C.6.1 Audio bandwidth for speech</strong></p>
				<p>Type of assessment</p>
				<p>Measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT under test provides two-way voice communication.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT can encode and decode audio with a frequency range with an upper limit of at least 7 000 Hz.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2"><strong>6.2 Real-Time Text (RTT) functionality</strong></p>
			</td>
			<td>
				<p><strong>C.6.2 Real-Time Text (RTT) functionality</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.1"><strong>6.2.1 RTT provision</strong></p>
			</td>
			<td>
				<p><strong>C.6.2.1 RTT provision</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.1.1"><strong>6.2.1.1 RTT communication</strong></p>
				<p>Where ICT is in a mode that provides a means for two-way voice communication, the ICT shall provide a means for two-way RTT communication, except where this would require design changes to add input or output hardware to the ICT.</p>
				<p>NOTE 1: This requirement includes those products which do not have physical display or text entry capabilities but have the capability to connect to devices that do have such capabilities. It also includes intermediate ICT between the endpoints of the communication.</p>
				<p>NOTE 2: There is no requirement to add: a hardware display, a hardware keyboard, or hardware to support the ability to connect to a display or keyboard, wired or wirelessly, if this hardware would not normally be provided.</p>
				<p>NOTE 3: For the purposes of interoperability, support of Recommendation ITU-T T.140 [i.36] is widely used.</p>
			</td>
			<td>
				<p><strong>C.6.2.1.1 RTT communication</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT under test has a mode that provides a means for two-way voice communication.</li>
					<li>The ICT is in the mode that provides a means for two-way voice communication.</li>
					<li>An "RTT reference terminal" is available.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT allows two-way RTT communication with the "reference" ICT.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met</p>
				<p>Not testable: Pre-condition 3 is not met</p>
				<p>NOTE: An "RTT reference terminal" is a terminal specifically designed for testing RTT capable devices in a manner that would confirm their functionality and interoperability. These are generally created by a national or international standards entity so that all testing is done with a consistent "RTT reference terminal".</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.1.2"><strong>6.2.1.2 Concurrent voice and text</strong></p>
				<p>Where ICT provides a means for two-way voice communication and for users to communicate by RTT, it shall allow concurrent voice and text through a single user connection.</p>
				<p>NOTE 1: With many-party communication, as in a conference system, it is allowed (but not required or necessarily recommended) that RTT be handled in a single display field and that "turn-taking" be necessary to avoid confusion (in the same way that turn-taking is required for those presenting/talking with voice).</p>
				<p>NOTE 2: With many-party communication, best practice is for hand-raising for voice users and RTT users to be handled in the same way, so that voice and RTT users are in the same queue.</p>
				<p>NOTE 3: With a many-party conference system that has chat as one of its features - the RTT (like the voice) would typically be separate from the chat so that RTT use does not interfere with chat (i.e. people can be messaging in the chat field while the person is presenting/talking with RTT - in the same manner that people message using the chat feature while people are talking with voice). RTT users would then use RTT for presenting and use the Chat feature to message while others are presenting (via Voice or RTT).</p>
				<p>NOTE 4: The availability of voice and RTT running concurrently (and separately from chat) can also allow the RTT field to support text captioning when someone is speaking (and it is therefore not being used for RTT since it is not the RTT user's turn to speak).</p>
				<p>NOTE 5: Where both server-side software and local hardware and software are required to provide voice communication, where neither part can support voice communication without the other and are sold as a unit for the voice communication function, the local and server-side components are considered a single product.</p>
			</td>
			<td>
				<p><strong>C.6.2.1.2 Concurrent voice and text</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides a means for two-way voice communication.</li>
					<li>The ICT provides a means for two-way RTT communication.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that ICT allows the concurrent use of voice and RTT through a single user connection.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.2"><strong>6.2.2 Display of RTT</strong></p>
			</td>
			<td>
				<p><strong>C.6.2.2 Display of RTT</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.2.1"><strong>6.2.2.1 Visually distinguishable display</strong></p>
				<p>Where ICT has RTT send and receive capabilities, displayed sent text shall be visually differentiated from and separated from received text.</p>
				<p>NOTE: The ability of the user to choose between having the send and receive text be displayed in-line or separately, and with options to select, allows users to display RTT in a form that works best for them. This would allow Braille users to use a single field and take turns and have text appear in the sequential way that they may need or prefer.</p>
			</td>
			<td>
				<p><strong>C.6.2.2.1 Visually distinguishable display</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT under test has RTT send and receive capabilities.</li>
					<li>The ICT supports RTT mechanism(s).</li>
					<li>An "RTT reference" terminal is available.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>The ICT under test is connected to the "RTT reference" terminal.</li>
					<li>The different elements of the ICT are in an operational status (the connection is active and the terminals are in the relevant RTT mode) and the two terminals are communicating with each other.</li>
					<li>A Short text sequence is sent by the ICT under test.</li>
					<li>A Short text sequence is sent by the "RTT reference terminal”.</li>
					<li>Check, on the ICT under test, that displayed sent text is visually differentiated from and separated from received text.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 5 is true</p>
				<p>Fail: Check 5 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>Not testable: Pre-condition 3 is not met</p>
				<p>NOTE: An "RTT reference" terminal is a terminal specifically designed for testing RTT capable devices in a manner that would confirm their functionality and interoperability. These are generally created by a national or international standards entity so that all testing is done with a consistent. This "RTT reference" terminal.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.2.2"><strong>6.2.2.2 Programmatically determinable send and receive direction</strong></p>
				<p>Where ICT has RTT send and receive capabilities, the send/receive direction of transmitted/received text shall be programmatically determinable, unless the RTT is implemented as closed functionality.</p>
				<p>NOTE: This enables screen readers to distinguish between incoming text and outgoing text when used with RTT functionality.</p>
			</td>
			<td>
				<p><strong>C.6.2.2.2 Programmatically determinable send and receive direction</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has RTT send and receive capabilities.</li>
					<li>The RTT is open functionality.</li>
					<li>An “RTT reference terminal” is available.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>The ICT under test is connected to the "RTT reference terminal".</li>
					<li>The different elements of the ICT are in an operational status (the connection is active and the terminals are in the relevant RTT mode) and the two terminals are communicating with each other.</li>
					<li>A Short text sequence is sent by the ICT under test.</li>
					<li>A Short text sequence is sent by the "RTT reference terminal".</li>
					<li>Check that the send/receive direction of text sequences are programmatically determinable.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 5 is true</p>
				<p>Fail: Check 5 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>Not testable: Pre-condition 3 is not met</p>
				<p>NOTE: An "RTT reference terminal" is a terminal specifically designed for testing RTT capable devices in a manner that would confirm their functionality and interoperability. These are generally created by a national or international standards entity so that all testing is done with a consistent "RTT reference terminal".</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.2.3"><strong>6.2.2.3 Speaker identification</strong></p>
				<p>Where ICT has RTT capabilities, and provides speaker identification for voice, the ICT shall provide speaker identification for RTT.</p>
				<p>NOTE: This is necessary to enable both voice and RTT participants to know who is currently communicating, whether it be in RTT or voice.</p>
			</td>
			<td>
				<p><strong>C.6.2.2.3 Speaker identification</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has RTT capabilities.</li>
					<li>The ICT provides speaker identification for voice.</li>
					<li>An "RTT reference terminal" is available.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>The ICT under test is connected to the "RTT reference terminal".</li>
					<li>RTT is sent from the "RTT reference terminal".</li>
					<li>Check by observation whether the ICT under test provides speaker identification for RTT incoming text.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 2 is true</p>
				<p>Fail: Check 2 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>Not testable: Pre-condition 3 is not met</p>
				<p>NOTE: An "RTT reference terminal" is a terminal specifically designed for testing RTT capable devices in a manner that would confirm their functionality and interoperability. These are generally created by a national or international standards entity so that all testing is done with a consistent "RTT reference terminal".</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.2.4"><strong>6.2.2.4 Visual indicator of Audio with RTT</strong></p>
				<p>Where ICT provides two-way voice communication, and has RTT capabilities, the ICT shall provide a real-time visual indicator of audio activity on the display.</p>
				<p>NOTE 1: The visual indicator may be a simple character position on the display that flickers on and off to reflect audio activity, or presentation of the information in another way that can be both visible to sighted users and passed on to deaf-blind users who are using a braille display.</p>
				<p>NOTE 2: Without this indication a person who lacks the ability to hear does not know when someone is talking.</p>
			</td>
			<td>
				<p><strong>C.6.2.2.4 Visual indicator of Audio with RTT</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT provides two-way voice communication.</li>
					<li>ICT has RTT capabilities.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>ICT under test is connected to another ICT providing two-way voice communication that is compatible with the voice communication on the ICT under test.</li>
					<li>A person speaks into the other ICT.</li>
					<li>Check by observation whether there is a real-time visual indicator of audio activity.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 3 is true</p>
				<p>Fail: Check 3 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>NOTE: The indicator should flicker in real time in a way that reflects the audio activity.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.3"><strong>6.2.3 Interoperability</strong></p>
				<p>Where ICT with RTT functionality interoperates with other ICT with RTT functionality (as required by clause 6.2.1.1) they shall support the applicable RTT interoperability mechanisms described below:</p>
				<p>a) ICT interoperating with other ICT directly connected to the Public Switched Telephone Network (PSTN) using Recommendation ITU-T V.18 [i.23] or any of its annexes for text telephony signals at the PSTN interface;</p>
				<p>b) ICT interoperating with other ICT using VOIP with Session Initiation Protocol (SIP) and using RTT that conforms to IETF RFC 4103 [i.13]. For ICT interoperating with other ICT using the IP Multimedia Sub-System (IMS) to implement VOIP, the set of protocols specified in ETSI TS 126 114 [i.10], ETSI TS 122 173 [i.11] and ETSI TS 134 229 [i.12] describe how IETF RFC 4103 [i.13] would apply;</p>
				<p>c) ICT interoperating with other ICT using technologies other than a or b, above, using a relevant and applicable common specification for RTT exchange that is published and available for the environments in which they will be operating. This common specification shall include a method for indicating loss or corruption of characters;</p>
				<p>d) ICT interoperating with other ICT using a standard for RTT that has been introduced for use in any of the above environments, and is supported by all of the other active ICT that support voice and RTT in that environment.</p>
				<p>NOTE 1: In practice, new standards are introduced as an alternative codec/protocol that is supported alongside the existing common standard and used when all end-to-end components support it while technology development, combined with other reasons including societal development and cost efficiency, may make others become obsolete.</p>
				<p>NOTE 2: Where multiple technologies are used to provide voice communication, multiple interoperability mechanisms may be needed to ensure that all users are able to use RTT.</p>
				<p>EXAMPLE: A conferencing system that supports voice communication through an internet connection might provide RTT over an internet connection using a proprietary RTT method (option c). However, regardless of whether the RTT method is proprietary or non-proprietary, if the conferencing system also offers telephony communication it will also need to support options a or b to ensure that RTT is supported over the telephony connection.</p>
			</td>
			<td>
				<p><strong>C.6.2.3 Interoperability</strong></p>
				<p>Type of assessment</p>
				<p>Test</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides a means for two-way voice communication over the Public Switched Telephone Network (PSTN).</li>
					<li>The ICT provides a means for two-way RTT communication.</li>
					<li>A "V.18 reference terminal" is available.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT interoperates over the Public Switched Telephone Network (PSTN), with the V.18 reference terminal connected to the PSTN as described in Recommendation ITU-T V.18 [i.23] or any of its annexes for text telephony signals at the PSTN interface.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Checks 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>Not testable: Pre-condition 3 is not met</p>
				<p>NOTE: A "V.18 reference terminal" is a terminal specifically designed for testing V.18 capable devices in a manner that would confirm their functionality and interoperability. These are generally created by a national or international standards entity so that all testing is done with a consistent reference terminal.</p>
				<p><strong>C.6.2.3.b Interoperability (b)</strong></p>
				<p>Type of assessment</p>
				<p>Test</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides a means for two-way voice communication using VOIP with Session Initiation Protocol (SIP).</li>
					<li>The ICT provides a means for two-way RTT communication.</li>
					<li>An "RTT reference terminal" is available.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT interoperates with the "RTT reference terminal" using VOIP with Session Initiation Protocol (SIP) and using RTT that conforms to IETF RFC 4103 [i.13].</li>
					<li>If the ICT interoperates with other ICT using the IP Multimedia Sub-System (IMS) to implement VOIP, check that it follows the set of protocols in ETSI TS 126 114 [i.10], ETSI TS 122 173 [i.11] and ETSI TS 134 229 [i.12] that specify how IETF RFC 4103 [i.13] applies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true and, if the ICT interoperates with other ICT using the IP Multimedia Sub-System (IMS) to implement VOIP, check 2 is true.</p>
				<p>Fail: Check 1 is false or, if the ICT interoperates with other ICT using the IP Multimedia Sub-System (IMS) to implement VOIP, check 2 is false.</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>Not testable: Pre-condition 3 is not met</p>
				<p>NOTE: An "RTT reference terminal" is a terminal specifically designed for testing RTT capable devices in a manner that would confirm their functionality and interoperability. These are generally created by a national or international standards entity so that all testing is done with a consistent "RTT reference terminal".</p>
				<p><strong>C.6.2.3.c Interoperability (c)</strong></p>
				<p>Type of assessment</p>
				<p>Test</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides a means for two-way voice communication using technologies other than PSTN or VOIP with Session Initiation Protocol (SIP).</li>
					<li>The ICT provides a means for two-way RTT communication.</li>
					<li>An "RTT reference terminal" is available for that mode of RTT communication.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT interoperates with the "RTT reference terminal" using a relevant and applicable common specification for RTT exchange that is published and available for the environment in which the ICT will be operating.</li>
					<li>Check that the common specification in check 1 includes a method for indicating loss or corruption of characters.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 and 2 are true</p>
				<p>Fail: Checks 1 or 2 are false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>Not testable: Pre-condition 3 is not met</p>
				<p>NOTE: An "RTT reference terminal" is a terminal specifically designed for testing RTT capable devices in a manner that would confirm their functionality and interoperability. These are generally created by a national or international standards entity so that all testing is done with a consistent "RTT reference terminal".</p>
				<p><strong>C.6.2.3.d Interoperability (d)</strong></p>
				<p>Type of assessment</p>
				<p>Test</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides a means for two-way voice communication.</li>
					<li>The ICT provides a means for two-way RTT communication.</li>
					<li>An "RTT reference terminal" is available using the new RTT Standard.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT under test interoperates with the "RTT reference terminal" for the new RTT standard that has been introduced for use.</li>
					<li>Check that the new RTT standard is supported by all of the other active ICT that support voice and RTT in the same environment.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 and Check 2 are true</p>
				<p>Fail: Checks 1 or 2 are false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>Not testable: Pre-condition 3 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.2.4"><strong>6.2.4 RTT responsiveness</strong></p>
				<p>Where ICT utilises RTT input, that RTT input shall be transmitted to the ICT network or platform on which the ICT runs within 500 ms of the time that the smallest reliably composed unit of text entry is available to the ICT for transmission. Delays due to platform or network performance shall not be included in the 500 ms limit.</p>
				<p>NOTE 1: For character by character input, the "smallest reliably composed unit of text entry" would be a character. For word prediction it would be a word. For some voice recognition systems - the text may not exit the recognition software until an entire word (or phrase) has been spoken. In this case, the smallest reliably composed unit of text entry available to the ICT would be the word (or phrase).</p>
				<p>NOTE 2: The 500 ms limit allows buffering of characters for this period before transmission so character by character transmission is not required unless the characters are generated more slowly than 1 per 500 ms.</p>
				<p>NOTE 3: A delay of 300 ms, or less, produces a better impression of flow to the user.</p>
			</td>
			<td>
				<p><strong>C.6.2.4 RTT responsiveness</strong></p>
				<p>Type of assessment</p>
				<p>Inspection of Measurement data or Test</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT under test utilises RTT input.</li>
					<li>The ICT under test is connected to a device or software that can determine when characters are transmitted by the ICT under test.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Enter single characters to the terminal under test.</li>
					<li>Check the time at which input entry has occurred (e.g. characters appear up on the local screen).</li>
					<li>Check the period between input entry to the ICT under test and the time when the text is transmitted to the ICT network or platform.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 3 is less than or equal to 500 ms.</p>
				<p>Fail: Check 3 is greater than 500 ms.</p>
				<p>Not applicable: Pre-condition 1 is not met</p>
				<p>Not testable: Pre-condition 2 is not met</p>
				<p>NOTE: As described in the notes to clause 6.2.4, the identification of when input entry has occurred may vary according to the type of RTT system under test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.3"><strong>6.3 Caller ID</strong></p>
				<p>Where ICT provides caller identification or similar telecommunications functions, the caller identification and similar telecommunications functions shall be available in text form as well as being programmatically determinable, unless the functionality is closed.</p>
			</td>
			<td>
				<p><strong>C.6.3 Caller ID</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides caller identification, or similar telecommunications functions are provided.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the information delivered by each function is available in text form.</li>
					<li>Check that the information delivered by each function is programmatically determinable.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true and either check 2 is true or the functionality is closed</p>
				<p>Fail: Check 1 is false or check 2 is false when the functionality is not closed</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.4"><strong>6.4 Alternatives to voice-based services</strong></p>
				<p>Where ICT provides real-time voice-based communication and also provides voice mail, auto-attendant, or interactive voice response facilities, the ICT shall offer users a means to access the information and carry out the tasks provided by the ICT without the use of hearing or speech.</p>
				<p>NOTE 1: Tasks that involve both operating the interface and perceiving the information would require that both the interface and information be accessible without use of speech or hearing.</p>
				<p>NOTE 2: Solutions capable of handling audio, RTT and video media could satisfy the above requirement.</p>
			</td>
			<td>
				<p><strong>C.6.4 Alternatives to voice-based services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides real-time voice-based communication.</li>
					<li>The ICT provides voice mail, auto-attendant, or interactive voice response facilities.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT offers users a means to access the information without the use of hearing or speech.</li>
					<li>Check that a user can carry out the tasks provided by the system without the use of hearing or speech.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Check 1 or 2 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.5"><strong>6.5 Video communication</strong></p>
			</td>
			<td>
				<p><strong>C.6.5 Video communication</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.5.1"><strong>6.5.1 General (informative)</strong></p>
				<p>Clause 6.5 (Video communications) provides performance requirements that support users who communicate using sign language and lip-reading. For these users, good usability is achieved with a resolution of at least Quarter Video Graphics Array (QVGA, 320 x 240), a frame rate of 20 frames per second and over, with a time difference between speech audio and video that does not exceed 100 ms.</p>
				<p>Increasing the resolution and frame rate further improves both sign language (especially finger spelling) and lipreading, with frame rate being more important than resolution.</p>
				<p>Time differences between audio and video (asynchronicity) can have a great impact onlip-reading - with video that lags behind audio having greater negative effect.</p>
				<p>End-to-end latency can be a problem in video (sign) communication. Overall delay values below 400 ms are preferred, with an increase in preference down to 100 ms. Overall delay depends on multiple factors, including e.g. network delay and video processing. For this reason a testable requirement on minimum values for overall delay cannot be produced.</p>
				<p>NOTE: Recommendation ITU-T F.703 [i.37] defines and gives requirements for Total Conversation that relate to the integration of audio, RTT and video in a single user connection.</p>
			</td>
			<td>
				<p><strong>C.6.5.1 General (informative)</strong></p>
				<p>Clause 6.5.1 is informative only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.5.2"><strong>6.5.2 Resolution</strong></p>
				<p>Where ICT that provides two-way voice communication includes real-time video functionality, the ICT:</p>
				<p>a) shall support at least QVGA resolution;</p>
				<p>b) should preferably support at least VGA resolution.</p>
			</td>
			<td>
				<p><strong>C.6.5.2 Resolution</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides 2 way voice communication.</li>
					<li>The ICT includes real-time video functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the video communication resolution is QVGA resolution or better.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.5.3"><strong>6.5.3 Frame rate</strong></p>
				<p>Where ICT that provides two-way voice communication includes real-time video functionality, the ICT:</p>
				<p>a) shall support a frame rate of at least 20 Frames Per Second (FPS);</p>
				<p>b) should preferably support a frame rate of at least 30 Frames Per Second (FPS) with or without sign language in the video stream.</p>
			</td>
			<td>
				<p><strong>C.6.5.3 Frame rate</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides 2 way voice communication.</li>
					<li>The ICT includes real-time video functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the video communication frame rate is equal to or higher than 20 frames per second.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.5.4"><strong>6.5.4 Synchronization between audio and video</strong></p>
				<p>Where ICT that provides two-way voice communication includes real-time video functionality, the ICT shall ensure a maximum time difference of 100 ms between the speech and video presented to the user.</p>
				<p>NOTE: Recent research shows that, if audio leads the video, the intelligibility suffers much more than the reverse.</p>
			</td>
			<td>
				<p><strong>C.6.5.4 Synchronization between audio and video</strong></p>
				<p>Type of assessment</p>
				<p>Measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides 2 way voice communication.</li>
					<li>The ICT includes real-time video functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the time difference between the speech and video presented to the user is equal to or less than 100 ms.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.5.5"><strong>6.5.5 Visual indicator of audio with video</strong></p>
				<p>Where ICT provides two-way voice communication, and includes real-time video functionality, the ICT shall provide a real-time visual indicator of audio activity.</p>
				<p>NOTE 1: The visual indicator may be a simple visual dot or LED, or other type of on/off indicator, that flickers to reflect audio activity.</p>
				<p>NOTE 2: Without this indication a person who lacks the ability to hear does not know when someone is talking.</p>
			</td>
			<td>
				<p><strong>C.6.5.5 Visual indicator of audio with video</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT provides two-way voice communication.</li>
					<li>ICT has real-time video capabilities.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>ICT under test is connected to another ICT providing two-way voice communication that is compatible with the voice communication on the ICT under test.</li>
					<li>A person speaks into the other ICT.</li>
					<li>Check by observation whether there is a real-time visual indicator of audio activity.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 3 is true</p>
				<p>Fail: Check 3 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
				<p>NOTE: The indicator should flicker in real time in a way that reflects the audio activity.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.5.6"><strong>6.5.6 Speaker identification with video (sign language) communication</strong></p>
				<p>Where ICT provides speaker identification for voice users, it shall provide a means for speaker identification for real-time signing and sign language users once the start of signing has been indicated.</p>
				<p>NOTE 1: The speaker ID can be in the same location as for voice users for multiparty calls.</p>
				<p>NOTE 2: This mechanism might be triggered manually by a user, or automatically where this is technically achievable.</p>
			</td>
			<td>
				<p><strong>C.6.5.6 Speaker identification with video (sign language) communication</strong></p>
				<p>Type of assessment</p>
				<p>Measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides 2 way voice communication.</li>
					<li>The ICT includes real-time video.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>The ICT under test is connected to a compatible ICT that supports video and a person communicates in sign language.</li>
					<li>Check by observation whether the ICT under test provides a means for speaker identification for the sign language users.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 2 is true</p>
				<p>Fail: Check 2 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="6.6"><strong>6.6 Alternatives to video-based services</strong></p>
				<p>Where ICT provides real-time video-based communication and also provides answering machine, auto attendant or interactive response facilities, the ICT should offer users a means to access the information and carry out the tasks related to these facilities:</p>
				<p>a) for audible information, without the use of hearing;</p>
				<p>b) for spoken commands, without the use of speech;</p>
				<p>c) for visual information, without the use of vision.</p>
				<p>NOTE: Solutions capable of generating real-time captions or handling RTT (real-time text) could satisfy the above requirement.</p>
			</td>
			<td>
				<p><strong>C.6.6 Alternatives to video-based services</strong></p>
				<p>Clause 6.6 is advisory only and contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7"><strong>7 ICT with video capabilities</strong></p>
			</td>
			<td>
				<p><strong>C.7 ICT with video capabilities</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.1"><strong>7.1 Caption processing technology</strong></p>
			</td>
			<td>
				<p><strong>C.7.1 Caption processing technology</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.1.1"><strong>7.1.1 Captioning playback</strong></p>
				<p>Where ICT displays video with synchronized audio, it shall have a mode of operation to display the available captions. Where closed captions are provided as part of the content, the ICT shall allow the user to choose to display the captions.</p>
				<p>NOTE 1: Captions may contain information about timing, colour and positioning. This caption data is necessary for caption users. Timing is used for caption synchronization. Colour can be used for speaker identification. Position can be used to avoid obscuring important information.</p>
				<p>NOTE 2: If a Braille device is connected, the ICT should provide an option to display captions on the Braille device.</p>
				<p>NOTE 3: Clause 7.1.1 refers to the ability of the player to display captions. Clauses 9.1.2.2, 10.1.2.2 and 11.1.2.2 refer to the provision of captions for the content (the video).</p>
			</td>
			<td>
				<p><strong>C.7.1.1 Captioning playback</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT displays or processes video with synchronized audio.</li>
					<li>Captions are provided in the video.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a mechanism to display the captions.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Type of assessment</p>
				<p>Test 2</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT displays or processes video with synchronized audio.</li>
					<li>Closed captions are provided by the content.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a mechanism to choose to display the captions.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.1.2"><strong>7.1.2 Captioning synchronization</strong></p>
				<p>Where ICT displays captions, the mechanism to display captions shall preserve synchronization between the audio and the corresponding captions as follows:</p>
				<ul>
					<li>Captions in recorded material: within 100 ms of the time stamp of the caption.</li>
					<li>Live captions: within 100 ms of the availability of the caption to the player.</li>
				</ul>
			</td>
			<td>
				<p><strong>C.7.1.2 Captioning synchronization</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has a mechanism to display captions.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the mechanism to display the captions preserves the synchronization between the audio and corresponding captions within a tenth of a second of the time stamp of the caption, or the availability of the caption to the player if a live caption.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.1.3"><strong>7.1.3 Preservation of captioning</strong></p>
				<p>Where ICT transmits, converts or records video with synchronized audio, it shall preserve caption data such that it can be displayed in a manner consistent with clauses 7.1.1 and 7.1.2.</p>
				<p>Additional presentational aspects of the text such as screen position, text colours, text style and text fonts may convey meaning, based on regional conventions. Altering these presentational aspects could change the meaning and should be avoided wherever possible.</p>
			</td>
			<td>
				<p><strong>C.7.1.3 Preservation of captioning</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT transmits converts or records video with synchronized audio.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT preserves caption data such that it can be displayed in a manner consistent with clauses 7.1.1 and 7.1.2.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.1.4"><strong>7.1.4 Captions characteristics</strong></p>
				<p>Where ICT displays captions, it shall provide a way for the user to adapt the displayed characteristics of captions to their individual requirements, except where the captions are displayed as unmodifiable characters.</p>
				<p>NOTE 1: Defining the background and foreground colour of subtitles, font type, size opacity of the background box of subtitles, and the contour or border of the fonts can contribute to meeting this requirement.</p>
				<p>NOTE 2: Subtitles that are bitmap images are examples of unmodifiable characters.</p>
			</td>
			<td>
				<p><strong>C.7.1.4 Captions characteristics</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT displays captions.</li>
					<li>The captions under test are displayed as modifiable characters.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT provides a way for the user to adapt the displayed characteristics of captions to their individual requirements.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.1.5"><strong>7.1.5 Spoken subtitles</strong></p>
				<p>Where ICT displays video with synchronized audio, it shall have a mode of operation to provide a spoken output of the available captions, except where the content of the displayed captions is not programmatically determinable.</p>
				<p>NOTE 1: Being able to manage speech output range for spoken subtitles independently from general ICT speech is preferable for most users. That is possible when the audio file with spoken subtitle is delivered in a separate audio track and mixed in the end users device.</p>
				<p>NOTE 2: Presenting the separate audio track with spoken subtitles in synchronization with the displayed subtitles/captions improves understandability of the subtitles.</p>
				<p>NOTE 3: Providing subtitles/captions as separate text-streams, facilitates converting the respective texts into audio.</p>
				<p>NOTE 4: Subtitles that are bitmap images are examples where the content of the displayed captions will not be programmatically determinable.</p>
			</td>
			<td>
				<p><strong>C.7.1.5 Spoken subtitles</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT displays video with synchronized audio.</li>
					<li>The content of the captions under test are programmatically determinable.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a mode of operation to provide a spoken output of the available captions.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.2"><strong>7.2 Audio description technology</strong></p>
			</td>
			<td>
				<p><strong>C.7.2 Audio description technology</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.2.1"><strong>7.2.1 Audio description playback</strong></p>
				<p>Where ICT displays video with synchronized audio, it shall provide a mechanism to select and play available audio description to the default audio channel.</p>
				<p>Where video technologies do not have explicit and separate mechanisms for audio description, an ICT is deemed to satisfy this requirement if the ICT enables the user to select and play several audio tracks.</p>
				<p>NOTE 1: In such cases, the video content can include the audio description as one of the available audio tracks.</p>
				<p>NOTE 2: Audio descriptions in digital media sometimes include information to allow descriptions that are longer than the gaps between dialogue. Support in digital media players for this "extended audio description" feature is useful, especially for digital media that is viewed personally.</p>
			</td>
			<td>
				<p><strong>C.7.2.1 Audio description playback</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT displays video with synchronized audio.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is an explicit and separate mechanism for audio description.</li>
					<li>Check that there is a mechanism to select and play the audio description to the default audio channel.</li>
					<li>Check that the ICT enables the user to select and play several audio tracks.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 and 2 are true or 1 is false and 3 is true</p>
				<p>Fail: Check 1 is true and 2 is false or 1 is false and 3 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.2.2"><strong>7.2.2 Audio description synchronization</strong></p>
				<p>Where ICT has a mechanism to play audio description, it shall preserve the synchronization between the audio/visual content and the corresponding audio description.</p>
			</td>
			<td>
				<p><strong>C.7.2.2 Audio description synchronization</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has a mechanism to play audio description.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the synchronization between the audio/visual content and the corresponding audio description is preserved.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.2.3"><strong>7.2.3 Preservation of audio description</strong></p>
				<p>Where ICT transmits, converts, or records video with synchronized audio, it shall preserve audio description data such that it can be played in a manner consistent with clauses 7.2.1 and 7.2.2.</p>
			</td>
			<td>
				<p><strong>C.7.2.3 Preservation of audio description</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT transmits converts or records video with synchronized audio.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT preserves audio description data such that it can be played in a manner consistent with clauses 7.2.1 and 7.2.2.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="7.3"><strong>7.3 User controls for captions and audio description</strong></p>
				<p>Where ICT primarily displays materials containing video with associated audio content, user controls to activate subtitling and audio description shall be provided to the user at the same level of interaction (i.e. the number of steps to complete the task) as the primary media controls.</p>
				<p>NOTE 1: Primary media controls are the set of controls that the user most commonly uses to control media.</p>
				<p>NOTE 2: Products that have a general hardware volume control, such as a telephone, or a laptop which can be configured to display video through software but which is not its primary purpose, would not need dedicated hardware controls for captions and descriptions; however software controls, or hardware controls mapped through software, would need to be at the same level of interaction.</p>
				<p>NOTE 3: It is best practice for ICT to include additional controls enabling the user to select whether captions and audio description are turned on or off by default.</p>
			</td>
			<td>
				<p><strong>C.7.3 User controls for captions and audio description</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT primarily display materials containing video with associated audio content.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that user controls to activate subtitling and audio descriptions are provided to the user at the same level of interaction as the primary media controls.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8"><strong>8 Hardware</strong></p>
			</td>
			<td>
				<p><strong>C.8 Hardware</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.1"><strong>8.1 General</strong></p>
			</td>
			<td>
				<p><strong>C.8.1 General</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.1.1"><strong>8.1.1 Generic requirements</strong></p>
				<p>The "generic requirements" of clause 5 also apply to ICT that is hardware.</p>
			</td>
			<td>
				<p><strong>C.8.1.1 Generic requirements</strong></p>
				<p>Clause 8.1.1 is advisory only and contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.1.2"><strong>8.1.2 Standard connections</strong></p>
				<p>Where an ICT provides user input or output device connection points, the ICT shall provide at least one input and/or output connection that conforms to an industry standard non-proprietary format, directly or through the use of commercially available adapters.</p>
				<p>NOTE 1: The intent of this requirement is to ensure compatibility with assistive technologies by requiring the use of standard connections on ICT.</p>
				<p>NOTE 2: The word connection applies to both physical and wireless connections.</p>
				<p>NOTE 3: Current examples of industry standard non-proprietary formats are USB and Bluetooth.</p>
			</td>
			<td>
				<p><strong>C.8.1.2 Standard connections</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT provides user input or output device connection points.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that one type of connection conforms to an industry standard non-proprietary format.</li>
					<li>Check that one type of connection conforms to an industry standard non-proprietary format through the use of commercially available adapters.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 or 2 is true</p>
				<p>Fail: Checks 1 and 2 are false</p>
				<p>Not applicable: Pre-condition 1 is not met</p>
				<p>NOTE: The connections may be physical or wireless connections.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.1.3"><strong>8.1.3 Colour</strong></p>
				<p>Where the ICT has hardware aspects that use colour, colour shall not be used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.</p>
			</td>
			<td>
				<p><strong>C.8.1.3 Colour</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The hardware aspects of the ICT conveys visual information using colour coding as a means to indicate an action, to prompt a response, or to distinguish a visual element.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that an alternative form of visual coding is provided.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.2"><strong>8.2 Hardware products with speech output</strong></p>
			</td>
			<td>
				<p><strong>C.8.2 Hardware products with speech output</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.2.1"><strong>8.2.1 Speech volume gain</strong></p>
			</td>
			<td>
				<p><strong>C.8.2.1 Speech volume gain</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.2.1.1"><strong>8.2.1.1 Speech volume range</strong></p>
				<p>Where ICT hardware has speech output, it shall provide a means to adjust the speech output volume level over a range of at least 18 dB.</p>
				<p>NOTE: Fixed-line handsets and headsets fulfilling the requirements of ANSI/TIA-4965 [i.2are deemed to comply with this requirement.</p>
			</td>
			<td>
				<p><strong>C.8.2.1.1 Speech volume range</strong></p>
				<p>Type of assessment</p>
				<p>Inspection based on measurement data</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT hardware has speech output.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT is certified to meet ANSI/TIA-4965 [i.2].</li>
					<li>Measure the level (in dB) of the speech output at the lowest volume setting.</li>
					<li>Measure the level (in dB) of the speech output at the highest volume setting.</li>
					<li>Check that the range between 1 and 2 is greater than or equal to 18 dB.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 or 4 is true</p>
				<p>Fail: Check 1 and 4 are false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.2.1.2"><strong>8.2.1.2 Incremental volume control</strong></p>
				<p>Where ICT hardware has speech output and its volume control is incremental, it shall provide at least one intermediate step of 12 dB gain above the lowest volume setting.</p>
			</td>
			<td>
				<p><strong>C.8.2.1.2 Incremental volume control</strong></p>
				<p>Type of assessment</p>
				<p>Inspection based on measurement data</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT hardware has speech output.</li>
					<li>The volume control is incremental.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Measure the level (in dB) of the speech output at the lowest volume setting.</li>
					<li>Check if one intermediate step provides a level 12 dB above the lowest volume level measured in step 1.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 2 is true</p>
				<p>Fail: Check 2 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.2.2"><strong>8.2.2 Magnetic coupling</strong></p>
			</td>
			<td>
				<p><strong>C.8.2.2 Magnetic coupling</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.2.2.1"><strong>8.2.2.1 Fixed-line devices</strong></p>
				<p>Where ICT hardware is a fixed-line communication device with speech output and which is normally held to the ear], it shall provide a means of magnetic coupling which meets the requirements of ETSI ES 200 381-1 [2] and shall carry the "T" symbol specified in ETSI ETS 300 381 [1].</p>
				<p>NOTE: ICT fulfilling the requirements of TIA-1083-A [i.24] is deemed to comply with the requirements of this clause.</p>
				<p>NOTE 2: Magnetic coupling is also known as inductive coupling for T-coil.</p>
			</td>
			<td>
				<p><strong>C.8.2.2.1 Fixed-line devices</strong></p>
				<p>Type of assessment</p>
				<p>Inspection based on measurement data</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT hardware is a fixed line communication device with an audio output that is normally held to the ear.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT is certified to meet TIA-1083-A [i.24].</li>
					<li>Measurements are made according to ETSI ES 200 381-1 [2] which prove that the requirements defined in that standard are fulfilled.</li>
					<li>The ICT carries the "T" symbol specified in ETSI ETS 300 381 [1].</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 or 2 is true and check 3 is true</p>
				<p>Fail: Checks 1 and 2 are false or check 3 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.2.2.2"><strong>8.2.2.2 Wireless communication devices</strong></p>
				<p>Where ICT hardware is a wireless communication device with speech output which is normally held to the ear, it shall provide a means of magnetic coupling to hearing technologies which meets the requirements of ETSI ES 200 381-2 [3].</p>
				<p>NOTE: ICT fulfilling the requirements of ANSI/IEEE C63.19 [i.1] is deemed to comply with the requirements of this clause.</p>
			</td>
			<td>
				<p><strong>C.8.2.2.2 Wireless communication devices</strong></p>
				<p>Type of assessment</p>
				<p>Inspection based on measurement data</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT hardware is a wireless communication device which is normally held to the ear.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT is certified to meet ANSI/IEEE C63.19 [i.1].</li>
					<li>Check that the ICT provide a means of magnetic coupling to hearing technologies which meets the requirements of ETSI ES 200 381-2 [3].</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 or 2 is true</p>
				<p>Fail: Checks 1 and 2 are false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3"><strong>8.3 Stationary ICT</strong></p>
			</td>
			<td>
				<p><strong>C.8.3 Stationary ICT</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.0"><strong>8.3.0 General</strong></p>
				<p>The present document defines the dimensions for accessing stationary ICT that can be placed in a built environment, but does not define the dimensions of the built environment in general.</p>
				<p>The scope includes stationary ICT, of which floors and circulation spaces are "an integral part" (typically kiosks and cabins), and where there are external reach ranges relevant for operating the stationary ICT.</p>
				<p>Clauses 8.3.2 to 8.3.4 specify mandatory limits for the maximum and minimum height of operable parts and displays. Based on dimensions shown in Figure 53 of ISO 21542:2011 [i.34], it is recommended that the possible height range is reduced to:</p>
				<ul>
					<li>minimum and maximum heights of operable parts: 800 mm and 1 100 mm respectively, and</li>
					<li>minimum and maximum heights of displays: 1 200 mm and 1 400 mm respectively.</li>
				</ul>
			</td>
			<td>
				<p><strong>C.8.3.0 General</strong></p>
				<p>Clause 8.3.0 is advisory only and contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.1"><strong>8.3.1 Forward or side reach</strong></p>
				<p>Stationary ICT shall conform to either clause 8.3.2 or clause 8.3.3.</p>
				<p>NOTE 1: This does not preclude conforming to both clauses.</p>
				<p>NOTE 2: The dimensions set out in clauses 407.8.3 and 407.8.2 of Section 508 of the Rehabilitation Act, as published in January 2017 [i.25], are identical to those given in clauses 8.3.2 and 8.3.3 of the present document.</p>
				<p>NOTE 3: Physical access to stationary ICT is dependent on the dimensions of both the ICT and the environment in which it is installed and operated. Clause 8.3 does not apply to the accessibility of the physical environment external to the ICT.</p>
			</td>
			<td>
				<p><strong>C.8.3.1 Forward or side reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check whether the ICT conforms to clause 8.3.2.2.</li>
					<li>Check whether the ICT conforms to clause 8.3.2.3.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 or 2 is true</p>
				<p>Fail: Checks 1 and 2 are false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2"><strong>8.3.2 Forward reach</strong></p>
			</td>
			<td>
				<p><strong>C.8.3.2 Forward reach</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.1"><strong>8.3.2.1 Unobstructed high forward reach</strong></p>
				<p>Where no part of the stationary ICT obstructs the forward reach, at least one of each type of operable part shall be located no higher than 1 220 mm (48 inches) above the floor of the access space. This is shown in Figure 2.</p>
			</td>
			<td>
				<p><strong>C.8.3.2.1 Unobstructed high forward reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>No part of the stationary ICT obstructs the forward reach.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that at least one of each type of operable part is located no higher than 1 200 mm (48 inches) above the floor of the access space.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.2"><strong>8.3.2.2 Unobstructed low forward reach</strong></p>
				<p>Where no part of the stationary ICT obstructs the forward reach, at least one of each type of operable part shall be located no lower than 380 mm (15 inches) above the floor of the access space. This is shown in Figure 2.</p>
			</td>
			<td>
				<p><strong>C.8.3.2.2 Unobstructed low forward reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>No part of the stationary ICT obstructs the forward reach.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that at least one of each type of operable part is located no lower than 380 mm (15 inches) above the floor of the access space.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.3"><strong>8.3.2.3 Obstructed forward reach</strong></p>
			</td>
			<td>
				<p><strong>C.8.3.2.3 Obstructed forward reach</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.3.1"><strong>8.3.2.3.1 Clear space</strong></p>
				<p>Where an obstruction is an integral part of the stationary ICT and hinders the access to any type of operable part, the ICT shall provide a clear space which extends beneath the obstructing element for a distance not less than the required reach depth over the obstruction.</p>
				<p>NOTE: Ensuring that there will be unhindered "access to any type of operable part" guarantees that a user will be able access at least one of each type of operable part.</p>
			</td>
			<td>
				<p><strong>C.8.3.2.3.1 Clear space</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>An integral part of the stationary ICT forms an obstruction which hinders to any type of operable part.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT provides a clear space which extends beneath the obstructing element for a distance not less than the required reach depth over the obstruction.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.3.2"><strong>8.3.2.3.2 Obstructed (&lt; 510 mm) forward reach</strong></p>
				<p>Where the stationary ICT has an obstruction which is an integral part of the ICT and which is less than 510 mm (20 inches), the forward reach to at least one of each type of operable part shall be no higher than 1 220 mm (48 inches) above the floor contact of the ICT. This is shown in Figure 3 (a).</p>
			</td>
			<td>
				<p><strong>C.8.3.2.3.2 Obstructed (&lt; 510 mm) forward reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>An integral part of the stationary ICT forms an obstruction which is less than 510 mm (20 inches) deep.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the forward reach to at least one of each type of operable part is no higher than 1 220 mm (48 inches) above the floor contact of the ICT.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.3.3"><strong>8.3.2.3.3 Obstructed (&lt; 635 mm) forward reach</strong></p>
				<p>Where the stationary ICT has an obstruction which is an integral part of the ICT and which is not less than 510 mm (20 inches) but is less than 635 mm (25 inches) maximum, the forward reach to at least one of each type of operable part shall be no higher than 1 120 mm (44 inches) above the floor contact of the ICT. This is shown in Figure 3 (b).</p>
			</td>
			<td>
				<p><strong>C.8.3.2.3.3 Obstructed (&lt; 635 mm) forward reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>An integral part of the stationary ICT forms an obstruction which is not less than 510 mm (20 inches) but is less than 635 mm (25 inches) deep.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the forward reach to at least one of each type of operable part is no higher than 1 120 mm (44 inches) above the floor contact of the ICT.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.4"><strong>8.3.2.4 Knee and toe clearance width</strong></p>
				<p>Where the space under an obstacle that is an integral part of the stationary ICT is part of access space, the clearance shall be at least 760 mm (30 inches) wide.</p>
			</td>
			<td>
				<p><strong>C.8.3.2.4 Knee and toe clearance width</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>The space under an obstacle that is an integral part of the ICT is part of an access space.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the width of the knee clearance is greater than 760 mm (30 inches).</li>
					<li>Check that the width of the toe clearance is greater than 760 mm (30 inches).</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Checks 1 or 2 are false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.5"><strong>8.3.2.5 Toe clearance</strong></p>
				<p>Where an obstacle is an integral part of the stationary ICT, a space under the obstacle that is less than 230 mm (9 inches) above the floor is considered toe clearance and shall:</p>
				<p>a) extend 635 mm (25 inches) maximum under the whole obstacle;</p>
				<p>b) provide a space at least 430 mm (17 inches) deep and 230 mm (9 inches) above the floor under the obstacle;</p>
				<p>c) extend no more than 150 mm (6 inches) beyond any obstruction at 230 mm (9 inches) above the floor.</p>
				<p>This is shown in Figure 4.</p>
			</td>
			<td>
				<p><strong>C.8.3.2.5 Toe clearance</strong></p>
				<p>a)</p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstacle that is an integral part of the ICT.</li>
					<li>There is a toe clearance space under any obstacle that is an integral part of the ICT that is less than 230 mm (9 inches) above the floor.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the toe clearance does not extend more than 635 mm (25 inches) under the obstacle.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met</p>
				<p>b)</p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstacle that is an integral part of the ICT.</li>
					<li>There is a toe clearance space under any obstacle that is an integral part of the ICT that is less than 230 mm (9 inches) above the floor.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the toe clearance is at least 430 mm (17 inches) deep and 230 mm (9 inches) above the floor under the obstacle.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met</p>
				<p>c)</p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstacle that is an integral part of the ICT.</li>
					<li>There is a toe clearance space under any obstacle that is an integral part of the ICT that is less than 230 mm (9 inches) above the floor.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the toe clearance extends no more than 150 mm (6 inches) beyond any obstruction at 230 mm (9 inches) above the floor.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.2.6"><strong>8.3.2.6 Knee clearance</strong></p>
				<p>Where an obstacle is an integral part of the stationery ICT, the space under the obstacle that is between 230 mm (9 inches) and 685 mm (25 inches) above the floor is considered knee clearance and shall:</p>
				<p>a) extend no more than 635 mm (25 inches) under the obstacle at a height of 230 mm (9 inches) above the floor;</p>
				<p>b) extend at least 280 mm (11 inches) under the obstacle at a height of 230 mm (9 inches) above the floor;</p>
				<p>c) extend at least 205 mm (8 inches) under the obstacle at a height of 685 mm (27 inches) above the floor;</p>
				<p>d) be permitted to be reduced in depth at a rate of 25 mm (1 inch) for each 150 mm (6 inches) in height.</p>
				<p>This is shown in Figure 5.</p>
			</td>
			<td>
				<p><strong>C.8.3.2.6 Knee clearance</strong></p>
				<p>a)</p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstacle that is an integral part of the ICT.</li>
					<li>There is a knee clearance space under the obstacle between 230 mm (9 inches) and 685 mm (25 inches) above the floor.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a knee clearance that extends less than 635 mm (25 inches) under the obstacle at a height of 230 mm (9 inches) above the floor.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met</p>
				<p>b)</p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstacle that is an integral part of the ICT.</li>
					<li>There is a knee clearance space under the obstacle between 230 mm (9 inches) and 685 mm (25 inches) above the floor.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a knee clearance that extends at least 280 mm (11 inches) under the obstacle at a height of 230 mm (9 inches) above the floor.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met</p>
				<p>c)</p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstacle that is an integral part of the ICT.</li>
					<li>There is a knee clearance space under the obstacle between 230 mm (9 inches) and 685 mm (25 inches) above the floor.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a knee clearance that extends more than 205 mm (9 inches) under the obstruction at a height of 685 mm (25 inches) above the floor.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met</p>
				<p>d)</p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstacle that is an integral part of the ICT.</li>
					<li>There is a knee clearance space under the obstacle between 230 mm (9 inches) and 685 mm (25 inches) above the floor.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the reduction in depth of the knee clearance is no greater than 25 mm (1 inch) for each 150 mm (6 inches) in height.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.3"><strong>8.3.3 Side reach</strong></p>
			</td>
			<td>
				<p><strong>C.8.3.3 Side reach</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.3.1"><strong>8.3.3.1 Unobstructed high side reach</strong></p>
				<p>Where the side reach is unobstructed or obstructed by an element that is an integral part of the stationary ICT and which is less than 255 mm (10 inches), at least one of each type of operable part shall be within a high side reach which is less than or equal to 1 220 mm (48 inches) above the floor of the access space. This is shown in Figure 6<strong>.</strong></p>
			</td>
			<td>
				<p><strong>C.8.3.3.1 Unobstructed high side reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>Side reach is unobstructed or is obstructed by an element that is an integral part of the stationary ICT which is less than 510 mm (20 inches).</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the high side reach to at least one of each type of operable part is no higher than 1 220 mm (48 inches) above the floor of the access space.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.3.2"><strong>8.3.3.2 Unobstructed low side reach</strong></p>
				<p>Where the side reach is unobstructed or obstructed by an element that is an integral part of the stationary ICT and which is less than 255 mm (10 inches), at least one of each type of operable part shall be within a low side reach which is greater than or equal to 380 mm (15 inches) above the floor of the access space. This is shown in Figure 6<strong>.</strong></p>
			</td>
			<td>
				<p><strong>C.8.3.3.2 Unobstructed low side reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>Side reach is unobstructed or is obstructed by an element that is an integral part of the stationary ICT which is less than 510 mm (20 inches).</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the low side reach to at least one of each type of operable part is greater than or equal to 380 mm (15 inches) above the floor of the access space.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.3.3"><strong>8.3.3.3 Obstructed side reach</strong></p>
			</td>
			<td>
				<p><strong>C.8.3.3.3 Obstructed side reach</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.3.3.1"><strong>8.3.3.3.1 Obstructed (≤ 255 mm) side reach</strong></p>
				<p>Where stationary ICT has an obstruction which is an integral part of the ICT, the height of the obstruction shall be less than 865 mm (34 inches). Where the depth of the obstruction is less than or equal to 255 mm (10 inches), the high side reach to at least one of each type of operable part shall be no higher than 1 220 mm (48 inches) above the floor of the access space. This is shown in Figure 7 (a).</p>
			</td>
			<td>
				<p><strong>C.8.3.3.3.1 Obstructed (≤ 255 mm) side reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstruction, less than or equal to 255 mm (10 inches) in depth, that is an integral part of the ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the high side reach to at least one of each type of operable part is no higher than 1 220 mm (48 inches) above the floor of the access space.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.3.3.2"><strong>8.3.3.3.2 Obstructed (≤ 610 mm) side reach</strong></p>
				<p>Where stationary ICT has an obstruction which is an integral part of the ICT, the height of the obstruction shall be less than 865 mm (34 inches). Where the depth of the obstruction is greater than 255 mm (10 inches) with a maximum depth of 610 mm (24 inches), the high side reach to at least one of each type of operable part shall be no higher than 1 170 mm (46 inches) above the floor of the access space. This is shown in Figure 7 (b).</p>
			</td>
			<td>
				<p><strong>C.8.3.3.3.2 Obstructed (≤ 610 mm) side reach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an obstruction, greater than 255 mm (10 inches) and no more than 610 mm (24 inches) in depth, that is an integral part of the ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the high side reach to at least one of each type of operable part is no higher than 1 170 mm (46 inches) above the floor of the access space.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.4"><strong>8.3.4 Clear floor or ground space</strong></p>
			</td>
			<td>
				<p><strong>C.8.3.4 Clear floor or ground space</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.4.1"><strong>8.3.4.1 Change in level</strong></p>
				<p>Where stationary ICT has a floor within it, then any change of floor level within it or entering it shall be ramped with a slope no steeper than 1:48.</p>
				<p>Exceptions:</p>
				<p>a) If the change in floor level is less than or equal to 6,4 mm (¼ inch) the change may be vertical as shown in Figure 8.</p>
				<p>b) If the change in floor level is less than or equal to 13 mm (½ inch) the change may have a slope not steeper than 1:2 as shown in Figure 9.</p>
			</td>
			<td>
				<p><strong>C.8.3.4.1 Change in level</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is a floor within the ICT.</li>
					<li>The floor has a change in level.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>If the change in level is ramped, check that it has a slope less than 1:48.</li>
					<li>If there is a vertical change of floor level, check that it is less than or equal to 6,4 mm.</li>
					<li>If there is a vertical or sloped change in floor level, check that the slope is not greater than 1:2.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 or 2 or 3 is true</p>
				<p>Fail: Checks 1 and 2 and 3 are false</p>
				<p>Not applicable: Pre-condition 1 or 2 or 3 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.4.2"><strong>8.3.4.2 Clear floor or ground space</strong></p>
				<p>Where stationary ICT has an operating area within it, it shall provide a clear floor area that has the minimum dimensions of 760 mm (30 inches) by 1 220 mm (48 inches) from which to operate the ICT. This is shown in Figure 10.</p>
			</td>
			<td>
				<p><strong>C.8.3.4.2 Clear floor or ground space</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an operating area within it.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is a clear floor area with minimum rectangular dimensions of 760 mm on one edge and 1 220 mm on the other edge.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.4.3"><strong>8.3.4.3 Approach</strong></p>
			</td>
			<td>
				<p><strong>C.8.3.4.3 Approach</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.4.3.1"><strong>8.3.4.3.1 General</strong></p>
				<p>Where stationary ICT has an access space inside it, at least one full side of the space shall be unobstructed.</p>
			</td>
			<td>
				<p><strong>C.8.3.4.3.1 General</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>There is an access space inside it.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that one full side of the space is unobstructed.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.4.3.2"><strong>8.3.4.3.2 Forward approach</strong></p>
				<p>Where the operating area is inside an alcove within the stationary ICT, the alcove is deeper than 610 mm (24 inches), and where a forward approach is necessary, the dimension of the access space shall be a minimum of 915 mm (36 inches) wide. This is shown in Figure 11.</p>
			</td>
			<td>
				<p><strong>C.8.3.4.3.2 Forward approach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT containing an alcove.</li>
					<li>The operating area is within the alcove.</li>
					<li>The depth of the alcove is greater than 610 mm.</li>
					<li>A forward approach is necessary.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the width of the alcove is greater than 915 mm.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2, 3 or 4 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.4.3.3"><strong>8.3.4.3.3 Parallel approach</strong></p>
				<p>Where the operating area is inside an alcove within the stationary ICT, the alcove is deeper than 380 mm (15 inches), and where a parallel approach is possible, the dimension of the access space shall be a minimum of 1 525 mm (60 inches) wide. This is shown in Figure 12.</p>
			</td>
			<td>
				<p><strong>C.8.3.4.3.3 Parallel approach</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT containing an alcove.</li>
					<li>The operating area is within the alcove.</li>
					<li>The depth of the alcove is greater than 380 mm.</li>
					<li>A parallel approach is possible.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the width of the access space is greater than 1 525 mm.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2, 3 or 4 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.5"><strong>8.3.5 Visibility</strong></p>
				<p>Where stationary ICT provides one or more display screens, at least one of each type of display screen shall be positioned such that the information on the screen is legible from a point located 1 015 mm (40 inches) above the centre of the floor of the operating area.</p>
				<p>NOTE: The intent of this requirement is that the information on the screen can be read by users with normal vision and appropriate language skills, when seated in a wheelchair.</p>
			</td>
			<td>
				<p><strong>C.8.3.5 Visibility</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
					<li>One or more display screens are provided.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that at least one of each type of display screen is positioned such that the information on the screen is legible from a point located 1 015 mm (40 inches) above the centre of the floor of the operating area.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.3.6"><strong>8.3.6 Installation instructions</strong></p>
				<p>Installation instructions shall be made available for all stationary ICT. These instructions shall give guidance on how to install the ICT in a manner that takes into account applicable requirements for accessibility of the built environment as they apply to the installation of the ICT. Where there are no such requirements the instructions should require that the dimensions of the installed ICT conform to clauses 8.3.2 to 8.3.5 of the present document.</p>
			</td>
			<td>
				<p><strong>C.8.3.6 Installation instructions</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is stationary ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that installation instructions are made available.</li>
					<li>Check that the instructions give guidance on how to install the ICT in a manner that ensures that the dimensions of the installed ICT conform to clauses 8.3.2 to 8.3.4.</li>
					<li>Check that the instructions say that the installers should also take into account applicable requirements for accessibility of the built environment as they apply to the installation of the ICT.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1, 2 and 3 are true</p>
				<p>Fail: Checks 1 or 2 or 3 are false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.4"><strong>8.4 Mechanically operable parts</strong></p>
			</td>
			<td>
				<p><strong>C.8.4 Mechanically operable parts</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.4.1"><strong>8.4.1 Numeric keys</strong></p>
				<p>Where provided, physical numeric keys arranged in a rectangular keypad layout shall have the number five key tactilely distinct from the other keys of the keypad.</p>
				<p>NOTE: Recommendation ITU-T E.161 [i.20] describes the 12-key telephone keypad layout and provides further details of the form of tactile markers.</p>
			</td>
			<td>
				<p><strong>C.8.4.1 Numeric keys</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has physical numeric keys arranged in a 12-key telephone keypad layout.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the number five key is tactilely distinct from the other keys of the keypad.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.4.2"><strong>8.4.2 Operation of mechanical parts</strong></p>
			</td>
			<td>
				<p><strong>C.8.4.2 Operation of mechanical parts</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.4.2.1"><strong>8.4.2.1 Means of operation of mechanical parts</strong></p>
				<p>Where a control requires grasping, pinching, or twisting of the wrist to operate it, an accessible alternative means of operation that does not require these actions shall be provided.</p>
			</td>
			<td>
				<p><strong>C.8.4.2.1 Means of operation of mechanical parts</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT has operable parts that requires grasping, pinching, or twisting of the wrist to operate.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that there is an accessible alternative means of operation that does not require these actions.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.4.2.2"><strong>8.4.2.2 Force of operation of mechanical parts</strong></p>
				<p>Where a control requires a force greater than 22,2 N to operate it, an accessible alternative means of operation that requires a force less than 22,2 N shall be provided.</p>
				<p>NOTE: ISO 21542:2011 [i.34]: Building Construction - Accessibility and Usability of the Built Environment recommends a value between 2,5 and 5 Newtons.</p>
			</td>
			<td>
				<p><strong>C.8.4.2.2 Force of operation of mechanical parts</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT provides keys, tickets or fare cards, and their orientation is important for further use.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that keys, tickets or fare cards have an orientation that is tactilely discernible.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.4.3"><strong>8.4.3 Keys, tickets and fare cards</strong></p>
				<p>Where ICT provides keys, tickets or fare cards, and their orientation is important for further use, they shall have an orientation that is tactilely discernible.</p>
				<p>NOTE: ETSI ETS 300 767 [i.6] defines suitable tactile indications for plastic cards.</p>
			</td>
			<td>
				<p><strong>C.8.4.3 Keys, tickets and fare cards</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT provides keys, tickets or fare cards, and their orientation is important for further use.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that keys, tickets or fare cards have an orientation that is tactilely discernible.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="8.5"><strong>8.5 Tactile indication of speech mode</strong></p>
				<p>Where ICT is designed for shared use and speech output is available, a tactile indication of the means to initiate the speech mode of operation shall be provided.</p>
				<p>NOTE: The tactile indication could include Braille instructions.</p>
			</td>
			<td>
				<p><strong>C.8.5 Tactile indication of speech mode</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is designed for shared use.</li>
					<li>Speech output is available.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that a tactile indication of the means to initiate the speech mode of operation is provided.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9"><strong>9 Web</strong></p>
			</td>
			<td>
				<p><strong>C.9 Web</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.0"><strong>9.0 General (informative)</strong></p>
				<p>Requirements in clause 9 apply to web pages (as defined in clause 3.1) including:</p>
				<ul>
					<li>Conformance with W3C Web Content Accessibility Guidelines (WCAG 2.0) Level AA is equivalent to conforming with clauses 9.1.1, 9.1.2, 9.1.3.1 to 9.1.3.3, 9.1.4.1 to 9.1.4.5, 9.2.1.1, 9.2.1.2, 9.2.2, 9.2.3, 9.2.4, 9.3, 9.4.1.1, 9.4.1.2 and the conformance requirements of clause 9.6 of the present document.</li>
					<li>Conformance with W3C Web Content Accessibility Guidelines (WCAG 2.1) [5] Level AA is equivalent to conforming with all of clauses 9.1 to 9.4 and the conformance requirements of clause 9.6 of the present document.</li>
					<li>Requirements for non-web documents and non-web software are given in clauses 10 and 11 respectively.</li>
				</ul>
				<p>NOTE 1: When evaluating web sites they are evaluated as individual web pages. Web applications, including mobile web applications, are covered under the definition of web page which is quite broad and covers all web content types.</p>
				<p>NOTE 2: WCAG 2.0 is identical to ISO/IEC 40500:2012: "Information technology - W3C Web Content Accessibility Guidelines (WCAG) 2.0" [4].</p>
				<p>The requirements in clauses 9.1 to 9.4 are written using the concept of satisfying success criteria (defined in clause 3.1). A web page satisfies a WCAG success criterion when the success criterion does not evaluate to false when applied to the web page. This implies that if the success criterion puts conditions on a specific feature and that specific feature does not occur in the web page, then the web page satisfies the success criterion.</p>
				<p>NOTE 3: For example, a web page that does not contain pre-recorded audio content in synchronized media will automatically satisfy WCAG success criterion 1.2.2 (captions - pre-recorded) and, in consequence, will also conform to clause 9.1.2.2.</p>
				<p>In addition to Level AA success criteria, the Web Content Accessibility Guidelines also include success criteria for Level AAA. These are listed in clause 9.5 of the present document. Web authors and procurement accessibility specialists are encouraged to consider whether any of the WCAG Level AAA success criteria offer suggestions that may be applicable and relevant to their project, as well as potentially beneficial to some users.</p>
				<p>NOTE 4: The W3C states that "It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content".</p>
				<p>NOTE 5: "Void" clauses have been inserted in order to maintain alignment with the numbering of WCAG 2.1 Level A and Level AA Success Criteria.</p>
			</td>
			<td>
				<p><strong>C.9.0 General (informative)</strong></p>
				<p>Clause 9.0 is informative only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1"><strong>9.1 Perceivable</strong></p>
			</td>
			<td>
				<p><strong>C.9.1 Perceivable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.1"><strong>9.1.1 Text alternatives</strong></p>
			</td>
			<td>
				<p><strong>C.9.1.1 Text alternatives</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.1.1"><strong>9.1.1.1 Non-text content</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#non-text-content">WCAG 2.1 Success Criterion 1.1.1 Non-text content.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.1.1 Non-text content</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#non-text-content">WCAG 2.1 Success Criterion 1.1.1 Non-text content</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.1.1 Non-text content.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.2"><strong>9.1.2 Time-based media</strong></p>
			</td>
			<td>
				<p><strong>C.9.1.2 Time-based media</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.2.1"><strong>9.1.2.1 Audio-only and video-only (pre-recorded)</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">WCAG 2.1 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded).</a></p>
			</td>
			<td>
				<p><strong>C.9.1.2.1 Audio-only and video-only (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded">WCAG 2.1 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.2.2"><strong>9.1.2.2 Captions (pre-recorded)</strong></p>
				<p>Where ICT is a web page, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#captions-prerecorded">WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded).</a></p>
			</td>
			<td>
				<p><strong>C.9.1.2.2 Captions (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#captions-prerecorded">WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.2.3"><strong>9.1.2.3 Audio description or media alternative (pre-recorded)</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded).</a></p>
			</td>
			<td>
				<p><strong>C.9.1.2.3 Audio description or media alternative (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.2.4"><strong>9.1.2.4 Captions (live)</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#captions-live">WCAG 2.1 Success Criterion 1.2.4 Captions (Live).</a></p>
			</td>
			<td>
				<p><strong>C.9.1.2.4 Captions (live)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#captions-live">WCAG 2.1 Success Criterion 1.2.4 Captions (Live)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.2.4 Captions (Live).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.2.5"><strong>9.1.2.5 Audio description (pre-recorded)</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#audio-description-prerecorded">WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded).</a></p>
			</td>
			<td>
				<p><strong>C.9.1.2.5 Audio description (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-description-prerecorded">WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.3"><strong>9.1.3 Adaptable</strong></p>
			</td>
			<td>
				<p><strong>C.9.1.3 Adaptable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.3.1"><strong>9.1.3.1 Info and relationships</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#info-and-relationships">WCAG 2.1 Success Criterion 1.3.1 Info and Relationships.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.3.1 Info and relationships</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#info-and-relationships">WCAG 2.1 Success Criterion 1.3.1 Info and Relationships</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.3.1 Info and Relationships.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.3.2"><strong>9.1.3.2 Meaningful sequence</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#meaningful-sequence">WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.3.2 Meaningful sequence</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#meaningful-sequence">WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.3.3"><strong>9.1.3.3 Sensory characteristics</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#sensory-characteristics">WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.3.3 Sensory characteristics</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#sensory-characteristics">WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.3.4"><strong>9.1.3.4 Orientation</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#orientation">WCAG 2.1 Success Criterion 1.3.4 Orientation.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.3.4 Orientation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#orientation">WCAG 2.1 Success Criterion 1.3.4 Orientation</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.3.4 Orientation.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.3.5"><strong>9.1.3.5 Identify input purpose</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#identify-input-purpose">WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.3.5 Identify input purpose</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#identify-input-purpose">WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4"><strong>9.1.4 Distinguishable</strong></p>
			</td>
			<td>
				<p><strong>C.9.1.4 Distinguishable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.1"><strong>9.1.4.1 Use of colour</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#use-of-color">WCAG 2.1 Success Criterion 1.4.1 Use of Color.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.4.1 Use of colour</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#use-of-color">WCAG 2.1 Success Criterion 1.4.1 Use of Color</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.1 Use of Color.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.2"><strong>9.1.4.2 Audio control</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#audio-control">WCAG 2.1 Success Criterion 1.4.2 Audio Control.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.4.2 Audio control</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-control">WCAG 2.1 Success Criterion 1.4.2 Audio Control</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.2 Audio Control.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.3"><strong>9.1.4.3 Contrast (minimum)</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#contrast-minimum">WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum).</a></p>
			</td>
			<td>
				<p><strong>C.9.1.4.3 Contrast (minimum)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#contrast-minimum">WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.4"><strong>9.1.4.4 Resize text</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#resize-text">WCAG 2.1 Success Criterion 1.4.4 Resize text.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.4.4 Resize text</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#resize-text">WCAG 2.1 Success Criterion 1.4.4 Resize text</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.4 Resize text.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.5"><strong>9.1.4.5 Images of text</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#images-of-text">WCAG 2.1 Success Criterion 1.4.5 Images of Text.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.4.5 Images of text</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#images-of-text">WCAG 2.1 Success Criterion 1.4.5 Images of Text</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.5 Images of Text.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.6"><strong>9.1.4.6 Void</strong></p>
			</td>
			<td>
				<p><strong>C.9.1.4.6 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.7"><strong>9.1.4.7 Void</strong></p>
			</td>
			<td>
				<p><strong>C.9.1.4.7 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.8"><strong>9.1.4.8 Void</strong></p>
			</td>
			<td>
				<p><strong>C.9.1.4.8 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.9"><strong>9.1.4.9 Void</strong></p>
			</td>
			<td>
				<p><strong>C.9.1.4.9 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.10"><strong>9.1.4.10 Reflow</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#reflow">WCAG 2.1 Success Criterion 1.4.10 Reflow.</a></p>
			</td>
			<td>
				<p><strong>C.9.1.4.10 Reflow</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/WAI/WCAG21/Understanding/reflow.html">WCAG 2.1 Success Criterion 1.4.10 Reflow</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.10 Reflow.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.11"><strong>9.1.4.11 Non-text contrast</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#non-text-contrast">WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast</a>.</p>
			</td>
			<td>
				<p><strong>C.9.1.4.11 Non-text contrast</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#non-text-contrast">WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.12"><strong>9.1.4.12 Text spacing</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#text-spacing">WCAG 2.1 Success Criterion 1.4.12 Text spacing</a>.</p>
			</td>
			<td>
				<p><strong>C.9.1.4.12 Text spacing</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#text-spacing">WCAG 2.1 Success Criterion 1.4.12 Text spacing</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.12 Text spacing.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.1.4.13"><strong>9.1.4.13 Content on hover or focus</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">WCAG 2.1 Success Criterion 1.4.13 Content on Hover or Focus</a>.</p>
			</td>
			<td>
				<p><strong>C.9.1.4.13 Content on hover or focus</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">WCAG 2.1 Success Criterion 1.4.13 Content on Hover or Focus</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 1.4.13 Content on Hover or Focus.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2"><strong>9.2 Operable</strong></p>
			</td>
			<td>
				<p><strong>C.9.2 Operable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.1"><strong>9.2.1 Keyboard accessible</strong></p>
			</td>
			<td>
				<p><strong>C.9.2.1 Keyboard accessible</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.1.1"><strong>9.2.1.1 Keyboard</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#keyboard">WCAG 2.1 Success Criterion 2.1.1 Keyboard</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.1.1 Keyboard</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#keyboard">WCAG 2.1 Success Criterion 2.1.1 Keyboard</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.1.1 Keyboard.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.1.2"><strong>9.2.1.2 No keyboard trap</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#no-keyboard-trap">WCAG 2.1 Success Criterion 2.1.2 No Keyboard Trap</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.1.2 No keyboard trap</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#no-keyboard-trap">WCAG 2.1 Success Criterion 2.1.2 No Keyboard Trap</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.1.2 No Keyboard Trap.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.1.3"><strong>9.2.1.3 Void</strong></p>
			</td>
			<td>
				<p><strong>C.9.2.1.3 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.1.4"><strong>9.2.1.4 Character key shortcuts</strong></p>
				<p>Where ICT is a web page, it shall satisfy WCAG 2.1 Success Criterion <a href="http://www.w3.org/TR/WCAG21/#character-key-shortcuts">2.1.4 Character Key Shortcuts</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.1.4 Character key shortcuts</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#character-key-shortcuts">WCAG 2.1 Success Criterion 2.1.4 Character Key Shortcuts</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.1.4 Character Key Shortcuts.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.2"><strong>9.2.2 Enough time</strong></p>
			</td>
			<td>
				<p><strong>C.9.2.2 Enough time</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.2.1"><strong>9.2.2.1 Timing adjustable</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#timing-adjustable">WCAG 2.1 Success Criterion 2.2.1 Timing Adjustable</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.2.1 Timing adjustable</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#timing-adjustable">WCAG 2.1 Success Criterion 2.2.1 Timing Adjustable</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.2.1 Timing Adjustable.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.2.2"><strong>9.2.2.2 Pause, stop, hide</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#pause-stop-hide">WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.2.2 Pause, stop, hide</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#pause-stop-hide">WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.3"><strong>9.2.3 Seizures and physical reactions</strong></p>
			</td>
			<td>
				<p><strong>C.9.2.3 Seizures and physical reactions</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.3.1"><strong>9.2.3.1 Three flashes or below threshold</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">WCAG 2.1 Success Criterion 2.3.1 Three Flashes or Below Threshold</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.3.1 Three flashes or below threshold</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">WCAG 2.1 Success Criterion 2.3.1 Three Flashes or Below Threshold</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.3.1 Three Flashes or Below Threshold.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.4"><strong>9.2.4 Navigable</strong></p>
			</td>
			<td>
				<p><strong>C.9.2.4 Navigable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.4.1"><strong>9.2.4.1 Bypass blocks</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#bypass-blocks">WCAG 2.1 Success Criterion 2.4.1 Bypass Blocks</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.4.1 Bypass blocks</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#bypass-blocks">WCAG 2.1 Success Criterion 2.4.1 Bypass Blocks</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.4.1 Bypass Blocks.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.4.2"><strong>9.2.4.2 Page titled</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#page-titled">WCAG 2.1 Success Criterion 2.4.2 Page Titled</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.4.2 Page titled</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#page-titled">WCAG 2.1 Success Criterion 2.4.2 Page Titled</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.4.2 Page Titled.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.4.3"><strong>9.2.4.3 Focus Order</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#focus-order">WCAG 2.1 Success Criterion 2.4.3 Focus Order</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.4.3 Focus Order</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#focus-order">WCAG 2.1 Success Criterion 2.4.3 Focus Order</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.4.3 Focus Order.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.4.4"><strong>9.2.4.4 Link purpose (in context)</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="https://www.w3.org/TR/WCAG21/#link-purpose-in-context">WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context)</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.4.4 Link purpose (in context)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="https://www.w3.org/TR/WCAG21/#link-purpose-in-context">WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.4.5"><strong>9.2.4.5 Multiple ways</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#multiple-ways">WCAG 2.1 Success Criterion 2.4.5 Multiple Ways</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.4.5 Multiple ways</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#multiple-ways">WCAG 2.1 Success Criterion 2.4.5 Multiple Ways</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.4.5 Multiple Ways.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.4.6"><strong>9.2.4.6 Headings and labels</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#headings-and-labels">WCAG 2.1 Success Criterion 2.4.6 Headings and Labels</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.4.6 Headings and labels</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#headings-and-labels">WCAG 2.1 Success Criterion 2.4.6 Headings and Labels</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.4.6 Headings and Labels.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.4.7"><strong>9.2.4.7 Focus visible</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#focus-visible">WCAG 2.1 Success Criterion 2.4.7 Focus Visible</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.4.7 Focus visible</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#focus-visible">WCAG 2.1 Success Criterion 2.4.7 Focus Visible</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.4.7 Focus Visible.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.5"><strong>9.2.5 Input modalities</strong></p>
			</td>
			<td>
				<p><strong>C.9.2.5 Input modalities</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.5.1"><strong>9.2.5.1 Pointer gestures</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#pointer-gestures">WCAG 2.1 Success Criterion 2.5.1 Pointer Gestures</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.5.1 Pointer gestures</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#pointer-gestures">WCAG 2.1 Success Criterion 2.5.1 Pointer Gestures</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.5.1 Pointer Gestures.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.5.2"><strong>9.2.5.2 Pointer cancellation</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#pointer-cancellation">WCAG 2.1 Success Criterion 2.5.2 Pointer Cancellation</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.5.2 Pointer cancellation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#pointer-cancellation">WCAG 2.1 Success Criterion 2.5.2 Pointer Cancellation</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.5.2 Pointer Cancellation.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.5.3"><strong>9.2.5.3 Label in name</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="https://www.w3.org/TR/WCAG21/#label-in-name">WCAG 2.1 Success Criterion 2.5.3 Label in Name</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.5.3 Label in name</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="https://www.w3.org/TR/WCAG21/#label-in-name">WCAG 2.1 Success Criterion 2.5.3 Label in Name</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.5.3 Label in Name.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.2.5.4"><strong>9.2.5.4 Motion actuation</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#motion-actuation">WCAG 2.1 Success Criterion 2.5.4 Motion Actuation</a>.</p>
			</td>
			<td>
				<p><strong>C.9.2.5.4 Motion actuation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#motion-actuation">WCAG 2.1 Success Criterion 2.5.4 Motion Actuation</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 2.5.4 Motion Actuation.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3"><strong>9.3 Understandable</strong></p>
			</td>
			<td>
				<p><strong>C.9.3 Understandable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.1"><strong>9.3.1 Readable</strong></p>
			</td>
			<td>
				<p><strong>C.9.3.1 Readable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.1.1"><strong>9.3.1.1 Language of page</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#language-of-page">WCAG 2.1 Success Criterion 3.1.1 Language of Page</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.1.1 Language of page</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#language-of-page">WCAG 2.1 Success Criterion 3.1.1 Language of Page</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.1.1 Language of Page.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.1.2"><strong>9.3.1.2 Language of parts</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#language-of-parts">WCAG 2.1 Success Criterion 3.1.2 Language of Parts</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.1.2 Language of parts</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#language-of-parts">WCAG 2.1 Success Criterion 3.1.2 Language of Parts</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.1.2 Language of Parts.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.2"><strong>9.3.2 Predictable</strong></p>
			</td>
			<td>
				<p><strong>C.9.3.2 Predictable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.2.1"><strong>9.3.2.1 On focus</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="https://www.w3.org/TR/WCAG21/#on-focus">WCAG 2.1 Success Criterion 3.2.1 On Focus</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.2.1 On focus</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="https://www.w3.org/TR/WCAG21/#on-focus">WCAG 2.1 Success Criterion 3.2.1 On Focus</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.2.1 On Focus.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.2.2"><strong>9.3.2.2 On input</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#on-input">WCAG 2.1 Success Criterion 3.2.2 On Input</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.2.2 On input</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#on-input">WCAG 2.1 Success Criterion 3.2.2 On Input</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.2.2 On Input.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.2.3"><strong>9.3.2.3 Consistent navigation</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#consistent-navigation">WCAG 2.1 Success Criterion 3.2.3 Consistent Navigation</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.2.3 Consistent navigation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#consistent-navigation">WCAG 2.1 Success Criterion 3.2.3 Consistent Navigation</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.2.3 Consistent Navigation.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.2.4"><strong>9.3.2.4 Consistent identification</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#consistent-identification">WCAG 2.1 Success Criterion 3.2.4 Consistent Identification</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.2.4 Consistent identification</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#consistent-identification">WCAG 2.1 Success Criterion 3.2.4 Consistent Identification</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.2.4 Consistent Identification.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.3"><strong>9.3.3 Input assistance</strong></p>
			</td>
			<td>
				<p><strong>C.9.3.3 Input assistance</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.3.1"><strong>9.3.3.1 Error identification</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#error-identification">WCAG 2.1 Success Criterion 3.3.1 Error Identification</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.3.1 Error identification</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#error-identification">WCAG 2.1 Success Criterion 3.3.1 Error Identification</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.3.1 Error Identification.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.3.2"><strong>9.3.3.2 Labels or instructions</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#labels-or-instructions">WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.3.2 Labels or instructions</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#labels-or-instructions">WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.3.3"><strong>9.3.3.3 Error suggestion</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#error-suggestion">WCAG 2.1 Success Criterion 3.3.3 Error Suggestion</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.3.3 Error suggestion</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#error-suggestion">WCAG 2.1 Success Criterion 3.3.3 Error Suggestion</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.3.3 Error Suggestion.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.3.3.4"><strong>9.3.3.4 Error prevention (legal, financial, data)</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">WCAG 2.1 Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data)</a>.</p>
			</td>
			<td>
				<p><strong>C.9.3.3.4 Error prevention (legal, financial, data)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">WCAG 2.1 Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.4"><strong>9.4 Robust</strong></p>
			</td>
			<td>
				<p><strong>C.9.4 Robust</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.4.1"><strong>9.4.1 Compatible</strong></p>
			</td>
			<td>
				<p><strong>C.9.4.1 Compatible</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.4.1.1"><strong>9.4.1.1 Parsing</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#parsing">WCAG 2.1 Success Criterion 4.1.1 Parsing</a>.</p>
			</td>
			<td>
				<p><strong>C.9.4.1.1 Parsing</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#parsing">WCAG 2.1 Success Criterion 4.1.1 Parsing</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 4.1.1 Parsing.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.4.1.2"><strong>9.4.1.2 Name, role, value</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#name-role-value">WCAG 2.1 Success Criterion 4.1.2 Name, Role, Value.</a></p>
			</td>
			<td>
				<p><strong>C.9.4.1.2 Name, role, value</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#name-role-value">WCAG 2.1 Success Criterion 4.1.2 Name, Role, Value</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 4.1.2 Name, Role, Value</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.4.1.3"><strong>9.4.1.3 Status messages</strong></p>
				<p>Where ICT is a web page, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#status-messages">WCAG 2.1 Success Criterion 4.1.3 Status Messages</a>.</p>
			</td>
			<td>
				<p><strong>C.9.4.1.3 Status messages</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page does not fail <a href="http://www.w3.org/TR/WCAG21/#status-messages">WCAG 2.1 Success Criterion 4.1.3 Status Messages</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the web page does not contain content relevant to WCAG 2.1 Success Criterion 4.1.3 Status Messages.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.5"><strong>9.5 WCAG 2.1 AAA Success Criteria</strong></p>
				<p>In addition to the Level AA success criteria, included in clauses 9.1 to 9.4, the Web Content Accessibility Guidelines include success criteria for Level AAA. These are listed in Annex - Table 9.1. Web authors and procurement accessibility specialists are encouraged to consider the WCAG 2.1 Level AAA success criteria that, when it is possible to apply them, may provide access beyond that required in the present document.</p>
				<p>NOTE: The W3C states that "It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA Success Criteria for some content". Refer to Table 9.1: WCAG 2.1 Level AAA Success Criteria in Annex – Tables and figures (from EN 301 549).</p>
			</td>
			<td>
				<p><strong>C.9.5 WCAG 2.1 AAA Success Criteria</strong></p>
				<p>Clause 9.5 is informative only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="9.6"><strong>9.6 WCAG conformance requirements</strong></p>
				<p>Where ICT is a web page, it shall satisfy all the following five WCAG 2.1 conformance requirements at Level AA [5]:</p>
				<ol>
					<li>Conformance level</li>
					<li>Full pages</li>
					<li>Complete processes</li>
					<li>Only Accessibility-Supported Ways of Using Technologies</li>
					<li>Non-interference</li>
				</ol>
				<p>NOTE 1: A Web page that meets all of requirements 9.1 to 9.4, or where a Level AA conforming alternate version (as defined in WCAG 2.1 [5]) is provided, will meet conformance requirement 1.</p>
				<p>NOTE 2: According to W3C: "WCAG 2.1 extends Web Content Accessibility Guidelines 2.0 [4], which was published as a W3C Recommendation December 2008. Content that conforms to WCAG 2.1 also conforms to WCAG 2.0, and therefore to policies that reference WCAG 2.0" [4].</p>
				<p>NOTE 3: Conformance requirement 5 states that all content on the page, including content that is not otherwise relied upon to meet conformance, meets clauses 9.1.4.2, 9.2.1.2, 9.2.2.2 and 9.2.3.1.</p>
			</td>
			<td>
				<p><strong>C.9.6 WCAG conformance requirements</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a web page.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the web page satisfies WCAG 2.1 [5] conformance requirement "1: Conformance level" at Level AA.</li>
					<li>Check that the web page satisfies WCAG 2.1 [5] conformance requirement "2: Full pages".</li>
					<li>Check that the web page satisfies WCAG 2.1 [5] conformance requirement "3: Complete processes".</li>
					<li>Check that the web page satisfies WCAG 2.1 [5] conformance requirement "4: Only Accessibility-Supported Ways of Using Technologies".</li>
					<li>Check that the web page satisfies WCAG 2.1 [5] conformance requirement "5: Non-interference".</li>
				</ol>
				<p>Result</p>
				<p>Pass: All checks are true</p>
				<p>Fail: Any check is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10"><strong>10 Non-web documents</strong></p>
			</td>
			<td>
				<p><strong>C.10 Non-web documents</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.0"><strong>10.0 General (informative)</strong></p>
				<p>Requirements in clause 10 apply to:</p>
				<ul>
					<li>documents that are not web pages;</li>
					<li>documents that are not embedded in web pages; and</li>
					<li>documents that are provided with web pages but are neither embedded nor rendered together with the web page from which they are provided (i.e. the present clause applies to downloadable documents).</li>
				</ul>
				<p>Clause 9 provides requirements for documents that are in web pages or that are embedded in web pages and that are used in the rendering or that are intended to be rendered together with the web page in which they are embedded.</p>
				<p>NOTE 1: Some examples of documents are letters, spreadsheets, emails, books, pictures, presentations, and movies that have an associated user agent such as a document reader, editor or media player.</p>
				<p>NOTE 2: A single document may be composed of multiple files such as the video content and closed caption text. This fact is not usually apparent to the end-user consuming the document/content.</p>
				<p>NOTE 3: Documents require a user agent in order for the content to be presented to users. The requirements for user agents can be found in clause 11.</p>
				<p>NOTE 4: The requirements for content that is part of software, can be found in clause 11.</p>
				<p>NOTE 5: The success criteria set out in clause 10 are intended to harmonize with the Working Group Note [i.26] produced by the W3C's <a href="http://www.w3.org/WAI/GL/WCAG2ICT-TF/">WCAG2ICT Task Force</a>.</p>
				<p>NOTE 6: "Void" clauses have been inserted in order to maintain alignment of the numbering in clauses 9, 10 and 11.</p>
				<p>NOTE 7: Requirements in clause 10 also apply to documents that are protected using mechanisms such as digital signatures, encryption, password protection, and watermarks when they are presented to the user.</p>
				<p>NOTE 8: It is best practice to provide meta data on the accessibility of the document within or separate to the document using WebSchemas/Accessibility 2.0 [i.38].</p>
			</td>
			<td>
				<p><strong>C.10.0 General (informative)</strong></p>
				<p>Clause 10.0 is advisory only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1"><strong>10.1 Perceivable</strong></p>
			</td>
			<td>
				<p><strong>C.10.1 Perceivable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.1"><strong>10.1.1 Text alternatives</strong></p>
			</td>
			<td>
				<p><strong>C.10.1.1 Text alternatives</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.1.1"><strong>10.1.1.1 Non-text content</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#non-text-content">WCAG 2.1 Success Criterion 1.1.1 Non-text Content</a>.</p>
				<p>NOTE: CAPTCHAs do not currently appear outside of the Web. However, if they do appear, this guidance is accurate.</p>
			</td>
			<td>
				<p><strong>C.10.1.1.1 Non-text content</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#non-text-content">WCAG 2.1 Success Criterion 1.1.1 Non-text content</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.1.1 Non-text content.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.2"><strong>10.1.2 Time-based media</strong></p>
			</td>
			<td>
				<p><strong>C.10.1.2 Time-based media</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.2.1"><strong>10.1.2.1 Audio-only and video-only (pre-recorded)</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">WCAG 2.1 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded)</a>.</p>
				<p>NOTE: The alternative can be provided directly in the document - or provided in an alternate version that meets the success criterion.</p>
			</td>
			<td>
				<p><strong>C.10.1.2.1 Audio-only and video-only (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">WCAG 2.1 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.2.2"><strong>10.1.2.2 Captions (pre-recorded)</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#captions-prerecorded">WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded)</a>.</p>
				<p>NOTE: The WCAG 2.1 definition of "captions" notes that "in some countries, captions are called subtitles". They are also sometimes referred to as "subtitles for the hearing impaired". Per the definition in WCAG 2.1, to meet this success criterion, whether called captions or subtitles, they would have to provide "synchronized visual and / or text alternative for both speech and non-speech audio information needed to understand the media content" where non-speech information includes "sound effects, music, laughter, speaker identification and location".</p>
			</td>
			<td>
				<p><strong>C.10.1.2.2 Captions (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#captions-prerecorded">WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.2.3"><strong>10.1.2.3 Audio description or media alternative (pre-recorded)</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)</a>.</p>
				<p>NOTE 1: The WCAG 2.1 definition of "audio description" says that "audio description" is "Also called 'video description' and 'descriptive narration'".</p>
				<p>NOTE 2: Secondary or alternate audio tracks are commonly used for this purpose.</p>
			</td>
			<td>
				<p><strong>C.10.1.2.3 Audio description or media alternative (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.2.4"><strong>10.1.2.4 Captions (live)</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#captions-live">WCAG 2.1 Success Criterion 1.2.4 Captions (Live)</a>.</p>
				<p>NOTE: The WCAG 2.1 definition of "captions" notes that "in some countries, captions are called subtitles". They are also sometimes referred to as "subtitles for the hearing impaired". Per the definition in WCAG 2.1, to meet this success criterion, whether called captions or subtitles, they would have to provide "synchronized visual and / or text alternative for both speech and non-speech audio information needed to understand the media content" where non-speech information includes "sound effects, music, laughter, speaker identification and location".</p>
			</td>
			<td>
				<p><strong>C.10.1.2.4 Captions (live)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#captions-live">WCAG 2.1 Success Criterion 1.2.4 Captions (Live)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.2.4 Captions (Live).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.2.5"><strong>10.1.2.5 Audio description (pre-recorded)</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#audio-description-prerecorded">WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded)</a>.</p>
				<p>NOTE 1: The WCAG 2.1 definition of "audio description" says that audio description is "Also called 'video description' and 'descriptive narration'".</p>
				<p>NOTE 2: Secondary or alternate audio tracks are commonly used for this purpose.</p>
			</td>
			<td>
				<p><strong>C.10.1.2.5 Audio description (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-description-prerecorded">WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.3"><strong>10.1.3 Adaptable</strong></p>
			</td>
			<td>
				<p><strong>C.10.1.3 Adaptable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.3.1"><strong>10.1.3.1 Info and relationships</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#info-and-relationships">WCAG 2.1 Success Criterion 1.3.1 Info and Relationships</a>.</p>
				<p>NOTE: Where documents contain non-standard structure types (roles), it is best practice to map them to a standard structure type as a fall-back solution for the reader.</p>
			</td>
			<td>
				<p><strong>C.10.1.3.1 Info and relationships</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#info-and-relationships">WCAG 2.1 Success Criterion 1.3.1 Info and Relationships</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.3.1 Info and Relationships.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.3.2"><strong>10.1.3.2 Meaningful sequence</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#meaningful-sequence">WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.3.2 Meaningful sequence</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#meaningful-sequence">WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.3.3"><strong>10.1.3.3 Sensory characteristics</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#sensory-characteristics">WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.3.3 Sensory characteristics</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#sensory-characteristics">WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.3.4"><strong>10.1.3.4 Orientation</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#orientation">WCAG 2.1 Success Criterion 1.3.4 Orientation</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.3.4 Orientation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions:</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#orientation">WCAG 2.1 Success Criterion 1.3.4 Orientation</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.3.4 Orientation.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.3.5"><strong>10.1.3.5 Identify input purpose</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#identify-input-purpose">WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.3.5 Identify input purpose</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#identify-input-purpose">WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4"><strong>10.1.4 Distinguishable</strong></p>
			</td>
			<td>
				<p><strong>C.10.1.4 Distinguishable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.1"><strong>10.1.4.1 Use of colour</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#use-of-color">WCAG 2.1 Success Criterion 1.4.1 Use of Color</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.1 Use of colour</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#use-of-color">WCAG 2.1 Success Criterion 1.4.1 Use of Color</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.4.1 Use of Color.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.2"><strong>10.1.4.2 Audio control</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.1.</p>
				<p><strong>Table 10.1: Document success criterion: Audio control</strong></p>
				<p>If any audio in a document plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.</p>
				<p>NOTE 1: Since any part of a document that does not meet this success criterion can interfere with a user's ability to use the whole document, all content in the document (whether or not it is used to meet other success criteria) shall meet this success criterion.</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#audio-control">WCAG 2.1 Success Criterion 1.4.2 Audio Control</a>, replacing "on a Web page" with "in a document" "any content" with "any part of a document", "whole page" with "whole document", "on the Web page" with "in the document", removing "See Conformance Requirement 5: Non-Interference" and adding note 1.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.2 Audio control</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.1.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.3"><strong>10.1.4.3 Contrast (minimum)</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#contrast-minimum">WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum)</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.3 Contrast (minimum)</strong></p>
				<p>Type of assessment: Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#contrast-minimum">WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.4"><strong>10.1.4.4 Resize text</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#resize-text">WCAG 2.1 Success Criterion 1.4.4 Resize Text</a>.</p>
				<p>NOTE 1: Content for which there are software players, viewers or editors with a 200 percent zoom feature would automatically meet this success criterion when used with such players, unless the content will not work with zoom.</p>
				<p>NOTE 2: This success criterion is about the ability to allow users to enlarge the text on screen at least up to 200 % without needing to use assistive technologies. This means that the application provides some means for enlarging the text 200 % (zoom or otherwise) without loss of content or functionality or that the application works with the platform features that meet this requirement.</p>
				<p>NOTE 3: It is best practice to use only fonts that allow for scaling without loss of quality (e.g. pixelized presentation). This applies in particular to embedded fonts.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.4 Resize text</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#resize-text">WCAG 2.1 Success Criterion 1.4.4 Resize text</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.4.4 Resize text.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.5"><strong>10.1.4.5 Images of text</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#images-of-text">WCAG 2.1 Success Criterion 1.4.5 Images of Text</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.5 Images of text</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#images-of-text">WCAG 2.1 Success Criterion 1.4.5 Images of Text</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.4.5 Images of Text.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.6"><strong>10.1.4.6 Void</strong></p>
			</td>
			<td>
				<p><strong>C.10.1.4.6 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.7"><strong>10.1.4.7 Void</strong></p>
			</td>
			<td>
				<p><strong>C.10.1.4.7 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.8"><strong>10.1.4.8 Void</strong></p>
			</td>
			<td>
				<p><strong>C.10.1.4.8 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.9"><strong>10.1.4.9 Void</strong></p>
			</td>
			<td>
				<p><strong>C.10.1.4.9 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.10"><strong>10.1.4.10 Reflow</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.2.</p>
				<p><strong>Table 10.2: Document success criterion: Reflow</strong></p>
				<p>Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:</p>
				<ul>
					<li>Vertical scrolling content at a width equivalent to 320 CSS pixels;</li>
					<li>Horizontal scrolling content at a height equivalent to 256 CSS pixels.</li>
				</ul>
				<p>Except for parts of the content which require two-dimensional layout for usage or meaning.</p>
				<p>NOTE 1: 320 CSS pixels is equivalent to a starting viewport width of 1 280 CSS pixels wide at 400% zoom. For documents which are designed to scroll horizontally (e.g. with vertical text), the 256 CSS pixels is equivalent to a starting viewport height of 1 024px at 400% zoom.</p>
				<p>NOTE 2: Examples of content which require two-dimensional layout are images, maps, diagrams, video, games, presentations, data tables, and interfaces where it is necessary to keep toolbars in view while manipulating content.</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#reflow">WCAG 2.1 Success Criterion 1.4.10 Reflow</a> replacing the original WCAG 2.1 notes with notes 1 and 2, above.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.10 Reflow</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.2.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.11"><strong>10.1.4.11 Non-text contrast</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy <a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.11 Non-text contrast</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document that does not have a fixed size content layout area that is essential to the information being conveyed.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.12"><strong>10.1.4.12 Text spacing</strong></p>
				<p>Where ICT is a non-web document that does not have a fixed size content layout area that is essential to the information being conveyed, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#text-spacing">WCAG 2.1 Success Criterion 1.4.12 Text spacing</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.12 Text spacing</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#text-spacing">WCAG 2.1 Success Criterion 1.4.12 Text spacing</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.4.12 Text spacing.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.1.4.13"><strong>10.1.4.13 Content on hover or focus</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">WCAG 2.1 Success Criterion 1.4.13 Content on Hover or Focus</a>.</p>
			</td>
			<td>
				<p><strong>C.10.1.4.13 Content on hover or focus</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">WCAG 2.1 Success Criterion 1.4.13 Content on Hover or Focus</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 1.4.13 Content on Hover or Focus.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2"><strong>10.2 Operable</strong></p>
			</td>
			<td>
				<p><strong>C.10.2 Operable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.1"><strong>10.2.1 Keyboard accessible</strong></p>
			</td>
			<td>
				<p><strong>C.10.2.1 Keyboard accessible</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.1.1"><strong>10.2.1.1 Keyboard</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#keyboard">WCAG 2.1 Success Criterion 2.1.1 Keyboard</a>.</p>
			</td>
			<td>
				<p><strong>C.10.2.1.1 Keyboard</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#keyboard">WCAG 2.1 Success Criterion 2.1.1 Keyboard</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 2.1.1 Keyboard.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.1.2"><strong>10.2.1.2 No keyboard trap</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.3.</p>
				<p><strong>Table 10.3: Document success criterion: No keyboard trap</strong></p>
				<p>If keyboard focus can be moved to a component of the document using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.</p>
				<p>NOTE 1: Since any part of a document that does not meet this success criterion can interfere with a user's ability to use the whole document, it is necessary for all content in the document (whether or not it is used to meet other success criteria) to meet this success criterion.</p>
				<p>NOTE 2: Standard exit methods may vary by platform. For example, on many desktop platforms, the Escape key is a standard method for exiting.</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#no-keyboard-trap">WCAG 2.1 Success Criterion 2.1.2 No Keyboard Trap</a> replacing "page" and "Web page" with "document", removing "See Conformance Requirement 5: Non-Interference" and with the addition of note 2 above and with note 1 above re-drafted to avoid the use of the word "must".</p>
			</td>
			<td>
				<p><strong>C.10.2.1.2 No keyboard trap</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.3.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.1.3"><strong>10.2.1.3 Void</strong></p>
			</td>
			<td>
				<p><strong>C.10.2.1.3 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.1.4"><strong>10.2.1.4 Character key shortcuts</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#character-key-shortcuts">WCAG 2.1 Success Criterion 2.1.4 Character Key Shortcuts</a>.</p>
			</td>
			<td>
				<p><strong>C.10.2.1.4 Character key shortcuts</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#character-key-shortcuts">WCAG 2.1 Success Criterion 2.1.4 Character Key Shortcuts</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 2.1.4 Character Key Shortcuts.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.2"><strong>10.2.2 Enough time</strong></p>
			</td>
			<td>
				<p><strong>C.10.2.2 Enough time</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.2.1"><strong>10.2.2.1 Timing adjustable</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.4.</p>
				<p><strong>Table 10.4: Document success criterion: Timing adjustable</strong></p>
				<p>For each time limit that is set by the document, at least one of the following is true:</p>
				<ul>
					<li><strong>Turn off:</strong>The user is allowed to turn off the time limit before encountering it; or</li>
					<li><strong>Adjust:</strong> The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or</li>
					<li><strong>Extend:</strong> The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or</li>
					<li><strong>Real-time Exception:</strong> The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or</li>
					<li><strong>Essential Exception:</strong> The time limit is essential and extending it would invalidate the activity; or <strong>20 Hour Exception:</strong> The time limit is longer than 20 hours.</li>
				</ul>
				<p>NOTE 1: This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with <a href="http://www.w3.org/TR/WCAG21/#on-focus">WCAG 2.1 Success Criterion 3.2.1</a>, which puts limits on changes of content or context as a result of user action.</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#timing-adjustable">WCAG 2.1 Success Criterion 2.2.1 Timing Adjustable</a> replacing "the content" with "documents" and with the words "WCAG 2.1" added before the word "Success Criterion" in note 1 above.</p>
			</td>
			<td>
				<p><strong>C.10.2.2.1 Timing adjustable</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.4.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.2.2"><strong>10.2.2.2 Pause, stop, hide</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.5.</p>
				<p><strong>Table 10.5: Document success criterion: Pause, stop, hide</strong></p>
				<p>For moving, blinking, scrolling, or auto-updating information, all of the following are true:</p>
				<ul>
					<li><strong>Moving, blinking, scrolling:</strong> For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and</li>
					<li><strong>Auto-updating:</strong> For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.</li>
				</ul>
				<p>NOTE 1: For requirements related to flickering or flashing content, refer to <a href="https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions">WCAG 2.1 Guideline 2.3</a>.</p>
				<p>NOTE 2: Since any part of a document that does not meet this success criterion can interfere with a user's ability to use the whole document, it is necessary for all content in the document (whether it is used to meet other success criteria or not) to meet this success criterion.</p>
				<p>NOTE 3: Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.</p>
				<p>NOTE 4: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.</p>
				<p>NOTE 5: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#pause-stop-hide">WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide</a> replacing "page" and "Web page" with "document", removing "See Conformance Requirement 5: Non-Interference" in note 2 of the success criterion, with the words "WCAG 2.1" added before the word "Guideline" in note 1 above and with note 2 above re-drafted to avoid the use of the word "must".</p>
			</td>
			<td>
				<p><strong>C.10.2.2.2 Pause, stop, hide</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.5.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 2.2.2 Pause, stop, hide.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.3"><strong>10.2.3 Seizures and physical reactions</strong></p>
			</td>
			<td>
				<p><strong>C.10.2.3 Seizures and physical reactions</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.3.1"><strong>10.2.3.1 Three flashes or below threshold</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.6.</p>
				<p><strong>Table 10.6: Document success criterion: Three flashes or below threshold</strong></p>
				<p>Documents do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.</p>
				<p>NOTE 1: Since any part of a document that does not meet this success criterion can interfere with a user's ability to use the whole document, it is necessary for all content in the document (whether it is used to meet other success criteria or not) to meet this success criterion.</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">WCAG 2.1 Success Criterion 2.3.1 Three Flashes or Below Threshold</a> replacing "Web pages" with "documents", "the whole page" with "the whole document", "the Web page" with "the document" and removing "See Conformance Requirement 5: Non-Interference" and with note 1 above re-drafted to avoid the use of the word "must".</p>
			</td>
			<td>
				<p><strong>C.10.2.3.1 Three flashes or below threshold</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.6.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.4"><strong>10.2.4 Navigable</strong></p>
			</td>
			<td>
				<p><strong>C.10.2.4 Navigable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.4.1"><strong>10.2.4.1 Void</strong></p>
				<p>NOTE 1: The related web page requirement "Bypass blocks" does not apply to single documents, but to a specific definition of "sets of documents" that are rare.</p>
				<p>NOTE 2: Although not a requirement, the ability to bypass blocks of content that are repeated within documents is generally considered best practice and addresses user needs.</p>
			</td>
			<td>
				<p><strong>C.10.2.4.1 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.4.2"><strong>10.2.4.2 Document titled</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.7.</p>
				<p><strong>Table 10.7: Document success criterion: Document titled</strong></p>
				<p>Documents have titles that describe topic or purpose.</p>
				<p>NOTE 1: The name of a document (e.g. document, media file) is a sufficient title if it describes the topic or purpose.</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#page-titled">WCAG 2.1 Success Criterion 2.4.2 Page Titled</a> replacing "Web pages" with "documents" and with the addition of note 1 above.</p>
			</td>
			<td>
				<p><strong>C.10.2.4.2 Document titled</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.7.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.4.3"><strong>10.2.4.3 Focus Order</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.8.</p>
				<p><strong>Table 10.8: Document success criterion: Focus order</strong></p>
				<p>If a document can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.</p>
				<p>NOTE: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#focus-order">WCAG 2.1 Success Criterion 2.4.3 Focus Order</a> replacing "Web page" with "document".</p>
			</td>
			<td>
				<p><strong>C.10.2.4.3 Focus Order</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.8.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.4.4"><strong>10.2.4.4 Link purpose (in context)</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#link-purpose-in-context">WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context)</a>.</p>
			</td>
			<td>
				<p><strong>C.10.2.4.4 Link purpose (in context)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#link-purpose-in-context">WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.4.5"><strong>10.2.4.5 Void</strong></p>
				<p>NOTE: The related web page requirement "Multiple ways" does not apply to single documents, but to a specific definition of "sets of documents" that are rare.</p>
			</td>
			<td>
				<p><strong>C.10.2.4.5 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.4.6"><strong>10.2.4.6 Headings and labels</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#headings-and-labels">WCAG 2.1 Success Criterion 2.4.6 Headings and Labels</a>.</p>
			</td>
			<td>
				<p><strong>C.10.2.4.6 Headings and labels</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#headings-and-labels">WCAG 2.1 Success Criterion 2.4.6 Headings and Labels</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 2.4.6 Headings and Labels.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.4.7"><strong>10.2.4.7 Focus visible</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#focus-visible">WCAG 2.1 Success Criterion 2.4.7 Focus Visible.</a></p>
			</td>
			<td>
				<p><strong>C.10.2.4.7 Focus visible</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#focus-visible">WCAG 2.1 Success Criterion 2.4.7 Focus Visible</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 2.4.7 Focus Visible.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.5"><strong>10.2.5 Input modalities</strong></p>
			</td>
			<td>
				<p><strong>C.10.2.5 Input modalities</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.5.1"><strong>10.2.5.1 Pointer gestures</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.9.</p>
				<p><strong>Table 10.9: Document success criterion: Pointer gestures</strong></p>
				<p>All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.</p>
				<p>NOTE 1: This requirement applies to documents that interpret pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#pointer-gestures">WCAG 2.1 Success Criterion 2.5.1 Pointer Gestures</a> replacing the original WCAG 2.1 note with note 1 above.</p>
			</td>
			<td>
				<p><strong>C.10.2.5.1 Pointer gestures</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.9.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.5.2"><strong>10.2.5.2 Pointer cancellation</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.10.</p>
				<p><strong>Table 10.10: Document success criterion: Pointer cancellation</strong></p>
				<p>For functionality that can be operated using a single pointer, at least one of the following is true:</p>
				<ul>
					<li>No Down-Event: The down-event of the pointer is not used to execute any part of the function;</li>
					<li>Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;</li>
					<li>Up Reversal: The up-event reverses any outcome of the preceding down-event;</li>
					<li>Essential: Completing the function on the down-event is essential.</li>
				</ul>
				<p>NOTE 1: Functions that emulate a keyboard or numeric keypad key press are considered essential.</p>
				<p>NOTE 2: This requirement applies to a document that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#pointer-cancellation">WCAG 2.1 Success Criterion 2.5.2 Pointer Cancellation</a> replacing the original WCAG 2.1 note with notes 1 and 2 above.</p>
			</td>
			<td>
				<p><strong>C.10.2.5.2 Pointer cancellation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the success criterion in Table 10.10.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.5.3"><strong>10.2.5.3 Label in name</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#label-in-name">WCAG 2.1 Success Criterion 2.5.3 Label in Name</a>.</p>
			</td>
			<td>
				<p><strong>C.10.2.5.3 Label in name</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#label-in-name">WCAG 2.1 Success Criterion 2.5.3 Label in Name</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 2.5.3 Label in Name.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.2.5.4"><strong>10.2.5.4 Motion actuation</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#motion-actuation">WCAG 2.1 Success Criterion 2.5.4 Motion Actuation</a>.</p>
			</td>
			<td>
				<p><strong>C.10.2.5.4 Motion actuation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#motion-actuation">WCAG 2.1 Success Criterion 2.5.4 Motion Actuation</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 2.5.4 Motion Actuation.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3"><strong>10.3 Understandable</strong></p>
			</td>
			<td>
				<p><strong>C.10.3 Understandable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.1"><strong>10.3.1 Readable</strong></p>
			</td>
			<td>
				<p><strong>C.10.3.1 Readable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.1.1"><strong>10.3.1.1 Language of document</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.11.</p>
				<p><strong>Table 10.11: Document success criterion: Language of page</strong></p>
				<p>The default human language of each document can be programmatically determined.</p>
				<p>NOTE: This success criterion is identical to the <a href="https://www.w3.org/TR/WCAG21/#language-of-page">WCAG 2.1 Success Criterion 3.1.1 Language of Page</a> replacing "web page" with "document".</p>
			</td>
			<td>
				<p><strong>C.10.3.1.1 Language of document</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.11.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.1.2"><strong>10.3.1.2 Language of parts</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.12.</p>
				<p><strong>Table 10.12: Document success criterion: Language of parts</strong></p>
				<p>The human language of each passage or phrase in the document can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.</p>
				<p>NOTE 1: There are some document technologies where there is no assistive technology supported method for marking the language for the different passages or phrases in the document, and it would not be possible to meet this success criterion with those technologies.</p>
				<p>NOTE 2: Inheritance is one common method. For example a document provides the language that it is using and it can be assumed that all of the text or user interface elements within that document will be using the same language unless it is indicated.</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#language-of-parts">WCAG 2.1 Success Criterion 3.1.2 Language of Parts</a> replacing "content" with "document" and with the addition of notes 1 and 2 above.</p>
			</td>
			<td>
				<p><strong>C.10.3.1.2 Language of parts</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.12.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.2"><strong>10.3.2 Predictable</strong></p>
			</td>
			<td>
				<p><strong>C.10.3.2 Predictable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.2.1"><strong>10.3.2.1 On focus</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#on-focus">WCAG 2.1 Success Criterion 3.2.1 On Focus</a>.</p>
				<p>NOTE: Some compound documents and their user agents are designed to provide significantly different viewing and editing functionality depending upon what portion of the compound document is being interacted with (e.g. a presentation that contains an embedded spreadsheet, where the menus and toolbars of the user agent change depending upon whether the user is interacting with the presentation content, or the embedded spreadsheet content). If the user uses a mechanism other than putting focus on that portion of the compound document with which they mean to interact (e.g. by a menu choice or special keyboard gesture), any resulting change of context would not be subject to this success criterion because it was not caused by a change of focus.</p>
			</td>
			<td>
				<p><strong>C.10.3.2.1 On focus</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#on-focus">WCAG 2.1 Success Criterion 3.2.1 On Focus</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 3.2.1 On Focus.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.2.2"><strong>10.3.2.2 On input</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#on-input">WCAG 2.1 Success Criterion 3.2.2 On Input</a>.</p>
			</td>
			<td>
				<p><strong>C.10.3.2.2 On input</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#on-input">WCAG 2.1 Success Criterion 3.2.2 On Input</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 3.2.2 On Input.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.2.3"><strong>10.3.2.3 Void</strong></p>
				<p>NOTE: The related web page requirement "Consistent navigation" does not apply to single documents, but to a specific definition of "sets of documents" that are rare.</p>
			</td>
			<td>
				<p><strong>C.10.3.2.3 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.2.4"><strong>10.3.2.4 Void</strong></p>
				<p>NOTE: The related web page requirement "Consistent identification" does not apply to single documents, but to a specific definition of "sets of documents" that are rare.</p>
			</td>
			<td>
				<p><strong>C.10.3.2.4 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.3"><strong>10.3.3 Input assistance</strong></p>
			</td>
			<td>
				<p><strong>C.10.3.3 Input assistance</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.3.1"><strong>10.3.3.1 Error identification</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#error-identification">WCAG 2.1 Success Criterion 3.3.1 Error Identification</a>.</p>
			</td>
			<td>
				<p><strong>C.10.3.3.1 Error identification</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#error-identification">WCAG 2.1 Success Criterion 3.3.1 Error Identification</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 3.3.1 Error Identification.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.3.2"><strong>10.3.3.2 Labels or instructions</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#labels-or-instructions">WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions</a>.</p>
			</td>
			<td>
				<p><strong>C.10.3.3.2 Labels or instructions</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#labels-or-instructions">WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.3.3"><strong>10.3.3.3 Error suggestion</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#error-suggestion">WCAG 2.1 Success Criterion 3.3.3 Error Suggestion</a>.</p>
			</td>
			<td>
				<p><strong>C.10.3.3.3 Error suggestion</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail <a href="http://www.w3.org/TR/WCAG21/#error-suggestion">WCAG 2.1 Success Criterion 3.3.3 Error Suggestion</a>.</li>
				</ol>
				<p>Result:</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 3.3.3 Error Suggestion</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.3.3.4"><strong>10.3.3.4 Error prevention (legal, financial, data)</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.13.</p>
				<p><strong>Table 10.13: Document success criterion: Error prevention (legal, financial, data)</strong></p>
				<p>For documents that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:</p>
				<ol>
					<li>Reversible: Submissions are reversible.</li>
					<li>Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</li>
					<li>Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</li>
				</ol>
				<p>NOTE: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">WCAG 2.1 Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data)</a> replacing "web pages" with "documents".</p>
			</td>
			<td>
				<p><strong>C.10.3.3.4 Error prevention (legal, financial, data)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.13.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.4"><strong>10.4 Robust</strong></p>
			</td>
			<td>
				<p><strong>C.10.4 Robust</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.4.1"><strong>10.4.1 Compatible</strong></p>
			</td>
			<td>
				<p><strong>C.10.4.1 Compatible</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.4.1.1"><strong>10.4.1.1 Parsing</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.14.</p>
				<p><strong>Table 10.14: Document success criterion: Parsing</strong></p>
				<p>For documents that use markup languages, in such a way that the markup is separately exposed and available to assistive technologies and accessibility features of software or to a user-selectable user agent, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.</p>
				<p>NOTE 1: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.</p>
				<p>NOTE 2: Markup is not always available to assistive technology or to user selectable user agents such as browsers. In such cases, conformance to this  [requirement] would have no impact on accessibility as it can for web content where it is exposed.</p>
				<p>NOTE 3: Examples of markup that is separately exposed and available to assistive technologies and to user agents include but are not limited to: documents encoded in HTML, ODF, and OOXML. In these examples, the markup can be parsed entirely in two ways: (a) by assistive technologies which may directly open the document, (b) by assistive technologies using DOM APIs of user agents for these document formats.</p>
				<p>NOTE 4: This success criterion is identical to <a href="http://www.w3.org/TR/WCAG21/#parsing">the WCAG 2.1 Success Criterion 4.1.1 Parsing</a> replacing "In content implemented using markup languages" with "For documents that use markup languages, in such a way that the markup is separately exposed and available to assistive technologies and accessibility features of software or to a user-selectable user agent" with the addition of notes 2 and 3 above.</p>
			</td>
			<td>
				<p><strong>C.10.4.1.1 Parsing</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.14.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.4.1.2"><strong>10.4.1.2 Name, role, value</strong></p>
				<p>Where ICT is a non-web document, it shall satisfy the success criterion in Table 10.15.</p>
				<p><strong>Table 10.15: Document success criterion: Name, role, value</strong></p>
				<p>For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.</p>
				<p>NOTE 1: This success criterion is primarily for software developers who develop or use custom user interface components. Standard user interface components on most accessibility-supported platforms already meet this success criterion when used according to specification.</p>
				<p>NOTE 2: For document formats that support interoperability with assistive technology, standard user interface components often meet this success criterion when used according to the general design and accessibility guidance for the document format.</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#name-role-value">WCAG 2.1 Success Criterion 4.1.2 Name, Role, Value</a> replacing the original WCAG 2.1 note with: "This success criterion is primarily for software developers who develop or use custom user interface components. For example, standard user interface components on most accessibility-supported platforms already meet this success criterion when used according to specification." and with the addition of note 2 above.</p>
			</td>
			<td>
				<p><strong>C.10.4.1.2 Name, role, value</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the document does not fail the Success Criterion in Table 10.15.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.4.1.3"><strong>10.4.1.3 Status messages</strong></p>
				<p>Where ICT is a non-web document, it shall <a href="https://www.w3.org/TR/WCAG21/#status-messages">satisfy WCAG 2.1 Success Criterion 4.1.3 Status Messages</a>.</p>
			</td>
			<td>
				<p><strong>C.10.4.1.3 Status messages</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is a non-web document.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="https://www.w3.org/TR/WCAG21/#status-messages">WCAG 2.1 Success Criterion 4.1.3 Status Messages</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web document does not contain content relevant to WCAG 2.1 Success Criterion 4.1.3 Status Messages.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.5"><strong>10.5 Caption positioning</strong></p>
				<p>Where ICT is a non-web document that contains synchronized media with captions, the captions should not obscure relevant information in the synchronized media.</p>
			</td>
			<td>
				<p><strong>C.10.5 Caption positioning</strong></p>
				<p>Clause 10.5 is advisory only and contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="10.6"><strong>10.6 Audio description timing</strong></p>
				<p>Where ICT is a non-web document that contains synchronized media with audio description, the audio description should not interfere with relevant audio information in the synchronized media.</p>
			</td>
			<td>
				<p><strong>C.10.6 Audio description timing</strong></p>
				<p>Clause 10.6 is advisory only and contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11"><strong>11 Software</strong></p>
			</td>
			<td>
				<p><strong>C.11 Software</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.0"><strong>11.0 General (informative)</strong></p>
				<p>This clause provides requirements for:</p>
				<ul>
					<li>platform software;</li>
					<li>software that provides a user interface including content that is in the software;</li>
					<li>authoring tools;</li>
					<li>software that operates as assistive technology;</li>
					<li>mobile applications.</li>
				</ul>
				<p>NOTE 1: User agents are examples of software that provide a user interface. They retrieve, render and facilitate end user interaction with authored content. User agents play a necessary role in the accessibility of authored content rendered in the user interface. UAAG 2.0 [i33] provides additional advice for those who are creating user agents and want to increase functionality when rendering authored content in an accessible way.</p>
				<p>NOTE 2: The requirements for Web content, including software that is Web content, can be found in clause 9.</p>
				<p>NOTE 3: The requirements for documents, that may be presented by user agents, can be found in clause 10.</p>
				<p>NOTE 4: Although the accessibility of command line interfaces is not dealt with in the present document, accessibility may be achieved by context specific requirements, some of which may be found in clauses 5 or 11.</p>
				<p>Requirements in clauses 11.1 to 11.5 apply to software:</p>
				<ul>
					<li>that is not a web page;</li>
					<li>not embedded in web pages nor used in the rendering or functioning of the page.</li>
				</ul>
				<p>Clause 9 provides requirements for software that is in web pages or that is embedded in web pages and that is used in the rendering or that is intended to be rendered together with the web page in which it is embedded.</p>
				<p>Some requirements in clauses 11.1 to 11.5 have different versions for open or closed functionality. In those cases, the corresponding clause will be divided into two subclauses.</p>
				<p>The success criteria set out in clauses 11.1 to 11.5 are intended to harmonize with the W3C Working Group Note [i.26] produced by the W3C's <a href="http://www.w3.org/WAI/GL/WCAG2ICT-TF/">WCAG2ICT Task Force</a>.</p>
				<p>NOTE 5: Software that provides a user interface includes its own content. Some examples of content in software include: the controls and text displayed in a menu bar of a graphical user interface application, images that appear in a toolbar, prompts spoken in an auditory user interface, other user interaction controls, and other text, graphics or material that is not loaded from outside the software.</p>
				<p>NOTE 6: "Void" clauses have been inserted in order to maintain alignment of the numbering in clauses 9, 10 and 11.</p>
			</td>
			<td>
				<p><strong>C.11.0 General (informative)</strong></p>
				<p> Clause 11.0 is advisory only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1"><strong>11.1 Perceivable</strong></p>
			</td>
			<td>
				<p><strong>C.11.1 Perceivable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.1"><strong>11.1.1 Text alternatives</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.1 Text alternatives</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.1.1"><strong>11.1.1.1 Non-text content</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.1.1 Non-text content</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.1.1.1"><strong>11.1.1.1.1 Non-text content (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to assistive technologies for screen reading, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#non-text-content">WCAG 2.1 Success Criterion 1.1.1 Non-text Content</a>.</p>
				<p>NOTE: CAPTCHAs do not currently appear outside of the Web. However, if they do appear, this guidance is accurate.</p>
			</td>
			<td>
				<p><strong>C.11.1.1.1.1 Non-text content (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#non-text-content">WCAG 2.1 Success Criterion 1.1.1 Non-text Content</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.1.1.2"><strong>11.1.1.1.2 Non-text content (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading, it shall meet requirement 5.1.3.6 (Speech output for non-text content).</p>
			</td>
			<td>
				<p><strong>C.11.1.1.1.2 Non-text content (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to assistive technologies for screen reading.</li>
					<li>Non-text content is presented to users via speech output.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that speech output is provided as an alternative for non-text content.</li>
					<li>Check that the non-text content is not pure decoration.</li>
					<li>Check that the non-text content is not used only for visual formatting.</li>
					<li>Check that the speech output follows the guidance for "text alternative" described in <a href="http://www.w3.org/TR/WCAG21/#non-text-content">WCAG 2.1 Success Criterion 1.1.1 Non-text Content</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check (1 and 2 and 3 and 4 are true) or (1 and 2 are false) or (1 and 3 are false)</p>
				<p>Fail: Checks (1 true and 2 false) or (1 true and 3 false) or (1 and 2 and 3 are true and 4 is false)</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2"><strong>11.1.2 Time-based media</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.2 Time-based media</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.1"><strong>11.1.2.1 Audio-only and video-only (pre-recorded)</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.2.1 Audio-only and video-only (pre-recorded)</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.1.1"><strong>11.1.2.1.1 Audio-only and video-only (pre-recorded - open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to assistive technologies for screen reading and where pre-recorded auditory information is not needed to enable the use of closed functions of ICT, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">WCAG 2.1 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded)</a>.</p>
				<p>NOTE: The alternative can be provided directly in the software - or provided in an alternate version that meets the success criterion.</p>
			</td>
			<td>
				<p><strong>C.11.1.2.1.1 Audio-only and video-only (pre-recorded - open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
					<li>Pre-recorded auditory information is not needed to enable the use of closed functions of ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">WCAG 2.1 Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.1.2"><strong>11.1.2.1.2 Audio-only and video-only (pre-recorded - closed functionality)</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.2.1.2 Audio-only and video-only (pre-recorded - closed functionality)</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.1.2.1"><strong>11.1.2.1.2.1 Pre-recorded audio-only (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading and where pre-recorded auditory information is needed to enable the use of closed functions of ICT, the functionality of software that provides a user interface shall meet requirement 5.1.5 (Visual output for auditory information).</p>
			</td>
			<td>
				<p><strong>C.11.1.2.1.2.1 Pre-recorded audio-only (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to assistive technologies for screen reading.</li>
					<li>Pre-recorded auditory information is needed to enable the use of closed functions of ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the visual information is equivalent to the pre-recorded auditory output.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.1.2.2"><strong>11.1.2.1.2.2 Pre-recorded video-only (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading, it shall meet requirement 5.1.3.7 (Speech output for video information).</p>
			</td>
			<td>
				<p><strong>C.11.1.2.1.2.2 Pre-recorded video-only (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to assistive technologies for screen reading.</li>
					<li>Pre-recorded video content is needed to enable the use of closed functions of ICT.</li>
					<li>Speech output is provided as non-visual access to non-text content displayed on closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the speech output presents equivalent information for the pre-recorded video content.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2, 3 or 4 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.2"><strong>11.1.2.2 Captions (pre-recorded)</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#captions-prerecorded">WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded)</a>.</p>
				<p>NOTE: The WCAG 2.1 definition of "captions" notes that "in some countries, captions are called subtitles". They are also sometimes referred to as "subtitles for the hearing impaired". Per the definition in WCAG 2.1, to meet this success criterion, whether called captions or subtitles, they would have to provide "synchronized visual and / or text alternative for both speech and non-speech audio information needed to understand the media content" where non-speech information includes "sound effects, music, laughter, speaker identification and location".</p>
			</td>
			<td>
				<p><strong>C.11.1.2.2 Captions (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#captions-prerecorded">WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.2.2 Captions (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.3"><strong>11.1.2.3 Audio description or media alternative (pre-recorded)</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.2.3 Audio description or media alternative (pre-recorded)</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.3.1"><strong>11.1.2.3.1 Audio description or media alternative (pre-recorded - open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to assistive technologies for screen reading, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)</a>.</p>
				<p>NOTE 1: The WCAG 2.1 definition of "audio description" says that "audio description" is "also called 'video description' and 'descriptive narration'".</p>
				<p>NOTE 2: Secondary or alternate audio tracks are commonly used for this purpose.</p>
			</td>
			<td>
				<p><strong>C.11.1.2.3.1 Audio description or media alternative (pre-recorded - open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.3.2"><strong>11.1.2.3.2 Audio description or media alternative (pre-recorded - closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading, it shall meet requirement 5.1.3.7 (Speech output for video information).</p>
			</td>
			<td>
				<p><strong>C.11.1.2.3.2 Audio description or media alternative (pre-recorded - closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to assistive technologies for screen reading.</li>
					<li>Speech output is provided as non-visual access to non-text content displayed on closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the speech output presents equivalent information for the pre-recorded video content.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2, or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.4"><strong>11.1.2.4 Captions (live)</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#captions-live">WCAG 2.1 Success Criterion 1.2.4 Captions (Live)</a>.</p>
				<p>NOTE: The WCAG 2.1 definition of "captions" notes that "in some countries, captions are called subtitles". They are also sometimes referred to as "subtitles for the hearing impaired". Per the definition in WCAG 2.1, to meet this success criterion, whether called captions or subtitles, they would have to provide "synchronized visual and / or text alternative for both speech and non-speech audio information needed to understand the media content" where non-speech information includes "sound effects, music, laughter, speaker identification and location".</p>
			</td>
			<td>
				<p><strong>C.11.1.2.4 Captions (live)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#captions-live">WCAG 2.1 Success Criterion 1.2.4 Captions (Live)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.2.4 Captions (Live).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.2.5"><strong>11.1.2.5 Audio description (pre-recorded)</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#audio-description-prerecorded">WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded)</a>.</p>
				<p>NOTE 1: The WCAG 2.1 definition of "audio description" says that audio description is "Also called 'video description' and 'descriptive narration'".</p>
				<p>NOTE 2: Secondary or alternate audio tracks are commonly used for this purpose.</p>
			</td>
			<td>
				<p><strong>C.11.1.2.5 Audio description (pre-recorded)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#audio-description-prerecorded">WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.2.5 Audio Description (Prerecorded).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3"><strong>11.1.3 Adaptable</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.3 Adaptable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.1"><strong>11.1.3.1 Info and relationships</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.3.1 Info and relationships</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.1.1"><strong>11.1.3.1.1 Info and relationships (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to assistive technologies for screen reading, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#info-and-relationships">WCAG 2.1 Success Criterion 1.3.1 Info and Relationships</a>.</p>
				<p>NOTE: In software, programmatic determinability is best achieved through the use of accessibility services provided by platform software to enable interoperability between software and assistive technologies and accessibility features of software. (see clause 11.5 Interoperability with assistive technology).</p>
			</td>
			<td>
				<p><strong>C.11.1.3.1.1 Info and relationships (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#info-and-relationships">WCAG 2.1 Success Criterion 1.3.1 Info and Relationships</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.1.2"><strong>11.1.3.1.2 Info and relationships (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading and where information is displayed on the screen, the ICT should provide auditory information that allows the user to correlate the audio with the information displayed on the screen.</p>
				<p>NOTE 1: Many people who are legally blind still have visual ability, and use aspects of the visual display even if it cannot be fully comprehended. An audio alternative that is both complete and complementary includes all visual information such as focus or highlighting, so that the audio can be correlated with information that is visible on the screen at any point in time.</p>
				<p>NOTE 2: Examples of auditory information that allows the user to correlate the audio with the information displayed on the screen include structure and relationships conveyed through presentation.</p>
			</td>
			<td>
				<p><strong>C.11.1.3.1.2 Info and relationships (closed functionality)</strong></p>
				<p>Clause 11.1.3.1.2 is advisory only and contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.2"><strong>11.1.3.2 Meaningful sequence</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.3.2 Meaningful sequence</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.2.1"><strong>11.1.3.2.1 Meaningful sequence (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to assistive technologies for screen reading, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#meaningful-sequence">WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.3.2.1 Meaningful sequence (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#meaningful-sequence">WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.2.2"><strong>11.1.3.2.2 Meaningful sequence (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading and where information is displayed on the screen, the ICT should provide auditory information that allows the user to correlate the audio with the information displayed on the screen.</p>
				<p>NOTE 1: Many people who are legally blind still have visual ability, and use aspects of the visual display even if it cannot be fully comprehended. An audio alternative that is both complete and complementary includes all visual information such as focus or highlighting, so that the audio can be correlated with information that is visible on the screen at any point in time.</p>
				<p>NOTE 2: Examples of auditory information that allows the user to correlate the audio with the information displayed on the screen include structure and relationships conveyed through presentation.</p>
			</td>
			<td>
				<p><strong>C.11.1.3.2.2 Meaningful sequence (closed functionality)</strong></p>
				<p>Clause 11.1.3.2.2 is advisory only and contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.3"><strong>11.1.3.3 Sensory characteristics</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#sensory-characteristics">WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.3.3 Sensory characteristics</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#sensory-characteristics">WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.3.3 Sensory Characteristics.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.4"><strong>11.1.3.4 Orientation</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#orientation">WCAG 2.1 Success Criterion 1.3.4 Orientation</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.3.4 Orientation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#orientation">WCAG 2.1 Success Criterion 1.3.4 Orientation</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.3.4 Orientation.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.5"><strong>11.1.3.5 Identify input purpose</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.3.5 Identify input purpose</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.5.1"><strong>11.1.3.5.1 Identify input purpose (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interfaceand supports access to assistive technologies for screen reading, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#identify-input-purpose">WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.3.5.1 Identify input purpose (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#identify-input-purpose">WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.3.5 Identify Input Purpose.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.3.5.2"><strong>11.1.3.5.2 Identify input purpose (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and is closed to assistive technologies, in at least one mode of operation the ICT shall present to the user, in an audio form, the purpose of each input field collecting information about the user when the input field serves a purpose identified in the <a href="https://www.w3.org/TR/WCAG21/#input-purposes">WCAG 2.1 Input Purposes for User Interface Components</a> section.</p>
			</td>
			<td>
				<p><strong>C.11.1.3.5.2 Identify input purpose (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software does not provide support to assistive technologies for screen reading.</li>
					<li>Auditory output is provided as non-visual access to closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the auditory output is delivered by a mechanism included in or provided with the ICT.</li>
					<li>Check that the auditory output is delivered by a personal headset that can be connected through a 3,5 mm audio jack or an industry standard connection without requiring the use of vision.</li>
					<li>Check that the auditory output comprises of purposes from the <a href="http://www.w3.org/TR/WCAG21/#input-purposes">Input Purposes for User Interface Components</a> section.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks (1 or 2) is true and 3 is true</p>
				<p>Fail: Checks (1 and 2) are false or 3 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4"><strong>11.1.4 Distinguishable</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.4 Distinguishable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.1"><strong>11.1.4.1 Use of colour</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#use-of-color">WCAG 2.1 Success Criterion 1.4.1 Use of Color</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.1 Use of colour</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#use-of-color">WCAG 2.1 Success Criterion 1.4.1 Use of Color</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.4.1 Use of Color.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.2"><strong>11.1.4.2 Audio control</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.1.</p>
				<p><strong>Table 11.1: Software success criterion: Audio control</strong></p>
				<p>If any audio in a software plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.</p>
				<p>NOTE 1: Since any part of a software that does not meet this success criterion can interfere with a user's ability to use the whole software, all content in the software (whether or not it is used to meet other success criteria) shall meet this success criterion.</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#audio-control">WCAG 2.1 Success Criterion 1.4.2 Audio Control</a> replacing "on a Web page" with "in a software", "any content" with "any part of a software", "whole page" with "whole software", "on the Web page" with "in the software", removing "See Conformance Requirement 5: Non-Interference" and adding note 1.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.2 Audio control</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.1.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.3"><strong>11.1.4.3 Contrast (minimum)</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#contrast-minimum">WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum)</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.3 Contrast (minimum)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#contrast-minimum">WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.4.3 Contrast (Minimum).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.4"><strong>11.1.4.4 Resize text</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.4.4 Resize text</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.4.1"><strong>11.1.4.4.1 Resize text (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to enlargement features of platform or assistive technology, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#resize-text">WCAG 2.1 Success Criterion 1.4.4 Resize Text</a>.</p>
				<p>NOTE 1: Content for which there are software players, viewers or editors with a 200 percent zoom feature would automatically meet this success criterion when used with such players, unless the content will not work with zoom.</p>
				<p>NOTE 2: This success criterion is about the ability to allow users to enlarge the text on screen at least up to 200 % without needing to use assistive technologies. This means that the application provides some means for enlarging the text 200 % (zoom or otherwise) without loss of content or functionality or that the application works with the platform features that meet this requirement.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.4.1 Resize text (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to enlargement features of platform or assistive technology.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#resize-text">WCAG 2.1 Success Criterion 1.4.4 Resize text</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.4.4 Resize text.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.4.2"><strong>11.1.4.4.2 Resize text (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is not able to access the enlargement features of platform or assistive technology, it shall meet requirement 5.1.4 (Functionality closed to text enlargement).</p>
				<p>NOTE: Because the text rendering support in a closed environment may be more limited than the support found in user agents for the Web, meeting the present clause in a closed environment may place a much heavier burden on the content author.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.4.2 Resize text (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and measurement</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to enlargement features of platform or assistive technology.</li>
					<li>A viewing distance is specified by the supplier.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Measure the height of a capital letter H.</li>
					<li>Check that it subtends an angle of at least 0,7 degrees at the specified viewing distance.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 2 is true</p>
				<p>Fail: Check 2 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.5"><strong>11.1.4.5 Images of text</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.4.5 Images of text</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.5.1"><strong>11.1.4.5.1 Images of text (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to assistive technologies for screen reading, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#images-of-text">WCAG 2.1 Success Criterion 1.4.5 Images of Text</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.5.1 Images of text (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#images-of-text">WCAG 2.1 Success Criterion 1.4.5 Images of Text</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.4.5 Images of Text.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.5.2"><strong>11.1.4.5.2 Images of text (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading, it shall meet requirement 5.1.3.6 (speech output for non-text content).</p>
			</td>
			<td>
				<p><strong>C.11.1.4.5.2 Images of text (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to assistive technologies for screen reading.</li>
					<li>Non-text content is presented to users via speech output.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that speech output is provided as an alternative for non-text content.</li>
					<li>Check that the non-text content is not pure decoration.</li>
					<li>Check that the non-text content is not used only for visual formatting.</li>
					<li>Check that the speech output follows the guidance for "text alternative" described in <a href="https://www.w3.org/TR/WCAG21/#non-text-content">WCAG 2.1 Success Criterion 1.1.1 Non-text Content</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check (1 and 2 and 3 and 4 are true) or (1 and 2 are false) or (1 and 3 are false)</p>
				<p>Fail: Checks (1 true and 2 false) or (1 true and 3 false) or (1 and 2 and 3 are true and 4 is false)</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.6"><strong>11.1.4.6 Void</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.4.6 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.7"><strong>11.1.4.7 Void</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.4.7 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.8"><strong>11.1.4.8 Void</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.4.8 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.9"><strong>11.1.4.9 Void</strong></p>
			</td>
			<td>
				<p><strong>C.11.1.4.9 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.10"><strong>11.1.4.10 Reflow</strong></p>
				<p>Where ICT is non-web software that provides a user interface it shall satisfy the success criterion in Table 11.2.</p>
				<p><strong>Table 11.2: Software success criterion: Reflow</strong></p>
				<p>Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:</p>
				<ul>
					<li>Vertical scrolling content at a width equivalent to 320 CSS pixels;</li>
					<li>Horizontal scrolling content at a height equivalent to 256 CSS pixels;</li>
				</ul>
				<p>Except for parts of the content which require two-dimensional layout for usage or meaning.</p>
				<p>NOTE 1: 320 CSS pixels is equivalent to a starting viewport width of 1 280 CSS pixels wide at 400% zoom. For non-web software which are designed to scroll horizontally (e.g. with vertical text), the 256 CSS pixels is equivalent to a starting viewport height of 1 024 px at 400% zoom.</p>
				<p>NOTE 2: Examples of content which require two-dimensional layout are images, maps, diagrams, video, games, presentations, data tables, and interfaces where it is necessary to keep toolbars in view while manipulating content.</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#reflow">WCAG 2.1 Success Criterion 1.4.10 Reflow</a> replacing the original WCAG 2.1 notes with notes 1 and 2, above.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.10 Reflow</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.2.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.11"><strong>11.1.4.11 Non-text contrast</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#non-text-contrast">WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.11 Non-text contrast</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion <a href="http://www.w3.org/TR/WCAG21/#non-text-contrast">WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.4.11 Non-text Contrast.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.12"><strong>11.1.4.12 Text spacing</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that does not have a fixed size content layout area that is essential to the information being conveyed, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#text-spacing">WCAG 2.1 Success Criterion 1.4.12 Text spacing</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.12 Text spacing</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion <a href="http://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">WCAG 2.1 Success Criterion 1.4.12 Text spacing</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.4.12 Text spacing.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.1.4.13"><strong>11.1.4.13 Content on hover or focus</strong></p>
				<p>Where ICT is a non-web software that provides a user interface, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">WCAG 2.1 Success Criterion 1.4.13 Content on hover or focus</a>.</p>
			</td>
			<td>
				<p><strong>C.11.1.4.13 Content on hover or focus</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#content-on-hover-or-focus">WCAG 2.1 Success Criterion 1.4.13 Content on hover or focus</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 1.4.13 Content on hover or focus.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2"><strong>11.2 Operable</strong></p>
			</td>
			<td>
				<p><strong>C.11.2 Operable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1"><strong>11.2.1 Keyboard accessible</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.1 Keyboard accessible</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1.1"><strong>11.2.1.1 Keyboard</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.1.1 Keyboard</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1.1.1"><strong>11.2.1.1.1 Keyboard (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to keyboards or a keyboard interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#keyboard">WCAG 2.1 Success Criterion 2.1.1 Keyboard</a>.</p>
				<p>NOTE: This does not imply that software is required to directly support a keyboard or "keyboard interface". Nor does it imply that software is required to provide a soft keyboard. Underlying platform software may provide device independent input services to applications that enable operation via a keyboard. Software that supports operation via such platform device independent services would be operable by a keyboard and would comply.</p>
			</td>
			<td>
				<p><strong>C.11.2.1.1.1 Keyboard (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to keyboards or a keyboard interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#keyboard">WCAG 2.1 Success Criterion 2.1.1 Keyboard</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 2.1.1 Keyboard.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1.1.2"><strong>11.2.1.1.2 Keyboard (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to keyboards or keyboard interface, it shall meet requirement 5.1.6.1 (Operation without keyboard interface: Closed functionality).</p>
			</td>
			<td>
				<p><strong>C.11.2.1.1.2 Keyboard (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to keyboards or keyboard interfaces.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that all functionality of the user interface is operable without vision.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1.2"><strong>11.2.1.2 No keyboard trap</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.3.</p>
				<p><strong>Table 11.3: Software success criterion: No keyboard trap</strong></p>
				<p>If keyboard focus can be moved to a component of the software using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.</p>
				<p>NOTE 1: Since any part of a software that does not meet this success criterion can interfere with a user's ability to use the whole software, it is necessary for all content in the software (whether or not it is used to meet other success criteria) to meet this success criterion.</p>
				<p>NOTE 2: Standard exit methods may vary by platform. For example, on many desktop platforms, the Escape key is a standard method for exiting.</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#no-keyboard-trap">WCAG 2.1 Success Criterion 2.1.2 No Keyboard Trap</a> replacing "content", "page" and "Web page" with "software", removing "See Conformance Requirement 5: Non-Interference" and with the addition of note 2 above " and with note 1 above re-drafted to avoid the use of the word "shall".</p>
			</td>
			<td>
				<p><strong>C.11.2.1.2 No keyboard trap</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.3.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1.3"><strong>11.2.1.3 Void</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.1.3 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1.4"><strong>11.2.1.4 Character key shortcuts</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.1.4 Character key shortcuts</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1.4.1"><strong>11.2.1.4.1 Character key shortcuts (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy <a href="https://w3c.github.io/wcag21/guidelines/#character-key-shortcuts">WCAG 2.1 Success Criterion 2.1.4 Character Key Shortcuts</a>.</p>
			</td>
			<td>
				<p><strong>C.11.2.1.4.1 Character key shortcuts (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to at least one assistive technology.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="https://w3c.github.io/wcag21/guidelines/#character-key-shortcuts">WCAG 2.1 Success Criterion 2.1.4 Character Key Shortcuts</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 2.1.4 Character Key Shortcuts.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.1.4.2"><strong>11.2.1.4.2 Character key shortcuts (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to keyboards or keyboard interface, it shall meet requirement 5.1.6.1 (Operation without keyboard interface: Closed functionality).</p>
			</td>
			<td>
				<p><strong>C.11.2.1.4.2 Character key shortcuts (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>ICT functionality is closed to keyboards or keyboard interfaces.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that all functionality is operable without vision.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.2"><strong>11.2.2 Enough time</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.2 Enough time</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.2.1"><strong>11.2.2.1 Timing adjustable</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.4.</p>
				<p><strong>Table 11.4: Software success criterion: Timing adjustable</strong></p>
				<p>For each time limit that is set by the software, at least one of the following is true:</p>
				<ul>
					<li><strong>Turn off</strong>: The user is allowed to turn off the time limit before encountering it; or</li>
					<li><strong>Adjust</strong>: The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or</li>
					<li><strong>Extend</strong>: The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or</li>
					<li>
						<p><strong>Real-time Exception</strong>: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or</p>
						<ul>
							<li><strong>Essential Exception</strong>: The time limit is essential and extending it would invalidate the activity; or</li>
						</ul>
					</li>
					<li><strong>20 Hour Exception</strong>: The time limit is longer than 20 hours.</li>
				</ul>
				<p>NOTE 1: This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with <a href="http://www.w3.org/TR/WCAG21/#on-focus">WCAG 2.1 Success Criterion 3.2.1</a>, which puts limits on changes of content or context as a result of user action.</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#timing-adjustable">WCAG 2.1 Success Criterion 2.2.1 Timing Adjustable</a> replacing "the content" with "software" and with the words "WCAG 2.1" added before the word "Success Criterion" in note 1 above.</p>
			</td>
			<td>
				<p><strong>C.11.2.2.1 Timing adjustable</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.4.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.2.2"><strong>11.2.2.2 Pause, stop, hide</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.5.</p>
				<p><strong>Table 11.5: Software success criterion: Pause, stop, hide</strong></p>
				<p>For moving, blinking, scrolling, or auto-updating information, all of the following are true:</p>
				<ul>
					<li><strong>Moving, blinking, scrolling</strong>: For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and</li>
					<li><strong>Auto-updating</strong>: For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.</li>
				</ul>
				<p>NOTE 1: For requirements related to flickering or flashing content, refer to <a href="https://w3c.github.io/wcag21/guidelines/#seizures-and-physical-reactions">WCAG 2.1 Guideline 2.3</a>.</p>
				<p>NOTE 2: This success criteria is applicable to all content in the software (whether or not there is an alternate accessible mode of operation of the software) since any part of a software that does not meet this success criterion can interfere with a user's ability to use the whole software (including a user interface element that enables the user to activate the alternate accessible mode of operation).</p>
				<p>NOTE 3: Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.</p>
				<p>NOTE 4: An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.</p>
				<p>NOTE 5: This is to be applied to all content. Any content, whether informative or decorative, that is updated automatically, blinks, or moves may create an accessibility barrier.</p>
				<p>NOTE 6: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#pause-stop-hide">WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide</a> replacing "page" and "Web page" with "software", removing "See Conformance Requirement 5: Non-Interference" in note 2 of the success criterion, with the words "WCAG 2.1" added before the word "Guideline" in note 1 above, with note 2 above re-drafted to avoid the use of the word "must" and with the addition of note 5 above.</p>
			</td>
			<td>
				<p><strong>C.11.2.2.2 Pause, stop, hide</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.5.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.3"><strong>11.2.3 Seizures and physical reactions</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.3 Seizures and physical reactions</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.3.1"><strong>11.2.3.1 Three flashes or below threshold</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.6.</p>
				<p><strong>Table 11.6: Software success criterion: Three flashes or below threshold</strong></p>
				<p>Software does not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.</p>
				<p>NOTE 1: This success criteria is applicable to all content in the software (whether or not there is an alternate accessible mode of operation of the software) since any part of a software that does not meet this success criterion can interfere with a user's ability to use the whole software (including a user interface element that enables the user to activate the alternate accessible mode of operation).</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold">WCAG 2.1 Success Criterion 2.3.1 Three Flashes or Below Threshold</a> replacing "Web pages" with "software", "the whole page" with "the whole software", "the Web page" with "the software" and removing "See Conformance Requirement 5: Non-Interference" and with note 1 above re-drafted to avoid the use of the word "must".</p>
			</td>
			<td>
				<p><strong>C.11.2.3.1 Three flashes or below threshold</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.6.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.4"><strong>11.2.4 Navigable</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.4 Navigable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.4.1"><strong>11.2.4.1 Void</strong></p>
				<p>NOTE 1: The related web page requirement "Bypass blocks" does not apply to single software programs, but to a specific definition of "sets of software programs" that are extremely rare.</p>
				<p>NOTE 2: Although not a requirement, it is generally considered best practice, and to address user needs, to be able to bypass blocks of content that are repeated within software.</p>
			</td>
			<td>
				<p><strong>C.11.2.4.1 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.4.2"><strong>11.2.4.2 Void</strong></p>
				<p>NOTE 1: The related web page requirement "Page titled" does not apply to single software programs, but to a specific definition of "sets of software programs" that are extremely rare.</p>
				<p>NOTE 2: Although the name of a software product could be a sufficient title if it describes the topic or purpose, software names are trademarked and trademark names cannot by law be descriptive names. It is not practical to make software names both unique and descriptive.</p>
			</td>
			<td>
				<p><strong>C.11.2.4.2 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.4.3"><strong>11.2.4.3 Focus order</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.7.</p>
				<p><strong>Table 11.7: Software success criterion: Focus order</strong></p>
				<p>If software can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.</p>
				<p>NOTE: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#focus-order">WCAG 2.1 Success Criterion 2.4.3 Focus order</a> replacing "Web page" with "software".</p>
			</td>
			<td>
				<p><strong>C.11.2.4.3 Focus order</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.7.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.4.4"><strong>11.2.4.4 Link purpose (in context)</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#link-purpose-in-context">WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context)</a>.</p>
			</td>
			<td>
				<p><strong>C.11.2.4.4 Link purpose (in context)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#link-purpose-in-context">WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context)</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 2.4.4 Link Purpose (In Context).</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.4.5"><strong>11.2.4.5 Void</strong></p>
				<p>NOTE: The related web page requirement for "Multiple ways" applies to "Sets" of web pages. In software, the equivalent to "sets of web pages" would be "sets of software", but these are extremely rare and an equivalent is not included in this clause on software requirements.</p>
			</td>
			<td>
				<p><strong>C.11.2.4.5 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.4.6"><strong>11.2.4.6 Headings and labels</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#headings-and-labels">WCAG 2.1 Success Criterion 2.4.6 Headings and Labels</a>.</p>
				<p>NOTE: In software, headings and labels are used to describe sections of content and controls respectively. In some cases it may be unclear whether a piece of static text is a heading or a label. But whether treated as a label or a heading, the requirement is the same: that if they are present they describe the topic or purpose of the item(s) they are associated with.</p>
			</td>
			<td>
				<p><strong>C.11.2.4.6 Headings and labels</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#headings-and-labels">WCAG 2.1 Success Criterion 2.4.6 Headings and Labels</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 2.4.6 Headings and Labels.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.4.7"><strong>11.2.4.7 Focus visible</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="https://www.w3.org/TR/WCAG21/#focus-visible">WCAG 2.1 Success Criterion 2.4.7 Focus Visible</a>.</p>
			</td>
			<td>
				<p><strong>C.11.2.4.7 Focus visible</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#focus-visible">WCAG 2.1 Success Criterion 2.4.7 Focus Visible</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 2.4.7 Focus Visible.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.5"><strong>11.2.5 Input modalities</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.5 Input modalities</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.5.1"><strong>11.2.5.1 Pointer gestures</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.8.</p>
				<p><strong>Table 11.8: Software success criterion: Pointer gestures</strong></p>
				<p>All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.</p>
				<p>NOTE 1: This requirement applies to non-web software that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#pointer-gestures">WCAG 2.1 Success Criterion 2.5.1 Pointer Gestures</a> replacing the original WCAG 2.1 note with note 1 above.</p>
			</td>
			<td>
				<p><strong>C.11.2.5.1 Pointer gestures</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to at least one assistive technology.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.8.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.5.2"><strong>11.2.5.2 Pointer cancellation</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.9.</p>
				<p><strong>Table 11.9: Software success criterion: Pointer cancellation</strong></p>
				<p>For functionality that can be operated using a single pointer, at least one of the following is true:</p>
				<ul>
					<li>No Down-Event: The down-event of the pointer is not used to execute any part of the function;</li>
					<li>Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;</li>
					<li>Up Reversal: The up-event reverses any outcome of the preceding down-event;</li>
					<li>Essential: Completing the function on the down-event is essential.</li>
				</ul>
				<p>NOTE 1: Functions that emulate a keyboard or numeric keypad key press are considered essential.</p>
				<p>NOTE 2: This requirement applies to non-web software that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#pointer-cancellation">WCAG 2.1 Success Criterion 2.5.2 Pointer Cancellation</a> replacing the original WCAG 2.1 note with notes 1 and 2 above.</p>
			</td>
			<td>
				<p><strong>C.11.2.5.2 Pointer cancellation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>The software provides support to at least one assistive technology.</p>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.9.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.5.3"><strong>11.2.5.3 Label in name</strong></p>
			</td>
			<td>
				<p><strong>C.11.2.5.3 Label in name</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.5.3.1"><strong>11.2.5.3.1 Label in name (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#label-in-name">WCAG 2.1 Success Criterion 2.5.3 Label in Name.</a></p>
			</td>
			<td>
				<p><strong>C.11.2.5.3.1 Label in name (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to at least one assistive technology.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#label-in-name">WCAG 2.1 Success Criterion 2.5.3 Label in Name</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 2.5.3 Label in Name.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.5.3.2"><strong>11.2.5.3.2 Label in name (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading, it should meet requirement 5.1.3.3 (Auditory output correlation).</p>
			</td>
			<td>
				<p><strong>C.11.2.5.3.2 Label in name (closed functionality)</strong></p>
				<p>Clause 11.2.5.3.2 is informative only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.2.5.4"><strong>11.2.5.4 Motion actuation</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy <a href="http://www.w3.org/TR/WCAG21/#motion-actuation">WCAG 2.1 Success Criterion 2.5.4 Motion Actuation</a>.</p>
			</td>
			<td>
				<p><strong>C.11.2.5.4 Motion actuation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to at least one assistive technology.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#motion-actuation">WCAG 2.1 Success Criterion 2.5.4 Motion Actuation</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 2.5.4 Motion Actuation.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3"><strong>11.3 Understandable</strong></p>
			</td>
			<td>
				<p><strong>C.11.3 Understandable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.1"><strong>11.3.1 Readable</strong></p>
			</td>
			<td>
				<p><strong>C.11.3.1 Readable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.1.1"><strong>11.3.1.1 Language of software</strong></p>
			</td>
			<td>
				<p><strong>C.11.3.1.1 Language of software</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.1.1.1"><strong>11.3.1.1.1 Language of software (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to assistive technologies for screen reading, it shall satisfy the success criterion in Table 11.10.</p>
				<p><strong>Table 11.10: Software success criterion: Language of software</strong></p>
				<p>The default human language of software can be programmatically determined.</p>
				<p>NOTE 1: Where software platforms provide a "locale / language" setting, applications that use that setting and render their interface in that "locale / language" would comply with this success criterion. Applications that do not use the platform "locale / language" setting but instead use an accessibility-supported method for exposing the human language of the software would also comply with this success criterion. Applications implemented in technologies where assistive technologies cannot determine the human language and that do not support the platform "locale / language" setting may not be able to meet this success criterion in that locale / language.</p>
				<p>NOTE 2: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#language-of-page">WCAG 2.1 Success Criterion 3.1.1 Language of page</a>, replacing "each web page" with "software" and with the addition of note 1 above.</p>
			</td>
			<td>
				<p><strong>C.11.3.1.1.1 Language of software (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.10.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.1.1.2"><strong>11.3.1.1.2 Language of software (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading, it shall meet requirement 5.1.3.14 (Spoken languages).</p>
			</td>
			<td>
				<p><strong>C.11.3.1.1.2 Language of software (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to assistive technologies for screen reading.</li>
					<li>The speech output is provided as non-visual access to closed functionality.</li>
					<li>The speech output is not proper names, technical terms, words of indeterminate. language, and words or phrases that have become part of the vernacular of the immediately surrounding text.</li>
					<li>The content is not generated externally and is under the control of the ICT vendor.</li>
					<li>The displayed languages can be selected using non-visual access.</li>
					<li>The user has not selected a speech language that is different from the language of the displayed content.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the speech output is in the same human language of the displayed content provided.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2, 3, 4, 5, 6 or 7 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.1.2"><strong>11.3.1.2 Void</strong></p>
				<p>NOTE: To apply the related web page requirement for "Language of parts" to software would require the marking-up of all text in all locations within the software. This would be impossible so an equivalent is not included in this clause on software requirements.</p>
			</td>
			<td>
				<p><strong>C.11.3.1.2 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.2"><strong>11.3.2 Predictable</strong></p>
			</td>
			<td>
				<p><strong>C.11.3.2 Predictable</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.2.1"><strong>11.3.2.1 On focus</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#on-focus">WCAG 2.1 Success Criterion 3.2.1 On Focus</a>.</p>
				<p>NOTE: Some compound documents and their user agents are designed to provide significantly different viewing and editing functionality depending upon what portion of the compound document is being interacted with (e.g. a presentation that contains an embedded spreadsheet, where the menus and toolbars of the user agent change depending upon whether the user is interacting with the presentation content, or the embedded spreadsheet content). If the user uses a mechanism other than putting focus on that portion of the compound document with which they mean to interact (e.g. by a menu choice or special keyboard gesture), any resulting change of context would not be subject to this success criterion because it was not caused by a change of focus.</p>
			</td>
			<td>
				<p><strong>C.11.3.2.1 On focus</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#on-focus">WCAG 2.1 Success Criterion 3.2.1 On Focus</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 3.2.1 On Focus.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.2.2"><strong>11.3.2.2 On input</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#on-input">WCAG 2.1 Success Criterion 3.2.2 On Input</a>.</p>
			</td>
			<td>
				<p><strong>C.11.3.2.2 On input</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#on-input">WCAG 2.1 Success Criterion 3.2.2 On Input</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 3.2.2 On Input.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.2.3"><strong>11.3.2.3 Void</strong></p>
				<p>NOTE: The related web page requirement for "Consistent navigation" applies to "Sets" of web pages. While consistency within software is desirable, "sets of software" in the same sense as "sets of web pages", are extremely rare and an equivalent is not included in this clause on software requirements.</p>
			</td>
			<td>
				<p><strong>C.11.3.2.3 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.2.4"><strong>11.3.2.4 Void</strong></p>
				<p>NOTE: The related web page requirement for "Consistent identification" applies to "Sets" of web pages. In software, the equivalent to "sets of web pages" would be "sets of software", but these are extremely rare and an equivalent is not included in this clause on software requirements.</p>
			</td>
			<td>
				<p><strong>C.11.3.2.4 Void</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.3"><strong>11.3.3 Input assistance</strong></p>
			</td>
			<td>
				<p><strong>C.11.3.3 Input assistance</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.3.1"><strong>11.3.3.1 Error identification</strong></p>
			</td>
			<td>
				<p><strong>C.11.3.3.1 Error identification</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.3.1.1"><strong>11.3.3.1.1 Error identification (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to assistive technologies for screen reading, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#error-identification">WCAG 2.1 Success Criterion 3.3.1 Error Identification</a>.</p>
			</td>
			<td>
				<p><strong>C.11.3.3.1.1 Error identification (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#error-identification">WCAG 2.1 Success Criterion 3.3.1 Error Identification</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 3.3.1 Error Identification.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.3.1.2"><strong>11.3.3.1.2 Error Identification (closed functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface which is closed to assistive technologies for screen reading, it shall meet requirement 5.1.3.15 (Non-visual error identification).</p>
			</td>
			<td>
				<p><strong>C.11.3.3.1.2 Error Identification (closed functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT is non-web software that provides a user interface.</li>
					<li>The user interface is closed to assistive technologies for screen reading.</li>
					<li>Speech output is provided as non-visual access to closed functionality.</li>
					<li>An input error is automatically detected.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that speech output identifies the item that is in error.</li>
					<li>Check that the speech output describes the item that is in error.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Check 1 or check 2 false</p>
				<p>Not applicable: Pre-condition 1, 2,3 or 4 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.3.2"><strong>11.3.3.2 Labels or instructions</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#labels-or-instructions">WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions</a>.</p>
			</td>
			<td>
				<p><strong>C.11.3.3.2 Labels or instructions</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#labels-or-instructions">WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 3.3.2 Labels or Instructions.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.3.3"><strong>11.3.3.3 Error suggestion</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the <a href="http://www.w3.org/TR/WCAG21/#error-suggestion">WCAG 2.1 Success Criterion 3.3.3 Error Suggestion</a>.</p>
			</td>
			<td>
				<p><strong>C.11.3.3.3 Error suggestion</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail <a href="http://www.w3.org/TR/WCAG21/#error-suggestion">WCAG 2.1 Success Criterion WCAG 2.1 Success Criterion 3.3.3 Error Suggestion</a>.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 3.3.3 Error Suggestion.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.3.3.4"><strong>11.3.3.4 Error prevention (legal, financial, data)</strong></p>
				<p>Where ICT is non-web software that provides a user interface, it shall satisfy the success criterion in Table 11.11.</p>
				<p><strong>Table 11.11: Software success criterion: Error prevention (legal, financial, data)</strong></p>
				<p>For software that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:</p>
				<ol>
					<li>Reversible: Submissions are reversible.</li>
					<li>Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.</li>
					<li>Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.</li>
				</ol>
				<p>NOTE: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data">WCAG 2.1 Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data</a>) replacing "web pages" with "software".</p>
			</td>
			<td>
				<p><strong>C.11.3.3.4 Error prevention (legal, financial, data)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.11.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4"><strong>11.4 Robust</strong></p>
			</td>
			<td>
				<p><strong>C.11.4 Robust</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1"><strong>11.4.1 Compatible</strong></p>
			</td>
			<td>
				<p><strong>C.11.4.1 Compatible</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.1"><strong>11.4.1.1 Parsing</strong></p>
			</td>
			<td>
				<p><strong>C.11.4.1.1 Parsing</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.1.1"><strong>11.4.1.1.1 Parsing (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to any assistive technologies, it shall satisfy the success criterion in Table 11.12.</p>
				<p><strong>Table 11.12: Software success criterion: Parsing</strong></p>
				<p>For software that uses markup languages, in such a way that the markup is separately exposed and available to assistive technologies and accessibility features of software or to a user-selectable user agent, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.</p>
				<p>NOTE 1: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.</p>
				<p>NOTE 2: Markup is not always available to assistive technology or to user selectable user agents such as browsers. In such cases, conformance to this [requirement] would have no impact on accessibility as it can for web content where it is exposed.</p>
				<p>NOTE 3: Examples of markup that is separately exposed and available to assistive technologies and to user agents include but are not limited to: documents encoded in HTML, ODF, and OOXML. In these examples, the markup can be parsed entirely in two ways: (a) by assistive technologies which may directly open the document, (b) by assistive technologies using DOM APIs of user agents for these document formats.</p>
				<p>NOTE 4: Examples of markup used internally for persistence of the software user interface that are never exposed to assistive technology include but are not limited to: XUL, and FXML. In these examples assistive technology only interacts with the user interface of generated software.</p>
				<p>NOTE 5: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#parsing">WCAG 2.1 Success Criterion 4.1.1 Parsing</a> replacing "In content implemented using markup languages" with "For software that uses markup languages, in such a way that the markup is separately exposed and available to assistive technologies and accessibility features of software or to a user-selectable user agent" with the addition of notes 2, 3 and 4 above.</p>
			</td>
			<td>
				<p><strong>C.11.4.1.1.1 Parsing (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to at least one assistive technology.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.12.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.1.2"><strong>11.4.1.1.2 Parsing (closed functionality)</strong></p>
				<p>Not applicable.</p>
				<p>NOTE: Where ICT is non-web software that provides a user interface which is closed to all assistive technology it shall not have to meet the "Parsing" success criterion in Table 11.10 because the intent of this success criterion is to provide consistency so that different user agents or assistive technologies will yield the same result.</p>
			</td>
			<td>
				<p><strong>C.11.4.1.1.2 Parsing (closed functionality)</strong></p>
				<p>Clause 11.4.1.1.2 contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.2"><strong>11.4.1.2 Name, role, value</strong></p>
			</td>
			<td>
				<p><strong>C.11.4.1.2 Name, role, value</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.2.1"><strong>11.4.1.2.1 Name, role, value (open functionality)</strong></p>
				<p>Where ICT is non-web software that provides a user interface and that supports access to any assistive technologies, it shall satisfy the success criterion in Table 11.13.</p>
				<p><strong>Table 11.13: Software success criterion: Name, role, value</strong></p>
				<p>For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.</p>
				<p>NOTE 1: This success criterion is primarily for software developers who develop or use custom user interface components. Standard user interface components on most accessibility-supported platforms already meet this success criterion when used according to specification.</p>
				<p>NOTE 2: For conforming to this success criterion, it is usually best practice for software user interfaces to use the accessibility services provided by platform software. These accessibility services enable interoperability between software user interfaces and both assistive technologies and accessibility features of software in standardised ways. Most platform accessibility services go beyond programmatic exposure of name and role, and programmatic setting of states, properties and values (and notification of same), and specify additional information that could or should be exposed and / or set (for instance, a list of the available actions for a given user interface component, and a means to programmatically execute one of the listed actions).</p>
				<p>NOTE 3: This success criterion is identical to the <a href="http://www.w3.org/TR/WCAG21/#name-role-value">WCAG 2.1 Success Criterion 4.1.2 Name, Role, Value</a> replacing the original WCAG 2.1 note with: "This success criterion is primarily for software developers who develop or use custom user interface components. Standard user interface components on most accessibility-supported platforms already meet this success criterion when used according to specification." and the addition of note 2 above.</p>
			</td>
			<td>
				<p><strong>C.11.4.1.2.1 Name, role, value (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to at least one assistive technology.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail the Success Criterion in Table 11.13.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.2.2"><strong>11.4.1.2.2 Name, role, value (closed functionality)</strong></p>
				<p>Not applicable.</p>
				<p>NOTE: Where ICT is non-web software that provides a user interface which is closed to all assistive technology it does not have to meet the "Name, role, value" success criterion in Table 11.13 because this success criterion requires information in a programmatically determinable form.</p>
			</td>
			<td>
				<p><strong>C.11.4.1.2.2 Name, role, value (closed functionality)</strong></p>
				<p>Clause 11.4.1.2.2 contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.3"><strong>11.4.1.3 Status messages</strong></p>
			</td>
			<td>
				<p><strong>C.11.4.1.3 Status messages</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.3.1"><strong>11.4.1.3.1 Status messages (open functionality)</strong></p>
				<p>Where ICT is non-web software, it shall satisfy <a href="https://www.w3.org/TR/WCAG21/#status-messages">WCAG 2.1 Success Criterion 4.1.3 Status Messages</a><strong>.</strong></p>
			</td>
			<td>
				<p><strong>C.11.4.1.3.1 Status messages (open functionality)</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is non-web software that provides a user interface.</li>
					<li>The software provides support to assistive technologies for screen reading.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software does not fail WCAG 2.1 Success Criterion 4.1.3 Status messages.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met, or the non-web software does not contain content relevant to WCAG 2.1 Success Criterion 4.1.3 Status messages</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.4.1.3.2"><strong>11.4.1.3.2 Status messages (closed functionality)</strong></p>
				<p>Not applicable.</p>
			</td>
			<td>
				<p><strong>C.11.4.1.3.2 Status messages (closed functionality)</strong></p>
				<p>Clause 11.4.1.3.2 contains no testable requirements.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5"><strong>11.5 Interoperability with assistive technology</strong></p>
			</td>
			<td>
				<p><strong>C.11.5 Interoperability with assistive technology</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.1"><strong>11.5.1 Closed functionality</strong></p>
				<p>Where the closed functionality of software conforms to clause 5.1 (Closed functionality) it shall not be required to conform with clause 11.5.2 to clause 11.5.2.17.</p>
			</td>
			<td>
				<p><strong>C.11.5.1 Closed functionality</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software has closed functionality.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the closed functionality conforms to clause 5.1.</li>
				</ol>
				<p>Result</p>
				<p>If check 1 is true, the software is not required to conform to clause 11.5.2</p>
				<p>If check 1 is false the software is required to conform to clause 11.5.2</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2"><strong>11.5.2 Accessibility services</strong></p>
			</td>
			<td>
				<p><strong>C.11.5.2 Accessibility services</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.1"><strong>11.5.2.1 Platform accessibility service support for software that provides a user interface</strong></p>
				<p>Platform software shall provide a set of documented platform services that enable software that provides a user interface running on the platform software to interoperate with assistive technology.</p>
				<p>Where a user interface concept corresponding to one of the clauses 11.5.2.5 to 11.5.2.17 is supported within the software environment, the platform software should support that requirement. For example, selection attributes from clause 11.5.2.14 (Modification of focus and selection attributes) may not exist in environments that do not allow selection, which is most commonly associated with copy and paste.</p>
				<p>NOTE 1: These define the minimum functionality of software providing user interfaces when using platform services.</p>
				<p>NOTE 2: In some platforms these services may be called accessibility services, but in some other platforms these services may be provided as part of the user interface services.</p>
				<p>NOTE 3: User interface services that provide accessibility support by default are considered to be part of the services provided to conform to this clause (e.g. the service for creating a new user interface element provides role, state, boundary, name and description).</p>
				<p>NOTE 4: To comply with this requirement the platform software can provide its own set of services or expose the services provided by its underlying platform layers, if those services conform to this requirement.</p>
				<p>NOTE 5: Within specific programming environments, the technical attributes associated with the user interface properties described in clauses 11.5.2.5 to 11.5.2.17 might have different names than those used within the clauses.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.1 Platform accessibility service support for software that provides a user interface</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is platform software.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the platform software documentation includes information about platform services that may be used by software that provides a user interface to interoperate with assistive technology.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.2"><strong>11.5.2.2 Platform accessibility service support for assistive technologies</strong></p>
				<p>Platform software shall provide a set of documented platform accessibility services that enable assistive technology to interoperate with software that provides a user interface running on the platform software.</p>
				<p>Where a user interface concept corresponding to one of the clauses 11.5.2.5 to 11.5.2.17 is supported within the software environment, the platform software should support that requirement. For example, selection attributes from clause 11.5.2.14 (Modification of focus and selection attributes) may not exist in environments that do not allow selection, which is most commonly associated with copy and paste.</p>
				<p>NOTE 1: These define the minimum functionality available to assistive technologies when using platform services.</p>
				<p>NOTE 2: The definition of platform in clause 3.1 applies to software that provides services to other software, including but not limited to, operating systems, web browsers, virtual machines.</p>
				<p>NOTE 3: In some platforms these services may be called accessibility services, but in some other platforms these services may be provided as part of the user interface services.</p>
				<p>NOTE 4: Typically these services belong to the same set of services that are described in clause 11.5.2.1.</p>
				<p>NOTE 5: To comply with this requirement the platform software can provide its own set of services or expose the services provided by its underlying platform layers, if those services conform to this requirement.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.2 Platform accessibility service support for assistive technologies</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is platform software.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the platform software documentation includes information about platform accessibility services that enables assistive technology to interoperate with software that provides a user interface running on the platform software.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.3"><strong>11.5.2.3 Use of accessibility services</strong></p>
				<p>Where the software provides a user interface it shall use the applicable documented platform accessibility services. If the documented platform accessibility services do not allow the software to meet the applicable requirements of clauses 11.5.2.5 to 11.5.2.17, then software that provides a user interface shall use other documented services to interoperate with assistive technology.</p>
				<p>NOTE: The term "documented platform accessibility services" refers to the set of services provided by the platform according to clauses 11.5.2.1 and 11.5.2.2.</p>
				<p>It is best practice to develop software using toolkits that automatically implement the underlying platform accessibility services.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.3 Use of accessibility services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software uses the applicable documented platform accessibility services.</li>
					<li>Check that the software can meet the applicable requirements 11.5.2.5 to 11.5.2.17 whilst using the documented platform accessibility services.</li>
					<li>Check that the software can meet requirements 11.5.2.5 to 11.5.2.17 whilst using the documented platform accessibility services and other documented services.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true and check 2 or check 3 is true</p>
				<p>Fail: Check 1 or check 3 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.4"><strong>11.5.2.4 Assistive technology</strong></p>
				<p>Where the ICT is assistive technology it shall use the documented platform accessibility services.</p>
				<p>NOTE 1: The term "documented platform accessibility services" refers to the set of services provided by the platform according to clauses 11.5.2.1 and 11.5.2.2.</p>
				<p>NOTE 2: Assistive technology can also use other documented accessibility services.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.4 Assistive technology</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT is assistive technology.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the assistive technology uses the documented platform accessibility services.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.5"><strong>11.5.2.5 Object information</strong></p>
				<p>Where the software provides a user interface it shall, by using the services as described in clause 11.5.2.3, make the user interface elements' role, state(s), boundary, name, and description programmatically determinable by assistive technologies.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.5 Object information</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the user interface element's role is programmatically determinable by assistive technologies.</li>
					<li>Check that the user interface element's state(s) is programmatically determinable by assistive technologies.</li>
					<li>Check that the user interface element's boundary is programmatically determinable by assistive technologies.</li>
					<li>Check that the user interface element's name is programmatically determinable by assistive technologies.</li>
					<li>Check that the user interface element's description is programmatically determinable by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1, 2, 3, 4 and 5 are true</p>
				<p>Fail: Check 1 or 2 or 3 or 4 or 5 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.6"><strong>11.5.2.6 Row, column, and headers</strong></p>
				<p>Where the software provides a user interface it shall, by using the services as described in clause 11.5.2.3, make the row and column of each cell in a data table, including headers of the row and column if present, programmatically determinable by assistive technologies.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.6 Row, column, and headers</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are data tables in the user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Select a data table in which the tests are to be performed.</li>
					<li>Check that each cell's row is programmatically determinable by assistive technologies.</li>
					<li>Check that each cell's column is programmatically determinable by assistive technologies.</li>
					<li>Check that each cell's row header, if the row header exists, is programmatically determinable by assistive technologies.</li>
					<li>Check that each cell's column header, if the column header exists, is programmatically determinable by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 2, 3, 4 and 5 are true</p>
				<p>Fail: Check 2 or 3 or 4 or 5 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.7"><strong>11.5.2.7 Values</strong></p>
				<p>Where the software provides a user interface, it shall, by using the services as described in clause 11.5.2.3, make the current value of a user interface element and any minimum or maximum values of the range, if the user interface element conveys information about a range of values, programmatically determinable by assistive technologies.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.7 Values</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements that can have values.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Select a user interface element that can have a value.</li>
					<li>Check that the current value is programmatically determinable by assistive technologies.</li>
					<li>If the user interface element conveys information about a range of values, check that the minimum value is programmatically determinable by assistive technologies.</li>
					<li>If the user interface element conveys information about a range of values, check that the maximum value is programmatically determinable by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 2, 3 and 4 are true</p>
				<p>Fail: Check 2 or 3 or 4 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.8"><strong>11.5.2.8 Label relationships</strong></p>
				<p>Where the software provides a user interface it shall expose the relationship that a user interface element has as a label for another element, or of being labelled by another element, using the services as described in clause 11.5.2.3, so that this information is programmatically determinable by assistive technologies.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.8 Label relationships</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements that are labels of other user interface elements.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Obtain the information of each user interface element.</li>
					<li>Check that the user interface element's information includes the relationship with the user interface element that is its label, if the current user interface element has a label, and that this relationship is programmatically determinable by assistive technologies.</li>
					<li>Check that the user interface element's information includes the relationship with the user interface element that it is labelling, if the current user interface element is a label, and that this relationship is programmatically determinable by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 2 or 3 are true</p>
				<p>Fail: Check 2 and 3 are false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.9"><strong>11.5.2.9 Parent-child relationships</strong></p>
				<p>Where the software provides a user interface it shall, by using the services as described in clause 11.5.2.3, make the relationship between a user interface element and any parent or children elements programmatically determinable by assistive technologies.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.9 Parent-child relationships</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements that are parents of other user interface elements in a hierarchical structure.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>For user interface elements that have a parent, check that the user interface element's information includes the relationship with the user interface element that is its parent.</li>
					<li>Check that the user interface elements that are parents of the user interface element selected in check 1, include the relationship with the user interface elements that are its children in their information, and that this relationship is programmatically determinable by assistive technologies.</li>
					<li>For user interface elements that are a parent of other user interface elements, check that the user interface element's information includes the relationship with the user interface elements that are its children, and that this relationship is programmatically determinable by assistive technologies.</li>
					<li>Check that the user interface elements that are a child of the user interface element selected in check 3, include the relationship with the user interface elements that are its parents in their information, and that this relationship is programmatically determinable by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 or 2 is true and check 3 or 4 is true</p>
				<p>Fail: Checks 1 and 2 are false or check 3 and 4 are false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
				<p>NOTE: For this requirement it is enough that one of the two directions of a parent-child relationship is programmatically determinable. This is the reason why the requirement checks are in pairs and why the requirement is met if one member of each pair is true.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.10"><strong>11.5.2.10 Text</strong></p>
				<p>Where the software provides a user interface it shall, by using the services as described in clause 11.5.2.3, make the text contents, text attributes, and the boundary of text rendered to the screen programmatically determinable by assistive technologies.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.10 Text</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There is text rendered to the screen.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>For instances of text rendered to the screen, check that the text's information includes its text content, and that this information is programmatically determinable by assistive technologies.</li>
					<li>For instances of text rendered to the screen, check that the text's information includes its attributes, and that this information is programmatically determinable by assistive technologies.</li>
					<li>For instances of text rendered to the screen, check that the text's information includes its boundary, and that this information is programmatically determinable by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1, 2 and 3 are true</p>
				<p>Fail: Check 1 or 2 or 3 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.11"><strong>11.5.2.11 List of available actions</strong></p>
				<p>Where the software provides a user interface it shall, by using the services as described in clause 11.5.2.3, make a list of available actions that can be executed on a user interface element, programmatically determinable by assistive technologies.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.11 List of available actions</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements that have actions that can be executed by the user.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the user interface element's information includes the list of actions that can be executed.</li>
					<li>Check that this list is programmatically determinable by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Check 1 or 2 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.12"><strong>11.5.2.12 Execution of available actions</strong></p>
				<p>Where permitted by security requirements, software that provides a user interface shall, by using the services as described in clause 11.5.2.3, allow the programmatic execution of the actions exposed according to clause 11.5.2.11 by assistive technologies.</p>
				<p>NOTE 1: In some cases the security requirements imposed on a software product may forbid external software from interfering with the ICT product. Examples of systems under strict security requirements are systems dealing with intelligence activities, cryptologic activities related to national security, command and control of military forces.</p>
				<p>NOTE 2: Assistive technologies may be required to maintain the same level of security as the standard input mechanisms supported by the platform.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.12 Execution of available actions</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements that have actions that can be executed by the user.</li>
					<li>The security requirements permit assistive technology to programmatically execute user actions.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the user interface element's information includes the list of actions that can be executed by assistive technologies according to 11.5.2.11.</li>
					<li>Check that all the actions in the list can successfully be executed by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Check 1 or 2 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.13"><strong>11.5.2.13 Tracking of focus and selection attributes</strong></p>
				<p>Where software provides a user interface it shall, by using the services as described in clause 11.5.2.3, make information and mechanisms necessary to track focus, text insertion point, and selection attributes of user interface elements programmatically determinable by assistive technologies.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.13 Tracking of focus and selection attributes</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements that enable text editing.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the user interface element's information includes mechanisms to track focus, text insertion point and selection attributes.</li>
					<li>Check that this information is programmatically determinable by assistive technologies.</li>
					<li>Activate those tracking mechanisms.</li>
					<li>As a user, use the text editing functionality in the evaluated software product.</li>
					<li>Check that the tracking of focus, text insertion point and selection attributes work.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 2 and 5 are true</p>
				<p>Fail: Check 1 or 5 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.14"><strong>11.5.2.14 Modification of focus and selection attributes</strong></p>
				<p>Where permitted by security requirements, software that provides a user interface shall, by using the services as described in clause 11.5.2.3, allow assistive technologies to programmatically modify focus, text insertion point, and selection attributes of user interface elements where the user can modify these items.</p>
				<p>NOTE 1: In some cases the security requirements imposed on a software product may forbid external software from interfering with the ICT product and so this requirement would not apply. Examples of systems under strict security requirements are systems dealing with intelligence activities, cryptologic activities related to national security, command and control of military forces.</p>
				<p>NOTE 2: Assistive technologies may be required to maintain the same level of security as the standard input mechanisms supported by the platform.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.14 Modification of focus and selection attributes</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements that can receive focus or that enable text editing.</li>
					<li>The security requirements permit platform software to programmatically modify focus, text insertion point and selection attributes of user interface elements.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>For user interface elements that can receive focus and where the focus can be modified by a user without the use of assistive technology, check that the focus can be programmatically modified by assistive technologies.</li>
					<li>For user interface elements that enable text editing by a user without the use of assistive technology, check that the position of the text insertion point can be programmatically modified by assistive technologies.</li>
					<li>For user interface elements that enable text editing, check that the selection attributes can be programmatically modified by assistive technologies where they can be modified by user without the use of assistive technology.</li>
				</ol>
				<p>Result</p>
				<p>Pass: All checks are true</p>
				<p>Fail: Any check is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.15"><strong>11.5.2.15 Change notification</strong></p>
				<p>Where software provides a user interface it shall, by using the services as described in clause 11.5.2.3, notify assistive technologies about changes in those programmatically determinable attributes of user interface elements that are referenced in requirements 11.5.2.5 to 11.5.2.11 and 11.5.2.13.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.15 Change notification</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Activate notifications of changes in the user interface elements.</li>
					<li>Check that notifications about changes in object information (role, state, boundary, name and description) are sent to assistive technologies, if this information changes in the software user interface.</li>
					<li>Check that notifications about changes in row, column and headers of data tables are sent to assistive technologies, if this information changes in the software.</li>
					<li>Check that notifications about changes in values (current value, minimum value and maximum value) are sent, if this information changes in the software.</li>
					<li>Check that notifications about changes in label relationships are sent to assistive technologies, if this information changes in the software.</li>
					<li>Check that notifications about changes in parent-child relationships are sent to assistive technologies, if this information changes in the software.</li>
					<li>Check notifications about changes in text (text contents, text attributes and the boundary of text rendered to the screen) are sent to assistive technologies, if this information changes in the software.</li>
					<li>Check that notifications about changes in the list of available actions are sent to assistive technologies, if this information changes in the software.</li>
					<li>Check that notifications about changes in focus, text insertion point and selection attributes are sent to assistive technologies, if this information changes in the software.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 2, 3, 4, 5, 6, 7, 8 and 9 are true</p>
				<p>Fail: Check 2, 3, 4, 5, 6, 7, 8 or 9 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.16"><strong>11.5.2.16 Modifications of states and properties</strong></p>
				<p>Where permitted by security requirements, software that provides a user interface shall, by using the services as described in clause 11.5.2.3, allow assistive technologies to programmatically modify states and properties of user interface elements, where the user can modify these items.</p>
				<p>NOTE 1: In some cases the security requirements imposed on a software product may forbid external software from interfering with the ICT product and so this requirement would not apply. Examples of systems under strict security requirements are systems dealing with intelligence activities, cryptologic activities related to national security, command and control of military forces.</p>
				<p>NOTE 2: Assistive technologies may be required to maintain the same level of security as the standard input mechanisms supported by the platform.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.16 Modifications of states and properties</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements whose state or properties can be modified by a user without the use of assistive technology.</li>
					<li>The security requirements permit assistive technology to programmatically modify states and properties of user interface elements.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the state of user interface elements, whose state can be modified by a user without the use of assistive technology, can be programmatically modified by assistive technologies.</li>
					<li>Check the properties of user interface elements, whose properties can be modified by a user without the use of assistive technologies, can be programmatically modified by assistive technologies.</li>
				</ol>
				<p>Result</p>
				<p>Pass: All checks are true</p>
				<p>Fail: Any check is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.5.2.17"><strong>11.5.2.17 Modifications of values and text</strong></p>
				<p>Where permitted by security requirements, software that provides a user interface shall, by using the services as described in clause 11.5.2.3, allow assistive technologies to modify values and text of user interface elements using the input methods of the platform, where a user can modify these items without the use of assistive technology.</p>
				<p>NOTE 1: In some cases the security requirements imposed on a software product may forbid external software from interfering with the ICT product and so this requirement would not apply. Examples of systems under strict security requirements are systems dealing with intelligence activities, cryptologic activities related to national security, command and control of military forces.</p>
				<p>NOTE 2: Assistive technologies may be required to maintain the same level of security as the standard input mechanisms supported by the platform.</p>
			</td>
			<td>
				<p><strong>C.11.5.2.17 Modifications of values and text</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software evaluated is software that provides a user interface.</li>
					<li>There are user interface elements whose values or text can be modified by a user without the use of assistive technology.</li>
					<li>The security requirements permit assistive technology to programmatically modify values and text of user interface elements.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the values of user interface elements, whose values can be modified by a user without the use of assistive technology, can be modified by assistive technologies using the input methods of the platform.</li>
					<li>Check that the text of user interface elements, whose text can be modified by a user without the use of assistive technology, can be modified by assistive technologies using the input methods of the platform.</li>
				</ol>
				<p>Result</p>
				<p>Pass: all checks are true</p>
				<p>Fail: any check is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.6"><strong>11.6 Documented accessibility usage</strong></p>
			</td>
			<td>
				<p><strong>C.11.6 Documented accessibility usage</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.6.1"><strong>11.6.1 User control of accessibility features</strong></p>
				<p>Where software is a platform it shall provide sufficient modes of operation for user control over those platform accessibility features documented as intended for users.</p>
			</td>
			<td>
				<p><strong>C.11.6.1 User control of accessibility features</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>There are platform features that are defined in the platform documentation as accessibility features intended for users.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that sufficient modes of operation exist where user control over platform features, that are defined in the platform documentation as accessibility features intended for users, is possible.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.6.2"><strong>11.6.2 No disruption of accessibility features</strong></p>
				<p>Where software provides a user interface it shall not disrupt those documented accessibility features that are defined in platform documentation except when requested to do so by the user during the operation of the software.</p>
			</td>
			<td>
				<p><strong>C.11.6.2 No disruption of accessibility features</strong></p>
				<p>Type of assessment</p>
				<p>Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>There are platform features that are defined in the platform documentation as accessibility features.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check if software that provides a user interface disrupts normal operation of platform accessibility features.</li>
					<li>Check if the disruption was specifically requested or confirmed by the user.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is false or both checks are true</p>
				<p>Fail: Check 1 is true and check 2 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.7"><strong>11.7 User preferences</strong></p>
				<p>Where software is not designed to be isolated from its platform, and provides a user interface, that user interface shall follow the values of the user preferences for platform settings for: units of measurement, colour, contrast, font type, font size, and focus cursor except where they are overridden by the user.</p>
				<p>NOTE 1: Software that is isolated from its underlying platform has no access to user settings in the platform and thus cannot adhere to them.</p>
				<p>NOTE 2: For web content, the underlying platform is the user agent.</p>
				<p>NOTE 3: This does not preclude the software from having additional values for a setting as long as there is one mode where the application will follow the system settings even if more restricted.</p>
			</td>
			<td>
				<p><strong>C.11.7 User preferences</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software is software that provides a user interface.</li>
					<li>The software has settings for language, colour, contrast, font type, font size, or focus cursor, that correspond to platform settings.</li>
					<li>The software is not designed to be isolated from its underlying platforms.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the software provides a mode of operation that follows the platform settings.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1, 2 or 3 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.8"><strong>11.8 Authoring tools</strong></p>
			</td>
			<td>
				<p><strong>C.11.8 Authoring tools</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.8.0"><strong>11.8.0 General (informative)</strong></p>
				<p>For those creating web content authoring tools, ATAG 2.0 [i.32] provides information that can be of interest to those who want to go beyond these requirements.</p>
				<p>NOTE: This is applicable both to standalone and to web based authoring tools.</p>
			</td>
			<td>
				<p><strong>C.11.8.0 General (informative)</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.8.1"><strong>11.8.1 Content technology</strong></p>
				<p>Authoring tools shall conform to clauses 11.8.2 to 11.8.5 to the extent that information required for accessibility is supported by the format used for the output of the authoring tool.</p>
			</td>
			<td>
				<p><strong>C.11.8.1 Content technology</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software is an authoring tool.</li>
					<li>The output format of the authoring tool supports information required for accessibility.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check if the authoring tool conforms to 11.8.2 to 11.8.5 to the extent that information required for accessibility is supported by the format used for the output of the authoring tool.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.8.2"><strong>11.8.2 Accessible content creation</strong></p>
				<p>Authoring tools shall enable and guide the production of content that conforms to clauses 9 (Web content) or 10 (Non-Web content) as applicable.</p>
				<p>NOTE: Authoring tools may rely on additional tools where conformance with specific requirements is not achievable by a single tool. For example, a video editing tool may enable the creation of video files for distribution via broadcast television and the web, but authoring of caption files for multiple formats may be provided by a different tool.</p>
			</td>
			<td>
				<p><strong>C.11.8.2 Accessible content creation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software is an authoring tool.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check if the authoring tool has features that enable and guide the production of content that conforms to clauses 9 (Web) and 10 (Non-web documents).</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.8.3"><strong>11.8.3 Preservation of accessibility information in transformations</strong></p>
				<p>If the authoring tool provides restructuring transformations or re-coding transformations, then accessibility information shall be preserved in the output if equivalent mechanisms exist in the content technology of the output.</p>
				<p>NOTE 1: Restructuring transformations are transformations in which the content technology stays the same, but the structural features of the content are changed (e.g. linearizing tables, splitting a document into pages).</p>
				<p>NOTE 2: Re-coding transformations are transformations in which the technology used to encode the content is changed.</p>
			</td>
			<td>
				<p><strong>C.11.8.3 Preservation of accessibility information in transformations</strong></p>
				<p>Type of assessment</p>
				<p>Inspection and Testing</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software is an authoring tool.</li>
					<li>The authoring tool provides restructuring transformations or re-coding transformations.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>For a restructuring transformation, check if the accessibility information is preserved in the output.</li>
					<li>For a restructuring transformation, check if the content technology supports accessibility information for the restructured form of the information.</li>
					<li>For a re-coding transformation, check if the accessibility information is preserved in the output.</li>
					<li>For a re-coding transformation, check if the accessibility information is supported by the technology of the re-coded output.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true or checks 1 and 2 are false or check 3 is true or checks 3 and 4 are false</p>
				<p>Fail: Check 1 is false and check 2 is true</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.8.4"><strong>11.8.4 Repair assistance</strong></p>
				<p>If the accessibility checking functionality of an authoring tool can detect that content does not meet a requirement of clauses 9 (Web) or 10 (Non-web documents) as applicable, then the authoring tool shall provide repair suggestion(s).</p>
				<p>NOTE: This does not preclude automated and semi-automated repair which is possible (and encouraged) for many types of content accessibility problems.</p>
			</td>
			<td>
				<p><strong>C.11.8.4 Repair assistance</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software is an authoring tool.</li>
					<li>The accessibility checking functionality of the authoring tool can detect that content does not meet a requirement of clauses 9 (Web) or 10 (Non-web documents) as applicable.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>The authoring tool provides repair suggestions when content does not meet a requirement of clauses 9 or 10 (as applicable).</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="11.8.5"><strong>11.8.5 Templates</strong></p>
				<p>When an authoring tool provides templates, at least one template that supports the creation of content that conforms to the requirements of clauses 9 (Web) or 10 (Non-web documents) as applicable shall be available and identified as such.</p>
			</td>
			<td>
				<p><strong>C.11.8.5 Templates</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The software is an authoring tool.</li>
					<li>The authoring tool provides templates.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the authoring tool provides at least one template that supports the creation of content that conforms to requirements of clauses 9 (Web content) or 10 (Documents) as applicable.</li>
					<li>Check that at least one template identified in step 1 is available and is identified as conforming to clauses 9 or 10 (as applicable).</li>
				</ol>
				<p>Result</p>
				<p>Pass: Checks 1 and 2 are true</p>
				<p>Fail: Check 1 or 2 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
				<p>NOTE: The identification as conforming to the requirements of clauses 9 or 10 (as applicable) described in check 2 may be described in terms such as "Conformant to WCAG 2.1". Where the identification does not explicitly state that all of the requirements identified in clauses 9 or 10 (as appropriate) are covered, it may be necessary to use the template to create a web site or document and then test that web site or document according to the requirements of clauses 9 or 10 to provide full assurance that the template behaves as required.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12"><strong>12 Documentation and support services</strong></p>
			</td>
			<td>
				<p><strong>C.12 Documentation and support services</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12.1"><strong>12.1 Product documentation</strong></p>
			</td>
			<td>
				<p><strong>C.12.1 Product documentation</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12.1.1"><strong>12.1.1 Accessibility and compatibility features</strong></p>
				<p>Product documentation provided with the ICT whether provided separately or integrated within the ICT shall list and explain how to use the accessibility and compatibility features of the ICT.</p>
				<p>NOTE 1: Accessibility and compatibility features include accessibility features that are built-in and accessibility features that provide compatibility with assistive technology.</p>
				<p>NOTE 2: It is best practice to use WebSchemas/Accessibility 2.0 [i.38] to provide meta data on the accessibility of the ICT.</p>
				<p>NOTE 3: The accessibility statement and help pages are both examples of the provision of product information.</p>
			</td>
			<td>
				<p><strong>C.12.1.1 Accessibility and compatibility features</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Product documentation is supplied with the ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that product documentation provided with the ICT lists and explains how to use the accessibility and compatibility features of the ICT.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12.1.2"><strong>12.1.2 Accessible documentation</strong></p>
				<p>Product documentation provided with the ICT shall be made available in at least one of the following electronic formats:</p>
				<ol>
					<li>a Web format that conforms to the requirements of clause 9, or</li>
					<li>a non-web format that conforms to the requirements of clause 10.</li>
				</ol>
				<p>NOTE 1: This does not preclude the possibility of also providing the product documentation in other formats (electronic, printed or audio) that are not accessible.</p>
				<p>NOTE 2: It also does not preclude the possibility of providing alternate formats that meet the needs of some specific type of users (e.g. Braille documents for blind people or easy-to-read information for persons with limited cognitive language and learning abilities).</p>
				<p>NOTE 3: Where documentation is incorporated into the ICT the documentation falls under the requirements for accessibility in the present document.</p>
				<p>NOTE 4: A user agent that supports automatic media conversion would be beneficial to enhancing accessibility.</p>
			</td>
			<td>
				<p><strong>C.12.1.2 Accessible documentation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Product documentation in electronic format is supplied with the ICT.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that product documentation in electronic format provided with the ICT conforms to the requirements of clauses 9 or 10 as appropriate.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12.2"><strong>12.2 Support services</strong></p>
			</td>
			<td>
				<p><strong>C.12.2 Support services</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12.2.1"><strong>12.2.1 General (informative)</strong></p>
				<p>ICT support services include, but are not limited to: help desks, call centres, technical support, relay services and training services.</p>
			</td>
			<td>
				<p><strong>C.12.2.1 General (informative)</strong></p>
				<p>Clause 12.2.1 is informative only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12.2.2"><strong>12.2.2 Information on accessibility and compatibility features</strong></p>
				<p>ICT support services shall provide information on the accessibility and compatibility features that are mentioned in the product documentation.</p>
				<p>NOTE: Accessibility and compatibility features include accessibility features that are built-in and accessibility features that provide compatibility with assistive technology.</p>
			</td>
			<td>
				<p><strong>C.12.2.2 Information on accessibility and compatibility features</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT support services are provided.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT support services provide information on the accessibility and compatibility features that are included in the product documentation.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12.2.3"><strong>12.2.3 Effective communication</strong></p>
				<p>ICT support services shall accommodate the communication needs of individuals with disabilities either directly or through a referral point.</p>
			</td>
			<td>
				<p><strong>C.12.2.3 Effective communication</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>ICT support services are provided.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the ICT support services accommodate the communication needs of individuals with disabilities either directly or through a referral point.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
				<p>NOTE: The provision of any level of support for the communication needs of individuals with disabilities constitutes a pass of this requirement. Suppliers may wish to provide further information about the level of support that is provided to enable the adequacy and quality of the support to be judged.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="12.2.4"><strong>12.2.4 Accessible documentation</strong></p>
				<p>Documentation provided by support services shall be made available in at least one of the following electronic formats:</p>
				<p>a) a Web format that conforms to clause 9; or</p>
				<p>b) a non-web format that conforms to clause 10.</p>
				<p>NOTE 1: This does not preclude the possibility of also providing the documentation in other formats (electronic or printed) that are not accessible.</p>
				<p>NOTE 2: It also does not preclude the possibility of providing alternate formats that meet the needs of some specific type of users (e.g. Braille documents for blind people or easy-to-read information for persons with limited cognitive language and learning abilities).</p>
				<p>NOTE 3: Where the support documentation is incorporated into the ICT, the documentation falls under the requirements for accessibility in the present document.</p>
				<p>NOTE 4: A user agent that supports automatic media conversion would be beneficial to enhancing accessibility.</p>
			</td>
			<td>
				<p><strong>C.12.2.4 Accessible documentation</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>Documentation is provided by the ICT support services.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that documentation in electronic format provided by the ICT support services conforms to the requirements of clauses 9 or 10 as appropriate.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13"><strong>13 ICT providing relay or emergency service access</strong></p>
			</td>
			<td>
				<p><strong>C.13 ICT providing relay or emergency service access</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.1"><strong>13.1 Relay services requirements</strong></p>
			</td>
			<td>
				<p><strong>C.13.1 Relay services requirements</strong></p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.1.1"><strong>13.1.1 General (informative)</strong></p>
				<p>Relay services enable users of different modes of communication e.g. text, sign, speech, to interact remotely through ICT with two-way communication by providing conversion between the modes of communication, normally by a human operator.</p>
				<p>It is best practice to meet the applicable relay service requirements of ETSI ES 202 975 [i.5].</p>
			</td>
			<td>
				<p><strong>C.13.1.1 General (informative)</strong></p>
				<p>Clause 13.1.1 is informative only and contains no requirements requiring test.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.1.2"><strong>13.1.2 Text relay services</strong></p>
				<p>Where ICT is intended to provide a text relay service, the text relay service shall enable text users and speech users to interact by providing conversion between the two modes of communication.</p>
			</td>
			<td>
				<p><strong>C.13.1.2 Text relay services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The service is a text relay service.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the service enables text users and speech users to interact by providing conversion between the two modes of communication.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.1.3"><strong>13.1.3 Sign relay services</strong></p>
				<p>Where ICT is intended to provide a sign relay service, the sign relay service shall enable sign language users and speech users to interact by providing conversion between the two modes of communication.</p>
				<p>NOTE: Sign relay services are also sometimes referred to as sign language relay services or video relay services.</p>
			</td>
			<td>
				<p><strong>C.13.1.3 Sign relay services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The service is a sign relay service.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the service enables sign language users and speech users to interact by providing conversion between the two modes of communication.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.1.4"><strong>13.1.4 Lip-reading relay services</strong></p>
				<p>Where ICT is intended to provide a lip-reading relay service, the lip-reading service shall enable lip-readers and voice telephone users to interact by providing conversion between the two modes of communication.</p>
			</td>
			<td>
				<p><strong>C.13.1.4 Lip-reading relay services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The service is a lip-reading relay service.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the service enables lip-readers and voice telephone users to interact by providing conversion between the two modes of communication.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.1.5"><strong>13.1.5 Captioned telephony services</strong></p>
				<p>Where ICT is intended to provide a captioned telephony service, the captioned telephony service shall assist a deaf or hard of hearing user in a spoken dialogue by providing text captions translating the incoming part of the conversation.</p>
			</td>
			<td>
				<p><strong>C.13.1.5 Captioned telephony services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The service is a captioned telephony service.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the service assists a deaf or hard of hearing user in a spoken dialogue by providing text captions translating the incoming part of the conversation.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.1.6"><strong>13.1.6 Speech to speech relay services</strong></p>
				<p>Where ICT is intended to provide a speech to speech relay service, the speech to speech relay service shall enable telephone users who are speech impaired, have limited cognitive, language and learning abilities, as well as any other user, to communicate by providing assistance between them.</p>
			</td>
			<td>
				<p><strong>C.13.1.6 Speech to speech relay services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The service is a speech to speech relay service.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the service enables telephone users who are speech impaired, or have limited cognitive, language and learning abilities, to communicate by providing assistance between them.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.2"><strong>13.2 Access to relay services</strong></p>
				<p>Where ICT systems support two-way communication, and the system is specified for use with relay services, access to those relay services shall not be prevented for outgoing and incoming calls involving: voice, RTT, or video, either individually or in combinations supported by both the relay service and the ICT system.</p>
				<p>NOTE 1: The purpose of this requirement is to achieve functionally equivalent communication access by persons with disabilities.</p>
				<p>NOTE 2: The system may be specified as needing to work with relay services by, for example: procurers, regulators, or product specifications.</p>
			</td>
			<td>
				<p><strong>C.13.2 Access to relay services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT system supports two-way communication.</li>
					<li>A set of relay services for two-way communication is specified.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the system does not prevent access to those relay services for incoming and outgoing calls.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
		<tr>
			<td>
				<p id="13.3"><strong>13.3 Access to emergency services</strong></p>
				<p>Where ICT systems support two-way communication, and the system is specified for use with emergency services, access to those emergency services shall not be prevented for outgoing and incoming calls involving: voice, RTT, or video, either individually or in combinations supported by both the emergency service and the ICT system.</p>
				<p>NOTE 1: The purpose of this requirement is to achieve functionally equivalent communication access to the emergency service by persons with disabilities.</p>
				<p>NOTE 2: The system may be specified as needing to work with emergency services by, for example: procurers, regulators, or product specifications.</p>
			</td>
			<td>
				<p><strong>C.13.3 Access to emergency services</strong></p>
				<p>Type of assessment</p>
				<p>Inspection</p>
				<p>Pre-conditions</p>
				<ol>
					<li>The ICT system supports two-way communication.</li>
					<li>A set of emergency services for two-way communication is specified.</li>
				</ol>
				<p>Procedure</p>
				<ol>
					<li>Check that the system does not prevent access to those emergency services for outgoing and incoming calls.</li>
				</ol>
				<p>Result</p>
				<p>Pass: Check 1 is true</p>
				<p>Fail: Check 1 is false</p>
				<p>Not applicable: Pre-condition 1 or 2 is not met.</p>
			</td>
		</tr>
	</tbody>
</table>

## Annex - Tables and figures (from EN 301 549)

{% include "information-and-communication-technology-ict-accessibility-requirements/table5-1.njk" %}
{% include "information-and-communication-technology-ict-accessibility-requirements/figures.njk" %}
{% include "information-and-communication-technology-ict-accessibility-requirements/table9-1.njk" %}
{% include "information-and-communication-technology-ict-accessibility-requirements/chapter14.njk" %}

## Annex - References (from EN 301 549)

### 2.1 Normative references

References are specific, identified by date of publication and/or edition number or version number. Only the cited version applies.

Referenced documents which are not found to be publicly available in the expected location might be found at [ETSI References in docbox](https://docbox.etsi.org/Reference).

NOTE: While any hyperlinks included in this clause were valid at the time of publication, ETSI cannot guarantee their long-term validity.

The following referenced documents are necessary for the application of the present document.

<ul class="list-unstyled">
  <li><strong>[1]</strong> ETSI ETS 300 381 (Edition 1) (December 1994): "Telephony for hearing impaired people; Inductive coupling of telephone earphones to hearing aids".</li>
  <li><strong>[2]</strong> ETSI ES 200 381-1 (V1.2.1) (October 2012): "Telephony for hearing impaired people; Inductive coupling of telephone earphones to hearing aids Part 1: Fixed-line speech terminals".</li>
  <li><strong>[3]</strong> ETSI ES 200 381-2 (V1.1.1) (October 2012): "Telephony for hearing impaired people; Inductive coupling of telephone earphones to hearing aids; Part 2: Cellular speech terminals".</li>
  <li><strong>[4]</strong> W3C Recommendation (December 2008) /ISO/IEC 40500:2012: "Web Content Accessibility Guidelines (WCAG) 2.0".
    <ul>
      <li>NOTE: Available at <a href="https://www.w3.org/TR/WCAG20/">WCAG 2.0</a>.</li>
    </ul>
  </li>
  <li><strong>[5]</strong> W3C Proposed Recommendation (June 2018): "Web Content Accessibility Guidelines (WCAG) 2.1".
    <ul>
      <li>NOTE: Available at <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a>.</li>
    </ul>
  </li>
</ul>

References are either specific (identified by date of publication and/or edition number or version number) or non-specific. For specific references, only the cited version applies. For non-specific references, the latest version of the referenced document (including any amendments) applies.

NOTE: While any hyperlinks included in this clause were valid at the time of publication, ETSI cannot guarantee their long-term validity.

The following referenced documents are not necessary for the application of the present document but they assist the user with regard to a particular subject area.

<ul class="list-unstyled">
  <li><strong>[i.1]</strong> ANSI/IEEE C63.19 (2011): "American National Standard Method of Measurement of Compatibility between Wireless Communication Devices and Hearing Aids".</li>
  <li><strong>[i.2]</strong> ANSI/TIA-4965: "Receive volume control requirements for digital and analogue wireline terminals".</li>
  <li><strong>[i.3]</strong> European Commission M 376-EN: "Standardization Mandate to CEN, CENELEC and ETSI in support of European accessibility requirements for public procurement of products and services in the ICT domain".</li>
  <li><strong>[i.4]</strong> ETSI EG 201 013: "Human Factors (HF); Definitions, abbreviations and symbols".</li>
  <li><strong>[i.5]</strong> ETSI ES 202 975: "Human Factors (HF); Requirements for relay services".</li>
  <li><strong>[i.6]</strong> ETSI ETS 300 767: "Human Factors (HF); Telephone Prepayment Cards; Tactile Identifier".</li>
  <li><strong>[i.7]</strong> ETSI/CEN/CENELEC TR 101 550: "Documents relevant to EN 301 549 'Accessibility requirements suitable for public procurement of ICT products and services in Europe'".</li>
  <li><strong>[i.8]</strong> ETSI/CEN/CENELEC TR 101 551: "Guidelines on the use of accessibility award criteria suitable for public procurement of ICT products and services in Europe".</li>
  <li><strong>[i.9]</strong> ETSI TR 102 612: "Human Factors (HF); European accessibility requirements for public procurement of products and services in the ICT domain (European Commission Mandate M 376, Phase 1)".</li>
  <li><strong>[i.10]</strong> ETSI TS 126 114: "Universal Mobile Telecommunications System (UMTS); LTE; IP Multimedia Subsystem (IMS); Multimedia telephony; Media handling and interaction (3GPP TS 26.114)".</li>
  <li><strong>[i.11]</strong> ETSI TS 122 173: "Digital cellular telecommunications system (Phase 2+) (GSM); Universal Mobile Telecommunications System (UMTS); LTE; IP Multimedia Core Network Subsystem (IMS) Multimedia Telephony Service and supplementary services; Stage 1 (3GPP TS 22.173)".</li>
  <li><strong>[i.12]</strong> ETSI TS 134 229: "Universal Mobile Telecommunications System (UMTS); LTE; Internet Protocol (IP) multimedia call control protocol based on Session Initiation Protocol (SIP) and Session Description Protocol (SDP); User Equipment (UE) conformance specification (3GPP TS 34.229)".</li>
  <li><strong>[i.13]</strong> IETF RFC 4103 (2005): "RTP Payload for Text Conversation".</li>
  <li><strong>[i.14]</strong> ISO/IEC 17007:2009: "Conformity assessment - Guidance for drafting normative documents suitable for use for conformity assessment".</li>
  <li><strong>[i.15]</strong> ISO 9241-11:2018: "Ergonomics of human-system interaction - Part 11: Usability: Definitions and concepts".</li>
  <li><strong>[i.16]</strong> ISO 9241-110:2006: "Ergonomics of human-system interaction - Part 110: Dialogue principles".</li>
  <li><strong>[i.17]</strong> ISO 9241-171:2008: "Ergonomics of human-system interaction - Part 171: Guidance on software accessibility".</li>
  <li><strong>[i.18]</strong> Void.</li>
  <li><strong>[i.19]</strong> ISO/IEC 13066-1:2011: "Information technology - Interoperability with assistive technology (AT) - Part 1: Requirements and recommendations for interoperability".</li>
  <li><strong>[i.20]</strong> Recommendation ITU-T E.161 (2001): "Arrangement of digits, letters and symbols on telephones and other devices that can be used for gaining access to a telephone network".</li>
  <li><strong>[i.21]</strong> Recommendation ITU-T G.722 (1988): "7 kHz audio-coding within 64 kbit/s".</li>
  <li><strong>[i.22]</strong> Recommendation ITU-T G.722.2 (2003): "Wideband coding of speech at around 16 kbit/s using Adaptive Multi-Rate Wideband (AMR-WB)".</li>
  <li><strong>[i.23]</strong> Recommendation ITU-T V.18 (2000): "Operational and interworking requirements for DCEs operating in the text telephone mode".</li>
  <li><strong>[i.24]</strong> TIA-1083-A (2010): "Telecommunications; Telephone Terminal equipment; Handset magnetic measurement procedures and performance requirements".</li>
  <li><strong>[i.25]</strong> Section 508 of the United States Rehabilitation Act of 1973, revised 2017.
    <ul>
      <li>NOTE: Available at <a href="https://www.section508.gov/manage/laws-and-policies">https://www.section508.gov/manage/laws-and-policies</a>.</li>
    </ul>
  </li>
  <li><strong>[i.26]</strong> W3C Working Group Note 5 September 2013: "Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT)".
    <ul>
      <li>NOTE: Available at <a href="http://www.w3.org/TR/wcag2ict/">http://www.w3.org/TR/wcag2ict/</a>.</li>
    </ul>
  </li>
  <li><strong>[i.27]</strong> M 554 Commission Implementing Decision C(2017)2585 of 27.4.2017 on a standardisation request to the European standardisation organisations in support of Directive (EU) 2016/2102 of the European Parliament and of the Council on the accessibility of the websites and mobile applications of public sector bodies.</li>
  <li><strong>[i.28]</strong> Directive (EU) 2016/2102 of the European Parliament and of the Council of 26 October 2016 on the accessibility of the websites and mobile applications of public sector bodies.</li>
  <li><strong>[i.29]</strong> ETSI/CEN/CENELEC EN 301 549 (V2.1.2) (August 2018): "Accessibility requirements for ICT products and services".</li>
  <li><strong>[i.30]</strong> ETSI/CEN/CENELEC TR 101 552: "Guidance for the application of conformity assessment to accessibility requirements for public procurement of ICT products and services in Europe".</li>
  <li><strong>[i.31]</strong> ISO/IEC TS 20071-25:2017: "Information technology - User interface component accessibility - Part 25: Guidance on the audio presentation of text in videos, including captions, subtitles and other on-screen text".</li>
  <li><strong>[i.32]</strong> W3C Recommendation (September 2015): "Authoring Tool Accessibility Guidelines (ATAG) 2.0".
    <ul>
      <li>NOTE: Available at <a href="http://www.w3.org/TR/ATAG20/">http://www.w3.org/TR/ATAG20/</a>.</li>
    </ul>
  </li>
  <li><strong>[i.33]</strong> W3C Recommendation (September 2015): "User Agent Accessibility Guidelines (UAAG) 2.0".
    <ul>
      <li>NOTE: Available at <a href="http://www.w3.org/TR/UAAG20/">http://www.w3.org/TR/UAAG20/</a>.</li>
    </ul>
  </li>
  <li><strong>[i.34]</strong> ISO 21542:2011: "Building construction - Accessibility and usability of the built environment".</li>
  <li><strong>[i.35]</strong> ISO/IEC Guide 71:2014: "Guide for addressing accessibility in standards".</li>
  <li><strong>[i.36]</strong> Recommendation ITU-T T.140 (1988): "Protocol for multimedia application text conversation".</li>
  <li><strong>[i.37]</strong> Recommendation ITU-T F.703 (2000): "Multimedia conversational services".</li>
  <li><strong>[i.38]</strong> W3C WebSchemas/Accessibility 2.0.
    <ul>
      <li>NOTE: Available at <a href="https://www.w3.org/wiki/WebSchemas/Accessibility">https://www.w3.org/wiki/WebSchemas/Accessibility</a>.</li>
    </ul>
  </li>
  <li><strong>[i.39]</strong> Void.</li>
  <li><strong>[i.40]</strong> Directive 2014/24/EU of the European Parliament and of the Council of 26 February 2014 on public procurement and repealing Directive 2004/18/EC.</li>
</ul>

## Annex – Definition of terms, symbols and abbreviations (from EN 301 549)

### 3.1 Terms

For the purposes of the present document, the terms given in ETSI EG 201 013 \[i.4\] and the following apply:

<dl>
  <dt>accessibility</dt>
  <dd>extent to which products, systems, services, environments and facilities can be used by people from a population with the widest range of user needs, characteristics and capabilities, to achieve identified goals in identified contexts of use (from ISO 9241-11:2018 [i.15])
    <ul>
      <li>NOTE 1: Context of use includes direct use or use supported by assistive technologies.</li>
      <li>NOTE 2: The context in which the ICT is used may affect its overall accessibility. This context could include other products and services with which the ICT may interact.</li>
    </ul>
  </dd>
  <dt>access space</dt>
  <dd>space intended to be occupied by the person, including their Assistive Technology, while they are using the product</dd>
  <dt>Assistive Listening Devices (ALDs)</dt>
  <dd>devices that help separate the sounds, particularly speech, that a person wants to hear from background noise by bringing sound directly into the ear
    <ul>
      <li>NOTE: These are often found in meetings and public venues such as plays, concerts and places of worship. They can also be used at home with televisions and other products with auditory output.</li>
    </ul>
  </dd>
  <dt>Assistive Technology (AT)</dt>
  <dd>equipment, product system, hardware, software or service that is used to increase, maintain or improve capabilities of individuals (from ISO/IEC Guide 71:2014 [i.35])
    <ul>
      <li>NOTE 1: Assistive technology is an umbrella term that is broader than assistive products.</li>
      <li>NOTE 2: Assistive technology can include assistive services, and professional services needed for assessment, recommendation and provision.</li>
      <li>NOTE 3: Where ICT does not support directly connected assistive technology, but which can be operated by a system connected over a network or other remote connection, such a separate system (with any included assistive technology) can also be considered assistive technology. This is an additional note, not included in ISO/IEC Guide 71:2014 [i.35].</li>
    </ul>
  </dd>
  <dt>audio description</dt>
  <dd>additional audible narrative, interleaved with the dialogue, which describes the significant aspects of the visual content of audio-visual media that cannot be understood from the main soundtrack alone
    <ul>
      <li>NOTE: This is also variously described using terms such as "video description" or variants such as "descriptive narration".</li>
    </ul>
  </dd>
  <dt>authoring tool</dt>
  <dd>software that can be used to create or modify content
    <ul>
      <li>NOTE 1: An authoring tool may be used by a single user or multiple users working collaboratively.</li>
      <li>NOTE 2: An authoring tool may be a single stand-alone application or be comprised of collections of applications.</li>
      <li>NOTE 3: An authoring tool may produce content that is intended for further modification or for use by end-users.</li>
    </ul>
  </dd>
  <dt>caption</dt>
  <dd>synchronized visual and/or text alternative for both speech and non-speech audio information needed to understand the media content (after WCAG 2.1 [5])
    <ul>
      <li>NOTE: This is also variously described using terms such as "subtitles" or variants such as "subtitles for the deaf and hard-of-hearing".</li>
    </ul>
  </dd>
  <dt>closed functionality</dt>
  <dd>functionality that is limited by characteristics that prevent a user from attaching, installing or using assistive technology</dd>
  <dt>content</dt>
  <dd>information and sensory experience to be communicated to the user by means of software, including code or mark-up that defines the content's structure, presentation, and interactions (after WCAG2ICT [i.26])
    <ul>
      <li>NOTE: Content occurs in three places: web pages, documents and software. When content occurs in a web page or a document, a user agent is needed in order to communicate the content's information and sensory experience to the user. When content occurs in software, a separate user agent is not needed in order to communicate the content's information and sensory experience to the user - the software itself performs that function.</li>
    </ul>
  </dd>
  <dt>context of use</dt>
  <dd>combination of users, goals and tasks, resources, and environment. (from ISO 9241-11:2018 [i.15])
    <ul>
      <li>NOTE: The "environment" in a context of use includes the technical, physical, social, cultural and organizational environments.</li>
    </ul>
  </dd>
  <dt>document</dt>
  <dd>logically distinct assembly of content (such as a file, set of files, or streamed media) that functions as a single entity rather than a collection, that is not part of software and that does not include its own user agent (after WCAG2ICT [i.26])
    <ul>
      <li>NOTE 1: A document always requires a user agent to present its content to the user.</li>
      <li>NOTE 2: Letters, e-mail messages, spreadsheets, books, pictures, presentations, and movies are examples of documents.</li>
      <li>NOTE 3: Software configuration and storage files such as databases and virus definitions, as well as computer instruction files such as source code, batch/script files, and firmware, are examples of files that function as part of software and thus are not examples of documents. If and where software retrieves "information and sensory experience to be communicated to the user" from such files, it is just another part of the content that occurs in software and is covered by WCAG2ICT like any other parts of the software. Where such files contain one or more embedded documents, the embedded documents remain documents under this definition.</li>
      <li>NOTE 4: A collection of files zipped together into an archive, stored within a single virtual hard drive file, or stored in a single encrypted file system file, do not constitute a single document when so collected together. The software that archives/encrypts those files or manages the contents of the virtual hard drive does not function as a user agent for the individually collected files in that collection because that software is not providing a fully functioning presentation of that content.</li>
      <li>NOTE 5: Anything that can present its own content without involving a user agent, such as a self-playing book, is not a document but is software.</li>
      <li>NOTE 6: A single document may be composed of multiple files such as the video content and closed caption text. This fact is not usually apparent to the end-user consuming the document/content.</li>
      <li>NOTE 7: An assembly of files that represented the video, audio, captions and timing files for a movie is an example of a document.</li>
      <li>NOTE 8: A binder file used to bind together the various exhibits for a legal case would not be a document.</li>
      <li>NOTE 9: Documents may contain sub-documents.</li>
    </ul>
  </dd>
  <dt>embedded</dt>
  <dd>directly included in the content that is downloaded to the user agent and its extension, and is intended to be used in rendering the web page
    <ul>
      <li>NOTE: Something that is downloaded using a mechanism on the web page but is not used in rendering the page is not "embedded" in the page.</li>
    </ul>
  </dd>
  <dt>ICT network</dt>
  <dd>technology and resources supporting the connection and operation of interconnected ICT</dd>
  <dt>Information and Communication Technology (ICT)</dt>
  <dd>technology, equipment, or interconnected system or subsystem of equipment for which the principal function is the creation, conversion, duplication, automatic acquisition, storage, analysis, evaluation, manipulation, management, movement, control, display, switching, interchange, transmission, reception, or broadcast of data or information
    <ul>
      <li>NOTE: Examples of ICT are web pages, electronic content, telecommunications products, computers and ancillary equipment, software including mobile applications, information kiosks and transaction machines, videos, IT services, and multifunction office machines which copy, scan, and fax documents.</li>
    </ul>
  </dd>
  <dt>mechanically operable part</dt>
  <dd>operable part that has a mechanical interface to activate, deactivate, or adjust the ICT
    <ul>
      <li>NOTE: Examples of mechanically operable parts include scanner covers, notebook docking stations and lids as well as physical switches and latches.</li>
    </ul>
  </dd>
  <dt>mechanism for private listening</dt>
  <dd>auditory output designed so that only the current user can receive the sound
    <ul>
      <li>NOTE: Personal headsets, directional speakers and audio hoods are examples of mechanisms for private listening.</li>
    </ul>
  </dd>
  <dt>non-text content</dt>
  <dd>content that is not a sequence of characters that can be programmatically determined or where the sequence is not expressing something in human language (after WCAG 2.1 [5])</dd>
  <dt>non-web document</dt>
  <dd>document that is not a web page, not embedded in web pages nor used in the rendering or functioning of the page</dd>
  <dt>non-web software</dt>
  <dd>software that is not a web page, not embedded in web pages nor used in the rendering or functioning of the page</dd>
  <dt>open functionality</dt>
  <dd>functionality that supports access by assistive technology
    <ul>
      <li>NOTE: This is the opposite of closed functionality.</li>
    </ul>
  </dd>
  <dt>operable part</dt>
  <dd>component of ICT used to activate, deactivate, or adjust the ICT
    <ul>
      <li>NOTE 1: Operable parts can be provided in either hardware (see mechanically operable parts, above) or software. An on-screen button is an example of an operable part provided by software.</li>
      <li>NOTE 2: Operable parts do not include parts involved only in maintenance or repair or other actions that are not expected of a typical user if the product is not malfunctioning. These actions include: clearing paper jams internal to the machine, replacing items or parts internal to the machine that may expose the end user to sharp or hot surfaces, replacing or repairing items designated by manufacturers as service or maintenance items in user documentation.</li>
    </ul>
  </dd>
  <dt>platform software (platform)</dt>
  <dd>collection of software components that runs on an underlying software or hardware layer, and that provides a set of software services to other software components that allows those applications to be isolated from the underlying software or hardware layer (after ISO/IEC 13066-1 [i.19])
    <ul>
      <li>NOTE: A particular software component might play the role of a platform in some situations and a client in others.</li>
    </ul>
  </dd>
  <dt>programmatically determinable</dt>
  <dd>able to be read by software from developer-supplied data in a way that other software, including assistive technologies, can extract and present this information to users in different modalities
    <ul>
      <li>NOTE: WCAG 2.1 uses "determined" where this definition uses "able to be read" (to avoid ambiguity with the word "determined").</li>
    </ul>
  </dd>
  <dt>Real-Time Text (RTT)</dt>
  <dd>form of a text conversation in point to point situations or in multipoint conferencing where the text being entered is sent in such a way that the communication is perceived by the user as being continuous
    <ul>
      <li>NOTE 1: Users will perceive communication as continuous if the delay between text being created by the sender and received by the recipient is less than 500 ms. However, the actual delay will be dependent on the communication network.</li>
      <li>NOTE 2: The creation of text will differ between systems where text is entered on a word-by-word basis (e.g. speech-to-text and predictive-text based systems) and systems where each character is separately generated (e.g. typing on a physical keyboard).</li>
    </ul>
  </dd>
  <dt>satisfies a success criterion</dt>
  <dd>success criterion does not evaluate to "false" when applied to the ICT (after WCAG 2.1 [5])</dd>
  <dt>single user connection</dt>
  <dd>connection that consists of sound, RTT or video (or a combination of two or three of those media) that is established by a single user action
    <ul>
      <li>NOTE: Even though the different media may travel over different channels, and more than one piece of hardware may be involved, it appears to the user like a single connection, and is treated by any intermediate technologies (e.g. network, auto-reception) as a single connection for purposes such as transfer.</li>
    </ul>
  </dd>
  <dt>spoken captions/subtitles audio captions/subtitles</dt>
  <dd>captions/subtitles that are voiced over the audiovisual content (from ISO/IEC TS 20071-25 [i.31])</dd>
  <dt>stationary ICT</dt>
  <dd>ICT that stands on the floor, or is mounted on a wall or other immovable structure, and is not intended to be moved by its user
    <ul>
      <li>NOTE 1: Typically, stationary ICT rests on the ground (such as an information kiosk) or is installed in a wall (such as a machine that dispenses cash or performs other banking services).</li>
      <li>NOTE 2: A manufacturer cannot control the height of ICT that is put on a table by someone else, but they are able to control the reach dimensions of self-contained ICT that rests on the ground and can specify the heights for installation in walls.</li>
    </ul>
  </dd>
  <dt>terminal</dt>
  <dd>combination of hardware and/or software with which the end user directly interacts and that provides the user interface
    <ul>
      <li>NOTE 1: The hardware may consist of more than one device working together e.g. a mobile device and a computer.</li>
      <li>NOTE 2: For some systems, the software that provides the user interface may reside on more than one device such as a telephone and a server.</li>
    </ul>
  </dd>
  <dt>turn-taking</dt>
  <dd>type of organization in conversation and discourse where participants speak one at a time in alternating turns</dd>
  <dt>user agent</dt>
  <dd>software that retrieves and presents content for users (after WCAG 2.1 [5])
    <ul>
      <li>NOTE 1: Software that only displays the content contained within it is treated as software and not considered to be a user agent.</li>
      <li>NOTE 2: An example of software that is not a user agent is a calculator application that does not retrieve the calculations from outside the software to present it to a user. In this case, the calculator software is not a user agent, it is simply software with a user interface.</li>
      <li>NOTE 3: Software that only shows a preview of content such as a thumbnail or other non-fully functioning presentation is not providing user agent functionality.</li>
    </ul>
  </dd>
  <dt>user interface</dt>
  <dd>all components of an interactive system (software or hardware) that provide information and/or controls for the user to accomplish specific tasks with the interactive system (from ISO 9241-110 [i.16])</dd>
  <dt>user interface element</dt>
  <dd>entity of the user interface that is presented to the user by the software (after ISO 9241-171 [i.17])
    <ul>
      <li>NOTE 1: This term is also known as "user interface component".</li>
      <li>NOTE 2: User-interface elements can be interactive or not.</li>
    </ul>
  </dd>
  <dt>web content</dt>
  <dd>content that belongs to a web page, and that is used in the rendering or that is intended to be used in the rendering of the web page</dd>
  <dt>web page</dt>
  <dd>non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent (after WCAG 2.1 [5])</dd>
</dl>

### 3.2 Symbols

Void

{% include "information-and-communication-technology-ict-accessibility-requirements/abbreviations.njk" %}
