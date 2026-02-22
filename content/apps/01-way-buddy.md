---
slug: way-buddy
order: 1
name: Owli-AI Way-Buddy
platform: Android
status: Prototype
tagline: Digitale Orientierungshilfe für sichere Wege im Alltag.
valueProp: Erkennt begehbare Wege und gibt akustische Richtungs-Hinweise - direkt auf dem Smartphone.
audience: Blind, sehbehindert
cloud: optional
features:
  - title: Erkennung begehbarer Wege
    description: Die App analysiert das Kamerabild und erkennt Bereiche, die als sicher begehbar eingestuft werden.
  - title: Richtungsabschätzung in Echtzeit
    description: Aus der erkannten Wegfläche wird eine empfohlene Bewegungsrichtung berechnet.
  - title: Akustisches Stereo-Feedback
    description: Über ein links/rechts differenziertes Audiosignal erhältst du Hinweise zur optimalen Bewegungsrichtung.
  - title: On-Device Verarbeitung
    description: Die Bildanalyse erfolgt direkt auf dem Smartphone - es werden keine Kamerabilder an Server übertragen.
  - title: Trainingsmodus zur Datensammlung
    description: Optional können Bild- und Maskendaten lokal gespeichert werden, um Trainingsdaten für Modellverbesserungen zu erzeugen.
  - title: Entwicklungs- und Analysemodus
    description: Visualisierungen und Debug-Informationen ermöglichen eine transparente Darstellung der Modellvorhersagen.
privacy:
  mode: hybrid
  summary: Die Bildverarbeitung erfolgt vollständig auf dem Gerät. Es werden keine Kameradaten an externe Server übertragen.
  note: Gespeicherte Trainingsdaten verbleiben lokal auf deinem Smartphone.
requirements:
  - Android 10 oder neuer
  - Kamera-Zugriff
  - Optional Internet fuer spaetere Cloud-Features
links:
  primary:
    label: Way-Buddy testen
    href: /support
  secondary:
    label: Support kontaktieren
    href: /support
media:
  - src: /apps/way-buddy/icon-placeholder.svg
    alt: Platzhalter-Icon von Owli-AI Way-Buddy
    caption: App-Icon Platzhalter
  - src: /apps/way-buddy/icon-placeholder.svg
    alt: Platzhalter-Screenshot von Owli-AI Way-Buddy
    caption: UI-Vorschau Platzhalter
seo:
  description: Owli-AI Way-Buddy analysiert mit Hilfe der Smartphone-Kamera begehbare Wege und unterstützt dich durch akustisches Feedback bei der Orientierung. Die Verarbeitung erfolgt direkt auf dem Gerät.
---

## Für wen ist Owli-AI Way-Buddy gedacht?

Owli-AI Way-Buddy richtet sich an Menschen mit Sehbehinderung oder Blindheit, die zusätzliche Orientierung beim Gehen im Außenbereich benötigen. Die App ersetzt keinen Blindenstock oder Assistenzhund, kann aber als ergänzende digitale Unterstützung dienen.

## Was macht die App konkret?

Way-Buddy analysiert das Live-Kamerabild deines Smartphones und erkennt begehbare Flächen wie Gehwege oder freie Bereiche vor dir. Aus dieser Information wird eine empfohlene Bewegungsrichtung berechnet.

Statt visueller Hinweise erhältst du akustisches Feedback:
- Ein differenziertes Stereo-Signal zeigt dir an, ob du dich eher nach links oder rechts orientieren solltest.
- Die Intensität oder Position des Tons gibt zusätzliche Hinweise zur empfohlenen Richtung.

## So funktioniert Way-Buddy

1. **Kamera ausrichten**  
   Das Smartphone wird nach vorne ausgerichtet, sodass der Bereich vor dir erfasst wird.

2. **Segmentierung der Szene**  
   Ein trainiertes neuronales Netzwerk erkennt begehbare Flächen im Kamerabild.

3. **Richtungsberechnung**  
   Aus der erkannten Wegfläche wird eine stabile Bewegungsrichtung abgeleitet.

4. **Akustische Rückmeldung**  
   Über Kopfhörer oder Lautsprecher erhältst du ein links/rechts differenziertes Signal zur Orientierung.

## Trainings- und Entwicklungsmodus

Way-Buddy enthält zusätzlich einen Trainingsmodus, in dem Bild- und Maskendaten lokal gespeichert werden können. Diese Daten dienen der Weiterentwicklung und Verbesserung der zugrundeliegenden Modelle.

Ein Entwicklungsmodus visualisiert die Modellvorhersagen direkt auf dem Bildschirm und macht die Funktionsweise transparent nachvollziehbar.

## Datenschutz & Verarbeitung

Die Bildverarbeitung erfolgt vollständig auf dem Gerät. Es werden keine Kameradaten an externe Server übertragen. Gespeicherte Trainingsdaten verbleiben lokal auf deinem Smartphone.
