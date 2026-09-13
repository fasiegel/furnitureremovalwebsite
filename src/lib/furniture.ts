import { priceForUnits, type ServiceId } from "./site";

export const FURNITURE_CATEGORIES = [
  { id: "seating", label: "Seating", blurb: "Chairs, sofas, and anything you sit on." },
  { id: "beds", label: "Beds & sleep", blurb: "Frames, cribs, and fold-aways." },
  { id: "mattresses", label: "Mattresses", blurb: "Mattresses and box springs, recycled locally." },
  { id: "tables", label: "Tables & surfaces", blurb: "Dining, coffee, desks, and nightstands." },
  { id: "storage", label: "Storage & display", blurb: "Dressers, cabinets, and chests." },
] as const;

export type FurnitureCategoryId = (typeof FURNITURE_CATEGORIES)[number]["id"];

export type FurniturePiece = {
  slug: string;
  name: string;
  category: FurnitureCategoryId;
  description: string;
  haul: string;
  /** Calculator units. 1 = one couch. Change this number to reprice the piece. */
  units: number;
};

export const FURNITURE: FurniturePiece[] = [
  {
    slug: "sofa",
    name: "Couch / sofa",
    category: "seating",
    description: "A standard living-room couch, typically seating three.",
    haul: "Couches are the most common pickup in San Diego. Curbside from $69. Full service if it is still inside.",
    units: 1,
  },
  {
    slug: "armchair",
    name: "Armchair",
    category: "seating",
    description: "A comfortable single chair with side supports for your arms.",
    haul: "We carry armchairs out of living rooms and dens across San Diego — curbside or full service, stairs included.",
    units: 0.5,
  },
  {
    slug: "recliner",
    name: "Recliner",
    category: "seating",
    description: "An armchair with a back that tilts back and a footrest that folds out.",
    haul: "Recliners are heavy and awkward. Our two-person crew tips, wraps, and walks them down PB and Hillcrest stairs all week.",
    units: 0.5,
  },
  {
    slug: "loveseat",
    name: "Loveseat",
    category: "seating",
    description: "A small sofa designed to seat two people.",
    haul: "Loveseats fit most San Diego doorways. We take them from apartments and bungalows the same day you book.",
    units: 1,
  },
  {
    slug: "sectional-sofa",
    name: "Two-piece sectional",
    category: "seating",
    description: "A two-piece couch that can be arranged in an L-shape — typically a sofa plus a chaise.",
    haul: "We split the two pieces, carry them down 90-degree landings, and take both on the same run.",
    units: 2,
  },
  {
    slug: "three-piece-sectional",
    name: "Three-piece sectional",
    category: "seating",
    description: "A three-piece couch in an L- or U-shape — typically two sofas plus a corner or chaise.",
    haul: "Three-piece sectionals come apart. We walk each section down the stairs and load them together.",
    units: 3,
  },
  {
    slug: "rocking-chair",
    name: "Rocking chair",
    category: "seating",
    description: "A chair mounted on curved tracks that lets you rock back and forth.",
    haul: "Rockers go out as one piece when they fit, or we pad the runners and carry them on edge through tight craftsman doors.",
    units: 0.5,
  },
  {
    slug: "ottoman",
    name: "Ottoman",
    category: "seating",
    description: "A low, cushioned seat or footstool with no back or arms.",
    haul: "Ottomans ride along with the sofa. Alone they count as a small piece — we still pick up same day.",
    units: 0.5,
  },
  {
    slug: "bar-stool",
    name: "Bar stool",
    category: "seating",
    description: "A tall, narrow stool designed for use at a bar or counter height.",
    haul: "We stack bar stools and take a set in one stop. Kitchen counters in UTC and Eastlake turn over constantly.",
    units: 0.25,
  },
  {
    slug: "chaise-lounge",
    name: "Chaise lounge",
    category: "seating",
    description: "A long chair meant for reclining with your legs stretched out.",
    haul: "Chaises are long. We angle them through patio sliders and down Point Loma hillside steps without scraping stucco.",
    units: 1,
  },
  {
    slug: "bench",
    name: "Bench",
    category: "seating",
    description: "A long wooden or upholstered seat for multiple people.",
    haul: "Entry benches, dining benches, and bedroom benches — we take wood or upholstered, indoor or patio.",
    units: 0.5,
  },
  {
    slug: "bean-bag",
    name: "Bean bag",
    category: "seating",
    description: "A large, soft fabric bag filled with tiny pellets that molds to your body shape.",
    haul: "Bean bags are bulky more than heavy. We bag torn ones so pellets do not hit the stairwell.",
    units: 0.5,
  },
  {
    slug: "wingback-chair",
    name: "Wingback chair",
    category: "seating",
    description: "An armchair with high side panels designed to shield against drafts.",
    haul: "Wingbacks are tall and catch on railings. We wrap the wings and carry them out of Mission Hills and Kensington dens.",
    units: 0.5,
  },
  {
    slug: "dining-chair",
    name: "Dining chair",
    category: "seating",
    description: "A standard chair designed to match a dining room table.",
    haul: "Dining chairs are priced per seat. Four chairs plus the table is a common San Diego dining-room haul.",
    units: 0.25,
  },
  {
    slug: "platform-bed",
    name: "Platform bed",
    category: "beds",
    description: "A low bed frame featuring a solid or slatted base that holds a mattress without needing a box spring.",
    haul: "We disassemble platform frames when we have to, haul the slats, and can take the mattress as a sister service.",
    units: 2,
  },
  {
    slug: "bunk-bed",
    name: "Bunk bed",
    category: "beds",
    description: "Two single beds stacked vertically, one on top of the other.",
    haul: "Bunks come apart. We pull the pins, carry rails and ladders out of kids’ rooms, and take both twins in one trip.",
    units: 2,
  },
  {
    slug: "daybed",
    name: "Daybed",
    category: "beds",
    description: "A versatile piece used as a couch during the day and a bed at night.",
    haul: "Daybeds leave guest rooms and offices the same way a sofa does — wrapped, walked, and off the floor that afternoon.",
    units: 1,
  },
  {
    slug: "murphy-bed",
    name: "Murphy bed",
    category: "beds",
    description: "A bed hinged at one end to fold up and store flat inside a wall cabinet.",
    haul: "Murphy units unbolt from the wall. We take the cabinet and the mattress so the next tenant gets a clean room.",
    units: 2,
  },
  {
    slug: "crib",
    name: "Crib",
    category: "beds",
    description: "A small, enclosed bed with high slatted sides for an infant or toddler.",
    haul: "Cribs fold or come apart. We haul them with changing tables and gliders from nurseries across central San Diego.",
    units: 0.5,
  },
  {
    slug: "futon",
    name: "Futon",
    category: "beds",
    description: "A convertible padded mattress frame that folds between a couch and a bed.",
    haul: "College-area futons are a Tuesday specialty. Frame plus pad, down the stairs, donated if they’re clean.",
    units: 1,
  },
  {
    slug: "bassinet",
    name: "Bassinet",
    category: "beds",
    description: "A small basket-like bed specifically designed for newborns.",
    haul: "Bassinets are a small piece. They ride with the crib, glider, or whatever else is leaving the nursery.",
    units: 0.5,
  },
  {
    slug: "king-mattress",
    name: "King mattress",
    category: "mattresses",
    description: "A king-size mattress. Recycled through California’s mattress program — not dumped.",
    haul: "We bag it, carry it out, and send foam, steel, and fiber to local recycling. Same-day with the furniture on the truck.",
    units: 1,
  },
  {
    slug: "queen-full-mattress",
    name: "Queen / full mattress",
    category: "mattresses",
    description: "A queen or full mattress. Same posted price for either size.",
    haul: "Queen and full mattresses go out like a sofa — wrapped, walked, and recycled the same afternoon.",
    units: 1,
  },
  {
    slug: "twin-mattress",
    name: "Twin mattress",
    category: "mattresses",
    description: "A twin mattress. Counts as a half-unit in the calculator.",
    haul: "Twins are light. Two twins equal one queen in the price. We take them with bunk frames or on their own.",
    units: 0.5,
  },
  {
    slug: "king-box-spring",
    name: "King box spring (2 pc)",
    category: "mattresses",
    description: "A king box spring, usually two pieces. Counts as one unit even split.",
    haul: "Two-piece king boxes come apart. We take both halves with the king mattress on the same run.",
    units: 1,
  },
  {
    slug: "queen-full-box-spring",
    name: "Queen / full box spring",
    category: "mattresses",
    description: "A queen or full box spring. Same posted price for either size.",
    haul: "Box springs ride under the mattress. We take the set together so you are not left with the wood frame.",
    units: 1,
  },
  {
    slug: "twin-box-spring",
    name: "Twin box spring",
    category: "mattresses",
    description: "A twin box spring. Counts as a half-unit, same as a twin mattress.",
    haul: "Twin boxes stack. A twin mattress plus box spring is one unit — $69 at the curb.",
    units: 0.5,
  },
  {
    slug: "coffee-table",
    name: "Coffee table",
    category: "tables",
    description: "A low table placed in front of a sofa for drinks and books.",
    haul: "Glass, wood, or storage ottoman tables — we pad glass tops and take them with the living-room set.",
    units: 0.5,
  },
  {
    slug: "dining-table",
    name: "Dining table",
    category: "tables",
    description: "A large table used for eating meals.",
    haul: "Leaves come out, bases split when they can. We walk dining tables out of North Park bungalows without hitting the crown molding.",
    units: 1,
  },
  {
    slug: "nightstand",
    name: "Nightstand",
    category: "tables",
    description: "A small bedside table used for lamps and nighttime items.",
    haul: "Nightstands usually go with the dresser and bed frame. Alone they count as a small piece.",
    units: 0.5,
  },
  {
    slug: "writing-desk",
    name: "Writing desk",
    category: "tables",
    description: "A flat-surface table designed for reading, writing, or using a laptop.",
    haul: "Desks from home offices and UTC apartments — we empty the drawers, unbolt the legs if needed, and carry them out.",
    units: 1,
  },
  {
    slug: "end-table",
    name: "End table",
    category: "tables",
    description: "A small table placed beside the end of a sofa or armchair.",
    haul: "End tables ride with the sofa. We take pairs, nested sets, and the one with the broken drawer.",
    units: 0.5,
  },
  {
    slug: "console-table",
    name: "Console table",
    category: "tables",
    description: "A long, narrow table typically placed against an entryway or living room wall.",
    haul: "Entry consoles are long and skinny. We angle them down walk-up stairs and out of Little Italy lofts.",
    units: 1,
  },
  {
    slug: "vanity-table",
    name: "Vanity table",
    category: "tables",
    description: "A dressing table with a mirror and drawers used for makeup and grooming.",
    haul: "We wrap the mirror, empty the drawers, and take vanities from bedrooms and bathrooms without leaving glass behind.",
    units: 1,
  },
  {
    slug: "drop-leaf-table",
    name: "Drop-leaf table",
    category: "tables",
    description: "A table with hinged sections on the sides that fold down to save space.",
    haul: "Leaves fold, the footprint shrinks, and we walk it out like any other dining table.",
    units: 1,
  },
  {
    slug: "dresser",
    name: "Dresser",
    category: "storage",
    description: "A low chest of drawers used primarily for storing folded clothing.",
    haul: "Dressers are a daily pickup. Drawers stay in if they’re solid; we empty them if they’re not. Same-day in every ZIP we list.",
    units: 1,
  },
  {
    slug: "bookshelf",
    name: "Bookshelf",
    category: "storage",
    description: "A piece of open shelving dedicated to holding books.",
    haul: "Empty the shelves — we take the case. Tall IKEA units come apart. Built-looking cases still leave if they’re not bolted in.",
    units: 1,
  },
  {
    slug: "wardrobe",
    name: "Wardrobe",
    category: "storage",
    description: "A tall cabinet with hanging space and doors for clothes.",
    haul: "Wardrobes count as two pieces when they’re full-height. We walk them out of rooms with no closet, doors off if needed.",
    units: 2,
  },
  {
    slug: "sideboard",
    name: "Sideboard",
    category: "storage",
    description: "A long low cabinet placed in a dining area to store dinnerware and serve food.",
    haul: "Sideboards are long and heavy. Two people, pads on the corners, out through the dining room.",
    units: 1,
  },
  {
    slug: "media-console",
    name: "Media console",
    category: "storage",
    description: "A low entertainment cabinet designed to hold a television and media components.",
    haul: "Unplug the TV — we can take the console, the stand, and the set on the same run as a sister add-on.",
    units: 1,
  },
  {
    slug: "china-cabinet",
    name: "China cabinet",
    category: "storage",
    description: "A glass-fronted display case used to store and show off fine dishware.",
    haul: "China cabinets count as two pieces. We empty glass, wrap doors, and take hutch plus base together.",
    units: 2,
  },
  {
    slug: "armoire",
    name: "Armoire",
    category: "storage",
    description: "An ornate freestanding wardrobe with doors, often housing a closet rod or TV.",
    haul: "Armoires are tall. Doors come off, the carcass walks out on edge, and we treat them as a two-piece haul.",
    units: 2,
  },
  {
    slug: "credenza",
    name: "Credenza",
    category: "storage",
    description: "A sleek, low cabinet with sliding doors or drawers.",
    haul: "Office and dining credenzas — we clear the cables, pad the sliding doors, and take them from condos and small offices.",
    units: 1,
  },
  {
    slug: "hutch",
    name: "Hutch",
    category: "storage",
    description: "A set of shelves or cabinets placed on top of a lower sideboard or desk.",
    haul: "The hutch lifts off the base. We haul both as two pieces so nothing racks or cracks the glass.",
    units: 2,
  },
  {
    slug: "shoe-cabinet",
    name: "Shoe cabinet",
    category: "storage",
    description: "A specialized slim cabinet with tilt-out slots to organize footwear.",
    haul: "Slim entry cabinets leave with the rest of the move-out pile. Easy carry, same-day window.",
    units: 0.5,
  },
  {
    slug: "filing-cabinet",
    name: "Filing cabinet",
    category: "storage",
    description: "A metal or wooden office cabinet with sliding drawers for hanging folders.",
    haul: "Empty the files. Metal two- and four-drawer cabinets come out of Kearny Mesa offices and spare bedrooms the same afternoon.",
    units: 1,
  },
  {
    slug: "storage-chest",
    name: "Storage chest",
    category: "storage",
    description: "A heavy box with a hinged lid used to store blankets, toys, or keepsakes.",
    haul: "Chests and blanket boxes go with the bedroom set. We lift, we don’t drag — floors stay intact.",
    units: 0.5,
  },
  {
    slug: "pantry-cabinet",
    name: "Pantry cabinet",
    category: "storage",
    description: "A tall kitchen storage unit with shelves dedicated to food and dry goods.",
    haul: "Freestanding pantry cabinets, not built-ins. We empty shelves, walk them out of kitchens, and treat full-height units as two pieces.",
    units: 2,
  },
];

export function getFurniture(slug: string) {
  return FURNITURE.find((p) => p.slug === slug);
}

export function furniturePath(slug: string) {
  return `/furniture-removal/${slug}`;
}

export function emptyFurnitureCounts(): Record<string, number> {
  return Object.fromEntries(FURNITURE.map((p) => [p.slug, 0]));
}

export function billedFurnitureUnits(counts: Record<string, number>): number {
  const raw = FURNITURE.reduce((sum, piece) => sum + piece.units * (counts[piece.slug] ?? 0), 0);
  if (raw <= 0) return 0;
  return Math.max(1, Math.ceil(raw));
}

export function quoteFurniture(counts: Record<string, number>, service: ServiceId) {
  const units = billedFurnitureUnits(counts);
  const total = priceForUnits(units, service);
  const curb = priceForUnits(units, "curbside");
  const full = priceForUnits(units, "full");
  const billed = FURNITURE.filter((piece) => (counts[piece.slug] ?? 0) > 0).map((piece) => ({
    ...piece,
    qty: counts[piece.slug] ?? 0,
  }));
  return { units, total, curb, full, billed, empty: units === 0 };
}

export function relatedFurniture(piece: FurniturePiece, limit = 8) {
  const same = FURNITURE.filter((p) => p.category === piece.category && p.slug !== piece.slug);
  const rest = FURNITURE.filter((p) => p.category !== piece.category);
  return [...same, ...rest].slice(0, limit);
}

export function furnitureByCategory() {
  return FURNITURE_CATEGORIES.map((cat) => ({
    ...cat,
    items: FURNITURE.filter((p) => p.category === cat.id),
  }));
}
