import { readFile } from "node:fs/promises";

for (const [file, expected] of [["components/site/Benefits.tsx", "Everything You Need"], ["components/site/Testimonials.tsx", "Loved by Weekend Explorers"], ["components/site/FinalCta.tsx", "Your Next Escape"], ["app/news/page.tsx", "Stories From The Outdoors"], ["app/gallery/page.tsx", "Life at Camp"]]) {
  if (!(await readFile(file, "utf8")).includes(expected)) throw new Error(`${file} must include ${expected}`);
}

console.log("Homepage finish checks passed.");
