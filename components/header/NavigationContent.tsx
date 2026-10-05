"use client";

import { Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../ui/button";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Poster from "@/public/assets/pexels-pixelman-dapha-2147725010-30563254.webp";

export default function NavigationContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const modal = isModalOpen ? createPortal(<div role="dialog" aria-modal="true" aria-label="Camp Haven experience" className="fixed inset-0 z-[100] grid place-items-center bg-[rgba(7,22,15,.72)] p-4 backdrop-blur-sm" onMouseDown={() => setIsModalOpen(false)}><div className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--dark-forest)] p-2 shadow-2xl" onMouseDown={(event) => event.stopPropagation()}><div className="flex items-center justify-between px-4 py-3 text-white md:px-5"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/55">Camp Haven</p><strong className="font-heading text-lg">Trải nghiệm ngoài trời</strong></div><button onClick={() => setIsModalOpen(false)} aria-label="Close experience" className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"><X className="size-5" /></button></div><div className="relative aspect-video overflow-hidden rounded-[1.5rem]"><Image src={Poster} alt="Camp under the stars" fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-forest)] via-[var(--dark-forest)]/20 to-transparent" /><div className="absolute inset-0 grid place-items-center"><span className="grid size-16 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur"><Play className="ml-1 size-6 fill-current" /></span></div><div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8"><p className="text-xs font-bold uppercase tracking-[.16em] text-white/70">Camp Haven film</p><p className="mt-2 max-w-md font-heading text-2xl font-bold tracking-[-.03em]">Một chuyến đi chậm rãi, gần thiên nhiên hơn.</p></div></div></div></div>, document.body) : null;
  return <div id="home" className="page-shell relative z-10 flex min-h-[640px] items-center pb-24 pt-32 md:min-h-[720px] md:pb-28">
    <div className="max-w-2xl text-white">
      <p className="mb-5 text-xs font-bold tracking-[0.2em] text-white/75">ESCAPE • EXPLORE • UNWIND</p>
      <h1 className="whitespace-pre-line font-heading text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.06] tracking-[-0.04em]">{t.hero}</h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">{t.heroText}</p>
      <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 rounded-xl bg-white px-6 font-semibold text-[var(--forest)] hover:bg-[var(--surface-muted)]"><a href="#about">{t.explore}</a></Button><Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)} className="h-12 rounded-xl border-white/40 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"><Play /> {t.watch}</Button></div>
    </div>
    {modal}
  </div>;
}
