import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import {
  emptyFurnitureCounts,
  furnitureByCategory,
  quoteFurniture,
} from "@/lib/furniture";
import { SITE, SERVICES, type ServiceId, money } from "@/lib/site";
import { BookLink } from "./buttons";

export function Estimator({ showBook = true }: { showBook?: boolean }) {
  const [counts, setCounts] = useState<Record<string, number>>(emptyFurnitureCounts);
  const [service, setService] = useState<ServiceId>("full");
  const groups = furnitureByCategory();

  const result = useMemo(() => quoteFurniture(counts, service), [counts, service]);

  function setQty(slug: string, next: number) {
    setCounts((prev) => ({ ...prev, [slug]: Math.max(0, Math.min(9, next)) }));
  }

  return (
    <div id="calculator" className="rounded-2xl border border-line bg-cream p-4 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-mist">Cost calculator</p>
      <h2 className="mt-1 font-display text-xl font-semibold tracking-tight">What are we taking?</h2>
      <p className="mt-1 text-xs text-mist">Pick the pieces, then curbside or full service.</p>

      <div className="mt-4 divide-y divide-line border-y border-line">
        {groups.map((group, i) => (
          <details key={group.id} open={i === 0} className="group/details">
            <summary className="cursor-pointer list-none py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                {group.label}
                <span className="text-xs font-medium text-mist">
                  {group.items.length} items
                </span>
              </span>
            </summary>
            <ul className="pb-2">
              {group.items.map((item) => {
                const qty = counts[item.slug] ?? 0;
                return (
                  <li key={item.slug} className="flex items-center justify-between gap-3 py-2">
                    <span className="min-w-0 text-sm font-medium">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => setQty(item.slug, qty - 1)}
                        disabled={qty === 0}
                        className="stepper-btn grid size-10 place-items-center rounded-lg border border-line bg-white text-ink transition-colors duration-150 hover:bg-paper disabled:opacity-40"
                      >
                        <Minus className="size-4" />
                      </button>
                      <span className="w-5 text-center text-sm font-semibold tabular-nums">{qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name}`}
                        onClick={() => setQty(item.slug, qty + 1)}
                        disabled={qty === 9}
                        className="stepper-btn grid size-10 place-items-center rounded-lg border border-line bg-white text-ink transition-colors duration-150 hover:bg-paper disabled:opacity-40"
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-mist">Service</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {SERVICES.map((option) => {
          const selected = service === option.id;
          const price = option.id === "curbside" ? result.curb : result.full;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setService(option.id)}
              className={`rounded-xl border px-4 py-3 text-left transition-colors duration-150 ${
                selected
                  ? "border-kelp bg-kelp text-kelp-fg"
                  : "border-line bg-white text-ink hover:bg-paper"
              }`}
            >
              <span className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold">{option.label}</span>
                <span className="font-display text-lg font-semibold tabular-nums">
                  {result.empty ? "—" : money(price)}
                </span>
              </span>
              <span
                className={`mt-1 block text-xs leading-snug ${selected ? "text-kelp-fg/80" : "text-mist"}`}
              >
                {option.hint}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-xl border border-line bg-white px-4 py-4">
        {result.empty ? (
          <p className="text-sm text-mist">Add a piece to see the price.</p>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-mist">Due at pickup</p>
            <p className="mt-1 font-display text-4xl font-semibold tabular-nums tracking-tight">
              {money(result.total)}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-mist">
              {result.billed.map((item) => (
                <li key={item.slug}>
                  {item.qty} × {item.name}
                </li>
              ))}
              <li>{service === "curbside" ? "Curbside pickup" : "Full service carry-out"}</li>
            </ul>
          </>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        {showBook ? (
          <BookLink
            href={SITE.bookHref}
            rel="nofollow noopener noreferrer"
            className="w-full sm:w-auto"
          >
            Book now
          </BookLink>
        ) : null}
        <p className="text-xs text-mist">Cancel anytime.</p>
      </div>
    </div>
  );
}
