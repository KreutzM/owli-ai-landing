# Cloudflare Pages (Free) — Implementierungsleitfaden

Ziel: MVP ohne Risiko, Limits zu reißen.

## MVP-Strategie
- **SSG / static-first**: keine SSR und keine Pages Functions.
- Große Medien (Videos) nicht im Repo hosten; extern einbetten.
- Bilder als WebP/AVIF, in sinnvollen Auflösungen.

## Deployment Notes
- Der konkrete Build-Command/Output hängt vom gewählten SSG-Framework ab.
- Bei Astro typischerweise:
  - Build: `pnpm build`
  - Output: `dist/`

## Wenn später Traffic/Features steigen
- Upgrade des Plans möglich.
- Option: Assets in R2/Stream, Formulare über externen Provider oder Functions.
