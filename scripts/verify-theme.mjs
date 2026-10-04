import { readFile } from "node:fs/promises";

const checks = [
  ["app/globals.css", "--forest: #1F5D42;"],
  ["app/globals.css", "--warm-ivory: #F7F5EE;"],
  ["app/globals.css", "prefers-reduced-motion"],
  ["app/globals.css", ":focus-visible"],
  ["app/layout.tsx", "Manrope"],
  ["app/layout.tsx", "Inter"],
  ["next.config.ts", "images.unsplash.com"],
];

for (const [file, expected] of checks) {
  const contents = await readFile(file, "utf8");
  if (!contents.includes(expected)) {
    throw new Error(`${file} must include ${expected}`);
  }
}

console.log("Theme configuration checks passed.");
