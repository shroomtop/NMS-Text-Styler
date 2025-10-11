# NMS Name Styler — S420 PRIME

Single-file, offline-first No Man’s Sky name composer with real HUD skin, strict CSP, parser (angle/bracket), icon placement, presets, batch builder, packs, diagnostics, and share-links that even work from `file://`.

**Why this repo exists:** `index.html` is the app (zero deps). This repo adds docs, sample packs, tests, and an optional separate PWA manifest/service worker if you don’t want the inline ones.

## Quick Start
1. Open `index.html` directly (double-click, no server needed).
2. Type a name (≤ 64 visible chars).
3. Choose color & syntax (game prefers **[bracket]**).
4. Add icons between words (tap **＋**, drag chips).
5. Toggle “Color applies to icons” as needed.
6. Copy Raw → paste into the in-game rename textbox.

## Packs
- Export the current context pack (JSON) or import from `packs/sample-pack.json`.
- Packs merge on label; duplicates are replaced.

## Self-tests
- Use **Run Tests** in the UI for round-trip checks.
- `tests/smoke.test.json` mirrors those cases for CI or manual verification.

## GitHub Pages
1. Commit this repo.
2. Add **.nojekyll** (already included).
3. Enable Pages → Deploy from “main” → `/ (root)`.
4. Visit the Pages URL; SW will cache assets for offline use.

## Optional standalone PWA
The app already embeds a `data:` manifest and a `blob:`-registered SW for single-file usage. If you prefer file-based PWA:
- Edit the toggles in `index.html` to *not* register the inline SW (or leave it—it no-ops when `pwa/` is present).
- Serve over HTTPS (required for SW).
- Use `pwa/manifest.webmanifest` and `pwa/sw.js`.

## Keyboard & Xbox Remote
See the in-app **Instructions** panel for gamepad keys and Xbox app paste steps.

## License
MIT — see `LICENSE`.
