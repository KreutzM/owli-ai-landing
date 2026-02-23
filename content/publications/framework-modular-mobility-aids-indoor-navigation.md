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
  Das Paper beschreibt ein Framework fuer die komponentenbasierte Entwicklung
  von Electronic Travel Aids (ETAs), um wiederkehrende Entwicklungsarbeit in
  Forschungsprojekten zu reduzieren. Kern des Ansatzes ist ein Modell zur
  Abgrenzung von Komponenten, damit Teilfunktionen wie Umgebungserfassung,
  Hinderniserkennung und Ausgabemodalitaeten austauschbar kombiniert werden
  koennen. Als praktischer Nachweis wird ein Indoor-Navigationssystem auf Basis
  von Ultra-Wideband (UWB) umgesetzt. Die Implementierung erfolgt im ROS2-
  Oekosystem, um bestehende Werkzeuge, Schnittstellen und Wiederverwendbarkeit
  zwischen Arbeitsgruppen zu nutzen. Abschliessend reflektiert die Arbeit den
  Entwicklungsprozess und bewertet Chancen sowie Grenzen von ROS2 fuer
  modulare ETA-Prototypen.
pdf: /papers/framework-modular-mobility-aids-indoor-navigation.pdf
heroImage:
  src: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.png
  webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.webp
  alt: Blockdiagramm eines Indoor-Navigationssystems mit Positionierung, Smartphone-App und Feedback-Geraet.
  caption: Fig. 3 Indoor-Navigationssystem mit austauschbaren Komponenten.
figures:
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-01-hmi-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-01-hmi-model.webp
    alt: Erweitertes HMI-Modell fuer ETAs mit Mensch, Sensorik, Anzeigen und internem Maschinenzustand.
    caption: Fig. 2 Erweitertes HMI-Modell fuer Electronic Travel Aids.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.webp
    alt: Architektur eines Indoor-Navigationssystems mit bHapticsX40, Pozyx-System, Kompass und Smartphone-App.
    caption: Fig. 3 Indoor-Navigationssystem mit austauschbaren Komponenten.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-03-carla-substitution-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-03-carla-substitution-model.webp
    alt: Architekturvariante mit CARLA-Simulation, in der Umgebung und Sensorik virtuell ersetzt werden.
    caption: Fig. 4 Indoor-Navigation mit CARLA als Simulationsumgebung.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-04-navigation-fmc-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-04-navigation-fmc-model.webp
    alt: Abstraktes FMC-Modell eines Navigationssystems mit Positionierung, Korrektur und Routenmanagement.
    caption: Fig. 5 Abstraktes FMC-Modell eines Navigationssystems.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-05-vibration-vest-fmc-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-05-vibration-vest-fmc-model.webp
    alt: FMC-Modell der Vibrationsweste mit Treiber, Feedback-Algorithmen und Bluetooth-Anbindung.
    caption: Fig. 6 FMC-Modell der bHapticsX40-Vest-Implementierung.
seo:
  title: Framework for Developing Modular Mobility Aids (Indoor Navigation Use Case)
  description: Komponentenbasiertes ETA-Framework mit UWB-Indoor-Navigation und ROS2 als Entwicklungs-Oekosystem.
  keywords:
    - ETA
    - ROS2
    - Indoor Navigation
    - Mobility Aid
---
