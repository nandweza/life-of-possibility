import { cp } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const legacyEntries = [
  "about.html",
  "contact.html",
  "education.html",
  "home.html",
  "livingwell.html",
  "scholarships.html",
  "styles.css",
  "assets",
  "Js",
  "jp",
];

await Promise.all(
  legacyEntries.map((entry) =>
    cp(resolve(root, entry), resolve(root, "dist", entry), {
      recursive: true,
      force: true,
    }),
  ),
);