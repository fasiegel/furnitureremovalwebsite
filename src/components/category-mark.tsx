import type { ReactNode } from "react";
import type { FurnitureCategoryId } from "@/lib/furniture";

const ICONS: Record<FurnitureCategoryId, (props: { className?: string }) => ReactNode> = {
  seating: ({ className }) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 22c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v2h2c2.2 0 4 1.8 4 4v6h-4v2h-4v-2H10v2H6v-2H2v-6c0-2.2 1.8-4 4-4h2v-2zm6-3c-1.7 0-3 1.3-3 3v2h26v-2c0-1.7-1.3-3-3-3H14z"
      />
    </svg>
  ),
  beds: ({ className }) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 10h6v12h26c2.2 0 4 1.8 4 4v10h-4v2h-4v-2H12v2H8v-2H4V26c0-2.2 1.8-4 4-4V10zm6 14H8c-1.1 0-2 .9-2 2v6h36v-6c0-1.1-.9-2-2-2H14z"
      />
    </svg>
  ),
  mattresses: ({ className }) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 18h36c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V22c0-2.2 1.8-4 4-4zm2 6c0-1.7 1.3-3 3-3h26c1.7 0 3 1.3 3 3v6c0 1.7-1.3 3-3 3H11c-1.7 0-3-1.3-3-3v-6z"
      />
    </svg>
  ),
  tables: ({ className }) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 16h40v5H4v-5zm6 7h4v15H8v-2h-2V23h4zm28 0h4v15h-2v2h-4V23h2z"
      />
    </svg>
  ),
  storage: ({ className }) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 6h32c1.1 0 2 .9 2 2v32c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm2 4v8h28v-8H10zm0 12v8h28v-8H10zm0 12v8h28v-8H10zm22-22h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
      />
    </svg>
  ),
};

const TONE: Record<FurnitureCategoryId, string> = {
  seating: "bg-kelp text-kelp-fg",
  beds: "bg-book text-book-fg",
  mattresses: "bg-ink text-cream",
  tables: "bg-cream text-kelp ring-1 ring-kelp/30",
  storage: "bg-book text-book-fg",
};

export function CategoryMark({
  id,
  className = "size-14",
  plain = false,
}: {
  id: FurnitureCategoryId;
  className?: string;
  plain?: boolean;
}) {
  const Icon = ICONS[id];
  return (
    <span
      className={`grid place-items-center rounded-2xl ${plain ? "" : TONE[id]} ${className}`}
    >
      <Icon className="size-8" />
    </span>
  );
}
