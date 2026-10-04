"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/logo.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoginModal } from "../login/LoginModal";

const links = [
  { href: "#home", label: "Home" }, { href: "#about", label: "Stays" },
  { href: "#activity", label: "Activities" }, { href: "#news", label: "Journal" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <nav className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", isScrolled ? "border-[var(--line)] bg-[color:rgb(247_245_238_/_0.92)] text-[var(--text-primary)] backdrop-blur" : "border-transparent bg-transparent text-white")}>
    <div className="page-shell flex h-[76px] items-center justify-between gap-5">
      <Link href="#home" aria-label="Camp Haven home" className="relative z-50 flex items-center"><Image src={Logo} alt="Camp Haven" width={112} className="h-auto w-24 object-contain sm:w-28" priority /></Link>
      <div className="hidden items-center gap-6 lg:flex">
        {links.map((link) => <a key={link.href} href={link.href} className="border-b-2 border-transparent py-2 text-sm font-semibold transition hover:border-current hover:opacity-75">{link.label}</a>)}
        <LoginModal />
        <Button asChild className="h-11 rounded-xl bg-[var(--forest)] px-5 text-white hover:bg-[var(--forest-hover)]"><a href="#booking">Book your stay</a></Button>
      </div>
      <div className="relative z-50 flex items-center gap-2 lg:hidden">
        <a href="#booking" className={cn("rounded-lg px-3 py-2 text-sm font-bold", isScrolled ? "bg-[var(--forest)] text-white" : "bg-white text-[var(--forest)]")}>Book</a>
        <button type="button" aria-label="Toggle navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((value) => !value)} className="grid size-11 place-items-center rounded-lg border border-current/30">{isMenuOpen ? <X size={21} /> : <Menu size={23} />}</button>
      </div>
      <div className={cn("fixed inset-0 flex flex-col items-center justify-center gap-7 bg-[var(--dark-forest)] text-white transition-transform duration-300 lg:hidden", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="font-heading text-3xl font-bold">{link.label}</a>)}
        <LoginModal />
        <Button asChild className="h-12 rounded-xl bg-white px-6 text-[var(--forest)] hover:bg-[var(--surface-muted)]"><a href="#booking" onClick={() => setIsMenuOpen(false)}>Book your stay</a></Button>
      </div>
    </div>
  </nav>;
}
