import { mkdir } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import sharp from "sharp";

const [inputArg, outputArg, maxEdgeArg = "1200", qualityArg = "78"] = process.argv.slice(2);

if (!inputArg || !outputArg || extname(outputArg).toLowerCase() !== ".webp") {
  console.error(
    "Usage: npm run optimize:image -- <input> <output.webp> [max-edge=1200] [quality=78]",
  );
  process.exit(1);
}

const input = resolve(inputArg);
const output = resolve(outputArg);
const maxEdge = Number(maxEdgeArg);
const quality = Number(qualityArg);

if (!Number.isFinite(maxEdge) || maxEdge <= 0 || !Number.isFinite(quality)) {
  throw new Error("max-edge and quality must be positive numbers.");
}

await mkdir(dirname(output), { recursive: true });
await sharp(input)
  .rotate()
  .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
  .webp({ quality, effort: 5 })
  .toFile(output);

console.log(`Optimized ${input} -> ${output}`);
