"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-white text-2xl font-bold flex items-center gap-2 z-50"
          >
            <Image src={Logo} alt="Logo" width={152} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link href="/campground" className="text-white hover:text-gray-200">
              Campground
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-100"
            >
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
          <Link
            href="/"
            className="text-white text-2xl hover:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white text-2xl hover:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/campground"
            className="text-white text-2xl hover:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Campground
          </Link>
          <Link
            href="/contact"
            className="text-white text-2xl hover:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
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
