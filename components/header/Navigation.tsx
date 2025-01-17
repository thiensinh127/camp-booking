"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/campground", label: "Campground" },
    { href: "/contact", label: "Contact" },
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
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-white hover:text-gray-200",
                  pathname === link.href
                    ? " bg-white text-black  px-8 py-2 rounded"
                    : ""
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className=" text-black hover:bg-gray-100">
              BOOK
            </Button>
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
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-white text-2xl hover:text-gray-200",
                pathname === link.href ? "font-bold underline" : ""
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
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
