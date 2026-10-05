"use client";

import { Bike, Bird, Flame, Mountain, Sailboat, Sparkles } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Campfire from "@/public/assets/pexels-20732894.webp";

const icons = [Mountain, Sailboat, Flame, Bird, Sparkles, Bike] as const;

export default function Activity() {
  const { t } = useLanguage(); const { activities } = t.home;
  return <section id="activity" className="section-space bg-[var(--surface-muted)]"><div className="page-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src={Campfire} alt={activities.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div><SectionHeading eyebrow={activities.eyebrow} title={activities.title} description={activities.description} /><div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">{activities.items.map(([title, description], index) => { const Icon = icons[index]; return <div key={title} className="group flex gap-3"><div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[var(--forest)] transition-transform duration-200 group-hover:-translate-y-1"><Icon className="size-5" /></div><div><h3 className="font-heading font-bold">{title}</h3><p className="mt-1 text-sm leading-5 text-[var(--text-secondary)]">{description}</p></div></div>; })}</div></div></div></section>;
}
