import { Link } from "@tanstack/react-router";
import { FURNITURE_CATEGORIES } from "@/lib/furniture";
import { CategoryMark } from "./category-mark";

export function CalculatorPromo() {
  return (
    <Link
      to="/"
      hash="calculator"
      className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl bg-kelp p-6 text-kelp-fg sm:min-h-[28rem] sm:p-8"
    >
      <div className="flex flex-wrap gap-2" aria-hidden="true">
        {FURNITURE_CATEGORIES.map((cat) => (
          <CategoryMark
            key={cat.id}
            id={cat.id}
            plain
            className="size-11 bg-kelp-fg/15 text-kelp-fg"
          />
        ))}
      </div>
      <div className="relative mt-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-kelp-fg/70">
          Guaranteed prices
        </p>
        <p className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Use our furniture removal cost calculator for guaranteed prices.
        </p>
        <p className="mt-6 text-sm font-medium underline decoration-kelp-fg/40 underline-offset-4">
          Open the calculator
        </p>
      </div>
    </Link>
  );
}
