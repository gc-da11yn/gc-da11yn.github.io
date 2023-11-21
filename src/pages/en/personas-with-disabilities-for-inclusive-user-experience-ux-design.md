---
title: Personas with Disabilities for inclusive user experience (UX) design
layout: layouts/base.njk
description: The case to include disabilities into user personas, the types of technologies they use, and sample personas with disabilities.
subject:
  - accessibilityFundamentals
tags:
  - aboutDisabilities
---

<h2>Table of contents</h2>
<ul>
	<li><a href="#creating-equal-access">Creating equal access for everyone</a></li>
	<li><a href="#adaptive-techniques-tools-and-tech">Understanding adaptive techniques, tools and technology</a>
		<ul>
			<li><a href="#vision-enhancement">Vision enhancement technology</a></li>
			<li><a href="#vision-replacement">Vision replacement technology</a></li>
			<li><a href="#audio">Audio enhancement and replacement technology</a></li>
			<li><a href="#mobility-and-dexterity">Mobility and dexterity enhancement and replacement technology</a></li>
			<li><a href="#cognitive-and-learning">Cognitive and learning style enhancement technology</a></li>
		</ul>
	</li>
	<li><a href="#breaking-down-barriers">Breaking down usability barriers</a>
		<ul>
			<li><a href="#involve-users">Involve users throughout your project</a></li>
		</ul>
	</li>
	<li><a href="#incorporating-needs">Incorporating accessibility needs into personas</a></li>
	<li><a href="#sample-personas">Sample of general personas with disabilities</a></li>
	<li><a href="#sample-gc-pwd">Sample of Government of Canada (GC) employee personas with disabilities</a></li>
	<li><a href="#references">References</a></li>
</ul>

<hr>

<p>The purpose of this document is to assist the user in understanding how to build personas with disabilities. Personas are fictional characters created to represent different user types that may use a site, brand, or product in their own particular ways. Developers often design websites and web applications, both desktop and mobile, to their own liking which can potentially cause barriers for some users. It is important to plan for a diverse group of users with a wide range of abilities, technical levels, functional capabilities and familiarity with processes or activities. One important aspect of Inclusive Design is to include people with disabilities in the early design stage and throughout all steps in the software development life-cycle. This will help increase the accessibility and usability components of the end product and better ensure inclusive best practices. This document is a collection of material from a variety of sources geared towards assembling a cohesive view towards inclusion by design.</p>

<h2 id="creating-equal-access">Creating equal access for everyone</h2>
<p>The Government of Canada is committed to delivering information to the public in an accessible format and is equally committed to creating an inclusive, barrier-free work environment that include persons with disabilities. Both obligations require following standards, requirements, guidelines and supporting an extensive use of technology including various adaptive technology tools including software, hardware and devices for users with disabilities.</p>
<p>Users access information through various means: desktop computers, laptops, and mobile devices including smartphones and tablets. In order to keep pace with the demand and provide a satisfactory experience to all users, we should consider 3 different aspects of requirements:</p>

<ol>
	<li>Need for an enterprise level functionality and inclusion requirements, such as:
		<ol>
			<li>The functional requirements of end users with disabilities, that include the following Adaptive techniques, tools and technologies:
				<ol>
					<li>Vision Enhancement;</li>
					<li>Vision Replacement;</li>
					<li>Audio Enhancement and Replacement;</li>
					<li>Mobility and Dexterity Enhancement and Replacement; </li>
					<li>Cognitive and Learning Style Enhancement.</li>
				</ol>
			</li>
			<li>The identified tasks and users abilities.</li>
		</ol>
	</li>
	<li>The design of the applications that make up the solution and how they relate to both:
		<ol>
			<li>the operating system manufacturer's own published standards; and</li>
			<li>the standards for accessible native applications.</li>
		</ol>
	</li>
	<li>Individual user needs in terms of adaptive technology and built in functionality.</li>
</ol>

<h2 id="adaptive-techniques-tools-and-tech">Understanding adaptive techniques, tools and technology</h2>
<h3 id="vision-enhancement">Vision enhancement technology</h3>
<p>Vision Enhancement Technology is used by a wide variety of individuals with some form of visual impairment (commonly referred to as &quot;low vision&quot;), where the person still relies on their vision to consume information. The requirements can be quite varied in the manner and level of features required (i.e. someone with a different field of vision will require different settings from someone with glaucoma or a form of color blindness).</p>
<p>The information is often presented differently such as using high contrasting colors, large print or magnification. The system often must be usable with low vision without relying on audio. Low vision is sometimes accompanied by hearing loss. This is especially common in older people. Audio alone as an accessibility strategy will fail to meet the needs of this group. Screen magnification programs (also called large print programs) allow users to enlarge a portion of their screen. This effectively turns the computer monitor into a viewport showing only a portion of an enlarged virtual display. The user can then use the mouse or keyboard commands to move this viewport in order to view different areas of the virtual display.</p>

<h3 id="vision-replacement">Vision replacement technology</h3>
<p>Vision Replacement Technology is used by individuals with some form of visual impairment (commonly referred to as &quot;blind&quot;), where the person no longer relies or never relied on their vision to consume information. The information is often presented in a different modality such as through Braille or a Text To Speech Engine. Microsoft's Windows, Windows Mobile, Linux, Blackberry OS, Apple Mac OS, iOS, Google's Android and Chrome OS (among others) all have solutions for blind users that make use of screen reader software for a variety of devices. Screen Readers attempt to identify and interpret what is being displayed on the screen. The information is then represented to the user with text-to-speech, sound, haptic icons or a Braille output device. The screen reader keeps track of events that happen (such as windows opening) and actions that are performed on a device with a physical keyboard, D-Pad, Trackball or joystick when movement is performed. On a device with a touch screen, it alters the way the touch screen behaves and provides touch based methods of interaction. There is also Touch Exploration Technology, which allows a blind person to explore the screen with touch without activating the items on the screen. The screen reader can also provide feedback about screen items by providing audio or haptic alerts. It also provides spoken text as controls and information when touched. A set of additional gestures are provided to move around on the screen from item to item and to activate specific screen reader functions (such as reading a block of text).</p>

<h3 id="audio">Audio enhancement and replacement technology</h3>
<p>Audio Enhancement and Replacement Technology is used by individuals with some form of hearing impairment or limitation and some users with speech or communication related impairment. There is a wide variety of needs and requirements in this category of technology. Solutions can be as simple as t-coil hearing aid compatibility to as complex as teletypewriter (TTY) access.</p>
<p>Systems often must be usable without hearing. Information conveyed by audio alone is not accessible by individuals who are deaf. Systems often must also be usable with limited hearing. People with limited hearing often cannot see well either, especially people who are older. Allowing them to use their residual hearing is therefore important rather than having to rely on sight (e.g. relying on access techniques that would be used by people who are deaf). </p>
<p>Individuals who do not hear beeps or recognize spoken words may require a program to prompt them in a different manner, such as a screen flash or displaying spoken messages as text or that translate audio cues to visual ones.</p>

<h3 id="mobility-and-dexterity">Mobility and dexterity enhancement and replacement technology</h3>
<p>Mobility and Dexterity Related Technology is used by individuals with some form of physical impairment or limitation. There is a wide variety of needs and requirements in this category of technology. Solutions can be as simple as alternate input such as voice recognition or as complex as scanning with switch access. There are many different kinds of switches on the market that can be used for touching, clicking and dragging operations, in conjunction with a cursor movement device. Switches can also be used to communicate with a device using different coding systems such as Morse code which is helpful to some persons with severe physical disabilities, who use it to input text.</p>
<p>Voice Recognition technology allows the user to control the device and to input text using the voice. Although voice recognition is becoming mainstream, it has always had important applications to the adaptive technology industry. It allows for hands free device use. In addition to being usable by people with differing levels of dexterity or mobility needs, systems must be usable regardless of the severity of the physical impairment. For a person with a physical disability e.g., limited strength, reach or manipulation, tremor, lack of sensation, technology can provide modes of operation that do not require fine motor control or simultaneous actions. Adaptive technology can provide modes that are operable with limited reach, strength and that do not require a response time.</p>

<h3 id="cognitive-and-learning">Cognitive and learning style enhancement technology</h3>
<p>Cognitive and learning disabilities are neurologically-based processing problems. These processing problems can interfere with learning skills such as reading, writing and/or math. They can also interfere with higher level skills such as organization, time planning, abstract reasoning, long or short-term memory and attention. There is a wide variety of needs and requirements in this category of technology.</p>
<p>Solutions can be as simple as a calendar and task systems or as complex as multi-modal document reading.</p>
<p>Voice Recognition helps persons with dyslexia and dysgraphia that may have difficulty expressing themselves. Additionally, certain typing and writing software that is designed to aid the process of entering information into a computer through the use of tools such as phonetic spell check and advanced thesaurus are commonly used. Usually a combination of screen reading, magnification systems and alternate input devices are used to provide computing access to persons with such impairments.</p>
<p>There are cognitive impairments which take many forms, including Downs Syndrome, short and long-term memory impairments, and perceptual differences. Proper application design can increase functionality of computers for people with mild cognitive impairments.</p>
<p>Visual Stress Syndrome (Concussion) is a neurological condition that interferes with reading, attention, coordination, general health and behaviour, and can occur despite normal vision. Visual Stress occurs when stimuli such as patterns, contrast, light and colour affect the visual cortex, altering brain function and resulting in symptoms of physical discomfort and perceptual distortions. Solutions such as coloured filters have been shown to reduce the effects of these stimuli, calming the stress and restoring brain function.</p>
<p>Certain physical or neurological impairments make speaking difficult for some individuals. Systems that can speak for its user can be used to help individuals with speech impairments. Most of the software packages used for these applications operates with a speech synthesizer.</p>

<h2 id="breaking-down-barriers">Breaking down usability barriers</h2>
<p>Common problems that users experience while browsing the web and accessing information via technology can be categorized into the following barriers:</p>
<ul>
	<li>Critical; that will stop someone from using a site or feature successfully.</li>
	<li>Serious; that will cause frustration, slow someone down, or require work-around.</li>
	<li>Moderate; annoying things that are frustrating, but won’t stop someone from using the site.</li>
	<li>Minor; noisy issues, that might not cause someone a problem, but which damage credibility.</li>
</ul>
<p>It's not simply just about checklists; inclusion is personal and about people. Following the Web Content Accessibility Guidelines (WCAG) 2.0 will make Web content more accessible, however, the important question is, will the content be usable?</p>

<h3 id="involve-users">Involve users throughout your project</h3>
<p>Accessibility should be addressed early in the life cycle of the project; starting from project inception and it should be included in the user-centered design (UCD) processes, including user personas. Our personas should include the different ranges of disabilities. Creating a range of personas, including personas of persons with disabilities, will help developers understand accessibility requirements and implement more universally usable solutions.</p>

<h2 id="incorporating-needs">Incorporating accessibility needs into personas</h2>
<p>Designing personas with disabilities requires special attention as there is a long list of key factors to consider:</p>
<ul>
	<li>Focus on reality; users’ journey, such as: Aptitude; Attitude; Ability.</li>
	<li>Focus on ability. It is more important to know what abilities a person has and what tasks he/she needs and can perform:
		<ul>
			<li>Vision;</li>
			<li>Hearing;</li>
			<li>Mobility;</li>
			<li>Dexterity;</li>
			<li>Cognitive.</li>
		</ul>
	</li>
	<li>Choose wide range of Adaptive Technology, such as:
		<ul>
			<li>Screen readers</li>
			<li>Alternative pointer such as a head mouse</li>
			<li>Screen magnifiers</li>
			<li>Various keyboards and keyboard navigation / switches and pedals</li>
			<li>Captions</li>
			<li>Speech</li>
		</ul>
	</li>
	<li>Design, develop and test in response to different devices:
		<ul>
			<li>Desktops</li>
			<li>Laptops</li>
			<li>Tablets</li>
			<li>Smartphones</li>
		</ul>
	</li>
	<li>Response to different interaction styles:
		<ul>
			<li>Braille</li>
			<li>Foot pedal and switches </li>
			<li>Magnifiers</li>
			<li>Talking Dials </li>
			<li>Voiceover</li>
			<li>Joystick</li>
			<li>Audio</li>
			<li>High contrast keyboard </li>
			<li>Captions on screens </li>
			<li>Clear, understandable, plain language labels </li>
			<li>Speech input</li>
		</ul>
	</li>
	<li>Focus on features and preferences:
		<ul>
			<li>Flexible presentation</li>
			<li>Media alternatives</li>
			<li>Diversity of devices</li>
			<li>Variations in input methods </li>
			<li>Multi-lingual</li>
			<li>Distracted users (An intuitive navigation system can help a distracted user from getting lost within a system, application or web site.)</li>
		</ul>
	</li>
</ul>

<h2 id="sample-personas">Sample of general personas with disabilities</h2>
<ul>
	<li>Trevor is 18 years old. He lives with family and goes to secondary school. He uses desktop computers at school, a laptop at home and a basic mobile phone with Short Message Service (SMS). He likes consistent and familiar places on the web.
		<ul>
			<li>Disability Category: Cognitive and Learning Style Enhancement</li>
			<li>Disability: Autism Spectrum Disorder</li>
			<li>Ability: Uses larger text and a program that hides everything but the text, so he doesn’t get distracted</li>
			<li>Aptitude: Uses the computer well for games, but doesn’t learn new sites easily</li>
			<li>Attitude: Prefers familiar sites in an established routine</li>
			<li>Adaptive Technology: Text preference settings, power keyboard user</li>
		</ul>
	</li>
	<li>Emily is 24 years old. She graduated from high school and is working on a college degree. She lives in a small independent living facility and works part-time at a local community center. She wants to do everything for herself.
		<ul>
			<li>Disability Category: Mobility and Dexterity Enhancement and Replacement</li>
			<li>Disability: Cerebral palsy. Difficult to use hands and has some difficulty speaking clearly</li>
			<li>Ability: Uses a motorized wheel chair</li>
			<li>Aptitude: Uses the computer well, with the right input device; good at finding efficient search terms</li>
			<li>Attitude: Wants to do everything for herself; can be impatient</li>
			<li>Adaptive Technology: Augmentative and Alternative Communication (AAC) Communicator with speech generator, iPad, power wheelchair.</li>
		</ul>
	</li>
	<li>Francis is a 30 year old war veteran who lives with his girlfriend. He uses a laptop at home, computers at community centres and libraries, and his iPhone. He works part time at the community centre as a receptionist and finds it difficult to concentrate, remember, manage stress, think, write and speak clearly. He has trouble organizing and managing time. This tends to cause problems for Francis in social and work situations.
		<ul>
			<li>Disability Category: Cognitive and Learning Style Enhancement</li>
			<li>Disabilities: Post Traumatic Stress Disorder (PTSD). Cognitive impairments</li>
			<li>Ability: Slow writing and slow reading. Longer time to process information.</li>
			<li>Aptitude: Used computers proficiently before but finds completing work tasks more difficult</li>
			<li>Attitude: Proficient but he is prone to frequent seizures and blackouts and finds some sites too stimulating</li>
			<li>Adaptive Technology: System intelligence or processing features such as software agents, reminders and spell checkers, sometimes used in conjunction with adaptations in input and/or output systems. Others: time management software, white noise creator, brain storming software and software to park ideas quickly (quick note), word completion software.</li>
		</ul>
	</li>
	<li>Jacob is 32 years old. He is a college graduate who has completed legal training courses. He shares an apartment with a friend and works as a paralegal, reviewing cases and writing case summaries. He uses a laptop, braille display, and an iPhone. He believes the right technology can allow him to do anything.
		<ul>
			<li>Disability Category: Vision Replacement</li>
			<li>Disability: Blind since birth</li>
			<li>Ability: Has some light perception</li>
			<li>Aptitude: Skilled technology user</li>
			<li>Attitude: Digital native, early adopter, persists until he gets it</li>
			<li>Adaptive Technology: Screen reader, audio note-taker, Braille display.</li>
		</ul>
	</li>
	<li>Lea: 35 years old. Master’s degree. Writes for a trade publication; works from home. No one gets that this really is a disability.
		<ul>
			<li>Disability Category: Mobility and Dexterity Enhancement;</li>
			<li>Disability: Fibromyalgia;</li>
			<li>Ability: Fatigue from fibromyalgia, trackball, and special keyboard; </li>
			<li>Aptitude: Average user;</li>
			<li>Attitude: Wishes people would understand how hard it can be for her to make it through the day; </li>
			<li>Adaptive Technology: Split keyboard, power keyboard user, Dragon Naturally Speaking.</li>
		</ul>
	</li>
	<li>Steven is 38 years old and attends art school. He is a graphic artist in a small ad agency. He uses an iPad, iPhone and MacBook Pro. He believes everyone should be able to communicate through sign-language.
		<ul>
			<li>Disability Category: Audio Replacement</li>
			<li>Disability: Deaf since birth</li>
			<li>Ability: Native language is American Sign Language (ASL); can speak and read lips; uses SMS/IM, Skype, and video chat</li>
			<li>Aptitude: Good with graphic tools, and prefers visuals to text; poor spelling makes searching more difficult</li>
			<li>Attitude: Can be annoyed about accessibility, such as lack of captions</li>
			<li>Adaptive Technology: Sign language, Communication Access Realtime Translation (CART), captions, video chat.</li>
		</ul>
	</li>
	<li>Nancy is 45 years old and has been using computer-based technology for four years, it provides her with independent access to reading materials and written communication.
		<ul>
			<li>Disability Category: Audio Replacement, Vision Replacement</li>
			<li>Disability: Deaf-blind and does not speak. Has limited ASL</li>
			<li>Ability: Able to read grade 2 Braille. Uses telephone with a Braille TTY</li>
			<li>Attitude: She uses manual sign language for two-way communication via an interpreter/facilitator </li>
			<li>Attitude: Can become frustrated easily when the services she requires to communicate are not provided or available</li>
			<li>Adaptive Technology: Screen reader, Braille display, telephone with a Braille TTY, and computer based TTY software.</li>
		</ul>
	</li>
	<li>Vishnu is 48 years old and has an engineering degree. He works for a medical software company on international projects. He was born in India, finished graduate school in Malaysia, and now lives in Singapore. High tech all the way at work; two mobile phones and a personal laptop. I want to be on the same level as everyone else.
		<ul>
			<li>Disability Category: Vision Enhancement</li>
			<li>Disability: Low vision</li>
			<li>Ability: Speaks three languages: Gujarati, Hindi, English, and a little spoken Mandarin. Uses contrast adjustments to see the screen clearly </li>
			<li>Aptitude: Expert user of technical tools; frustrated searching across languages</li>
			<li>Attitude: Sees himself as a world citizen, and wants to be able to use any site</li>
			<li>Adaptive Technology: Contrast adjustments, screen magnification, personalized style sheets</li>
		</ul>
	</li>
	<li>Maria is 49 years old and has a community college and health-care certificate. She is married with grown children and speaks both Spanish and English. She is a community health worker. She has a smartphone, her home computer is primarily her husband’s work computer. She is happy with this set up and assuming she can find what she’s looking for, she loves it.
		<ul>
			<li>Disability Category: Cognitive and Learning Style Enhancement</li>
			<li>Disability: Dyslexia</li>
			<li>Ability: Prefers Spanish language sites, when she can find them; needs information and instructions written clearly</li>
			<li>Aptitude: Adventurous, but not very proficient; husband and daughter set up bookmarks for her</li>
			<li>Attitude: Thinks it’s wonderful to be able to have her favorite websites with her at all times</li>
			<li>Adaptive Technology: Skype, online translation sites</li>
		</ul>
	</li>
	<li>Mary is 52 years old and a college graduate. She lives with her sister and has worked in a dentist office as a receptionist for 20 years. She has lived on disability for the past 5 years.
		<ul>
			<li>Disability Category: Vision Enhancement, Mobility and Dexterity Enhancement</li>
			<li>Disability: Has a chronic progressive course of Multiple Sclerosis. Has motor and sensory impairments </li>
			<li>Ability: She uses a power wheelchair with a joystick control for moving about her environment. Her vision is also extremely limited and fluctuates</li>
			<li>Aptitude: Used computers proficiently before now her physical abilities are extremely limited</li>
			<li>Attitude: Likes to use computers but gets annoyed when she can’t access some features</li>
			<li>Adaptive Technology: She is able to access a computer by targeting one-inch squares on a programmable keyboard, which features large black letters on a white background to access her computer to assist her with typing. On days when her vision is at its lowest, she relies upon motoric memory to access her keyboard. On &quot;good days&quot; she may read print magnified 8x or greater.</li>
		</ul>
	</li>
	<li>Carol is 74 years old and lost her husband a year ago. She lives in an apartment near one of her daughters and a few of her six grandkids (ages 6 to 16). She is retired and worked 25 years as a bookkeeper for a construction company. She has an older computer at home and basic mobile phone. Her grandkids are trying to drag her into the world of technology.
		<ul>
			<li>Disability Category: Vision Enhancement, Audio Enhancement</li>
			<li>Disability: First signs of macular degeneration, mild arthritis; hearing aid</li>
			<li>Ability: No special AT on computer</li>
			<li>Aptitude: Used computers when she worked as a bookkeeper, but now her grandkids keep her old home computer updated </li>
			<li>Attitude: Willing, but not adventurous</li>
			<li>Adaptive Technology: Enlarges text, but makes few other adjustments.</li>
		</ul>
	</li>
</ul>

<h2 id="sample-gc-pwd">Sample of Government of Canada (GC) employee personas with disabilities</h2>
<ul>
	<li>John is a 33 year old art school graduate. He works as a graphic artist inside the Communications Branch at Indigenous and Northern Affairs Canada (INAC). He is fluid with the use of Apple products (iPad, iPhone, MacBook Pro). He feels his only disability is that not everyone in the world can sign.
		<ul>
			<li>Disability Category: Audio Replacement</li>
			<li>Disability: Deaf since birth</li>
			<li>Ability: Native language is ASL; can speak and read lips; uses SMS/IM, Skype, and video chat</li>
			<li>Aptitude: Good with graphic tools/software, is extremely computer literate and prefers visuals to text; Suffers from poor spelling/English grammar which makes searching the web for support more difficult</li>
			<li>Attitude: Has a tendency to become annoyed easily about accessibility, such as lack of captions or subtitles on videos or visual/video learning tutorials</li>
			<li>Adaptive Technology: Sign language, CART, captions, video chat.</li>
		</ul>
	</li>
	<li>Abdul is a 51 year old Structural Engineer with low vision. Abdul holds an Engineering degree that was received with honors. He works for Global Affairs Canada on international projects focused on assisting war torn countries rebuild their infrastructure. He travels constantly and is required to be accessible nearly 24/7. He carries two mobile phones, tablet and work laptop. He also carries a personal laptop. Despite his low vision he strives to be on the same level as everyone else.
		<ul>
			<li>Disability Category: Vision Enhancement</li>
			<li>Disability: Low vision</li>
			<li>Ability: Speaks three languages: Gujarati, Hindi, English, and a little spoken Mandarin. Highly skilled computer user who contrast adjustments to see the screen clearly</li>
			<li>Aptitude: Expert user of technical tools; tends to get frustrated when searching across languages; finds some devices from overseas lacking of adaptive settings</li>
			<li>Attitude: Considers himself a worldly citizen. Wants the ability to use any site when performing his countless hours of research, regardless of language or the fact his PC/Mobile device settings have been individually configured</li>
			<li>Adaptive Technology: Contrast adjustments, screen magnification, personalized style sheets.</li>
		</ul>
	</li>
	<li>Yvette is a 35 year old translator. She holds a Master’s degree in French Language and works as a translator with the Translation Bureau at Public Works and Government Services Canada. She works from home and can spend hours at a time reviewing, revising and translating Government of Canada content from all departments. Her biggest personal issue is that she feels nobody really understands what she goes through physically every day and that she does in fact have a disability.
		<ul>
			<li>Disability Category: Mobility and Dexterity Enhancement</li>
			<li>Disability: Fibromyalgia</li>
			<li>Ability: Fatigue from Fibromyalgia, extreme anxiety when workload increases unexpectedly, hands often cramp or seize up. Uses trackball and a special keyboard to perform daily tasks</li>
			<li>Aptitude: Average computer user with advance Microsoft Office skills</li>
			<li>Attitude: Wishes people would understand how hard it can be for her to make it through the day and complete all assigned projects on time</li>
			<li>Adaptive Technology: Split keyboard, power keyboard user, Dragon Naturally Speaking, pre-programmed X-Keys.</li>
		</ul>
	</li>
	<li>Donald is 21 years old and lives with his family. He has completed secondary school through a specialized program for individuals with Autism and or Attention deficit hyperactivity disorder (ADHD). He learned general computer knowledge in school and has a standard laptop at home and a basic mobile phone with SMS. He was hired as a mailroom assistant with Public Works and Government Services Canada (PWGSC). Donald works best with consistent and familiar routines and processes.
		<ul>
			<li>Disability Category: Cognitive and Learning Style Enhancement;</li>
			<li>Disability: Autism Spectrum Disorder</li>
			<li>Ability: Uses larger text then most on his devices (laptop and standard cell phone) and a program that hides everything but the text, so he doesn’t get distracted</li>
			<li>Aptitude: Uses the computer well for games, but doesn’t learn new sites or software programs easily </li>
			<li>Attitude: Prefers familiar sites online and does best when involved in an established routine</li>
			<li>Adaptive Technology: Text preference settings, power keyboard user.</li>
		</ul>
	</li>
	<li>George is 47 years old and has a Master’s degree in languages. He works for Global Affairs Canada as a translator and lives alone. George has a laptop and an iPhone which he uses daily for both work and personal use. He does not read Braille so most of the information that he receives must be converted to sound since losing his eye sight. George does have a guide dog and also uses a white cane when navigating unfamiliar rooms.
		<ul>
			<li>Disability Category: Vision Replacement</li>
			<li>Disability: Lost his vision at the age of 38 due to other medical issues </li>
			<li>Ability: Has some limited light perception</li>
			<li>Aptitude: Having vision previously he is a skilled technology user</li>
			<li>Attitude: Very eager and open to learn new technology/tools. He is learning to use specialized software to read electronic materials </li>
			<li>Adaptive Technology: Screen reader, audio note-taker.</li>
		</ul>
	</li>
	<li>Brian is 27 years old and is a Seaman with the Royal Canadian Navy. He is away at sea for a minimum of 6 month intervals at a time.
		<ul>
			<li>Disability Category: Audio Enhancement</li>
			<li>Disability: Lost hearing in left ear and 65% in the right ear due to an accident that occurred at sea</li>
			<li>Ability: Functions as an able bodied person with the exception of very poor hearing and on rare occasion slight issues with his balance</li>
			<li>Aptitude: Not being 30 yet he possesses an open mind and is eager to try any form of technology that could make his hearing loss seem less impactful</li>
			<li>Adaptive Technology: Hearing Aid with Telecoil capability.</li>
		</ul>
	</li>
</ul>

<p>Remember that people are diverse. Be careful not to assume that all users, including users with disabilities, use your product the same way. People use different interaction techniques, different adaptive strategies, and different assistive technology configurations. People have different experiences, expectations, and different preferences.</p>


<h2 id="references">References</h2>
<ol>
	<li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=12541&section=text">Policy on the Duty to Accommodate Persons with Disabilities in the Federal Public Service</a></li>
	<li><a href="http://en.wikipedia.org/wiki/Persona_%28user_experience%29">Persona (user experience)</a></li>
	<li><a href="http://www.uiaccess.com/accessucd/personas.html">Accessibility in User-Centered Design: Personas</a></li>
	<li><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27088&section=text">Standard on Optimizing Websites and Applications for Mobile Devices</a></li>
</ol>
