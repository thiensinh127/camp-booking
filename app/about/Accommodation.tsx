import Image from "next/image";
import { useInView } from "react-intersection-observer";
interface Accommodation {
  title: string;
  image: string;
  description: string;
}
export function Accommodation({ title, image, description }: Accommodation) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`text-center transition duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
