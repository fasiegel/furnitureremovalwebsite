import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageSquare } from "lucide-react";
import { BookLink, GhostLink } from "@/components/buttons";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: `Contact | ${SITE.name}` },
      {
        name: "description",
        content: `Text ${SITE.name} at ${SITE.textDisplay}. ${SITE.hours}. Same-day furniture pickup across central San Diego.`,
      },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/contact` }],
  }),
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-kelp">Contact</p>
      <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Text Fred. Or book a window online.
      </h1>
      <p className="mt-4 max-w-lg text-mist">
        No phone tree. A real person in San Diego answers. Send a photo of the pieces and we’ll
        confirm the number you already saw in the estimator.
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
        <div className="rounded-2xl border border-line bg-cream p-5">
          <MapPin className="size-5 text-kelp" />
          <p className="mt-4 font-display text-lg font-semibold tracking-tight">Based in</p>
          <p className="mt-1 text-sm text-mist">{SITE.address}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <BookLink href={SITE.bookHref} rel="nofollow noopener noreferrer">
          Book now
        </BookLink>
        <GhostLink href={SITE.textHref}>Text a photo</GhostLink>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3">
        <img
          src="/images/dressers.jpg"
          alt="Two dressers staged on a San Diego sidewalk"
          className="photo aspect-3/4 w-full rounded-2xl object-cover"
          width={480}
          height={640}
        />
        <img
          src="/images/recliner.jpg"
          alt="Recliner and patio chair staged in a driveway"
          className="photo aspect-3/4 w-full rounded-2xl object-cover"
          width={480}
          height={640}
        />
      </div>
    </main>
  );
}
