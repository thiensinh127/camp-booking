import { cn } from "@/lib/utils";

type SectionHeadingProps = { eyebrow?: string; title: string; description?: string; align?: "left" | "center"; className?: string };

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return <header className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>{eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}<h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.035em] text-[var(--text-primary)]">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{description}</p>}</header>;
}
