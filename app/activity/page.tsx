import { Bike, Bird, Flame, Mountain, Sailboat, Sparkles } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/site/SectionHeading";

const activities = [[Mountain, "Hiking", "Trails for every pace."], [Sailboat, "Kayaking", "Paddle at your own rhythm."], [Flame, "Bonfire", "Slow evenings by the fire."], [Bird, "Wildlife", "Nature is your neighbour."], [Sparkles, "Stargazing", "A darker sky, brighter nights."], [Bike, "Cycling", "Explore beyond camp."]] as const;

export default function Activity() {
  return <section id="activity" className="section-space bg-[var(--surface-muted)]"><div className="page-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16"><div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1200&q=85" alt="Friends enjoying a quiet campfire" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div><div><SectionHeading eyebrow="Activities" title="More Than a Stay" description="Let the day unfold outside. Wander farther, paddle slower, and come back to a fire already glowing." /><div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">{activities.map(([Icon, title, description]) => <div key={title} className="group flex gap-3"><div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[var(--forest)] transition-transform duration-200 group-hover:-translate-y-1"><Icon className="size-5" /></div><div><h3 className="font-heading font-bold">{title}</h3><p className="mt-1 text-sm leading-5 text-[var(--text-secondary)]">{description}</p></div></div>)}</div></div></div></section>;
}
