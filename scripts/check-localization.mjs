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

const bookingForm = readFileSync("components/booking-form/BookingForm.tsx", "utf8");
if (!bookingForm.includes("t.selectDate") || !bookingForm.includes("t.tent")) {
  throw new Error("booking controls do not use localized defaults");
}

const overlay = readFileSync("components/OverLay.tsx", "utf8");
if (!overlay.includes('from "next/image"') || !overlay.includes("priority")) {
  throw new Error("hero image is not responsive and prioritized");
}

const navigation = readFileSync("components/header/Navigation.tsx", "utf8");
const footer = readFileSync("components/footer/Footer.tsx", "utf8");
if (!navigation.includes("logo-filter") || !footer.includes('from "next/image"')) {
  throw new Error("header and footer logo treatments are missing");
}

const imageFiles = ["app/about/page.tsx", "app/activity/page.tsx", "app/booking/page.tsx", "app/news/page.tsx", "app/gallery/page.tsx", "components/site/FinalCta.tsx"];
for (const file of imageFiles) {
  const source = readFileSync(file, "utf8");
  if (source.includes("images.unsplash.com") || !source.includes("pexels-")) {
    throw new Error(`${file} does not use local Pexels WebP assets`);
  }
}

const bookingCard = readFileSync("app/booking/BookingCard.tsx", "utf8");
const benefits = readFileSync("components/site/Benefits.tsx", "utf8");
const activity = readFileSync("app/activity/page.tsx", "utf8");
if (!bookingCard.includes("rounded-[1.75rem]") || !benefits.includes("rounded-[1.5rem]") || !activity.includes("border-l-2")) {
  throw new Error("homepage feature sections are missing their refreshed visual treatments");
}

console.log("localized homepage content is wired");
