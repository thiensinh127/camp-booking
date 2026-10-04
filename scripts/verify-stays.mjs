import { readFile } from "node:fs/promises";

for (const [file, expected] of [["app/about/page.tsx", "Stay Your Way"], ["app/activity/page.tsx", "More Than a Stay"], ["app/booking/BookingCard.tsx", "4.9"], ["app/booking/page.tsx", "Find Your Perfect Basecamp"]]) {
  if (!(await readFile(file, "utf8")).includes(expected)) throw new Error(`${file} must include ${expected}`);
}

console.log("Stay section checks passed.");
