import { Star } from "lucide-react";

export function Stars({ className = "text-kelp-fg" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </span>
  );
}
