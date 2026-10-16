# Atlas Shrugged — supervisor working notes (SupAtlas-2)

Living file. Final coverage/review ledger ships separately at delivery.
Not part of the design contract; cohort teams must not depend on it.

## Children (all running, 2026-10-15)

| Child | Scope | Phase | Deliverables |
| AtlasIdentity-3 (library-designer) | book identity | DONE (yielded, verified) | design/directions.md, design/identity.json (valid), design/prototype.html (viewed @1440) |
| AtlasIdentity-3 (library-designer) | book identity | drafting | design/directions.md, design/identity.json, design/prototype.html |
| LeadPartOne-4 | p1c1–p1c10 (order 1–10) | Phase 1 research | art/part-i.svg, design/part-i.{json,css}, design/part-i-preview.html |
| LeadPartTwo-3 | p2c1–p2c10 (order 11–20) | Phase 1 research | art/part-ii.svg, design/part-ii.{json,css}, design/part-ii-preview.html |
| LeadPartThree-3 | p3c1–p3c10 (order 21–30) | Phase 1 research | art/part-iii.svg, design/part-iii.{json,css}, design/part-iii-preview.html |

Sequencing: identity → ArtDirector verdict → ART-DIRECTION.md →
broadcast to leads → Phase 2 cohort build (staggered) → prototype
(cover + openers across parts + p3c7) → independent review + ArtDirector
→ revise → expand → assemble → library-validator → deliver.

## Supervisor text grounding (completed this session)

- Full openings read: p1c1, p1c2, p1c3, p1c4, p1c5, p1c6, p1c7, p1c8, p1c9,
  p1c10, p2c1, p2c2, p2c3, p2c4, p2c5, p2c6, p2c7, p2c8, p2c9, p2c10, p3c1,
  p3c2, p3c3, p3c4, p3c5, p3c6, p3c7, p3c8, p3c9, p3c10 (all 30).
- Closings read: p1c1, p1c4, p1c10, p2c9, p2c10, p3c6, p3c9, p3c10.
- Key passages located: oak tree (p1c1:19-20), Rearden bracelet (p1c2:17),
  Rearden truss call (p1c7:819-822), ribbon cutting (p1c8:253-256),
  motor remnant (p1c10:97), money speech (p2c2:324-339),
  Taggart Tunnel disaster (p2c7:434+), cabin retreat (p2c8:0-22),
  ray-shield descent (p2c10:480-481), valley reveal (p3c1:114,433),
  docks explosion (p3c5:86-87), furnace farewell (p3c6:466),
  Galt broadcast (p3c7:30-40), dead generator (p3c9:263),
  dollar traced over earth (p3c10 end).
- Motif census per chapter (bridge/tunnel/motor/steel/rail/train/radio/
  plane/valley/calendar/money/gold/fire/light + named entities) computed
  and available for cohort grounding checks.

## Integration checklist (Phase 2+)

- [ ] ArtDirector verdict on directions → write ART-DIRECTION.md (locks generator §10)
- [ ] Merge part-i/ii/iii.json → design/chapters.json SEQUENTIALLY (one writer)
- [ ] Integrate part-i/ii/iii.css → theme.css SEQUENTIALLY (never concurrent)
- [ ] Add <link> fonts / @font-face book-relative design/fonts/
- [ ] Prototype: cover + p1c1 + p2c7 + p3c1 + p3c7 + p3c10 wired via manifest
- [ ] Table census: 30/30 TOC IDs resolve, manifest entries, assets ship in _site
- [ ] Independent library-validator + ArtDirector R2 review, fix REVISE
- [ ] Expand to all cohorts, assemble, final validator, evidence, deliver
