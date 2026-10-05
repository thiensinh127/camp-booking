"use client";

import { Baby, Heart, MapPin, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import CampsiteBackground from "@/public/assets/camp-haven-campsite-valley.webp";

const icons = [MapPin, ShieldCheck, Sparkles, Baby, Heart, Wifi] as const;

export function Benefits() {
  const { t } = useLanguage();
  const { benefits } = t.home;

  return <section className="section-space bg-[var(--warm-ivory)]"><div className="page-shell"><div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--line)] shadow-[0_18px_46px_rgba(18,37,28,.05)]"><Image src={CampsiteBackground} alt="" fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover object-center" /><div className="absolute inset-0 bg-[var(--warm-ivory)]/90" /><div className="relative p-6 md:p-10"><SectionHeading align="center" eyebrow={benefits.eyebrow} title={benefits.title} className="max-w-3xl" /><div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{benefits.items.map(([title, description], index) => { const Icon = icons[index]; return <article key={title} className={`group rounded-[1.5rem] border border-white/70 bg-white/75 p-5 backdrop-blur-sm transition-colors duration-200 ease-out hover:border-[var(--sage)] hover:shadow-[0_10px_24px_rgba(18,37,28,.06)] ${index === 0 ? "md:col-span-2 lg:col-span-2 lg:flex lg:items-center lg:gap-5" : ""}`}><div className="flex items-start justify-between lg:shrink-0"><div className="grid size-11 place-items-center rounded-2xl bg-[var(--surface-muted)] text-[var(--forest)] transition-colors duration-200 ease-out group-hover:bg-[var(--forest)] group-hover:text-white"><Icon className="size-5" strokeWidth={1.8} /></div><span className="text-[10px] font-bold tracking-[.14em] text-[var(--warm-accent)]">0{index + 1}</span></div><div><h3 className="mt-5 font-heading text-lg font-bold tracking-[-.02em] lg:mt-0">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p></div></article>; })}</div></div></div></div></section>;
}
