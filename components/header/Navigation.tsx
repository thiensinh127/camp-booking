"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/logo.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoginModal } from "../login/LoginModal";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    setActiveLink(href);
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Add scroll listener to add shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#activity", label: "Activity" },
    { href: "#news", label: "News" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-white text-2xl font-bold flex items-center gap-2 z-50 "
          >
            <Image
              src={Logo}
              alt="Logo"
              width={isScrolled ? 80 : 152}
              height={isScrolled ? 20 : 50}
              className="transition-all duration-300 ease-in-out"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "text-white cursor-pointer hover:text-gray-200 px-4 py-2 transition",
                  activeLink === link.href ? "bg-white text-black rounded" : ""
                )}
              >
                {link.label}
              </a>
            ))}
            <LoginModal />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 text-white hover:text-gray-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-white text-2xl cursor-pointer hover:text-gray-200"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100 text-xl px-8 py-4"
            onClick={() => setIsMenuOpen(false)}
          >
            BOOK
          </Button>
        </div>
      </div>
    </nav>
  );
}
