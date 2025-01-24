"use client";

import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import Image from "next/image";
import GalleryImage from "@/public/assets/gallery.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const CustomNextArrow = ({ onClick }: any) => (
    <div
      className="custom-arrow custom-next-arrow"
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "-24px",
        left: "60px",
        zIndex: 1,
        borderRadius: "50%",
        borderColor: "#4CAF50",
        borderWidth: "1px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <span
        style={{
          color: "#4CAF50",
          fontSize: "16px",
          fontWeight: "lighter",
        }}
      >
        &gt;
      </span>
    </div>
  );

  const CustomPrevArrow = ({ onClick }: any) => (
    <div
      className="custom-arrow custom-prev-arrow"
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "-24px",
        left: "0",
        zIndex: 1,
        borderRadius: "50%",
        borderColor: "#4CAF50",
        borderWidth: "1px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <span
        style={{ color: "#4CAF50", fontSize: "16px", fontWeight: "lighter" }}
      >
        &lt;
      </span>
    </div>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ease-in-out ${
            sectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-2 text-green-700">
            Our Gallery
          </h2>
          <p className="text-gray-600 mb-4 w-1/2 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            erat a consectetur sollicitudin. In id dapibus lorem.
          </p>
        </div>

        {/* Image Carousel */}
        <Slider {...sliderSettings} className="mt-6 pt-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="px-2 focus-visible:outline-none">
              <Image
                src={GalleryImage}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
