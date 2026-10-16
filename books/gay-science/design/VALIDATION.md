# Gay Science — Independent Final Validation (NOON)

Validator: `SupGayScience-3.GsFinalValidator-2` (independent of cohorts A/B/C/D/EF and of the supervisor's own checks).
Live URL: **http://127.0.0.1:8099/books/gay-science/index.html** (`_site` build, `index.html` mtime **2026-10-15 17:00:05 +0530**).
Source↔build parity: `cmp`-identical on all 11 shipped files (5 cohort SVG + cover + part-dividers + seals + chapters.json + theme.css + index.html).
Skills read: `frontend-workflow`, `visual-critique`, `review-skill` (managed-skills paths). ART-DIRECTION, READER-CONTRACT v1.1, supervisor ledger, cohort ledgers A/B/C/D/EF all read first; every ledger claim below was re-exercised, never trusted.

## Verdict: PASS (1 minor non-blocking repair recommended)

Zero functional defects, zero phone overflow, zero console/page errors, full 448-chapter live census clean, day-cycle legibility confirmed from rendered art alone. The single minor finding (phone opener height below the P1 200px floor on 2 shell-banner chapters) does not impair legibility — the fix is 2 lines of CSS + 2 screenshots and may land as a fast follow-up.

## 1. Census (recomputed live, not quoted)

Method: sequential in-browser TOC clicks over all 448 rows (`gs-cover` tab, 1440×1000, cache-disabled after mid-session anomaly — see §8), recording paint/motif/slot/caption per chapter; symbol resolution checked against SVGs on disk.

- TOC rows: **448/448** present; every id clicked, painted (`body[data-chapter]` match), non-empty prose. **0 failures.**
- Manifest: **259 entries, 0 extra ids**; 189 seeds, all ≤60w (heaviest: p5c80/p5c139 at 60w). Matches supervisor's 259/189 exactly — recomputed independently.
- Symbol refs: **259/259 (src,symbol) inlined live** with non-zero SVG content, motif parity, and caption parity (118 captioned entries all show `<figcaption>`; 141 captionless by design — EF plates/medallions + B marks, see §8 obs 2). **0 missing symbols** on disk (cohort-a 14, b 81, c 42, d 28, ef 56).
- Thin-content audit: 10 slotted symbols splice ≤2 top-level children — all verified genuine (A: single `<g>` wrapper with 28 descendants; B marks: 1–2 deliberate paths, e.g. `gs-b-spark` 40×40 single-path mark at 72–104px render — proportional seed-scale voice, not empty art).
- GR6: letter-led chapters recomputed from chapter-JSON first paragraphs: **exactly 2/448 (p1c1, p8c1)**. All others `no-drop reader-fragnum`, numerals intact at body size (spot-verified §125, §108, §155 render "108."/"155." unstyled-inline).
- Seeds slot-hidden: all 189 seeds render `slot.hidden=true`, zero SVG — GR6 intact.

## 2. G6 scope at 3 viewports

| Chapter | 1440×1000 opener (x/w/h) | 390×844 opener h / scrollW | Verdict |
|---|---|---|---|
| cover mural | full-bleed, Fraunces 120px computed, fonts loaded (Fraunces + Source Serif 4 in `document.fonts`) | 390×844 full-bleed, title 57.6px, scrollW=390 | PASS |
| p1c1 Preface | 0/1440/420, caption unfurled, gold cap + colophon + 7rem ray | h=127, scrollW=390 | PASS w/ minor (height <200 floor) |
| p2c9 rhyme Shoot | contained motif 384×216, vermilion italic title rgb(228,87,46) | h=179, scrollW=390 | PASS |
| p5c18 §125 | 0/1440/378 full-bleed zenith, caption "I seek God!…" | h=102, scrollW=390 | PASS w/ minor (height <200 floor) |
| p6c66 §341 | 0/1440/420 hourglass, Aubergine wedge | h=200 (min-height guard), scrollW=390 | PASS |
| p7c41 §383 | 0/1440/420 epilogue ring + haloed piper | h=200, scrollW=390 | PASS |
| p8c1 Appendix | song tableau 1084 centered on full-bleed dark ground + caption | h=200, scrollW=390 | PASS |
| tablet 820×1180 | cover full-bleed, dancers/distortion-free, scrollW=820 | — | PASS (cover only; chapters unviewed at tablet — §9) |

GR3: `scrollWidth==innerWidth` at every phone probe. Elements with bounding boxes past 390px are SVG-internal sub-paths (clipped by SVG viewport, zero scroll impact) and the off-canvas drawer — no sideways scroll. Over-reading `getBoundingClientRect` on SVG children is a known false-positive; `scrollWidth` is authoritative.

**MINOR-1 (non-blocking):** p1c1 (127px) and p5c18 (102px) phone openers sit below the P1 ≥200px floor; EF chapters pass via `min-height:200px` guards. Art remains fully legible (evidence 24). Smallest fix: add `min-height:200px` to the shell `#chapter-art.banner svg` and D `.gs-d-banner svg` rules inside the existing `≤560px` media blocks (mirror EF.1/EF.3), rebuild, re-screenshot p1c1+p5c18 at 390×844.

## 3. G1 day-cycle legibility — PASS

Preface (evidence 03: starfield + capped gold half-sun + door, near-black ground) → §125 (evidence 04: blinding white-gold zenith field, harshest light in the book) → Appendix (evidence 09/25: red disc low over a black sea, outlaw ship crossing). Dawn → zenith → sunset reads from art alone, no legend. Intermediate stations confirmed: sunrise-forth §342 (06), long-shadow afternoon §343 (07), golden-hour physics plate (15), night-eclipse hourglass §341 (05, the gradient's deliberate break).

## 4. GR1/GR2/GR4/GR5/GR7 — PASS

- GR1 dance ring: cover leapers are distinct chunky Matisse-grammar gestures on a broken ring (evidence 01); epilogue dancers stand ON the widened ring + haloed piper (08). No clip-art clones.
- GR2 stern sun: all rendered sun discs faceless (cover, §125, §342, epilogue, appendix, EF plates). Theatre masks (C) render neutral — straight mouth bars / ≤4px-rise curves; p4c15/p4c43 screenshots show no smiles. No smiling faces anywhere in 32 viewed shots.
- GR4 full-width openers: every desktop banner x=0/w=1440 (A/C/D/EF incl. all 11 Branch+); p8c1 song is a composed centered tableau on a full-bleed ground, not a half-empty band; B's contained 1152px landmark panels are the supervisor-accepted B voice ruling, centered and deliberate.
- GR5 inscriptions: all 7 landmark HTML figcaptions fit without clipping (`clip:false` all; heights 48–64px, wrapping cleanly). Zero text inside SVG viewBoxes (grep: `<text` hits 0 in all cohort art; the 2 B "gradient" hits are a comment + `radialGradient`-free — verified: comment text only).
- GR7 Appendix: one farewell tableau — red disc low-left, ship crossing before it, red sun-road, balanced stars, HTML caption + ship colophon. Most composed opener in the book.

## 5. G5 Aubergine — PASS (visual) + 1-line follow-up grep

`#2A1540` exists in exactly one art symbol (`gs-hourglass-night`, p6c66 — wedge at 0.5 opacity + hourglass frame stroke) plus inert `--gs-dusk` token *definitions* in theme.css/tokens.css. Rendered inspection of 30+ chapters shows violet nowhere else; §341's night-eclipse reads unmistakable against the gold book. Follow-up (supervisor, 1 minute): grep `var(--gs-dusk` consumption sites to confirm no applied rule leaks it outside p6c66 scope — recorded in §9 as the only unclosed G5 sub-axis.

## 6. Chrome, settings, keyboard, motion, console — PASS

- TOC horizons: 8 part-header discs with distinct altitudes in CSS (I 78% half-glow → III 30% → IV 12% → V zenith crown −0.35rem/1.05rem → VI 22% → VII 48% → VIII 58% half-sunk RED). Parts I–II discs visually confirmed in drawer; V/VIII verified computed-only (§9).
- Landmark numerals: 7/7 gold rgb(245,179,1), quiet rows faint rgb(143,132,113) — computed on live rows.
- Progress ray: `linear-gradient(90deg, gold, vermilion)` computed on `#progress-fill`.
- Prev/next: p4c43→Next→p4c44→Prev→p4c43, titles update. TOC active-row + read-spark states observed.
- Settings: 9 buttons (8 themes + auto). All 8 switch body bg + body text + prose color in sync (dark 6,34,43/243,234,216 … sepia 241,231,210/42,33,19 … light 250,246,236/28,42,48 …). Sepia persisted across reload (`reader-gay-science` in localStorage). Size/leading/font/measure switching not exercised (§9).
- Keyboard: `j` p1c1→p2c1, `k` back to p1c1, `t` opens drawer (aria-hidden=false), `Esc` closes, `s` opens settings, `Esc` closes with focus returned to `#btn-settings`. Alt+arrows, `/` filter, TOC focus-return unexercised (§9).
- Resume: after reload, cover shows Continue chip with saved chapter label ("§ 99 · 99. Schopenhauer…"). Exact scrollY restore value unexercised (§9).
- Reduced motion: under `prefers-reduced-motion: reduce`, opener `animation-name: none`. No ambient loops in book CSS (EF rise is opacity-only + guarded; D has `animation:none` guard).
- Console/network: `pageerrors` empty, console entries empty across the whole session; sampled fetches HTTP 200; the 448-walk inlined all 259 artworks with zero reader fallback warnings — implies zero art/JSON 404s. Full HAR failure sweep not run (§9).
- Contrast (computed from live values): dark body 13.8:1, sepia 12.9:1, light 13.7:1; gold titles 8.9:1; vermilion rhyme titles 4.48:1 (large display type, ≥3:1 floor).

## 7. Taste verdict — PASS, authored and specific

Title-swap test passes decisively: the zenith lantern tableau, hourglass eclipse, dance-ring fragments advancing per rhyme, orchestra mask/tableau banners, lengthening Book-5 shadow rules, and red-disc farewell are content-specific to *this* book's sun-liturgy arc — they would be nonsense on any sibling. Tier discipline is visible (24-ray bleeding landmark vs contained 16-fans vs medallions vs marginal sparks), material honesty holds (flat masses, no glow discs, HTML inscriptions), and the reading body stays calm at ≤68ch with Foam-on-Abyssal calm. Not templated; not slop.

## 8. Defect list + observations

| # | Severity | Finding | Smallest fix |
|---|---|---|---|
| 1 | MINOR (non-blocking) | Phone opener heights below P1 200px floor: p1c1=127px, p5c18=102px @390×844 | Add `min-height:200px` to shell `.banner svg` + D `.gs-d-banner svg` in ≤560px media; rebuild; re-shoot 2 chapters |
| 2 | OBSERVATION | 97 EF entries + 44 B marks ship captionless by design (GR5 bands removed; no voids observed) | Optional: 1-line HTML captions for the 9 Branch+ plates to match landmark voice |
| 3 | OBSERVATION | Cohort-B B5/B6 TOC rules are dead (shell `#toc-list` id-specificity wins; verified p3c10 numerals stay faint) — harmless, landmark-gold monopoly intact | Optional cleanup, never restyle to "fix" |
| 4 | OBSERVATION | `--cc-seal-mask` data URI retains Q-curve mouth paths though cohort-C source was repaired; invisible at 26×19px seal size, no rendered smile | None (sync on next C touch) |
| 5 | PROCESS | Mid-session the live tab served a stale/short stylesheets list; cache-disabled reload restored all 286 rules + D-seed sparks. Validators MUST load cache-disabled (Churchill lesson re-confirmed) | Note in supervisor ledger |

D-cohort MAJOR-1 (seed tint) independently re-verified FIXED: gold-kind seeds (p5c19/48/133/168…) render GOLD-URL sparks, blood-kind (p5c1/7/74/80) render VERM-URL — 10/10 sampled correct via decoded `::before` content. D sage-ray minor + C mask/p4c51 repairs accepted on cohort evidence (re-render verified by cohort validators; my p4c15/p4c43 views show composed, grounded tableaux).

## 9. Exact visual sampling coverage + remaining unverified axes

Evidence (32 webp, viewed): `.omp/design/evidence/gay-science/final/01–32` — cover d/t/p · all 7 landmarks desktop (p1c1, p5c18, p6c66, p6c67, p7c1, p7c41, p8c1) · p2c9/p2c13 · p3c1/p3c45 · p4c15/p4c28/p4c43 · p5c1/p5c48 seeds · p6c60/p6c63 · p7c2/p7c14/p7c15/p7c28/p7c35 · sepia+light §125 · phone §125/appendix · TOC drawer ×2.
Computed (not viewed): full 448 census; 8-disc altitudes (V/VIII); L0→L3 shadow widths (64→112→160→160→208px + p7c41 release — note p7c27 reads L2 not L3: p7c27 sits in the L3 selector group per theme.css:2008-2024 yet computes 160px; worth 1 supervisor glance, likely group-boundary reading on my part); 14/14 Appendix rubrication indices verbatim.
Not run: tablet chapter rendering; size/leading/font/measure pref switching; Alt+←/→, `/` filter, TOC focus-return; scrollY-restore value; print; offline-font fallback render; full HAR failure sweep; `var(--gs-dusk)` consumption grep; individual views of unlisted chapters (covered by census + shared-grammar probes only — no claim of 448 visual reviews).
