---
slug: assist
order: 2
name: Owli-AI Assist
platform: Android
status: Beta
tagline: Dein sehendes Assistenzsystem mit KI-Unterstützung.
valueProp: Szenen analysieren, Fragen stellen und Antworten hören - mit KI-gestützter Bildbeschreibung.
audience: Blind
cloud: yes
features:
  - title: KI-gestützte Szenenbeschreibung (Cloud-Mode)
    description: Ein aufgenommenes Kamerabild wird an ein Vision-Language-Modell übermittelt und in verständlicher Sprache beschrieben.
  - title: Rückfragen stellen
    description: Du kannst gezielte Fragen zur aktuellen Szene stellen, z. B. zu Texten, Objekten oder Details im Bild.
  - title: Auto-Scan
    description: Auf Wunsch analysiert die App in regelmäßigen Abständen neue Bilder und hält dich kontinuierlich über deine Umgebung informiert.
  - title: Spracherkennung & Streaming-Sprachausgabe
    description: Fragen können per Spracheingabe gestellt werden. Antworten werden in Echtzeit per Sprachausgabe wiedergegeben.
  - title: Weitere Aufnahmen für mehr Kontext
    description: Bei Bedarf kannst du weitere Bilder aufnehmen, um Details genauer analysieren zu lassen.
  - title: Individuelle Assistenz-Profile
    description: Du kannst festlegen, wie deine Assistenz mit dir spricht und worauf sie besonders achten soll - etwa kurz und präzise, besonders detailreich oder mit Fokus auf Sicherheit.
  - title: Kontextbasierte Assistenz (Automatik-Modus)
    description: Die App analysiert zunächst die aktuelle Situation - z. B. Einkauf, Bahnhof, Straßenverkehr oder Restaurant - und passt ihre Beschreibung automatisch an, sodass relevante Informationen priorisiert werden.
privacy:
  mode: cloud
  summary: Im Cloud-Mode werden aufgenommene Bilder zur Analyse an den konfigurierten KI-Provider übertragen, damit die Szene beschrieben und Fragen beantwortet werden können.
  note: Es werden nur die für die Analyse notwendigen Daten übertragen; der genaue Datenfluss hängt vom Provider und der konkreten Implementierung ab.
requirements:
  - Android 10 oder neuer
  - Kamera und Mikrofon
  - Stabile Internetverbindung für Cloud-Mode
links:
  primary:
    label: Assist Cloud Mode testen
    href: /support
  secondary:
    label: Datenschutzfragen stellen
    href: /privacy
media:
  - src: /apps/assist/icon-placeholder.svg
    alt: Platzhalter-Icon von Owli-AI Assist
    caption: Assist App-Icon
  - src: /apps/assist/icon-placeholder.svg
    alt: Platzhalter-Screenshot von Owli-AI Assist Cloud Mode
    caption: Cloud Mode Ansicht Platzhalter
seo:
  description: Owli-AI Assist beschreibt deine Umgebung mithilfe eines KI-gestützten Cloud-Systems. Du kannst Szenen analysieren lassen, Rückfragen stellen und Antworten per Sprachausgabe erhalten.
---

## Für wen ist Owli-AI Assist gedacht?

Owli-AI Assist richtet sich an blinde oder stark sehbehinderte Menschen, die ihre Umgebung mithilfe künstlicher Intelligenz besser verstehen möchten. Die App ersetzt keine persönliche Assistenz, kann aber in vielen Alltagssituationen zusätzliche Informationen liefern.

## Was macht die App konkret?

Owli-AI Assist funktioniert als sehendes Assistenzsystem:

1. Die Kamera erfasst die aktuelle Szene.
2. Ein Bild wird an ein KI-Modell übermittelt.
3. Das Modell beschreibt die Szene in verständlicher Sprache.
4. Du kannst gezielt Rückfragen stellen.

Beispiele:
- Was befindet sich vor mir?
- Lies mir den Text auf dem Schild vor.
- Welche Produkte stehen im Regal?
- Was steht auf dem Display?

Die Antworten werden per Sprachausgabe ausgegeben, sodass du die Hände frei behalten kannst.

## Auto-Scan für kontinuierliche Informationen

Im Auto-Scan-Modus analysiert die App regelmäßig neue Bilder. So bleibst du auch ohne manuelles Auslösen über Veränderungen in deiner Umgebung informiert.

## Spracheingabe und Sprachausgabe

Fragen können per Spracheingabe gestellt werden. Die Antworten werden in Echtzeit per Streaming-Sprachausgabe ausgegeben, sodass längere Beschreibungen nicht erst vollständig geladen werden müssen.

## Personalisierbare und kontextbasierte Assistenz

Owli-AI Assist ermöglicht es dir, verschiedene Assistenz-Profile zu verwenden. So kannst du entscheiden, ob Beschreibungen eher kurz und präzise oder besonders detailreich sein sollen. Auch der Fokus der Analyse kann angepasst werden - etwa mit stärkerer Gewichtung von Hindernissen oder Textinformationen.

Im Automatik-Modus erkennt die App typische Alltagssituationen und priorisiert die jeweils relevanten Informationen.

Beispiele:

- Im **Straßenverkehr** werden Fahrzeuge, Bewegungen und Ampeln hervorgehoben.  
- Im **Supermarkt** stehen Produkte, Regale und Preisinformationen im Fokus.  
- Im **Bahnhof oder an Haltestellen** werden Zugänge, Anzeigen und Orientierungspunkte priorisiert.  
- In einem **Restaurant oder Café** achtet die Assistenz stärker auf Personen, Tische oder Speisekarten.

So erhältst du situationsoptimierte Informationen, ohne selbst jedes Detail explizit abfragen zu müssen.

## On-Device-Detektion (optional)

Ein optionaler lokaler Detektionsmodus kann in einer späteren Ausbaustufe ausgewählte Objekte direkt auf dem Smartphone erkennen. Dieser Modus würde ohne Internetverbindung arbeiten und Bilddaten ausschließlich lokal verarbeiten.

## Datenschutz & Verarbeitung

Im Cloud-Mode wird das aufgenommene Bild zur Analyse an einen externen KI-Dienst übermittelt. Es werden nur die für die Analyse notwendigen Daten übertragen.

Der optionale On-Device-Modus (falls verfügbar) verarbeitet Bilddaten ausschließlich lokal auf dem Gerät.
