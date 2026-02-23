---
slug: way-buddy
order: 1
name: Owli-AI Way-Buddy
platform: Android
status: Prototype
tagline: Digital orientation aid for safer routes in daily life.
valueProp: Detects walkable paths and gives acoustic direction cues directly on your smartphone.
audience: Blind, visually impaired
cloud: optional
features:
  - title: Walkable path detection
    description: The app analyzes the camera image and detects areas classified as safe to walk.
  - title: Real-time direction estimation
    description: A recommended movement direction is calculated from the detected walkable area.
  - title: Acoustic stereo feedback
    description: A left/right differentiated audio signal gives guidance for the optimal movement direction.
  - title: On-device processing
    description: Image analysis runs directly on the smartphone and no camera images are sent to servers.
  - title: Training mode for data collection
    description: Optionally, image and mask data can be stored locally to generate training data for model improvements.
  - title: Development and analysis mode
    description: Visualizations and debug information provide transparent insight into model predictions.
privacy:
  mode: hybrid
  summary: Image processing runs fully on-device. No camera data is transferred to external servers.
  note: Stored training data remains local on your smartphone.
requirements:
  - Android 10 or newer
  - Camera access
  - Optional internet for future cloud features
icon:
  src: /apps/way-buddy/icon-512-transparent.webp
  alt: Icon of Owli-AI Way-Buddy
  width: 512
  height: 512
logo:
  src: /apps/way-buddy/logo-1024-transparent.webp
  alt: Logo of Owli-AI Way-Buddy
  width: 1024
  height: 1024
links:
  primary:
    label: Test Way-Buddy
    href: /support
  secondary:
    label: Contact support
    href: /support
media:
  - src: /apps/way-buddy/icon-placeholder.svg
    alt: App icon of Owli-AI Way-Buddy
    caption: App icon placeholder
  - src: /apps/way-buddy/icon-placeholder.svg
    alt: Example view of Owli-AI Way-Buddy with path detection and audio orientation
    caption: UI preview placeholder
seo:
  title: Orientation app with walkable path detection and audio feedback
  description: Owli-AI Way-Buddy is an Android orientation app that can detect walkable paths and supports visually impaired users in navigation through audio feedback.
  keywords:
    - Orientation app
    - Walkable path detection
    - Navigation for visual impairment
    - Audio feedback
translationStatus: machine
sourceLang: de
---

## Who is Owli-AI Way-Buddy for?

Owli-AI Way-Buddy is designed for blind and visually impaired people who need additional orientation support while walking outdoors. The app does not replace a white cane or guide dog, but can serve as an additional digital aid.

If you are looking for an orientation app that can detect walkable paths, Way-Buddy gives you clear real-time direction cues. Navigation support for visual impairment is delivered through precise audio feedback and is intended as additional help in daily life.

## What does the app do?

Way-Buddy analyzes your smartphone's live camera image and detects walkable surfaces such as sidewalks or free space ahead of you. From this information, it calculates a recommended movement direction.

Instead of visual hints, you receive acoustic feedback:
- A differentiated stereo signal indicates whether you should orient more to the left or right.
- Tone intensity or position provides additional direction cues.

## How Way-Buddy works

1. **Point the camera**  
   The smartphone is pointed forward so the area in front of you is captured.

2. **Scene segmentation**  
   A trained neural network detects walkable surfaces in the camera image.

3. **Direction calculation**  
   A stable movement direction is derived from the detected walkable area.

4. **Acoustic feedback**  
   Through headphones or speaker, you receive a left/right differentiated orientation signal.

## Training and development mode

Way-Buddy also includes a training mode where image and mask data can be stored locally. This data is used to further develop and improve the underlying models.

A development mode visualizes model predictions directly on screen and makes system behavior transparent.

## Privacy and processing

Image processing runs fully on-device. No camera data is transferred to external servers. Stored training data remains local on your smartphone.
