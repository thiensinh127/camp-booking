import { JSX } from "react";
import { useInView } from "react-intersection-observer";
interface Feature {
  icon: JSX.Element;
  count: number;
  label: string;
}
export const Feature = ({ icon, count, label }: Feature) => {
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
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-green-700">
        {icon}
      </div>
      <div className="font-bold text-2xl md:text-3xl mb-2">{count}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};
