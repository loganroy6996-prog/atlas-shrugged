# Literary Library

A multi-volume reading site: cleaned text, chapter navigation, and a distinct visual design for each book.

## Volumes

| Book | Author |
|------|--------|
| Atlas Shrugged | Ayn Rand |
| The Fountainhead | Ayn Rand |
| Beyond Good and Evil | Friedrich Nietzsche |
| Thus Spoke Zarathustra | Friedrich Nietzsche |
| The Gay Science | Friedrich Nietzsche |
| Twilight of the Idols | Friedrich Nietzsche |
| The Will to Power | Friedrich Nietzsche |
| Being and Time | Martin Heidegger |
| Infinite Jest | David Foster Wallace |

Publisher marketing, OceanofPDF marks, and other non-book material are stripped where possible.

## Run locally

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) for the library menu.

Deploy-style artifact:

```bash
./scripts/build_site.sh
python3 -m http.server 8080 --directory _site
```

## Rebuild book data from PDFs

```bash
# 1) Extract PDFs (once)
mkdir -p raw_extract
pdftotext -layout "The Fountainhead.pdf" raw_extract/the_fountainhead.txt
# …or re-extract all as needed

# 2) Structure chapters + catalog
python3 scripts/build_library.py

# 3) Regenerate per-book HTML + themes
python3 scripts/generate_book_pages.py
```

## GitHub Pages

Deploy is automatic via **GitHub Actions** on push to `main` / `master`.

1. **Settings → Pages → Source → GitHub Actions**
2. Push (or run the workflow manually)

Site URL:

```text
https://<username>.github.io/<repo>/
```

PDFs and `raw_extract/` are gitignored; only cleaned chapter JSON and the UI are deployed.

## Structure

```text
index.html                 # Library home
catalog.json               # Book list for the menu
css/library.css
shared/reader.js           # Shared reader app
shared/reader.css          # Base reader styles
books/<slug>/
  index.html               # Book cover + reader shell
  theme.css                # Unique design tokens
  meta.json
  data/toc.json
  data/chapters/*.json
scripts/build_library.py
scripts/generate_book_pages.py
scripts/build_site.sh
.github/workflows/deploy.yml
```

## Reader features

- Per-book themes (dark / sepia / light overrides)
- Text size & line height
- Table of contents, progress bar, resume
- Keyboard: `T` contents · `S` settings · `Esc` close · `Alt+←/→` chapters
