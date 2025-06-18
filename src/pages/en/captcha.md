---
title: "Are CAPTCHAs accessible?"
description: "Why are the usual strategies used online not accessible and not an option for us? The following CAPTCHA’s are typically used to prevent BOT attacks but are not accessible or fully compliant, and/or have other identified challenges."
layout: layouts/base.njk
toggle: /fr/captcha-en-french.md
---

<section>
<h2>CAPTCHAs</h2>
<section>
<h3>Image based CAPTCHA’s</h3>
<p>Not accessible as visually impaired people cannot see the images and input the requested information.</p>
</section>
<section>
<h3>Audio CAPTCHA</h3>
<p>This will work with the screen readers, as the user can “hear” the word(s), but it can be exploited by smart BOTS and presents the same problem as Image Based CAPTCHA’s for the visually impaired. Here is an <a href="https://gbhackers.com/security-researcher-breaks-googles-recaptcha-v2-using-googles-tool/">audio CAPTCHA</a> that covers it in details.</p>
</section>
<section>
<h3>reCAPTCHA</h3>
<p>Uses digitized words but presents the same problem as Image Based CAPTCHA’s for the visually impaired.</p>
</section>
</section>

<section>
<h2>Alternative methods</h2>
<p>In addition to the above mentioned CAPTCHA’s. the following are also used to prevent attacks.</p>
<section>
<h3>Common names are not used for attributes</h3>
<p>When bots crawl, they typically look for common field names like email address, name etc. This information can be made obscure as a way to deter bots but it would be confusing for our legitimate end users. This option is accessible, but not user friendly.</p>
</section>
<section>
<h3>Honeypot fields</h3>
<p>These are fields that are hidden from the user but visible to the bots. If a bot fills out these fields, it can be identified and blocked. This method is accessible as long as the hidden fields are properly implemented.</p>
</section>
<section>
<h3>Time-based techniques</h3>
<p>These techniques measure the time taken to fill out a form. Bots typically fill out forms much faster than humans. If a form is filled out too quickly, it can be flagged as suspicious. This method is accessible as it does not rely on visual or auditory cues.</p>
</section>
<section>
<h3>Hidden input fields</h3>
<p>A field that is not required for business can be hidden using Cascading Style Sheets (CSS). A BOT would typically complete this hidden field and upon Submit, we can check if that field has data and if it does we simply reject submission. This option is accessible, but can be hacked.</p>
</section>
<section>
<h3>Random question</h3>
<p>Random questions can be asked based on “other” input from the user. For example: What is the second and seventh digit of your phone number. This option is accessible, but can be hacked and there is a significant level of effort required to implement this option.</p>
</section>
<section>
<h3>Email address field/confirmation process</h3>
<p>Capturing an email address and implementing an email confirmation process protects against BOT attacks because an email which contains a unique confirmation link is sent to the user immediately after form submission. Successful confirmation via this link verifies the authenticity of the user and persists the data. If the subscription is not confirmed, within a period of time as identified by the business, the data is discarded. This ensures that the data committed to the database is from actual users and not BOT submissions, which in-turn ensures the integrity and accuracy of the data.</p>
</section>
</section>

<section>
<h2>Additional information</h2>
<p>To further secure the form data, it is recommended that the following additional functionality be implemented as further security.</p>
<section>
<h3>Hidden input fields</h3>
<p>Although as mentioned above, on its own this option is not completely secure but when used with the email address/confirmation process it adds an additional layer to protect data and is not difficult to implement. To ensure accessibility and compliance, this field will be hidden visually and from screen readers, and the input value of this field will be checked before accepting submission of data.</p>
</section>
</section>

<section>
<h2>Recommendation</h2>
<p>Implementation of the following methods for the web form are recommended to optimize user experience and accessibility, as well as ensure data integrity and accuracy:</p>
<ul>
<li>Include a required email address field/confirmation process and persist data only upon successful confirmation.</li>
<li>Enable hidden field validation on form submission.</li>
</ul>
<p>If you wish to know more information about CAPTCHAs and alternative methods to prevent BOT attacks we encourage you to visit the <a href="https://www.w3.org/WAI/GL/wiki/Captcha_Alternatives_and_thoughts">Captcha Alternative and thoughts</a> page on the W3C website.</p>
</section>

<section>
<h2>Honeypot technique</h2>
<section>
<h3>Preamble</h3>
<p>How the honeypot technique should work:</p>
<ul>
<li>Expose a form field to a bot, but not a human.</li>
<li>The field should have a programmatically determinable purpose (such as through the use of a <code>label</code> element that's associated to the <code>input</code> so a bot can figure out what's being asked.</li>
<li>That field should be something that the form <em>could</em> be asking for, but isn't, such as a birthdate, or a secondary phone number.</li>
<li>A bot should have as much evidence as possible that the field should be filled in, like even adding "<code>required</code>" to the <code>label</code> text, and <strong>not</strong> embedding a class name like "<code>hidden</code>" or having <code>style="display:none;"</code>.</li>
<li>Add <code>required</code> attributes to the <code>&lt;input&gt;</code>, then get the browser to ignore it: either remove with JavaScript just before form submission or use the <code>novalidate</code> attribute on the <code>&lt;form&gt;</code> element.</li>
<li>In order for humans to avoid filling it in:
<ul>
<li>It should be hidden visually (like using <code>class="sr-only"</code>, <code>class="wb-inv"</code>)</li>
<li>It should be removed form the tab order using <code>tabindex="-1"</code></li>
<li>They should be hidden from screen readers using JavaScript to apply <code>aria-hidden="true"</code> on an ancestor element of the <code>input</code> and <code>label</code></li>
</ul>
</li>
<li>If, after submitting, the server detects a value in that form field, it should ignore the form submission.</li>
</ul>
</section>
<section class="wb-prettify all-pre">
<h3>Code Example</h3>
<p>The following code is the bare minimum needed for this to work. This is a website registration form that requires a username, a password (to be entered twice), and an email address. The Birthday field is a honeypot field.</p>
<section>
<h4>HTML</h4>

```html

<form id="regForm" action="registrationPage" method="POST" novalidate>
	<div>
		<label for="username"></label>
		<input id="username" name="username" aria-describedby="formatforusername" required>
	</div>
	<div>
		<label for="password"></label>
		<input id="password" name="password" required type="password">
	</div>
	<div>
		<label for="repassword"></label>
		<input id="repassword" name="repassword" required type="password">
	</div>
	<div>
		<label for="email"></label>
		<input id="email" name="email" required type="email">
	</div>
	<div>
		<label for="birthday" class="invisibleStuff"></label>
		<input id="birthday" name="birthday" class="hpclass" required>
	</div>

	<div>
		<input id="saveBtn" name="saveBtn" value="Register" type="submit">
	</div>
</form>
<script src="user.js">

```

</section>
<section>
<h4>CSS</h4>

```css

.invisibleStuff {
	position: absolute;
	height: 1px;
	width: 1px;
	clip: rect(1px, 1px, 1px, 1px);
	overflow: hidden;
	margin: 0;
}

.hpclass {
	z-index: -5;
	font-size: 0pt;
	position: relative;
	top: -5em;
	height: 0px;
	overflow: hidden;
	width: 0;
	line-height: 0px;
	margin: 0;
	padding: 0;
}

```

</section>
<section>

<h4>Javascript</h4>

```javascript

function hp () {
	let hps = document.querySelectorAll("input.hpclass");
	window["wb-frmvld"] = {"ignore" : "input.hpclass"};

	for (let i = 0; i &lt; hps.length; i++) {
		hps[i].setAttribute("tabindex", "-1");
		hps[i].classList.add("invisibleStuff");
		hps[i].parentNode.setAttribute("aria-hidden", "true");
	}
}

document.addEventListener("DOMContentLoaded", hp, false);

```

</section>
</section>
</section>
