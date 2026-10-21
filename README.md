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

The production build is written to `dist/`. The build also copies the existing standalone pages and their assets into `dist/` so they remain available while they are migrated.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages when changes are pushed to `main`.

Before the first workflow deployment, open the repository's **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**. This is required because the React entry page must be built before GitHub Pages serves it.

## Current language support

The landing page lets visitors choose and save a preferred language. Until reviewed translations are added, site content remains in English and the landing page says so; selecting another language does not claim to translate the existing pages.
