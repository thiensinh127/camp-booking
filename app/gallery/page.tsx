"use client";
import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import ForestCamp from "@/public/assets/pexels-10601360.webp";
import MountainCamp from "@/public/assets/pexels-1687845.webp";
import WoodlandCamp from "@/public/assets/pexels-18013543.webp";
import Campfire from "@/public/assets/pexels-20732894.webp";
import NightGlamping from "@/public/assets/pexels-2666598.webp";
const photos = [MountainCamp, ForestCamp, NightGlamping, WoodlandCamp, Campfire];
export default function Gallery() { const { t } = useLanguage(); const { gallery } = t.home; return <section id="gallery" className="section-space bg-white"><div className="page-shell"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} description={gallery.description} /><a href="#" className="text-sm font-bold text-[var(--forest)]">{gallery.cta}</a></div><div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">{photos.map((photo, index) => <div key={photo.src} className={`relative overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 row-span-2" : index === 3 ? "col-span-2" : ""}`}><Image src={photo} alt={gallery.imageAlt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition duration-500 hover:scale-105" /></div>)}</div></div></section>; }
