"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Footer() {
  const { ref: newsletterRef, inView: newsletterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: sitemapRef, inView: sitemapInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-green-800 text-white py-8 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Newsletter Section */}
        <div
          ref={newsletterRef}
          className={`w-full md:w-2/3 text-center md:text-left transition-all duration-700 ease-in-out ${
            newsletterInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <form className="flex flex-col sm:flex-row items-center flex-wrap border-b border-gray-400 pb-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent border-none outline-none text-white flex-grow placeholder-gray-300 mb-4 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="text-white font-bold text-lg hover:text-gray-300"
            >
              Subscribe →
            </button>
          </form>
          <p className="text-sm mt-2 text-gray-300">
            Copyright Dotcreativemarket
          </p>
        </div>

        {/* Sitemap and Contact Section */}
        <div className="w-full md:w-1/3">
          {/* Sitemap */}
          <div
            ref={sitemapRef}
            className={`mb-8 text-center md:text-left transition-all duration-700 ease-in-out ${
              sitemapInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-lg font-bold mb-3">Sitemap</h3>
            <ul className="text-gray-300 flex gap-4 flex-wrap justify-center md:justify-start">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/campground" className="hover:underline">
                  Campground
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:underline">
                  News
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div
            ref={contactRef}
            className={`text-center md:text-left transition-all duration-700 ease-in-out ${
              contactInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">Dotcreativemarket.com</p>
            <p className="text-gray-300 text-sm">Info@Dotcreativemarket.Com</p>
            <div className="flex gap-8 mt-4 justify-center md:justify-start">
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                Instagram
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">TikTok</span>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
