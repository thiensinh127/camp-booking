import { existsSync, readFileSync } from "node:fs";

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
if (!overlay.includes("camp-haven-tent-communal.webp") || !overlay.includes("camp-haven-campsite-valley.webp") || !overlay.includes("camp-haven-tent-garden.webp") || (overlay.match(/<Image /g) || []).length !== 3) {
  throw new Error("hero collage is missing its three local camp images");
}

const navigation = readFileSync("components/header/Navigation.tsx", "utf8");
const footer = readFileSync("components/footer/Footer.tsx", "utf8");
if (!navigation.includes("camp-haven-logo.png") || !footer.includes("camp-haven-logo.png")) {
  throw new Error("header and footer Camp Haven logo is missing");
}

const layout = readFileSync("app/layout.tsx", "utf8");
if (!layout.includes("Be_Vietnam_Pro") || !layout.includes("--font-be-vietnam") || layout.includes("/favicon.png")) {
  throw new Error("global Be Vietnam Pro typography or icon metadata is missing");
}

const imageFiles = ["app/about/page.tsx", "app/activity/page.tsx", "app/booking/page.tsx", "app/news/page.tsx", "app/gallery/page.tsx", "components/site/FinalCta.tsx"];
for (const file of imageFiles) {
  const source = readFileSync(file, "utf8");
  if (source.includes("images.unsplash.com") || !source.includes(".webp")) {
    throw new Error(`${file} does not use local WebP assets`);
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

const gallery = readFileSync("app/gallery/page.tsx", "utf8");
if (!gallery.includes("CampFriends") || !gallery.includes("index === 5") || !benefits.includes('from "next/image"') || !benefits.includes("camp-haven-campsite-valley.webp") || !benefits.includes("bg-[var(--warm-ivory)]/")) {
  throw new Error("gallery collage or benefits background treatment is missing");
}

if (!news.includes("camp-haven-campsite-valley.webp") || !activity.includes("camp-haven-tent-communal.webp")) {
  throw new Error("journal and experience images do not use the new camp photos");
}

if (!navigation.includes("lg:rounded-[1.5rem]") || !bookingForm.includes("max-h-[78dvh]") || !bookingForm.includes("lg:divide-x")) {
  throw new Error("header and booking controls are missing their responsive layout");
}

if (navigation.includes("LoginModal") || !existsSync("app/icon.png") || !news.includes("camp-haven-campsite-valley.webp")) {
  throw new Error("browser icon, login removal, or new camp imagery is missing");
}

console.log("localized homepage content is wired");
