#!/usr/bin/env python3
"""
Clean text.txt and export structured chapter JSON for the web reader.

Removes publisher junk (front matter, intro, about-the-author, guides)
and reflows hard-wrapped lines into proper paragraphs.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
# 1-based line numbers from source analysis:
#   PART ONE begins at line 407; ABOUT THE AUTHOR at 49767
BODY_START = 406  # 0-based inclusive
BODY_END = 49766  # 0-based exclusive

PART_RE = re.compile(r"^\s*PART\s+(ONE|TWO|THREE|I{1,3})\s*$", re.I)
CHAPTER_RE = re.compile(r"^\s*Chapter\s+([IVXLCDM]+|\d+)\s*$", re.I)
SENT_END = re.compile(r'[.!?…](?:["\u201d\u2019\'»”]+)?$')

PART_NAMES = {
    "ONE": ("I", "ONE"),
    "TWO": ("II", "TWO"),
    "THREE": ("III", "THREE"),
    "I": ("I", "ONE"),
    "II": ("II", "TWO"),
    "III": ("III", "THREE"),
}
PART_SUBTITLES = {
    "ONE": "NON-CONTRADICTION",
    "TWO": "EITHER-OR",
    "THREE": "A IS A",
    "I": "NON-CONTRADICTION",
    "II": "EITHER-OR",
    "III": "A IS A",
}


def clean_line(s: str) -> str:
    s = s.replace("\u00ad", "").replace("\ufeff", "")
    s = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", s)
    s = s.replace("", "h")
    return s.rstrip()


def is_sentence_end(s: str) -> bool:
    return bool(SENT_END.search(s.rstrip()))


def looks_like_title(s: str) -> bool:
    s = s.strip()
    if not s or len(s) > 70:
        return False
    letters = [c for c in s if c.isalpha()]
    if not letters:
        return False
    return sum(c.isupper() for c in letters) / len(letters) > 0.9 and not s.endswith(".")


def join_token(result: str, nxt: str) -> str:
    if result.endswith("-") and not result.endswith("—") and not result.endswith("--"):
        return result + nxt
    return result + " " + nxt


def reflow_parts(parts: list[str]) -> str:
    if not parts:
        return ""
    result = parts[0]
    for p in parts[1:]:
        result = join_token(result, p)
    return re.sub(r"[ \t]+", " ", result).strip()


def flush_paragraphs(line_list: list[str], fill_width: int = 72) -> list[str]:
    src = [ln.strip() for ln in line_list if ln.strip()]
    if not src:
        return []

    paragraphs: list[str] = []
    para_parts = [src[0]]
    last_line = src[0]

    for i in range(1, len(src)):
        nxt = src[i]
        cont = False
        if last_line.endswith("-") and not last_line.endswith("—") and not last_line.endswith("--"):
            cont = True
        elif nxt[:1].islower():
            cont = True
        elif not is_sentence_end(last_line):
            cont = True
        elif len(last_line) >= fill_width:
            cont = True

        if cont:
            para_parts.append(nxt)
            last_line = nxt
        else:
            text = reflow_parts(para_parts)
            if text:
                paragraphs.append(text)
            para_parts = [nxt]
            last_line = nxt

    text = reflow_parts(para_parts)
    if text:
        paragraphs.append(text)
    return paragraphs


def parse(body_lines: list[str]) -> list[dict]:
    parts: list[dict] = []
    current_part = None
    current_chapter = None
    buf_lines: list[str] = []
    pending_title = None

    def finish_chapter() -> None:
        nonlocal current_chapter, buf_lines, pending_title
        if current_chapter is None:
            buf_lines = []
            pending_title = None
            return
        title = pending_title
        content = buf_lines
        if title is None and content:
            first = content[0].strip()
            if looks_like_title(first):
                title = first
                content = content[1:]
        paras = flush_paragraphs(content)
        if paras and looks_like_title(paras[0]) and len(paras[0].split()) <= 12:
            if not title:
                title = paras[0]
            paras = paras[1:]
        current_chapter["title"] = title or current_chapter.get("number_label", "Chapter")
        current_chapter["paragraphs"] = paras
        current_part["chapters"].append(current_chapter)
        current_chapter = None
        buf_lines = []
        pending_title = None

    def finish_part() -> None:
        nonlocal current_part
        finish_chapter()
        if current_part is not None:
            parts.append(current_part)
            current_part = None

    i = 0
    while i < len(body_lines):
        stripped = body_lines[i].strip()
        m_part = PART_RE.match(stripped)
        if m_part:
            finish_part()
            key = m_part.group(1).upper()
            roman, word = PART_NAMES.get(key, (key, key))
            subtitle = PART_SUBTITLES.get(key, "")
            j = i + 1
            if j < len(body_lines):
                nxt = body_lines[j].strip()
                if nxt and not CHAPTER_RE.match(nxt) and not PART_RE.match(nxt):
                    if nxt == nxt.upper() and len(nxt) < 40:
                        subtitle = nxt
                        i = j
            current_part = {
                "id": f"part-{roman.lower()}",
                "roman": roman,
                "name": word,
                "subtitle": subtitle,
                "chapters": [],
            }
            i += 1
            continue

        m_ch = CHAPTER_RE.match(stripped)
        if m_ch:
            finish_chapter()
            num = m_ch.group(1)
            current_chapter = {
                "id": None,
                "number_label": f"Chapter {num}",
                "roman": num,
                "title": None,
                "paragraphs": [],
            }
            buf_lines = []
            pending_title = None
            j = i + 1
            if j < len(body_lines):
                nxt = body_lines[j].strip()
                if looks_like_title(nxt):
                    pending_title = nxt
                    i = j
            i += 1
            continue

        if current_chapter is not None:
            buf_lines.append(body_lines[i])
        i += 1

    finish_part()

    for pi, part in enumerate(parts):
        for ci, ch in enumerate(part["chapters"]):
            ch["id"] = f"p{pi + 1}c{ci + 1}"
            ch["part"] = part["id"]
            ch["part_roman"] = part["roman"]
            ch["part_subtitle"] = part["subtitle"]
            ch["index"] = ci + 1

    return parts


def main() -> None:
    raw_lines = (ROOT / "text.txt").read_text(encoding="utf-8").splitlines()
    body = [clean_line(l) for l in raw_lines[BODY_START:BODY_END]]
    parts = parse(body)

    out = {
        "title": "Atlas Shrugged",
        "author": "Ayn Rand",
        "dedication": "To Frank O’Connor",
        "parts": parts,
    }

    data = ROOT / "data"
    chapters_dir = data / "chapters"
    chapters_dir.mkdir(parents=True, exist_ok=True)

    (data / "book.json").write_text(json.dumps(out, ensure_ascii=False), encoding="utf-8")

    toc = {
        "title": out["title"],
        "author": out["author"],
        "dedication": out["dedication"],
        "parts": [
            {
                "id": p["id"],
                "roman": p["roman"],
                "name": p["name"],
                "subtitle": p["subtitle"],
                "chapters": [
                    {
                        "id": c["id"],
                        "number_label": c["number_label"],
                        "roman": c["roman"],
                        "title": c["title"],
                        "word_count": sum(len(x.split()) for x in c["paragraphs"]),
                    }
                    for c in p["chapters"]
                ],
            }
            for p in parts
        ],
    }
    (data / "toc.json").write_text(json.dumps(toc, ensure_ascii=False, indent=2), encoding="utf-8")

    for p in parts:
        for c in p["chapters"]:
            payload = {
                k: c[k]
                for k in (
                    "id",
                    "number_label",
                    "roman",
                    "title",
                    "part",
                    "part_roman",
                    "part_subtitle",
                    "index",
                    "paragraphs",
                )
            }
            (chapters_dir / f"{c['id']}.json").write_text(
                json.dumps(payload, ensure_ascii=False), encoding="utf-8"
            )

    n_ch = sum(len(p["chapters"]) for p in parts)
    n_words = sum(sum(len(x.split()) for x in c["paragraphs"]) for p in parts for c in p["chapters"])
    print(f"Wrote {n_ch} chapters, {n_words:,} words → data/")


if __name__ == "__main__":
    main()
