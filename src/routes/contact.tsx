import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageSquare } from "lucide-react";
import { GhostLink } from "@/components/buttons";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site";
import { localBusinessJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    pageMeta({
      title: `Contact San Diego Furniture Removal | Text ${SITE.textDisplay}`,
      description: `Text San Diego furniture removal at ${SITE.textDisplay}. ${SITE.hours}. Same-day couch and sofa pickup. ${SITE.address}.`,
      path: "/contact",
    }),
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd data={localBusinessJsonLd()} />
      <p className="text-xs font-semibold uppercase tracking-widest text-kelp">Contact</p>
      <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Text Fred for San Diego furniture removal.
      </h1>
      <p className="mt-4 max-w-lg text-mist">
        No phone tree. A real person in San Diego answers. Send a photo of the couch, dresser, or
        dining set and we’ll confirm the number you already saw in the estimator.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <a
          href={SITE.textHref}
          className="rounded-2xl border border-line bg-cream p-5 transition-colors duration-150 hover:bg-white"
        >
          <MessageSquare className="size-5 text-kelp" />
          <p className="mt-4 font-display text-lg font-semibold tracking-tight">Text us</p>
          <p className="mt-1 text-sm text-mist">{SITE.textDisplay}</p>
        </a>
        <div className="rounded-2xl border border-line bg-cream p-5">
          <Clock className="size-5 text-kelp" />
          <p className="mt-4 font-display text-lg font-semibold tracking-tight">Hours</p>
          <p className="mt-1 text-sm text-mist">{SITE.hours}. Sunday closed.</p>
        </div>
        <a
          href={SITE.mapsHref}
          className="rounded-2xl border border-line bg-cream p-5 transition-colors duration-150 hover:bg-white"
        >
          <MapPin className="size-5 text-kelp" />
          <p className="mt-4 font-display text-lg font-semibold tracking-tight">Based in</p>
          <p className="mt-1 text-sm text-mist">{SITE.address}</p>
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <GhostLink href={SITE.textHref}>Text a photo</GhostLink>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-line">
        <iframe
          title="San Diego furniture removal office map"
          src="https://www.google.com/maps?q=1455+Kettner+Blvd+San+Diego+CA+92101&output=embed"
          className="h-64 w-full border-0 sm:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
        <img
          src="/images/dressers.jpg"
          alt="San Diego furniture removal — two dressers staged on a sidewalk"
          className="photo aspect-3/4 w-full rounded-2xl object-cover"
          width={480}
          height={640}
        />
        <img
          src="/images/recliner.jpg"
          alt="San Diego furniture removal — recliner staged in a driveway"
          className="photo aspect-3/4 w-full rounded-2xl object-cover"
          width={480}
          height={640}
        />
      </div>
    </main>
  );
}
