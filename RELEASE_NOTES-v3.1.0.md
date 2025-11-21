## NMS Text Styler v3.1.0 — Singularity HUD

First public GitHub release of the NMS Name Styler / Text Workbench.

### Highlights

- 🔤 **HUD-accurate styling**
  - Authentic No Man’s Sky HUD skin and terminology (ATLAS ARCHIVE, STARSHIP, modules).
  - 0/64 memory counter aligned with in-game name limits.

- 🧠 **Single-file, offline-first**
  - `index.html` is the entire app: no build step, no CDN, works from `file://`.
  - Service worker and manifest support optional PWA behaviour for HTTPS hosting.

- 🎨 **Color + icon pipeline**
  - Bracket/angle syntax parsing for in-game color codes.
  - Toggle to apply color to icons and text independently.
  - Drag-and-drop icon chips for ordering and composition.

- 📦 **Packs & presets**
  - Import/export JSON packs (see `sample-pack.json`).
  - Packs merge on label so you can ship community icon sets without duplicates.
  - UI “Presets” panel for quickly reusing favourite name layouts.

- ✅ **Self-tests / diagnostics**
  - In-app “Run tests” for round-trip verification of styling and export.
  - `smoke.test.json` mirrors the key cases for CI and manual checks.

- 🌐 **GitHub Pages ready**
  - `.nojekyll` included.
  - Works as a static site deployed from the `main` branch root.
  - Service worker caches assets for fast repeat loads.

### Files in this release

- `index.html` — main single-file app
- `favicon.svg` — HUD-style icon
- `manifest.webmanifest` — optional PWA manifest
- `sw.js` — optional service worker
- `sample-pack.json` — example icon/text pack
- `smoke.test.json` — smoke test scenarios
- `.nojekyll` — Pages config
- `LICENSE` — MIT
- `README.md` — usage and architecture notes

MIT licensed. See `LICENSE` for details.
