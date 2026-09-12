export const SITE = {
  name: "San Diego Furniture Removal",
  short: "SD Furniture",
  hours: "9am–4pm, Mon–Sat",
  tagline: "Same-day pickup. Donated or recycled locally.",
  url: "https://www.furnitureremovalsandiego.com",
  bookHref: "https://widget.zenbooker.com/book/fredsjunkremoval",
  textHref:
    "sms:+16192459957?body=Hi%20Fred%2C%20I%20need%20a%20quote%20for%20furniture%20removal.",
  textDisplay: "(619) 245-9957",
  phoneTel: "+16192459957",
  address: "1455 Kettner Blvd #1502, San Diego, CA 92101",
  mattressHref: "https://www.mattressremovalsandiego.com/",
  parent: {
    name: "Fred's Junk Removal",
    claim: "San Diego’s top-rated and most trusted junk removal service",
    href: "https://www.fredsjunkremoval.com/",
  },
} as const;

export type Place = {
  slug: string;
  name: string;
  zip: string;
  nearby: string[];
};

export const PLACES: Place[] = [
  { slug: "allied-gardens", name: "Allied Gardens", zip: "92120", nearby: ["Grantville", "San Carlos", "Del Cerro", "Lake Murray"] },
  { slug: "bonita", name: "Bonita", zip: "91902", nearby: ["Sunnyside", "Sweetwater", "Lynwood Hills", "Bonita Long Canyon"] },
  { slug: "chula-vista", name: "Chula Vista", zip: "91910", nearby: ["Eastlake", "Otay Ranch", "San Miguel Ranch", "Rolling Hills Ranch", "Castle Park", "Rancho del Rey"] },
  { slug: "city-heights", name: "City Heights", zip: "92105", nearby: ["Cherokee Point", "Azalea Park", "Colina del Sol", "Fairmount Park"] },
  { slug: "clairemont-mesa", name: "Clairemont Mesa", zip: "92117", nearby: ["Bay Park", "North Clairemont", "Clairemont Village", "Tecolote Canyon"] },
  { slug: "college-grove", name: "College Grove", zip: "92115", nearby: ["College Area", "Redwood Village", "Oak Park", "Rolando"] },
  { slug: "coronado", name: "Coronado", zip: "92118", nearby: ["Coronado Village", "Coronado Cays", "Glorietta", "North Island"] },
  { slug: "del-cerro", name: "Del Cerro", zip: "92120", nearby: ["San Carlos", "Allied Gardens", "Lake Murray", "Navajo"] },
  { slug: "downtown", name: "Downtown", zip: "92101", nearby: ["East Village", "Gaslamp", "Little Italy", "Marina", "Cortez Hill"] },
  { slug: "eastlake", name: "Eastlake", zip: "91915", nearby: ["Eastlake Woods", "Eastlake Trails", "Eastlake Vistas", "Eastlake Greens", "Otay Ranch"] },
  { slug: "encanto", name: "Encanto", zip: "92114", nearby: ["Valencia Park", "Lincoln Park", "Emerald Hills", "Broadway Heights"] },
  { slug: "golden-hill", name: "Golden Hill", zip: "92102", nearby: ["South Park", "Sherman Heights", "Grant Hill", "Stockton"] },
  { slug: "hillcrest", name: "Hillcrest", zip: "92103", nearby: ["Bankers Hill", "University Heights", "Mission Hills", "Park West"] },
  { slug: "imperial-beach", name: "Imperial Beach", zip: "91932", nearby: ["Seacoast", "Palm Avenue", "South Imperial Beach", "IB Marina"] },
  { slug: "kearny-mesa", name: "Kearny Mesa", zip: "92111", nearby: ["Stonecrest", "Montgomery Field", "Serra Mesa", "Spectrum Center"] },
  { slug: "kensington", name: "Kensington", zip: "92116", nearby: ["Talmadge", "Normal Heights", "Fairmount Park", "Adams Avenue"] },
  { slug: "la-jolla", name: "La Jolla", zip: "92037", nearby: ["Bird Rock", "La Jolla Shores", "Windansea", "The Village", "Muirlands"] },
  { slug: "linda-vista", name: "Linda Vista", zip: "92111", nearby: ["USD area", "Morley Field", "Tecolote", "Fashion Valley"] },
  { slug: "logan-heights", name: "Logan Heights", zip: "92113", nearby: ["Barrio Logan", "Memorial", "Sherman Heights", "Stockton"] },
  { slug: "mission-beach", name: "Mission Beach", zip: "92109", nearby: ["South Mission", "Belmont Park", "Sail Bay", "Mission Bay Park"] },
  { slug: "mission-hills", name: "Mission Hills", zip: "92103", nearby: ["Bankers Hill", "Presidio", "Fort Stockton", "Pioneer Park"] },
  { slug: "mission-valley", name: "Mission Valley", zip: "92108", nearby: ["Civita", "Fashion Valley", "Hazard Center", "Mission City"] },
  { slug: "national-city", name: "National City", zip: "91950", nearby: ["Westside", "Harbor District", "Kimball", "Plaza Bonita"] },
  { slug: "north-park", name: "North Park", zip: "92104", nearby: ["University Heights", "Normal Heights", "South Park", "Adams North"] },
  { slug: "ocean-beach", name: "Ocean Beach", zip: "92107", nearby: ["Sunset Cliffs", "Robb Field", "OB Village", "Nimitz"] },
  { slug: "old-town", name: "Old Town", zip: "92110", nearby: ["Heritage Park", "Presidio", "Middletown", "Hortensia"] },
  { slug: "otay-mesa", name: "Otay Mesa", zip: "92154", nearby: ["Ocean View Hills", "Siempre Viva", "Otay Ranch", "SR-905 corridor"] },
  { slug: "pacific-beach", name: "Pacific Beach", zip: "92109", nearby: ["Crown Point", "North PB", "Kate Sessions", "Garnet District"] },
  { slug: "point-loma", name: "Point Loma", zip: "92106", nearby: ["Liberty Station", "Roseville", "La Playa", "Sunset Cliffs", "Wooded Area"] },
  { slug: "san-ysidro", name: "San Ysidro", zip: "92173", nearby: ["Nestor", "Otay Mesa West", "Camino de la Plaza", "Border Village"] },
  { slug: "serra-mesa", name: "Serra Mesa", zip: "92123", nearby: ["Murphy Canyon", "Stonecrest", "Aero Drive", "Mission Village"] },
  { slug: "south-park", name: "South Park", zip: "92102", nearby: ["Golden Hill", "North Park", "Grape Street", "Balboa Park East"] },
  { slug: "talmadge", name: "Talmadge", zip: "92116", nearby: ["Kensington", "El Cerrito", "College View Estates", "51st Street"] },
  { slug: "university-city", name: "University City", zip: "92122", nearby: ["UTC", "La Jolla Colony", "Nobel Drive", "Governor Drive"] },
  { slug: "university-heights", name: "University Heights", zip: "92116", nearby: ["Normal Heights", "Hillcrest", "North Park", "Park Boulevard"] },
];

export function getPlace(slug: string): Place | undefined {
  return PLACES.find((p) => p.slug === slug);
}

export function placePath(slug: string) {
  return `/furniture-removal-in/${slug}`;
}

export type ItemId =
  | "couch"
  | "loveseat"
  | "recliner"
  | "sectional2"
  | "sectional3"
  | "dresser"
  | "desk"
  | "diningTable"
  | "diningChair"
  | "coffeeTable"
  | "tvStand"
  | "nightstand"
  | "bookshelf"
  | "bedFrame";

export type Item = {
  id: ItemId;
  label: string;
  units: number;
};

export const ITEMS: Item[] = [
  { id: "couch", label: "Couch / sofa", units: 1 },
  { id: "loveseat", label: "Loveseat", units: 1 },
  { id: "recliner", label: "Recliner", units: 1 },
  { id: "sectional2", label: "Two-piece sectional", units: 2 },
  { id: "sectional3", label: "Three-piece sectional", units: 3 },
  { id: "dresser", label: "Dresser", units: 1 },
  { id: "desk", label: "Desk", units: 1 },
  { id: "diningTable", label: "Dining table", units: 1 },
  { id: "diningChair", label: "Dining chair", units: 0.5 },
  { id: "coffeeTable", label: "Coffee table", units: 1 },
  { id: "tvStand", label: "TV stand", units: 1 },
  { id: "nightstand", label: "Nightstand", units: 0.5 },
  { id: "bookshelf", label: "Bookshelf", units: 1 },
  { id: "bedFrame", label: "Bed frame", units: 1 },
];

export const EMPTY_COUNTS: Record<ItemId, number> = {
  couch: 0,
  loveseat: 0,
  recliner: 0,
  sectional2: 0,
  sectional3: 0,
  dresser: 0,
  desk: 0,
  diningTable: 0,
  diningChair: 0,
  coffeeTable: 0,
  tvStand: 0,
  nightstand: 0,
  bookshelf: 0,
  bedFrame: 0,
};

export const DEFAULT_COUNTS: Record<ItemId, number> = {
  ...EMPTY_COUNTS,
  couch: 1,
};

export type ServiceId = "curbside" | "full";

export const SERVICES: { id: ServiceId; label: string; hint: string }[] = [
  { id: "curbside", label: "Curbside", hint: "Leave it at the curb. We load from the street." },
  { id: "full", label: "Full service", hint: "We come inside — stairs, elevator, and carry-out included." },
];

const TIER = [
  { units: 1, curbside: 69, full: 130 },
  { units: 2, curbside: 119, full: 180 },
  { units: 3, curbside: 179, full: 270 },
  { units: 4, curbside: 239, full: 360 },
  { units: 5, curbside: 299, full: 450 },
  { units: 6, curbside: 359, full: 540 },
  { units: 7, curbside: 419, full: 630 },
  { units: 8, curbside: 479, full: 720 },
  { units: 9, curbside: 539, full: 810 },
  { units: 10, curbside: 599, full: 899 },
] as const;

export function billedUnits(counts: Record<ItemId, number>): number {
  const raw = ITEMS.reduce((sum, item) => sum + item.units * (counts[item.id] ?? 0), 0);
  if (raw <= 0) return 0;
  return Math.max(1, Math.ceil(raw));
}

export function priceForUnits(units: number, service: ServiceId): number {
  if (units <= 0) return 0;
  const n = Math.max(1, Math.round(units));
  const row = TIER.find((t) => t.units === n);
  if (row) return row[service];
  const extra = n - 10;
  return service === "curbside" ? 599 + extra * 60 : 899 + extra * 90;
}

export function quote(counts: Record<ItemId, number>, service: ServiceId) {
  const units = billedUnits(counts);
  const total = priceForUnits(units, service);
  const curb = priceForUnits(units, "curbside");
  const full = priceForUnits(units, "full");
  const billed = ITEMS.filter((item) => (counts[item.id] ?? 0) > 0).map((item) => ({
    ...item,
    qty: counts[item.id],
  }));
  return { units, total, curb, full, billed, empty: units === 0 };
}

export function money(n: number) {
  return `$${n}`;
}

export const EXAMPLE_JOBS: {
  title: string;
  note: string;
  counts: Record<ItemId, number>;
}[] = [
  {
    title: "Couch, recliner, and coffee table",
    note: "Living-room three-piece haul",
    counts: { ...EMPTY_COUNTS, couch: 1, recliner: 1, coffeeTable: 1 },
  },
  {
    title: "Two-piece sectional",
    note: "One sofa plus one chaise",
    counts: { ...EMPTY_COUNTS, sectional2: 1 },
  },
  {
    title: "Dining table and four chairs",
    note: "Table plus four dining chairs",
    counts: { ...EMPTY_COUNTS, diningTable: 1, diningChair: 4 },
  },
  {
    title: "One couch",
    note: "Single sofa, curbside or carry-out",
    counts: { ...EMPTY_COUNTS, couch: 1 },
  },
];

export const FAQS = [
  {
    q: "Is furniture removal really free in San Diego?",
    a: "City bulk pickup has rules, wait times, and size limits — and you still have to drag it to the curb on the right morning. We charge because we come to you, carry it out, and take it the same day.",
  },
  {
    q: "What do you take?",
    a: "Couches, sectionals, loveseats, recliners, dressers, desks, dining tables and chairs, coffee tables, TV stands, nightstands, bookshelves, bed frames, and most household furniture that fits through a doorway. China cabinets count as two pieces. Mattresses and box springs are a sister service — we can take them on the same run.",
  },
  {
    q: "Do I need to be home?",
    a: "Only if the item is inside. For curb pickups you can leave it at the driveway and we’ll text a photo when it’s gone.",
  },
  {
    q: "What about stairs or gated buildings?",
    a: "Full service covers the carry-out — stairs, elevator, and inside rooms. Curbside is leave it at the street. For gated or HOA properties, have the gate code ready when we call.",
  },
  {
    q: "Will you donate my furniture?",
    a: "If it’s clean and usable, we route it to donation partners. Broken pieces get recycled for parts and scrap. We don’t leave sofas in alleys or canyon pull-outs.",
  },
  {
    q: "How do I pay?",
    a: "Credit cards, cash, Zelle, Venmo, or PayPal when we arrive. If you won’t be home, we can take payment remotely. No deposit. Cancel anytime before the crew is en route.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maya R.",
    place: "Hillcrest",
    text: "Booked at nine, gone by lunch. Third-floor walk-up, they didn’t scuff a thing.",
  },
  {
    name: "James T.",
    place: "Pacific Beach",
    text: "Sectional plus a fossil of a recliner. I pointed at the living room and sat on the balcony.",
  },
  {
    name: "Priya S.",
    place: "North Park",
    text: "Quoted $69, charged $69. That shouldn’t feel rare, but it did.",
  },
];

export const JOB_PHOTOS = [
  {
    src: "/images/sofa-cream.jpg",
    alt: "Cream tufted sofa with navy cushions staged at the curb for pickup",
    caption: "Couch, curbside",
    w: 1600,
    h: 1200,
  },
  {
    src: "/images/sofas-sidewalk.jpg",
    alt: "Sofas and chairs staged on a San Diego sidewalk",
    caption: "Living-room haul",
    w: 1280,
    h: 1600,
  },
  {
    src: "/images/dressers.jpg",
    alt: "Two dressers and bagged bedding staged on a San Diego sidewalk",
    caption: "Dressers",
    w: 480,
    h: 640,
  },
  {
    src: "/images/recliner.jpg",
    alt: "Recliner and patio chair staged in a driveway",
    caption: "Recliner",
    w: 480,
    h: 640,
  },
  {
    src: "/images/sectional.jpg",
    alt: "Three-piece leather sectional staged at the curb",
    caption: "Three-piece sectional",
    w: 500,
    h: 281,
  },
  {
    src: "/images/chairs.jpg",
    alt: "Four dining chairs and a sofa staged for pickup",
    caption: "Dining chairs",
    w: 500,
    h: 281,
  },
  {
    src: "/images/apartment.jpg",
    alt: "Couch, recliners, and tables staged in an apartment parking lot",
    caption: "Apartment pickup",
    w: 500,
    h: 281,
  },
  {
    src: "/images/pile.jpg",
    alt: "Curbside pile of furniture ready for haul-away",
    caption: "Half-load",
    w: 500,
    h: 281,
  },
  {
    src: "/images/patio.jpg",
    alt: "Sofa, chairs, and bookshelves staged under a carport",
    caption: "Carport pickup",
    w: 435,
    h: 245,
  },
  {
    src: "/images/bookshelf.jpg",
    alt: "Bookshelf, TV, and side tables staged in a backyard",
    caption: "Shelves and TV",
    w: 500,
    h: 281,
  },
  {
    src: "/images/mixed.jpg",
    alt: "Chairs, mattress, and wood pieces staged at a house",
    caption: "Mixed load",
    w: 500,
    h: 281,
  },
  {
    src: "/images/office.jpg",
    alt: "Desks, chairs, and shelves staged in front of an apartment",
    caption: "Office furniture",
    w: 437,
    h: 246,
  },
] as const;

export function photoForPlace(slug: string) {
  const n = slug.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return JOB_PHOTOS[n % JOB_PHOTOS.length];
}
