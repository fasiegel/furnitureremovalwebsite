import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { GhostLink } from "./buttons";
import { BrandMark } from "./mark";
import { Stars } from "./stars";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="bg-kelp text-kelp-fg">
        <p className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2.5 text-center text-xs leading-snug sm:px-6 sm:text-sm">
          <Stars className="hidden text-kelp-fg sm:inline-flex" />
          <span>
            {SITE.name} is a service provided by{" "}
            <span className="font-semibold">{SITE.parent.name}</span>
            <span className="text-kelp-fg/80"> — {SITE.parent.claim}</span>
          </span>
          <Stars className="hidden text-kelp-fg sm:inline-flex" />
        </p>
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <BrandMark />
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-semibold leading-tight tracking-tight sm:text-base">
              {SITE.name}
            </span>
            <span className="hidden text-xs text-mist sm:block">From $69 · guaranteed prices</span>
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            to="/what-we-remove"
            className="hidden px-3 text-sm font-medium transition-colors duration-150 hover:text-kelp sm:inline"
          >
            What we take
          </Link>
          <GhostLink href={SITE.textHref} className="h-10 px-4 text-sm">
            Text us
          </GhostLink>
        </nav>
      </div>
    </header>
  );
}
