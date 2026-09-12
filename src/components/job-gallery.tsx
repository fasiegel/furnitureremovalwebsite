import { JOB_PHOTOS } from "@/lib/site";

export function JobGallery() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-kelp">From the curb</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Real pickups. Real San Diego.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">
          Stage it at the driveway, garage, or alley — or we come inside. These are jobs we ran.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {JOB_PHOTOS.map((photo) => (
            <li key={photo.src}>
              <figure>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.w}
                  height={photo.h}
                  className="photo aspect-3/2 w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 text-xs text-mist">{photo.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
