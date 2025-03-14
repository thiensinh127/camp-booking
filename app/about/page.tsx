"use client";

import { Tent, Warehouse, CaravanIcon, Hotel, Home } from "lucide-react";
import { Accommodation } from "./Accommodation";
import { Feature } from "./Feature";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <CaravanIcon className="h-8 w-8" />,
    count: 30,
    label: "CAMPER SITES",
  },
  {
    icon: <Warehouse className="h-8 w-8" />,
    count: 25,
    label: "CARAVAN SITES",
  },
  {
    icon: <Tent className="h-8 w-8" />,
    count: 50,
    label: "TENT SITES",
  },
  {
    icon: <Hotel className="h-8 w-8" />,
    count: 10,
    label: "GLAMP SITES",
  },
  {
    icon: <Home className="h-8 w-8" />,
    count: 10,
    label: "CABIN HOUSES",
  },
];

const accommodations = [
  {
    title: "Camping Area For Tents",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20104924-Bl1fFYgWIfW6p08ybNAHXssp4UzY9T.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum, a varius tortor venenatis. Sed vitae dolor interdum.",
  },
  {
    title: "Trailers And RV Spots",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20104924-Bl1fFYgWIfW6p08ybNAHXssp4UzY9T.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum, a varius tortor venenatis. Sed vitae dolor interdum.",
  },
  {
    title: "Cabins And Glamping",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-17%20104924-Bl1fFYgWIfW6p08ybNAHXssp4UzY9T.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum, a varius tortor venenatis. Sed vitae dolor interdum.",
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="py-16 md:py-24 bg-[#F7F2DB]" id="about">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 transition duration-700 ease-in-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Welcome To Glamour
            <br />
            Camping Ground
          </h2>
          <p
            className={`text-gray-600 transition duration-700 ease-in-out delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            egestas nisi nec libero fermentum. A varius tortor venenatis. Sed
            vitae dolor interdum, semper leo at, tristique nisi. Maecenas vitae
            luctus tortor. Vel efficitur sem. Maecenas tristique sem nec magna
            gravida varius. Aliquam nec ligula a augue congue condimentum.
            Pellentesque ligula lorem euismod. Viverra nisi in, viverra velit.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              count={feature.count}
              label={feature.label}
            />
          ))}
        </div>

        {/* Accommodations */}
        <div className="grid md:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Accommodation
              key={index}
              title={accommodation.title}
              image={accommodation.image}
              description={accommodation.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
