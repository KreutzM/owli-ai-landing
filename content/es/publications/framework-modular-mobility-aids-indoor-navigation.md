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
  Este articulo describe un framework para el desarrollo basado en componentes
  de electronic travel aids (ETAs), con el objetivo de reducir trabajo
  repetitivo en proyectos de investigacion. La contribucion central es un
  modelo para delimitar componentes, de modo que subfunciones como captura del
  entorno, deteccion de obstaculos y modalidades de salida puedan combinarse de
  forma intercambiable. Como validacion practica se implementa un sistema de
  navegacion interior basado en ultra-wideband (UWB). La implementacion usa el
  ecosistema ROS2 para aprovechar herramientas, interfaces y reutilizacion entre
  equipos. El articulo cierra con una reflexion sobre el proceso de desarrollo y
  una evaluacion de oportunidades y limites de ROS2 para prototipos ETA
  modulares.
pdf: /papers/framework-modular-mobility-aids-indoor-navigation.pdf
heroImage:
  src: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.png
  webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.webp
  alt: Diagrama de bloques de un sistema de navegacion interior con posicionamiento, app movil y dispositivo de feedback.
  caption: Fig. 3 Sistema de navegacion interior con componentes intercambiables.
figures:
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-01-hmi-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-01-hmi-model.webp
    alt: Modelo HMI ampliado para ETAs con persona usuaria, sensores, salidas y estado interno de maquina.
    caption: Fig. 2 Modelo HMI ampliado para electronic travel aids.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-02-indoor-navigation-architecture.webp
    alt: Arquitectura de navegacion interior con bHapticsX40, sistema Pozyx, brujula y app de smartphone.
    caption: Fig. 3 Sistema de navegacion interior con componentes intercambiables.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-03-carla-substitution-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-03-carla-substitution-model.webp
    alt: Variante de arquitectura con simulacion CARLA, donde entorno y sensores se sustituyen virtualmente.
    caption: Fig. 4 Navegacion interior con CARLA como entorno de simulacion.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-04-navigation-fmc-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-04-navigation-fmc-model.webp
    alt: Modelo FMC abstracto de un sistema de navegacion con posicionamiento, correccion y gestion de rutas.
    caption: Fig. 5 Modelo FMC abstracto de un sistema de navegacion.
  - src: /research/framework-modular-mobility-aids-indoor-navigation/fig-05-vibration-vest-fmc-model.png
    webp: /research/framework-modular-mobility-aids-indoor-navigation/fig-05-vibration-vest-fmc-model.webp
    alt: Modelo FMC de chaleco vibratorio con capa de controladores, algoritmos de feedback e integracion Bluetooth.
    caption: Fig. 6 Modelo FMC de la implementacion del chaleco bHapticsX40.
seo:
  title: Framework for Developing Modular Mobility Aids (Indoor Navigation Use Case)
  description: Framework ETA basado en componentes con navegacion interior UWB y ROS2 como ecosistema de desarrollo.
  keywords:
    - ETA
    - ROS2
    - Indoor Navigation
    - Mobility Aid
translationStatus: machine
sourceLang: de
---
