# Jocelyn Games

Public game showcase: https://seansheaton-oss.github.io/

Static GitHub Pages website, English by default with a Chinese language switch. No dependencies, analytics, or build service required. Language preference is stored locally in the browser.

## Add or update a game

1. Add an authorized game icon to `<id>.png`.
2. Update `games.json` with the title, Chinese label, descriptions, tags and verified store package. Set `pkg` to null for games without a live Google Play listing. `ios: true` currently means **coming soon**, not a live App Store download.
3. Run `python3 build.py` to regenerate `index.html`.
4. Commit and push to the Pages source branch.

`style.css` controls the responsive layout; `site.js` handles language switching. Game descriptions and links are present in the HTML even without JavaScript.

The earlier Color Dock landing page is preserved at `/color-dock.html`. Privacy pages remain in the separate `game-privacy-policies` repository. Keep `app-ads.txt` intact for advertising verification.

## Content sources

Game names, artwork and summaries are based on the developer’s existing store assets and public Google Play listings. Color Dock and Mint iOS releases are marked coming soon pending review. Icons for live Android games match their public store listings.
