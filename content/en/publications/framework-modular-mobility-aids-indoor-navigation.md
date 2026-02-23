---
slug: framework-modular-mobility-aids-indoor-navigation
title: "A Framework for Developing Modular Mobility Aids for People with Visual Impairment: An Indoor Navigation Use Case"
authors:
  - Florian von Zabiensky
  - Grigory Fridman
  - Oguz Ozdemir
  - Sebastian Reuter
  - Michael Kreutzer
  - Diethelm Bienhaus
affiliation: Technische Hochschule Mittelhessen, University of Applied Sciences, Giessen, Germany
type: Paper
venue: ""
year: 2023
keywords:
  - ETA
  - electronic travel aid
  - mobility aid
  - ROS2
  - ROS
  - robot operating system
  - component-based development
abstract: >
  This paper describes a framework for component-based development of
  electronic travel aids (ETAs) to reduce repetitive development effort in
  research projects. The core contribution is a component delimitation model
  that allows interchangeable combination of subfunctions such as environment
  sensing, obstacle detection, and output modalities. As practical validation,
  an indoor navigation system based on ultra-wideband (UWB) is implemented.
  Implementation uses the ROS2 ecosystem to leverage existing tooling,
  interfaces, and reuse across teams. The paper concludes with reflections on
  the development process and an assessment of opportunities and limitations of
  ROS2 for modular ETA prototypes.
pdf: /papers/framework-modular-mobility-aids-indoor-navigation.pdf
heroImage:
  src: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.png
  webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.webp
  alt: Block diagram of an indoor navigation system with positioning, smartphone app, and feedback device.
  caption: Fig. 3 Indoor navigation system with interchangeable components.
figures:
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-01-hmi-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-01-hmi-model.webp
    alt: Extended HMI model for ETAs with human user, sensors, displays, and internal machine state.
    caption: Fig. 2 Extended HMI model for electronic travel aids.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.webp
    alt: Indoor navigation architecture with bHapticsX40, Pozyx system, compass, and smartphone app.
    caption: Fig. 3 Indoor navigation system with interchangeable components.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-03-carla-substitution-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-03-carla-substitution-model.webp
    alt: Architecture variant with CARLA simulation where environment and sensors are replaced virtually.
    caption: Fig. 4 Indoor navigation with CARLA as simulation environment.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-04-navigation-fmc-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-04-navigation-fmc-model.webp
    alt: Abstract FMC model of a navigation system with positioning, correction, and route management.
    caption: Fig. 5 Abstract FMC model of a navigation system.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-05-vibration-vest-fmc-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-05-vibration-vest-fmc-model.webp
    alt: FMC model of a vibration vest with driver layer, feedback algorithms, and Bluetooth integration.
    caption: Fig. 6 FMC model of bHapticsX40 vest implementation.
seo:
  title: Framework for Developing Modular Mobility Aids (Indoor Navigation Use Case)
  description: Component-based ETA framework with UWB indoor navigation and ROS2 as development ecosystem.
  keywords:
    - ETA
    - ROS2
    - Indoor Navigation
    - Mobility Aid
translationStatus: machine
sourceLang: de
---
