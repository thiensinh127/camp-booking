import { type LucideIcon } from "lucide-react";

export function FeatureMeta({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)]"><Icon aria-hidden="true" className="size-4 text-[var(--forest)]" />{children}</span>;
}
