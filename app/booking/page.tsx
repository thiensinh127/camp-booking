"use client";
import { AccommodationItem } from "./BookingCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const images = ["https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1000&q=85"];

export default function Booking() { const { t } = useLanguage(); const { booking } = t.home; return <section id="stays" className="section-space bg-white"><div className="page-shell"><SectionHeading eyebrow={booking.eyebrow} title={booking.title} description={booking.description} /><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{booking.items.map(([title, badge, capacity, bed, amenity], index) => <AccommodationItem key={title} accommodation={{ title, badge, capacity, bed, amenity, image: images[index], price: ["$89", "$109", "$129"][index] }} night={booking.night} cta={booking.cta} />)}</div></div></section>; }
