import { readFile } from "node:fs/promises";

for (const [file, expected] of [["components/site/SectionHeading.tsx", "eyebrow?: string"], ["components/site/FeatureMeta.tsx", "aria-hidden"], ["components/site/Reveal.tsx", "motion-reduce:transform-none"]]) {
  const contents = await readFile(file, "utf8");
  if (!contents.includes(expected)) throw new Error(`${file} must include ${expected}`);
}

console.log("Site primitive checks passed.");
