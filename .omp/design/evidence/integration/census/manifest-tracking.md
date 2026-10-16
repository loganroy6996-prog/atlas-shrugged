# Manifest tracking (computed, updated as manifests land)

Contract target: every real TOC chapter ID has a `design/chapters.json` entry; every `src` exists;
every `symbol` resolves inside its file; all ship to `_site`.

## 2026-10-15 ~06:45 UTC snapshot

| Book | TOC | Manifest entries | Missing IDs | Asset resolution |
|---|---|---|---|---|
| twilight-of-the-idols | 12 | 12/12 ✓ | none | COVER ok; all 12 chapter srcs MISSING (`art/hammerfall.svg`, `art/idolsmasher.svg`, `art/untimelydusk.svg` don't exist yet — cohort art pending). Manifest fill will 404-tolerantly show nothing until they land. |
| beyond-good-and-evil | 11 | 5/11 (p1c1,p1c2,p1c5,p1c10,p1c11) | p1c3,p1c4,p1c6,p1c7,p1c8,p1c9 | cover entry has class only (no src — deliberate?); chapter entries mostly motif-only, no src. |
| forty-ways-to-look-at-churchill | 41 | 8/41 | 33 incl. all of part 1 | prototype-plates.svg exists; entries carry rich rationale/part/order/title ✓. |
| sovereign-individual | 11 | 4/11 (p1c7,p1c9,p1c10,p1c11) | p1c1–p1c6,p1c8 | plate SVGs exist for all 4 entries ✓. |

No other book has `design/chapters.json` yet. No `design/chapters.json` ships in the current :8000
build for these books (build predates them) — final census runs on the rebuilt site.

## Rule for reviews

A book's R2+ wired review requires: manifest entries for the REVIEWED chapters with resolving
src+symbol, art visible in `#chapter-art`/`#cover-art` slots in screenshots, `body[data-art]` set.
Partial-manifest books get prototype (not final) verdicts; missing-cohort chapters are listed, never waived.
