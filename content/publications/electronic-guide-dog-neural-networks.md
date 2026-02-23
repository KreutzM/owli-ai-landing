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
  Das Paper praesentiert eine Machbarkeitsstudie fuer ein elektronisches
  Assistenzsystem, das blinde und sehbeeintraechtigte Menschen bei Orientierung
  und Navigation im oeffentlichen Raum unterstuetzen soll. Der Kernansatz ist
  die optische Erkennung von begehbaren Gehwegflaechen mit semantischer
  Segmentierung durch ein von Grund auf trainiertes neuronales Netz. In der
  praktischen Umsetzung wird ein NVIDIA Jetson Nano als mobile Recheneinheit
  fuer On-Device-Inferenz eingesetzt. Aus der erkannten Gehwegstruktur werden
  Navigationshinweise abgeleitet, die als Sprachausgabe an die nutzende Person
  ausgegeben werden. Damit untersucht die Arbeit die technische Umsetzbarkeit
  eines tragbaren Electronic Guide Dog auf Basis von Computer Vision und CNN.
pdf: /papers/electronic-guide-dog-neural-networks.pdf
heroImage:
  src: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.png
  webp: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.webp
  alt: Funktionsschema des Electronic Guide Dog mit Kameraeingang, CNN-Segmentierung und abgeleiteten Navigationsinformationen.
  caption: Fig. 1 Funktionales Schema des Electronic Guide Dog.
figures:
  - src: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.png
    webp: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.webp
    alt: Funktionsschema des Electronic Guide Dog mit Kameraeingang, CNN-Segmentierung und abgeleiteten Navigationsinformationen.
    caption: Fig. 1 Funktionales Schema des Electronic Guide Dog.
  - src: /research/electronic-guide-dog-neural-networks/fig-02-system-architecture.png
    webp: /research/electronic-guide-dog-neural-networks/fig-02-system-architecture.webp
    alt: Systemarchitektur mit ROS2-Nodes fuer Kamera, CNN-Segmentierung, Umgebungsanalyse und Audioausgabe.
    caption: Fig. 2 Systemarchitektur mit datenflussbasierter Verarbeitung.
  - src: /research/electronic-guide-dog-neural-networks/fig-03-speed-precision-comparison.png
    webp: /research/electronic-guide-dog-neural-networks/fig-03-speed-precision-comparison.webp
    alt: Streudiagramm zum Vergleich von Inferenzgeschwindigkeit und mIoU verschiedener Segmentierungsarchitekturen.
    caption: Fig. 3 Vergleich von Geschwindigkeit und Praezision.
  - src: /research/electronic-guide-dog-neural-networks/fig-04-segmentation-sample.png
    webp: /research/electronic-guide-dog-neural-networks/fig-04-segmentation-sample.webp
    alt: Beispielhafte Segmentierungsergebnisse fuer Gehwegflaechen aus dem Testdatensatz.
    caption: Fig. 4 Vergleichsergebnis eines Testsamples fuer DeepLabV3 und BiSeNetV2.
  - src: /research/electronic-guide-dog-neural-networks/fig-05-path-deviation-parameters.png
    webp: /research/electronic-guide-dog-neural-networks/fig-05-path-deviation-parameters.webp
    alt: Visualisierung der Parameter zur Berechnung der Abweichung vom optimalen Gehwegpfad.
    caption: Fig. 5 Parameter zur Abweichungsberechnung vom optimalen Pfad.
  - src: /research/electronic-guide-dog-neural-networks/fig-06-experimental-prototype.png
    webp: /research/electronic-guide-dog-neural-networks/fig-06-experimental-prototype.webp
    alt: Fotos des experimentellen Prototyps mit Brustgurtkamera, Recheneinheit und Kopfhoerern.
    caption: Fig. 6 Experimenteller Prototyp im Feldtest-Setup.
  - src: /research/electronic-guide-dog-neural-networks/fig-07-field-segmentation-examples.png
    webp: /research/electronic-guide-dog-neural-networks/fig-07-field-segmentation-examples.webp
    alt: Segmentierungsbeispiele aus Feldtests mit markierter begehbarer Gehwegflaeche.
    caption: Fig. 7 Segmentierungsbeispiele aus dem Feldtest.
seo:
  title: An Electronic Guide Dog for the Blind (Artificial Neural Networks)
  description: Machbarkeitsstudie fuer ein tragbares ETA-System mit optischer Gehwegerkennung, CNN-Segmentierung und Jetson Nano.
  keywords:
    - Electronic Guide Dog
    - ETA
    - Sidewalk Detection
    - Computer Vision
---

