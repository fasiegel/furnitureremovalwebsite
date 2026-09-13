import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookLink, GhostLink } from "@/components/buttons";
import { Estimator } from "@/components/estimator";
import { JsonLd } from "@/components/json-ld";
import {
  PLACES,
  SITE,
  getPlace,
  nearbyLinks,
  placeBlurb,
  placePath,
  photoForPlace,
} from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
  pageMeta,
  placeFaqs,
  serviceJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/furniture-removal-in/$slug")({
  loader: ({ params }) => {
    const place = getPlace(params.slug);
    if (!place) throw notFound();
    return place;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const place = loaderData;
    return pageMeta({
      title: `Furniture Removal in ${place.name} (ZIP ${place.zip}) | Same-Day Pickup`,
      description: `Same-day furniture removal in ${place.name}, San Diego (ZIP ${place.zip}). Couches, sectionals, dressers, and dining sets from $69 curbside. Donated or recycled locally.`,
      path: placePath(place.slug),
      image: `${SITE.url}${photoForPlace(place.slug).src}`,
    });
  },
  component: NeighborhoodPage,
});

function NeighborhoodPage() {
  const place = Route.useLoaderData();
  const photo = photoForPlace(place.slug);
  const faqs = placeFaqs(place);
  const nearby = nearbyLinks(place);
  const others = PLACES.filter((p) => p.slug !== place.slug).slice(0, 10);

  return (
    <main>
      <JsonLd data={localBusinessJsonLd(place)} />
      <JsonLd data={serviceJsonLd(place)} />
      <JsonLd data={breadcrumbJsonLd(place)} />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-mist">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link to="/" className="hover:text-kelp">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-ink">Furniture removal in {place.name}</span>
            </li>
          </ol>
        </nav>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-kelp">
          {place.name}, San Diego · ZIP {place.zip} · {SITE.hours}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Furniture removal in {place.name}, San Diego.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          {placeBlurb(place)} Same-day couch pickup and haul-away from $69. Usable pieces go to
          donation partners. The rest is recycled, not dumped.
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
            { k: "San Diego", v: "Local crew, not a franchise call center." },
            { k: "Since 2004", v: "We’ve hauled over 50,000 loads." },
            { k: "Donation first", v: "Clean pieces go back to work." },
            { k: "ZIP " + place.zip, v: `Posted prices for ${place.name} start at $69.` },
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
            Couch pickup and haul-away in {place.name}.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            We take sofas, sectionals, recliners, dressers, desks, and dining sets from {place.name}{" "}
            homes, walk-ups, and HOAs. Nearby pockets we cover:
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {nearby.map((n) => (
              <li key={n.label} className="text-sm font-medium">
                {n.slug ? (
                  <Link
                    to="/furniture-removal-in/$slug"
                    params={{ slug: n.slug }}
                    className="hover:text-kelp hover:underline"
                  >
                    {n.label}
                  </Link>
                ) : (
                  n.label
                )}
              </li>
            ))}
          </ul>
          <img
            src={photo.src}
            alt={`${photo.alt} — furniture removal in ${place.name}, San Diego ${place.zip}`}
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
                Price the pieces online, or text a photo. Same-day is often open in ZIP {place.zip}.
              </p>
            </li>
            <li>
              <p className="font-display text-sm font-semibold tabular-nums text-kelp">02</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">We pick yours up</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Curbside or full service in {place.name}. Stairs, elevators, and gated entries are
                routine.
              </p>
            </li>
            <li>
              <p className="font-display text-sm font-semibold tabular-nums text-kelp">03</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">It gets a second life</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Donation partners take what they can. Scrap and wood go into San Diego County recycling
                the same day.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          {place.name} furniture removal questions.
        </h2>
        <dl className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.q} className="py-4">
              <dt className="text-sm font-medium">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-mist">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
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
            All San Diego service areas
          </Link>
        </div>
        <div className="mt-12 rounded-2xl bg-kelp px-6 py-10 text-kelp-fg sm:px-10">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Ready to clear the room in {place.name}?
          </h2>
          <p className="mt-3 max-w-lg text-sm text-kelp-fg/80">
            Same-day furniture removal in ZIP {place.zip}. Price is locked in the estimator before
            anyone knocks.
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
