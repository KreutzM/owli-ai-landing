# owli-ai.com - Landing Site

Dieses Repo enthält die statische Marketing-/Info-Webseite für die **Owli-AI App-Suite**.

## Stack

- Astro + TypeScript + Tailwind
- Static-first (SSG, keine SSR/Pages Functions)
- Build-Output: `dist/` (Cloudflare Pages)

## Entwicklung mit pnpm

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

## Routen (MVP)

- `/`
- `/apps`
- `/apps/[slug]`
- `/privacy`
- `/imprint`
- `/support`
- `/accessibility`

## Content

- App-Stubs: `content/apps/*.md`
- Site-Stubs: `content/site/*.md`

Die App-Reihenfolge bleibt konsistent:
1. Owli-AI Way-Buddy
2. Owli-AI Assist
3. Owli-AI Magnify
4. Owli-AI Hear-Clean
5. Owli-AI Zoom