import { Link } from "@tanstack/react-router";
import { GhostLink } from "./buttons";
import { SITE } from "@/lib/site";

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-20 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-kelp">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
        That page isn’t on the truck.
      </h1>
      <p className="mt-4 max-w-lg text-mist">
        The link may be old, or the neighborhood page doesn’t exist. The estimator on the home page
        still works.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-kelp px-5 text-base font-medium text-kelp-fg transition-colors duration-150 hover:bg-kelp-hover"
        >
          Back home
        </Link>
        <GhostLink href={SITE.textHref}>Text us</GhostLink>
      </div>
    </main>
  );
}
