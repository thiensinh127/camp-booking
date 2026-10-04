import { Button } from "@/components/ui/button";
import { FeatureMeta } from "@/components/site/FeatureMeta";
import { BedDouble, Flame, Star, Users } from "lucide-react";
import Image from "next/image";

type Accommodation = { title: string; image: string; capacity: string; bed: string; amenity: string; price: string; badge: string };

export function AccommodationItem({ accommodation }: { accommodation: Accommodation }) {
  return <article className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="relative aspect-[4/3] overflow-hidden"><Image src={accommodation.image} alt={accommodation.title} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-[var(--forest)]">{accommodation.badge}</span></div><div className="p-5"><div className="flex items-start justify-between gap-3"><div><h3 className="font-heading text-xl font-bold">{accommodation.title}</h3><p className="mt-1 flex items-center gap-1 text-sm font-semibold text-[var(--text-secondary)]"><Star className="size-4 fill-[var(--warm-accent)] text-[var(--warm-accent)]" /> 4.9 <span className="font-normal">(128)</span></p></div><p className="text-right text-sm text-[var(--text-secondary)]"><strong className="block font-heading text-lg text-[var(--text-primary)]">{accommodation.price}</strong>/ night</p></div><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2"><FeatureMeta icon={Users}>{accommodation.capacity}</FeatureMeta><FeatureMeta icon={BedDouble}>{accommodation.bed}</FeatureMeta><FeatureMeta icon={Flame}>{accommodation.amenity}</FeatureMeta></div><Button className="mt-6 h-11 w-full rounded-xl bg-[var(--forest)] text-white hover:bg-[var(--forest-hover)]">View stay</Button></div></article>;
}
