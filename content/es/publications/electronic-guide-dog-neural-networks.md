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
  Este articulo presenta un estudio de viabilidad para un sistema electronico
  de asistencia destinado a apoyar a personas ciegas y con discapacidad visual
  en orientacion y navegacion en espacios publicos. El enfoque central es la
  deteccion optica de superficies transitables de acera mediante segmentacion
  semantica con una red neuronal entrenada desde cero. En la implementacion
  practica se utiliza un NVIDIA Jetson Nano como unidad de computo movil para
  inferencia en el dispositivo. A partir de la estructura de acera detectada se
  derivan indicaciones de navegacion que se entregan en salida de voz a la
  persona usuaria. El trabajo analiza asi la viabilidad tecnica de un perro
  guia electronico portatil basado en vision por computador y CNN.
pdf: /papers/electronic-guide-dog-neural-networks.pdf
heroImage:
  src: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.png
  webp: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.webp
  alt: Esquema funcional del Electronic Guide Dog con entrada de camara, segmentacion CNN e informacion de navegacion derivada.
  caption: Fig. 1 Esquema funcional del Electronic Guide Dog.
figures:
  - src: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.png
    webp: /research/electronic-guide-dog-neural-networks/fig-01-functional-scheme.webp
    alt: Esquema funcional del Electronic Guide Dog con entrada de camara, segmentacion CNN e informacion de navegacion derivada.
    caption: Fig. 1 Esquema funcional del Electronic Guide Dog.
  - src: /research/electronic-guide-dog-neural-networks/fig-02-system-architecture.png
    webp: /research/electronic-guide-dog-neural-networks/fig-02-system-architecture.webp
    alt: Arquitectura del sistema con nodos ROS2 para camara, segmentacion CNN, analisis del entorno y salida de audio.
    caption: Fig. 2 Arquitectura del sistema con procesamiento basado en flujo de datos.
  - src: /research/electronic-guide-dog-neural-networks/fig-03-speed-precision-comparison.png
    webp: /research/electronic-guide-dog-neural-networks/fig-03-speed-precision-comparison.webp
    alt: Diagrama de dispersion para comparar velocidad de inferencia y mIoU de distintas arquitecturas de segmentacion.
    caption: Fig. 3 Comparacion de velocidad y precision.
  - src: /research/electronic-guide-dog-neural-networks/fig-04-segmentation-sample.png
    webp: /research/electronic-guide-dog-neural-networks/fig-04-segmentation-sample.webp
    alt: Ejemplos de resultados de segmentacion para aceras en el conjunto de prueba.
    caption: Fig. 4 Resultado comparativo de una muestra de prueba para DeepLabV3 y BiSeNetV2.
  - src: /research/electronic-guide-dog-neural-networks/fig-05-path-deviation-parameters.png
    webp: /research/electronic-guide-dog-neural-networks/fig-05-path-deviation-parameters.webp
    alt: Visualizacion de parametros para calcular desviacion respecto a la ruta peatonal optima.
    caption: Fig. 5 Parametros para calculo de desviacion respecto a la ruta optima.
  - src: /research/electronic-guide-dog-neural-networks/fig-06-experimental-prototype.png
    webp: /research/electronic-guide-dog-neural-networks/fig-06-experimental-prototype.webp
    alt: Fotos del prototipo experimental con camara de pecho, unidad de computo y auriculares.
    caption: Fig. 6 Prototipo experimental en configuracion de prueba de campo.
  - src: /research/electronic-guide-dog-neural-networks/fig-07-field-segmentation-examples.png
    webp: /research/electronic-guide-dog-neural-networks/fig-07-field-segmentation-examples.webp
    alt: Ejemplos de segmentacion de pruebas de campo con zona de acera transitable marcada.
    caption: Fig. 7 Ejemplos de segmentacion en prueba de campo.
seo:
  title: An Electronic Guide Dog for the Blind (Artificial Neural Networks)
  description: Estudio de viabilidad de un sistema ETA portatil con deteccion optica de aceras, segmentacion CNN y Jetson Nano.
  keywords:
    - Electronic Guide Dog
    - ETA
    - Sidewalk Detection
    - Computer Vision
translationStatus: machine
sourceLang: de
---
