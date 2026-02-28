# AGENTS.md â€” owli-ai.com (Landing Site)

## Ziel
Baue eine schnelle, barrierefreie Marketing-/Info-Webseite fÃ¼r die Owliâ€‘AI Appâ€‘Suite.
- **Static-first (SSG)**: keine SSR/Server-Routes/Pages Functions im MVP.
- Zielgruppe: Interessenten, Tester, potenzielle Partner.

## Produkt-Reihenfolge (Ã¼berall konsistent)
1. **Owliâ€‘AI Wayâ€‘Buddy** (Android)
2. **Owliâ€‘AI Assist** (Android)
3. **Owliâ€‘AI Magnify** (Android)
4. **Owliâ€‘AI Hearâ€‘Clean** (Android)
5. **Owliâ€‘AI Zoom** (Windows)

## Inhaltliche Regeln
- Keine unbelegten Superlative/Heilsversprechen.
- Datenschutz-Aussagen mÃ¼ssen zur tatsÃ¤chlichen App-Funktion passen.
- Sprache: primÃ¤r **Deutsch** (optional spÃ¤ter Englisch), Ton: klar, respektvoll, nicht infantil.

## Technische Leitplanken
- Bevorzugter Stack fÃ¼r den Aufbau: **Astro + TypeScript + Tailwind** (SSG).
- Halte AbhÃ¤ngigkeiten minimal; wiederverwende Komponenten.
- Assets (Screenshots/Icons) optimieren (WebP/AVIF, sinnvolle GrÃ¶ÃŸen). Keine groÃŸen Videos ins Repo.

## Definition of Done (fÃ¼r jeden PR/Step)
- `pnpm lint` (falls vorhanden) erfolgreich
- `pnpm build` erfolgreich
- Keine neuen Console-Errors im Browser
- A11y: Tastatur bedienbar, Fokus sichtbar, semantische Headings, Alt-Texte
- A11y/Medien: Bild- und Logo-Alternativtexte muessen aussagekraeftig, kontextbezogen und nicht generisch sein.
- i18n: Bei inhaltlichen oder UI-Aenderungen immer DE/EN/ES konsistent nachziehen (Navigation, Seitentitel, Labels, Content-Dateien); kein stiller Fallback ohne explizite Entscheidung.
- SEO: Jede neue/geaenderte Seite in Canonical/Hreflang-Logik und Sitemap beruecksichtigen; bei geeigneten Seiten strukturierte Daten (JSON-LD) mitpflegen.

## Cloudflare Pages (Free) â€” Vorsichtspunkte
- Keine Pages Functions/SSR im MVP.
- Keine groÃŸen Einzeldateien (Videos) in `public/`.
- Build-Frequenz moderat halten (Builds/Monat).

## Arbeitsweise (Codex)
- Kleine, reviewbare Ã„nderungen.
- Erst Plan + betroffene Dateien nennen, dann implementieren.
- Bestehende Inhalte nicht ohne Grund lÃ¶schen; lieber migrieren.

## Commit- und Push-Disziplin (Codex)
- Arbeite in kleinen, thematisch klaren Commits (ein Zweck pro Commit).
- Committe regelmaessig nach abgeschlossenen Teilzielen (z. B. Content-Modell, UI, Copy, Validierungsfixes).
- Nutze praezise Commit-Messages im Format `type(scope): kurzbeschreibung`.
- Vor jedem Commit die relevanten Checks ausfuehren (`pnpm lint`, `pnpm build`, falls vorhanden).
- Vermeide grosse Sammel- oder WIP-Commits; splitte grosse Aufgaben in reviewbare Schritte.
- Pushe an geeigneten Zwischenpunkten (z. B. nach einem abgeschlossenen, gruen validierten Commit-Block) und spaetestens zum Abschluss.

