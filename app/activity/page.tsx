"use client";

import { Bike, Bird, Flame, Mountain, Sailboat, Sparkles } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Campfire from "@/public/assets/pexels-dongdilac-33901356.webp";

const icons = [Mountain, Sailboat, Flame, Bird, Sparkles, Bike] as const;

export default function Activity() {
  const { t } = useLanguage(); const { activities } = t.home;
  return <section id="activity" className="section-space bg-[radial-gradient(circle_at_top_left,_rgba(217,154,91,.14),_transparent_40%)]"><div className="page-shell"><div className="grid overflow-hidden rounded-[2.5rem] border border-[var(--line)] bg-white/75 shadow-[0_20px_55px_rgba(18,37,28,.08)] lg:grid-cols-[.92fr_1.08fr]"><div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto"><Image src={Campfire} alt={activities.imageAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /><div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--dark-forest)]/50 to-transparent" /></div><div className="p-6 md:p-10 lg:p-12"><SectionHeading eyebrow={activities.eyebrow} title={activities.title} description={activities.description} /><div className="mt-9 grid gap-3 sm:grid-cols-2">{activities.items.map(([title, description], index) => { const Icon = icons[index]; return <div key={title} className="group flex gap-3 rounded-2xl border border-transparent bg-white/80 p-3.5 transition-colors duration-200 ease-out hover:border-[var(--sage)] hover:shadow-[0_8px_20px_rgba(18,37,28,.07)]"><div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--surface-muted)] text-[var(--forest)] transition-colors duration-200 ease-out group-hover:bg-[var(--forest)] group-hover:text-white"><Icon className="size-[18px]" strokeWidth={1.8} /></div><div><div className="flex items-center gap-2"><span className="text-[10px] font-bold tracking-[.12em] text-[var(--warm-accent)]">0{index + 1}</span><h3 className="font-heading text-[.98rem] font-bold tracking-[-.015em]">{title}</h3></div><p className="mt-1 text-sm leading-5 text-[var(--text-secondary)]">{description}</p></div></div>; })}</div></div></div></div></section>;
}
