# How to America

A practical, interactive guide to finding your next step in the United States. The site is being migrated from standalone HTML pages to React, with existing pages preserved during the transition.

## Run locally

Requirements: Node.js 20.19 or newer and npm.

```sh
npm ci
npm run dev
```

Vite prints the local URL. The app uses the `/life-of-possibility/` base path to match its GitHub Pages project site.

## Build

```sh
npm run build
npm run preview
```

The production build is written to `dist/`. The React app includes the start guide, education directory, living-well guidance, scholarships, about, and contact pages. Existing page URLs (`home.html`, `education.html`, and the other legacy page links) redirect to their React routes.

The language preference is available throughout the app. Page content is currently in English; selecting another language saves the preference but does not translate page content.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages when changes are pushed to `main`.

Before the first workflow deployment, open the repository's **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**. This is required because the React entry page must be built before GitHub Pages serves it.

## Current language support

The landing page lets visitors choose and save a preferred language. Until reviewed translations are added, site content remains in English and the landing page says so; selecting another language does not claim to translate the existing pages.
