"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import ForestPath from "@/public/assets/pexels-quachtungduong-34668894.webp";
import MountainLake from "@/public/assets/pexels-dongdilac-33901356.webp";
import WoodlandCampfire from "@/public/assets/pexels-pixelman-dapha-2147725010-30563254.webp";

const photos = [MountainLake, ForestPath, WoodlandCampfire];

export default function News() { const { t } = useLanguage(); const { news } = t.home; return <section id="news" className="section-space bg-[var(--warm-ivory)]"><div className="page-shell"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading eyebrow={news.eyebrow} title={news.title} /><a href="#" className="text-sm font-bold text-[var(--forest)]">{news.all}</a></div><div className="mt-10 grid gap-6 lg:grid-cols-2">{news.items.map(([category, title, date], index) => <article key={title} className={`group overflow-hidden rounded-2xl bg-white ${index === 0 ? "lg:row-span-2" : "lg:grid lg:grid-cols-2"}`}><div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3] lg:h-full"}`}><Image src={photos[index]} alt={news.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-6"><p className="eyebrow text-[11px]">{category} <span className="ml-2 text-[var(--text-muted)]">{date}</span></p><h3 className="mt-3 font-heading text-xl font-bold leading-7">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{news.excerpt}</p><a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--forest)]">{news.read} <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></div></article>)}</div></div></section>; }
