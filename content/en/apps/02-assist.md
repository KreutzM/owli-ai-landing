---
slug: assist
order: 2
name: Owli-AI Assist
platform: Android
status: Beta
tagline: Your visual assistance system with AI support.
valueProp: Analyze scenes, ask questions, and hear answers with AI-supported image description.
audience: Blind
cloud: yes
features:
  - title: AI-supported scene description (Cloud Mode)
    description: A captured camera image is sent to a vision-language model and described in clear language.
  - title: Ask follow-up questions
    description: You can ask targeted questions about the current scene, for example about text, objects, or image details.
  - title: Auto-scan
    description: If desired, the app analyzes new images at regular intervals and continuously keeps you informed about your surroundings.
  - title: Speech recognition and streaming voice output
    description: Questions can be asked by voice. Answers are played back in real time using speech output.
  - title: Additional captures for more context
    description: If needed, you can capture additional images for more detailed analysis.
  - title: Individual assistance profiles
    description: You can define how your assistant speaks and what it should focus on, for example short and precise, highly detailed, or safety-focused.
  - title: Context-based assistance (automatic mode)
    description: The app first analyzes the current context, such as shopping, train station, street traffic, or restaurant, and automatically adapts descriptions so relevant information is prioritized.
privacy:
  mode: cloud
  summary: In Cloud Mode, captured images are transferred to the configured AI provider for scene description and question answering.
  note: Only data required for analysis is transferred. The exact data flow depends on the provider and implementation.
requirements:
  - Android 10 or newer
  - Camera and microphone
  - Stable internet connection for Cloud Mode
icon:
  src: /apps/assist/icon-512-transparent.webp
  alt: Icon of Owli-AI Assist
  width: 512
  height: 512
logo:
  src: /apps/assist/logo-1024-transparent.webp
  alt: Logo of Owli-AI Assist
  width: 1024
  height: 1024
links:
  primary:
    label: Test Assist Cloud Mode
    href: /support
  secondary:
    label: Ask privacy questions
    href: /privacy#assist
media:
  - src: /apps/assist/icon-placeholder.svg
    alt: App icon of Owli-AI Assist
    caption: Assist app icon
  - src: /apps/assist/icon-placeholder.svg
    alt: Example view of Owli-AI Assist in Cloud Mode with scene description
    caption: Cloud Mode view placeholder
seo:
  title: Image description app as visual assistance with voice control
  description: Owli-AI Assist is an Android image description app that works as visual assistance with AI scene description, follow-up questions, and voice control in Cloud Mode.
  keywords:
    - Image description app
    - Visual assistance
    - AI scene description
    - Voice control
translationStatus: machine
sourceLang: de
---

## Who is Owli-AI Assist for?

Owli-AI Assist is designed for blind or severely visually impaired people who want to better understand their surroundings using artificial intelligence. The app does not replace personal assistance, but can provide additional information in many daily situations.

As an image description app, Assist provides visual assistance that describes scenes clearly and responds to follow-up questions. AI scene description can be controlled by voice so you can access information quickly and hands-free.

## What does the app do?

Owli-AI Assist works as a visual assistance system:

1. The camera captures the current scene.
2. An image is sent to an AI model.
3. The model describes the scene in clear language.
4. You can ask targeted follow-up questions.

Examples:
- What is in front of me?
- Read the text on the sign.
- Which products are on the shelf?
- What is shown on the display?

Answers are provided by speech output so you can keep your hands free.

## Auto-scan for continuous information

In Auto-scan mode, the app regularly analyzes new images. This helps you stay informed about changes in your surroundings even without manual triggering.

## Voice input and speech output

Questions can be asked by voice input. Answers are played in real time with streaming speech output, so long descriptions do not need to be fully loaded first.

## Personalized and context-based assistance

Owli-AI Assist lets you use different assistance profiles. You can decide whether descriptions should be short and precise or very detailed. Analysis focus can also be adjusted, for example by prioritizing obstacles or text information.

In automatic mode, the app detects typical everyday situations and prioritizes the most relevant information.

Examples:

- In **street traffic**, vehicles, movement, and traffic lights are highlighted.  
- In a **supermarket**, products, shelves, and price information are prioritized.  
- In **stations or stops**, access points, displays, and orientation markers are prioritized.  
- In a **restaurant or cafe**, the assistant focuses more on people, tables, or menus.

This gives you situation-optimized information without asking for every detail explicitly.

## On-device detection (optional)

An optional local detection mode may identify selected objects directly on the smartphone in a future version. This mode would work without internet and process image data locally only.

## Privacy and processing

In Cloud Mode, captured images are transferred to an external AI service for analysis. Only data required for analysis is transferred.

The optional on-device mode (if available) processes image data locally only.
