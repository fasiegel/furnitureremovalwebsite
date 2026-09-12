import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookLink, GhostLink } from "@/components/buttons";
import { Estimator } from "@/components/estimator";
import {
  PLACES,
  SITE,
  getPlace,
  placePath,
  photoForPlace,
} from "@/lib/site";

export const Route = createFileRoute("/furniture-removal-in/$slug")({
  loader: ({ params }) => {
    const place = getPlace(params.slug);
    if (!place) throw notFound();
    return place;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const place = loaderData;
    return {
      meta: [
        { title: `Furniture Removal in ${place.name} | ${SITE.name}` },
        {
          name: "description",
          content: `Same-day furniture removal in ${place.name} (ZIP ${place.zip}). Couches, dressers, dining sets. Posted prices from $69 curbside.`,
        },
      ],
      links: [{ rel: "canonical", href: `${SITE.url}${placePath(place.slug)}` }],
    };
  },
  component: NeighborhoodPage,
});

function NeighborhoodPage() {
  const place = Route.useLoaderData();
  const nearby = place.nearby.join(", ");
  const others = PLACES.filter((p) => p.slug !== place.slug).slice(0, 8);
  const photo = photoForPlace(place.slug);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-kelp">
          ZIP {place.zip} · {SITE.hours}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Furniture removal in {place.name}.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          We pick up couches, dressers, and dining sets in {place.name} and the streets around it —{" "}
          {nearby}, and more. Most jobs take under twenty minutes. Usable pieces go to donation
          partners. The rest is recycled, not dumped.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <BookLink href={SITE.bookHref} rel="nofollow noopener noreferrer">
            Book now
          </BookLink>
          <GhostLink href={SITE.textHref}>Text us</GhostLink>
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {[
            { k: "San Diego", v: "The city’s favorite furniture hauler." },
            { k: "Since 2004", v: "We’ve hauled over 50,000 loads." },
            { k: "Donation first", v: "Clean pieces go back to work." },
            { k: "Not dumped", v: "Metal and wood get sorted, not left in an alley." },
          ].map((stat) => (
            <div key={stat.k}>
              <p className="font-display text-lg font-semibold tracking-tight">{stat.k}</p>
              <p className="mt-1 text-sm text-mist">{stat.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Neighborhoods we serve in {place.name}.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Pickup covers {place.name} and these nearby pockets. Walk-ups, HOAs, and gated entries
            are routine.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {place.nearby.map((n) => (
              <li key={n} className="text-sm font-medium">
                {n}
              </li>
            ))}
          </ul>
          <img
            src={photo.src}
            alt={photo.alt}
            className="photo mt-8 aspect-4/3 w-full rounded-2xl object-cover"
            width={photo.w}
            height={photo.h}
          />
        </div>
        <Estimator />
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            How a furniture pickup works in {place.name}.
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            <li>
              <p className="font-display text-sm font-semibold tabular-nums text-kelp">01</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">You book a window</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Price the pieces online, or text a photo. Same-day is often open.
              </p>
            </li>
            <li>
              <p className="font-display text-sm font-semibold tabular-nums text-kelp">02</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">We pick yours up</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Curbside or full service in {place.name}. No trip across town required.
              </p>
            </li>
            <li>
              <p className="font-display text-sm font-semibold tabular-nums text-kelp">03</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">It gets a second life</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Donation partners take what they can. Scrap and wood go into the recycling stream the
                same day.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          Furniture removal next door.
        </h2>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/furniture-removal-in/$slug"
              params={{ slug: p.slug }}
              className="text-sm font-medium transition-colors duration-150 hover:text-kelp"
            >
              {p.name}
            </Link>
          ))}
          <Link to="/" className="text-sm font-medium text-kelp hover:underline">
            All service areas
          </Link>
        </div>
        <div className="mt-12 rounded-2xl bg-kelp px-6 py-10 text-kelp-fg sm:px-10">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Ready to clear the room in {place.name}?
          </h2>
          <p className="mt-3 max-w-lg text-sm text-kelp-fg/80">
            Same-day crews running now. Price is locked in the estimator before anyone knocks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookLink href={SITE.bookHref} rel="nofollow noopener noreferrer">
              Book now
            </BookLink>
            <GhostLink
              href={SITE.textHref}
              className="border-kelp-fg/20 text-kelp-fg hover:bg-kelp-fg/10"
            >
              Text us
            </GhostLink>
          </div>
        </div>
      </section>
    </main>
  );
}
