"use client";
import { Baby, Heart, MapPin, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const icons = [MapPin, ShieldCheck, Sparkles, Baby, Heart, Wifi] as const;

export function Benefits() { const { t } = useLanguage(); const { benefits } = t.home; return <section className="section-space bg-[var(--surface-muted)]"><div className="page-shell"><SectionHeading align="center" eyebrow={benefits.eyebrow} title={benefits.title} /><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">{benefits.items.map(([title, description], index) => { const Icon = icons[index]; return <article key={title} className="bg-[var(--surface-muted)] p-6"><Icon className="size-6 text-[var(--forest)]" /><h3 className="mt-5 font-heading text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p></article>; })}</div></div></section>; }
