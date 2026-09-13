import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import {
  DEFAULT_COUNTS,
  ITEMS,
  SITE,
  SERVICES,
  type ItemId,
  type ServiceId,
  money,
  quote,
} from "@/lib/site";
import { BookLink } from "./buttons";

export function Estimator({
  initialCounts = DEFAULT_COUNTS,
}: {
  initialCounts?: Record<ItemId, number>;
}) {
  const [counts, setCounts] = useState<Record<ItemId, number>>(initialCounts);
  const [service, setService] = useState<ServiceId>("full");

  const result = useMemo(() => quote(counts, service), [counts, service]);

  function setQty(id: ItemId, next: number) {
    setCounts((prev) => ({ ...prev, [id]: Math.max(0, Math.min(9, next)) }));
  }

  return (
    <div className="rounded-2xl border border-line bg-cream p-4 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-mist">Cost calculator</p>
      <h2 className="mt-1 font-display text-xl font-semibold tracking-tight">What are we taking?</h2>
      <p className="mt-1 text-xs text-mist">Pick the pieces, then curbside or full service.</p>

      <ul className="mt-4 divide-y divide-line border-y border-line">
        {ITEMS.map((item) => {
          const qty = counts[item.id];
          return (
            <li key={item.id} className="flex items-center justify-between gap-3 py-2.5">
              <span className="min-w-0 text-sm font-medium">{item.label}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={`Decrease ${item.label}`}
                  onClick={() => setQty(item.id, qty - 1)}
                  disabled={qty === 0}
                  className="stepper-btn grid size-10 place-items-center rounded-lg border border-line bg-white text-ink transition-colors duration-150 hover:bg-paper disabled:opacity-40"
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-5 text-center text-sm font-semibold tabular-nums">{qty}</span>
                <button
                  type="button"
                  aria-label={`Increase ${item.label}`}
                  onClick={() => setQty(item.id, qty + 1)}
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
                <li key={item.id}>
                  {item.qty} × {item.label}
                </li>
              ))}
              <li>{service === "curbside" ? "Curbside pickup" : "Full service carry-out"}</li>
            </ul>
          </>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <BookLink
          href={SITE.bookHref}
          rel="nofollow noopener noreferrer"
          className="w-full sm:w-auto"
        >
          Book now
        </BookLink>
        <p className="text-xs text-mist">
          Cancel anytime.{" "}
          <a href={SITE.mattressHref} className="underline decoration-line underline-offset-2 hover:text-kelp">
            Add a mattress
          </a>
        </p>
      </div>
    </div>
  );
}
