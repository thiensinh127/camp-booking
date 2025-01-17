// components/BackToTopButton.js
"use client";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 w-10 h-10 bg-green-700 text-white rounded-full shadow-lg hover:bg-[#345E40] transition duration-300"
        aria-label="Back to top"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
