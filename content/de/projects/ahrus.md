---
slug: ahrus
order: 1
title: "AHRUS  Audible High Resolution Ultrasonic Sonar"
status: Prototype
shortDescription: >
  AHRUS ist ein elektronisches Guide-Dog-Konzept, das Echolokation durch
  hoerbaren Ultraschall unterstuetzt. Das System soll Hindernisse und
  Strukturen fruehzeitiger wahrnehmbar machen, ohne die natuerliche
  Raumwahrnehmung durch Kopfhoerer zu ersetzen.
summary: Elektronisches Guide-Dog-Konzept fuer Echoortung mit hoerbarem Ultraschall.
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
    alt: Schematische Darstellung einer Schallquelle bei Bewegung in Azimut und Elevation.
    caption: Fig. 1 Gesamtansicht der Richtungsdarstellung.
  - src: /research/ahrus/fig-02-azimuth-detail.png
    webp: /research/ahrus/fig-02-azimuth-detail.webp
    alt: Detailansicht der Azimut-Darstellung mit seitlicher Schallquellenbewegung.
    caption: Fig. 1 Detail links (Azimut).
  - src: /research/ahrus/fig-03-elevation-detail.png
    webp: /research/ahrus/fig-03-elevation-detail.webp
    alt: Detailansicht der Elevations-Darstellung mit vertikaler Schallquellenbewegung.
    caption: Fig. 1 Detail rechts (Elevation).
  - src: /research/ahrus/fig-04-demodulation.png
    webp: /research/ahrus/fig-04-demodulation.webp
    alt: Prinzipgrafik zur Selbst-Demodulation von moduliertem Ultraschall in Luft.
    caption: Fig. 2 Prinzip der Ultraschall-Demodulation.
  - src: /research/ahrus/fig-05-prototype-overview.png
    webp: /research/ahrus/fig-05-prototype-overview.webp
    alt: Foto des AHRUS-Prototyps mit Gehaeuse und Transducer-Array.
    caption: Fig. 3 Prototyp-Implementierung.
  - src: /research/ahrus/fig-06-prototype-transducer-detail.png
    webp: /research/ahrus/fig-06-prototype-transducer-detail.webp
    alt: Detailfoto des runden Transducer-Arrays am AHRUS-Prototyp.
    caption: Fig. 3 Detail des Transducer-Arrays.
  - src: /research/ahrus/fig-07-system-design.png
    webp: /research/ahrus/fig-07-system-design.webp
    alt: Blockdiagramm mit DSP, Konfiguration, Bluetooth und Ultraschall-Transducer.
    caption: Fig. 4 Design-Uebersicht des AHRUS-Systems.
  - src: /research/ahrus/fig-08-distance-direction-borders.png
    webp: /research/ahrus/fig-08-distance-direction-borders.webp
    alt: Balkendiagramm zur Wahrnehmung von Distanz, Richtung und Grenzbereichen bei vier Personen.
    caption: Fig. 5 Ergebnisse zu Distanz-, Richtungs- und Grenzwahrnehmung.
  - src: /research/ahrus/fig-09-distance-threshold.png
    webp: /research/ahrus/fig-09-distance-threshold.webp
    alt: Balkendiagramm zur Distanzschwelle bei der Hinderniserkennung fuer Saeule und Auto.
    caption: Fig. 6 Distanzschwelle bei der Hinderniserkennung.
  - src: /research/ahrus/fig-10-width-estimation.png
    webp: /research/ahrus/fig-10-width-estimation.webp
    alt: Balkendiagramm zur Abweichung bei der Breitenabschaetzung eines Hindernisses.
    caption: Fig. 7 Breitenabschaetzung eines Hindernisses.
  - src: /research/ahrus/fig-11-directivity-comparison.png
    webp: /research/ahrus/fig-11-directivity-comparison.webp
    alt: Vergleich der Schallintensitaet und Direktivitaet von Zungenklick und AHRUS.
    caption: Fig. 8 Gesamtvergleich der Direktivitaet.
  - src: /research/ahrus/fig-12-flash-sonar-detail.png
    webp: /research/ahrus/fig-12-flash-sonar-detail.webp
    alt: Detailansicht der breiten Schallausbreitung eines Zungenklicks beim Flash Sonar.
    caption: Fig. 8 Detail links (Flash Sonar).
  - src: /research/ahrus/fig-13-ahrus-directivity-detail.png
    webp: /research/ahrus/fig-13-ahrus-directivity-detail.webp
    alt: Detailansicht der fokussierten Schallausbreitung beim AHRUS-System.
    caption: Fig. 8 Detail rechts (AHRUS).
seo:
  title: AHRUS Projekt
  description: AHRUS erforscht hoerbaren Ultraschall zur Unterstuetzung der menschlichen Echolokation.
  keywords:
    - AHRUS
    - Echolokation
    - Assistive Technology
---

## Ziel

Das Projekt AHRUS untersucht, wie Ultraschall als zusaetzlicher Orientierungskanal fuer blinde und sehbeeintraechtigte Menschen nutzbar wird. Ziel ist eine praxisnahe Unterstuetzung im Alltag, besonders bei kleinen Strukturen und schwer wahrnehmbaren Oberflaechen.

## Wie es funktioniert (kurz)

Ein fokussierter Ultraschallstrahl wird moduliert ausgesendet und durch nichtlineare Akustik in der Luft teilweise in hoerbare Signale ueberfuehrt. Reflektionen von Objekten koennen dadurch mit den eigenen Ohren wahrgenommen und raeumlich eingeordnet werden.

## Was ist neu im Vergleich zu klassischer Echolokation?

Klassische aktive Echolokation mit Zungenklick arbeitet mit laengeren Wellenlaengen und ist dadurch weniger selektiv bei feinen Strukturen. AHRUS nutzt kurze Ultraschallwellen und ermoeglicht eine deutlich gerichtete Abtastung, wodurch Strukturgrenzen und kleine Hindernisse in bestimmten Szenarien besser differenzierbar werden.

## Aktueller Stand (Prototyp & erste Tests)

Es liegt ein funktionaler Prototyp vor. In einer ersten Evaluation mit vier Teilnehmenden wurden Distanz, Richtung, Breitenabschaetzung und Grenzwahrnehmung untersucht und mit klassischem Flash Sonar verglichen.

## Outputs

- Publikation: [Ultrasonic Waves to Support Human Echolocation](/research/publications/ahrus-hcii)

