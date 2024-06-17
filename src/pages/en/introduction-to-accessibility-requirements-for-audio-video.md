---
title: Introduction to accessibility requirements for audio-video
description: This document is a great introduction on how to make accessible video for a communication advisor audience which are in between the web author and the content expert.
toggle: introduction-aux-exigences-d-accessibilite-pour-l-audio-video
subject:
  - howTos
tags:
  - createWebContent
audience:
  - Everyone
---

## Introduction

The purpose of this guide is to teach you how to ensure all audio-video learning products are accessible for all learners. WCAG 2.1 and other accessibility guidelines refer to audio-video recordings, live or pre-recorded as Time-Based Media.

Time-based media can be any of the following:

- Audio only
- Video only
- Audio and video
- Audio and/or video combined with interaction

We often use audio and video to present information, facilitate courses and demo systems. By not including the appropriate information when developing a time-based media learning object, we are excluding many learners or at minimum, making it difficult for them to access the training they need to do their job.

## General Requirements

Whether the time-based media is accessible largely depends on the following four factors being taken into consideration:

- Transcript
- Captioning
- Audio description
- Keyboard access.

Summaries for each of the factors are presented here, while guidelines, checklists and samples follow later in the document.

## Transcript summary

Transcripts are the text equivalent of an audio or video file. They make it easier for people who need to access information in audio and visual media but can't hear or see the content. Ensure that transcripts include all:

- on-screen text,
- dialogue and narration,
- important sounds (such as an explosion),
- important actions (for example, people running away from an explosion or characters wearing disguises), and
- audio description (additional audio track describing all visual information).

[Transcript Guidelines]({{ rootPath }}en/transcript-guidelines/)

[Transcript Checklist]({{ rootPath }}en/transcript-checklist)

## Captioning summary

Videos with audio require synchronized captioning (where the text aligns with the spoken words in the audio and when important actions are presented on the screen).

Most “closed captions” can be hidden or shown by people watching the video. They can also be “open captions” that are always displayed and cannot be turned off.

Open captions are recommended at the top of American Sign Language (<abbr>ASL</abbr>) and <span =lang="fr">Langue des Signes Québécoise (<abbr>LSQ</abbr>)</span> videos.

**Anything said or heard in the video must be included in the captioning.** It is important that captions are:

- synchronized and appear at approximately the same time as the audio is delivered,
- equivalent and equal in content to that of the audio, including speaker identification and important sound effects, and
- accessible and readily available to those who need or want them.

Design teams or a contractor can provide the caption text.

[Captioning Guidelines]({{ rootPath }}en/captioning-guidelines)

[Captioning Checklist]({{ rootPath }}en/captioning-checklist)

## Audio description summary

Audio description allows any user with a visual disability or cognitive disability to receive a very detailed and descriptive experience of what is happening on the screen. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main soundtrack.

This can be done using:

- transcripts and adding descriptions of the extra visual information. (WCAG 1.2.3 level A).
- Adding a separate audio track that describes the visual content. (WCAG 1.2.5 level AA).
  - Note: If audio description additional audio track is being used for a video, then these descriptions need to be included in the transcript.

[Audio Description Guidelines]({{ rootPath }}en/audio-description-guidelines)

[Audio Description Checklist]({{ rootPath }}en/audio-description-guidelines#audio-description-checklist)

## Keyboard Access

All video controls must be accessible and navigable via the keyboard. It is the responsibility of the developer to ensure that video players are accessible such as:

- Video player can be operated with a keyboard.
- Video player starts at the user’s request (does not automatically start playing).
- Video player has a mechanism to pause or stop video.
- Volume can be modified with a keyboard and a mouse.
- Proper button labels (alt text) are present.

Keyboard access is tested by the developer, design teams or a contractor.
