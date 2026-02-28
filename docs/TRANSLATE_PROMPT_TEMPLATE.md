# Codex Prompt Template: Translate DE Content to EN/ES

Use this prompt when German source files changed and EN/ES must be synced.

---

Task: Update translations from `content/de` into `content/en` and `content/es`.

Rules:
- German (`content/de`) is the source of truth.
- Translate text only. Do not invent or expand claims.
- Keep frontmatter keys identical.
- Keep `slug`, `order`, `link`, `pdf`, file paths, citations, DOI, and code blocks unchanged.
- Preserve arrays and ordering exactly.
- Preserve markdown structure (headings/lists/sections).
- Keep disclaimers and legal limits strict.
- EN/ES tone: clear and natural, not overly formal.
- Current exception: `content/de/partners/*` remains DE-only and is reused by EN/ES page wrappers. Do not generate `content/en/partners/*` or `content/es/partners/*` unless explicitly asked.

Metadata:
- Add in translated files:
  - `translationStatus: machine`
  - `sourceLang: de`
  - optional `sourceVersionHash` if provided

Execution steps:
1. List all files in `content/de`.
2. For each DE file, ensure equivalent file exists in `content/en` and `content/es` (same relative path).
   - Skip this step for `content/de/partners/*` while DE-only fallback is active.
3. Translate content conservatively.
4. Keep all internal links and identifiers unchanged.
5. Validate:
   - `corepack pnpm lint`
   - `corepack pnpm build`
6. Summarize:
   - files updated per collection
   - any files intentionally left unchanged
   - validation results

---
