---
slug: ahrus
order: 1
title: "AHRUS Audible High Resolution Ultrasonic Sonar"
status: Prototype
shortDescription: >
  AHRUS es un concepto de perro guia electronico que apoya la ecolocalizacion
  mediante ultrasonido audible. El sistema busca hacer perceptibles antes
  obstaculos y estructuras sin reemplazar la percepcion espacial natural con
  auriculares.
summary: Concepto de perro guia electronico para ecolocalizacion con ultrasonido audible.
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
    alt: Representacion esquematica de una fuente sonora en movimiento de acimut y elevacion.
    caption: Fig. 1 Vista general de la representacion de direccion.
  - src: /research/ahrus/fig-02-azimuth-detail.png
    webp: /research/ahrus/fig-02-azimuth-detail.webp
    alt: Vista de detalle del acimut con movimiento lateral de la fuente sonora.
    caption: Fig. 1 Detalle izquierdo (acimut).
  - src: /research/ahrus/fig-03-elevation-detail.png
    webp: /research/ahrus/fig-03-elevation-detail.webp
    alt: Vista de detalle de elevacion con movimiento vertical de la fuente sonora.
    caption: Fig. 1 Detalle derecho (elevacion).
  - src: /research/ahrus/fig-04-demodulation.png
    webp: /research/ahrus/fig-04-demodulation.webp
    alt: Grafico de principio de autodemodulacion de ultrasonido modulado en aire.
    caption: Fig. 2 Principio de demodulacion por ultrasonido.
  - src: /research/ahrus/fig-05-prototype-overview.png
    webp: /research/ahrus/fig-05-prototype-overview.webp
    alt: Foto del prototipo AHRUS con carcasa y matriz de transductores.
    caption: Fig. 3 Implementacion del prototipo.
  - src: /research/ahrus/fig-06-prototype-transducer-detail.png
    webp: /research/ahrus/fig-06-prototype-transducer-detail.webp
    alt: Foto de detalle de la matriz circular de transductores del prototipo AHRUS.
    caption: Fig. 3 Detalle de la matriz de transductores.
  - src: /research/ahrus/fig-07-system-design.png
    webp: /research/ahrus/fig-07-system-design.webp
    alt: Diagrama de bloques con DSP, configuracion, Bluetooth y transductores de ultrasonido.
    caption: Fig. 4 Vista general del diseno del sistema AHRUS.
  - src: /research/ahrus/fig-08-distance-direction-borders.png
    webp: /research/ahrus/fig-08-distance-direction-borders.webp
    alt: Grafico de barras sobre percepcion de distancia, direccion y zonas limite en cuatro personas.
    caption: Fig. 5 Resultados sobre percepcion de distancia, direccion y limites.
  - src: /research/ahrus/fig-09-distance-threshold.png
    webp: /research/ahrus/fig-09-distance-threshold.webp
    alt: Grafico de barras sobre umbral de distancia en deteccion de obstaculos para columna y coche.
    caption: Fig. 6 Umbral de distancia en deteccion de obstaculos.
  - src: /research/ahrus/fig-10-width-estimation.png
    webp: /research/ahrus/fig-10-width-estimation.webp
    alt: Grafico de barras sobre desviacion en la estimacion de anchura de un obstaculo.
    caption: Fig. 7 Estimacion de anchura de un obstaculo.
  - src: /research/ahrus/fig-11-directivity-comparison.png
    webp: /research/ahrus/fig-11-directivity-comparison.webp
    alt: Comparacion de intensidad sonora y directividad entre chasquido de lengua y AHRUS.
    caption: Fig. 8 Comparacion global de directividad.
  - src: /research/ahrus/fig-12-flash-sonar-detail.png
    webp: /research/ahrus/fig-12-flash-sonar-detail.webp
    alt: Vista de detalle de la dispersion sonora amplia de un chasquido de lengua en flash sonar.
    caption: Fig. 8 Detalle izquierdo (flash sonar).
  - src: /research/ahrus/fig-13-ahrus-directivity-detail.png
    webp: /research/ahrus/fig-13-ahrus-directivity-detail.webp
    alt: Vista de detalle de la dispersion sonora focalizada en el sistema AHRUS.
    caption: Fig. 8 Detalle derecho (AHRUS).
seo:
  title: Proyecto AHRUS
  description: AHRUS investiga ultrasonido audible para apoyar la ecolocalizacion humana.
  keywords:
    - AHRUS
    - Echolocation
    - Assistive Technology
translationStatus: machine
sourceLang: de
---

## Objetivo

El proyecto AHRUS investiga como puede usarse el ultrasonido como canal adicional de orientacion para personas ciegas y con discapacidad visual. El objetivo es apoyo practico en la vida diaria, especialmente ante estructuras pequenas y superficies dificiles de percibir.

## Como funciona (resumen)

Se emite un haz de ultrasonido focalizado y modulado, que mediante acustica no lineal en aire se transforma parcialmente en senales audibles. Las reflexiones de objetos pueden percibirse con los propios oidos y ubicarse espacialmente.

## Que aporta frente a la ecolocalizacion clasica?

La ecolocalizacion activa clasica con chasquidos de lengua usa longitudes de onda mas largas y es menos selectiva en estructuras finas. AHRUS usa longitudes de onda de ultrasonido cortas y permite exploracion direccional clara, lo que puede mejorar la diferenciacion de limites estructurales y pequenos obstaculos en ciertos escenarios.

## Estado actual (prototipo y primeras pruebas)

Existe un prototipo funcional. En una primera evaluacion con cuatro participantes se analizaron distancia, direccion, estimacion de anchura y percepcion de limites, comparandolo con flash sonar clasico.

## Resultados

- Publicacion: [Ultrasonic Waves to Support Human Echolocation](/es/research/publications/ahrus-hcii)
