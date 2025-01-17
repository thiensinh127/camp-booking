"use client";

import {
  Mountain,
  Flame,
  SailboatIcon as Boat,
  MountainIcon as Hiking,
} from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ActivityImage from "@/public/assets/activity.png";

const activities = [
  {
    icon: <Mountain className="w-12 h-12 text-green-700" />,
    title: "Wild Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum.",
  },
  {
    icon: <Flame className="w-12 h-12 text-green-700" />,
    title: "Bonfire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum.",
  },
  {
    icon: <Boat className="w-12 h-12 text-green-700" />,
    title: "Canoeing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum.",
  },
  {
    icon: <Hiking className="w-12 h-12 text-green-700" />,
    title: "Hiking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas nisi nec libero fermentum.",
  },
];

export default function Activity() {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [activitiesRef, activitiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className=" bg-[#F7F2DB]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Illustration and Heading */}
          <div ref={headingRef} className="space-y-6">
            <div
              className={`space-y-2 transition-all duration-700 ease-in-out ${
                headingInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-green-700 font-medium">ACTIVITY</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Camp Will Be For You
                <br />
                What You Want It To Be.
              </h2>
            </div>

            {/* Illustration */}
            <div
              ref={imageRef}
              className={`max-w-md mx-auto md:mx-0 transition-all duration-700 ease-in-out ${
                imageInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <Image
                src={ActivityImage}
                alt="Camping activities illustration"
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>

          {/* Right Column - Activities */}
          <div ref={activitiesRef} className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-x-24 gap-y-16 max-w-4xl mx-auto">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 transition-all duration-700 ease-in-out delay-${
                    index * 100
                  } ${
                    activitiesInView
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${
                          index % 2 === 0 ? "-translate-x-10" : "translate-x-10"
                        }`
                  } ${index === 1 ? "mt-24" : index === 2 ? "-mt-24" : ""}`}
                >
                  <div className="flex-shrink-0">{activity.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{activity.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
