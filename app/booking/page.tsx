import { AccommodationItem } from "./BookingCard";
import { SectionHeading } from "@/components/site/SectionHeading";

const accommodations = [
  { title: "Bell Glamp One", image: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&w=1000&q=85", capacity: "Up to 4 guests", bed: "Queen bed", amenity: "Private firepit", price: "$89", badge: "Popular" },
  { title: "Caravan Solar Tent", image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1000&q=85", capacity: "Up to 6 guests", bed: "2 double beds", amenity: "Lakefront deck", price: "$109", badge: "Family favorite" },
  { title: "Cedar Hideaway", image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1000&q=85", capacity: "Up to 2 guests", bed: "King bed", amenity: "Wood stove", price: "$129", badge: "Best for couples" },
];

export default function Booking() { return <section id="stays" className="section-space bg-white"><div className="page-shell"><SectionHeading eyebrow="Featured stays" title="Find Your Perfect Basecamp" description="Thoughtfully designed places to unplug, settle in and wake up close to nature." /><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{accommodations.map((accommodation) => <AccommodationItem key={accommodation.title} accommodation={accommodation} />)}</div></div></section>; }
