import { readFileSync } from "node:fs";

const navigation = readFileSync("components/header/Navigation.tsx", "utf8");
const booking = readFileSync("components/booking-form/BookingForm.tsx", "utf8");
const footer = readFileSync("components/footer/Footer.tsx", "utf8");

const expectations = [
  [navigation, "z-40 animate-in slide-in-from-top-4", "mobile navigation drawer must layer above the page and animate from the top"],
  [navigation, "motion-reduce:animate-none", "mobile navigation drawer must respect reduced-motion preferences"],
  [booking, "animate-in slide-in-from-bottom-6", "mobile booking sheet must animate from the bottom"],
  [booking, "motion-reduce:animate-none", "mobile booking sheet must respect reduced-motion preferences"],
  [footer, "grid-cols-2", "mobile footer links must use a compact two-column grid"],
];

for (const [source, expected, message] of expectations) {
  if (!source.includes(expected)) throw new Error(message);
}

console.log("Mobile surface regression checks passed.");
