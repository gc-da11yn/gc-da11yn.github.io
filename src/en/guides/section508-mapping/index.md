---
title: Mapping between Revised Section 508 and EN 301 549 (2014, 2018, 2019 and 2021)
layout: layouts/base.njk
description: "As the <a href='https://www.etsi.org/human-factors-accessibility/en-301-549-v3-the-harmonized-european-standard-for-ict-accessibility'>EN 301 549 standards</a> continue to evolve and release updates, this document shows the progression of the <a href='https://www.etsi.org/human-factors-accessibility/en-301-549-v3-the-harmonized-european-standard-for-ict-accessibility'>EN 301 549 standard</a> from 2014 through the proceeding updates of 2018, 2019 and 2021. This information is important as the Government of Canada (<abbr>GC</abbr>) is moving towards adopting the EN 301 549 (2021) as its accessibility standard for ICT. The <abbr title='Government of Canada'>GC</abbr>, as part of the solicitation process, may ask suppliers to provide accessibility conformance reports based on the Voluntary Product Accessibility Template (<abbr>VPAT</abbr>). Each <abbr title='Voluntary Product Accessibility Template'>VPAT</abbr> is based on a specific technical standard – Revised Section 508, EN 301 549, or <a href='https://www.w3.org/TR/WCAG/'>Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)</a>. Suppliers, technical authorities and contracting authorities need to understand the differences between these standards to ensure that the accessibility requirements are properly addressed."
---
<div class="well">

## Samples of table markup

- [Table as is](#table-as-is)
- [Content not in a table layout](#regular-text)
- [With icons removed columns with change](#icons)

All tables are using the [Web Experience Toolkit filtered tables](https://wet-boew.github.io/v4.0-ci/demos/tables/tables-en.html).

</div>

## Copyright Notice

This document reproduces relevant Information and Communications Technology (<abbr>ICT</abbr>) accessibility requirements from the EN 301 549 Harmonised European Standard "Accessibility requirements for <abbr title="Information and Communications Technology">ICT</abbr> products and services" (© used under license from European Telecommunications Standards Institute 2014, 2018, 2019 and 2021. © Comité Européen de Normalisation 2014, 2018, 2019, 2021. © Comité Européen de Normalisation Électrotechnique 2014, 2018, 2019 and 2021. All rights reserved.)

## Caveat

This document was created by the Shared Services Canada (<abbr>SSC</abbr>) Accessibility, Accommodations and Adaptive Computer Technology (<abbr>AAACT</abbr>) program in February 2020 and updated in October 2022. To the best of our knowledge, this document was accurate as of October 2022. Shared Service Canada (<abbr>SSC</abbr>) does not warrant any jurisdiction’s reliance on this work. If you have any questions about this document, please [email the AAACT program](mailto:aaact-aatia@ssc-spc.gc.ca?subject=ICT%20Procurement%20-%20standards%20mapping%20document).

## Intended Audience

The intended audience is Technical and Contracting Authorities within SSC and the Government of Canada (<abbr>GC</abbr>), as well as Suppliers who are delivering Information and Communications Technology (<abbr>ICT</abbr>) products and services.

## Background

This document deals with technical standards for <abbr title="Information and Communications Technology">ICT</abbr> accessibility. The most common standards are the [Web Content Accessibility Guidelines \(<abbr>WCAG</abbr>\)](https://www.w3.org/TR/WCAG/), Revised Section 508 and EN 301 549 Harmonized European Standard for <abbr title="Information and Communications Technology">ICT</abbr> Accessibility.

The Revised Section 508 (2017) provides the technical standard for the US government to procure accessible products and services. This standard is, by design, closely harmonized with the EN 301 549 (2014) – which drew its requirements largely from the original Section 508 standards and <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0. Consequently, these standards are very similar but do contain key differences. The EN 301 549 has been updated four times since the release of the Revised Section 508, introducing further differences between the standards.

## Purpose

The purpose of this document is to identify the similarities and differences between Revised Section 508 and the EN 301 549 standards.

As the EN 301 549 standards continue to evolve and release updates, this document shows the progression of the EN 301 549 standards from 2014 through the proceeding updates of 2018, 2019 and 2021. This information is important as the GC is moving towards adopting the EN 301 549 (2021) as its accessibility standard for ICT. The GC, as part of the solicitation process, may ask suppliers to provide accessibility conformance reports based on the Voluntary Product Accessibility Template (<abbr>VPAT</abbr>). Each VPAT is based on a specific technical standard – Revised Section 508, EN 301 549, or <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>. Suppliers, technical authorities and contracting authorities need to understand the differences between these standards to ensure that the accessibility requirements are properly addressed.

## Summary of differences

### WCAG to Revised Section 508 / EN 301 549

<abbr title="Web Content Accessibility Guidelines">WCAG</abbr>, while technology-agnostic, is typically applicable to websites and web applications. For these products, specifying WCAG 2.0 level AA or 2.1 level AA as a technical standard may be sufficient. However, the other standards include additional requirements which may apply to web applications that provide any of the following features: documented accessibility features, authoring tools, two-way communication, video and conversion of information between electronic formats. The other standards also include requirements for support and documentation, which may apply to website or web application procurements.

Through the WCAG2ICT Task Force, the requirements of <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> have been adapted to more precisely address the requirements for other kinds of ICT including non-web software and non-web documents. These adaptations have been integrated into Revised Section 508 and EN 301 549, so specifying those standards will result in clearer accessibility requirements for non-web ICT products than specifying <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> would.

While Revised Section 508 and EN 301 549 include WCAG leveled requirements, these standards have a broader scope. For hardware ICT and ICT services, WCAG will not properly address accessibility requirements. If the functionality of the product or service may not be fully addressed by <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>, GC procurements should specify the EN 301 549 standard.

### Revised Section 508 to EN 301 549 (2014)

These standards are closely harmonized. Some requirements vary in specificity, with the EN 301 549 usually taking a more general approach. Revised Section 508 requirements may refer to specific US standards, while the EN 301 549 either includes the relevant specifications within the document or refers to international standards. Some general requirements of Revised Section 508 are only addressed in the Software chapter of the EN 301 549, so the Software requirements may need to be included even for hardware devices which have displays.

### EN 301 549 (2014) to EN 301 549 (2018)

Primarily, <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>-related chapters (9, 10 and 11) differ between these versions, along with several explanatory updates, stylistic rewordings, numbering changes, and functional changes. The 2014 version includes all <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0 level A and AA success criteria, while the 2018 version is updated to directly reference all <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 level A and AA success criteria. (Although the 2018 and 2019 versions do not duplicate WCAG text, we have included the new requirements with the text in this document for clarity.) The numbering in <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>-related chapters in the 2018 version directly follows WCAG 2.1 success criteria. For example, clause 9.2.3.1 of the EN 301 549 refers to <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> success criterion 2.3.1.

### EN 301 549 (2018) to EN 301 549 (2019)

The majority of changes are stylistic rewordings and additional explanatory notes. There are 14 new requirements, primarily relating to use with limited hearing. A few requirements from the 2018 version have been split up or consolidated. Requirements relating to physical access to <abbr title="Information and Communications Technology">ICT</abbr> have been reworked into “8.3 Stationary <abbr title="Information and Communications Technology">ICT</abbr>”. Numbering is otherwise consistent between versions.

### EN 301 549 (2019) to EN 301 549 (2021)

The EN 301 549 V3.2.1 (2021) document was developed from EN 301 549 V2.1.2 (2018). There are no new requirements. The Annex F track changes table, has been added for future releases. Some clarification in 7.1.1 concerning captioning but numbering is otherwise consistent between versions. The numbering in WCAG-related chapters 9, 10 and 11 in the 2021 version directly follows <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1 success criteria. For example, clause 9.2.3.1 of the EN 301 549 (2021) refers to <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> success criterion 2.3.1. As stated in the footnotes, there are items that point to clauses that are not included in this document. They are only included if it is a new requirement and it points only to the <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> guidelines.

## Sources

- [European Telecommunications Standards Institute, *EN 301 549 V1.1.1 (2014-02)*, 2014, Accessed on: Dec. 23, 2019](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/01.01.01_60/en_301549v010101p.pdf).
- [European Telecommunications Standards Institute, *EN 301 549 V2.1.2 (2018-08)*, 2018, Accessed on: Dec. 23, 2019](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf).
- [European Telecommunications Standards Institute, *EN 301 549 V3.1.1 (2019-11)*, 2019, Accessed on: Dec. 23, 2019](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.01.01_60/en_301549v030101p.pdf).
- [European Telecommunications Standards Institute, *EN 301 549 V3.2.1 (2021-03)*, 2021, Accessed on: July 19, 2021](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf).
- [United States Access Board, *Text of the Standards and Guidelines*, 2017, Accessed on Jan. 31, 2020](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines).

## Glossary

<dl>
    <dt>Stylistic rewording</dt>
    <dd>The text of the criterion modifies what is said, but does not modify what the criterion asks for, nor does it add new content or stipulations to the existing criterion.</dd>
    <dt>Functional change</dt>
    <dd>The text of the criterion significantly changes what the criterion is asking for, for example: the word “should” (denoting a recommendation) is replaced by the word “shall” (denoting a requirement).</dd>
    <dt>Mapping</dt>
    <dd>the text has content or stipulations that clarify the purpose of the criterion without changing its purpose outright, such as specifying the source of a document.</dd>
    <dt>Numbering change</dt>
    <dd>The numbering is the criterion is updated due to either integration of WCAG numbering into the document, or changing the order in which they appear in the document for better flow and understanding</dd>
    <dt>New requirement</dt>
    <dd>A criterion that does not exist in a previous version of the EN 301 549 document. Several new criteria were added in the 2019 version that do not appear in either the 2014 or 2018 version</dd>
</dl>

### Changes between versions of EN 301 549 are emphasized

1. For changes in hyperlinks the changes are reflected in bold, using the strong blue under style
2. For changes in text the changes are reflected in bold, using the strong style
3. For changes in the clause title the changes are reflected in bold, using the strong blue style

## Table of content

- [Chapter 2 Scoping Requirements](#chapter-2-scoping-requirements)
- [Chapter 3 Functional Performance Statements](#chapter-3-functional-performance-statements)
- [Chapter 4 Hardware](#chapter-4-hardware)

<h2 id="table-as-is">Table as is</h2>

This is an example of the table as it is in the Word document.

<h2 id="chapter-2-scoping-requirements">Chapter 2 Scoping Requirements</h2>
<table class="wb-tables table table-bordered">
    <thead>
        <tr>
            <th>Revised Section 508</th>
            <th>EN 301 549 V1.1.1 (2014)</th>
            <th>508 to 2014</th>
            <th>EN 301 549 V2.1.2 (2018)</th>
            <th>2014 to 2018</th>
            <th>EN 301 549 V3.1.1 (2019)</th>
            <th>2018 to 2019</th>
            <th>EN 301 549 V3.2.1 (2021)</th>
            <th>2019 to 2021</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>E207.2 WCAG Conformance</p>
                <p>User interface components and content of platforms and applications shall conform to Level A and Level AA Success Criteria and Conformance Requirements specified for web pages in <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">WCAG 2.0.</a></p>
                <p>EXCEPTIONS:</p>
                <ol type="1">
                    <li>
                        <p>Software that is assistive technology and that supports the accessibility services of the platform shall not be required to conform to E207.2.</p>
                    </li>
                    <li>
                        <p>Non-Web software shall not be required to conform to the following four Success Criteria in WCAG 2.0: 2.4.1 Bypass Blocks; 2.4.5 Multiple Ways; 3.2.3 Consistent Navigation; and 3.2.4 Consistent Identification.</p>
                    </li>
                    <li>
                        <p>Non-Web software shall not be required to conform to Conformance Requirement 3 Complete Processes in WCAG 2.0.</p>
                    </li>
                </ol>
            </td>
            <td>
                <p>Chapters 9, 10, and 11 apply <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/">WCAG 2.0 Level A and Level AA</a> Success Criteria to Web content (<a href="http://mandate376.standards.eu/standard/technical-requirements/#9">Chapter 9</a>), Documents (<a href="http://mandate376.standards.eu/standard/technical-requirements/#10">Chapter 10</a>), and Non-Web Software (<a href="http://mandate376.standards.eu/standard/technical-requirements/#11">Chapter 11</a>).</p>
                <p><a href="https://www.youtube.com/channel/UCdW_0pPNiiPLaLM90_20org">EN 301 549 Video Series</a></p>
            </td>
            <td>Stylistic rewording</td>
            <td>Chapters 9, 10, 11 apply <u><a href="https://www.w3.org/TR/2018/REC-WCAG21-20180605/"><mark>WCAG 2.1</mark> Level A and Level AA</a></u> Success Criteria to Web content (Chapter 9), Documents (Chapter 10), and Non-Web Software (Chapter 11).</td>
            <td>Functional change</td>
            <td>Chapters 9, 10, 11 apply <a href="https://www.w3.org/TR/2018/REC-WCAG21-20180605/">WCAG 2.1 Level A and Level AA</a> Success Criteria to Web content (Chapter 9), Documents (Chapter 10), and Non-Web Software (Chapter 11).</td>
            <td>&nbsp;</td>
            <td>Chapters 9, 10, 11 apply <a href="https://www.w3.org/TR/2018/REC-WCAG21-20180605/">WCAG 2.1 Level A and Level AA</a> Success Criteria to Web content (Chapter 9), Documents (Chapter 10), and Non-Web Software (Chapter 11).</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>

<h2 id="chapter-3-functional-performance-statements">Chapter 3 Functional Performance Statements</h2>
<table class="wb-tables table table-striped">
    <thead>
        <tr>
            <th>Revised Section 508</th>
            <th>EN 301 549 V1.1.1 (2014)</th>
            <th>508 to 2014</th>
            <th>EN 301 549 V2.1.2 (2018)</th>
            <th>2014 to 2018</th>
            <th>EN 301 549 V3.1.1 (2019)</th>
            <th>2018 to 2019</th>
            <th>EN 301 549 V3.2.1 (2021)</th>
            <th>2019 to 2021</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>302.1 Without vision. Where a visual mode of operation is provided, ICT shall provide at least one mode of operation that does not require user vision.</td>
            <td>
                <p>4.2.1 Usage without vision</p>
                <p>Where ICT provides visual modes of operation, some users need ICT to provide at least one mode of operation that does not require vision.</p>
                <p>NOTE: Audio and tactile user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.1 Usage without vision</p>
                <p>Where ICT provides visual modes of operation, some users need ICT to provide at least one mode of operation that does not require vision.</p>
                <p><mark>NOTE 1: A web page or application with a well formed semantic structure can allow users without vision to identify, navigate and interact with a visual user interface.</mark></p>
                <p>NOTE 2: Audio and tactile user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>Explanatory update</td>
            <td>
                <p>4.2.1 Usage without vision</p>
                <p>Where ICT provides visual modes of operation, <mark>the ICT provides</mark> at least one mode of operation that does not require vision. <mark>This is essential for users without vision and benefits many more users in different situations.</mark></p>
                <p>NOTE 1: A web page or application with a well formed semantic structure can allow users without vision to identify, navigate and interact with a visual user interface.</p>
                <p>NOTE 2: Audio and tactile user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.1 Usage without vision</p>
                <p>Where ICT provides visual modes of operation, the ICT provides at least one mode of operation that does not require vision. This is essential for users without vision and benefits many more users in different situations.</p>
                <p>NOTE 1: A web page or application with a well formed semantic structure can allow users without vision to identify, navigate and interact with a visual user interface.</p>
                <p>NOTE 2: Audio and tactile user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>302.2 With limited vision Where a visual mode of operation is provided, ICT shall provide at least one mode of operation that enables users to make use of limited vision.</td>
            <td>
                <p>4.2.2 Usage with limited vision</p>
                <p>Where ICT provides visual modes of operation, some users will need the ICT to provide features that enable users to make better use of their limited vision.</p>
                <p>NOTE 1: Magnification, reduction of required field of vision and control of contrast, brightness and intensity can contribute towards meeting this clause.</p>
                <p>NOTE 2: Where significant features of the user interface are dependent on depth perception, the provision of additional methods of distinguishing between the features may contribute towards meeting this clause.</p>
                <p>NOTE 3: Users with limited vision may also benefit from non-visual access (see clause 4.2.1).</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.2 Usage with limited vision</p>
                <p>Where ICT provides visual modes of operation, some users will need the ICT to provide features that enable users to make better use of their limited vision.</p>
                <p>NOTE 1: Magnification, reduction of required field of vision and control of contrast, brightness and intensity can contribute towards meeting this clause.</p>
                <p>NOTE 2: Where significant features of the user interface are dependent on depth perception, the provision of additional methods of distinguishing between the features may contribute towards meeting this clause.</p>
                <p>NOTE 3: Users with limited vision may also benefit from non-visual access (see clause 4.2.1).</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>4.2.2 Usage with limited vision</p>
                <p>Where ICT provides visual modes of operation, <mark>the ICT provides</mark> features that enable users to make better use of their limited vision. <mark>This is essential for users with limited vision and benefits many more users in different situations.</mark></p>
                <p>NOTE 1: Magnification, reduction of required field of vision and control of contrast, brightness and intensity can contribute towards meeting this clause.</p>
                <p>NOTE 2: Where significant features of the user interface are dependent on depth perception, the provision of additional methods of distinguishing between the features may contribute towards meeting this clause.</p>
                <p>NOTE 3: Users with limited vision may also benefit from non-visual access (see clause 4.2.1).</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.2 Usage with limited vision</p>
                <p>Where ICT provides visual modes of operation, the ICT provides features that enable users to make better use of their limited vision. This is essential for users with limited vision and benefits many more users in different situations.</p>
                <p>NOTE 1: Magnification, reduction of required field of vision and control of contrast, brightness and intensity can contribute towards meeting this clause.</p>
                <p>NOTE 2: Where significant features of the user interface are dependent on depth perception, the provision of additional methods of distinguishing between the features may contribute towards meeting this clause.</p>
                <p>NOTE 3: Users with limited vision may also benefit from non-visual access (see clause 4.2.1).</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>302.3 Without Perception of Color</p>
                <p>Where a visual mode of operation is provided, ICT shall provide at least one visual mode of operation that does not require user perception of color<mark>.</mark></p>
            </td>
            <td>
                <p>4.2.3 Usage without perception of colour</p>
                <p>Where ICT provides visual modes of operation, some users will need the ICT to provide a visual mode of operation that does not require user perception of colour.</p>
                <p>NOTE: Where significant features of the user interface are colour-coded, the provision of additional methods of distinguishing between the features may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.3 Usage without perception of colour</p>
                <p>Where ICT provides visual modes of operation, some users will need the ICT to provide a visual mode of operation that does not require user perception of colour.</p>
                <p>NOTE: Where significant features of the user interface are colour-coded, the provision of additional methods of distinguishing between the features may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>4.2.3 Usage without perception of colour</p>
                <p>Where ICT provides visual modes of operation<mark>, the ICT provides</mark> a visual mode of operation that does not require user perception of colour<mark>. This is essential for users with limited colour perception and benefits many more users in different situations.</mark></p>
                <p>NOTE: Where significant features of the user interface are colour-coded, the provision of additional methods of distinguishing between the features may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.3 Usage without perception of colour</p>
                <p>Where ICT provides visual modes of operation, the ICT provides a visual mode of operation that does not require user perception of colour. This is essential for users with limited colour perception and benefits many more users in different situations.</p>
                <p>NOTE: Where significant features of the user interface are colour-coded, the provision of additional methods of distinguishing between the features may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>302.4 Without Hearing. Where an audible mode of operation is provided, ICT shall provide at least one mode of operation that does not require user hearing.</td>
            <td>
                <p>4.2.4 Usage without hearing</p>
                <p>Where ICT provides auditory modes of operation, some users need ICT to provide at least one mode of operation that does not require hearing.</p>
                <p>NOTE: Visual and tactile user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.4 Usage without hearing</p>
                <p>Where ICT provides auditory modes of operation, some users need ICT to provide at least one mode of operation that does not require hearing.</p>
                <p>NOTE: Visual and tactile user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>4.2.4 Usage without hearing</p>
                <p>Where ICT provides auditory modes of operation<mark>, the ICT provides</mark> at least one mode of operation that does not require hearing. <mark>This is essential for users without hearing and benefits many more users in different situations.</mark></p>
                <p>NOTE: Visual and tactile user interfaces<mark>, including those based on sign language,</mark> may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.4 Usage without hearing</p>
                <p>Where ICT provides auditory modes of operation, the ICT provides at least one mode of operation that does not require hearing. This is essential for users without hearing and benefits many more users in different situations.</p>
                <p>NOTE: Visual and tactile user interfaces, including those based on sign language, may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>302.5 With Limited Hearing</p>
                <p>Where an audible mode of operation is provided, ICT shall provide at least one mode of operation that enables users to make use of limited hearing.</p>
            </td>
            <td>
                <p>4.2.5 Usage with limited hearing</p>
                <p>Where ICT provides auditory modes of operation, some users will need the ICT to provide enhanced audio features.</p>
                <p>NOTE 1: Enhancement of the audio clarity, reduction of background noise, increased range of volume and greater volume in the higher frequency range can contribute towards meeting this clause.</p>
                <p>NOTE 2: Users with limited hearing may also benefit from non-hearing access (see clause 4.2.4).</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.5 Usage with limited hearing</p>
                <p>Where ICT provides auditory modes of operation, some users will need the ICT to provide enhanced audio features.</p>
                <p>NOTE 1: Enhancement of the audio clarity, reduction of background noise, increased range of volume and greater volume in the higher frequency range can contribute towards meeting this clause.</p>
                <p>NOTE 2: Users with limited hearing may also benefit from non-hearing access (see clause 4.2.4).</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>4.2.5 Usage with limited hearing</p>
                <p>Where ICT provides auditory modes of operation<mark>, the ICT provides</mark> enhanced audio features. <mark>This is essential for users with limited hearing and benefits many more users in different situations.</mark></p>
                <p>NOTE 1: Enhancement of the audio clarity, reduction of background noise, <mark>providing a joint monaural option, adjustment of balance of both audio channels</mark>, increased range of volume and greater volume in the higher frequency range can contribute towards meeting this clause.</p>
                <p><mark>NOTE 2: Allowing the use of Assistive Listening Devices, such as headsets with noise cancellation (connected by cable, Bluetooth or WLAN) can contribute towards meeting this clause.</mark></p>
                <p>NOTE 3: Users with limited hearing may also benefit from non-hearing access (see clause 4.2.4).</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
                <p>Functional change</p>
            </td>
            <td>
                <p>4.2.5 Usage with limited hearing</p>
                <p>Where ICT provides auditory modes of operation, the ICT provides enhanced audio features. This is essential for users with limited hearing and benefits many more users in different situations.</p>
                <p>NOTE 1: Enhancement of the audio clarity, reduction of background noise, providing a joint monaural option, adjustment of balance of both audio channels, increased range of volume and greater volume in the higher frequency range can contribute towards meeting this clause.</p>
                <p>NOTE 2: Allowing the use of Assistive Listening Devices, such as headsets with noise cancellation (connected by cable, Bluetooth or WLAN) can contribute towards meeting this clause.</p>
                <p>NOTE 3: Users with limited hearing may also benefit from non-hearing access (see clause 4.2.4).</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>302.6 Without Speech Where speech is used for input, control, or operation, ICT shall provide at least one mode of operation that does not require user speech.</td>
            <td>
                <p>4.2.6 Usage without vocal capability</p>
                <p>Where ICT requires vocal input from users, some users will need the ICT to provide at least one mode of operation that does not require them to generate vocal output.</p>
                <p>NOTE 1: This clause covers the alternatives to the use of orally-generated sounds, including speech, whistles, clicks, etc.</p>
                <p>NOTE 2: Keyboard, pen or touch user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.6 Usage without vocal capability</p>
                <p>Where ICT requires vocal input from users, some users will need the ICT to provide at least one mode of operation that does not require them to generate vocal output.</p>
                <p>NOTE 1: This clause covers the alternatives to the use of orally-generated sounds, including speech, whistles, clicks, etc.</p>
                <p>NOTE 2: Keyboard, pen or touch user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>4.2.6 Usage with no or limited vocal capability</p>
                <p>Where ICT requires vocal input from users<mark>, the ICT provides</mark> at least one mode of operation that does not require them to generate vocal output. <mark>This is essential users with no or limited vocal capability and benefits many more users in different situations.</mark></p>
                <p>NOTE 1: <mark>Vocal output includes speech and other orally generated sounds, such as whistles and clicks.</mark></p>
                <p>NOTE 2: Keyboard, pen or touch user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Functional change</p>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.6 Usage with no or limited vocal capability</p>
                <p>Where ICT requires vocal input from users, the ICT provides at least one mode of operation that does not require them to generate vocal output. This is essential users with no or limited vocal capability and benefits many more users in different situations.</p>
                <p>NOTE 1: Vocal output includes speech and other orally generated sounds, such as whistles and clicks.</p>
                <p>NOTE 2: Keyboard, pen or touch user interfaces may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>302.7 With Limited Manipulation</p>
                <p>Where a manual mode of operation is provided, ICT shall provide at least one mode of operation that does not require fine motor control or simultaneous manual operations.<a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></p>
            </td>
            <td>
                <p>4.2.7 Usage with limited manipulation or strength</p>
                <p>Where ICT requires manual actions, some users will need the ICT to provide features that enable users to make use of the ICT through alternative actions not requiring manipulation or hand strength.</p>
                <p>NOTE 1: Examples of operations that users may not be able to perform include those that require fine motor control, path dependant gestures, pinching, twisting of the wrist, tight grasping, or simultaneous manual actions.</p>
                <p>NOTE 2: One-handed operation, sequential key entry and speech user interfaces may contribute towards meeting this clause.</p>
                <p>NOTE 3: Some users have limited hand strength and may not be able to achieve the level of strength to perform an operation. Alternative user interface solutions that do not require hand strength may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.7 Usage with limited manipulation or strength</p>
                <p>Where ICT requires manual actions, some users will need the ICT to provide features that enable users to make use of the ICT through alternative actions not requiring manipulation or hand strength.</p>
                <p>NOTE 1: Examples of operations that users may not be able to perform include those that require fine motor control, path dependant gestures, pinching, twisting of the wrist, tight grasping, or simultaneous manual actions.</p>
                <p>NOTE 2: One-handed operation, sequential key entry and speech user interfaces may contribute towards meeting this clause.</p>
                <p>NOTE 3: Some users have limited hand strength and may not be able to achieve the level of strength to perform an operation. Alternative user interface solutions that do not require hand strength may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>4.2.7 Usage with limited manipulation or strength</p>
                <p>Where ICT requires manual actions, <mark>the ICT provides</mark> features that enable users to make use of the ICT through alternative actions not requiring manipulation<mark>, simultaneous action</mark> or hand strength. <mark>This is essential for users with limited manipulation or strength and benefits many more users in different situations.</mark></p>
                <p>NOTE 1: Examples of operations that users may not be able to perform include those that require fine motor control, path dependant gestures, pinching, twisting of the wrist, tight grasping, or simultaneous manual actions.</p>
                <p>NOTE 2: One-handed operation, sequential key entry and speech user interfaces may contribute towards meeting this clause.</p>
                <p>NOTE 3: Some users have limited hand strength and may not be able to achieve the level of strength to perform an operation. Alternative user interface solutions that do not require hand strength may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Functional change</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.7 Usage with limited manipulation or strength</p>
                <p>Where ICT requires manual actions, the ICT provides features that enable users to make use of the ICT through alternative actions not requiring manipulation, simultaneous action or hand strength. This is essential for users with limited manipulation or strength and benefits many more users in different situations.</p>
                <p>NOTE 1: Examples of operations that users may not be able to perform include those that require fine motor control, path dependant gestures, pinching, twisting of the wrist, tight grasping, or simultaneous manual actions.</p>
                <p>NOTE 2: One-handed operation, sequential key entry and speech user interfaces may contribute towards meeting this clause.</p>
                <p>NOTE 3: Some users have limited hand strength and may not be able to achieve the level of strength to perform an operation. Alternative user interface solutions that do not require hand strength may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>302.8 With Limited Reach and Strength</p>
                <p>Where a manual mode of operation is provided, ICT shall provide at least one mode of operation that is operable with limited reach and limited strength.<a href="#fn2" class="footnote-ref" id="fnref2" role="doc-noteref"><sup>2</sup></a></p>
            </td>
            <td>
                <p>4.2.8 Usage with limited reach</p>
                <p>Where ICT products are free-standing or installed, the operational elements will need to be within reach of all users.</p>
                <p>NOTE: Considering the needs of wheelchair users and the range of user statures in the placing of operational elements of the user interface may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.8 Usage with limited reach</p>
                <p>Where ICT products are free-standing or installed, the operational elements will need to be within reach of all users.</p>
                <p>NOTE: Considering the needs of wheelchair users and the range of user statures in the placing of operational elements of the user interface may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>4.2.8 Usage with limited reach</p>
                <p>Where ICT products are free-standing or installed, <mark>all the elements required for operation</mark> will need to be within reach of all users. <mark>This is essential for users with limited reach and benefits many more users in different situations.</mark></p>
                <p>NOTE: Considering the needs of wheelchair users and the range of user statures in the placing of operational elements of the user interface may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.8 Usage with limited reach</p>
                <p>Where ICT products are free-standing or installed, all the elements required for operation will need to be within reach of all users. This is essential for users with limited reach and benefits many more users in different situations.</p>
                <p>NOTE: Considering the needs of wheelchair users and the range of user statures in the placing of operational elements of the user interface may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>302.9 With Limited Language, Cognitive, and Learning Abilities</p>
                <p>ICT shall provide features making its use by individuals with limited cognitive, language, and learning abilities simpler and easier.</p>
            </td>
            <td>
                <p>4.2.10 Usage with limited cognition</p>
                <p>Some users will need the ICT to provide features that make it simpler and easier to use.</p>
                <p>NOTE 1: This clause is intended to include the needs of persons with limited cognitive, language and learning abilities.</p>
                <p>NOTE 2: Adjustable timings, error indication and suggestion, and a logical focus order are examples of design features that may contribute towards meeting this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.10 Usage with limited cognition</p>
                <p>Some users will need the ICT to provide features that make it simpler and easier to use.</p>
                <p>NOTE 1: This clause is intended to include the needs of persons with limited cognitive, language and learning abilities.</p>
                <p>NOTE 2: Adjustable timings, error indication and suggestion, and a logical focus order are examples of design features that may contribute towards meeting this clause.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>4.2.10 Usage with limited cognition, language or learning</p>
                <p><mark>The ICT provides features and/or presentation that makes it simpler and easier to understand, operate and use. This is essential for users with limited cognition, language or learning, and benefits many more users in different situations.</mark></p>
                <p>NOTE 1: Adjustable timings, error indication and suggestion, and a logical focus order are examples of design features that may contribute towards meeting this clause.</p>
                <p><mark>NOTE 2: Providing an audio output of the text is an example of providing support for people with limited reading abilities.</mark></p>
                <p><mark>NOTE 3: Providing spelling aid and word prediction of the text is an example of providing support for people with limited writing abilities.</mark></p>
                <p><mark>NOTE 4: Interaction with content can be made easier, and less prone to errors, by presenting tasks in steps that are easy to follow.</mark></p>
            </td>
            <td>
                <p>Functional change</p>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>4.2.10 Usage with limited cognition, language or learning</p>
                <p>The ICT provides features and/or presentation that makes it simpler and easier to understand, operate and use. This is essential for users with limited cognition, language or learning, and benefits many more users in different situations.</p>
                <p>NOTE 1: Adjustable timings, error indication and suggestion, and a logical focus order are examples of design features that may contribute towards meeting this clause.</p>
                <p>NOTE 2: Providing an audio output of the text is an example of providing support for people with limited reading abilities.</p>
                <p>NOTE 3: Providing spelling aid and word prediction of the text is an example of providing support for people with limited writing abilities.</p>
                <p>NOTE 4: Interaction with content can be made easier, and less prone to errors, by presenting tasks in steps that are easy to follow.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>

<h2 id="regular-text">Content not in a table layout</h2>

This is an example of the content from the table actually laid out with paragraph styling and headings.

<h2 id="chapter-4-hardware">Chapter 4 Hardware</h2>

### 402 Closed Functionality
#### 402.1 General
ICT with closed functionality shall be operable without requiring the user to attach or install assistive technology other than personal headsets or other audio couplers, and shall conform to 402.
##### EN 301 549 V1.1.1 (2014)
###### 5.1.2.2 Assistive technology
Where ICT has closed functionality, that closed functionality shall be operable without requiring the user to attach, connect or install assistive technology and shall conform to the generic requirements of clauses 5.1.3 to 5.1.7 as applicable. Personal headsets and induction loops shall not be classed as assistive technology for the purpose of this clause.
- Stylistic rewording
- Explanatory update
##### EN 301 549 V2.1.2 (2018)
###### 5.1.2.2 Assistive technology
Where ICT has closed functionality, that closed functionality shall be operable without requiring the user to attach, connect or install assistive technology and shall conform to the generic requirements of clauses 5.1.3 to 5.1.6 as applicable. Personal headsets and induction loops shall not be classed as assistive technology for the purpose of this clause.
- Explanatory update
##### EN 301 549 V3.1.1 (2019)
###### 5.1.2.2 Assistive technology
Where ICT has closed functionality, that closed functionality shall be operable without requiring the user to attach, connect or install assistive technology and shall conform to the generic requirements of clauses 5.1.3 to 5.1.6 as applicable. Personal headsets and personal induction loops shall not be classed as assistive technology for the purpose of this clause.
- Stylistic rewording
##### EN 301 549 V3.2.1 (2021)
###### 5.1.2.2 Assistive technology
Where ICT has closed functionality, that closed functionality shall be operable without requiring the user to attach, connect or install assistive technology and shall conform to the generic requirements of clauses 5.1.3 to 5.1.6 as applicable. Personal headsets and personal induction loops shall not be classed as assistive technology for the purpose of this clause.



<h2 id="icons">With icons removed columns with change</h2>

This is an example removing the change type columns and adding icons instead.

<ul class="list-unstyled lst-spcd">
    <li><span class="fas fa-pen" aria-hidden="true"></span> Stylistic rewording</li>
    <li><span class="far fa-edit" aria-hidden="true"></span> Explanatory update</li>
    <li><span class="fas fa-flask"></span> Functional change</li>
</ul>

<table class="wb-tables table table-striped table-bordered">
    <thead>
        <tr>
            <th>Revised Section 508</th>
            <th>EN 301 549 V1.1.1 (2014)</th>
            <th>EN 301 549 V2.1.2 (2018)</th>
            <th>EN 301 549 V3.1.1 (2019)</th>
            <th>EN 301 549 V3.2.1 (2021)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>402.2 Speech-Output Enabled</p>
                <p>ICT with a display screen shall be speech-output enabled for full and independent use by individuals with vision impairments.<a href="#fn3" class="footnote-ref" id="fnref3" role="doc-noteref"><sup>3</sup></a></p>
                <p>EXCEPTIONS:</p>
                <ol type="1">
                    <li>
                        <p>Variable message signs conforming to 402.5 shall not be required to be speech-output enabled.</p>
                    </li>
                    <li>
                        <p>Speech output shall not be required where ICT display screens only provide status indicators and those indicators conform to 409.</p>
                    </li>
                    <li>
                        <p>Where speech output cannot be supported due to constraints in available memory or processor capability, ICT shall be permitted to conform to 409 in lieu of 402.2.</p>
                    </li>
                    <li>
                        <p>Audible tones shall be permitted instead of speech output where the content of user input is not displayed as entered for security purposes, including, but not limited to, asterisks representing personal identification numbers.</p>
                    </li>
                    <li>
                        <p>Speech output shall not be required for: the machine location; date and time of transaction; customer account number; and the machine identifier or label.</p>
                    </li>
                    <li>
                        <p>Speech output shall not be required for advertisements and other similar information unless they convey information that can be used for the transaction being conducted.</p>
                    </li>
                </ol>
            </td>
            <td>
                <p>
                    <span class="fas fa-pen" aria-hidden="true"></span> <span class="wb-inv">Stylistic rewording</span>
                    <span class="far fa-edit" aria-hidden="true"></span> <span class="wb-inv">Explanatory update</span>
                </p>
                <p>5.1.3.1 General</p>
                <p>
                    Where visual information is needed to enable the use of those functions of ICT that are closed to assistive technologies for screen reading, ICT shall provide at least one mode of operation using non-visual access to enable the use of those functions.</p>
                <p>NOTE 1: Non-visual access may be in an audio form, including speech, or a tactile form.</p>
                <p>NOTE 2: The visual information needed to enable use of some functions may include operating instructions and orientation, transaction prompts, user input verification, error messages and non-text content.</p>
            </td>
            <td>
                <p>5.1.3.1 General</p>
                <p>Where visual information is needed to enable the use of those functions of ICT that are closed to assistive technologies for screen reading, ICT shall provide at least one mode of operation using non-visual access to enable the use of those functions.</p>
                <p>NOTE 1: Non-visual access may be in an audio form, including speech, or a tactile form.</p>
                <p>NOTE 2: The visual information needed to enable use of some functions may include operating instructions and orientation, transaction prompts, user input verification, error messages and non-text content.</p>
            </td>
            <td>
                <p>
                    <span class="far fa-edit" aria-hidden="true"></span> <span class="wb-inv">Explanatory update</span>
                </p>
                <p>5.1.3.1 Audio output of visual information</p>
                <p>
                    Where visual information is needed to enable the use of those functions of ICT that are closed to assistive technologies for screen reading, ICT shall provide at least one mode of operation using non-visual access to enable the use of those functions.</p>
                <p>NOTE 1: Non-visual access may be in an audio form, including speech, or a tactile form <mark>such as braille for deaf-blind users</mark>.</p>
                <p>NOTE 2: The visual information needed to enable use of some functions may include operating instructions and orientation, transaction prompts, user input verification, error messages and non-text content.</p>
            </td>
            <td>
                <p>5.1.3.1 Audio output of visual information</p>
                <p>Where visual information is needed to enable the use of those functions of ICT that are closed to assistive technologies for screen reading, ICT shall provide at least one mode of operation using non-visual access to enable the use of those functions.</p>
                <p>NOTE 1: Non-visual access may be in an audio form, including speech, or a tactile form such as braille for deaf-blind users.</p>
                <p>NOTE 2: The visual information needed to enable use of some functions may include operating instructions and orientation, transaction prompts, user input verification, error messages and non-text content.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>402.2.1 Information Displayed On-Screen</p>
                <p>Speech output shall be provided for all information displayed on-screen.</p>
            </td>
            <td>
                <p>
                    <span class="fas fa-pen" aria-hidden="true"></span> <span class="wb-inv">Stylistic rewording</span>
                    <span class="far fa-edit" aria-hidden="true"></span> <span class="wb-inv">Explanatory update</span>
                </p>
                <p>5.1.3.6 Speech output for non-text content</p>
                <p>Where ICT presents non-text content, the alternative for non-text content shall be presented to users via speech output unless the non-text content is pure decoration or is used only for visual formatting. The speech output for non-text content shall follow the guidance for "text alternative" described in WCAG 2.0 Success Criterion 1.1.1.</p>
            </td>
            <td>
                <p><span class="fas fa-flask"></span> <span class="wb-inv">Functional change</span></p>
                <p>5.1.3.6 Speech output for non-text content</p>
                <p>Where ICT presents non-text content, the alternative for non-text content shall be presented to users via speech output unless the non-text content is pure decoration or is used only for visual formatting. The speech output for non-text content shall follow the guidance for "text alternative" described in <mark>WCAG 2.1</mark> Success Criterion 1.1.1.</p>
            </td>
            <td>
                <p>5.1.3.6 Speech output for non-text content</p>
                <p>Where ICT presents non-text content, the alternative for non-text content shall be presented to users via speech output unless the non-text content is pure decoration or is used only for visual formatting. The speech output for non-text content shall follow the guidance for "text alternative" described in WCAG 2.1 Success Criterion 1.1.1.</p>
            </td>
            <td>
                <p>5.1.3.6 Speech output for non-text content</p>
                <p>Where ICT presents non-text content, the alternative for non-text content shall be presented to users via speech output unless the non-text content is pure decoration or is used only for visual formatting. The speech output for non-text content shall follow the guidance for "text alternative" described in WCAG 2.1 [5] Success Criterion 1.1.1.</p>
            </td>
        </tr>
        <tr>
            <td>402.2.1 Information Displayed On-Screen Speech output shall be provided for all information displayed on-screen.</td>
            <td>
                <p>
                    <span class="fas fa-pen" aria-hidden="true"></span> <span class="wb-inv">Stylistic rewording</span>
                    <span class="far fa-edit" aria-hidden="true"></span> <span class="wb-inv">Explanatory update</span>
                </p>
                <p>5.1.3.7 Speech output for video information</p>
                <p>Where pre-recorded video content is needed to enable the use of closed functions of ICT and where speech output is provided as non-visual access to closed functionality, the speech output shall present equivalent information for the pre-recorded video content.</p>
                <p>NOTE: This speech output can take the form of an audio description or an auditory transcript of the video content.</p>
            </td>
            <td>
                <p>5.1.3.7 Speech output for video information</p>
                <p>Where pre-recorded video content is needed to enable the use of closed functions of ICT and where speech output is provided as non-visual access to closed functionality, the speech output shall present equivalent information for the pre-recorded video content.</p>
                <p>NOTE: This speech output can take the form of an audio description or an auditory transcript of the video content.</p>
            </td>
            <td>
                <p>5.1.3.7 Speech output for video information</p>
                <p>Where pre-recorded video content is needed to enable the use of closed functions of ICT and where speech output is provided as non-visual access to closed functionality, the speech output shall present equivalent information for the pre-recorded video content.</p>
                <p>NOTE: This speech output can take the form of an audio description or an auditory transcript of the video content.</p>
            </td>
            <td>
                <p>5.1.3.7 Speech output for video information</p>
                <p>Where pre-recorded video content is needed to enable the use of closed functions of ICT and where speech output is provided as non-visual access to closed functionality, the speech output shall present equivalent information for the pre-recorded video content. NOTE: This speech output can take the form of an audio description or an auditory transcript of the video content.</p>
            </td>
        </tr>
    </tbody>
</table>
























<p class="mrgn-tp-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio adipisci hic, qui tenetur tempore harum praesentium at id animi facere, aliquid molestias doloremque! Accusamus assumenda iusto totam asperiores similique suscipit!</p>


<table class="wb-tables table table-striped table-bordered">
    <thead>
        <tr>
            <th>Revised Section 508</th>
            <th>EN 301 549 V1.1.1 (2014)</th>
            <th>508 to 2014</th>
            <th>EN 301 549 V2.1.2 (2018)</th>
            <th>2014 to 2018</th>
            <th>EN 301 549 V3.1.1 (2019)</th>
            <th>2018 to 2019</th>
            <th>EN 301 549 V3.2.1 (2021)</th>
            <th>2019 to 2021</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>402.2.1 Information Displayed On-Screen</p>
                <p>Speech output shall be provided for all information displayed on-screen.<a href="#fn4" class="footnote-ref" id="fnref4" role="doc-noteref"><sup>4</sup></a></p>
            </td>
            <td>
                <p>5.1.3.8 Masked entry</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, and the characters displayed are masking characters, the auditory output shall not be a spoken version of the characters entered unless the auditory output is known to be delivered only to a mechanism for private listening, or the user explicitly chooses to allow non-private auditory output.</p>
                <p>NOTE 1: Masking characters are usually displayed for security purposes and include, but are not limited to asterisks representing personal identification numbers.</p>
                <p>NOTE 2: Unmasked character output might be preferred when closed functionality is used, for example, in the privacy of the user's home. A warning highlighting privacy concerns might be appropriate to ensure that the user has made an informed choice.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>5.1.3.8 Masked entry</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, and the characters displayed are masking characters, the auditory output shall not be a spoken version of the characters entered unless the auditory output is known to be delivered only to a mechanism for private listening, or the user explicitly chooses to allow non-private auditory output.</p>
                <p>NOTE 1: Masking characters are usually displayed for security purposes and include, but are not limited to asterisks representing personal identification numbers.</p>
                <p>NOTE 2: Unmasked character output might be preferred when closed functionality is used, for example, in the privacy of the user's home. A warning highlighting privacy concerns might be appropriate to ensure that the user has made an informed choice.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.8 Masked entry</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, and the characters displayed are masking characters, the auditory output shall not be a spoken version of the characters entered unless the auditory output is known to be delivered only to a mechanism for private listening, or the user explicitly chooses to allow non-private auditory output.</p>
                <p>NOTE 1: Masking characters are usually displayed for security purposes and include, but are not limited to asterisks representing personal identification numbers.</p>
                <p>NOTE 2: Unmasked character output might be preferred when closed functionality is used, for example, in the privacy of the user's home. A warning highlighting privacy concerns might be appropriate to ensure that the user has made an informed choice.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.8 Masked entry</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, and the characters displayed are masking characters, the auditory output shall not be a spoken version of the characters entered unless the auditory output is known to be delivered only to a mechanism for private listening, or the user explicitly chooses to allow non-private auditory output.</p>
                <p>NOTE 1: Masking characters are usually displayed for security purposes and include, but are not limited to asterisks representing personal identification numbers.</p>
                <p>NOTE 2: Unmasked character output might be preferred when closed functionality is used, for example, in the privacy of the user's home. A warning highlighting privacy concerns might be appropriate to ensure that the user has made an informed choice.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.2.2 Transactional Outputs</p>
                <p>Where transactional outputs are provided, the speech output shall audibly provide all information necessary to verify a transaction.</p>
            </td>
            <td>
                <p>5.1.3.16 Receipts, tickets, and transactional outputs</p>
                <p>Where ICT is closed to visual access and provides receipts, tickets or other outputs as a result of a self-service transaction, speech output shall be provided which shall include all information necessary to complete or verify the transaction. In the case of ticketing machines, printed copies of itineraries and maps shall not be required to be audible.</p>
                <p>NOTE: The speech output may be provided by any element of the total ICT system.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>5.1.3.16 Receipts, tickets, and transactional outputs</p>
                <p>Where ICT is closed to visual access and provides receipts, tickets or other outputs as a result of a self-service transaction, speech output shall be provided which shall include all information necessary to complete or verify the transaction. In the case of ticketing machines, printed copies of itineraries and maps shall not be required to be audible.</p>
                <p>NOTE: The speech output may be provided by any element of the total ICT system.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.16 Receipts, tickets, and transactional outputs</p>
                <p>Where ICT is closed to visual access and provides receipts, tickets or other outputs as a result of a self-service transaction, speech output shall be provided which shall include all information necessary to complete or verify the transaction. In the case of ticketing machines, printed copies of itineraries and maps shall not be required to be audible.</p>
                <p>NOTE: The speech output may be provided by any element of the total ICT system.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.16 Receipts, tickets, and transactional outputs</p>
                <p>Where ICT is closed to visual access and provides receipts, tickets or other outputs as a result of a self-service transaction, speech output shall be provided which shall include all information necessary to complete or verify the transaction. In the case of ticketing machines, printed copies of itineraries and maps shall not be required to be audible.</p>
                <p>NOTE: The speech output may be provided by any element of the total ICT system.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>402.2.3 Speech Delivery Type and Coordination Speech output shall be delivered through a mechanism that is readily available to all users, including, but not limited to, an industry standard connector or a telephone handset. Speech shall be recorded or digitized human, or synthesized. Speech output shall be coordinated with information displayed on the screen.</td>
            <td>
                <p>5.1.3.2 Auditory output delivery including speech</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, the auditory output shall be delivered:</p>
                <ol type="a">
                    <li>
                        <p>either directly by a mechanism included in or provided with the ICT;</p>
                    </li>
                    <li>
                        <p>or by a personal headset that can be connected through a 3,5 mm audio jack, or an industry standard connection, without requiring the use of vision.</p>
                    </li>
                </ol>
                <p>NOTE 1: Mechanisms included in or provided with ICT may be, but are not limited to, a loudspeaker, a built-in handset/headset, or other industry standard coupled peripheral.</p>
                <p>NOTE 2: An industry standard connection could be a wireless connection.</p>
                <p>NOTE 3: Some users may benefit from the provision of an inductive loop.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>5.1.3.2 Auditory output delivery including speech</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, the auditory output shall be delivered:</p>
                <ol type="a">
                    <li>
                        <p>either directly by a mechanism included in or provided with the ICT; or</p>
                    </li>
                    <li>
                        <p>by a personal headset that can be connected through a 3,5 mm audio jack, or an industry standard connection, without requiring the use of vision.</p>
                    </li>
                </ol>
                <p>NOTE 1: Mechanisms included in or provided with ICT may be, but are not limited to, a loudspeaker, a built-in handset/headset, or other industry standard coupled peripheral.</p>
                <p>NOTE 2: An industry standard connection could be a wireless connection.</p>
                <p>NOTE 3: Some users may benefit from the provision of an inductive loop.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.2 Auditory output delivery including speech</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, the auditory output shall be delivered:</p>
                <ol type="a">
                    <li>
                        <p>either directly by a mechanism included in or provided with the ICT; or</p>
                    </li>
                    <li>
                        <p>by a personal headset that can be connected through a 3,5 mm audio jack, or an industry standard connection, without requiring the use of vision.</p>
                    </li>
                </ol>
                <p>NOTE 1: Mechanisms included in or provided with ICT may be, but are not limited to, a loudspeaker, a built-in handset/headset, or other industry standard coupled peripheral.</p>
                <p>NOTE 2: An industry standard connection could be a wireless connection.</p>
                <p>NOTE 3: Some users may benefit from the provision of an inductive loop.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.2 Auditory output delivery including speech</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, the auditory output shall be delivered:</p>
                <ol type="a">
                    <li>
                        <p>either directly by a mechanism included in or provided with the ICT; or</p>
                    </li>
                    <li>
                        <p>by a personal headset that can be connected through a 3,5 mm audio jack, or an industry standard connection, without requiring the use of vision.</p>
                    </li>
                </ol>
                <p>NOTE 1: Mechanisms included in or provided with ICT may be, but are not limited to, a loudspeaker, a built-in handset/headset, or other industry standard coupled peripheral.</p>
                <p>NOTE 2: An industry standard connection could be a wireless connection.</p>
                <p>NOTE 3: Some users may benefit from the provision of an inductive loop.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.2.3 Speech Delivery Type and Coordination</p>
                <p>Speech output shall be delivered through a mechanism that is readily available to all users, including, but not limited to, an industry standard connector or a telephone handset. Speech shall be recorded or digitized human, or synthesized. Speech output shall be coordinated with information displayed on the screen.</p>
            </td>
            <td>
                <p>5.1.3.3 Auditory output correlation</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, and where information is displayed on the screen, the ICT should provide auditory information that allows the user to correlate the audio with the information displayed on the screen.</p>
                <p>NOTE 1: Many people who are legally blind still have visual ability, and use aspects of the visual display even if it cannot be fully comprehended. An audio alternative that is both complete and complementary includes all visual information such as focus or highlighting, so that the audio can be correlated with information that is visible on the screen at any point in time.</p>
                <p>NOTE 2: Examples of auditory information that allows the user to correlate the audio with the information displayed on the screen include structure and relationships conveyed through presentation.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>5.1.3.3 Auditory output correlation</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, and where information is displayed on the screen, the ICT should provide auditory information that allows the user to correlate the audio with the information displayed on the screen.</p>
                <p>NOTE 1: Many people who are legally blind still have visual ability, and use aspects of the visual display even if it cannot be fully comprehended. An audio alternative that is both complete and complementary includes all visual information such as focus or highlighting, so that the audio can be correlated with information that is visible on the screen at any point in time.</p>
                <p>NOTE 2: Examples of auditory information that allows the user to correlate the audio with the information displayed on the screen include structure and relationships conveyed through presentation.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.3 Auditory output correlation</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, and where information is displayed on the screen, the ICT should provide auditory information that allows the user to correlate the audio with the information displayed on the screen.</p>
                <p>NOTE 1: Many people who are legally blind still have visual ability, and use aspects of the visual display even if it cannot be fully comprehended. An audio alternative that is both complete and complementary includes all visual information such as focus or highlighting, so that the audio can be correlated with information that is visible on the screen at any point in time.</p>
                <p>NOTE 2: Examples of auditory information that allows the user to correlate the audio with the information displayed on the screen include structure and relationships conveyed through presentation.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.3 Auditory output correlation</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, and where information is displayed on the screen, the ICT should provide auditory information that allows the user to correlate the audio with the information displayed on the screen.</p>
                <p>NOTE 1: Many people who are legally blind still have visual ability, and use aspects of the visual display even if it cannot be fully comprehended. An audio alternative that is both complete and complementary includes all visual information such as focus or highlighting, so that the audio can be correlated with information that is visible on the screen at any point in time.</p>
                <p>NOTE 2: Examples of auditory information that allows the user to correlate the audio with the information displayed on the screen include structure and relationships conveyed through presentation.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.2.4 User Control</p>
                <p>Speech output for any single function shall be automatically interrupted when a transaction is selected. Speech output shall be capable of being repeated and paused.</p>
            </td>
            <td>
                <p>5.1.3.4 Speech output user control</p>
                <p>Where speech output is provided as non-visual access to closed functionality, the speech output shall be capable of being interrupted and repeated when requested by the user, where permitted by security requirements.</p>
                <p>NOTE 1: It is best practice to allow the user to pause speech output rather than just allowing them to interrupt it.</p>
                <p>NOTE 2: It is best practice to allow the user to repeat only the most recent portion rather than requiring play to start from the beginning.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>5.1.3.4 Speech output user control</p>
                <p>Where speech output is provided as non-visual access to closed functionality, the speech output shall be capable of being interrupted and repeated when requested by the user, where permitted by security requirements.</p>
                <p>NOTE 1: It is best practice to allow the user to pause speech output rather than just allowing them to interrupt it.</p>
                <p>NOTE 2: It is best practice to allow the user to repeat only the most recent portion rather than requiring play to start from the beginning.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.4 Speech output user control</p>
                <p>Where speech output is provided as non-visual access to closed functionality, the speech output shall be capable of being interrupted and repeated when requested by the user, where permitted by security requirements.</p>
                <p>NOTE 1: It is best practice to allow the user to pause speech output rather than just allowing them to interrupt it.</p>
                <p>NOTE 2: It is best practice to allow the user to repeat only the most recent portion rather than requiring play to start from the beginning.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.4 Speech output user control</p>
                <p>Where speech output is provided as non-visual access to closed functionality, the speech output shall be capable of being interrupted and repeated when requested by the user, where permitted by security requirements.</p>
                <p>NOTE 1: It is best practice to allow the user to pause speech output rather than just allowing them to interrupt it.</p>
                <p>NOTE 2: It is best practice to allow the user to repeat only the most recent portion rather than requiring play to start from the beginning.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.2.4 User Control</p>
                <p>Speech output for any single function shall be automatically interrupted when a transaction is selected. Speech output shall be capable of being repeated and paused.</p>
            </td>
            <td>
                <p>5.1.3.5 Speech output automatic interruption</p>
                <p>Where speech output is provided as non-visual access to closed functionality, the ICT shall interrupt current speech output when a user action occurs and when new speech output begins.</p>
                <p>NOTE: Where it is essential that the user hears the entire message, e.g. a safety instruction or warning, the ICT may need to block all user action so that speech is not interrupted.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>5.1.3.5 Speech output automatic interruption</p>
                <p>Where speech output is provided as non-visual access to closed functionality, the ICT shall interrupt current speech output when a user action occurs and when new speech output begins.</p>
                <p>NOTE: Where it is essential that the user hears the entire message, e.g. a safety instruction or warning, the ICT may need to block all user action so that speech is not interrupted.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.5 Speech output automatic interruption</p>
                <p>Where speech output is provided as non-visual access to closed functionality, the ICT shall interrupt current speech output when a user action occurs and when new speech output begins.</p>
                <p>NOTE: Where it is essential that the user hears the entire message, e.g. a safety instruction or warning, the ICT may need to block all user action so that speech is not interrupted.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.5 Speech output automatic interruption</p>
                <p>Where speech output is provided as non-visual access to closed functionality, the ICT shall interrupt current speech output when a user action occurs and when new speech output begins.</p>
                <p>NOTE: Where it is essential that the user hears the entire message, e.g. a safety instruction or warning, the ICT may need to block all user action so that speech is not interrupted.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.2.5 Braille Instructions</p>
                <p>Where speech output is required by 402.2, braille instructions for initiating the speech mode of operation shall be provided. Braille shall be contracted and shall conform to 36 CFR part 1191, Appendix D, Section 703.3.1.</p>
                <p>EXCEPTION: Devices for personal use shall not be required to conform to 402.2.5.</p>
            </td>
            <td>
                <p>8.5 Tactile indication of speech mode</p>
                <p>Where ICT is designed for shared use and speech output is available, a tactile indication of the means to initiate the speech mode of operation shall be provided.</p>
                <p>NOTE: The tactile indication could include Braille instructions.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
                <p>Functional change</p>
            </td>
            <td>
                <p>8.5 Tactile indication of speech mode</p>
                <p>Where ICT is designed for shared use and speech output is available, a tactile indication of the means to initiate the speech mode of operation shall be provided.</p>
                <p>NOTE: The tactile indication could include Braille instructions.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>8.5 Tactile indication of speech mode</p>
                <p>Where ICT is designed for shared use and speech output is available, a tactile indication of the means to initiate the speech mode of operation shall be provided.</p>
                <p>NOTE: The tactile indication could include Braille instructions.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>8.5 Tactile indication of speech mode</p>
                <p>Where ICT is designed for shared use and speech output is available, a tactile indication of the means to initiate the speech mode of operation shall be provided.</p>
                <p>NOTE: The tactile indication could include Braille instructions.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.3.1 Private Listening</p>
                <p>Where ICT provides private listening, it shall provide a mode of operation for controlling the volume. Where ICT delivers output by an audio transducer typically held up to the ear, a means for effective magnetic wireless coupling to hearing technologies shall be provided.</p>
            </td>
            <td>
                <p>5.1.3.11 Private listening volume</p>
                <p>Where auditory output is provided as non-visual access to closed functionality and is delivered through a mechanism for private listening, ICT shall provide at least one non-visual mode of operation for controlling the volume.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>5.1.3.11 Private listening volume</p>
                <p>Where auditory output is provided as non-visual access to closed functionality and is delivered through a mechanism for private listening, ICT shall provide at least one non-visual mode of operation for controlling the volume.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.11 Private listening volume</p>
                <p>Where auditory output is provided as non-visual access to closed functionality and is delivered through a mechanism for private listening, ICT shall provide at least one non-visual mode of operation for controlling the volume.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.11 Private listening volume</p>
                <p>Where auditory output is provided as non-visual access to closed functionality and is delivered through a mechanism for private listening, ICT shall provide at least one non-visual mode of operation for controlling the volume.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.3.1 Private Listening</p>
                <p>Where ICT provides private listening, it shall provide a mode of operation for controlling the volume. Where ICT delivers output by an audio transducer typically held up to the ear, a means for effective magnetic wireless coupling to hearing technologies shall be provided.<a href="#fn5" class="footnote-ref" id="fnref5" role="doc-noteref"><sup>5</sup></a></p>
            </td>
            <td>
                <p>8.2.2.1 Fixed-line devices</p>
                <p>Where ICT hardware is a fixed-line communication device with speech output and which is normally held to the ear and which carries the "T" symbol specified in ETS 300 381, it shall provide a means of magnetic coupling which meets the requirements of ES 200 381-1.</p>
                <p>NOTE: ICT fulfilling the requirements of TIA-1083-A is deemed to comply with the requirements of this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>8.2.2.1 Fixed-line devices</p>
                <p>Where ICT hardware is a fixed-line communication device with speech output and which is normally held to the ear and which carries the "T" symbol specified in <mark>ETSI</mark> ETS 300 381, it shall provide a means of magnetic coupling which meets the requirements of <mark>ETSI</mark> ES 200 381-1.</p>
                <p>NOTE: ICT fulfilling the requirements of TIA-1083-A is deemed to comply with the requirements of this clause.</p>
            </td>
            <td>Explanatory update</td>
            <td>
                <p>8.2.2.1 Fixed-line devices</p>
                <p>Where ICT hardware is a fixed-line communication device with speech output and which is normally held to the ear<mark>, it shall provide a means of magnetic coupling which meets the requirements of ETSI ES 200 381-1 and shall carry the "T" symbol specified in ETSI ETS 300 381.</mark></p>
                <p>NOTE 1: ICT fulfilling the requirements of TIA-1083-A is deemed to comply with the requirements of this clause.</p>
                <p><mark>NOTE 2: Magnetic coupling is also known as inductive coupling for T-coil.</mark></p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>8.2.2.1 Fixed-line devices</p>
                <p>Where ICT hardware is a fixed-line communication device with speech output and which is normally held to the ear, it shall provide a means of magnetic coupling which meets the requirements of ETSI ES 200 381-1 [2] and shall carry the "T" symbol specified in ETSI ETS 300 381 [1].</p>
                <p>NOTE 1: ICT fulfilling the requirements of TIA-1083-A [i.24] is deemed to comply with the requirements of this clause. NOTE 2: Magnetic coupling is also known as inductive coupling for T-coil.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.3.1 Private Listening</p>
                <p>Where ICT provides private listening, it shall provide a mode of operation for controlling the volume. Where ICT delivers output by an audio transducer typically held up to the ear, a means for effective magnetic wireless coupling to hearing technologies shall be provided.<a href="#fn6" class="footnote-ref" id="fnref6" role="doc-noteref"><sup>6</sup></a></p>
            </td>
            <td>
                <p>8.2.2.2 Wireless communication devices</p>
                <p>Where ICT hardware is a wireless communication device with speech output which is normally held to the ear, it shall provide a means of magnetic coupling to hearing technologies which meets the requirements of ES 200 381-2.</p>
                <p>NOTE: ICT fulfilling the requirements of ANSI/IEEE C63.19 is deemed to comply with the requirements of this clause.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>8.2.2.2 Wireless communication devices</p>
                <p>Where ICT hardware is a wireless communication device with speech output which is normally held to the ear, it shall provide a means of magnetic coupling to hearing technologies which meets the requirements of <mark>ETSI</mark> ES 200 381-2.</p>
                <p>NOTE: ICT fulfilling the requirements of ANSI/IEEE C63.19 is deemed to comply with the requirements of this clause.</p>
            </td>
            <td>Explanatory update</td>
            <td>
                <p>8.2.2.2 Wireless communication devices</p>
                <p>Where ICT hardware is a wireless communication device with speech output which is normally held to the ear, it shall provide a means of magnetic coupling to hearing technologies which meets the requirements of ETSI ES 200 381-2.</p>
                <p>NOTE: ICT fulfilling the requirements of ANSI/IEEE C63.19 is deemed to comply with the requirements of this clause.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>8.2.2.2 Wireless communication devices</p>
                <p>Where ICT hardware is a wireless communication device with speech output which is normally held to the ear, it shall provide a means of magnetic coupling to hearing technologies which meets the requirements of ETSI ES 200 381-2 [3].</p>
                <p>NOTE: ICT fulfilling the requirements of ANSI/IEEE C63.19 [i.1] is deemed to comply with the requirements of this clause.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.3.2 Non-private Listening</p>
                <p>Where ICT provides non-private listening, incremental volume control shall be provided with output amplification up to a level of at least 65 dB. A function shall be provided to automatically reset the volume to the default level after every use.</p>
            </td>
            <td>
                <p>5.1.3.12 Speaker volume</p>
                <p>Where auditory output is provided as non-visual access to closed functionality and is delivered through speakers on ICT, a non-visual incremental volume control shall be provided with output amplification up to a level of at least 65 dBA (-29 dBPaA).</p>
                <p>NOTE: For noisy environments, 65dBA may not be sufficient.</p>
            </td>
            <td>Stylistic rewording</td>
            <td>
                <p>5.1.3.12 Speaker volume</p>
                <p>Where auditory output is provided as non-visual access to closed functionality and is delivered through speakers on ICT, a non-visual incremental volume control shall be provided with output amplification up to a level of at least 65 dBA (-29 dBPaA).</p>
                <p>NOTE: For noisy environments, 65 dBA may not be sufficient.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.12 Speaker volume</p>
                <p>Where auditory output is provided as non-visual access to closed functionality and is delivered through speakers on ICT, a non-visual incremental volume control shall be provided with output amplification up to a level of at least 65 dBA (-29 dBPaA).</p>
                <p>NOTE: For noisy environments, 65 dBA may not be sufficient.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.12 Speaker volume</p>
                <p>Where auditory output is provided as non-visual access to closed functionality and is delivered through speakers on ICT, a non-visual incremental volume control shall be provided with output amplification up to a level of at least 65 dBA (-29 dBPaA).</p>
                <p>NOTE: For noisy environments, 65 dBA may not be sufficient.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>402.3.2 Non-private Listening Where ICT provides non-private listening, incremental volume control shall be provided with output amplification up to a level of at least 65 dB. A function shall be provided to automatically reset the volume to the default level after every use.</td>
            <td>
                <p>5.1.3.13 Volume reset</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, a function that resets the volume to be at a level of 65 dBA or less after every use, shall be provided, unless the ICT is dedicated to a single user.</p>
                <p>NOTE: A feature to disable the volume reset function may be provided in order to enable the single-user exception to be met.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
            </td>
            <td>
                <p>5.1.3.13 Volume reset</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, a function that resets the volume to be at a level of 65 dBA or less after every use, shall be provided, unless the ICT is dedicated to a single user.</p>
                <p>NOTE: A feature to disable the volume reset function may be provided in order to enable the single-user exception to be met.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.13 Volume reset</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, a function that resets the volume to be at a level of 65 dBA or less after every use, shall be provided, unless the ICT is dedicated to a single user.</p>
                <p>NOTE: A feature to disable the volume reset function may be provided in order to enable the single-user exception to be met.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.3.13 Volume reset</p>
                <p>Where auditory output is provided as non-visual access to closed functionality, a function that resets the volume to be at a level of 65 dBA or less after every use, shall be provided, unless the ICT is dedicated to a single user.</p>
                <p>NOTE: A feature to disable the volume reset function may be provided in order to enable the single-user exception to be met.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <p>402.4 Characters on Display Screens</p>
                <p>At least one mode of characters displayed on the screen shall be in a sans serif font. Where ICT does not provide a screen enlargement feature, characters shall be 3/16 inch (4.8 mm) high minimum based on the uppercase letter “I”. Characters shall contrast with their background with either light characters on a dark background or dark characters on a light background.<a href="#fn7" class="footnote-ref" id="fnref7" role="doc-noteref"><sup>7</sup></a></p>
            </td>
            <td>
                <p>5.1.4 Functionality closed to text enlargement</p>
                <p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
                <p>The subtended angle, in degrees, may be calculated from:</p>
                <p>Ψ = (180 x H) / (π x D)</p>
                <p>Where:</p>
                <ul>
                    <li>
                        <p>ψ is the subtended angle in degrees</p>
                    </li>
                    <li>
                        <p>H is the height of the text</p>
                    </li>
                    <li>
                        <p>D is the viewing distance</p>
                    </li>
                    <li>
                        <p>D and H are expressed in the same units</p>
                    </li>
                </ul>
                <p>NOTE: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
            </td>
            <td>
                <p>Stylistic rewording</p>
                <p>Explanatory update</p>
                <p>Functional change</p>
            </td>
            <td>
                <p>5.1.4 Functionality closed to text enlargement</p>
                <p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
                <p>The subtended angle, in degrees, may be calculated from:</p>
                <p>Ψ = (180 x H) / (π x D)</p>
                <p>Where:</p>
                <ul>
                    <li>
                        <p>ψ is the subtended angle in degrees</p>
                    </li>
                    <li>
                        <p>H is the height of the text</p>
                    </li>
                    <li>
                        <p>D is the viewing distance</p>
                    </li>
                    <li>
                        <p>D and H are expressed in the same units</p>
                    </li>
                </ul>
                <p>NOTE: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.4 Functionality closed to text enlargement</p>
                <p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
                <p>The subtended angle, in degrees, may be calculated from:</p>
                <p>Ψ = (180 x H) / (π x D)</p>
                <p>Where:</p>
                <ul>
                    <li>
                        <p>ψ is the subtended angle in degrees</p>
                    </li>
                    <li>
                        <p>H is the height of the text</p>
                    </li>
                    <li>
                        <p>D is the viewing distance</p>
                    </li>
                    <li>
                        <p>D and H are expressed in the same units</p>
                    </li>
                </ul>
                <p>NOTE: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.4 Functionality closed to text enlargement</p>
                <p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
                <p>The subtended angle, in degrees, may be calculated from:</p>
                <p>Ψ = (180 x H) / (π x D)</p>
                <p>Where:</p>
                <ul>
                    <li>
                        <p>ψ is the subtended angle in degrees</p>
                    </li>
                    <li>
                        <p>H is the height of the text</p>
                    </li>
                    <li>
                        <p>D is the viewing distance</p>
                    </li>
                    <li>
                        <p>D and H are expressed in the same units</p>
                    </li>
                </ul>
                <p>NOTE 1: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>402.5 Characters on Variable Message Signs. Characters on variable message signs shall conform to section 703.7 Variable Message Signs of ICC A117.1-2009 (incorporated by reference, see 702.6.1).<a href="#fn8" class="footnote-ref" id="fnref8" role="doc-noteref"><sup>8</sup></a></td>
            <td>
                <p>5.1.4 Functionality closed to text enlargement</p>
                <p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
                <p>The subtended angle, in degrees, may be calculated from:</p>
                <p>Ψ = (180 x H) / (π x D)</p>
                <p>Where:</p>
                <ul>
                    <li>
                        <p>ψ is the subtended angle in degrees</p>
                    </li>
                    <li>
                        <p>H is the height of the text</p>
                    </li>
                    <li>
                        <p>D is the viewing distance</p>
                    </li>
                    <li>
                        <p>D and H are expressed in the same units</p>
                    </li>
                </ul>
                <p>NOTE: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
            </td>
            <td>
                <p>Explanatory update</p>
                <p>Functional change</p>
            </td>
            <td>
                <p>5.1.4 Functionality closed to text enlargement</p>
                <p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
                <p>The subtended angle, in degrees, may be calculated from:</p>
                <p>Ψ = (180 x H) / (π x D)</p>
                <p>Where:</p>
                <ul>
                    <li>
                        <p>ψ is the subtended angle in degrees</p>
                    </li>
                    <li>
                        <p>H is the height of the text</p>
                    </li>
                    <li>
                        <p>D is the viewing distance</p>
                    </li>
                    <li>
                        <p>D and H are expressed in the same units</p>
                    </li>
                </ul>
                <p>NOTE: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.4 Functionality closed to text enlargement</p>
                <p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
                <p>The subtended angle, in degrees, may be calculated from:</p>
                <p>Ψ = (180 x H) / (π x D)</p>
                <p>Where:</p>
                <ul>
                    <li>
                        <p>ψ is the subtended angle in degrees</p>
                    </li>
                    <li>
                        <p>H is the height of the text</p>
                    </li>
                    <li>
                        <p>D is the viewing distance</p>
                    </li>
                    <li>
                        <p>D and H are expressed in the same units</p>
                    </li>
                </ul>
                <p>NOTE: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
            </td>
            <td>&nbsp;</td>
            <td>
                <p>5.1.4 Functionality closed to text enlargement</p>
                <p>Where any functionality of ICT is closed to the text enlargement features of platform or assistive technology, the ICT shall provide a mode of operation where the text and images of text necessary for all functionality is displayed in such a way that a non-accented capital "H" subtends an angle of at least 0,7 degrees at a viewing distance specified by the supplier.</p>
                <p>The subtended angle, in degrees, may be calculated from:</p>
                <p>Ψ = (180 x H) / (π x D)</p>
                <p>Where:</p>
                <ul>
                    <li>
                        <p>ψ is the subtended angle in degrees</p>
                    </li>
                    <li>
                        <p>H is the height of the text</p>
                    </li>
                    <li>
                        <p>D is the viewing distance</p>
                    </li>
                    <li>
                        <p>D and H are expressed in the same units</p>
                    </li>
                </ul>
                <p>NOTE 1: The intent is to provide a mode of operation where text is large enough to be used by most users with low vision.</p>
            </td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>
