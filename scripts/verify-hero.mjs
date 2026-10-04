import { readFile } from "node:fs/promises";

const checks = [
  ["components/header/Navigation.tsx", "backdrop-blur"],
  ["components/header/Navigation.tsx", "aria-expanded"],
  ["components/header/NavigationContent.tsx", "Sleep Under the Stars"],
  ["components/booking-form/BookingForm.tsx", "lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]"],
  ["components/booking-form/BookingForm.tsx", "Search stays"],
];

for (const [file, expected] of checks) {
  if (!(await readFile(file, "utf8")).includes(expected)) {
    throw new Error(`${file} must include ${expected}`);
  }
}

console.log("Hero interaction smoke checks passed.");
