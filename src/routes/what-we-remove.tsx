import { createFileRoute, Link } from "@tanstack/react-router";
import { CategoryMark } from "@/components/category-mark";
import { JsonLd } from "@/components/json-ld";
import { furnitureByCategory, furniturePath } from "@/lib/furniture";
import { SITE } from "@/lib/site";
import { localBusinessJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/what-we-remove")({
  component: WhatWeRemovePage,
  head: () =>
    pageMeta({
      title: "Furniture We Remove in San Diego | Couches, Beds, Dressers & More",
      description:
        "Same-day removal for chairs, sofas, beds, tables, dressers, and cabinets in San Diego. Posted prices from $69 curbside. Donated or recycled locally.",
      path: "/what-we-remove",
    }),
});

function WhatWeRemovePage() {
  const groups = furnitureByCategory();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Furniture we remove in San Diego",
          itemListElement: groups.flatMap((g) => g.items).map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${item.name} removal`,
            url: `${SITE.url}${furniturePath(item.slug)}`,
          })),
        }}
      />

      <p className="text-xs font-semibold uppercase tracking-widest text-kelp">What we take</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Every kind of furniture we haul in San Diego.
      </h1>
      <p className="mt-4 max-w-xl text-mist">
        Couches to cribs, nightstands to china cabinets. Same-day pickup from $69 curbside. Usable
        pieces get donated. The rest is recycled, not dumped.
      </p>

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
        {groups.map((g) => (
          <a key={g.id} href={`#${g.id}`} className="hover:text-kelp">
            {g.label}
          </a>
        ))}
      </div>

      {groups.map((group) => (
        <section key={group.id} id={group.id} className="mt-14 scroll-mt-28">
          <div className="flex items-center gap-4">
            <CategoryMark id={group.id} className="size-12" />
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight">{group.label}</h2>
              <p className="mt-1 text-sm text-mist">{group.blurb}</p>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {group.items.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/furniture-removal/$slug"
                  params={{ slug: item.slug }}
                  className="block rounded-2xl border border-line bg-cream p-5 transition-colors duration-150 hover:bg-white"
                >
                  <p className="font-display text-lg font-semibold tracking-tight">{item.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
