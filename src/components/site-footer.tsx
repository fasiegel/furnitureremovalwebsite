import { Link } from "@tanstack/react-router";
import { SITE, PLACES } from "@/lib/site";
import { GhostLink } from "./buttons";
import { BrandMark } from "./mark";
import { Stars } from "./stars";

export function SiteFooter() {
  return (
    <footer>
      <section className="bg-kelp text-kelp-fg">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:px-6 sm:py-10">
          <Stars />
          <p className="text-xs font-semibold uppercase tracking-widest text-kelp-fg/70">
            A service of
          </p>
          <p className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
            {SITE.parent.name}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-kelp-fg/85 sm:text-base">
            {SITE.name} is a service provided by {SITE.parent.name}, {SITE.parent.claim}.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-ink text-kelp-fg">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Leave the sofa. Take the afternoon.
          </h2>
          <p className="mt-4 max-w-lg text-kelp-fg/70">
            Same-day crews running now. Price is locked in the estimator before anyone knocks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GhostLink
              href={SITE.textHref}
              className="border-kelp-fg/20 text-kelp-fg hover:bg-kelp-fg/10"
            >
              Text us
            </GhostLink>
          </div>

          <div className="mt-16 grid gap-10 border-t border-kelp-fg/10 pt-10 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2.5">
                <BrandMark className="size-7" />
                <p className="font-display text-sm font-semibold">{SITE.name}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-kelp-fg/70">
                Same-day furniture removal in San Diego. Couches, dressers, and dining sets — donated
                or recycled locally.
              </p>
              <address className="mt-4 not-italic text-sm leading-relaxed text-kelp-fg/80">
                {SITE.name}
                <br />
                {SITE.address}
                <br />
                <a href={SITE.textHref} className="hover:text-cream">
                  {SITE.textDisplay}
                </a>
                <br />
                {SITE.hours}
              </address>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-kelp-fg/50">Visit</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-cream">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-cream">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/what-we-remove" className="hover:text-cream">
                    What we take
                  </Link>
                </li>
                <li>
                  <a href={SITE.mattressHref} className="hover:text-cream">
                    Mattress removal
                  </a>
                </li>
                <li>
                  <a href={SITE.parent.href} className="hover:text-cream">
                    {SITE.parent.name}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-kelp-fg/50">Contact</p>
              <ul className="mt-3 space-y-2 text-sm text-kelp-fg/80">
                <li>
                  <a href={SITE.textHref} className="hover:text-cream">
                    Text us · {SITE.textDisplay}
                  </a>
                </li>
                <li>{SITE.hours}</li>
                <li>
                  <a href={SITE.mapsHref} className="hover:text-cream">
                    {SITE.address}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-kelp-fg/50">
            Licensed · insured · veteran owned. Usable furniture goes to donation partners. The rest is
            recycled through San Diego County channels.
          </p>
        </div>
      </section>

      <section className="border-t border-kelp-fg/10 bg-ink text-kelp-fg/40">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs sm:px-6">
          <p className="leading-relaxed">
            Serving {PLACES.length} neighborhoods from San Ysidro to La Jolla.{" "}
            {SITE.name} · a service of {SITE.parent.name}.
          </p>
        </div>
      </section>
    </footer>
  );
}
