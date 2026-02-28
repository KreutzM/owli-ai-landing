# Translation Workflow (DE -> EN/ES)

## Goal
- `content/de` is the single source of truth.
- `content/en` and `content/es` are generated from German files.
- Meaning and structure are preserved exactly.

## Core Rules
- Translate text only.
- Do not invent new claims, features, legal statements, or guarantees.
- Keep frontmatter keys identical to the German source.
- Keep arrays, ordering, and section structure identical.
- Keep `slug`, `order`, `link`, `pdf`, file paths, citations, DOI, and code blocks unchanged.
- Keep proper nouns unchanged unless a standard translated form exists (for example, "Germany").
- Keep Markdown heading levels and list structure unchanged.

## Tone Rules
- German source may use `du` form.
- English and Spanish should sound natural and clear, not overly formal.
- Keep safety/legal wording strict; do not soften limitations or disclaimers.

## Metadata Rules
- For translated files, set:
  - `translationStatus: machine`
  - `sourceLang: de`
- `sourceVersionHash` can be added optionally when a source snapshot hash is available.

## Safe Process (Codex)
1. Identify changed files in `content/de`.
2. Ensure matching file exists in:
   - `content/en/<collection>/...`
   - `content/es/<collection>/...`
3. Copy source structure first (frontmatter keys + markdown sections).
4. Translate conservatively without changing factual meaning.
5. Run validation:
   - `corepack pnpm lint`
   - `corepack pnpm build`

## Update Strategy
- On future DE changes, translate only changed files.
- Keep unchanged EN/ES files as-is.
- Upgrade `translationStatus` to `reviewed` only after human review.
