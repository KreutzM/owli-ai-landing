---
slug: electronic-guide-dog-neural-networks
title: An Electronic Guide Dog for the Blind based on Artificial Neural Networks
authors:
  - S. Lopatin
  - F. v. Zabiensky
  - M. Kreutzer
  - K. Rinn
  - D. Bienhaus
affiliation: Technische Hochschule Mittelhessen, University of Applied Sciences, Institute of Technology and Computer Science, Giessen, Germany
type: Paper
venue: ""
year: 2021
keywords:
  - electronic travel aid
  - blind sidewalk detection
  - portable ETA system
  - electronic travel aid technology
  - computer vision
  - convolutional neural network
abstract: >
  This paper presents a feasibility study for an electronic assistance system
  intended to support blind and visually impaired people in orientation and
  navigation in public space. The core approach is optical detection of
  walkable sidewalk areas using semantic segmentation with a neural network
  trained from scratch. In the practical implementation, an NVIDIA Jetson Nano
  is used as a mobile computing unit for on-device inference. Navigation cues
  are derived from detected sidewalk structures and output to the user as
  speech. The work therefore examines technical feasibility of a portable
  electronic guide dog based on computer vision and CNN.
pdf: /papers/electronic-guide-dog-neural-networks.pdf
heroImage:
  src: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.png
  webp: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.webp
  alt: Functional scheme of the Electronic Guide Dog with camera input, CNN segmentation, and derived navigation information.
  caption: Fig. 1 Functional scheme of the Electronic Guide Dog.
figures:
  - src: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.png
    webp: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.webp
    alt: Functional scheme of the Electronic Guide Dog with camera input, CNN segmentation, and derived navigation information.
    caption: Fig. 1 Functional scheme of the Electronic Guide Dog.
  - src: /research/electronic-guide-dog-neural-networks/fig-02-system-architecture.png
    webp: /research/electronic-guide-dog-neural-networks/fig-02-system-architecture.webp
    alt: System architecture with ROS2 nodes for camera, CNN segmentation, environmental analysis, and audio output.
    caption: Fig. 2 System architecture with data-flow based processing.
  - src: /research/electronic-guide-dog-neural-networks/fig-03-speed-precision-comparison.png
    webp: /research/electronic-guide-dog-neural-networks/fig-03-speed-precision-comparison.webp
    alt: Scatter plot comparing inference speed and mIoU of different segmentation architectures.
    caption: Fig. 3 Comparison of speed and precision.
  - src: /research/electronic-guide-dog-neural-networks/fig-04-segmentation-sample.png
    webp: /research/electronic-guide-dog-neural-networks/fig-04-segmentation-sample.webp
    alt: Example segmentation results for sidewalk areas from the test dataset.
    caption: Fig. 4 Comparison result of one test sample for DeepLabV3 and BiSeNetV2.
  - src: /research/electronic-guide-dog-neural-networks/fig-05-path-deviation-parameters.png
    webp: /research/electronic-guide-dog-neural-networks/fig-05-path-deviation-parameters.webp
    alt: Visualization of parameters used to calculate deviation from the optimal sidewalk path.
    caption: Fig. 5 Parameters for deviation calculation from optimal path.
  - src: /research/electronic-guide-dog-neural-networks/fig-06-experimental-prototype.png
    webp: /research/electronic-guide-dog-neural-networks/fig-06-experimental-prototype.webp
    alt: Photos of the experimental prototype with chest camera, computing unit, and headphones.
    caption: Fig. 6 Experimental prototype in field-test setup.
  - src: /research/electronic-guide-dog-neural-networks/fig-07-field-segmentation-examples.png
    webp: /research/electronic-guide-dog-neural-networks/fig-07-field-segmentation-examples.webp
    alt: Segmentation examples from field tests with marked walkable sidewalk area.
    caption: Fig. 7 Segmentation examples from field test.
seo:
  title: An Electronic Guide Dog for the Blind (Artificial Neural Networks)
  description: Feasibility study for a portable ETA system with optical sidewalk detection, CNN segmentation, and Jetson Nano.
  keywords:
    - Electronic Guide Dog
    - ETA
    - Sidewalk Detection
    - Computer Vision
translationStatus: machine
sourceLang: de
---
