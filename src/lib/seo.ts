import { FAQS, PLACES, SITE, type Place, placePath } from "./site";
import { furniturePath, type FurniturePiece } from "./furniture";

export const GEO = {
  lat: 32.7196,
  lng: -117.1699,
  region: "US-CA",
  placename: "San Diego, California",
} as const;

export const OG_IMAGE = `${SITE.url}/og.jpg`;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMeta({
  title,
  description,
  path,
  image = OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: GEO.region },
      { name: "geo.placename", content: GEO.placename },
      { name: "geo.position", content: `${GEO.lat};${GEO.lng}` },
      { name: "ICBM", content: `${GEO.lat}, ${GEO.lng}` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: "1455 Kettner Blvd #1502",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92101",
    addressCountry: "US",
  };
}

export function localBusinessJsonLd(area?: Place) {
  const areaName = area ? `${area.name}, San Diego County` : "San Diego County, CA";
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: ["SD Furniture Removal", "San Diego Couch Removal"],
    description:
      "Same-day furniture removal in San Diego. Couches, sectionals, dressers, and dining sets hauled, donated, or recycled. Posted prices from $69 curbside.",
    url: SITE.url,
    telephone: SITE.phoneTel,
    image: [`${SITE.url}/images/sofa-cream.jpg`, OG_IMAGE],
    logo: `${SITE.url}/favicon.svg`,
    priceRange: "$69+",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Zelle, Venmo, PayPal",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
    areaServed: area
      ? [
          { "@type": "Place", name: areaName },
          {
            "@type": "PostalAddress",
            addressLocality: area.name,
            postalCode: area.zip,
            addressRegion: "CA",
            addressCountry: "US",
          },
          { "@type": "AdministrativeArea", name: "San Diego County" },
        ]
      : [
          { "@type": "City", name: "San Diego" },
          { "@type": "AdministrativeArea", name: "San Diego County" },
          { "@type": "City", name: "Chula Vista" },
          { "@type": "City", name: "National City" },
          { "@type": "City", name: "Coronado" },
          { "@type": "City", name: "Imperial Beach" },
          { "@type": "City", name: "La Jolla" },
          ...PLACES.map((p) => ({ "@type": "Place", name: `${p.name}, CA ${p.zip}` })),
        ],
    parentOrganization: {
      "@type": "LocalBusiness",
      name: SITE.parent.name,
      url: SITE.parent.href,
    },
    sameAs: [SITE.parent.href, SITE.mattressHref],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "San Diego furniture removal",
      itemListElement: [
        {
          "@type": "Offer",
          price: "69",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Curbside furniture pickup",
            areaServed: areaName,
          },
        },
        {
          "@type": "Offer",
          price: "130",
          priceCurrency: "USD",
          itemOffered: {
            "@type": "Service",
            name: "Full-service furniture removal",
            areaServed: areaName,
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Couch and sofa removal San Diego" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Sectional and recliner haul-away" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Dresser, desk, and dining-set pickup" },
        },
      ],
    },
  };
}

export function faqJsonLd(faqs = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(place: Place) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: `Furniture removal in ${place.name}`,
        item: `${SITE.url}${placePath(place.slug)}`,
      },
    ],
  };
}

export function serviceJsonLd(place: Place) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Furniture removal in ${place.name}`,
    serviceType: "Furniture removal",
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: {
      "@type": "Place",
      name: `${place.name}, San Diego County`,
      address: {
        "@type": "PostalAddress",
        addressLocality: place.name,
        postalCode: place.zip,
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    offers: {
      "@type": "Offer",
      price: "69",
      priceCurrency: "USD",
      description: `Curbside furniture pickup in ${place.name} from $69.`,
    },
  };
}

export function placeFaqs(place: Place) {
  return [
    {
      q: `How much is furniture removal in ${place.name}?`,
      a: `Posted prices in ${place.name} (ZIP ${place.zip}) start at $69 curbside for a single couch. Full service — we come inside, including stairs — starts at $130. The estimator on this page locks the number before we knock.`,
    },
    {
      q: `Do you offer same-day furniture pickup in ${place.name}?`,
      a: `Yes. Crews run ${place.name} and nearby ${place.nearby.slice(0, 3).join(", ")} Monday–Saturday, 9am–4pm. Book a window online or text a photo to ${SITE.textDisplay}.`,
    },
  ];
}

export function furnitureBreadcrumbJsonLd(piece: FurniturePiece) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "What we take", item: `${SITE.url}/what-we-remove` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${piece.name} removal`,
        item: `${SITE.url}${furniturePath(piece.slug)}`,
      },
    ],
  };
}

export function furnitureServiceJsonLd(piece: FurniturePiece) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${piece.name} removal in San Diego`,
    serviceType: `${piece.name} removal`,
    description: piece.description,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "City", name: "San Diego" },
    offers: {
      "@type": "Offer",
      price: "69",
      priceCurrency: "USD",
      description: `${piece.name} pickup in San Diego from $69 curbside.`,
    },
  };
}

export function furnitureFaqs(piece: FurniturePiece) {
  return [
    {
      q: `How much does ${piece.name.toLowerCase()} removal cost in San Diego?`,
      a: `${piece.name} pickup starts at $69 curbside. Full service — we come inside, stairs included — starts at $130. Use the calculator on the home page for the locked price.`,
    },
    {
      q: `Do you take a ${piece.name.toLowerCase()} the same day?`,
      a: `Yes. ${piece.haul} Text a photo to ${SITE.textDisplay} or book a window Monday–Saturday, 9am–4pm.`,
    },
  ];
}
