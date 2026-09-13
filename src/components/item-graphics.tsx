import { money } from "@/lib/site";
import type { FurniturePiece } from "@/lib/furniture";

export function itemPhotoSrc(slug: string, variant: "a" | "b") {
  return `/images/items/${slug}-${variant}.jpg`;
}

export function ItemGraphics({
  piece,
  curb,
  full,
}: {
  piece: FurniturePiece;
  curb: number;
  full: number;
}) {
  const a = itemPhotoSrc(piece.slug, "a");
  const b = itemPhotoSrc(piece.slug, "b");
  const item = piece.name.toLowerCase();

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
      <figure className="relative overflow-hidden rounded-2xl bg-ink">
        <img
          src={a}
          alt={`${piece.name} staged for San Diego furniture removal`}
          className="aspect-4/3 h-full w-full object-cover"
          width={1600}
          height={1200}
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-4 pt-16 text-kelp-fg">
          <span className="block text-xs font-semibold uppercase tracking-widest text-kelp-fg/70">
            We pick up {item}
          </span>
          <span className="mt-1 block font-display text-lg font-semibold tracking-tight">
            {money(curb)} curbside · {money(full)} full service
          </span>
        </figcaption>
      </figure>

      <figure className="flex flex-col overflow-hidden rounded-2xl border border-line bg-cream">
        <div className="relative">
          <img
            src={b}
            alt={`${piece.name} ready for haul-away in San Diego`}
            className="aspect-4/5 w-full object-cover object-center sm:aspect-4/3 lg:aspect-4/5"
            width={1200}
            height={1600}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-kelp/25 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <figcaption className="px-4 py-3">
          <span className="block text-sm font-medium">We pick up {item}</span>
          <span className="mt-0.5 block text-xs font-semibold uppercase tracking-widest text-mist">
            {money(curb)} curbside · {money(full)} full service
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
