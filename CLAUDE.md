# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

No build step — open `portfolio.html` directly in a browser, or use any static file server:

```
npx serve .
# or
python -m http.server
```

## Architecture

Three files, no framework, no dependencies beyond Google Fonts:

- **`portfolio.html`** — single-page layout with five sections (`#home`, `#about`, `#skills`, `#projects`, `#contact`) plus a fixed nav and footer.
- **`styles.css`** — all styles, driven by CSS custom properties defined in `:root` (`--mint`, `--dark`, `--card`, etc.). Reveal animations use the `.reveal` / `.in-view` class pair toggled by an `IntersectionObserver` in JS.
- **`index.js`** — three behaviours: custom cursor (dot + ring with lerp animation), hamburger nav toggle, and the `IntersectionObserver` that adds `.in-view` to `.reveal` elements as they scroll into view.

## Design system

- Accent color: `--mint: #3fffa2` — used for all highlights, glows, borders, and SVG strokes.
- Body font: **DM Sans** (weight 300/400/500). Headings: **Syne** (weight 600/700/800).
- All section backgrounds stay on `--black: #050505`; cards use `--card: #111111`.
- Skill bar widths are set inline via `style="width: XX%"` on `.skill-bar-fill`.
- SVG icons for skills are inline in the HTML and share the same `#3fffa2` stroke/fill.
