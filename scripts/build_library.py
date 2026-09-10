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
            (chap_dir / f"{cid}.json").write_text(
                json.dumps(payload, ensure_ascii=False), encoding="utf-8"
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
            # next non-junk non-empty may be part name (PETER KEATING)
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
            # Avoid matching random I in text: only short roman alone
            fin_ch()
            rom = m.group(1)
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
            # chapter subtitle like PREJUDICES OF PHILOSOPHERS
            cur_ch["title"] = paras[0].title() if paras[0].isupper() else paras[0]
            # keep nicer title casing for known all-caps
            cur_ch["title"] = paras[0]
            if cur_ch["title"].isupper():
                cur_ch["title"] = cur_ch["title"].title()
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
    # Body: "PA RT O N E" or "PART ONE" near prologue
    start = 0
    for i, l in enumerate(lines):
        compact = re.sub(r"\s+", "", l.upper())
        if compact in ("PARTONE", "PARTONE.") or "ZARATHUSTRA’SPROLOGUE" in compact.replace("'", "’"):
            if i > 900:
                start = i
                break
        if l.strip() in ("PART ONE", "Part One") and i > 900:
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

    PART_RE = re.compile(r"^\s*P\s*A\s*R\s*T\s+(O\s*N\s*E|T\s*W\s*O|T\s*H\s*R\s*E\s*E|F\s*O\s*U\s*R|ONE|TWO|THREE|FOUR)\s*$", re.I)
    PART_RE2 = re.compile(r"^\s*Part\s+(One|Two|Three|Four)\s*$", re.I)
    # Discourse titles: "Of the Three Metamorphoses" style - title case lines short
    # Also "Zarathustra's Prologue"

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

    def is_discourse_title(s: str) -> bool:
        if not s or len(s) > 70:
            return False
        if s.startswith("Of ") or s.startswith("On ") or s.startswith("The ") or s.startswith("Zarathustra"):
            if re.search(r"[.!?]$", s):
                return False
            # not a normal sentence mid-para
            words = s.split()
            if 2 <= len(words) <= 12:
                return True
        if s in ("Zarathustra’s Prologue", "Zarathustra's Prologue"):
            return True
        return False

    part_map = {
        "ONE": ("I", "Part One"),
        "TWO": ("II", "Part Two"),
        "THREE": ("III", "Part Three"),
        "FOUR": ("IV", "Part Four"),
    }

    for line in body:
        s = line.strip()
        s_norm = re.sub(r"\s+", " ", s)
        compact = re.sub(r"\s+", "", s.upper())
        m = PART_RE.match(s) or PART_RE2.match(s) or (re.match(r"^PART\s+(ONE|TWO|THREE|FOUR)$", s, re.I))
        if compact.startswith("PARTONE") or compact.startswith("PARTTWO") or compact.startswith("PARTTHREE") or compact.startswith("PARTFOUR"):
            fin_part()
            key = compact.replace("PART", "").replace(".", "")
            # normalize spaced ONE
            key = re.sub(r"[^A-Z]", "", key)
            if key.startswith("ONE"):
                key = "ONE"
            elif key.startswith("TWO"):
                key = "TWO"
            elif key.startswith("THREE"):
                key = "THREE"
            elif key.startswith("FOUR"):
                key = "FOUR"
            rom, name = part_map.get(key, ("?", key))
            cur_part = {"roman": rom, "name": name, "subtitle": name, "chapters": []}
            continue
        if m:
            fin_part()
            raw = re.sub(r"\s+", "", m.group(1).upper())
            rom, name = part_map.get(raw, ("?", raw))
            cur_part = {"roman": rom, "name": name, "subtitle": name, "chapters": []}
            continue
        if cur_part is None:
            # create part one implicitly
            cur_part = {"roman": "I", "name": "Part One", "subtitle": "Part One", "chapters": []}
        if is_discourse_title(s_norm) and not s_norm[0].isdigit():
            fin_ch()
            cur_ch = {
                "number_label": s_norm,
                "roman": str(len(cur_part["chapters"]) + 1),
                "title": s_norm,
                "paragraphs": [],
            }
            buf = []
            continue
        if cur_ch is None:
            cur_ch = {
                "number_label": "Opening",
                "roman": "1",
                "title": "Zarathustra’s Prologue",
                "paragraphs": [],
            }
            buf = []
        buf.append(line)
    fin_part()

    meta = {
        "title": "Thus Spoke Zarathustra",
        "author": "Friedrich Nietzsche",
        "dedication": "",
        "tagline": "A Book for Everyone and No One",
        "year": "1883–1885",
        "theme": "zarathustra",
        "accent": "#e8a838",
        "blurb": "The prophet descends from the mountain — with laughter, lightning, and the overman.",
    }
    return meta, parts


def parse_twilight() -> tuple[dict, list]:
    lines = load_raw("_oceanofpdf_com_twilight_of_the_idols___.txt")
    # Body starts at MAXIMS AND BARBS
    start = 0
    for i, l in enumerate(lines):
        if "MAXIMS AND BARBS" in l.upper() or "MAXIMS AND ARROWS" in l.upper():
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

    # Section headers: ALL CAPS short lines, often with *
    SECTION_RE = re.compile(
        r"^(MAXIMS AND BARBS|MAXIMS AND ARROWS|THE PROBLEM OF SOCRATES|"
        r"‘REASON’ IN PHILOSOPHY|REASON IN PHILOSOPHY|"
        r"HOW THE[‘'\" ]*REAL WORLD[‘'\" ]* AT LAST BECAME A FABLE|"
        r"MORALITY AS ANTI-NATURE|THE FOUR GREAT ERRORS|"
        r"THE[‘'\" ]*IMPROVERS[‘'\" ]* OF MANKIND|WHAT THE GERMANS LACK|"
        r"SKIRMISHES OF AN UNTIMELY MAN|WHAT I OWE THE ANCIENTS|"
        r"THE HAMMER SPEAKS).*$",
        re.I,
    )

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
        s = line.strip().rstrip("*").strip()
        su = s.upper()
        # detect section headers
        is_header = False
        title = s
        if SECTION_RE.match(su) or SECTION_RE.match(s):
            is_header = True
            title = s.rstrip("*").strip()
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
                    "MAXIMS",
                    "SOCRATES",
                    "REASON",
                    "REAL WORLD",
                    "MORALITY",
                    "ERRORS",
                    "IMPROVERS",
                    "GERMANS",
                    "SKIRMISHES",
                    "ANCIENTS",
                    "HAMMER",
                )
            ):
                is_header = True
                title = s.rstrip("*").strip().title()
                if s.isupper():
                    title = s.rstrip("*").strip().title()

        if is_header:
            fin_ch()
            t = title if not title.isupper() else title.title()
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
        if i > 500 and re.match(r"^\s*(Notes|Index|Bibliography)\s*$", l):
            body = body[:i]
            break

    BOOK_RE = re.compile(r"^\s*BOOK\s+([IVX]+)\s*$", re.I)
    PART_RE = re.compile(r"^\s*Part\s+(\d+)\.\s*(.+)$", re.I)

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
        if cur_part:
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
            fin_ch()
            cur_ch = {
                "number_label": f"Part {m.group(1)}",
                "roman": m.group(1),
                "title": m.group(2).strip(),
                "paragraphs": [],
            }
            buf = []
            continue
        # numbered sections like "1. Nihilism as..."
        m2 = re.match(r"^(\d+)\.\s+([A-Z].{5,80})$", s)
        if m2 and cur_part is not None and len(s) < 100:
            fin_ch()
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


def parse_gay_science() -> tuple[dict, list]:
    """Cambridge Texts EPUB (preferred) — not the scanned PDF."""
    epubs = list(ROOT.glob("Nietzsche_ The Gay Science*.epub")) + list(
        ROOT.glob("*Gay*Science*.epub")
    )
    if not epubs:
        raise FileNotFoundError(
            "Gay Science EPUB not found (expected Nietzsche_ The Gay Science*.epub)"
        )
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
    DIV_RE = re.compile(r"^(DIVISION\s+(ONE|TWO)|INTRODUCTION|PART\s+ONE)\s*$", re.I)

    parts = []
    cur_part = None
    cur_ch = None
    buf = []

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

    def fin_part():
        nonlocal cur_part
        fin_ch()
        if cur_part and cur_part["chapters"]:
            parts.append(cur_part)
        cur_part = None

    for line in body:
        s = line.strip()
        m = DIV_RE.match(s)
        if m:
            fin_part()
            title = s.title()
            cur_part = {
                "roman": str(len(parts) + 1),
                "name": title,
                "subtitle": title,
                "chapters": [],
            }
            continue
        m = SECTION_RE.match(s)
        if m:
            if cur_part is None:
                cur_part = {
                    "roman": "1",
                    "name": "Introduction",
                    "subtitle": "The Question of Being",
                    "chapters": [],
                }
            fin_ch()
            num = m.group(1)
            title = m.group(2).strip() or f"§ {num}"
            # clean trailing page numbers
            title = re.sub(r"\s+\d+\s*$", "", title)
            cur_ch = {
                "number_label": f"§ {num}",
                "roman": num,
                "title": title if title else f"§ {num}",
                "paragraphs": [],
            }
            buf = []
            continue
        if cur_ch is not None:
            buf.append(line)
    fin_part()

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


def parse_infinite_jest() -> tuple[dict, list]:
    lines = load_raw("_oceanofpdf_com_infinite_jest___david_fo.txt")
    # Start at YEAR OF GLAD
    start = 0
    for i, l in enumerate(lines):
        if l.strip() == "YEAR OF GLAD":
            start = i
            break
    body = lines[start:]
    # End before NOTES AND ERRATA or endnotes section "NOTES AND ERRATA"
    end = len(body)
    for i, l in enumerate(body):
        if re.match(r"^\s*NOTES AND ERRATA\s*$", l, re.I) or re.match(
            r"^\s*Notes and Errata\s*$", l
        ):
            end = i
            break
        # numbered endnotes block often starts with "1. Methamphetamine"
        if i > 35000 and re.match(r"^1\.\s+Methamphetamine", l):
            end = i
            break
    body = body[:end]

    # Section headers: full line YEAR OF ...
    YEAR_RE = re.compile(r"^YEAR OF .+$")

    parts = [{"roman": "I", "name": "Infinite Jest", "subtitle": "The Novel", "chapters": []}]
    cur_ch = None
    buf = []
    section_idx = 0

    def fin_ch():
        nonlocal cur_ch, buf
        if cur_ch is None:
            buf = []
            return
        paras = reflow(buf, fill_width=72)
        cur_ch["paragraphs"] = paras
        if paras:  # skip empty
            parts[0]["chapters"].append(cur_ch)
        cur_ch = None
        buf = []

    for line in body:
        s = line.strip()
        if YEAR_RE.match(s) and len(s) < 80:
            fin_ch()
            section_idx += 1
            # Collapse repeated year names with index
            title = s.title() if s.isupper() else s
            cur_ch = {
                "number_label": f"§ {section_idx}",
                "roman": str(section_idx),
                "title": title,
                "paragraphs": [],
            }
            buf = []
            continue
        if cur_ch is None:
            section_idx = 1
            cur_ch = {
                "number_label": "§ 1",
                "roman": "1",
                "title": "Year of Glad",
                "paragraphs": [],
            }
            buf = []
        buf.append(line)
    fin_ch()

    # Merge consecutive sections with identical titles into readable chunks
    # (optional) — keep as-is with numbered duplicates for navigation
    # Rename duplicates: "Year of … (2)"
    seen = {}
    for ch in parts[0]["chapters"]:
        t = ch["title"]
        seen[t] = seen.get(t, 0) + 1
        if seen[t] > 1:
            ch["title"] = f"{t} ({seen[t]})"

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
    ("open-letter", parse_open_letter),
    ("gentle-introduction", parse_gentle_introduction),
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
