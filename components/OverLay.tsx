import Image from "next/image";
import CampsiteValley from "@/public/assets/camp-haven-campsite-valley.webp";
import TentCommunal from "@/public/assets/camp-haven-tent-communal.webp";
import TentGarden from "@/public/assets/camp-haven-tent-garden.webp";

const OverLay = () => <div className="absolute inset-0 overflow-hidden bg-[var(--dark-forest)]"><div className="grid h-full grid-cols-1 gap-1 md:grid-cols-[1.35fr_.65fr]"><div className="relative"><Image src={CampsiteValley} alt="" fill priority sizes="(min-width: 768px) 68vw, 100vw" className="object-cover object-center" /></div><div className="hidden grid-rows-2 gap-1 md:grid"><div className="relative"><Image src={TentCommunal} alt="" fill sizes="32vw" className="object-cover object-center" /></div><div className="relative"><Image src={TentGarden} alt="" fill sizes="32vw" className="object-cover object-[center_58%]" /></div></div></div><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,15,.82),rgba(7,22,15,.46)_52%,rgba(7,22,15,.18))]" /><div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,22,15,.62),transparent_48%)]" /></div>;

export default OverLay;
