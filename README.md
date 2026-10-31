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
| Forty Ways to Look at Winston Churchill | Gretchen Rubin |
| An Open Letter to Open-Minded Progressives | Mencius Moldbug |
| A Gentle Introduction to Unqualified Reservations | Mencius Moldbug |
| The Sovereign Individual | James Dale Davidson & William Rees-Mogg |
| Dubliners | James Joyce |
| A Portrait of the Artist as a Young Man | James Joyce |
| Ulysses | James Joyce |
| Rubicon: The Last Years of the Roman Republic | Tom Holland |
| SPQR: A History of Ancient Rome | Mary Beard |
| Napoleon: A Life | Andrew Roberts |
| The Power Broker: Robert Moses and the Fall of New York | Robert A. Caro |
| The Path to Power | Robert A. Caro |
| Means of Ascent | Robert A. Caro |
| Master of the Senate | Robert A. Caro |
| The Passage of Power | Robert A. Caro |
| The Definitive FDR | James MacGregor Burns |
| Things Hidden Since the Foundation of the World | René Girard |

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

## Rebuild book data from PDFs / EPUBs

```bash
# 1) Extract sources (once)
# Poppler's pdftotext and pdftohtml commands are used for PDF extraction and cleanup.
mkdir -p raw_extract
pdftotext -layout "The Fountainhead.pdf" raw_extract/the_fountainhead.txt
pdftotext -layout "open_letter.pdf" raw_extract/open_letter.txt
pdftotext -layout "gentle_introduction_to_ur.pdf" raw_extract/gentle_introduction_to_ur.txt
# New literary, history, and biography PDFs (the names on the right are the
# source filenames expected by scripts/build_library.py).
pdftotext -layout "pdfs/_OceanofPDF.com_Dubliners_-_James_Joyce.pdf" raw_extract/Dubliners---James-Joyce.txt
pdftotext -layout "pdfs/_OceanofPDF.com_A_Portrait_of_the_Artist_as_a_Young_Man__Dubliners_-_James_Joyce.pdf" raw_extract/A-Portrait-of-the-Artist-as-a-Young-Man--Dubliners---James-Joyce.txt
pdftotext -layout "pdfs/_OceanofPDF.com_Ulysses_-_James_Joyce.pdf" raw_extract/Ulysses---James-Joyce.txt
pdftotext -layout "pdfs/_OceanofPDF.com_Rubicon_-_Tom_Holland.pdf" raw_extract/Rubicon---Tom-Holland.txt
pdftotext -layout "pdfs/_OceanofPDF.com_SPQR_-_Mary_Beard.pdf" raw_extract/SPQR---Mary-Beard.txt
pdftotext -layout "pdfs/_OceanofPDF.com_Napoleon_-_Andrew_Roberts.pdf" raw_extract/Napoleon---Andrew-Roberts.txt
pdftotext -layout "pdfs/_OceanofPDF.com_The_power_broker_-_Robert_A_Caro.pdf" raw_extract/The-power-broker---Robert-A-Caro.txt
pdftotext -layout "pdfs/_OceanofPDF.com_The_Path_to_Power_-_Robert_A_Caro.pdf" raw_extract/The-Path-to-Power---Robert-A-Caro.txt
pdftotext -layout "pdfs/_OceanofPDF.com_Robert_A_Caro_-_Means_of_Ascent.pdf" raw_extract/Robert-A-Caro---Means-of-Ascent.txt
pdftotext -layout "pdfs/_OceanofPDF.com_Master_of_the_Senate__The_Years_of_Lyndon_-_Robert_A_Caro.pdf" raw_extract/Master-of-the-Senate--The-Years-of-Lyndon---Robert-A-Caro.txt
pdftotext -layout "pdfs/_OceanofPDF.com_The_Passage_of_Power_-_Robert_A_Caro.pdf" raw_extract/The-Passage-of-Power---Robert-A-Caro.txt
pdftotext -layout "pdfs/_OceanofPDF.com_The_Definitive_FDR_-_James_MacGregor_Burns.pdf" raw_extract/The-Definitive-FDR---James-MacGregor-Burns.txt
pdftotext -layout "pdfs/_OceanofPDF.com_Things_Hidden_Since_the_Foundation_of_the_World_-_Rene_Girard.pdf" raw_extract/Things-Hidden-Since-the-Foundation-of-the-World---Rene-Girard.txt
# EPUBs (Gay Science, Churchill, Sovereign Individual) are read in place —
# copy them next to the scripts' expected filenames (see build_library.py).
# …or re-extract all as needed

# 2) Structure chapters + catalog
python3 scripts/build_library.py

# 3) Regenerate chapter plates for PDF-imported books
python3 scripts/build_imported_chapter_art.py

# 4) Regenerate per-book HTML + themes
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
assets/library/covers/<slug>.svg
shared/reader.js           # Shared reader app
shared/reader.css          # Base reader styles
books/<slug>/
  index.html               # Book cover + reader shell
  theme.css                # Unique design tokens
  meta.json
  data/toc.json
  data/chapters/*.json
scripts/build_library.py
scripts/build_imported_chapter_art.py
scripts/generate_book_pages.py
scripts/build_site.sh
.github/workflows/deploy.yml
```

## Reader features

- Per-book themes (dark / sepia / light overrides)
- Text size & line height
- Table of contents, progress bar, resume
- Keyboard: `T` contents · `S` settings · `Esc` close · `Alt+←/→` chapters
