import { money } from "@/lib/site";
import type { FurniturePiece } from "@/lib/furniture";

export function itemPhotoSrc(slug: string, variant: "a" | "b") {
  return `/images/items/${slug}-${variant}.jpg`;
}

export function ItemGraphics({
  piece,
  curb,
}: {
  piece: FurniturePiece;
  curb: number;
}) {
  const a = itemPhotoSrc(piece.slug, "a");
  const b = itemPhotoSrc(piece.slug, "b");
  const unitLabel = piece.units === 1 ? "1 unit" : `${piece.units} units`;

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
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/85 to-transparent px-4 pb-4 pt-16 text-kelp-fg">
          <span>
            <span className="block text-xs font-semibold uppercase tracking-widest text-kelp-fg/70">
              Pickup
            </span>
            <span className="mt-0.5 block font-display text-xl font-semibold tracking-tight">
              {piece.name}
            </span>
          </span>
          <span className="rounded-full bg-kelp px-3 py-1 text-xs font-semibold">
            {money(curb)} curb
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
          <span className="absolute left-3 top-3 rounded-full border border-kelp-fg/30 bg-kelp px-3 py-1 text-xs font-semibold uppercase tracking-widest text-kelp-fg">
            We take this
          </span>
        </div>
        <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="text-sm font-medium">{piece.name} · San Diego</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-mist">{unitLabel}</span>
        </figcaption>
      </figure>
    </div>
  );
}
