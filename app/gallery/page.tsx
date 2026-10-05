"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import CampFriends from "@/public/assets/pexels-nguyndoanfoto-38435448.webp";
import Campfire from "@/public/assets/camp-haven-tent-garden.webp";
import ForestCamp from "@/public/assets/camp-haven-tent-communal.webp";
import MountainCamp from "@/public/assets/camp-haven-campsite-valley.webp";
import NightGlamping from "@/public/assets/pexels-nguyndoanfoto-38435452.webp";
import WoodlandCamp from "@/public/assets/camp-haven-tent-hillside.webp";

const photos = [
  [MountainCamp, "col-span-2 row-span-2", "object-center"],
  [ForestCamp, "", "object-center"],
  [CampFriends, "", "object-[center_65%]"],
  [WoodlandCamp, "col-span-2", "object-[center_62%]"],
  [NightGlamping, "", "object-[center_56%]"],
  [Campfire, "col-span-2 md:col-span-3", "object-[center_60%]"],
] as const;

export default function Gallery() {
  const { t } = useLanguage();
  const { gallery } = t.home;

  return <section id="gallery" className="section-space bg-white"><div className="page-shell"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} description={gallery.description} /><a href="#" className="text-sm font-bold text-[var(--forest)]">{gallery.cta}</a></div><div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">{photos.map(([photo, layout, position], index) => <div key={photo.src} className={`relative overflow-hidden rounded-2xl ${layout} ${index === 5 ? "md:col-span-3" : ""}`}><Image src={photo} alt={gallery.imageAlt} fill sizes="(min-width: 768px) 25vw, 50vw" className={`object-cover transition-transform duration-500 ease-out hover:scale-[1.02] ${position}`} /></div>)}</div></div></section>;
}
