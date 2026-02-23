---
slug: ahrus
order: 1
title: "AHRUS Audible High Resolution Ultrasonic Sonar"
status: Prototype
shortDescription: >
  AHRUS is an electronic guide-dog concept that supports echolocation through
  audible ultrasound. The system aims to make obstacles and structures
  perceivable earlier without replacing natural spatial perception with
  headphones.
summary: Electronic guide-dog concept for echolocation with audible ultrasound.
keywords:
  - echolocation
  - ultrasound
  - assistive technology
  - spatial hearing
  - obstacle detection
relatedPublicationSlug: ahrus-hcii
visuals:
  - src: /research/ahrus/fig-01-overview.png
    webp: /research/ahrus/fig-01-overview.webp
    alt: Schematic view of a sound source moving in azimuth and elevation.
    caption: Fig. 1 Overall directional representation.
  - src: /research/ahrus/fig-02-azimuth-detail.png
    webp: /research/ahrus/fig-02-azimuth-detail.webp
    alt: Detailed azimuth view with lateral sound source movement.
    caption: Fig. 1 Detail left (azimuth).
  - src: /research/ahrus/fig-03-elevation-detail.png
    webp: /research/ahrus/fig-03-elevation-detail.webp
    alt: Detailed elevation view with vertical sound source movement.
    caption: Fig. 1 Detail right (elevation).
  - src: /research/ahrus/fig-04-demodulation.png
    webp: /research/ahrus/fig-04-demodulation.webp
    alt: Principle diagram of self-demodulation of modulated ultrasound in air.
    caption: Fig. 2 Principle of ultrasound demodulation.
  - src: /research/ahrus/fig-05-prototype-overview.png
    webp: /research/ahrus/fig-05-prototype-overview.webp
    alt: Photo of the AHRUS prototype with housing and transducer array.
    caption: Fig. 3 Prototype implementation.
  - src: /research/ahrus/fig-06-prototype-transducer-detail.png
    webp: /research/ahrus/fig-06-prototype-transducer-detail.webp
    alt: Detailed photo of the circular transducer array on the AHRUS prototype.
    caption: Fig. 3 Transducer array detail.
  - src: /research/ahrus/fig-07-system-design.png
    webp: /research/ahrus/fig-07-system-design.webp
    alt: Block diagram with DSP, configuration, Bluetooth, and ultrasound transducers.
    caption: Fig. 4 AHRUS system design overview.
  - src: /research/ahrus/fig-08-distance-direction-borders.png
    webp: /research/ahrus/fig-08-distance-direction-borders.webp
    alt: Bar chart on perception of distance, direction, and boundary zones in four participants.
    caption: Fig. 5 Results for distance, direction, and boundary perception.
  - src: /research/ahrus/fig-09-distance-threshold.png
    webp: /research/ahrus/fig-09-distance-threshold.webp
    alt: Bar chart on distance threshold in obstacle detection for column and car.
    caption: Fig. 6 Distance threshold in obstacle detection.
  - src: /research/ahrus/fig-10-width-estimation.png
    webp: /research/ahrus/fig-10-width-estimation.webp
    alt: Bar chart on deviation in obstacle width estimation.
    caption: Fig. 7 Obstacle width estimation.
  - src: /research/ahrus/fig-11-directivity-comparison.png
    webp: /research/ahrus/fig-11-directivity-comparison.webp
    alt: Comparison of sound intensity and directivity of tongue click and AHRUS.
    caption: Fig. 8 Overall comparison of directivity.
  - src: /research/ahrus/fig-12-flash-sonar-detail.png
    webp: /research/ahrus/fig-12-flash-sonar-detail.webp
    alt: Detail view of broad sound radiation of a tongue click in flash sonar.
    caption: Fig. 8 Detail left (flash sonar).
  - src: /research/ahrus/fig-13-ahrus-directivity-detail.png
    webp: /research/ahrus/fig-13-ahrus-directivity-detail.webp
    alt: Detail view of focused sound radiation in the AHRUS system.
    caption: Fig. 8 Detail right (AHRUS).
seo:
  title: AHRUS Project
  description: AHRUS explores audible ultrasound to support human echolocation.
  keywords:
    - AHRUS
    - Echolocation
    - Assistive Technology
translationStatus: machine
sourceLang: de
---

## Goal

The AHRUS project examines how ultrasound can be used as an additional orientation channel for blind and visually impaired people. The goal is practical support in daily life, especially for small structures and surfaces that are hard to perceive.

## How it works (short)

A focused ultrasound beam is emitted with modulation and is partially converted into audible signals by nonlinear acoustics in air. Reflections from objects can then be perceived with the user's own ears and spatially classified.

## What is new compared to classic echolocation?

Classic active echolocation with tongue clicks uses longer wavelengths and is therefore less selective for fine structures. AHRUS uses short ultrasound wavelengths and enables clearly directed scanning, which can improve differentiation of structure boundaries and small obstacles in specific scenarios.

## Current status (prototype and first tests)

A functional prototype exists. In an initial evaluation with four participants, distance, direction, width estimation, and boundary perception were analyzed and compared with classic flash sonar.

## Outputs

- Publication: [Ultrasonic Waves to Support Human Echolocation](/research/publications/ahrus-hcii)
