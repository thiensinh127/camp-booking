import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";

const stories = [
  ["Camp guides", "How to Plan a Weekend That Actually Feels Like a Break", "May 24, 2026", "photo-1454496522488-7a8e488e8606"],
  ["Field notes", "A Slower Way to Explore the Forest", "May 12, 2026", "photo-1441974231531-c6227db76b6e"],
  ["Campfire food", "Three Easy Meals Worth Cooking Outside", "April 28, 2026", "photo-1523987355523-c7b5b0dd90a7"],
] as const;

export default function News() { return <section id="news" className="section-space bg-[var(--warm-ivory)]"><div className="page-shell"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading eyebrow="Journal" title="Stories From The Outdoors" /><a href="#" className="text-sm font-bold text-[var(--forest)]">Read all stories →</a></div><div className="mt-10 grid gap-6 lg:grid-cols-2">{stories.map(([category, title, date, photo], index) => <article key={title} className={`group overflow-hidden rounded-2xl bg-white ${index === 0 ? "lg:row-span-2" : "lg:grid lg:grid-cols-2"}`}><div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3] lg:h-full"}`}><Image src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1100&q=82`} alt="Outdoor journal" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-6"><p className="eyebrow text-[11px]">{category} <span className="ml-2 text-[var(--text-muted)]">{date}</span></p><h3 className="mt-3 font-heading text-xl font-bold leading-7">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">Simple notes for making more room in your weekend.</p><a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--forest)]">Read story <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></div></article>)}</div></div></section>; }
