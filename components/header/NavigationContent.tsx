"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function NavigationContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  return <div id="home" className="page-shell relative z-10 flex min-h-[640px] items-center pb-24 pt-32 md:min-h-[720px] md:pb-28">
    <div className="max-w-2xl text-white">
      <p className="mb-5 text-xs font-bold tracking-[0.2em] text-white/75">ESCAPE • EXPLORE • UNWIND</p>
      <h1 className="whitespace-pre-line font-heading text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.06] tracking-[-0.04em]">{t.hero}</h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">{t.heroText}</p>
      <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 rounded-xl bg-white px-6 font-semibold text-[var(--forest)] hover:bg-[var(--surface-muted)]"><a href="#about">{t.explore}</a></Button><Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)} className="h-12 rounded-xl border-white/40 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"><Play /> {t.watch}</Button></div>
    </div>
    {isModalOpen && <div role="dialog" aria-modal="true" aria-label="Camp experience video" className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4"><div className="w-full max-w-3xl rounded-2xl bg-[var(--dark-forest)] p-5 shadow-2xl"><div className="mb-4 flex items-center justify-between text-white"><strong>Camp Haven experience</strong><button onClick={() => setIsModalOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-white/10">Close</button></div><div className="grid aspect-video place-items-center rounded-xl bg-black/30 text-center text-white/70">Our camp film is coming soon.</div></div></div>}
  </div>;
}
