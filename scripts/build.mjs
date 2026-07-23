import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import {
  cpSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { build } from "esbuild";

const root = process.cwd();
const dist = join(root, "dist");
const assets = join(dist, "assets");
const maxDistBytes = 12 * 1024 * 1024;

function fingerprint(buffer) {
  return createHash("sha256").update(buffer).digest("hex").slice(0, 10);
}

function writeHashedAsset(prefix, extension, contents) {
  const buffer = Buffer.isBuffer(contents) ? contents : Buffer.from(contents);
  const name = `${prefix}-${fingerprint(buffer)}.${extension}`;
  writeFileSync(join(assets, name), buffer);
  return `./assets/${name}`;
}

function directorySize(path) {
  return readdirSync(path, { withFileTypes: true }).reduce((total, entry) => {
    const entryPath = join(path, entry.name);
    return total + (entry.isDirectory() ? directorySize(entryPath) : statSync(entryPath).size);
  }, 0);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(assets, { recursive: true });
mkdirSync(join(dist, "waiver"), { recursive: true });

const cssTemp = join(assets, "site.css");
execFileSync(
  join(root, "node_modules", ".bin", "tailwindcss"),
  ["-c", "tailwind.config.cjs", "-i", "styles/input.css", "-o", cssTemp, "--minify"],
  {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, BROWSERSLIST_IGNORE_OLD_DATA: "true" },
  },
);
const cssHref = writeHashedAsset("site", "css", readFileSync(cssTemp));
rmSync(cssTemp);

const appResult = await build({
  entryPoints: [join(root, "js", "app.js")],
  bundle: true,
  format: "esm",
  minify: true,
  target: ["es2020"],
  write: false,
});
const appSrc = writeHashedAsset("app", "js", appResult.outputFiles[0].contents);
const petiteSrc = writeHashedAsset(
  "petite-vue",
  "js",
  readFileSync(join(root, "js", "petite-vue.iife.js")),
);

const index = readFileSync(join(root, "index.html"), "utf8")
  .replace("./assets/site.css", cssHref)
  .replace("./assets/petite-vue.iife.js", petiteSrc)
  .replace("./assets/app.js", appSrc);
writeFileSync(join(dist, "index.html"), index);

const waiverCssHref = cssHref.replace("./assets/", "../assets/");
const waiver = readFileSync(join(root, "waiver", "index.html"), "utf8").replace(
  "../assets/site.css",
  waiverCssHref,
);
writeFileSync(join(dist, "waiver", "index.html"), waiver);

cpSync(join(root, "404.html"), join(dist, "404.html"));
cpSync(join(root, "images"), join(dist, "images"), { recursive: true });

const distBytes = directorySize(dist);
if (distBytes > maxDistBytes) {
  throw new Error(
    `Production build is ${(distBytes / 1024 / 1024).toFixed(2)} MiB; the limit is 12 MiB.`,
  );
}

console.log(`Built dist: ${(distBytes / 1024 / 1024).toFixed(2)} MiB`);
