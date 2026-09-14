import { Link } from "@tanstack/react-router";

export function CalculatorPromo() {
  return (
    <Link
      to="/"
      hash="calculator"
      className="group relative block overflow-hidden rounded-2xl bg-ink text-kelp-fg"
    >
      <img
        src="/images/calculator-promo.jpg"
        alt=""
        className="aspect-3/4 w-full object-cover object-center sm:aspect-auto sm:h-full sm:min-h-[32rem]"
        width={1200}
        height={1600}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10"
        aria-hidden="true"
      />
      <span className="absolute left-5 top-5 grid size-20 place-items-center rounded-2xl bg-cream text-kelp shadow-sm sm:size-24">
        <span className="text-center">
          <span className="block text-[10px] font-semibold uppercase tracking-widest">from</span>
          <span className="block font-display text-3xl font-semibold leading-none tracking-tight sm:text-4xl">
            $69
          </span>
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <span className="block text-xs font-semibold uppercase tracking-widest text-kelp-fg/70">
          Guaranteed prices
        </span>
        <span className="mt-2 block font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
          Use our furniture removal cost calculator for guaranteed prices.
        </span>
        <span className="mt-5 inline-flex h-12 items-center rounded-lg bg-cream px-5 text-sm font-medium text-ink transition-colors duration-150 group-hover:bg-white">
          Open the calculator
        </span>
      </span>
    </Link>
  );
}
