#!/usr/bin/env python3
"""Build chapter-plate sprites for the PDF-imported books."""
from __future__ import annotations

import json
import re
import sys
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BOOKS = {
    "dubliners": ("candle", "road", "bazaar", "ship", "horse", "coin", "door", "cloud", "mirror", "clay", "window", "ivy", "theatre", "chalice", "snow"),
    "portrait-of-the-artist": ("schoolbook", "river", "flame", "wings", "quill"),
    "ulysses": ("tower", "schoolbook", "river", "bed", "lotus", "tomb", "wind", "table", "strait", "route", "harp", "eye", "shell", "sun", "mirror", "lamp", "compass", "moon"),
    "rubicon": ("river", "coin", "laurel", "sword", "ship", "scroll", "arch", "road"),
    "spqr": ("column", "laurel", "coin", "arch", "map", "scroll", "ship", "globe"),
    "napoleon": ("compass", "crown", "map", "cannon", "fortress", "horse", "seal", "sword"),
    "the-power-broker": ("city", "road", "bridge", "grid", "blueprint", "tower", "chain", "door"),
    "the-path-to-power": ("field", "rail", "star", "letter", "route", "ballot", "radio", "door"),
    "means-of-ascent": ("ballot", "scale", "ledger", "clock", "county-map", "route", "airplane", "seal"),
    "master-of-the-senate": ("chamber", "gavel", "ledger", "column", "vote", "seal", "door", "scroll"),
    "the-passage-of-power": ("door", "phone", "desk", "airplane", "seal", "flag", "clock", "radio"),
    "the-definitive-fdr": ("seal", "radio", "globe", "map", "ship", "sun", "flag", "column"),
    "things-hidden": ("triangle", "eye", "altar", "mirror", "circle", "branch", "scale", "mask"),
}

TITLE_MOTIFS = {
    "dubliners": {
        "the sisters": "candle", "an encounter": "road", "araby": "bazaar",
        "eveline": "ship", "after the race": "horse", "two gallants": "coin",
        "the boarding house": "door", "a little cloud": "cloud",
        "counterparts": "mirror", "clay": "clay", "a painful case": "window",
        "ivy day in the committee room": "ivy", "a mother": "theatre",
        "grace": "chalice", "the dead": "snow",
    },
    "portrait-of-the-artist": {
        "chapter i": "schoolbook", "chapter ii": "river", "chapter iii": "flame",
        "chapter iv": "wings", "chapter v": "quill",
    },
    "ulysses": {
        "telemachus": "tower", "nestor": "schoolbook", "proteus": "river",
        "calypso": "bed", "lotus eaters": "lotus", "hades": "tomb",
        "aeolus": "wind", "lestrygonians": "table", "scylla and charybdis": "strait",
        "wandering rocks": "route", "sirens": "harp", "cyclops": "eye",
        "nausicaa": "shell", "oxen of the sun": "sun", "circe": "mirror",
        "eumaeus": "lamp", "ithaca": "compass", "penelope": "moon",
    },
}

KEYWORDS = {
    "rubicon": {"river": "river", "cross": "river", "ship": "ship", "pirat": "ship", "death": "sword", "sword": "sword", "sibyl": "scroll", "republic": "coin", "rome": "arch"},
    "spqr": {"senate": "column", "king": "crown", "emperor": "coin", "empire": "map", "rome": "arch", "world": "globe", "home front": "ledger"},
    "napoleon": {"corsica": "map", "italy": "map", "russia": "map", "waterloo": "cannon", "battle": "cannon", "crown": "crown", "emperor": "crown", "exile": "ship"},
    "the-power-broker": {"bridge": "bridge", "road": "road", "city": "city", "park": "map", "power": "chain", "tunnel": "road", "building": "tower", "law": "ledger"},
    "the-path-to-power": {"hill": "field", "texas": "star", "campaign": "ballot", "election": "ballot", "washington": "letter", "radio": "radio", "rail": "rail", "road": "route"},
    "means-of-ascent": {"campaign": "ballot", "election": "ballot", "ballot": "ballot", "stevenson": "scale", "court": "scale", "senate": "seal", "flight": "airplane", "texas": "county-map"},
    "master-of-the-senate": {"senate": "chamber", "leader": "gavel", "vote": "vote", "civil rights": "ledger", "southern": "column", "committee": "ledger", "battle": "seal"},
    "the-passage-of-power": {"kennedy": "door", "dallas": "seal", "president": "seal", "air force": "airplane", "command": "phone", "speech": "radio", "white house": "door"},
    "the-definitive-fdr": {"war": "globe", "churchill": "ship", "stalin": "map", "election": "ballot", "white house": "seal", "radio": "radio", "death": "sun", "voyager": "ship"},
    "things-hidden": {"sacrifice": "altar", "victim": "altar", "desire": "triangle", "mimetic": "triangle", "gospel": "scroll", "scripture": "scroll", "myth": "mask", "violence": "circle"},
}

GLYPHS = {
    "map": '<path d="m-112-72 66-24 92 24 66-24v168l-66 24-92-24-66 24z"/><path d="M-46-96v168m92-144v168m-118-42 34-27 30 20 32-35 26 16 33-27"/><circle cx="50" cy="-40" r="9" fill="var(--accent-hover,var(--accent))"/>',
    "scroll": '<path d="M-88-66h144a30 30 0 0 1 0 60H-64a30 30 0 0 0 0 60h144M-88-66a22 22 0 0 0 0 44h144M80 54a22 22 0 0 0 0 44"/><path d="M-48-35h86m-86 58h108m-108 26h58"/>',
    "sword": '<path d="m-74 72 31-31L50-52l23-43 6 52-95 96-31 31zM-87 35l52 52M-44 77l-23 23m37-36 23 23"/><path d="m42-43 19 19"/>',
    "river": '<path d="M-120 -74C-35 -35 24 -100 115 -58S40 18-66 0 3 76 122 61"/><path d="M-120 -89C-28 -50 27 -116 132 -69" opacity=".45"/><circle cx="-118" cy="-74" r="8" fill="var(--accent-hover,var(--accent))"/>',
    "coin": '<circle r="76"/><circle r="62"/><path d="M0-50 14-12 52-12 21 10 32 47 0 24-32 47-21 10-52-12h38z" fill="var(--accent-soft,var(--accent))"/>',
    "laurel": '<path d="M-72 66C-80 0-50-56 0-78M72 66C80 0 50-56 0-78"/><path d="M-62 44l-34-7 28-16m-20-3-34-9 30-14m-16-9-29-18 33-7m72 83 34-7-28-16m20-3 34-9-30-14m16-9 29-18-33-7"/>',
    "column": '<path d="M-100-66h200M-84-50h168M-76-50v118m40-118V68M36-50V68M76-50V68M-92 68h184M-108 84h216"/><path d="M-54-37v93m40-93v93m40-93v93m40-93v93" opacity=".45"/>',
    "arch": '<path d="M-110 76V-4a110 110 0 0 1 220 0v80M-88 76V-4a88 88 0 0 1 176 0v80M-126 76h252"/><circle cy="-14" r="14" fill="var(--accent-soft,var(--accent))"/>',
    "ship": '<path d="M-120 34h240l-28 32H-88zM-14 28V-76l70 104M-6 20l-64-72V20zM-130 82q32-18 64 0t64 0 64 0 64 0"/>',
    "compass": '<circle r="82"/><circle r="12" fill="var(--accent-hover,var(--accent))"/><path d="M0-68 14-12 68 0 14 12 0 68-14 12-68 0-14-12z"/><path d="M0-104v24M0 80v24M-104 0h24M80 0h24"/>',
    "crown": '<path d="M-100 55h200l-14 24h-172zM-92 38-112-32l58 36 54-72 54 72 58-36-20 70z"/><circle cx="-112" cy="-32" r="7" fill="var(--accent-hover,var(--accent))"/><circle cy="-68" r="7" fill="var(--accent-hover,var(--accent))"/><circle cx="112" cy="-32" r="7" fill="var(--accent-hover,var(--accent))"/>',
    "cannon": '<circle cx="-44" cy="44" r="34"/><circle cx="42" cy="44" r="34"/><path d="M-112-10h194l38 24H-94zM-26-10v-22h64v22M-92 78h174"/>',
    "fortress": '<path d="M-112 75v-88h28v-32h34v32h31v-32h38v32h31v-32h34v32h28v88zM-72 22h26v53h-26zm58 0h28v53h-28zm59 0h26v53h-26z"/>',
    "city": '<path d="M-126 80V-4h46v84M-68 80v-126h48V80M-10 80V-4h46v84M48 80v-94h39V80M98 80V-30h34V80M-145 80h292"/><path d="M-55-26h14m-14 24h14M-1 18h16m-16 24h16m31-34h14m-14 24h14m37-46h12m-12 24h12"/>',
    "road": '<path d="M-78 102C-24 48-52 2 0-24s20-62 72-108M-112 102C-58 48-86 2-34-24s20-62 72-108"/><path d="M-91 82l12-12m20-29 12-13m20-28 12-12m21-29 12-12" stroke-dasharray="10 13"/>',
    "bridge": '<path d="M-132-20h264M-118-20v104m236-104V84M-118 84h236M-96-20a96 96 0 0 1 192 0M-60-20a60 60 0 0 1 120 0M-132-38h264"/><path d="M-96-38v18m48-18v18m48-18v18m48-18v18"/>',
    "grid": '<path d="M-100-78v156M-50-78v156M0-78v156M50-78v156M100-78v156M-120-52h240M-120 0h240M-120 52h240"/><path d="M-100 52-50 0 0-52 50 0 100-52" stroke-width="8"/>',
    "blueprint": '<rect x="-104" y="-76" width="208" height="152" rx="3"/><path d="M-72-46h142M-72-12h78M-72 22h142M-72 52h58M28-12h44v44H28z"/><circle cx="-78" cy="-46" r="5" fill="var(--accent-hover,var(--accent))"/>',
    "tower": '<path d="M-64 80V-40l64-42 64 42V80zM-86 80h172M-30 80V24h60v56M-46-22h22v22h-22zm70 0h22v22H24zM-12-42h24v24h-24z"/>',
    "chain": '<circle cx="-60" cy="0" r="42"/><circle cx="0" cy="0" r="42"/><circle cx="60" cy="0" r="42"/><path d="M-27-22 28 22m0-44-55 44"/>',
    "door": '<path d="M-82 82v-164h164V82M-48 82V-48l90-22V82M18 6h3"/><path d="M-114 82h228"/>',
    "field": '<path d="M-125 65q62-94 125 0 62-94 125 0M-125 38q62-94 125 0 62-94 125 0M-125 10q62-94 125 0 62-94 125 0"/><path d="M-98 82h196"/>',
    "rail": '<path d="M-108-84 108 84M-138-55 78 113M-122-69 94 99"/><path d="M-92-57l-18 25m50-2-18 25m50-2-18 25m50-2-18 25m50-2-18 25"/>',
    "star": '<path d="m0-94 23 65 68 0-55 40 21 66-57-40-57 40 21-66-55-40h68z"/><circle r="13" fill="var(--accent-hover,var(--accent))"/>',
    "letter": '<path d="M-106-66h212v132h-212zM-106-66 0 16 106-66M-106 66l78-63m134 63L28 3"/><path d="M-62-30h90m-90 28h50"/>',
    "radio": '<rect x="-94" y="-50" width="188" height="118" rx="11"/><circle cx="-42" cy="7" r="30"/><circle cx="-42" cy="7" r="7" fill="var(--accent-hover,var(--accent))"/><path d="M18-20h48M18 0h48M18 20h48M-70-50l-25-42"/><path d="M105-22q35 22 0 44m15-64q60 42 0 84"/>',
    "ballot": '<path d="M-102-12h204v96h-204zM-60-12v-58h120v58M-42-39l18 18 43-48"/><path d="M-66 28h132M-66 53h98"/>',
    "scale": '<path d="M0-84v162M-90-48H90M0-70l-90 22m90-22 90 22M-90-48l-36 62h72zM90-48 54 14h72zM-54 80h108M-76 96h152"/>',
    "ledger": '<path d="M-112-76h102q26 0 26 26v126q0-26-26-26h-102zM112-76H10q-26 0-26 26v126q0-26 26-26h102z"/><path d="M-88-38h64m-64 28h64m-64 28h64M24-38h64M24-10h64M24 18h64"/>',
    "chamber": '<path d="M-112 70h224M-96 54h192M-78 38h156M-58 22h116M-36 6h72M0-74v80"/><path d="M-100 70v-28m40 28V14m120 56V14m40 56V42M-20-74h40l18 28h-76z"/>',
    "gavel": '<path d="m-62-58 48-48 76 76-48 48zM-10-10 70 70M-96 86H96M38 40l34-34"/><circle cx="-42" cy="-38" r="8" fill="var(--accent-hover,var(--accent))"/>',
    "vote": '<path d="M-104-68h208v152h-208zM-64-30l28 29 65-72"/><path d="M-62 45h124"/>',
    "phone": '<path d="M-42-76c-28 12-40 39-32 70s32 62 69 80c27 13 57 11 74-10l-33-34-28 14c-22-12-39-28-50-50l14-27z"/><path d="M40-86q52 20 52 66m-75-82q86 28 86 104"/>',
    "desk": '<path d="M-110-10h220v26h-220zM-92 16v70m184-70v70M-56-10v-50h52v50m12-50 40-26v76M-4-60h20"/><path d="M-126 88h252"/>',
    "airplane": '<path d="M-124 8 124-24 28 12 74 62 50 70 0 28-50 72-74 63-28 12z"/><path d="M-26 12 14-90l20-7-10 102"/>',
    "seal": '<circle r="82"/><circle r="64"/><circle r="12" fill="var(--accent-hover,var(--accent))"/><path d="M0-42v84m-42-42h84M-30-30l60 60m0-60-60 60"/>',
    "globe": '<circle r="82"/><ellipse rx="36" ry="82"/><path d="M-78-28h156M-82 0h164M-78 28h156"/><path d="M0-82v164"/>',
    "sun": '<circle r="42"/><path d="M0-100v32M0 68v32M-100 0h32M68 0h32M-70-70l23 23m94 94 23 23M70-70 47-47m-94 94-23 23"/><circle r="22" fill="var(--accent-soft,var(--accent))"/>',
    "flag": '<path d="M-70 92V-92m0 8q54-34 108 0v68q-54-34-108 0M-92 92h184"/><path d="m-14-57 12-12 12 12-12 12z" fill="var(--accent-hover,var(--accent))"/>',
    "triangle": '<path d="M0-82 94 78h-188z"/><circle cy="-82" r="12"/><circle cx="94" cy="78" r="12"/><circle cx="-94" cy="78" r="12"/><circle r="22" fill="var(--accent-soft,var(--accent))"/><path d="M-60 42 0-32 60 42" stroke-dasharray="8 10"/>',
    "eye": '<path d="M-118 0Q0-92 118 0Q0 92-118 0z"/><circle r="38"/><circle r="13" fill="var(--accent-hover,var(--accent))"/>',
    "altar": '<path d="M-92-36h184v30H-92zM-74-6h148l28 82H-102zM-124 86h248"/><path d="M0-114v42m-58-24 23 31m93-31L35-65"/>',
    "mirror": '<path d="M0-98c55 0 79 45 79 96S55 92 0 92-79 49-79-2s24-96 79-96z"/><path d="M-28-54q56 22 47 82"/><path d="M-48 100h96"/>',
    "circle": '<circle cx="-40" r="66"/><circle cx="40" r="66"/><circle cy="35" r="66"/><circle cy="4" r="10" fill="var(--accent-hover,var(--accent))"/>',
    "branch": '<path d="M-4 92C-10 28 6-29 0-96M0-16l-66-46m66 72 76-59m-74 91-67-31m67-3 64 44"/><path d="m-75-66 18-4-5 18zm92-30 16 8-16 8zm66 0 18 8-18 8zm-94 142 18-4-5 18zm83 19 16 8-16 8z" fill="var(--accent-soft,var(--accent))"/>',
    "mask": '<path d="M-72-76Q0-112 72-76l-9 112Q0 94-63 36z"/><path d="M-47-18q18-22 36 0m22 0q18-22 36 0M-30 38q30 20 60 0"/><path d="M0-72v22" stroke-dasharray="4 8"/>',
    "horse": '<path d="M-82 52q-8-46 24-68l24-36 31 5 21 30 41 6 18 26-18 42-34 1-11 34H-2l-7-40-37 4-13 32h-20l6-45z"/><path d="m-34-17 27 12m56-28 10 2"/>',
    "clock": '<circle r="82"/><path d="M0-62v62l42 26M0-102v18M102 0H84M0 102V84M-102 0h18"/><circle r="9" fill="var(--accent-hover,var(--accent))"/>',
    "county-map": '<path d="M-112-78h70v64h-70zM-34-78h86v64h-86zM60-78h52v64H60zM-112-4h56v82h-56zM-48-4h80v82h-80zM40-4h72v82H40z"/><path d="M-88 46-36 8 5 28 67-52" stroke-width="7"/><circle cx="67" cy="-52" r="8" fill="var(--accent-hover,var(--accent))"/>',
    "route": '<path d="M-110 62c40 0 32-90 76-90s32 76 74 76 26-72 72-72"/><circle cx="-110" cy="62" r="12"/><circle cx="112" cy="-24" r="12"/><path d="m85-43 27 19-27 18"/>',
    "candle": '<path d="M-28-10h56l12 92h-80zM-42 82h84M0-12v-18m0-56c-30 30-13 51 0 56 20-17 25-37 0-56z"/><path d="M-12 18h24M-10 42h20" opacity=".6"/>',
    "bazaar": '<path d="M-112-24h224l-20-48H-92zM-92-72v48m46-48v48m46-48v48m46-48v48M-98-24v96h196v-96M-72 72V4h54v68m26-44h50v20H8z"/><path d="M-112-24q23 24 46 0 23 24 46 0 23 24 46 0 23 24 46 0 23 24 46 0"/>',
    "cloud": '<path d="M-104 34h200a42 42 0 0 0-12-82 62 62 0 0 0-116-6 46 46 0 0 0-72 54z"/><path d="M-60 58v22m60-22v22m60-22v22" opacity=".65"/>',
    "clay": '<path d="M-38-82h76l-10 28 18 28-10 18 28 76H-64l28-76-10-18 18-28zM-64 68h128M-42-50h84"/><path d="M-22-23h44" opacity=".55"/>',
    "window": '<path d="M-92 84V-82h184V84zM0-82v166M-92 0H92"/><path d="M-65 54 0 8l64 46M-65-48l65 45 64-45" opacity=".58"/>',
    "ivy": '<path d="M-8 92C-18 25 20-29 0-96M-2-10l-62-44m60 66 66-60m-63 91-60-30m59 0 56 42"/><path d="m-76-67 30 4-8 28-25-6zm61-32 23 21-22 20-22-21zm87 6-4 29-28-4 5-28zm62 24-19 23-24-17 18-24zm-154 91 28-7 8 26-29 9zm112 14-3 30-29-3 5-29z" fill="var(--accent-soft,var(--accent))"/>',
    "theatre": '<path d="M-100 78V-58h200V78M-118 78h236M-78-58v136M78-58v136M-82-82q40 54 82 0 40 54 82 0"/><path d="M-48-18q20-24 40 0-20 24-40 0zm56 0q20-24 40 0-20 24-40 0zM-25 30q25 20 50 0"/>',
    "chalice": '<path d="M-58-76h116v34q0 67-58 80-58-13-58-80zM0 38v39m-38 0h76M-74-60h16m100 0h16"/><path d="M-18-44h36" opacity=".6"/>',
    "snow": '<path d="M0-96v192M-84-48 84 48M-84 48 84-48M0-96l-18 22m18-22 18 22M0 96l-18-22m18 22 18-22M-84-48l28 2m-28-2 10 25m82 71-28-2m28 2-10-25m-82 0 28-2m-28 2 10-25m82-71-28 2m28-2-10 25"/>',
    "schoolbook": '<path d="M0-62q-48-28-100-16v136q52-12 100 16 48-28 100-16v-136Q48-90 0-62zM0-62v136M-76-42h40m-40 24h40m32 0h40m-40 24h40"/><path d="M-10 69v28l10-9 10 9V69"/>',
    "flame": '<path d="M0-102c-8 37-56 48-56 104 0 42 24 68 56 68s56-26 56-68c0-29-14-48-26-62 0 29-12 42-23 47 4-36-2-59-7-89z"/><path d="M0-20c-19 19-27 34-27 51 0 19 12 32 27 32s27-13 27-32C27 15 15-4 0-20z" fill="var(--accent-soft,var(--accent))"/>',
    "wings": '<path d="M0-8C-45-76-102-76-120-66c18 18 28 43 32 72 5 41 31 69 88 57M0-8C45-76 102-76 120-66c-18 18-28 43-32 72-5 41-31 69-88 57M0-22v112"/><path d="M-88-41q38 7 69 44m-47-57q24 11 48 40M88-41Q50-34 19 3m47-57Q42-43 18-14" opacity=".65"/>',
    "quill": '<path d="M-64 78C-44 14 5-82 96-96c-12 87-71 143-145 159M-64 78l56-56m-38 30 10-35m17 18 11-37m20 13 11-37m20 9 11-36"/><path d="M-84 94 26 28"/>',
    "bed": '<path d="M-108 18h216v48h-216zM-88 18v-42h66q28 0 28 42m0 0v-42h60q28 0 28 42M-94 66v22m188-22v22"/><path d="M-118 88h236"/>',
    "lotus": '<path d="M0 48C-58 48-88 10-92-32c43 0 78 18 92 55 14-37 49-55 92-55-4 42-34 80-92 80zM0 22C-28-18-18-62 0-92 18-62 28-18 0 22zm-8 43q-48 42-96 8m112-8q48 42 96 8M-120 94q60-24 120 0 60-24 120 0"/>',
    "tomb": '<path d="M-94 88V-12a94 94 0 0 1 188 0V88zM-68 88V-12a68 68 0 0 1 136 0V88M-120 88h240"/><path d="M0-36v52m-18-34h36"/>',
    "wind": '<path d="M-122-52h153q38 0 38-28 0-24-24-24-18 0-24 17M-122 0H92q35 0 35 29 0 25-25 25-18 0-23-18M-122 52h132q28 0 28 25 0 20-20 20-14 0-18-14"/><path d="M-90-82h42M64 24h30M-82 78h26" opacity=".6"/>',
    "table": '<path d="M-112-32h224v24h-224zM-90-8v92m180-92v92M-122 84h244"/><ellipse cx="-53" cy="-49" rx="21" ry="9"/><ellipse cx="53" cy="-49" rx="21" ry="9"/><path d="M-53-58v18m53-18v18m53-18v18"/>',
    "strait": '<path d="M-120-94  -62-38-82-3-38 28-58 94M120-94 62-38 82-3 38 28 58 94"/><path d="M-38-70q38-20 76 0m-76 35q38-20 76 0m-76 35q38-20 76 0m-76 35q38-20 76 0"/>',
    "harp": '<path d="M-82 84V-82Q-58-102-28-82L78 84H-82M-48-70v137m28-139 10 139M-6-59l28 126M15-44l39 111M38-22l38 89"/><path d="M-98 84h190"/>',
    "shell": '<path d="M-100 52a100 100 0 0 1 200 0zM-100 52 0-94l100 146M-68 52-48-23m80 75L48-23M-34 52-24-57m58 109L24-57M0 52V-94"/><path d="M-112 68h224"/>',
    "lamp": '<path d="M-56-52h112l-18 74H-38zM-40 22h80l20 54h-120zM-70 76h140M0-76v24"/><path d="M0-108c-24 24-19 42 0 48 19-6 24-24 0-48z" fill="var(--accent-soft,var(--accent))"/>',
    "moon": '<path d="M28-92C-16-69-36-23-25 24-14 73 29 99 72 83 48 116-2 119-42 91-95 54-107-18-70-68-50-95-10-111 28-92z"/><circle cx="54" cy="-38" r="7" fill="var(--accent-hover,var(--accent))"/><circle cx="88" cy="2" r="5" fill="var(--accent-hover,var(--accent))"/>',
}


def motif_for(slug: str, part: str, title: str, index: int) -> str:
    title_key = re.sub(r"\s+", " ", title.casefold()).strip()
    direct = TITLE_MOTIFS.get(slug, {}).get(title_key)
    if direct:
        return direct
    text = f"{part} {title}".casefold()
    for keyword, motif in KEYWORDS.get(slug, {}).items():
        if keyword in text:
            return motif
    motifs = BOOKS[slug]
    return motifs[index % len(motifs)]


def render_symbol(symbol_id: str, part_roman: str, chapter_number: int, motif: str) -> str:
    glyph = GLYPHS[motif]
    return f'''  <symbol id="{symbol_id}" viewBox="0 0 400 240">
    <rect x="12" y="12" width="376" height="216" rx="5" fill="var(--bg-elevated)" stroke="var(--border-strong)"/>
    <path d="M32 52H368M32 198H368" stroke="var(--border)"/>
    <text x="34" y="41" fill="var(--text-muted)" font-size="11" letter-spacing="2">PART {escape(part_roman)}</text>
    <text x="366" y="41" fill="var(--text-muted)" font-size="11" text-anchor="end" letter-spacing="2">CHAPTER {chapter_number:02}</text>
    <g transform="translate(200 126)" fill="none" stroke="var(--accent-hover,var(--accent))" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">{glyph}</g>
    <path d="M34 216h42m248 0h42" stroke="var(--accent)" stroke-width="2"/>
  </symbol>'''


def build_book(slug: str) -> int:
    book_dir = ROOT / "books" / slug
    toc = json.loads((book_dir / "data" / "toc.json").read_text(encoding="utf-8"))
    manifest_path = book_dir / "design" / "chapters.json"
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    symbols = []
    chapters = {}
    counter = 0
    for part_index, part in enumerate(toc["parts"], 1):
        for chapter_index, chapter in enumerate(part["chapters"], 1):
            counter += 1
            chapter_id = f"p{part_index}c{chapter_index}"
            symbol_id = f"chapter-{chapter_id}"
            motif = motif_for(slug, part["name"], chapter["title"], counter - 1)
            symbols.append(render_symbol(symbol_id, part["roman"], chapter_index, motif))
            chapters[chapter_id] = {
                "src": "art/chapter-plates.svg",
                "symbol": symbol_id,
                "class": "plate",
                "motif": motif,
                "caption": chapter["title"],
            }
    sprite = '<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n' + "\n".join(symbols) + "\n</defs>\n</svg>\n"
    (book_dir / "art" / "chapter-plates.svg").write_text(sprite, encoding="utf-8")
    manifest["chapters"] = chapters
    manifest.setdefault("version", 1)
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    for old_plate in (book_dir / "art").glob("p[0-9]*c[0-9]*.svg"):
        old_plate.unlink(missing_ok=True)
    return counter


def main() -> None:
    selected = sys.argv[1:] or list(BOOKS)
    unknown = sorted(set(selected) - set(BOOKS))
    if unknown:
        raise SystemExit(f"unknown imported book(s): {', '.join(unknown)}")
    for slug in selected:
        print(f"{slug}: wrote {build_book(slug)} chapter plates")


if __name__ == "__main__":
    main()
