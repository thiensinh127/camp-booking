"use client";

import { Bike, Bird, Flame, Mountain, Sailboat, Sparkles } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Campfire from "@/public/assets/pexels-dongdilac-33901356.webp";

const icons = [Mountain, Sailboat, Flame, Bird, Sparkles, Bike] as const;

export default function Activity() {
  const { t } = useLanguage(); const { activities } = t.home;
  return <section id="activity" className="section-space bg-[var(--surface-muted)]"><div className="page-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-black/5"><Image src={Campfire} alt={activities.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--dark-forest)]/45 to-transparent" /></div><div><SectionHeading eyebrow={activities.eyebrow} title={activities.title} description={activities.description} /><div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">{activities.items.map(([title, description], index) => { const Icon = icons[index]; return <div key={title} className="group flex gap-3 border-l-2 border-[var(--line)] pl-4 transition-colors hover:border-[var(--warm-accent)]"><div className="grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--line)] bg-white text-[var(--forest)] transition duration-200 group-hover:-translate-y-0.5 group-hover:border-[var(--forest)]"><Icon className="size-[18px]" strokeWidth={1.8} /></div><div><h3 className="font-heading text-[.98rem] font-bold tracking-[-.015em]">{title}</h3><p className="mt-1 text-sm leading-5 text-[var(--text-secondary)]">{description}</p></div></div>; })}</div></div></div></section>;
}
