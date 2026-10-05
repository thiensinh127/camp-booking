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
if (!navigation.includes("camp-haven-logo.png") || !footer.includes("camp-haven-logo.png")) {
  throw new Error("header and footer Camp Haven logo is missing");
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
if (!bookingCard.includes("rounded-[1.75rem]") || !benefits.includes("rounded-[1.5rem]")) {
  throw new Error("homepage feature sections are missing their refreshed visual treatments");
}

const globals = readFileSync("app/globals.css", "utf8");
if (!activity.includes("bg-[radial-gradient") || !activity.includes("rounded-[2.5rem]") || !globals.includes("font-size: clamp(15px")) {
  throw new Error("activity panel or responsive typography scale is missing");
}

if (activity.includes("hover:-translate") || !activity.includes("transition-colors duration-200 ease-out")) {
  throw new Error("activity hover treatment is still moving its icons");
}

const visualSources = ["app/about/page.tsx", "app/booking/BookingCard.tsx", "app/gallery/page.tsx", "app/news/page.tsx"].map((file) => readFileSync(file, "utf8"));
if (visualSources.some((source) => source.includes("scale-105") || source.includes("scale-[1.04]"))) {
  throw new Error("image hover treatment is still too aggressive");
}

const news = readFileSync("app/news/page.tsx", "utf8");
if (!news.includes("lg:grid-cols-[1.05fr_.95fr]") || !news.includes("minmax(0,.9fr)") || !news.includes("min-w-0")) {
  throw new Error("journal section is missing its editorial layout");
}

const heroContent = readFileSync("components/header/NavigationContent.tsx", "utf8");
if (!heroContent.includes("createPortal") || !benefits.includes("lg:col-span-2")) {
  throw new Error("experience modal or benefits layout is missing its refreshed structure");
}

if (!news.includes("pexels-nguyndoanfoto-38435448.webp") || !activity.includes("pexels-dongdilac-33901356.webp")) {
  throw new Error("journal and experience images are not swapped");
}

if (!navigation.includes("lg:rounded-[1.5rem]") || !bookingForm.includes("max-h-[78dvh]") || !bookingForm.includes("lg:divide-x")) {
  throw new Error("header and booking controls are missing their responsive layout");
}

console.log("localized homepage content is wired");
