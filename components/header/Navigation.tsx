"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/camp-haven-logo.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoginModal } from "../login/LoginModal";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const links = [
  { href: "#home", label: "Home" }, { href: "#about", label: "Stays" },
  { href: "#activity", label: "Activities" }, { href: "#news", label: "Journal" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
    <div className={cn("page-shell flex h-14 items-center justify-between gap-4 rounded-2xl border px-4 shadow-lg transition-all duration-300 lg:h-16 lg:rounded-[1.5rem] lg:px-6", isScrolled ? "border-[var(--line)] bg-[color:rgb(247_245_238_/_96)] text-[var(--text-primary)] shadow-[0_10px_30px_rgba(18,37,28,.1)] backdrop-blur" : "border-white/15 bg-[rgba(8,39,26,.62)] text-white backdrop-blur-md")}>
      <Link href="#home" aria-label="Camp Haven home" className="relative z-50 shrink-0"><Image src={Logo} alt="Camp Haven" width={148} className="h-auto w-28 object-contain sm:w-32" priority /></Link>
      <div className="hidden items-center gap-6 lg:flex">
        {links.map((link, index) => <a key={link.href} href={link.href} className="border-b-2 border-transparent py-2 text-sm font-semibold transition hover:border-current hover:opacity-75">{t.nav[index]}</a>)}
        <button onClick={() => setLocale(locale === "vi" ? "en" : "vi")} className="rounded-lg border border-current/20 px-3 py-2 text-xs font-bold">{locale === "vi" ? "EN" : "VI"}</button>
        <LoginModal />
        <Button asChild className="h-11 rounded-xl bg-[var(--forest)] px-5 text-white hover:bg-[var(--forest-hover)]"><a href="#booking">{t.book}</a></Button>
      </div>
      <div className="relative z-50 flex items-center gap-2 lg:hidden">
        <a href="#booking" className="rounded-lg bg-[var(--warm-ivory)] px-3 py-2 text-sm font-bold text-[var(--forest)]">{t.book}</a>
        <button type="button" aria-label="Toggle navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((value) => !value)} className="grid size-10 place-items-center rounded-lg border border-current/30">{isMenuOpen ? <X size={21} /> : <Menu size={22} />}</button>
      </div>
      {isMenuOpen && <div className="fixed inset-x-3 top-[76px] bottom-3 flex flex-col items-center justify-center gap-7 overflow-y-auto rounded-[2rem] border border-white/10 bg-[var(--dark-forest)] px-6 text-center text-white shadow-2xl lg:hidden">
        {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl font-bold">{t.nav[index]}</a>)}
        <button onClick={() => setLocale(locale === "vi" ? "en" : "vi")} className="rounded-lg border border-white/25 px-4 py-2 text-sm font-bold">{locale === "vi" ? "EN" : "VI"}</button>
        <LoginModal />
        <Button asChild className="h-12 rounded-xl bg-white px-6 text-[var(--forest)] hover:bg-[var(--surface-muted)]"><a href="#booking" onClick={() => setIsMenuOpen(false)}>{t.book}</a></Button>
      </div>}
    </div>
  </nav>;
}
