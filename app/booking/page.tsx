"use client";

import { AccommodationItem } from "./BookingCard";

const accommodations = [
  {
    title: "Bell Glamp One",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sdwAAf3H35bDtIXvHf63Uo5xLJrlzs.png",
    capacity: "1-6 Persons",
    size: "25m²",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas Eu Ipsum Volutpat, Maximus Lorem Sit Amet, Ullamcorper Odio. Vivamus Eu Ultrices Lorem, Sed Blandit Magna. Nullam Faucet Quam Quis Venenatis Blandit.",
  },
  {
    title: "Caravan Solar Tent",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sdwAAf3H35bDtIXvHf63Uo5xLJrlzs.png",
    capacity: "2-8 Persons",
    size: "27m²",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas Eu Ipsum Volutpat, Maximus Lorem Sit Amet, Ullamcorper Odio. Vivamus Eu Ultrices Lorem, Sed Blandit Magna. Nullam Faucet Quam Quis Venenatis Blandit.",
  },
  {
    title: "Glamping Tent",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sdwAAf3H35bDtIXvHf63Uo5xLJrlzs.png",
    capacity: "1-6 Persons",
    size: "17m²",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas Eu Ipsum Volutpat, Maximus Lorem Sit Amet, Ullamcorper Odio. Vivamus Eu Ultrices Lorem, Sed Blandit Magna. Nullam Faucet Quam Quis Venenatis Blandit.",
  },
  {
    title: "Small Cabin Wood",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sdwAAf3H35bDtIXvHf63Uo5xLJrlzs.png",
    capacity: "1-4 Persons",
    size: "25m²",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas Eu Ipsum Volutpat, Maximus Lorem Sit Amet, Ullamcorper Odio. Vivamus Eu Ultrices Lorem, Sed Blandit Magna. Nullam Faucet Quam Quis Venenatis Blandit.",
  },
];

export default function Booking() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F2DB]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-green-700 font-medium mb-2">BOOKING</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Book Your Dream
            <br />
            Vacation Now
          </h2>
        </div>

        {/* Accommodations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {accommodations.map((accommodation, index) => (
            <AccommodationItem key={index} accommodation={accommodation} />
          ))}
        </div>
      </div>
    </section>
  );
}
