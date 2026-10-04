import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("transition duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none", className)}>{children}</div>;
}
