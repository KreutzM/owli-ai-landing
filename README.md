# owli-ai.com — Landing Site

Dieses Repo enthält die Website für die **Owli‑AI App‑Suite**.

## Status
Aktuell liegt eine sehr einfache statische HTML-Version vor. Der geplante nächste Schritt ist der Umbau zu einer **Static-Site (SSG)** (voraussichtlich Astro), damit Inhalte datengetrieben gepflegt werden können (App-Seiten, FAQs, Releases etc.).

## Produkt-Reihenfolge
1. Owli‑AI Way‑Buddy
2. Owli‑AI Assist
3. Owli‑AI Magnify
4. Owli‑AI Hear‑Clean
5. Owli‑AI Zoom

## Cloudflare Pages
Die Seite wird über **Cloudflare Pages (Free)** ausgeliefert. Im MVP vermeiden wir SSR/Functions und bleiben static-first.

Details: siehe `CLOUDFLARE_PAGES.md`.

## Content
- App-Stubs: `content/apps/*.md`
- Generelle Seiten-Texte: `content/site/`

## Nächster Schritt (Codex)
- Stack scaffolden (Astro + TS + Tailwind)
- Content-Model einlesen und Seiten generieren
- A11y/SEO/Performance Baseline
