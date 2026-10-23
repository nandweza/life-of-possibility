import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const legacyRoutes = {
  "home.html": ["/start", "Start here"],
  "about.html": ["/about", "About"],
  "contact.html": ["/contact", "Contact"],
  "education.html": ["/education", "Education"],
  "livingwell.html": ["/living-well", "Living well"],
  "scholarships.html": ["/scholarships", "Scholarships"],
  "jp/about.html": ["/about", "About"],
};

await Promise.all(
  Object.entries(legacyRoutes).map(async ([filename, [route, label]]) => {
    const target = `${filename.includes("/") ? "../" : "./"}#${route}`;
    const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0;url=${target}">
    <title>${label} | How to America</title>
  </head>
  <body>
    <p>This page has moved. <a href="${target}">Continue to ${label}</a>.</p>
    <script>window.location.replace(${JSON.stringify(target)});</script>
  </body>
</html>
`;

    const outputPath = resolve(root, "dist", filename);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, page);
  }),
);
