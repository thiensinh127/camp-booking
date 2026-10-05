"use client";
import { ArrowUpRight, Caravan, House, Tent, Trees } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import ForestCamp from "@/public/assets/pexels-anastasia-shuraeva-4989501.webp";
import MountainCamp from "@/public/assets/pexels-d-ng-nhan-324384-18207338.webp";
import NightGlamping from "@/public/assets/pexels-d-ng-nhan-324384-39914924.webp";
import WoodlandTent from "@/public/assets/pexels-nguyndoanfoto-32602809.webp";

const visuals = [[Tent, ForestCamp], [Caravan, MountainCamp], [Trees, NightGlamping], [House, WoodlandTent]] as const;

export default function About() {
  const { t } = useLanguage(); const { stays } = t.home;
  return <section id="about" className="section-space bg-[var(--warm-ivory)] pt-64 md:pt-32"><div className="page-shell"><SectionHeading align="center" eyebrow={stays.eyebrow} title={stays.title} description={stays.description} /><div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{stays.items.map(([title, description, availability], index) => { const [Icon, photo] = visuals[index]; return <article key={title} className="group overflow-hidden rounded-2xl bg-white"><div className="relative aspect-[4/5] overflow-hidden"><Image src={photo} alt={title} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]" /><div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-5 text-white"><span className="text-xs font-semibold uppercase tracking-wider text-white/75">{availability}</span><div className="mt-2 flex items-end justify-between"><div><Icon className="mb-2 size-5" /><h3 className="font-heading text-xl font-bold">{title}</h3></div><ArrowUpRight className="size-5" /></div></div></div><p className="p-5 text-sm leading-6 text-[var(--text-secondary)]">{description}</p></article>; })}</div></div></section>;
}
