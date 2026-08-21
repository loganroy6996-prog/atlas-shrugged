#!/usr/bin/env python3
"""Generate books/<slug>/index.html and theme.css for each book."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BOOKS = ROOT / "books"

# Unique visual identity per book (CSS variable overrides + cover flourishes)
THEMES: dict[str, str] = {
    "atlas-shrugged": """
/* Atlas Shrugged — industrial gold on iron */
:root, html[data-theme="dark"] {
  --bg: #0b0a09;
  --bg-elevated: #141210;
  --bg-soft: #1a1714;
  --surface: #1e1b17;
  --border: rgba(212, 175, 100, 0.14);
  --border-strong: rgba(212, 175, 100, 0.28);
  --text: #ebe4d6;
  --text-muted: #9a9080;
  --text-faint: #6b6358;
  --accent: #d4af64;
  --accent-soft: rgba(212, 175, 100, 0.12);
  --accent-hover: #e4c57a;
  --copper: #b87333;
  --reader-max: 52rem;
}
.cover-grid {
  background-image:
    linear-gradient(rgba(212, 175, 100, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 100, 0.05) 1px, transparent 1px);
  background-size: 64px 64px;
}
.cover-glow {
  background: radial-gradient(ellipse, rgba(212, 175, 100, 0.14) 0%, rgba(184, 115, 51, 0.06) 40%, transparent 70%);
}
.title-line.accent { color: var(--accent); font-style: italic; }
""",
    "the-fountainhead": """
/* The Fountainhead — granite, glass, blueprint */
:root, html[data-theme="dark"] {
  --bg: #0e1218;
  --bg-elevated: #151b24;
  --bg-soft: #1a2230;
  --surface: #1e2836;
  --border: rgba(107, 154, 196, 0.16);
  --border-strong: rgba(107, 154, 196, 0.32);
  --text: #e6edf5;
  --text-muted: #8b9bb0;
  --text-faint: #5c6b7e;
  --accent: #6b9ac4;
  --accent-soft: rgba(107, 154, 196, 0.12);
  --accent-hover: #8fb6d9;
  --copper: #94a3b8;
  --reader-max: 52rem;
}
html[data-theme="sepia"] {
  --bg: #eef2f6;
  --bg-elevated: #e4eaf1;
  --bg-soft: #d8e0ea;
  --surface: #ffffff;
  --text: #1a2330;
  --text-muted: #5a6a7c;
  --accent: #3d6f99;
  --border: rgba(61, 111, 153, 0.15);
}
.cover-grid {
  background-image:
    linear-gradient(rgba(107, 154, 196, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(107, 154, 196, 0.07) 1px, transparent 1px);
  background-size: 48px 48px;
}
.cover-glow {
  background: radial-gradient(ellipse, rgba(107, 154, 196, 0.18) 0%, transparent 65%);
}
.cover-title { letter-spacing: -0.03em; }
.title-line.accent { font-style: normal; font-weight: 600; color: var(--accent); }
.chapter-text p:first-of-type::first-letter {
  color: var(--accent);
  border-left: 3px solid var(--accent);
  padding-left: 0.15em;
}
""",
    "beyond-good-and-evil": """
/* Beyond Good and Evil — violet lightning, free spirit */
:root, html[data-theme="dark"] {
  --bg: #0c0a12;
  --bg-elevated: #15121f;
  --bg-soft: #1c1829;
  --surface: #221e32;
  --border: rgba(167, 139, 250, 0.16);
  --border-strong: rgba(167, 139, 250, 0.32);
  --text: #f0eafc;
  --text-muted: #a89bc4;
  --text-faint: #6f6488;
  --accent: #a78bfa;
  --accent-soft: rgba(167, 139, 250, 0.12);
  --accent-hover: #c4b5fd;
  --copper: #c084fc;
  --reader-max: 50rem;
}
.cover-grid {
  background-image: repeating-linear-gradient(
    -12deg, transparent, transparent 40px,
    rgba(167, 139, 250, 0.04) 40px, rgba(167, 139, 250, 0.04) 41px
  );
}
.cover-glow {
  background: radial-gradient(ellipse, rgba(167, 139, 250, 0.2) 0%, rgba(192, 132, 252, 0.08) 40%, transparent 70%);
}
.title-line.accent { color: var(--accent); font-style: italic; }
.rule-diamond { border-radius: 1px; box-shadow: 0 0 12px var(--accent); }
""",
    "thus-spoke-zarathustra": """
/* Zarathustra — mountain dusk, amber sun */
:root, html[data-theme="dark"] {
  --bg: #100d0a;
  --bg-elevated: #1a1510;
  --bg-soft: #221c15;
  --surface: #2a2218;
  --border: rgba(232, 168, 56, 0.16);
  --border-strong: rgba(232, 168, 56, 0.3);
  --text: #f5ead6;
  --text-muted: #b09a78;
  --text-faint: #7a6850;
  --accent: #e8a838;
  --accent-soft: rgba(232, 168, 56, 0.12);
  --accent-hover: #f0c060;
  --copper: #d97706;
  --reader-max: 48rem;
}
.cover-bg {
  background:
    linear-gradient(180deg, #1a1420 0%, transparent 40%),
    linear-gradient(0deg, #2a1810 0%, transparent 35%);
}
.cover-glow {
  background: radial-gradient(ellipse at 50% 30%, rgba(232, 168, 56, 0.25) 0%, rgba(217, 119, 6, 0.08) 35%, transparent 65%);
  height: 480px;
}
.cover-grid { opacity: 0.35; background-size: 80px 80px; }
.title-line.accent { color: var(--accent); font-style: italic; font-weight: 400; }
.chapter-text { font-size: calc(var(--text-size) * 1.02); }
""",
    "gay-science": """
/* The Gay Science — Mediterranean sea & sky */
:root, html[data-theme="dark"] {
  --bg: #071318;
  --bg-elevated: #0c1c24;
  --bg-soft: #122830;
  --surface: #163038;
  --border: rgba(56, 189, 248, 0.16);
  --border-strong: rgba(56, 189, 248, 0.3);
  --text: #e0f2fe;
  --text-muted: #7dd3fc;
  --text-faint: #4a8aa8;
  --accent: #38bdf8;
  --accent-soft: rgba(56, 189, 248, 0.12);
  --accent-hover: #7dd3fc;
  --copper: #fbbf24;
  --reader-max: 50rem;
}
html[data-theme="light"] {
  --bg: #f0f9ff;
  --text: #0c4a6e;
  --accent: #0284c7;
  --bg-elevated: #ffffff;
}
.cover-glow {
  background: radial-gradient(ellipse, rgba(56, 189, 248, 0.22) 0%, rgba(251, 191, 36, 0.08) 45%, transparent 70%);
}
.cover-grid {
  background-image: radial-gradient(rgba(56, 189, 248, 0.12) 1px, transparent 1px);
  background-size: 28px 28px;
}
.title-line.accent { color: #fbbf24; font-style: italic; }
.cover-eyebrow { color: var(--accent); }
""",
    "twilight": """
/* Twilight of the Idols — hammer, bronze, ash */
:root, html[data-theme="dark"] {
  --bg: #12100e;
  --bg-elevated: #1c1814;
  --bg-soft: #26201a;
  --surface: #2e261e;
  --border: rgba(196, 165, 116, 0.16);
  --border-strong: rgba(196, 165, 116, 0.3);
  --text: #f0e6d6;
  --text-muted: #a89880;
  --text-faint: #706050;
  --accent: #c4a574;
  --accent-soft: rgba(196, 165, 116, 0.12);
  --accent-hover: #ddc09a;
  --copper: #a16207;
  --reader-max: 48rem;
}
.cover-glow {
  background: radial-gradient(ellipse, rgba(196, 165, 116, 0.16) 0%, transparent 60%);
}
.cover-grid {
  background-image: linear-gradient(90deg, rgba(196, 165, 116, 0.06) 1px, transparent 1px);
  background-size: 32px 100%;
}
.title-line.accent { letter-spacing: 0.04em; font-style: normal; text-transform: uppercase; font-size: 0.55em; }
.meta-title { text-transform: uppercase; letter-spacing: 0.06em; font-size: clamp(1.5rem, 4vw, 2.2rem); }
""",
    "will-to-power": """
/* Will to Power — crimson iron */
:root, html[data-theme="dark"] {
  --bg: #0c0808;
  --bg-elevated: #160e0e;
  --bg-soft: #1f1414;
  --surface: #281818;
  --border: rgba(225, 29, 72, 0.16);
  --border-strong: rgba(225, 29, 72, 0.3);
  --text: #fce8ec;
  --text-muted: #c4909a;
  --text-faint: #7a5058;
  --accent: #e11d48;
  --accent-soft: rgba(225, 29, 72, 0.12);
  --accent-hover: #fb7185;
  --copper: #9f1239;
  --reader-max: 50rem;
}
.cover-glow {
  background: radial-gradient(ellipse, rgba(225, 29, 72, 0.18) 0%, rgba(159, 18, 57, 0.08) 40%, transparent 70%);
}
.cover-grid {
  background-image:
    linear-gradient(rgba(225, 29, 72, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(225, 29, 72, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
}
.title-line.accent { color: var(--accent); font-weight: 600; font-style: normal; }
.progress-fill { background: linear-gradient(90deg, #9f1239, #e11d48); }
""",
    "being-and-time": """
/* Being and Time — forest manuscript */
:root, html[data-theme="dark"] {
  --bg: #0a100c;
  --bg-elevated: #101a14;
  --bg-soft: #16241c;
  --surface: #1c2c22;
  --border: rgba(74, 222, 128, 0.14);
  --border-strong: rgba(74, 222, 128, 0.28);
  --text: #e4f0e8;
  --text-muted: #8aab96;
  --text-faint: #5a7564;
  --accent: #4ade80;
  --accent-soft: rgba(74, 222, 128, 0.1);
  --accent-hover: #86efac;
  --copper: #a3e635;
  --reader-max: 50rem;
  --font-serif: "Cormorant Garamond", "Palatino Linotype", Palatino, "Times New Roman", serif;
}
html[data-theme="sepia"] {
  --bg: #f3f0e6;
  --text: #1a2a1c;
  --accent: #2f6b45;
  --bg-elevated: #ebe6d6;
}
.cover-glow {
  background: radial-gradient(ellipse, rgba(74, 222, 128, 0.12) 0%, transparent 65%);
}
.cover-grid {
  background-image: repeating-linear-gradient(
    0deg, transparent, transparent 27px,
    rgba(74, 222, 128, 0.05) 27px, rgba(74, 222, 128, 0.05) 28px
  );
}
.title-line.accent { font-style: italic; color: var(--accent); }
.chapter-text p { text-align: justify; hyphens: auto; }
""",
    "forty-ways-to-look-at-churchill": """
/* Forty Ways — wartime brass, newsprint, cigar smoke */
:root, html[data-theme="dark"] {
  --bg: #0f1410;
  --bg-elevated: #161c16;
  --bg-soft: #1e261e;
  --surface: #243024;
  --border: rgba(166, 140, 107, 0.16);
  --border-strong: rgba(166, 140, 107, 0.32);
  --text: #f0e8d8;
  --text-muted: #b8a898;
  --text-faint: #7a7060;
  --accent: #a68c6b;
  --accent-soft: rgba(166, 140, 107, 0.12);
  --accent-hover: #c4a882;
  --copper: #c9a86a;
  --reader-max: 50rem;
}
html[data-theme="sepia"] {
  --bg: #f4efe2;
  --bg-elevated: #ede6d3;
  --bg-soft: #e0d8c0;
  --surface: #ffffff;
  --text: #2a2418;
  --text-muted: #6b6254;
  --accent: #8a7040;
  --border: rgba(138, 112, 64, 0.18);
}
html[data-theme="light"] {
  --bg: #fafaf8;
  --text: #1a1814;
  --accent: #8a7040;
  --bg-elevated: #ffffff;
}
.cover-grid {
  background-image:
    linear-gradient(rgba(166, 140, 107, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(166, 140, 107, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
}
.cover-glow {
  background: radial-gradient(ellipse at 50% 35%, rgba(166, 140, 107, 0.18) 0%, rgba(120, 140, 110, 0.06) 42%, transparent 70%);
}
.title-line.accent { color: var(--accent); font-style: italic; font-weight: 400; }
.cover-eyebrow { color: var(--accent); letter-spacing: 0.08em; }
.meta-title { text-transform: none; letter-spacing: -0.01em; }
.chapter-text blockquote { border-left-color: var(--accent); }
""",
    "infinite-jest": """
/* Infinite Jest — court green, entertainment yellow, maximalist */
:root, html[data-theme="dark"] {
  --bg: #0a120c;
  --bg-elevated: #111c14;
  --bg-soft: #18261c;
  --surface: #1e3024;
  --border: rgba(163, 230, 53, 0.16);
  --border-strong: rgba(163, 230, 53, 0.3);
  --text: #ecfcd9;
  --text-muted: #a3c47a;
  --text-faint: #6a8550;
  --accent: #a3e635;
  --accent-soft: rgba(163, 230, 53, 0.12);
  --accent-hover: #bef264;
  --copper: #facc15;
  --reader-max: 54rem;
}
html[data-theme="light"] {
  --bg: #f7fee7;
  --text: #1a2e05;
  --accent: #65a30d;
  --bg-elevated: #ffffff;
}
.cover-glow {
  background:
    radial-gradient(ellipse at 30% 40%, rgba(163, 230, 53, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 50%, rgba(250, 204, 21, 0.1) 0%, transparent 45%);
}
.cover-grid {
  background-image:
    linear-gradient(rgba(163, 230, 53, 0.06) 2px, transparent 2px),
    linear-gradient(90deg, rgba(163, 230, 53, 0.06) 2px, transparent 2px);
  background-size: 100px 100px;
}
.title-line.accent { color: #facc15; font-style: italic; }
.cover-title { font-size: clamp(3rem, 10vw, 5.5rem); }
.chapter-text { font-size: calc(var(--text-size) * 0.98); line-height: calc(var(--leading) * 1.02); }
""",
}

# Map meta theme field to THEMES key
THEME_KEY = {
    "atlas-shrugged": "atlas-shrugged",
    "fountainhead": "the-fountainhead",
    "beyond-good-and-evil": "beyond-good-and-evil",
    "zarathustra": "thus-spoke-zarathustra",
    "gay-science": "gay-science",
    "twilight": "twilight",
    "will-to-power": "will-to-power",
    "being-and-time": "being-and-time",
    "infinite-jest": "infinite-jest",
    "forty-ways-to-look-at-churchill": "forty-ways-to-look-at-churchill",
}


def book_html(meta: dict) -> str:
    slug = meta["slug"]
    title = meta["title"]
    author = meta["author"]
    tagline = meta.get("tagline") or meta.get("blurb") or ""
    dedication = meta.get("dedication") or ""
    # Split title for two-line display when possible
    words = title.split()
    if len(words) >= 2 and len(title) > 12:
        # last word as accent line if short title parts
        if title.startswith("The "):
            line1, line2 = "The", title[4:]
        elif title.startswith("Thus "):
            line1, line2 = "Thus Spoke", "Zarathustra"
        elif " " in title:
            mid = len(words) // 2
            line1 = " ".join(words[:mid])
            line2 = " ".join(words[mid:])
        else:
            line1, line2 = title, ""
    else:
        line1, line2 = title, ""

    accent_line = (
        f'<span class="title-line accent">{line2}</span>' if line2 else ""
    )
    ded_html = (
        f'<p class="cover-dedication" id="cover-dedication">{dedication}</p>'
        if dedication
        else '<p class="cover-dedication" id="cover-dedication" hidden></p>'
    )

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="{title} by {author} — a clean literary reading experience." />
  <title>{title} — {author}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../shared/reader.css" />
  <link rel="stylesheet" href="theme.css" />
</head>
<body>
  <div id="app">
    <section id="cover" class="view active" aria-label="Cover">
      <div class="cover-bg" aria-hidden="true">
        <div class="cover-grid"></div>
        <div class="cover-glow"></div>
      </div>
      <div class="cover-content">
        <p class="cover-eyebrow">A work by</p>
        <h1 class="cover-title">
          <span class="title-line" id="cover-title-main">{line1}</span>
          {accent_line}
        </h1>
        <div class="cover-rule" aria-hidden="true"><span class="rule-diamond"></span></div>
        <p class="cover-author" id="cover-author">{author}</p>
        {ded_html}
        <p class="cover-quote" id="cover-quote">{tagline}</p>
        <div class="cover-actions">
          <button type="button" class="btn btn-primary" data-action="begin">Begin Reading</button>
          <button type="button" class="btn btn-ghost" data-action="open-toc">Table of Contents</button>
          <button type="button" class="btn btn-ghost" data-action="library">← Library</button>
        </div>
        <p class="cover-continue hidden" id="cover-continue">
          <button type="button" class="link-btn" data-action="resume">Continue where you left off →</button>
        </p>
      </div>
      <footer class="cover-footer">
        <span id="cover-footer-meta"></span>
      </footer>
    </section>

    <section id="reader" class="view" aria-label="Reader" hidden>
      <header class="reader-header">
        <div class="header-left">
          <button type="button" class="icon-btn" id="btn-library" title="Library" aria-label="Library">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19V5a1 1 0 0 1 1-1h4l2 2h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/></svg>
          </button>
          <button type="button" class="icon-btn" id="btn-home" title="Cover" aria-label="Cover">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"/></svg>
          </button>
          <button type="button" class="icon-btn" id="btn-toc" title="Contents" aria-label="Table of contents">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
          </button>
        </div>
        <div class="header-center">
          <p class="header-part" id="header-part"></p>
          <h2 class="header-chapter" id="header-chapter"></h2>
        </div>
        <div class="header-right">
          <button type="button" class="icon-btn" id="btn-settings" title="Reading settings" aria-label="Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          </button>
        </div>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" id="progress-fill"></div>
        </div>
      </header>

      <article class="reader-body" id="reader-body">
        <div class="chapter-meta" id="chapter-meta">
          <p class="meta-part" id="meta-part"></p>
          <h1 class="meta-title" id="meta-title"></h1>
          <p class="meta-number" id="meta-number"></p>
          <div class="meta-rule" aria-hidden="true"><span></span></div>
        </div>
        <div class="chapter-text" id="chapter-text"></div>
        <nav class="chapter-nav" id="chapter-nav">
          <button type="button" class="nav-btn prev" id="btn-prev" disabled>
            <span class="nav-label">Previous</span>
            <span class="nav-title" id="prev-title"></span>
          </button>
          <button type="button" class="nav-btn next" id="btn-next" disabled>
            <span class="nav-label">Next</span>
            <span class="nav-title" id="next-title"></span>
          </button>
        </nav>
      </article>
    </section>
  </div>

  <aside id="toc-drawer" class="drawer" aria-hidden="true" aria-label="Table of contents">
    <div class="drawer-backdrop" data-action="close-toc"></div>
    <div class="drawer-panel">
      <div class="drawer-header">
        <div>
          <p class="drawer-eyebrow">{title}</p>
          <h2>Contents</h2>
        </div>
        <button type="button" class="icon-btn" data-action="close-toc" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="drawer-body" id="toc-list"></div>
    </div>
  </aside>

  <div id="settings-panel" class="settings" aria-hidden="true" role="dialog" aria-labelledby="settings-title">
    <button type="button" class="settings-backdrop" id="settings-backdrop" aria-label="Close settings"></button>
    <div class="settings-card" id="settings-card">
      <div class="settings-header">
        <h3 id="settings-title">Reading Settings</h3>
        <button type="button" class="icon-btn" id="settings-close" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <div class="settings-row">
        <span>Theme</span>
        <div class="seg" role="group" aria-label="Theme">
          <button type="button" class="seg-btn" data-pref="theme" data-value="dark">Dark</button>
          <button type="button" class="seg-btn" data-pref="theme" data-value="sepia">Sepia</button>
          <button type="button" class="seg-btn" data-pref="theme" data-value="light">Light</button>
        </div>
      </div>
      <div class="settings-row">
        <span>Text size</span>
        <div class="seg" role="group" aria-label="Text size">
          <button type="button" class="seg-btn" data-pref="size" data-value="sm">A</button>
          <button type="button" class="seg-btn" data-pref="size" data-value="md">A</button>
          <button type="button" class="seg-btn" data-pref="size" data-value="lg">A</button>
          <button type="button" class="seg-btn" data-pref="size" data-value="xl">A</button>
        </div>
      </div>
      <div class="settings-row">
        <span>Line height</span>
        <div class="seg" role="group" aria-label="Line height">
          <button type="button" class="seg-btn" data-pref="leading" data-value="tight">Tight</button>
          <button type="button" class="seg-btn" data-pref="leading" data-value="normal">Normal</button>
          <button type="button" class="seg-btn" data-pref="leading" data-value="loose">Loose</button>
        </div>
      </div>
    </div>
  </div>

  <div id="loading" class="loading hidden" aria-live="polite">
    <div class="loading-spinner"></div>
    <p>Loading chapter…</p>
  </div>

  <script>
    window.BOOK_CONFIG = {{
      storageKey: "reader-{slug}",
      libraryHref: "../../index.html",
      tagline: {json.dumps(tagline)}
    }};
  </script>
  <script src="../../shared/reader.js"></script>
</body>
</html>
"""


def main() -> None:
    catalog = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
    for meta in catalog["books"]:
        slug = meta["slug"]
        book_dir = BOOKS / slug
        book_dir.mkdir(parents=True, exist_ok=True)
        theme_key = THEME_KEY.get(meta.get("theme", slug), slug)
        css = THEMES.get(theme_key, THEMES["atlas-shrugged"])
        (book_dir / "theme.css").write_text(css.strip() + "\n", encoding="utf-8")
        (book_dir / "index.html").write_text(book_html(meta), encoding="utf-8")
        print(f"  ✓ {slug}/index.html + theme.css")
    print("Done generating book pages.")


if __name__ == "__main__":
    main()
