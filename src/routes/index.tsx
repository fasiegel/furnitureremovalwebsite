import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, MapPin, Recycle, Shield } from "lucide-react";
import type { ReactNode } from "react";
import { BookLink } from "@/components/buttons";
import { Estimator } from "@/components/estimator";
import { FaqList } from "@/components/faq";
import { JobGallery } from "@/components/job-gallery";
import { JsonLd } from "@/components/json-ld";
import {
  EXAMPLE_JOBS,
  PLACES,
  SITE,
  TESTIMONIALS,
  money,
  quote,
} from "@/lib/site";
import { faqJsonLd, localBusinessJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageMeta({
      title: "Furniture Removal San Diego | Same-Day Pickup from $69",
      description:
        "Same-day furniture removal in San Diego. Couch, sectional, dresser, and dining-set pickup from $69 curbside. Donated or recycled locally. Licensed & insured.",
      path: "/",
      image: `${SITE.url}/images/sofa-cream.jpg`,
    }),
});

function Home() {
  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd()} />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-kelp">
            Service Central San Diego · {SITE.hours}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            San Diego furniture removal — same-day pickup from $69.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-mist sm:text-lg">
            We haul couches, dressers, and dining sets from homes, walk-ups, and HOAs across
            central San Diego. Most jobs take under twenty minutes. Usable pieces get donated —
            the rest is recycled, not dumped.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "From $69 curbside, posted before you book",
              "Two-person crew",
              "Pay on site",
            ].map((line) => (
              <li key={line} className="flex items-center gap-2">
                <Check className="size-4 shrink-0 text-kelp" />
                {line}
              </li>
            ))}
          </ul>
          <img
            src="/images/sofa-cream.jpg"
            alt="San Diego furniture removal — cream sofa staged at the curb for same-day pickup"
            className="photo mt-8 aspect-4/3 w-full rounded-2xl object-cover object-top"
            width={1600}
            height={1200}
          />
        </div>
        <Estimator />
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:grid-cols-3">
          <TrustCard
            icon={<Shield className="size-5" />}
            title="Licensed & insured"
            body="Two-person crews. Floors, rails, and walls stay intact."
          />
          <TrustCard
            icon={<Recycle className="size-5" />}
            title="Donated or recycled"
            body="Usable furniture goes to partners. Metal and wood go back to work."
          />
          <TrustCard
            icon={<MapPin className="size-5" />}
            title="Central San Diego"
            body="From San Ysidro to La Jolla, inland through Chula Vista, National City, and Mission Valley."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-kelp">How it works</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Three moves. No dump run.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            {
              n: "01",
              title: "Price it",
              body: "Add pieces, pick curbside or full service. The number you see is the number we charge.",
            },
            {
              n: "02",
              title: "Pick a window",
              body: "Same-day or later this week. We’ll call or text 10–30 minutes before we arrive.",
            },
            {
              n: "03",
              title: "We take it",
              body: "You point. We carry. Usable pieces get donated. The rest is sorted the same afternoon.",
            },
          ].map((step) => (
            <div key={step.n}>
              <p className="font-display text-sm font-semibold tabular-nums text-kelp">{step.n}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-mist">
          <Clock className="size-4 text-kelp" />
          Book online. We’ll call or text 10–30 minutes before arriving.
        </p>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-kelp">Pricing</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A few example jobs.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-mist">
            Add your pieces in the calculator for an exact number. Curbside is from the street. Full
            service includes the carry-out.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {EXAMPLE_JOBS.map((job) => {
              const curb = quote(job.counts, "curbside");
              const full = quote(job.counts, "full");
              return (
                <li key={job.title} className="rounded-2xl border border-line bg-paper p-5 sm:p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{job.title}</h3>
                  <p className="mt-1 text-sm text-mist">{job.note}</p>
                  <div className="mt-5 flex gap-8">
                    <p>
                      <span className="block text-sm text-mist">Curbside</span>
                      <span className="font-display text-3xl font-semibold tabular-nums tracking-tight">
                        {money(curb.total)}
                      </span>
                    </p>
                    <p>
                      <span className="block text-sm text-mist">Full service</span>
                      <span className="font-display text-3xl font-semibold tabular-nums tracking-tight">
                        {money(full.total)}
                      </span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <img
          src="/images/sofas-sidewalk.jpg"
          alt="Sofas and chairs staged on a San Diego sidewalk for haul-away"
          className="photo aspect-4/5 w-full rounded-2xl object-cover object-top lg:max-h-[36rem]"
          width={1280}
          height={1600}
        />
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tight stairs. Tight quotes.
          </h2>
          <p className="mt-4 leading-relaxed text-mist">
            Pacific Beach walk-ups, Hillcrest Victorians, North Park bungalows with a 90-degree
            landing — this is what we do. Save your back. You don’t have to drag a sectional down two
            flights of stairs when our two-person crew has the experience to get it done safely.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookLink href={SITE.bookHref} rel="nofollow noopener noreferrer">
              Book now
            </BookLink>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-kelp">Service area</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Furniture removal near you in San Diego.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">
            Couch pickup, sofa haul-away, and full-service carry-out from San Ysidro to La Jolla,
            inland through Chula Vista, National City, and Mission Valley. Open a neighborhood page
            for your ZIP.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              {
                src: "/images/apartment.jpg",
                alt: "Couch, recliners, and tables staged in an apartment parking lot",
              },
              {
                src: "/images/pile.jpg",
                alt: "Curbside pile of furniture ready for haul-away",
              },
              {
                src: "/images/mixed.jpg",
                alt: "Chairs, mattress, and wood pieces staged at a house",
              },
            ].map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={500}
                height={281}
                className="photo aspect-4/3 w-full rounded-xl object-cover"
              />
            ))}
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-mist">
            Central San Diego and nearby communities
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {PLACES.map((place) => (
              <Link
                key={place.slug}
                to="/furniture-removal-in/$slug"
                params={{ slug: place.slug }}
                className="text-sm font-medium transition-colors duration-150 hover:text-kelp"
              >
                {place.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-kelp">Recycling</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Donation first. Landfill last.
          </h2>
          <p className="mt-4 leading-relaxed text-mist">
            Clean, usable furniture goes to donation partners the same day. Metal frames become scrap.
            Wood gets diverted when it can be. We exist for everyone who would rather not drag a sofa
            into a truck and across town.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-mist">
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-kelp" />
              We do not leave furniture in alleys or canyon pull-outs.
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-kelp" />
              Wet or broken pieces are bagged. Biohazards are declined.
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-kelp" />
              Mattresses and box springs ride along as a sister service.
            </li>
          </ul>
        </div>
        <div className="grid gap-3">
          <img
            src="/images/chairs.jpg"
            alt="Four dining chairs and a sofa staged for pickup"
            className="photo aspect-4/3 w-full rounded-2xl object-cover"
            width={500}
            height={281}
          />
          <img
            src="/images/patio.jpg"
            alt="Sofa, chairs, and bookshelves staged under a carport"
            className="photo aspect-4/3 w-full rounded-2xl object-cover"
            width={435}
            height={245}
          />
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-kelp">Neighbors</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What people say after the truck leaves.
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li key={t.name} className="rounded-2xl border border-line bg-paper p-5">
                <p className="text-sm leading-relaxed">“{t.text}”</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-mist">
                  {t.name} · {t.place}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3">
            <img
              src="/images/sectional.jpg"
              alt="Three-piece leather sectional staged at the curb"
              className="photo aspect-4/3 w-full rounded-xl object-cover"
              width={500}
              height={281}
            />
            <img
              src="/images/office.jpg"
              alt="Desks, chairs, and shelves staged in front of an apartment"
              className="photo aspect-4/3 w-full rounded-xl object-cover"
              width={437}
              height={246}
            />
          </div>
        </div>
      </section>

      <JobGallery />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-kelp">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Before you book.
        </h2>
        <div className="mt-8 max-w-3xl">
          <FaqList />
        </div>
      </section>
    </main>
  );
}

function TrustCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="flex size-10 items-center justify-center rounded-lg bg-kelp text-kelp-fg">
        {icon}
      </div>
      <h2 className="mt-4 font-display text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm leading-relaxed text-mist">{body}</p>
    </div>
  );
}
