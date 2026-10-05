import { readFileSync } from "node:fs";

const files = [
  "app/about/page.tsx",
  "app/activity/page.tsx",
  "app/booking/page.tsx",
  "app/news/page.tsx",
  "app/gallery/page.tsx",
  "components/footer/Footer.tsx",
  "components/site/Benefits.tsx",
  "components/site/Testimonials.tsx",
  "components/site/FinalCta.tsx",
];

const content = readFileSync("components/i18n/content.ts", "utf8");
if (!content.includes("home:")) throw new Error("missing localized homepage content");

for (const file of files) {
  if (!readFileSync(file, "utf8").includes("useLanguage")) {
    throw new Error(`${file} does not use localized content`);
  }
}

console.log("localized homepage content is wired");
