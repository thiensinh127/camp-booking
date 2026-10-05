"use client";
import { Baby, Heart, MapPin, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const icons = [MapPin, ShieldCheck, Sparkles, Baby, Heart, Wifi] as const;

export function Benefits() { const { t } = useLanguage(); const { benefits } = t.home; return <section className="section-space bg-[var(--warm-ivory)]"><div className="page-shell"><SectionHeading align="center" eyebrow={benefits.eyebrow} title={benefits.title} className="max-w-3xl" /><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{benefits.items.map(([title, description], index) => { const Icon = icons[index]; return <article key={title} className="group rounded-[1.5rem] border border-[var(--line)] bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--sage)] hover:shadow-[0_12px_28px_rgba(18,37,28,.07)]"><div className="grid size-11 place-items-center rounded-2xl bg-[var(--surface-muted)] text-[var(--forest)] transition-colors group-hover:bg-[var(--forest)] group-hover:text-white"><Icon className="size-5" strokeWidth={1.8} /></div><h3 className="mt-5 font-heading text-lg font-bold tracking-[-.02em]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p></article>; })}</div></div></section>; }
