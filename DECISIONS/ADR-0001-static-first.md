# ADR-0001: Static-first MVP

## Status
Proposed

## Kontext
Die Seite läuft zunächst im Cloudflare Pages Free-Plan und hat am Anfang wenig Traffic. Wir wollen eine robuste, schnelle und pflegeleichte Website ohne serverseitige Komplexität.

## Entscheidung
Für das MVP bauen wir eine **statische Website (SSG)** ohne SSR/Pages Functions.

## Konsequenzen
- Sehr gute Performance, wenig Betriebskosten.
- Formulare/Interaktivität zunächst über externe Anbieter oder rein clientseitig.
- Späterer Upgrade-Pfad: Functions/SSR/Asset-Offloading bei Bedarf.
