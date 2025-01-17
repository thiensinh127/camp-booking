import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
interface Accommodation {
  title: string;
  image: string;
  capacity: string;
  size: string;
  description: string;
}
export const AccommodationItem = ({
  accommodation,
}: {
  accommodation: Accommodation;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-[#F7F2DB] rounded-lg overflow-hidden transition-all duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image */}
      <div className="relative h-64">
        <Image
          src={accommodation.image || "/placeholder.svg"}
          alt={accommodation.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-[#345E40]">
            {accommodation.title}
          </h3>
          <div className="text-right">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Users className="h-4 w-4" />
              <span>{accommodation.capacity}</span>
            </div>
            <div className="text-sm text-gray-600">{accommodation.size}</div>
          </div>
        </div>

        <p className="text-[#555555] text-sm mb-6">
          {accommodation.description}
        </p>

        <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
          CHECK AVAILABILITY
        </Button>
      </div>
    </div>
  );
};
