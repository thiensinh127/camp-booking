/* eslint-disable react/no-unescaped-entities */
"use client";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useInView } from "react-intersection-observer";

const NavigationContent = () => {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [leftArrowRef, leftArrowInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [rightArrowRef, rightArrowInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative h-full flex items-center">
      {/* Main Content */}
      <div
        ref={contentRef}
        className={`container mx-auto w-3/4 transition-all duration-700 ease-in-out ${
          contentInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-white text-lg mb-4">Let's Make S'more Memories</p>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-8">
            CAMP IS MORE THAN JUST A WORD,
            <br />
            IT'S AN EXPERIENCE!
          </h1>
          <Button
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white/20"
            size="lg"
          >
            <Play className="mr-2 h-4 w-4" /> Watch This Video
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        ref={leftArrowRef}
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 ease-in-out ${
          leftArrowInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-5"
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        ref={rightArrowRef}
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 ease-in-out ${
          rightArrowInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-5"
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default NavigationContent;
