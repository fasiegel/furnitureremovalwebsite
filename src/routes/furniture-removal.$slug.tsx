import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GhostLink } from "@/components/buttons";
import { JsonLd } from "@/components/json-ld";
import {
  FURNITURE_CATEGORIES,
  furniturePath,
  getFurniture,
  relatedFurniture,
} from "@/lib/furniture";
import { SITE, money, photoForPlace, priceForUnits } from "@/lib/site";
import {
  faqJsonLd,
  furnitureBreadcrumbJsonLd,
  furnitureFaqs,
  furnitureServiceJsonLd,
  localBusinessJsonLd,
  pageMeta,
} from "@/lib/seo";

export const Route = createFileRoute("/furniture-removal/$slug")({
  loader: ({ params }) => {
    const piece = getFurniture(params.slug);
    if (!piece) throw notFound();
    return piece;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const piece = loaderData;
    return pageMeta({
      title: `${piece.name} Removal San Diego | Same-Day Pickup from $69`,
      description: `${piece.description} Same-day ${piece.name.toLowerCase()} removal in San Diego from $69 curbside. Donated or recycled locally.`,
      path: furniturePath(piece.slug),
    });
  },
  component: FurnitureTypePage,
});

function FurnitureTypePage() {
  const piece = Route.useLoaderData();
  const photo = photoForPlace(piece.slug);
  const faqs = furnitureFaqs(piece);
  const related = relatedFurniture(piece);
  const category = FURNITURE_CATEGORIES.find((c) => c.id === piece.category);
  const billed = Math.max(1, Math.ceil(piece.units));
  const priced = { curb: priceForUnits(billed, "curbside"), units: billed };
  const full = priceForUnits(billed, "full");

  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={furnitureServiceJsonLd(piece)} />
      <JsonLd data={furnitureBreadcrumbJsonLd(piece)} />
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
              <Link to="/what-we-remove" className="hover:text-kelp">
                What we take
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-ink">{piece.name}</span>
            </li>
          </ol>
        </nav>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-kelp">
          {category?.label} · San Diego · from {money(priced.curb)} curbside
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {piece.name} removal in San Diego.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          {piece.description} {piece.haul}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <GhostLink href={SITE.textHref}>Text a photo</GhostLink>
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">
              {money(priced.curb)} curbside
            </p>
            <p className="mt-1 text-sm text-mist">Leave the {piece.name.toLowerCase()} at the street.</p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">{money(full)} full service</p>
            <p className="mt-1 text-sm text-mist">We come inside. Stairs and elevators included.</p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">Same day</p>
            <p className="mt-1 text-sm text-mist">{SITE.hours}. Donation first, landfill last.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            How we haul a {piece.name.toLowerCase()}.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">{piece.haul}</p>
          <img
            src={photo.src}
            alt={`${piece.name} removal in San Diego — ${photo.alt}`}
            className="photo mt-8 aspect-4/3 w-full rounded-2xl object-cover"
            width={photo.w}
            height={photo.h}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight">
          {piece.name} removal questions.
        </h2>
        <dl className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.q} className="py-4">
              <dt className="text-sm font-medium">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-mist">{item.a}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-16 font-display text-3xl font-semibold tracking-tight">
          Other furniture we remove.
        </h2>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/furniture-removal/$slug"
              params={{ slug: p.slug }}
              className="text-sm font-medium transition-colors duration-150 hover:text-kelp"
            >
              {p.name}
            </Link>
          ))}
          <Link to="/what-we-remove" className="text-sm font-medium text-kelp hover:underline">
            All furniture types
          </Link>
        </div>
      </section>
    </main>
  );
}
