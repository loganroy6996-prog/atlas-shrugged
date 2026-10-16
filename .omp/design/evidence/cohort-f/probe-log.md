# Cohort F validator probe log (SupIJ-3.JestCohortFLead.JestCohortFValidator)
Port 8491 (unique; engineer 8471, lead 8257). cohort-f.css injected at runtime via Eval browser link element; no repo files edited (evidence only).

## Opener probe (1440x1000, observed)
| ch | data-art | paras | slot class | svg kids | plate px | caption |
|----|----------|-------|------------|----------|----------|---------|
| p1c67 | krause-mambo | 21 | banner | 112 | 624x408 | Plate F-1 ok |
| p1c68 | van-cleve-lamp | 69 | banner | 50 | 624x408 | Plate F-2 ok |
| p1c69 | lenz-frost | 6 | banner | 75 | 624x408 | Plate F-3 ok |
| p1c70 | tony-sprint | 7 | banner | 153 | 624x408 | Plate F-4 ok |
| p1c71 | triptych-care | 173 | triptych | 64 | 624x408 | Plate F-5 ok |
| p1c72 | bolex-viewfinder | 453 | slate | 47 | 624x408 | Plate F-6 ok |
| p1c73 | notkin-lamp | 167 | broadsheet | 58 | 624x408 | Plate F-7 ok |
| p1c74 | door-kitchen | 6 | banner | 74 | 624x408 | Plate F-8 ok |
| p1c75 | frozen-window | 185 | banner | 116 | 624x408 | Plate F-9 ok |
| p1c76 | placard-row | 502 | broadsheet | 71 | 624x408 | Plate F-10 ok |
| p1c77 | gala-tumbler | 31 | finale | 177 | 624x408 | Plate F-11 ok |
overflowX=false on all 11 at 1440.

## Divider sweep (computed ::before content, observed): 35/35 activate.
p1c67 n8; p1c68 n8,n62; p1c69 n6; p1c70 n2; p1c71 n3,17,36,80,111,144,146;
p1c72 n2,6,57,185,452; p1c73 n6,30,48,116; p1c74 n4; p1c75 n14,51,165;
p1c76 n102,125,148,192,202,210,276,330,365,451,453,458; p1c77 n10,17,20.
Fever field p1c73 n145: no ::before (by design); bg rgba(201,162,39,.05) observed.

## Ticks sampled (computed, observed): all fire; p1c76 P186/n187 CHART suppressed on note-ref para (gold .ij-tick owns, 22 tick els); p1c72 P9/n10 DORM suppressed (note-ref para); p1c73 P144/n145 FEVER suppressed (note-ref para).

## Responsive (observed)
- 820x1180: p1c73/p1c76/p1c77 overflowX=false; plateH=405; ticks static (marginalia collapsed <=1100).
- 390x844: p1c69/71/73/75/76/77 plateH 258-275 (>=200 P1), display block, overflowX=false; gates font-size 10.56px stacked; p1c77 title rect x35 w319 within vw390 (J3 clamp ok).

## Gaudeamus (computed): p1c75 + p1c77 .meta-title::after = "GAUDEAMUS IGITUR"; p1c76 = none. Observed.

## Violet (computed sweep p1c68/75/77 + source): zero violet in cohort CSS/SVG; SVG palette = 10 colors, all in-ledger (+#fff/#000/#f2eee2 micro-accents). Observed/computed.

## Contrast (computed vs rgb(13,15,12)): body 14.15:1, title 14.15:1, gate Stamp Red #E05238 4.98:1. Focus: 2px outline rgb(201,162,39) (gold). Observed.

## Functional (observed)
- TOC open/close ok; prev p1c67->p1c66, next p1c77->p2c1, j/k ok; t/s/Esc///arrows ok; Esc focus-return observed (returned to btn-settings — shared drawer behavior, last-invoker mismatch noted, not cohort).
- Resume across reload: chapter + scrollY restored (p1c73 y=3000 exact). Settings theme/size/leading persist across reload; sepia plate shot ok.
- Endnotes: p1c73 16/16 rendered; body->p2c10#note-322 + chip + return ok. p1c76 27/28 rendered (note 356 match overlapped by 355's match span — shared-reader single-pass consumption, out of cohort scope); body->p2c11#note-370 + chip ok; return lands on correct para (P277 center) with scrollY drift (shared smooth-scroll/settle behavior, out of cohort scope).
- ?fail=p1c70: error state renders with RETRY; retry recovers full chapter (7 paras).

## Console/network (observed): console entries 0 errors after clear (ViewTransition aborts during rapid scripted nav filtered as noise); network 83 req, 1 failed = favicon.ico 404 only.

## Phone plate sweep (observed, 390x844): p1c67/68/70/72/74 plateH=275 svgH=200 block, no overflow. Combined with earlier: all 11 >=200px (P1 holds).
## Fail state (observed, ?fail=p1c71 fresh): error card + RETRY visible; retry on p1c70 recovered 7 paras.
