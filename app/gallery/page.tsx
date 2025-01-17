"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import GalleryImage from "@/public/assets/gallery.png";

export default function Gallery() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-neutral-100 p-8">
      {/* Heading Section */}
      <div
        ref={sectionRef}
        className={`transition-all duration-700 ease-in-out ${
          sectionInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-bold mb-2">Our Gallery</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
          erat a consectetur sollicitudin. In id dapibus lorem.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div
        ref={buttonRef}
        className={`flex items-center gap-4 transition-all duration-700 ease-in-out ${
          buttonInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
        }`}
      >
        <button className="p-2 bg-gray-200 rounded-full">
          <span>&lt;</span>
        </button>
        <button className="p-2 bg-gray-200 rounded-full">
          <span>&gt;</span>
        </button>
      </div>

      {/* Image Grid */}
      <div
        ref={gridRef}
        className={`grid grid-cols-2 gap-4 mt-6 transition-all duration-700 ease-in-out ${
          gridInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="transition-transform duration-300 ">
          <Image
            src={GalleryImage}
            alt="Gallery Image 1"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="transition-transform duration-300 ">
          <Image
            src={GalleryImage}
            alt="Gallery Image 2"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
