# AGENTS.md — owli-ai.com (Landing Site)

## Ziel
Baue eine schnelle, barrierefreie Marketing-/Info-Webseite für die Owli‑AI App‑Suite.
- **Static-first (SSG)**: keine SSR/Server-Routes/Pages Functions im MVP.
- Zielgruppe: Interessenten, Tester, potenzielle Partner.

## Produkt-Reihenfolge (überall konsistent)
1. **Owli‑AI Way‑Buddy** (Android)
2. **Owli‑AI Assist** (Android)
3. **Owli‑AI Magnify** (Android)
4. **Owli‑AI Hear‑Clean** (Android)
5. **Owli‑AI Zoom** (Windows)

## Inhaltliche Regeln
- Keine unbelegten Superlative/Heilsversprechen.
- Datenschutz-Aussagen müssen zur tatsächlichen App-Funktion passen.
- Sprache: primär **Deutsch** (optional später Englisch), Ton: klar, respektvoll, nicht infantil.

## Technische Leitplanken
- Bevorzugter Stack für den Aufbau: **Astro + TypeScript + Tailwind** (SSG).
- Halte Abhängigkeiten minimal; wiederverwende Komponenten.
- Assets (Screenshots/Icons) optimieren (WebP/AVIF, sinnvolle Größen). Keine großen Videos ins Repo.

## Definition of Done (für jeden PR/Step)
- `pnpm lint` (falls vorhanden) erfolgreich
- `pnpm build` erfolgreich
- Keine neuen Console-Errors im Browser
- A11y: Tastatur bedienbar, Fokus sichtbar, semantische Headings, Alt-Texte

## Cloudflare Pages (Free) — Vorsichtspunkte
- Keine Pages Functions/SSR im MVP.
- Keine großen Einzeldateien (Videos) in `public/`.
- Build-Frequenz moderat halten (Builds/Monat).

## Arbeitsweise (Codex)
- Kleine, reviewbare Änderungen.
- Erst Plan + betroffene Dateien nennen, dann implementieren.
- Bestehende Inhalte nicht ohne Grund löschen; lieber migrieren.

## Commit- und Push-Disziplin (Codex)
- Arbeite in kleinen, thematisch klaren Commits (ein Zweck pro Commit).
- Committe regelmaessig nach abgeschlossenen Teilzielen (z. B. Content-Modell, UI, Copy, Validierungsfixes).
- Nutze praezise Commit-Messages im Format `type(scope): kurzbeschreibung`.
- Vor jedem Commit die relevanten Checks ausfuehren (`pnpm lint`, `pnpm build`, falls vorhanden).
- Vermeide grosse Sammel- oder WIP-Commits; splitte grosse Aufgaben in reviewbare Schritte.
- Pushe an geeigneten Zwischenpunkten (z. B. nach einem abgeschlossenen, gruen validierten Commit-Block) und spaetestens zum Abschluss.
