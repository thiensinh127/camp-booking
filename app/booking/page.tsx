"use client";
import { AccommodationItem } from "./BookingCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import ForestCamp from "@/public/assets/pexels-10601360.webp";
import MountainCamp from "@/public/assets/pexels-1687845.webp";
import NightGlamping from "@/public/assets/pexels-2666598.webp";

const images = [NightGlamping, MountainCamp, ForestCamp];

export default function Booking() { const { t } = useLanguage(); const { booking } = t.home; return <section id="stays" className="section-space bg-white"><div className="page-shell"><SectionHeading eyebrow={booking.eyebrow} title={booking.title} description={booking.description} /><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{booking.items.map(([title, badge, capacity, bed, amenity], index) => <AccommodationItem key={title} accommodation={{ title, badge, capacity, bed, amenity, image: images[index], price: ["$89", "$109", "$129"][index] }} night={booking.night} cta={booking.cta} />)}</div></div></section>; }
