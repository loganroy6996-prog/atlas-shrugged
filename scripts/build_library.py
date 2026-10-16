#!/usr/bin/env python3
"""
Extract, clean, and structure all books into books/<slug>/data/.
Also copies Atlas Shrugged if already built.
"""
from __future__ import annotations

import json
import re
import shutil
import tempfile
import zipfile
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw_extract"
BOOKS = ROOT / "books"

JUNK_LINE = re.compile(
    r"(?i)^\s*(OceanofPDF\.com|http://|https://|www\.|"
    r"penguin\.com|eISBN|btb_ppg|REGISTERED TRADEMARK|"
    r"All rights reserved\.?|Printed in|First (Signet|Vintage|Penguin)|"
    r"Copyright ©|ISBN[:\s]|Library of Congress|"
    r"Begin Reading|Table of Contents|Newsletters|Copyright Page)\s*$"
)
JUNK_CONTAINS = re.compile(
    r"(?i)OceanofPDF|penguingroup|permissions@hbgusa|"
    r"scanning, uploading, and distribution of this book"
)

SENT_END = re.compile(r'[.!?…](?:["\u201d\u2019\'»”)\]]+)?$')


def clean_line(s: str) -> str:
    s = s.replace("\u00ad", "").replace("\ufeff", "")
    s = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", s)
    return s.rstrip()


def is_junk(line: str) -> bool:
    s = line.strip()
    if not s:
        return False
    if JUNK_LINE.match(s):
        return True
    if JUNK_CONTAINS.search(s) and len(s) < 200:
        return True
    # page numbers alone
    if re.fullmatch(r"\d{1,4}", s):
        return True
    return False


def reflow(lines: list[str], fill_width: int = 68) -> list[str]:
    """Join hard-wrapped lines into paragraphs."""
    src = []
    for ln in lines:
        ln = clean_line(ln)
        if is_junk(ln):
            continue
        if not ln.strip():
            src.append("")  # paragraph break
            continue
        src.append(ln.strip())

    paragraphs: list[str] = []
    buf: list[str] = []

    def flush():
        nonlocal buf
        if not buf:
            return
        result = buf[0]
        for p in buf[1:]:
            if result.endswith("-") and not result.endswith("—") and not result.endswith("--"):
                result = result + p
            else:
                result = result + " " + p
        result = re.sub(r"[ \t]+", " ", result).strip()
        # drop very short pure-junk leftovers
        if result and not re.fullmatch(r"[\d\W]+", result):
            paragraphs.append(result)
        buf = []

    last = ""
    for s in src:
        if s == "":
            flush()
            last = ""
            continue
        if not buf:
            buf = [s]
            last = s
            continue
        cont = False
        if last.endswith("-") and not last.endswith("—"):
            cont = True
        elif s[:1].islower():
            cont = True
        elif not SENT_END.search(last):
            cont = True
        elif len(last) >= fill_width:
            cont = True
        if cont:
            buf.append(s)
            last = s
        else:
            flush()
            buf = [s]
            last = s
    flush()
    return paragraphs


def write_book(slug: str, meta: dict, parts: list[dict]) -> None:
    """parts: [{subtitle, chapters: [{title, paragraphs}]}]"""
    out = BOOKS / slug
    chap_dir = out / "data" / "chapters"
    if chap_dir.exists():
        shutil.rmtree(chap_dir)
    chap_dir.mkdir(parents=True, exist_ok=True)

    toc_parts = []
    total_words = 0
    n_ch = 0
    for pi, part in enumerate(parts):
        toc_chs = []
        for ci, ch in enumerate(part["chapters"]):
            n_ch += 1
            cid = f"p{pi+1}c{ci+1}"
            words = sum(len(p.split()) for p in ch["paragraphs"])
            total_words += words
            payload = {
                "id": cid,
                "number_label": ch.get("number_label") or f"Chapter {ci+1}",
                "roman": ch.get("roman") or str(ci + 1),
                "title": ch["title"],
                "part": f"part-{pi+1}",
                "part_roman": part.get("roman") or str(pi + 1),
                "part_subtitle": part.get("subtitle") or part.get("title") or "",
                "index": ci + 1,
                "paragraphs": ch["paragraphs"],
            }
            if ch.get("note_refs"):
                payload["note_refs"] = ch["note_refs"]
            (chap_dir / f"{cid}.json").write_text(
                json.dumps(payload, ensure_ascii=False), encoding="utf-8"
            )
            if slug == "infinite-jest" and payload["part"] == "part-2":
                notes_index = json.loads(
                    (out / "data" / "notes-index.json").read_text(encoding="utf-8")
                    if (out / "data" / "notes-index.json").exists()
                    else "{}"
                )
                for p in ch["paragraphs"]:
                    m = re.match(r"^(\d{1,3})\.\s", p)
                    if m:
                        notes_index[m.group(1)] = cid
                (out / "data" / "notes-index.json").write_text(
                    json.dumps(notes_index, ensure_ascii=False, indent=1),
                    encoding="utf-8",
                )
            toc_chs.append(
                {
                    "id": cid,
                    "number_label": payload["number_label"],
                    "roman": payload["roman"],
                    "title": ch["title"],
                    "word_count": words,
                }
            )
        toc_parts.append(
            {
                "id": f"part-{pi+1}",
                "roman": part.get("roman") or str(pi + 1),
                "name": part.get("name") or part.get("title") or f"Part {pi+1}",
                "subtitle": part.get("subtitle") or part.get("title") or "",
                "chapters": toc_chs,
            }
        )

    toc = {
        "title": meta["title"],
        "author": meta["author"],
        "dedication": meta.get("dedication", ""),
        "parts": toc_parts,
    }
    (out / "data").mkdir(parents=True, exist_ok=True)
    (out / "data" / "toc.json").write_text(
        json.dumps(toc, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    meta_out = {
        **meta,
        "slug": slug,
        "chapters": n_ch,
        "words": total_words,
        "parts": len(parts),
    }
    (out / "meta.json").write_text(
        json.dumps(meta_out, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"  ✓ {slug}: {n_ch} chapters, {total_words:,} words, {len(parts)} parts")


def load_raw(name: str) -> list[str]:
    path = RAW / name
    return path.read_text(encoding="utf-8", errors="replace").splitlines()


# ── Book parsers ─────────────────────────────────────────


def parse_fountainhead() -> tuple[dict, list]:
    lines = load_raw("the_fountainhead.txt")
    # Body starts at "Part 1" after 1968 intro (~line 511)
    start = 0
    for i, l in enumerate(lines):
        if re.match(r"^\s*Part 1\s*$", l) and i > 400:
            start = i
            break
    body = lines[start:]
    # Find end before AFTERWORD
    end = len(body)
    for i, l in enumerate(body):
        if re.match(r"^\s*AFTERWORD\s*$", l, re.I) or "ABOUT THE AUTHOR" in l.upper():
            if i > 100:
                end = i
                break
    body = body[:end]

    PART_RE = re.compile(r"^\s*Part\s+([1-4])\s*$", re.I)
    # Chapter is roman numeral alone (I-XX) optionally with spaces
    CH_RE = re.compile(r"^\s*([IVX]+)\s*$")
    # Part subtitle like PETER KEATING on its own line after Part
    parts = []
    cur_part = None
    cur_ch = None
    buf = []
    pending_part_title = None

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = reflow(buf)
        # first para may be ALL CAPS chapter open if any
        cur_ch["paragraphs"] = paras
        if not cur_ch.get("title"):
            cur_ch["title"] = cur_ch["number_label"]
        cur_part["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    def fin_part():
        nonlocal cur_part
        fin_ch()
        if cur_part:
            parts.append(cur_part)
            cur_part = None

    i = 0
    while i < len(body):
        s = body[i].strip()
        m = PART_RE.match(s)
        if m:
            fin_part()
            num = m.group(1)
            subtitle = ""
            # next non-junk non-empty may be part name (PETER KEATING);
            # stop at a chapter numeral so "I" is never eaten as subtitle.
            j = i + 1
            while j < len(body) and (not body[j].strip() or is_junk(body[j])):
                j += 1
            if j < len(body):
                cand = body[j].strip()
                if cand.isupper() and 2 <= len(cand.split()) <= 6 and not CH_RE.match(cand):
                    subtitle = cand.title()
                    i = j
            cur_part = {
                "roman": num,
                "name": f"Part {num}",
                "subtitle": subtitle or f"Part {num}",
                "chapters": [],
            }
            i += 1
            continue
        m = CH_RE.match(s)
        if m and cur_part is not None:
            # Bare romans only count as chapters when blank-surrounded AND
            # the next roman in sequence (I..II..III). Front-matter TOC
            # fragments (bare I/II at file top) never satisfy both guards.
            rom = m.group(1)
            prev_blank = not body[i - 1].strip() if i > 0 else True
            nxt_blank = not body[i + 1].strip() if i + 1 < len(body) else True
            expect = len(cur_part["chapters"]) + 1
            if cur_ch is not None:
                expect += 1  # open chapter not yet flushed into the list
            vals = {"I": 1, "V": 5, "X": 10, "L": 50}
            tot, pv = 0, 0
            for ch in reversed(rom):
                v = vals.get(ch, 0)
                tot += -v if v < pv else v
                pv = v
            if prev_blank and nxt_blank and tot == expect:
                fin_ch()
                cur_ch = {
                    "number_label": f"Chapter {rom}",
                    "roman": rom,
                    "title": f"Chapter {rom}",
                    "paragraphs": [],
                }
                buf = []
                i += 1
                continue
        if cur_ch is not None:
            buf.append(body[i])
        i += 1
    fin_part()

    meta = {
        "title": "The Fountainhead",
        "author": "Ayn Rand",
        "dedication": "To Frank O’Connor",
        "tagline": "A novel of architecture and integrity",
        "year": "1943",
        "theme": "fountainhead",
        "accent": "#6b9ac4",
        "blurb": "An architect who will not compromise — and a world that demands it.",
    }
    return meta, parts


def parse_beyond_good_and_evil() -> tuple[dict, list]:
    lines = load_raw("beyond_good_and_evil.txt")
    # Start at first real PREFACE body (after TOC) — line ~47 second PREFACE
    start = 0
    for i, l in enumerate(lines):
        if l.strip() == "PREFACE" and i > 40:
            start = i
            break
    body = lines[start:]
    # End before FROM THE HEIGHTS poetry or end
    CH_RE = re.compile(r"^CHAPTER\s+([IVX]+)\s*$", re.I)
    PREFACE_RE = re.compile(r"^PREFACE\s*$", re.I)

    parts = [{"roman": "I", "name": "The Work", "subtitle": "Prelude to a Philosophy of the Future", "chapters": []}]
    cur_ch = None
    buf = []

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = reflow(buf)
        if paras and paras[0] == paras[0].upper() and len(paras[0]) < 80:
            # chapter subtitle line (e.g. PREJUDICES OF PHILOSOPHERS) duplicates
            # the titles-dict value already set on cur_ch; keep dict casing and
            # only take paras[0] when cur_ch still holds the generic fallback.
            if cur_ch["title"] == f"Chapter {cur_ch['roman']}":
                cur_ch["title"] = paras[0].title() if paras[0].isupper() else paras[0]
            paras = paras[1:]
        cur_ch["paragraphs"] = paras
        if not cur_ch.get("title"):
            cur_ch["title"] = cur_ch["number_label"]
        parts[0]["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    titles = {
        "I": "Prejudices of Philosophers",
        "II": "The Free Spirit",
        "III": "The Religious Mood",
        "IV": "Apophthegms and Interludes",
        "V": "The Natural History of Morals",
        "VI": "We Scholars",
        "VII": "Our Virtues",
        "VIII": "Peoples and Countries",
        "IX": "What is Noble?",
    }

    for i, line in enumerate(body):
        s = line.strip()
        if PREFACE_RE.match(s) and cur_ch is None:
            cur_ch = {"number_label": "Preface", "roman": "0", "title": "Preface", "paragraphs": []}
            buf = []
            continue
        m = CH_RE.match(s)
        if m:
            fin_ch()
            rom = m.group(1).upper()
            cur_ch = {
                "number_label": f"Chapter {rom}",
                "roman": rom,
                "title": titles.get(rom, f"Chapter {rom}"),
                "paragraphs": [],
            }
            buf = []
            continue
        # FROM THE HEIGHTS as closing
        if s.upper().startswith("FROM THE HEIGHTS") or s.upper() == "AFTERSONG":
            fin_ch()
            cur_ch = {"number_label": "Aftersong", "roman": "X", "title": "From the Heights", "paragraphs": []}
            buf = []
            continue
        if cur_ch is not None:
            buf.append(line)
    fin_ch()

    meta = {
        "title": "Beyond Good and Evil",
        "author": "Friedrich Nietzsche",
        "dedication": "",
        "tagline": "Prelude to a Philosophy of the Future",
        "year": "1886",
        "theme": "beyond-good-and-evil",
        "accent": "#a78bfa",
        "blurb": "A raid on the prejudices of philosophers — free spirits, morality, and nobility.",
    }
    return meta, parts


def parse_zarathustra() -> tuple[dict, list]:
    lines = load_raw("thus_spoke_zarathustra.txt")
    # Body opens at the spaced "PA RT O N E" header (front Contents is skipped).
    start = 0
    for i, l in enumerate(lines):
        if i > 900 and re.sub(r"[^A-Z]", "", l.upper()) in (
            "PARTONE",
            "PARTTWO",
            "PARTTHREE",
            "PARTFOUR",
        ):
            start = i
            break
    # Fallback: When Zarathustra was thirty (second occurrence)
    if start == 0:
        hits = [i for i, l in enumerate(lines) if "When Zarathustra was thirty years old" in l]
        start = hits[1] - 5 if len(hits) > 1 else (hits[0] - 5 if hits else 0)

    body = lines[start:]
    # End before notes
    for i, l in enumerate(body):
        if re.match(r"^\s*NOTES\s*$", l) or re.match(r"^\s*Notes\s*$", l):
            if i > 200:
                body = body[:i]
                break

    # Gazetteer from the front Contents (canonical display titles).
    GAZETTEER = [
        "Of the Three Metamorphoses", "Of the Chairs of Virtue", "Of the Afterworldsmen",
        "Of the Despisers of the Body", "Of Joys and Passions", "Of the Pale Criminal",
        "Of Reading and Writing", "Of the Tree on the Mountainside", "Of the Preachers of Death",
        "Of War and Warriors", "Of the New Idol", "Of the Flies of the Market-place",
        "Of Chastity", "Of the Friend", "Of the Thousand and One Goals",
        "Of Love of One\u2019s Neighbour", "Of the Way of the Creator", "Of Old and Young Women",
        "Of the Adder\u2019s Bite", "Of Marriage and Children", "Of Voluntary Death",
        "Of the Bestowing Virtue",
        "The Child with the Mirror", "On the Blissful Islands", "Of the Compassionate",
        "Of the Priests", "Of the Virtuous", "Of the Rabble", "Of the Tarantulas",
        "Of the Famous Philosophers", "The Night Song", "The Dance Song", "The Funeral Song",
        "Of Self-Overcoming", "Of the Sublime Men", "Of the Land of Culture",
        "Of Immaculate Perception", "Of Scholars", "Of Poets", "Of Great Events",
        "The Prophet", "Of Redemption", "Of Manly Prudence", "The Stillest Hour",
        "The Wanderer", "Of the Vision and the Riddle", "Of Involuntary Bliss",
        "Before Sunrise", "Of the Virtue that Makes Small", "On the Mount of Olives",
        "Of Passing By", "Of the Apostates", "The Home-Coming", "Of the Three Evil Things",
        "Of the Spirit of Gravity", "Of Old and New Law-Tables", "The Convalescent",
        "Of the Great Longing", "The Second Dance Song",
        "The Seven Seals (or: The Song of Yes and Amen)",
        "The Honey Offering", "The Cry of Distress", "Conversation with the Kings",
        "The Leech", "The Sorcerer", "Retired from Service", "The Ugliest Man",
        "The Voluntary Beggar", "The Shadow", "At Noontide", "The Greeting",
        "The Last Supper", "Of the Higher Man", "The Song of Melancholy", "Of Science",
        "Among the Daughters of the Desert", "The Awakening", "The Ass Festival",
        "The Intoxicated Song", "The Sign",
    ]

    def _norm(s: str) -> str:
        s = s.replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"')
        return re.sub(r"\s+", " ", s).strip().lower()

    GAZ_MAP = {_norm(t): t for t in GAZETTEER}
    PROLOGUE_NORM = _norm("Zarathustra\u2019s Prologue")
    DISCOURSES_NORM = _norm("Zarathustra\u2019s Discourses")
    GAZ_MAP[PROLOGUE_NORM] = "Zarathustra\u2019s Prologue"

    ZAR_EPIGRAPH_RE = re.compile(r"^\s*ZARATHUSTRA\s*:", re.I)
    POEM_ENUM_RE = re.compile(
        r"^(One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve)!$", re.I
    )

    parts = []
    cur_part = None
    cur_ch = None
    buf = []

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = reflow(buf)
        cur_ch["paragraphs"] = paras
        cur_part["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    def fin_part():
        nonlocal cur_part
        fin_ch()
        if cur_part:
            parts.append(cur_part)
            cur_part = None

    part_map = {
        "ONE": ("I", "Part One"),
        "TWO": ("II", "Part Two"),
        "THREE": ("III", "Part Three"),
        "FOUR": ("IV", "Part Four"),
    }

    for line in body:
        s = line.strip()
        if not s:
            if cur_ch is not None:
                buf.append(line)
            continue
        # Drop bare page/prologue-section numbers, the R.J.H. signature,
        # ZARATHUSTRA: epigraph lines, and One!/Two!.. poem enumerations.
        if re.fullmatch(r"\d{1,4}", s):
            continue
        if s == "R.J.H.":
            continue
        if ZAR_EPIGRAPH_RE.match(line):
            continue
        if POEM_ENUM_RE.match(s):
            continue
        # Spaced part headers: "PA RT O N E" .. "PA RT F O U R".
        pkey = re.sub(r"[^A-Z]", "", s.upper())
        if pkey in ("PARTONE", "PARTTWO", "PARTTHREE", "PARTFOUR"):
            fin_part()
            rom, name = part_map[pkey[len("PART"):]]
            cur_part = {"roman": rom, "name": name, "subtitle": name, "chapters": []}
            continue
        if cur_part is None:
            continue
        indent = len(line) - len(line.lstrip(" "))
        key = _norm(s)
        # "Zarathustra's Discourses" is a section divider, not a chapter.
        if key == DISCOURSES_NORM:
            fin_ch()
            continue
        # Centered gazetteer titles open chapters.
        if indent >= 10 and key in GAZ_MAP:
            fin_ch()
            title = GAZ_MAP[key]
            cur_ch = {
                "number_label": title,
                "roman": str(len(cur_part["chapters"]) + 1),
                "title": title,
                "paragraphs": [],
            }
            buf = []
            continue
        if cur_ch is None:
            # Epigraph/prologue-number lines before the first discourse
            # title belong to no chapter: drop them.
            continue
        buf.append(line)
    fin_part()

    meta = {
        "title": "Thus Spoke Zarathustra",
        "author": "Friedrich Nietzsche",
        "dedication": "",
        "tagline": "A Book for Everyone and No One",
        "year": "1883\u20131885",
        "theme": "zarathustra",
        "accent": "#e8a838",
        "blurb": "The prophet descends from the mountain \u2014 with laughter, lightning, and the overman.",
    }
    return meta, parts


def parse_twilight() -> tuple[dict, list]:
    lines = load_raw("_oceanofpdf_com_twilight_of_the_idols___.txt")
    # Body starts at FOREWORD (its own chapter titled 'Foreword')
    start = 0
    for i, l in enumerate(lines):
        if i > 500 and l.strip().rstrip("*").strip().upper() == "FOREWORD":
            start = i
            break
    body = lines[start:]
    # End at THE HAMMER SPEAKS end / before critical apparatus
    end = len(body)
    for i, l in enumerate(body):
        if i > 100 and (
            re.match(r"^\s*Explanatory Notes", l, re.I)
            or re.match(r"^\s*NOTES\s*$", l)
            or "Götzen-Dämmerung" in l and "parody" in l.lower()
        ):
            # Keep through THE HAMMER SPEAKS
            pass
        if i > 2000 and re.match(r"^\s*Explanatory Notes", l, re.I):
            end = i
            break
        if i > 2400 and l.strip().startswith("Twilight of the Idols:") and "parody" in l.lower():
            end = i
            break
    body = body[:end]

    # Join wrapped two-line caps headers before matching.
    joined: list[str] = []
    skip_next = False
    for j, ln in enumerate(body):
        if skip_next:
            skip_next = False
            continue
        cu = ln.strip().rstrip("*").strip().upper()
        nxt = body[j + 1].strip().rstrip("*").strip() if j + 1 < len(body) else ""
        nu = nxt.upper()
        if (
            cu.startswith("HOW THE")
            and "REAL WORLD" in cu
            and nu.startswith("BECAME")
        ):
            merged = ln.strip() + " " + nxt.strip()
            merged = re.sub(r"\bAFABLE\b", "A FABLE", merged, flags=re.I)
            joined.append(merged)
            skip_next = True
            continue
        if cu.startswith("RECONNAISSANCE RAIDS") and nu.startswith("UNTIMELY"):
            joined.append(ln.strip() + " " + nxt.strip())
            skip_next = True
            continue
        joined.append(ln)
    body = joined

    def clean_title(raw: str) -> str:
        t = raw.replace("*", "").strip()
        t = re.sub(r"\bAFABLE\b", "A FABLE", t, flags=re.I)
        return t

    # Section headers: ALL CAPS short lines, often with *
    SECTION_RE = re.compile(
        r"^(FOREWORD|MAXIMS AND BARBS|MAXIMS AND ARROWS|THE PROBLEM OF SOCRATES|"
        r"‘REASON’ IN PHILOSOPHY|REASON IN PHILOSOPHY|"
        r"HOW THE[‘'\" ]*REAL WORLD[‘'\" ]*(AT LAST|FINALLY) BECAME A FABLE|"
        r"MORALITY AS ANTI-NATURE|THE FOUR GREAT ERRORS|"
        r"THE[‘'\" ]*IMPROVERS[‘'\" ]* OF MANKIND|WHAT THE GERMANS LACK|"
        r"RECONNAISSANCE RAIDS OF AN UNTIMELY MAN|"
        r"SKIRMISHES OF AN UNTIMELY MAN|WHAT I OWE THE ANCIENTS|"
        r"THE HAMMER SPEAKS).*$",
        re.I,
    )

    CANON = {
        "FOREWORD": "Foreword",
        "HOW THE REAL WORLD FINALLY BECAME A FABLE": "How the Real World Finally Became a Fable",
        "HOW THE REAL WORLD AT LAST BECAME A FABLE": "How the Real World Finally Became a Fable",
        "RECONNAISSANCE RAIDS OF AN UNTIMELY MAN": "Reconnaissance Raids of an Untimely Man",
    }

    parts = [{"roman": "I", "name": "Twilight", "subtitle": "How to Philosophize with a Hammer", "chapters": []}]
    cur_ch = None
    buf = []

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = reflow(buf)
        cur_ch["paragraphs"] = paras
        parts[0]["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    for line in body:
        s = clean_title(line.strip())
        su = re.sub(r"[‘’'\"*,]", "", s).upper()
        su = re.sub(r"\s+", " ", su).strip()
        # detect section headers
        is_header = False
        title = s
        if SECTION_RE.match(su) or SECTION_RE.match(s):
            is_header = True
            title = clean_title(s)
        elif (
            s.isupper()
            and 8 < len(s) < 70
            and not s.startswith("OCEAN")
            and re.search(r"[A-Z]{3,}", s)
            and not re.match(r"^\d+$", s)
        ):
            # careful: only known-ish section lines
            if any(
                k in su
                for k in (
                    "FOREWORD",
                    "MAXIMS",
                    "SOCRATES",
                    "REASON",
                    "REAL WORLD",
                    "MORALITY",
                    "ERRORS",
                    "IMPROVERS",
                    "GERMANS",
                    "RECONNAISSANCE",
                    "RAIDS",
                    "UNTIMELY",
                    "SKIRMISHES",
                    "ANCIENTS",
                    "HAMMER",
                )
            ):
                is_header = True
                title = clean_title(s).title()

        if is_header:
            fin_ch()
            key = re.sub(r"[‘’'\"*,]", "", title).upper()
            key = re.sub(r"\s+", " ", key).strip()
            t = CANON.get(key, title if not title.isupper() else title.title())
            cur_ch = {
                "number_label": t,
                "roman": str(len(parts[0]["chapters"]) + 1),
                "title": t,
                "paragraphs": [],
            }
            buf = []
            continue
        if cur_ch is None:
            continue
        buf.append(line)
    fin_ch()

    meta = {
        "title": "Twilight of the Idols",
        "author": "Friedrich Nietzsche",
        "dedication": "",
        "tagline": "How to Philosophize with a Hammer",
        "year": "1889",
        "theme": "twilight",
        "accent": "#c4a574",
        "blurb": "Idols sound hollow when struck — a swift, ruthless settling of accounts.",
    }
    return meta, parts


def parse_will_to_power() -> tuple[dict, list]:
    lines = load_raw("will_to_power.txt")
    # Find BOOK I EUROPEAN NIHILISM body
    start = 0
    for i, l in enumerate(lines):
        if re.match(r"^\s*BOOK I\s*$", l) and i > 500:
            start = i
            break
    # Include preface if nearby before BOOK I
    pref = start
    for i in range(max(0, start - 80), start):
        if lines[i].strip() == "Preface":
            pref = i
            break
    body = lines[pref:]
    # End before glossary/notes/index at end
    for i, l in enumerate(body):
        if i > 500 and re.match(r"^\s*(Notes|Index|Bibliography|Note on the Text and Translation)\s*$", l):
            body = body[:i]
            break

    BOOK_RE = re.compile(r"^\s*BOOK\s+([IVX]+)\s*$", re.I)
    PART_RE = re.compile(r"^\s*Part\s+(\d+)\.\s*(.+)$", re.I)

    parts = []
    cur_part = None
    cur_ch = None
    buf = []

    pending_part: str | None = None  # most recent "Part N. Title" header text

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = reflow(buf)
        cur_ch["paragraphs"] = paras
        if cur_part and paras:
            cur_part["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    def fin_part():
        nonlocal cur_part
        fin_ch()
        if cur_part and cur_part["chapters"]:
            parts.append(cur_part)
        cur_part = None

    book_titles = {
        "I": "European Nihilism",
        "II": "Critique of the Highest Values Hitherto",
        "III": "Principle of a New Determination of Values",
        "IV": "Discipline and Cultivation",
    }

    for line in body:
        s = line.strip()
        if s == "Preface" and cur_part is None:
            cur_part = {"roman": "0", "name": "Preface", "subtitle": "Preface", "chapters": []}
            cur_ch = {"number_label": "Preface", "roman": "1", "title": "Preface", "paragraphs": []}
            buf = []
            continue
        m = BOOK_RE.match(s)
        if m:
            fin_part()
            rom = m.group(1).upper()
            title = book_titles.get(rom, f"Book {rom}")
            cur_part = {"roman": rom, "name": f"Book {rom}", "subtitle": title, "chapters": []}
            continue
        m = PART_RE.match(s)
        if m and cur_part is not None:
            # Part headers ("Part 1. Nihilism") are navigation, not chapters:
            # close any open chapter and remember the Part title for the next section.
            fin_ch()
            pending_part = (m.group(1), m.group(2).strip())
            buf = []
            continue
        # numbered sections like "1. Nihilism as..."
        m2 = re.match(r"^(\d+)\.\s+([A-Z].{5,80})$", s)
        if m2 and cur_part is not None and len(s) < 100:
            fin_ch()
            if pending_part:
                cur_ch = {
                    "number_label": f"Part {pending_part[0]} · {m2.group(1)}",
                    "roman": m2.group(1),
                    "title": f"{pending_part[1]} — {m2.group(2).strip()}",
                    "paragraphs": [],
                }
                pending_part = None
            else:
                cur_ch = {
                    "number_label": m2.group(1),
                    "roman": m2.group(1),
                    "title": m2.group(2).strip(),
                    "paragraphs": [],
                }
            buf = []
            continue
        if cur_ch is None and cur_part is not None:
            cur_ch = {
                "number_label": "1",
                "roman": "1",
                "title": cur_part["subtitle"],
                "paragraphs": [],
            }
            buf = []
        if cur_ch is not None:
            buf.append(line)
    fin_part()
    meta = {
        "title": "The Will to Power",
        "author": "Friedrich Nietzsche",
        "dedication": "",
        "tagline": "Selections from the Notebooks of the 1880s",
        "year": "1901 (posthumous)",
        "theme": "will-to-power",
        "accent": "#e11d48",
        "blurb": "Nihilism at the door — and the attempt at a revaluation of all values.",
    }
    return meta, parts


class _HtmlBlocks(HTMLParser):
    """Minimal block extractor for EPUB XHTML."""

    def __init__(self) -> None:
        super().__init__()
        self.blocks: list[tuple[str, str]] = []
        self._buf: list[str] = []
        self._skip = 0
        self.cur_tag: str | None = None

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self._skip += 1
            return
        if self._skip:
            return
        if tag in ("p", "h1", "h2", "h3", "h4", "li", "blockquote"):
            if self._buf and self.cur_tag:
                text = re.sub(r"\s+", " ", "".join(self._buf)).strip()
                if text:
                    self.blocks.append((self.cur_tag, text))
                self._buf = []
            self.cur_tag = tag
        if tag == "br":
            self._buf.append(" ")

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self._skip = max(0, self._skip - 1)
            return
        if self._skip:
            return
        if tag in ("p", "h1", "h2", "h3", "h4", "li", "blockquote") and self.cur_tag:
            text = re.sub(r"\s+", " ", "".join(self._buf)).strip()
            if text:
                self.blocks.append((tag, text))
            self._buf = []
            self.cur_tag = None

    def handle_data(self, data):
        if not self._skip:
            self._buf.append(data)


def _parse_gay_science_from_cache() -> tuple[dict, list]:
    """Fallback when the EPUB is absent: split the cached plain-text extract
    (raw_extract/gay_science_cambridge_epub.txt) into aphorism-level chapters.
    Cache format: '=== <Section> ===' headers with blank-line-separated blocks;
    each aphorism/poem starts on its own line matching ^N. <text>."""
    cache = RAW / "gay_science_cambridge_epub.txt"
    if not cache.exists():
        raise FileNotFoundError(
            "Gay Science EPUB not found (expected Nietzsche_ The Gay Science*.epub) "
            "and no fallback cache at raw_extract/gay_science_cambridge_epub.txt"
        )
    text = cache.read_text(encoding="utf-8", errors="replace")
    chunks = re.split(r"^=== (.+?) ===\s*$", text, flags=re.M)
    bodies: dict[str, list[str]] = {}
    for i in range(1, len(chunks), 2):
        bodies[chunks[i].strip()] = chunks[i + 1].splitlines()

    start_re = re.compile(r"^(\d+)\.\s+(.+)$")

    def dedupe(chapters: list[dict]) -> None:
        seen: dict[str, int] = {}
        for ch in chapters:
            seen[ch["title"]] = seen.get(ch["title"], 0) + 1
            if seen[ch["title"]] > 1:
                ch["title"] = f"{ch['title']} ({seen[ch['title']]})"

    def aphorism_title(num: str, rest: str) -> str:
        head = " ".join(rest.split()[:8])
        dash = head.find(" – ")
        if dash != -1:
            head = head[:dash]
        else:
            dot = head.find(".")
            if dot != -1:
                head = head[: dot + 1]
        if len(head) > 60:
            head = head[:60].rstrip()
        return f"{num}. {head}"

    def split_numbered(lines: list[str], title_fn) -> list[dict]:
        idx = [k for k, ln in enumerate(lines) if start_re.match(ln.strip())]
        chapters: list[dict] = []
        seen_nums: dict[str, int] = {}
        for j, k in enumerate(idx):
            m = start_re.match(lines[k].strip())
            assert m is not None
            num = m.group(1)
            rest = m.group(2).strip()
            seen_nums[num] = seen_nums.get(num, 0) + 1
            # The Prelude numbers two poems '41.'; label the second '41a'.
            tag = f"{num}a" if seen_nums[num] > 1 else num
            end = idx[j + 1] if j + 1 < len(idx) else len(lines)
            extra = [ln.strip() for ln in lines[k + 1 : end] if ln.strip()]
            paras = [lines[k].strip(), *extra] if extra else [lines[k].strip()]
            chapters.append(
                {
                    "number_label": f"§ {tag}",
                    "roman": tag,
                    "title": title_fn(tag, rest),
                    "paragraphs": paras,
                }
            )
        dedupe(chapters)
        return chapters

    def single(header: str, title: str) -> list[dict]:
        paras = [ln.strip() for ln in bodies[header] if ln.strip()]
        return [
            {
                "number_label": title,
                "roman": "1",
                "title": title,
                "paragraphs": paras,
            }
        ]

    spec = [
        ("I", "Preface", "Preface to the Second Edition",
         single("Preface to the Second Edition", "Preface to the Second Edition")),
        ("II", "Prelude", "Joke, Cunning, and Revenge",
         split_numbered(
             bodies["Joke, Cunning, and Revenge: Prelude in German Rhymes"],
             lambda tag, rest: f"{tag}. {rest}",
         )),
        ("III", "Book One", "Book One",
         split_numbered(bodies["Book One"], aphorism_title)),
        ("IV", "Book Two", "Book Two",
         split_numbered(bodies["Book Two"], aphorism_title)),
        ("V", "Book Three", "Book Three",
         split_numbered(bodies["Book Three"], aphorism_title)),
        ("VI", "Book Four", "Book Four: St Januarius",
         split_numbered(bodies["Book Four: St Januarius"], aphorism_title)),
        ("VII", "Book Five", "Book Five: We Fearless Ones",
         split_numbered(bodies["Book Five: We Fearless Ones"], aphorism_title)),
        ("VIII", "Appendix", "Songs of Prince Vogelfrei",
         single("Appendix: Songs of Prince Vogelfrei",
                "Appendix: Songs of Prince Vogelfrei")),
    ]
    parts = [
        {"roman": rom, "name": name, "subtitle": sub, "chapters": chs}
        for rom, name, sub, chs in spec
    ]
    meta = {
        "title": "The Gay Science",
        "author": "Friedrich Nietzsche",
        "dedication": "",
        "tagline": "With a Prelude in Rhymes and an Appendix of Songs",
        "year": "1882 / 1887",
        "theme": "gay-science",
        "accent": "#38bdf8",
        "blurb": "Laughter, style, and the death of God — science as a joyful, dangerous art.",
        "source": "Cambridge Texts in the History of Philosophy (EPUB)",
    }
    return meta, parts

def parse_gay_science() -> tuple[dict, list]:
    """Cambridge Texts EPUB (preferred) — not the scanned PDF."""
    epubs = list(ROOT.glob("Nietzsche_ The Gay Science*.epub")) + list(
        ROOT.glob("*Gay*Science*.epub")
    )
    if not epubs:
        return _parse_gay_science_from_cache()
    epub_path = epubs[0]

    def is_footnote(text: str) -> bool:
        t = text.strip()
        if re.match(r"^\d+\.\s", t):  # poem / list title
            return False
        if re.match(r"^\d+\s+\S", t):  # "33 Reported in Plutarch…"
            return True
        if t.startswith("*") and len(t) < 500:
            return True
        return False

    def is_header(text: str) -> bool:
        t = text.strip()
        return t == "The Gay Science" or (
            t.startswith("The Gay Science") and len(t) < 90
        )

    def file_blocks(root: Path, rel: str) -> list[tuple[str, str]]:
        path = root / rel
        if not path.exists():
            return []
        p = _HtmlBlocks()
        p.feed(path.read_text(encoding="utf-8", errors="replace"))
        return p.blocks

    def to_paras(blocks: list[tuple[str, str]]) -> list[str]:
        paras: list[str] = []
        pending: str | None = None
        for tag, text in blocks:
            if is_header(text) or tag in ("h1", "h2"):
                continue
            if tag == "h3":
                if re.fullmatch(r"\d+", text.strip()):
                    pending = text.strip()
                    continue
                if not is_footnote(text):
                    paras.append(text.strip())
                pending = None
                continue
            if is_footnote(text):
                pending = None
                continue
            t = text.strip()
            if not t:
                continue
            if pending:
                if not re.match(r"^\d+\.\s", t):
                    t = f"{pending}. {t}"
                pending = None
            paras.append(t)
        while paras and is_footnote(paras[-1]):
            paras.pop()
        return paras

    sections = [
        (
            ["text/part0009_split_000.html", "text/part0009_split_001.html"],
            ("I", "Preface", "Preface to the Second Edition"),
            "Preface to the Second Edition",
        ),
        (
            ["text/part0010.html"],
            ("II", "Prelude", "Joke, Cunning, and Revenge"),
            "Joke, Cunning, and Revenge: Prelude in German Rhymes",
        ),
        (
            ["text/part0011_split_000.html", "text/part0011_split_001.html"],
            ("III", "Book One", "Book One"),
            "Book One",
        ),
        (
            ["text/part0012_split_000.html", "text/part0012_split_001.html"],
            ("IV", "Book Two", "Book Two"),
            "Book Two",
        ),
        (
            ["text/part0013_split_000.html", "text/part0013_split_001.html"],
            ("V", "Book Three", "Book Three"),
            "Book Three",
        ),
        (
            ["text/part0014_split_000.html", "text/part0014_split_001.html"],
            ("VI", "Book Four", "Book Four: St Januarius"),
            "Book Four: St Januarius",
        ),
        (
            ["text/part0015_split_000.html", "text/part0015_split_001.html"],
            ("VII", "Book Five", "Book Five: We Fearless Ones"),
            "Book Five: We Fearless Ones",
        ),
        (
            ["text/part0016_split_000.html", "text/part0016_split_001.html"],
            ("VIII", "Appendix", "Songs of Prince Vogelfrei"),
            "Appendix: Songs of Prince Vogelfrei",
        ),
    ]

    parts: list[dict] = []
    with tempfile.TemporaryDirectory(prefix="gay_epub_") as td:
        tdir = Path(td)
        with zipfile.ZipFile(epub_path, "r") as zf:
            zf.extractall(tdir)
        for files, (rom, name, subtitle), chapter in sections:
            blocks: list[tuple[str, str]] = []
            for f in files:
                blocks.extend(file_blocks(tdir, f))
            paras = to_paras(blocks)
            parts.append(
                {
                    "roman": rom,
                    "name": name,
                    "subtitle": subtitle,
                    "chapters": [
                        {
                            "number_label": chapter,
                            "roman": "1",
                            "title": chapter,
                            "paragraphs": paras,
                        }
                    ],
                }
            )

    # Cache plain text for debugging
    plain = []
    for p in parts:
        for ch in p["chapters"]:
            plain.append(f"\n\n=== {ch['title']} ===\n\n")
            plain.extend(x + "\n\n" for x in ch["paragraphs"])
    (RAW / "gay_science_cambridge_epub.txt").write_text("".join(plain), encoding="utf-8")
    # Drop obsolete PDF extract if present
    old = RAW / "gay_science_nietzsche.txt"
    if old.exists():
        old.unlink()

    meta = {
        "title": "The Gay Science",
        "author": "Friedrich Nietzsche",
        "dedication": "",
        "tagline": "With a Prelude in Rhymes and an Appendix of Songs",
        "year": "1882 / 1887",
        "theme": "gay-science",
        "accent": "#38bdf8",
        "blurb": "Laughter, style, and the death of God — science as a joyful, dangerous art.",
        "source": "Cambridge Texts in the History of Philosophy (EPUB)",
    }
    return meta, parts


def parse_being_and_time() -> tuple[dict, list]:
    lines = load_raw("heidegger_being_and_time.txt")
    # Start at first § 1 in body (line ~614)
    start = 0
    for i, l in enumerate(lines):
        if re.match(r"^§\s*1\b", l.strip()) and i > 500:
            start = i
            break
    body = lines[start:]
    # End before endnotes / glossary if any
    for i, l in enumerate(body):
        if i > 1000 and re.match(r"^(Lexicon|Index|Notes|Bibliography)\s*$", l.strip()):
            body = body[:i]
            break

    SECTION_RE = re.compile(r"^§\s*(\d+)\.?\s*(.*)$")
    OCR_RE = re.compile(r"^§\s*(IT|17)\b\s*(.*)$")
    DIV_RE = re.compile(r"^(DIVISION\s+(ONE|TWO)|INTRODUCTION|PART\s+ONE)\s*$", re.I)
    # Title ends mid-phrase (preposition/article/comma/adjective/participle) ->
    # the next line(s) are wrapped title continuations. Requires whitespace
    # before the word so hyphenated ends like "Being-in" do not match.
    TRUNC_END = re.compile(
        r"(,|\s(for|an|in|of|and|the|a|to|as|on|at|with|from|toward|towards"
        r"|possible|primordial|vulgar|determining|interpreting))\s*$", re.I)
    CONT_SHORT = 35

    PART_INFO = [
        ("Introduction", "The Question of Being"),
        ("Division One", "The Preparatory Fundamental Analysis of Dasein"),
        ("Division Two", "Dasein and Temporality"),
    ]

    parts = []
    by_idx = {}
    cur_part = None
    cur_ch = None
    buf = []

    def target_part(num: int):
        idx = 0 if num <= 8 else (1 if num <= 44 else 2)
        if idx not in by_idx:
            name, sub = PART_INFO[idx]
            by_idx[idx] = {
                "roman": str(idx + 1),
                "name": name,
                "subtitle": sub,
                "chapters": [],
            }
            parts.append(by_idx[idx])
        return by_idx[idx]

    def scrub_title(t: str) -> str:
        t = re.sub(r"\s+\d+\s*$", "", t)
        t = re.sub(r"[\d*±†]+\s*$", "", t)
        # footnote markers attached mid-title (e.g. "Foundations* of ...")
        t = re.sub(r"([A-Za-z)])[\*±†]+", r"\1", t)
        t = t.replace("Seood", "Selfhood")
        t = t.replace("Hemeneutical", "Hermeneutical")
        t = t.replace("hemeneutical", "hermeneutical")
        return t.strip()

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = reflow(buf, fill_width=70)
        cur_ch["paragraphs"] = paras
        if cur_part:
            cur_part["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    i = 0
    n = len(body)
    while i < n:
        line = body[i]
        s = line.strip()
        if DIV_RE.match(s):
            i += 1
            continue
        m = SECTION_RE.match(s)
        num = None
        title = None
        if m:
            num = m.group(1)
            title = m.group(2).strip() or f"§ {num}"
        else:
            om = OCR_RE.match(s)
            if om and "Reference [Verweisung] and Signs [Zeichen]" in om.group(2):
                num = "17"
                title = "Reference and Signs"
        if num is not None:
            # join up to 2 wrapped title continuation lines
            j = i + 1
            for _ in range(2):
                k = j
                while k < n and not body[k].strip():
                    k += 1
                if k >= n:
                    break
                cand = body[k].strip()
                if SECTION_RE.match(cand) or OCR_RE.match(cand) or DIV_RE.match(cand):
                    break
                if (
                    TRUNC_END.search(title)
                    or cand[:1].islower()
                    or (len(cand) <= CONT_SHORT and re.match(r"^[A-Z\"'(]", cand)
                        and not cand.endswith("."))
                ):
                    cand = re.sub(r"\s+\d+\s*$", "", cand)
                    title = (title + " " + cand).strip()
                    j = k + 1
                else:
                    break
            i = j
            title = scrub_title(title)
            if not title:
                title = f"§ {num}"
            fin_ch()
            cur_part = target_part(int(num))
            cur_ch = {
                "number_label": f"§ {num}",
                "roman": num,
                "title": title,
                "paragraphs": [],
            }
            buf = []
            continue
        if cur_ch is not None:
            buf.append(line)
        i += 1
    fin_ch()
    parts = [p for p in parts if p["chapters"]]

    meta = {
        "title": "Being and Time",
        "author": "Martin Heidegger",
        "dedication": "",
        "tagline": "The Exposition of the Question of the Meaning of Being",
        "year": "1927",
        "theme": "being-and-time",
        "accent": "#4ade80",
        "blurb": "Dasein, care, and time — the question of Being reopened.",
    }
    return meta, parts


def _ij_scrub(s: str) -> str:
    return s.replace("\u00ad", "").replace("\ufeff", "").replace("\x0c", "").strip()


def _ij_up_ratio(s: str) -> float:
    letters = [c for c in s if c.isalpha()]
    if not letters:
        return 0.0
    return sum(1 for c in letters if c.isupper()) / len(letters)


def _ij_is_caps_line(s: str, lim: int = 110) -> bool:
    s = _ij_scrub(s)
    return bool(s) and len(s) <= lim and _ij_up_ratio(s) > 0.7


def _ij_indented(s: str) -> bool:
    """True if a raw line carries print paragraph-indent (layout extraction)."""
    t = s.replace("\u00ad", "").replace("\ufeff", "").replace("\x0c", "")
    return bool(t.strip()) and (len(t) - len(t.lstrip())) >= 3


def _ij_reflow(lines: list[str]) -> list[str]:
    """IJ-only reflow for pdftotext-layout source (keeps indent + blanks).

    The layout extraction preserves the print edition's two paragraph cues:
    leading indent and blank lines. Single blanks are page breaks as often
    as paragraph breaks, so a blank only splits when the previous text ends
    a sentence; anything else is a wrap and gets glued. Without a blank,
    an indented line (dialogue turn, list item) or a short completed line
    followed by a new sentence starts a paragraph; wrapped lines join
    (hyphen wraps without the space).
    """
    items: list[tuple[str, bool, bool, bool]] = []  # (text, ind, blank, bbl)
    prev_blank = True
    prevprev_blank = True
    for raw in lines:
        t = _ij_scrub(raw)
        if not t:
            prevprev_blank = prev_blank
            prev_blank = True
            continue
        if is_junk(t):
            continue
        items.append((t, _ij_indented(raw), prev_blank, prevprev_blank))
        prevprev_blank = False
        prev_blank = False

    paragraphs: list[str] = []
    buf: list[str] = []

    def flush() -> None:
        if not buf:
            return
        result = buf[0]
        for p in buf[1:]:
            if result.endswith("-") and not result.endswith("—") and not result.endswith("--"):
                result = result + p
            else:
                result = result + " " + p
        result = re.sub(r"[ \t]+", " ", result).strip()
        if result and not re.fullmatch(r"[\d\W]+", result):
            paragraphs.append(result)
        buf.clear()

    prev = ""
    for t, ind, bb, bbl in items:
        note_head = bool(_IJ_NOTE_RE.match(t))
        sub_head = bool(_IJ_SUBNOTE_RE.match(t))
        if not buf:
            buf = [t]
            prev = t
            continue
        if bb:
            # Blank line: real break (double blank, indent, finished
            # sentence, display head going into prose, or a note /
            # lettered-sub-note head starting a new entry) vs page-break
            # wrap mid-sentence.
            if (
                bbl
                or ind
                or SENT_END.search(prev)
                or note_head
                or sub_head
                or (
                    not _ij_is_caps_line(t)
                    and len(prev) < 60
                    and _ij_up_ratio(prev) > 0.5
                )
            ):
                flush()
                buf = [t]
                prev = t
            else:
                buf.append(t)
                prev = t
            continue
        if ind:
            if buf and not SENT_END.search(prev) and not _ij_is_caps_line(t):
                buf.append(t)  # indented wrap of an unfinished line (speech, list)
                prev = t
                continue
            if buf and t[:1].islower() and not _ij_is_caps_line(t):
                buf.append(t)  # wrapped continuation (lowercase can never open
                prev = t      # a print paragraph; cf. 'intra-O.N.A.N. / interdependence.')
                continue
            if _ij_is_caps_line(t) and not SENT_END.search(prev):
                buf.append(t)  # centered display continuation (deck, list head)
                prev = t
                continue
            flush()
            buf = [t]
            prev = t
            continue
        if note_head or sub_head:
            flush()  # endnote / lettered-sub-note head (heads are unique line
            buf = [t]  # starts in this source: never a mid-sentence wrap)
            prev = t
            continue
        if t[:1] in "'\"‘“" and SENT_END.search(prev) and len(prev) < 70:
            flush()  # dialogue turn
            buf = [t]
            prev = t
            continue
        if SENT_END.search(prev) and t[:1].isupper() and len(prev) < 65:
            flush()  # short completed line, new sentence
            buf = [t]
            prev = t
            continue
        buf.append(t)
        prev = t
    flush()
    return paragraphs


_IJ_NOTE_RE = re.compile(r"^\d{1,3}\.\s")
_IJ_SUBNOTE_RE = re.compile(r"^[a-uw-z]\.\s")

# Body→endnote callouts, curated from the source PDF (TextCurator audit
# 2026-10-15): (0-based para index, verbatim match incl. the printed
# callout number, note number). Only callouts verified against the PDF's
# own extracted digits are listed; ambiguous measures/dates are excluded.
# Coverage: 299 of 388 notes. Validated at build: every entry must match
# its paragraph exactly once, else the build fails loudly.
_IJ_NOTE_REFS: dict[str, list[tuple[int, str, int]]] = {
    "p1c2": [
        (3, "methamphetamine hydrochloride 1 is what", 1),
    ],
    "p1c8": [
        (16, "out of. 2 In the", 2),
    ],
    "p1c9": [
        (10, "its stomach. 3 Two sets", 3),
        (10, "various prorectors’ 4 private rooms.", 4),
        (14, "low-volt methedrine 5 before matches", 5),
        (14, "Ave. nightspot 7 or beers", 7),
        (16, "multiple vectors. 10 And since", 10),
        (18, "playing Narjees 11 and all", 11),
    ],
    "p1c10": [
        (1, "trusted associate 13 paid a", 13),
        (1, "his hat 14 and reconstructed", 14),
        (1, "at A.T.F. 15 and his", 15),
        (5, "of NyQuil 17 and a", 17),
        (5, "is piled 18 just off", 18),
        (5, "a ‘P.I.T.,’ 19 in French,", 19),
    ],
    "p1c11": [
        (0, "paranoid king 21 that you", 21),
    ],
    "p1c12": [
        (0, "prestigious O.N.R. 23 financed his", 23),
    ],
    "p1c13": [
        (11, "of the 16 and Unders", 16),
        (11, "then enkephaline 26 after, which", 26),
        (11, "Bob Hope 27 until fifteen,", 27),
    ],
    "p1c14": [
        (9, "an MAOI 28 will kill", 28),
        (23, "20 x 25 glossy of", 25),
        (52, "me ECT 29 again, or", 29),
        (72, "up Collyrium 30 by the", 30),
        (87, "these Lebensgefährtins 31 and prorectors", 31),
        (102, "NEFAS EST 32—and had replaced", 32),
        (104, "‘Extra-Linear Dynamics.’ 34 And Schtitt,", 34),
        (104, "a Cantorian 35 continuum of", 35),
        (109, "Lonely. Verstiegenheit.’ 36 ‘Bless you.’", 36),
    ],
    "p1c16": [
        (2, "de rollent 37 on a", 37),
        (2, "‘Bröckengespenst’ phenomenon 38 enlarged and", 38),
        (6, "M. Fortier 39 had wished", 39),
        (8, "to B.S.S. 40—once this decision,", 40),
        (41, "he ‘doubled’ 41 for Québec", 41),
    ],
    "p1c17": [
        (162, "his legs. 45 He attempted", 45),
    ],
    "p1c20": [
        (4, "ventricular restenosis. 48 He thought:", 48),
    ],
    "p1c22": [
        (30, "Recovery House 49 was founded", 49),
        (33, "Boston galoots. 50 He sometimes,", 50),
        (36, "Or Mobile, 51 the nameless", 51),
    ],
    "p1c27": [
        (17, "American GC/MS 52 urine scan.", 52),
        (28, "finest Eschatonic 53 marksman off", 53),
        (29, "required Grammars 54 and Soma", 54),
    ],
    "p1c29": [
        (1, "or Cylert 56; DMZ resembling", 56),
        (1, "head) altered. 57 The incredibly", 57),
    ],
    "p1c31": [
        (2, "me Percocet 59 at the", 59),
    ],
    "p1c32": [
        (25, "‘aesthetically challenged.’ 62 She sometimes", 62),
        (25, "anything else. 63 The student", 63),
        (28, "the HmH 65 with C.T.", 65),
        (31, "terribly obscure 66 but often", 66),
        (50, "The Shed. 67 It is,", 67),
    ],
    "p1c33": [
        (0, "Viking’) Freer 68 and the", 68),
        (41, "help you. 69 That, pace", 69),
        (44, "linty mitten. 70 That you", 70),
        (66, "or amended. 71 Felonies are", 71),
        (71, "his arms. 72 McDade also", 72),
        (129, "a luminescence. 76 Halation, Axford", 76),
        (130, "like that. 77 Mario will", 77),
    ],
    "p1c35": [
        (2, "a note. 79 Her mental", 79),
    ],
    "p1c36": [
        (39, "film-theory monograph. 81 Joelle can", 81),
        (46, "part of 75 hectares of", 75),
    ],
    "p1c37": [
        (0, "of bedding 82 as Hal", 82),
        (172, "‘The B.P.D. 83 field pathologist", 83),
    ],
    "p1c38": [
        (4, "an Independent 85 down in", 85),
        (6, "during breaks. 86 His serve", 86),
        (8, "the title. 87 On 1,", 87),
        (32, "Free List 88 but gets", 88),
        (48, "at all. 89 Schacht does", 89),
        (65, "their butthole. 91 The unscreening", 91),
        (91, "doubles partner 92 came all", 92),
        (93, "awful time. 93 E.T.A. tries", 93),
        (93, "of prorectors 94 in exchange", 94),
        (97, "sports-budget marginality. 97 Orin signed", 97),
        (97, "the Academy 98 in a", 98),
        (105, "his life: 100 i.e. almost", 100),
        (115, "blows up.’ 101 Orin in", 101),
    ],
    "p1c39": [
        (1, "the I.B.P.W.D.W. 102 Local #4", 102),
        (9, "a seizure. 103 The floor", 103),
    ],
    "p1c41": [
        (6, "volume down; 106 the kind", 106),
        (7, "last broadcast. 108 Troeltsch, who", 108),
        (14, "Levesque-Parti-and-Bloc Québecois 109 and early", 109),
        (16, "terrorist cell 112 that apparently", 112),
        (25, "same material. 113 He was", 113),
        (25, "From Glad 114 in sandwich-bag", 114),
        (26, "Volkmann’s contracture 115 curled out", 115),
        (30, "oversized face 117 like a", 117),
        (32, "his job. 118 Plus of", 118),
        (33, "saurian homodontic 119 Mario floats,", 119),
    ],
    "p1c43": [
        (0, "even knew 120—maybe a dozen", 120),
        (2, "the World. 122 Practical distribution", 122),
        (2, "elegant EndStat 124 stats-cruncher software", 124),
        (4, "for drill-balls 125—there can be", 125),
        (6, "their knee. 126 Then two", 126),
        (6, "AMNAT’s wattle-chinned 127 president on", 127),
        (13, "Eschaton MVL 128 for the", 128),
        (17, "fall off. 129 ‘It’s snowing", 129),
        (45, "of Eschaton. 130 Players themselves", 130),
    ],
    "p1c44": [
        (0, "and hope.’ 131 And the", 131),
        (0, "Boston Group. 132 Every night", 132),
        (2, "Truman Capote 133 except this", 133),
        (5, "seen there. 134 The residents’", 134),
        (12, "in yourself; 135 and now", 135),
        (13, "phentermine-hydrochloride bottle 136 and stop", 136),
        (19, "The Spider. 139 You have", 139),
        (21, "banally trite. 140 In the", 140),
        (33, "other blacks. 141 The Diehl", 141),
        (44, "limbic system 142 to leg", 142),
    ],
    "p1c45": [
        (2, "you along. 144 Mario and", 144),
        (2, "Found Drama 145 and anticonfluentialism", 145),
    ],
    "p1c46": [
        (0, "festive fiat 147 everybody gets", 147),
        (0, "etc. etc. 148—and Mario, as", 148),
        (4, "‘Live Silence,’ 149 the total", 149),
        (4, "our terrible 151 internal troubles.", 151),
        (28, "knowledge learned. 152 The thing", 152),
        (35, "and can-do. 153 Ten-year-old Kent", 153),
        (36, "plus over 150 very fit", 150),
        (58, "of eyeballs. 154 But this", 154),
        (59, "cream-complected backs 155 to the", 155),
        (89, "convince you 156 to authorize", 156),
        (108, "or scenaria? 157 Marty’s on-task", 157),
        (145, "blue blazer 158 sits in", 158),
        (146, "left temple; 159 and his", 159),
        (146, "Eric Clipperton 160—from the preponderance", 160),
        (147, "remotely filmic 161 was a", 161),
        (149, "mild one. 162 The ads", 162),
        (151, "Fortune 500. 163 Stylistically reminiscent", 163),
        (158, "wide for. 164 And so", 164),
        (161, "down markedly; 165 and then", 165),
        (161, "InterLace-designed R.I.S.C. 166-grade High-Def-screen PCs", 166),
        (161, "even more. 167 But there", 167),
    ],
    "p1c47": [
        (4, "cult-fronted 3-amino-8-hydroxytetralin 169-import ring in", 169),
        (40, "la pression’: 170 ‘The little", 170),
        (66, "à Servir.’ 171 ‘What is", 171),
        (69, "le bonheur,” 172 then, who", 172),
        (85, "marriageable age; 173 Marathe had", 173),
        (89, "de bonk.” 174 But this", 174),
        (108, "the other. 175 And so", 175),
        (119, "and digressive. 176 Plus there’s", 176),
        (132, "of O.N.A.N. 177 has been", 177),
    ],
    "p1c48": [
        (10, "turns out. 178 It starts", 178),
        (18, "to Meetings 179 for a", 179),
    ],
    "p1c49": [
        (0, "to agitate. 180 Now WYYY", 180),
    ],
    "p1c50": [
        (14, "time listening. 181 The whole", 181),
        (14, "conditioning drills. 182 First are", 182),
        (14, "janitorial bucket 183 placed in", 183),
        (15, "like Side-to-Sides 184 that Hal", 184),
        (16, "his aunts. 185 But anyway", 185),
        (17, "up balls. 186 It is", 186),
        (47, "of Demerol 189 in a", 189),
        (48, "botched burglary 190 had been", 190),
        (50, "to end. 192 Gately said", 192),
        (51, "of semi-claw 194 and the", 194),
        (53, "against it. 195 White Flagger", 195),
        (53, "all used 196—F.F. had taken", 196),
        (55, "an hour. 197 None but", 197),
    ],
    "p1c51": [
        (33, "U.S.A.’s MK-Ultra.’ 198 Steeply elected", 198),
        (74, "the Xanax 199; she has", 199),
        (76, "but stay. 200 Nobody that", 200),
        (76, "floors’ windows 201 ever goes", 201),
        (81, "‘Antitoi Entertainent’ 203 on the", 203),
        (82, "as well. 204 Flanking another", 204),
        (82, "Lucien’s disgust. 205 Through the", 205),
        (82, "truly squeak. 206 But Lucien", 206),
        (89, "form words. 207 Words that", 207),
    ],
    "p1c53": [
        (0, "I remember 208 I was", 208),
    ],
    "p1c54": [
        (3, "the walls; 209 the chassis", 209),
        (5, "waiting room. 210 Though it’s", 210),
        (8, "or worse. 211 Avril is", 211),
        (13, "his Buddies. 212 The only", 212),
        (13, "go astray. 213 Pemulis has", 213),
        (29, "& Whack 214 are known", 214),
        (29, "and police 215 alike as", 215),
        (32, "‘Coatlicue Complex.’ 216 Hal’s maternal", 216),
        (38, "is receding. 218 This weird", 218),
        (40, "Mr. Bouncety-Bounce 219 no-pierce earring", 219),
        (99, "play Slobodan 221 and Hartigan", 221),
    ],
    "p1c55": [
        (9, "despite language. 222 The A.F.R.", 222),
    ],
    "p1c56": [
        (105, "scanning for. 224 He moves", 224),
        (108, "of Hefty 225 bags that", 225),
        (113, "Hefty SteelSak 226 trashbags, fiber-reinforced", 226),
        (115, "of Haldol 227 and tapioca,", 227),
    ],
    "p1c57": [
        (0, "no N.S.A. 228 as such.", 228),
        (1, "Activities’ Agency’s 229 special province.", 229),
    ],
    "p1c59": [
        (1, "five mitts 230 away pointing", 230),
        (3, "with Inositol. 231 Or if", 231),
        (7, "Bing’s hydrolysis 232 will have,", 232),
    ],
    "p1c60": [
        (48, "inappropriateness of 234—that, as he", 234),
        (76, "player’s VAPS 236 in more", 236),
        (127, "right triangle. 237 You’ve got", 237),
        (185, "Mauna Loa-brand 240 macadamia nuts,", 240),
        (190, "Bioavailable Five 241 in the", 241),
        (200, "Avril’s worry. 243 He’ll sometimes", 243),
        (200, "yellow lamplight 244 and he", 244),
        (274, "from Footprints 246 around 2315", 246),
        (274, "House Restriction 247 in such", 247),
        (274, "clinic’s closed 248 have to", 248),
        (279, "his car. 251 The 2-Man", 251),
        (279, "everybody else. 252 The street", 252),
        (302, "walks briskly 254 in Green’s", 254),
        (306, "Erdedy notes. 256 She gets", 256),
        (404, "Tine Jr. 257 and Hugh", 257),
        (404, "Hugh Steeply 258 all sit", 258),
    ],
    "p1c61": [
        (5, "the squeegees 259 taken down", 259),
        (17, "obvious person. 260 The line", 260),
        (48, "the W.T.A. 262 Show’ll probably", 262),
    ],
    "p1c62": [
        (51, "of recircling 264 of newspapers.’", 264),
    ],
    "p1c64": [
        (5, "ten-level R.A.S.U. 265 from the", 265),
        (99, "Q (Q), Q, Q. 269", 269),
        (101, "Glad Handle-Tie 270 trashbags and", 270),
        (103, "are uninjured 271 and not", 271),
        (105, "Club’s charter. 272 With the", 272),
        (252, "other out,’ 275 Poutrincourt said", 275),
        (261, "are doomed 276 if you", 276),
    ],
    "p1c66": [
        (6, "bow-tie askew. 279 The bureaucrat", 279),
    ],
    "p1c67": [
        (7, "called anhedonia 280 or simple", 280),
        (11, "mask, anhedonia. 281 The American", 281),
    ],
    "p1c68": [
        (3, "the Clonidine 285 it received", 285),
        (3, "speculate about. 286 The father", 286),
        (40, "of TCBY 288 toward Longley", 288),
        (42, "going on. 289 Jennie Bash", 289),
        (44, "stelliform coiffure. 290 But so", 290),
        (46, "fearful sentiment 292 of Don", 292),
        (49, "other Holmeses 293 in Riveting", 293),
        (50, "sang, Jim. 294 The man’s", 294),
        (58, "potassium thiocyanate 296 later, the", 296),
        (59, "asks for. 298 On-screen, we’re", 298),
        (68, "weather-bleached GIGABUCKS 299 ticket on", 299),
    ],
    "p1c70": [
        (1, "young burglar 300 whose electrical-surge-tolerance", 300),
        (4, "Master cartridge. 301 Unlike the", 301),
        (4, "fatal pleasures. 302 Fortier bid", 302),
    ],
    "p1c71": [
        (5, "was Read-Only. 303 Philosophical, Fortier", 303),
        (46, "Prochain Train. 304 The pallor", 304),
        (92, "to say. 306 ‘The Medusa", 306),
        (94, "male-female way. 307 The first", 307),
        (99, "in Brookline 309 betrayed nothing", 309),
        (99, "in F&C 310—Jim’d told her", 310),
        (138, "and Y.E.T.s 312 and owning", 312),
        (146, "son coeur,’ 314 and it", 314),
        (169, "she’s living 315 staff. We’ve", 315),
    ],
    "p1c72": [
        (9, "Someone in 311 is yelling", 311),
        (57, "all parties. 316 If you", 316),
        (75, "U.S.A. flag. 318 ‘I had", 318),
        (83, "Many Wonders. 319 Turkey cartilage.", 319),
        (218, "the Hayden 320 that wouldn’t", 320),
        (437, "and functional. 321 It seems", 321),
    ],
    "p1c73": [
        (2, "of police 322 that wore", 322),
        (3, "Ennet House 323 was nearby,", 323),
        (5, "G.’) Tine 325 really do", 325),
        (5, "she knew: 326 —Molly Notkin", 326),
        (5, "her naked. 329 —Molly Notkin", 329),
        (18, "and anti-Picaresque 331 narrative stasis—or", 331),
        (29, "Recovery Options 333 booklet the", 333),
        (29, "All Hope. 334 It wasn’t", 334),
        (77, "wore off. 335 The Kevin", 335),
        (77, "wild time 336 had been", 336),
        (123, "prescribed Toradol-IM 338 but had", 338),
        (124, "the I.B.E.W. 339 account under", 339),
        (127, "with Doryx. 340 ‘I don’t", 340),
        (132, "maybe Percoset 341 or maybe", 341),
        (144, "the babble 342 of crowds", 342),
        (148, "it White-Knuckle? 343 Did you", 343),
    ],
    "p1c75": [
        (2, "and A.P.s 344 were three", 344),
        (2, "the C.B.S. 345 auditorium at", 345),
        (9, "from M.I.A.-D’Orval 346 was keenly", 346),
        (13, "of perfume. 347 To amuse", 347),
        (16, "St. Columbkill’s 348 Meeting, where", 348),
        (17, "the niggers 349 that sold", 349),
        (46, "or something. 350 So the", 350),
        (47, "called 13th-Stepping 351 and is", 351),
    ],
    "p1c76": [
        (161, "Category C-III 354 for dependence.’", 354),
        (168, "Hydrocodone bitartrate 355—C-III. Levorphanol tartrate", 355),
        (168, "Levorphanol tartrate 356 —C-III. Oxymorphone", 356),
        (168, "Oxymorphone hydrochloride 357—admittedly, yes, C-II,", 357),
        (171, "him Librium 359 to help", 359),
        (173, "like Percocet 360 except without", 360),
        (186, "a Levsin 361-codeine diverticulitis compound,", 361),
        (205, "first Quaalude 362 at age", 362),
        (206, "methylenedioxy psychedelics 364 from nutmeg", 364),
        (208, "Medicaid L.T.I. 365 out across", 365),
        (274, "turgid-sounding shit 366—‘For while clinamen", 366),
        (277, "cellular phones. 367 And while", 367),
        (277, "of Cafergot 368 spansules and", 368),
        (277, "shallow sadism. 369 W. Sorkin,", 369),
        (277, "Medicaid Iletin 370 I.D. for", 370),
        (280, "Andover Academy 371 kids for", 371),
        (283, "plus vig 372 from the", 372),
        (285, "20% Mucomyst 373 q. 2", 373),
        (288, "termed ‘chivalrous’ 374 enough to", 374),
        (298, "represented like 375 sky-blue grams", 375),
        (298, "hydromorphone hydrochloride 376 or like", 376),
        (305, "anti-hangover breakfast 377 and watching", 377),
        (407, "to self-forgetting 378 that he", 378),
        (413, "as conundra. 379 From my", 379),
        (415, "and rasters 380 at first,", 380),
        (418, "in 1924. 381 A hulking", 381),
        (447, "each breath. 382 Of us", 382),
        (465, "through Choices 383 last winter", 383),
    ],
    "p1c77": [
        (8, "daily Ativan 384 and just", 384),
        (20, "to Narcan. 386 The pharmacist", 386),
        (25, "pharm-grade Sunshine,’ 387 the assistant", 387),
        (28, "U.S. Talwin’s 388 got .5", 388),
    ],
}


# Print-grounded subsection openers that carry no dateline: each matched at
# the start of a blank-preceded line (apostrophes are U+2019 in the source).
_IJ_SUB_CUES = (
    "MARIO INCANDENZA’S FIRST",
    "HAL INCANDENZA’S FIRST EXTANT",
    "ENORMOUS, ELECTROLYSIS",
    "ALPHABETICAL TALLY",
    "WHY—THOUGH IN THE EARLY DAYS",
    "TENNIS AND THE FERAL PRODIGY",
    "SELECTED TRANSCRIPTS OF THE RESIDENT",
    "FROM INTERNAL INTERLACE-SYSTEM",
    "CHRONOLOGY OF ORGANIZATION",
    "PUTATIVE CURRICULUM VITAE",
    "The Personal Is the Political",
    "KEEP YOUR ANSWERS",
    "SELECTED SNIPPETS FROM THE INDIVIDUAL",
    "PARTIAL TRANSCRIPT OF",
    "SELECTED SNIPPET FROM THE INDIVIDUAL",
)


# First line of a section header must carry a dateline cue. This keeps
# all-caps prose (the videophony essay, headline montages, exam text) out.
_IJ_FIRST_RE = re.compile(
    r"YEAR OF|Y\.D\.A\.U|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|"
    r"SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER|\bB\.S\. 19|GAUDEAMUS|INTERDEPENDENCE|"
    r"^PRE-DAWN|MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY|SUNDAY|"
    r"EARLY |LATE |AUTUMN|WINTER|SPRING|SUMMER|TUCSON|DENVER|^AS OF YEAR|"
    r"^ON-CALL|^1 MAY|^30 APRIL|^3 NOVEMBER",
    re.I,
)

_IJ_SMALL = {
    "of", "the", "and", "a", "an", "in", "on", "to", "for",
    "from", "vs", "v", "de", "la", "du", "des", "et", "und",
}


def _ij_title_case(s: str) -> str:
    def word(tok: str, first: bool, last: bool) -> str:
        m = re.match(r"^([\"'“”‘’(«–—-]*)(.*?)([\"'“”‘’».,;:!?–—-]*)$", tok)
        if not m:
            return tok
        pre, core, post = m.groups()
        if not core:
            return tok
        # Hyphen compounds: capitalize each segment ("Pre-dawn" -> "Pre-Dawn").
        if "-" in core and "." not in core:
            parts = core.split("-")
            fixed = "-".join(p[:1].upper() + p[1:].lower() for p in parts)
            return pre + fixed + post
        if "." in core or core in {"AZ", "MA", "CO", "CA", "B.S", "U.S.A", "D.A.R.H"}:
            return tok  # dotted initials / state codes keep source case
        low = core.lower()
        w = low if (not first and not last and low in _IJ_SMALL) else low[:1].upper() + low[1:]
        return pre + w + post
    # Split em/en-dash-glued tokens ("APRIL—YEAR" -> "April — Year").
    toks = re.findall(r"[^\s—–]+|[—–]", s)
    out = []
    words = [t for t in toks if t not in ("—", "–")]
    wi = 0
    for t in toks:
        if t in ("—", "–"):
            out.append("—")
            continue
        out.append(word(t, wi == 0, wi == len(words) - 1))
        wi += 1
    return " ".join(out).replace(" — ", " — ")


def _ij_header_title(run: list[str]) -> str:
    joined = " ".join(run)
    # Split a leading date/place line off the year line for readability:
    # "DENVER CO, 1 NOVEMBER YEAR OF ..." -> "Denver CO, 1 November — Year of ..."
    for k, line in enumerate(run):
        if k > 0 and re.search(r"YEAR OF|Y\.D\.A\.U", line, re.I):
            joined = " ".join(run[:k]) + " — " + " ".join(run[k:])
            break
    return _ij_title_case(joined)


def parse_infinite_jest() -> tuple[dict, list]:
    lines = load_raw("_oceanofpdf_com_infinite_jest___david_fo.txt")
    start = next(i for i, l in enumerate(lines) if _ij_scrub(l) == "YEAR OF GLAD")
    about = next(
        i for i, l in enumerate(lines) if i > start and _ij_scrub(l) == "ABOUT THE AUTHOR"
    )
    body = lines[start:about]
    n = len(body)

    # Section breaks (print-grounded; the layout extraction keeps indents):
    # dateline display headers (YEAR OF ... / 3 NOVEMBER ... / TUCSON AZ ...)
    # plus cue-listed subsection openers (film credits, the E.T.A. exam, Gately
    # transcripts, memo inserts ...). Headline montages, sign text and the
    # videophony essay's caps opening stay in the body. Header runs gather
    # contiguous caps lines plus single-blank-bridged tails (page-split
    # datelines, GAUDEAMUS IGITUR / FRONT OFFICE tails).
    bounds: list[tuple[int, int, list[str], bool]] = []  # (hdr, start, run, sub)
    def _ij_take(s: int, lim: int = 10, bridge: str | None = None) -> tuple[list[str], int]:
        """Gather a header run at line s; returns (run, body_start)."""
        j = s
        run: list[str] = []
        while j < n and len(run) < lim and body[j].strip() and _ij_is_caps_line(body[j]):
            run.append(_ij_scrub(body[j]))
            j += 1
            if j < n and not body[j].strip():
                # single-blank bridge (page-split header or caps tail block)
                if (
                    j + 1 < n
                    and body[j + 1].strip()
                    and _ij_is_caps_line(body[j + 1])
                    and (
                        (
                            bridge is not None
                            and not re.match(r"ITEM\s+\d", _ij_scrub(body[j + 1]))
                        )
                        or re.search(
                            r"YEAR OF|Y\.D\.A\.U|UNDERGARMENT|GAUDEAMUS|INTERDEPENDENCE|"
                            r"FRONT OFFICE|ENNET HOUSE|ENFIELD MA|DAY\b",
                            _ij_scrub(body[j + 1]),
                            re.I,
                        )
                    )
                ):
                    j += 1
                    continue
                break
        return run, j
    def _ij_scan_at(s: int) -> tuple[list[str], int, bool] | None:
        """Section break at body line s -> (run, body_start, is_sub)."""
        first = _ij_scrub(body[s])
        sub = next((c for c in _IJ_SUB_CUES if first.startswith(c)), None)
        if sub is not None:
            run, k = _ij_take(s, lim=16, bridge="sub")
            if not run:
                return None
            # Title: first line, plus the second when it reads as one head.
            # The whole contiguous caps deck belongs to the header: consume
            # it so tail lines (film credits, mastheads, exam heads) never
            # leak into the body as all-caps paragraphs. Exception: the
            # WHY videophony essay, whose opening sentence itself runs in
            # display caps for a page — only its two-line head is consumed.
            keep = 1
            if (
                len(run) > 1
                and len(run[1]) >= 15
                and len(run[0]) + 3 + len(run[1]) <= 120
            ):
                keep = 2
            if sub.startswith("WHY"):
                return run[:keep], s + keep, True
            return run[:keep], k, True
        if _ij_is_caps_line(body[s]) and _IJ_FIRST_RE.search(first):
            run, k = _ij_take(s)
            if re.search(r"YEAR OF|Y\.D\.A\.U|B\.S\.", " // ".join(run)):
                return run, k, False
        return None
    if _ij_is_caps_line(body[0]) and _IJ_FIRST_RE.search(_ij_scrub(body[0])):
        taken0 = _ij_scan_at(0)
        if taken0 is not None:
            bounds.append((0, taken0[1], taken0[0], taken0[2]))
            i = taken0[1]
        else:
            i = 0
    else:
        i = 0
    while i < n:
        if body[i].strip() == "" and i + 1 < n and body[i + 1].strip():
            taken = _ij_scan_at(i + 1)
            if taken is not None:
                run, k, is_sub = taken
                bounds.append((i + 1, k, run, is_sub))
                i = k
                continue
        i += 1

    novel = []
    for idx, (_hf, ks, run, is_sub) in enumerate(bounds):
        ks_next = bounds[idx + 1][0] if idx + 1 < len(bounds) else n
        paras = _ij_reflow(body[ks:ks_next])
        if not paras:
            continue
        title = _ij_title_case(" ".join(run)) if is_sub else _ij_header_title(run)
        novel.append(
            {
                "number_label": f"§ {len(novel) + 1}",
                "roman": str(len(novel) + 1),
                "title": title,
                "paragraphs": paras,
            }
        )
    # Disambiguate repeat datelines with an incipit from the section's own
    # first line, so undated sections stay distinguishable in the reader ToC.
    seen: dict[str, int] = {}
    for ch in novel:
        seen[ch["title"]] = seen.get(ch["title"], 0) + 1
        if seen[ch["title"]] > 1:
            words = (ch["paragraphs"][0].split() if ch["paragraphs"] else [])[:7]
            incipit = " ".join(words).rstrip(" ,;:")
            ch["title"] = f"{ch['title']} ({seen[ch['title']]}) \u2014 {incipit}\u2026"


    # ── Endnotes: numbered notes 1–388, filmography embedded in note 24 ──
    notes_at = next(
        i for i, l in enumerate(lines) if re.match(r"^\s*NOTES AND ERRATA\s*$", l)
    )
    thanks_at = next(i for i, l in enumerate(lines) if "Thank you for buying this ebook" in l)
    raw_notes = lines[notes_at + 1 : thanks_at]
    merged: list[str] = []
    k = 0
    while k < len(raw_notes):
        s = raw_notes[k].strip()
        # Page-break split: bare "24." / "28." / ... followed by blank line(s);
        # glue the number onto the next non-blank line so the boundary scan
        # sees the note start.
        if re.match(r"^\d{1,3}\.$", s):
            q = k + 1
            while q < len(raw_notes) and not raw_notes[q].strip():
                q += 1
            if q < len(raw_notes):
                merged.append(s + " " + raw_notes[q].strip())
                k = q + 1
                continue
            merged.append(raw_notes[k])
            k += 1
            continue
        merged.append(raw_notes[k])
        k += 1
    notes: list[tuple[int, list[str]]] = []
    cur: int | None = None
    buf: list[str] = []
    for ln in merged:
        m = re.match(r"^(\d{1,3})\.\s", ln.strip())
        if m:
            if cur is not None:
                notes.append((cur, buf))
            cur = int(m.group(1))
            buf = [ln]
        else:
            # Unnumbered tail apparatus (pp. 1225-1229: *, 4, 5, 6): each
            # starts a new paragraph so entries never merge into one.
            if cur == 388 and ln.strip() and re.match(r"^[*] |^[456] ", ln.strip()):
                buf.append("")
            buf.append(ln)
    if cur is not None:
        notes.append((cur, buf))

    groups: list[tuple[int, int]] = [(1, 23), (24, 24)]
    lo = 25
    while lo <= 388:
        groups.append((lo, min(lo + 39, 388)))
        lo += 40
    by_num = dict(notes)
    note_chs = []
    for a, b in groups:
        if a not in by_num or b not in by_num:
            continue
        chunk: list[str] = []
        for num in range(a, b + 1):
            chunk.extend(by_num[num])
        paras = _ij_reflow(chunk)
        if a == b == 24 and paras:
            paras[0] = re.sub(r"^24\.\s+JAMES O\. INCANDENZA: A FILMOGRAPHY\s+[a-z]$", "24. JAMES O. INCANDENZA: A FILMOGRAPHY", paras[0])
        if not paras:
            continue
        if a == b == 24:
            title = "Note 24 — James O. Incandenza: A Filmography"
            label = "Note 24"
        elif a == b:
            title = f"Note {a}"
            label = f"Note {a}"
        else:
            title = f"Notes {a}–{b}"
            label = f"Notes {a}–{b}"
        note_chs.append(
            {"number_label": label, "roman": label, "title": title, "paragraphs": paras}
        )

    # Attach curated body→note callouts (validated; build fails on drift).
    for _ci, _ch in enumerate(novel):
        _cid = f"p1c{_ci + 1}"
        _refs = _IJ_NOTE_REFS.get(_cid)
        if not _refs:
            continue
        _out = []
        for _para, _match, _note in _refs:
            assert 0 <= _para < len(_ch["paragraphs"]), (_cid, _para, _note)
            assert _ch["paragraphs"][_para].count(_match) == 1, (_cid, _para, _note)
            _out.append({"para": _para, "match": _match, "note": _note})
        _ch["note_refs"] = _out

    parts = [
        {"roman": "I", "name": "Infinite Jest", "subtitle": "The Novel", "chapters": novel},
        {
            "roman": "II",
            "name": "Endnotes & Errata",
            "subtitle": "Notes and Errata",
            "chapters": note_chs,
        },
    ]

    meta = {
        "title": "Infinite Jest",
        "author": "David Foster Wallace",
        "dedication": "For F. P. Foster: R.I.P.",
        "tagline": "Everything About Everything",
        "year": "1996",
        "theme": "infinite-jest",
        "accent": "#a3e635",
        "blurb": "Tennis, addiction, entertainment, and the year of the Depend Adult Undergarment.",
    }
    return meta, parts


class _ChurchillBlocks(HTMLParser):
    """Block extractor for Forty Ways EPUB (handles p + table rows)."""

    def __init__(self) -> None:
        super().__init__()
        self.blocks: list[tuple[str, str, str]] = []
        self._buf: list[str] = []
        self._tag: str | None = None
        self._attrs: dict = {}
        self._skip = 0
        self._in_tr = False
        self._row_cells: list[str] = []
        self._in_td = False
        self._td_buf: list[str] = []

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self._skip += 1
            return
        if self._skip:
            return
        d = dict(attrs)
        if tag == "tr":
            self._in_tr = True
            self._row_cells = []
            return
        if tag == "td" and self._in_tr:
            self._in_td = True
            self._td_buf = []
            return
        if tag == "br":
            if self._in_td:
                self._td_buf.append(" ")
            elif self._tag:
                self._buf.append(" ")
            return
        if tag in ("p", "h1", "h2", "h3", "h4", "li", "blockquote"):
            if self._buf and self._tag:
                txt = re.sub(r"\s+", " ", "".join(self._buf)).strip()
                if txt:
                    self.blocks.append((self._tag, self._attrs.get("class", ""), txt))
                self._buf = []
            self._tag = tag
            self._attrs = d
            return
        if tag == "div":
            if self._buf and self._tag:
                txt = re.sub(r"\s+", " ", "".join(self._buf)).strip()
                if txt:
                    self.blocks.append((self._tag, self._attrs.get("class", ""), txt))
                self._buf = []
            self._tag = tag
            self._attrs = d

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self._skip = max(0, self._skip - 1)
            return
        if self._skip:
            return
        if tag == "tr" and self._in_tr:
            self._in_tr = False
            cells = [c for c in self._row_cells if c]
            if cells:
                if len(cells) == 2:
                    txt = f"{cells[0]} — {cells[1]}"
                else:
                    txt = "  ".join(cells)
                txt = re.sub(r"\s+", " ", txt).strip()
                if txt:
                    self.blocks.append(("p", "table-row", txt))
            self._row_cells = []
            return
        if tag == "td" and self._in_td:
            self._in_td = False
            txt = re.sub(r"\s+", " ", "".join(self._td_buf)).strip()
            if txt:
                self._row_cells.append(txt)
            self._td_buf = []
            return
        if tag in ("p", "h1", "h2", "h3", "h4", "li", "blockquote", "div") and self._tag == tag:
            txt = re.sub(r"\s+", " ", "".join(self._buf)).strip()
            if txt:
                self.blocks.append((tag, self._attrs.get("class", ""), txt))
            self._buf = []
            self._tag = None
            self._attrs = {}

    def handle_data(self, data):
        if self._skip:
            return
        if self._in_td:
            self._td_buf.append(data)
        elif self._tag:
            self._buf.append(data)


def parse_forty_ways_to_look_at_churchill() -> tuple[dict, list]:
    """Gretchen Rubin EPUB — 40 ways + Introduction."""
    candidates = list(ROOT.glob("*Forty*Churchill*.epub")) + list(
        ROOT.glob("*Churchill*.epub")
    ) + list(ROOT.glob("_OceanofPDF*Churchill*.epub"))
    # fallback: exact known name
    if not candidates:
        ep = ROOT / "_OceanofPDF.com_Forty_Ways_to_Look_at_Winston_Churchill_-_Gretchen_Rubin.epub"
        if ep.exists():
            candidates = [ep]
    if not candidates:
        raise FileNotFoundError("Forty Ways EPUB not found")
    epub_path = candidates[0]

    TOC_TITLES = [
        "Churchill as Liberty’s Champion: Heroic View",
        "Churchill as Failed Statesman: Critical View",
        "Churchill’s Contemporaries: Whom He Knew",
        "Churchill’s Finest Hour—May 28, 1940: The Decisive Moment",
        "Churchill as Leader: Suited to High Office?",
        "Churchill’s Genius with Words: His Greatest Strength",
        "Churchill’s Eloquence: His Exact Words",
        "Churchill in Symbols: Metonymy",
        "Churchill, True: In a Single Word",
        "Churchill’s Desire for Fame: His Motive",
        "Churchill as Depressive: The “Black Dog”?",
        "Churchill’s Disdain: His Dominant Quality",
        "Churchill’s Belligerence: His Defining Characteristic",
        "Churchill’s Time Line: Key Events",
        "Churchill as Son: His Most Formative Role",
        "Churchill as Father: A Good Parent?",
        "Churchill the Painter: His Favorite Pastime",
        "Churchill the Spendthrift: A Weakness",
        "Conflicting Views of Churchill: How Others Saw Him",
        "Churchill in Tears: Telling Detail",
        "Churchill the Drinker: An Alcoholic?",
        "Churchill in Context: Facts at a Glance",
        "Churchill and Sex: Too Interesting to Ignore",
        "Churchill as Husband: A Happy Marriage?",
        "Churchill’s Island Story: His Myth",
        "Churchill in Photographs: How He Changed Through Time",
        "Churchill as the Hero of a Novel: The Imagined and the Real",
        "Churchill’s Destiny: How He Saw Himself",
        "Churchill the Imperialist: His Cause",
        "Churchill’s Empire: How He Saw the World",
        "Churchill and Roosevelt: Friends as Well as Allies?",
        "Churchill’s Imagination: How He Saw History",
        "Churchill and Hitler: Nemesis",
        "Churchill Exposed: Missing Information Supplied",
        "Churchill True or False: Challenged Assumptions",
        "The Tragedy of Winston Churchill, Englishman: The Meaning of His Life",
        "Churchill in Portrait: A Likeness",
        "Churchill’s Last Days: How He Died",
        "My Churchill: Judgment",
        "Remember Winston Churchill: Epitaph",
    ]

    def file_blocks(rel: str) -> list[tuple[str, str, str]]:
        with zipfile.ZipFile(epub_path, "r") as zf:
            data = zf.read(rel).decode("utf-8", errors="replace")
        p = _ChurchillBlocks()
        p.feed(data)
        return p.blocks

    def to_paras(blocks: list[tuple[str, str, str]]) -> list[str]:
        filtered: list[tuple[str, str]] = []
        for tag, cls, txt in blocks:
            if txt == "Forty Ways to Look at Winston Churchill":
                continue
            if "Photo ©" in txt or "Photo courtesy" in txt:
                continue
            if cls in ("cn", "ct", "cst"):
                continue
            if cls == "is":
                continue
            if not txt.strip():
                continue
            filtered.append((cls, txt))
        # merge da + following ctag* (time line)
        paras: list[str] = []
        i = 0
        while i < len(filtered):
            cls, txt = filtered[i]
            if cls == "da":
                j = i + 1
                ctags = []
                while j < len(filtered) and filtered[j][0].startswith("ctag"):
                    ctags.append(filtered[j][1])
                    j += 1
                if ctags:
                    combined = "; ".join(ctags)
                    paras.append(f"{txt} — {combined}")
                    i = j
                    continue
                paras.append(txt)
                i += 1
                continue
            paras.append(txt)
            i += 1
        return paras

    # Build chapters: Introduction + 40 ways
    all_chapters: list[dict] = []

    # Introduction
    itr_blocks = file_blocks("OEBPS/Rubi_9781588363848_epub_itr_r1.htm")
    itr_paras = to_paras(itr_blocks)
    all_chapters.append(
        {
            "number_label": "Introduction",
            "roman": "0",
            "title": "Introduction",
            "paragraphs": itr_paras,
        }
    )

    for idx, title in enumerate(TOC_TITLES, start=1):
        rel = f"OEBPS/Rubi_9781588363848_epub_c{idx:02d}_r1.htm"
        try:
            blocks = file_blocks(rel)
        except KeyError:
            continue
        paras = to_paras(blocks)
        # c30 is map-only with 1 intro para — keep it
        if not paras:
            continue
        all_chapters.append(
            {
                "number_label": str(idx),
                "roman": str(idx),
                "title": title,
                "paragraphs": paras,
            }
        )

    # Group into parts: 1 Intro + 4 groups of 10
    parts: list[dict] = []
    # Part I – Introduction
    parts.append(
        {
            "roman": "I",
            "name": "Introduction",
            "subtitle": "How I Came to Churchill",
            "chapters": [all_chapters[0]],
        }
    )
    # Parts II–V
    group_names = [
        ("II", "Ways 1–10", "Hero, Statesman, Words"),
        ("III", "Ways 11–20", "Character & Family"),
        ("IV", "Ways 21–30", "Context & Myth"),
        ("V", "Ways 31–40", "Empire, Nemesis & Epitaph"),
    ]
    for (rom, name, subtitle), start in zip(group_names, [1, 11, 21, 31]):
        end = start + 10  # exclusive in all_chapters indexing (offset by 1 for intro)
        # all_chapters[1:] holds 40 ways indexed 0..39; slice accordingly
        # start is 1-based way number, so index = start (since intro at 0)
        chap_slice = all_chapters[start : start + 10]
        if chap_slice:
            parts.append(
                {"roman": rom, "name": name, "subtitle": subtitle, "chapters": chap_slice}
            )

    # Cache plain text for debugging
    plain = []
    for ch in all_chapters:
        plain.append(f"\n\n=== {ch['title']} ===\n\n")
        plain.extend(x + "\n\n" for x in ch["paragraphs"])
    (RAW / "forty_ways_churchill_epub.txt").write_text("".join(plain), encoding="utf-8")

    meta = {
        "title": "Forty Ways to Look at Winston Churchill",
        "author": "Gretchen Rubin",
        "dedication": "To my mother and father",
        "tagline": "Forty Contrasting Views of a Giant",
        "year": "2003",
        "theme": "forty-ways-to-look-at-churchill",
        "accent": "#a68c6b",
        "blurb": "Warrior and writer, genius and crank — forty contrasting views of the man who led Britain alone in 1940.",
    }
    return meta, parts


MOLDBUG_HEADER_RE = re.compile(r"^\s*\d+\s+CHAPTER\s+[0-9XIV]+\..*$")
MOLDBUG_CH_RE = re.compile(r"^\s*Chapter\s+([0-9XIV]+)\s*$")


def parse_moldbug(raw_name: str, meta: dict, titles: list[str], part_name: str) -> tuple[dict, list]:
    """Shared parser for the Moldbug LaTeX PDFs (pdftotext -layout extract).

    Structure: full-line 'Chapter N' heading, blank line, 1-2 centered title
    lines, then body. Running headers ('<page> CHAPTER N. TITLE') are
    stripped. Bare-number footnote markers are already junk, so footnote text
    merges into the surrounding paragraph via reflow.
    """
    lines = load_raw(raw_name)
    # Start at first chapter heading (skip Contents/Foreword/Acknowledgments/Copyright)
    start = 0
    for i, l in enumerate(lines):
        if MOLDBUG_CH_RE.match(l):
            start = i
            break
    body = lines[start:]

    parts = [
        {"roman": "I", "name": part_name, "subtitle": meta["tagline"], "chapters": []}
    ]
    cur_ch = None
    buf: list[str] = []
    title_idx = 0

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = reflow(buf)
        cur_ch["paragraphs"] = paras
        if paras:
            parts[0]["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    def skip_title(i: int, title: str) -> int:
        """Skip blank lines, then the raw lines that spell out the title."""
        j = i
        while j < len(body) and not body[j].strip():
            j += 1
        need = re.sub(r"\s+", " ", title).strip().lower()
        got = ""
        k = j
        while k < len(body) and body[k].strip() and len(got) <= len(need) + 10:
            got = (got + " " + body[k].strip()).strip()
            k += 1
            if got.lower() == need:
                return k
        # Fallback: skip up to 2 short centered lines
        k = j
        for _ in range(2):
            if k < len(body) and body[k].strip() and len(body[k].strip()) < 60:
                k += 1
            else:
                break
        return k

    i = 0
    while i < len(body):
        m = MOLDBUG_CH_RE.match(body[i])
        if m:
            fin_ch()
            num = m.group(1)
            title = titles[title_idx] if title_idx < len(titles) else f"Chapter {num}"
            title_idx += 1
            cur_ch = {
                "number_label": f"Chapter {num}",
                "roman": num,
                "title": title,
                "paragraphs": [],
            }
            buf = []
            i = skip_title(i + 1, title)
            continue
        if cur_ch is None:
            i += 1
            continue
        if MOLDBUG_HEADER_RE.match(body[i]):
            i += 1
            continue
        buf.append(body[i])
        i += 1
    fin_ch()
    return meta, parts


def parse_open_letter() -> tuple[dict, list]:
    """Mencius Moldbug LaTeX PDF (2008) — 14 chapters, arabic then roman."""
    titles = [
        "A Horizon Made of Canvas",
        "More Historical Anomalies",
        "The Jacobite History of the World",
        "Dr. Johnson’s Hypothesis",
        "The Shortest Way to World Peace",
        "The Lost Theory of Government",
        "The Ugly Truth About Government",
        "A Reset Is Not a Revolution",
        "How to Uninstall a Cathedral",
        "A Simple Sovereign Bankruptcy Procedure",
        "The Truth About Left and Right",
        "What Is to Be Done?",
        "Tactics and Structures of Any Prospective Restoration",
        "Rules for Reactionaries",
    ]
    meta = {
        "title": "An Open Letter to Open-Minded Progressives",
        "author": "Mencius Moldbug",
        "dedication": "",
        "tagline": "Fourteen chapters on power, history, and who really rules",
        "year": "2008",
        "theme": "open-letter",
        "accent": "#c05746",
        "blurb": "Who really rules? Fourteen installments dismantling progressive history — and sketching a sovereign alternative.",
    }
    return parse_moldbug("open_letter.txt", meta, titles, "An Open Letter")


def parse_gentle_introduction() -> tuple[dict, list]:
    """Mencius Moldbug LaTeX PDF (2009) — 11 chapters."""
    titles = [
        "The Red Pill",
        "The American Rebellion",
        "AGW, KFM, and HNU",
        "Plan Moldbug",
        "The Modern Structure",
        "Brother Jonathan",
        "The War of Secession",
        "Olde Towne Easte",
        "The Procedure and the Reaction",
        "The Mandate of Heaven",
        "The New Structure",
    ]
    meta = {
        "title": "A Gentle Introduction to Unqualified Reservations",
        "author": "Mencius Moldbug",
        "dedication": "",
        "tagline": "Eleven doses of the red pill",
        "year": "2009",
        "theme": "gentle-introduction",
        "accent": "#5f8f83",
        "blurb": "The Cathedral, two American rebellions, and a procedure for restoration — UR’s self-styled gentle introduction.",
    }
    return parse_moldbug(
        "gentle_introduction_to_ur.txt", meta, titles, "Gentle Introduction"
    )


def parse_sovereign_individual() -> tuple[dict, list]:
    """Davidson & Rees-Mogg calibre-conversion EPUB — 11 chapters."""
    epubs = list(ROOT.glob("*soverign*.epub")) + list(
        ROOT.glob("*overeign*dividual*.epub")
    )
    if not epubs:
        raise FileNotFoundError("Sovereign Individual EPUB not found")
    epub_path = epubs[0]
    titles = {
        1: "The Transition in the Year 2000",
        2: "Megapolitical Transformations in Historical Perspective",
        3: "East of Eden",
        4: "The Last Days of Politics",
        5: "The Life and Health of the Nation-State",
        6: "The Megapolitics of the Information Age",
        7: "Transcending Locality",
        8: "The End of Egalitarian Economics",
        9: "Nationalism, Reaction, and the New Luddites",
        10: "The Twilight of Democracy",
        11: "Morality and Crime in the “Natural Economy” of the Information Age",
    }

    with tempfile.TemporaryDirectory(prefix="sovereign_epub_") as td:
        tdir = Path(td)
        with zipfile.ZipFile(epub_path, "r") as zf:
            zf.extractall(tdir)
        splits = sorted(tdir.glob("index_split_*.html"))
        blocks: list[tuple[str, str]] = []
        for sp in splits:
            raw = sp.read_text(encoding="utf-8", errors="replace")
            # Drop <head>: _HtmlBlocks would otherwise prepend <title> text
            # (identical to the running header) to each split's first block,
            # hiding chapter markers like <h2>CHAPTER 2</h2>.
            raw = re.sub(r"<head>.*?</head>", "", raw, flags=re.S)
            p = _HtmlBlocks()
            p.feed(raw)
            blocks.extend(p.blocks)

    MARK_RE = re.compile(r"^(Chapter|CHAPTER)\s+(\d+)\s*(.*)$")
    PAGENO_RE = re.compile(r"^[A-Za-z]?\d{1,3}\.?$")
    parts = [
        {
            "roman": "I",
            "name": "The Sovereign Individual",
            "subtitle": "Eleven Chapters",
            "chapters": [],
        }
    ]
    cur_ch = None
    buf: list[str] = []
    title_zone = False

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = [b for b in buf if b.strip()]
        cur_ch["paragraphs"] = paras
        if paras:
            parts[0]["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    for _, text in blocks:
        t = re.sub(r"\s+", " ", text).strip()
        if not t:
            continue
        if t.startswith("James Dale Davidson"):
            continue  # running header on every split
        if t == "Document Outline":
            break  # backmatter TOC
        if PAGENO_RE.match(t):
            continue  # page-number artifacts (1, 2., A3)
        m = MARK_RE.match(t)
        if m:
            num = int(m.group(2))
            rest = m.group(3).strip()
            letters = re.sub(r"[^A-Za-z]", "", rest)
            if 1 <= num <= 11 and (
                not rest or (rest == rest.upper() and len(letters) >= 2)
            ):
                fin_ch()
                title = titles.get(num, f"Chapter {num}")
                cur_ch = {
                    "number_label": f"Chapter {num}",
                    "roman": str(num),
                    "title": title,
                    "paragraphs": [],
                }
                buf = []
                title_zone = True
                continue
        if cur_ch is None:
            continue  # title page, skip content before Chapter 1
        if title_zone and len(t) < 90 and t == t.upper() and re.search(r"[A-Z]{2}", t):
            continue  # chapter-title remnant (title is hardcoded above)
        title_zone = False
        buf.append(t)
    fin_ch()

    # Cache plain text for debugging
    plain = []
    for ch in parts[0]["chapters"]:
        plain.append(f"\n\n=== {ch['title']} ===\n\n")
        plain.extend(x + "\n\n" for x in ch["paragraphs"])
    (RAW / "sovereign_individual_epub.txt").write_text("".join(plain), encoding="utf-8")

    meta = {
        "title": "The Sovereign Individual",
        "author": "James Dale Davidson & William Rees-Mogg",
        "dedication": "",
        "tagline": "How to Survive and Thrive During the Collapse of the Welfare State",
        "year": "1997",
        "theme": "sovereign-individual",
        "accent": "#c9a227",
        "blurb": "Megapolitics for the information age — as the nation-state fades, the individual returns.",
    }
    return meta, parts


def migrate_atlas() -> None:
    """Copy existing Atlas Shrugged data into books/atlas-shrugged/."""
    src_data = ROOT / "data"
    if not (src_data / "toc.json").exists():
        print("  ! atlas data missing, skip")
        return
    dest = BOOKS / "atlas-shrugged"
    dest_data = dest / "data"
    if dest_data.exists():
        shutil.rmtree(dest_data)
    shutil.copytree(src_data, dest_data)
    # remove book.json bulk if present
    bj = dest_data / "book.json"
    if bj.exists():
        bj.unlink()
    toc = json.loads((dest_data / "toc.json").read_text(encoding="utf-8"))
    words = sum(c.get("word_count", 0) for p in toc["parts"] for c in p["chapters"])
    n_ch = sum(len(p["chapters"]) for p in toc["parts"])
    meta = {
        "title": "Atlas Shrugged",
        "author": "Ayn Rand",
        "dedication": toc.get("dedication", "To Frank O’Connor"),
        "tagline": "Who is John Galt?",
        "year": "1957",
        "theme": "atlas-shrugged",
        "accent": "#d4af64",
        "blurb": "The mind on strike — railroads, steel, and the motor of the world.",
        "slug": "atlas-shrugged",
        "chapters": n_ch,
        "words": words,
        "parts": len(toc["parts"]),
    }
    dest.mkdir(parents=True, exist_ok=True)
    (dest / "meta.json").write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"  ✓ atlas-shrugged: {n_ch} chapters, {words:,} words (migrated)")


PARSERS = [
    ("the-fountainhead", parse_fountainhead),
    ("beyond-good-and-evil", parse_beyond_good_and_evil),
    ("thus-spoke-zarathustra", parse_zarathustra),
    ("twilight-of-the-idols", parse_twilight),
    ("will-to-power", parse_will_to_power),
    ("gay-science", parse_gay_science),
    ("being-and-time", parse_being_and_time),
    ("infinite-jest", parse_infinite_jest),
    ("forty-ways-to-look-at-churchill", parse_forty_ways_to_look_at_churchill),
    ("sovereign-individual", parse_sovereign_individual),
]


def main() -> None:
    BOOKS.mkdir(exist_ok=True)
    print("Building library…")
    migrate_atlas()
    catalog = []
    # Atlas meta
    atlas_meta = BOOKS / "atlas-shrugged" / "meta.json"
    if atlas_meta.exists():
        catalog.append(json.loads(atlas_meta.read_text(encoding="utf-8")))

    for slug, fn in PARSERS:
        print(f"Parsing {slug}…")
        try:
            meta, parts = fn()
            # filter empty chapters
            for p in parts:
                p["chapters"] = [c for c in p["chapters"] if c.get("paragraphs")]
            parts = [p for p in parts if p["chapters"]]
            if not parts:
                print(f"  ✗ {slug}: no content")
                continue
            write_book(slug, meta, parts)
            catalog.append(json.loads((BOOKS / slug / "meta.json").read_text(encoding="utf-8")))
        except Exception as e:
            print(f"  ✗ {slug}: {e}")
            import traceback

            traceback.print_exc()
    # Preserve books whose sources are absent locally (gitignored PDFs/EPUBs):
    # a rebuild must never drop them from the menu.
    have = {m["slug"] for m in catalog}
    for meta_path in sorted(BOOKS.glob("*/meta.json")):
        slug = meta_path.parent.name
        if slug not in have:
            catalog.append(json.loads(meta_path.read_text(encoding="utf-8")))
            print(f"  … {slug}: kept existing data (source absent)")

    # Sort catalog: Rand, Nietzsche cluster, Heidegger, DFW, Churchill, Moldbug, Davidson/Rees-Mogg
    order = [
        "atlas-shrugged",
        "the-fountainhead",
        "beyond-good-and-evil",
        "thus-spoke-zarathustra",
        "gay-science",
        "twilight-of-the-idols",
        "will-to-power",
        "being-and-time",
        "infinite-jest",
        "forty-ways-to-look-at-churchill",
        "open-letter",
        "gentle-introduction",
        "sovereign-individual",
    ]
    catalog.sort(key=lambda m: order.index(m["slug"]) if m["slug"] in order else 99)
    (ROOT / "catalog.json").write_text(
        json.dumps({"books": catalog}, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nCatalog: {len(catalog)} books → catalog.json")


if __name__ == "__main__":
    main()
