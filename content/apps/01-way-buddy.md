---
slug: way-buddy
order: 1
name: Owli-AI Way-Buddy
platform: Android
status: Prototype
tagline: Digitale Orientierungshilfe fuer sichere Wege im Alltag.
valueProp: Erkennt begehbare Wege und gibt akustische Richtungs-Hinweise - direkt auf dem Smartphone.
audience: Blind, sehbehindert
cloud: optional
features:
  - title: Erkennung begehbarer Wege
    description: Die App analysiert das Kamerabild und erkennt Bereiche, die als sicher begehbar eingestuft werden.
  - title: Richtungsabschaetzung in Echtzeit
    description: Aus der erkannten Wegflaeche wird eine empfohlene Bewegungsrichtung berechnet.
  - title: Akustisches Stereo-Feedback
    description: Ueber ein links/rechts differenziertes Audiosignal erhaeltst du Hinweise zur optimalen Bewegungsrichtung.
  - title: On-Device Verarbeitung
    description: Die Bildanalyse erfolgt direkt auf dem Smartphone - es werden keine Kamerabilder an Server uebertragen.
  - title: Trainingsmodus zur Datensammlung
    description: Optional koennen Bild- und Maskendaten lokal gespeichert werden, um Trainingsdaten fuer Modellverbesserungen zu erzeugen.
  - title: Entwicklungs- und Analysemodus
    description: Visualisierungen und Debug-Informationen ermoeglichen eine transparente Darstellung der Modellvorhersagen.
privacy:
  mode: hybrid
  summary: Die Bildverarbeitung erfolgt vollstaendig auf dem Geraet. Es werden keine Kameradaten an externe Server uebertragen.
  note: Gespeicherte Trainingsdaten verbleiben lokal auf deinem Smartphone.
requirements:
  - Android 10 oder neuer
  - Kamera-Zugriff
  - Optional Internet fuer spaetere Cloud-Features
icon:
  src: /apps/way-buddy/icon-512-transparent.webp
  alt: Icon von Owli-AI Way-Buddy
  width: 512
  height: 512
logo:
  src: /apps/way-buddy/logo-1024-transparent.webp
  alt: Logo von Owli-AI Way-Buddy
  width: 1024
  height: 1024
links:
  primary:
    label: Way-Buddy testen
    href: /support
  secondary:
    label: Support kontaktieren
    href: /support
media:
  - src: /apps/way-buddy/icon-placeholder.svg
    alt: App-Icon von Owli-AI Way-Buddy
    caption: App-Icon Platzhalter
  - src: /apps/way-buddy/icon-placeholder.svg
    alt: Beispielansicht von Owli-AI Way-Buddy mit Wegerkennung und Audio-Orientierung
    caption: UI-Vorschau Platzhalter
seo:
  title: Orientierungshilfe App mit Gehweg-Erkennung und Audio-Feedback
  description: Owli-AI Way-Buddy ist eine Orientierungshilfe App fuer Android, die Gehweg erkennen kann und Menschen mit Sehbehinderung per Audio Feedback bei der Navigation unterstuetzt.
  keywords:
    - Orientierungshilfe App
    - Gehweg erkennen
    - Navigation fuer Sehbehinderung
    - Audio Feedback
---

## Fuer wen ist Owli-AI Way-Buddy gedacht?

Owli-AI Way-Buddy richtet sich an Menschen mit Sehbehinderung oder Blindheit, die zusaetzliche Orientierung beim Gehen im Aussenbereich benoetigen. Die App ersetzt keinen Blindenstock oder Assistenzhund, kann aber als ergaenzende digitale Unterstuetzung dienen.

Wenn du eine Orientierungshilfe App suchst, die Gehweg erkennen kann, gibt dir Way-Buddy klare Richtungs-Hinweise in Echtzeit. Die Navigation fuer Sehbehinderung erfolgt ueber praezises Audio Feedback und ist als zusaetzliche Hilfe fuer den Alltag gedacht.

## Was macht die App konkret?

Way-Buddy analysiert das Live-Kamerabild deines Smartphones und erkennt begehbare Flaechen wie Gehwege oder freie Bereiche vor dir. Aus dieser Information wird eine empfohlene Bewegungsrichtung berechnet.

Statt visueller Hinweise erhaeltst du akustisches Feedback:
- Ein differenziertes Stereo-Signal zeigt dir an, ob du dich eher nach links oder rechts orientieren solltest.
- Die Intensitaet oder Position des Tons gibt zusaetzliche Hinweise zur empfohlenen Richtung.

## So funktioniert Way-Buddy

1. **Kamera ausrichten**  
   Das Smartphone wird nach vorne ausgerichtet, sodass der Bereich vor dir erfasst wird.

2. **Segmentierung der Szene**  
   Ein trainiertes neuronales Netzwerk erkennt begehbare Flaechen im Kamerabild.

3. **Richtungsberechnung**  
   Aus der erkannten Wegflaeche wird eine stabile Bewegungsrichtung abgeleitet.

4. **Akustische Rueckmeldung**  
   Ueber Kopfhoerer oder Lautsprecher erhaeltst du ein links/rechts differenziertes Signal zur Orientierung.

## Trainings- und Entwicklungsmodus

Way-Buddy enthaelt zusaetzlich einen Trainingsmodus, in dem Bild- und Maskendaten lokal gespeichert werden koennen. Diese Daten dienen der Weiterentwicklung und Verbesserung der zugrundeliegenden Modelle.

Ein Entwicklungsmodus visualisiert die Modellvorhersagen direkt auf dem Bildschirm und macht die Funktionsweise transparent nachvollziehbar.

## Datenschutz & Verarbeitung

Die Bildverarbeitung erfolgt vollstaendig auf dem Geraet. Es werden keine Kameradaten an externe Server uebertragen. Gespeicherte Trainingsdaten verbleiben lokal auf deinem Smartphone.


