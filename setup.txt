# Flowd Launcher website

A responsive static landing page for Flowd Launcher.

## Preview locally
Open `index.html` in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Configure downloads
Open `script.js` and set the real release URLs:

```js
const DOWNLOADS = {
  windows: 'https://your-domain/Flowd-Setup.exe',
  linux: 'https://your-domain/Flowd.AppImage'
};
```

The download buttons intentionally do not point to invented files. Until URLs are configured, they explain that the release is not published yet.

## Deploy
Upload the contents of this folder to GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any static web host.

The page currently uses Google Fonts. If you want fully offline assets, download and self-host the fonts.

## Project status and copyright

The website identifies Flowd Launcher as an open-source project and displays the following copyright notice: © 2026 Flowd Launcher. All rights reserved. The copyright notice does not itself grant an open-source license. Add the project's chosen license (for example, a `LICENSE` file in the source repository) before publishing the source as open source.

## Branding

The supplied Flowd artwork is used as the navigation/footer logo and the browser favicon (`assets/flowd-logo.png`).
