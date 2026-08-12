// Post-processing for a static GitHub Pages deployment.
// - copies index.html to 404.html so deep links (e.g. /servicii/sudura-subacvatica)
//   still boot the app if GitHub Pages cannot find a prerendered file
// - adds .nojekyll so files/folders starting with "_" are served
import { copyFile, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");

await access(join(dist, "index.html"));
await copyFile(join(dist, "index.html"), join(dist, "404.html"));
await writeFile(join(dist, ".nojekyll"), "");

console.log("[postbuild] dist/404.html and dist/.nojekyll written");
