export interface Fragrance {
  id: string;
  seasonNumber: string;
  season: "Spring" | "Summer" | "Autumn" | "Winter";
  poeticTitle: string;
  seasonFrench: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  volume: string;
  concentration: string;
  emotion: string;
  family: string;
  description: string;
  story: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  accords: string[];
  atmosphericAccords: string;
  colorHex: string;
  accentBg: string;
  image: string;
  atmosphereImage: string;
  bottleDetail: string;
  inStock: boolean;
  batchNumber: string;
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: "spring-eclosion-etheree",
    seasonNumber: "N° 01",
    season: "Spring",
    poeticTitle: "The Awakening",
    seasonFrench: "Spring Awakening",
    name: "Éclosion Éthérée",
    subtitle: "Extrait de Parfum",
    tagline: "Where nature awakens, and every beginning carries a beautiful promise.",
    price: 260,
    formattedPrice: "€260",
    volume: "100ml / 3.4 FL. OZ.",
    concentration: "26% Pure Extrait",
    emotion: "Freshness, Renewal & New Beginnings",
    family: "Floral Vert Cristallin",
    description:
      "A luminous, crystalline fragrance capturing the first breath of morning light. Dew-kissed lily of the valley unfolds beside fresh fig leaves and delicate Centifolia rose petals.",
    story:
      "Formulated around morning florals harvested when petals retain their purest aromatic moisture. Éclosion Éthérée balances innocent floral delicacy with the earthy groundedness of crisp green sap and clean white woods.",
    notes: {
      top: ["Lily of the Valley", "Fresh Fig Leaf", "Green Dew Accord"],
      heart: ["Grasse Centifolia Rose", "Florentine Iris", "White Peony"],
      base: ["Clean White Musk", "Virginia Cedarwood", "Mineral Petal Accord"],
    },
    accords: ["Lily of the Valley", "Fresh Fig Leaf", "Grasse Centifolia Rose"],
    atmosphericAccords: "Morning dew on freshly unfurled petals at 14°C",
    colorHex: "#7A8F78",
    accentBg: "bg-[#7A8F78]/10",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=85",
    atmosphereImage:
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1200&q=85",
    bottleDetail: "Ultra-clear leadless crystal with pale celadon shimmer & hand-polished cap",
    inStock: true,
    batchNumber: "SPR-2026-01",
  },
  {
    id: "summer-rayon-solaire",
    seasonNumber: "N° 02",
    season: "Summer",
    poeticTitle: "The Radiance",
    seasonFrench: "Summer Radiance",
    name: "Rayon Solaire",
    subtitle: "Extrait de Parfum",
    tagline: "An endless summer captured in golden light, warmth, and effortless freedom.",
    price: 260,
    formattedPrice: "€260",
    volume: "100ml / 3.4 FL. OZ.",
    concentration: "28% Pure Extrait",
    emotion: "Freedom, Warmth & Golden Summer Evenings",
    family: "Ambre Solaire Hespéridé",
    description:
      "Warm golden sunlight captured in a flacon. Sun-drenched Calabrian bergamot and solar neroli open into honeyed orange blossom, anchored by warm amber and sea-salt mist on warm skin.",
    story:
      "Inspired by the radiant late-afternoon glow along Mediterranean coastlines, where ancient cypress trees overlook shimmering turquoise waters. A solar elixir that radiates warmth, freedom, and the intoxicating optimism of endless summer days.",
    notes: {
      top: ["Calabrian Bergamot", "Bitter Orange Leaf", "Warm Amber Salt"],
      heart: ["Solar Neroli", "Orange Blossom", "Sun-warmed Jasmine"],
      base: ["Mediterranean Amber", "Coastal Cypress", "Bourbon Benzoin"],
    },
    accords: ["Calabrian Bergamot", "Solar Neroli", "Warm Amber Salt"],
    atmosphericAccords: "Golden hour sea breeze on sun-baked coastal stones at 29°C",
    colorHex: "#C28E46",
    accentBg: "bg-[#C28E46]/10",
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=85",
    atmosphereImage:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85",
    bottleDetail: "Luminous golden-hue glass flacon with warm bronze collar & engraved crest",
    inStock: true,
    batchNumber: "SUM-2026-02",
  },
  {
    id: "autumn-feuille-dambre",
    seasonNumber: "N° 03",
    season: "Autumn",
    poeticTitle: "The Ember",
    seasonFrench: "Autumn Ember",
    name: "Feuille d'Ambre",
    subtitle: "Extrait de Parfum",
    tagline: "An intimate expression of warmth, depth, and the beauty of change.",
    price: 280,
    formattedPrice: "€280",
    volume: "100ml / 3.4 FL. OZ.",
    concentration: "30% Pure Extrait",
    emotion: "Warmth, Depth & Sophistication",
    family: "Boisé Ambré Épicé",
    description:
      "A deep, sophisticated, comforting fragrance. Swirls of golden saffron and spiced fig melt into smoked cedarwood, enriched with Baltic amber, cashmere woods, and roasted tonka bean.",
    story:
      "Conceived during contemplative walks as golden leaves fall onto damp earth. The comforting aroma of aged cedar, wool textures, spiced fig, and rich saffron creates an intimate, lingering sanctuary of warmth.",
    notes: {
      top: ["Saffron", "Spiced Fig", "Guatemalan Cardamom"],
      heart: ["Cedarwood", "Cashmere Woods", "Spiced Plum"],
      base: ["Baltic Amber Resin", "Roasted Tonka Bean", "Madagascan Vanilla"],
    },
    accords: ["Saffron", "Spiced Fig", "Cedarwood"],
    atmosphericAccords: "Woodsmoke curling through crisp autumn dusk at 11°C",
    colorHex: "#8B4E2B",
    accentBg: "bg-[#8B4E2B]/10",
    image:
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=85",
    atmosphereImage:
      "https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=1200&q=85",
    bottleDetail: "Deep cognac tint heavy crystal with burnished bronze detailing",
    inStock: true,
    batchNumber: "AUT-2026-03",
  },
  {
    id: "winter-nuit-givree",
    seasonNumber: "N° 04",
    season: "Winter",
    poeticTitle: "The Stillness",
    seasonFrench: "Winter Stillness",
    name: "Nuit Givrée",
    subtitle: "Extrait de Parfum",
    tagline: "Where silence becomes elegance, and every breath leaves a lasting impression.",
    price: 280,
    formattedPrice: "€280",
    volume: "100ml / 3.4 FL. OZ.",
    concentration: "30% Pure Extrait",
    emotion: "Serenity, Elegance & Quiet Luxury",
    family: "Boisé Minéral Fumé",
    description:
      "An architectural, cooling masterpiece. Frosted iris and glacial white musk open to reveal silver pine needles and pure frankincense, resting upon cashmere woods and ethereal crystalline amber.",
    story:
      "Crafted to honor the hushed tranquility of a snowbound forest under midnight starlight. Cool at first contact, it slowly develops a magnetic, comforting warmth through sacred resins, white musk, and fine cashmere woods.",
    notes: {
      top: ["Frosted Iris", "Glacial Juniper", "Crisp Ozone Accord"],
      heart: ["Silver Pine Needles", "White Musk", "Somalian Frankincense"],
      base: ["Cashmere Woods", "Glacial White Birch", "Crystalline Ambergris"],
    },
    accords: ["White Musk", "Frosted Iris", "Cashmere Woods"],
    atmosphericAccords: "Sub-zero silence over frosted pine boughs at -4°C",
    colorHex: "#4C5B67",
    accentBg: "bg-[#4C5B67]/10",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85",
    atmosphereImage:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=1200&q=85",
    bottleDetail: "Smoked obsidian crystal flacon with palladium-silver magnetic cap",
    inStock: true,
    batchNumber: "WIN-2026-04",
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    frenchTitle: "The Seasonal Cycle",
    title: "Seasonal Harvest Cycle",
    description:
      "We source botanical extracts strictly in synchrony with nature's biological peak — spring rose at sunrise, summer neroli at midday, and autumn woods at first frost.",
  },
  {
    number: "02",
    frenchTitle: "Artisanal Extraction",
    title: "Ancestral Cold Distillation",
    description:
      "Preserving the fragile volatile aromatics of living botanicals through low-temperature enfleurage and artisanal copper distillation.",
  },
  {
    number: "03",
    frenchTitle: "Master Flaconnage",
    title: "Hand-Numbered Crystal",
    description:
      "Each 100ml bottle is custom-molded from heavy leadless crystal, fitted with a precision magnetic cap and hand-inspected before receiving its numbered seal.",
  },
];

export const OLFACTORY_ACCORDS_EXPLORER = [
  {
    family: "Floral Vert",
    frenchName: "Fresh Botanicals & Leaves",
    character: "Dewy, tender, rejuvenating",
    seasons: ["Spring"],
    ingredients: "Rose Centifolia, Lily of the Valley, Fig Leaf, Florentine Iris",
    description:
      "Captures the crisp, moist fragrance of green vegetation waking after morning rain, delicate petals, and clean sap.",
  },
  {
    family: "Ambre Solaire",
    frenchName: "Solar Light & Golden Resins",
    character: "Radiant, enveloping, hypnotic",
    seasons: ["Summer"],
    ingredients: "Calabrian Bergamot, Bitter Orange, Solar Neroli, Warm Amber Salt",
    description:
      "Recreates the scent of warm skin soaked in golden sunlight, citrus blossoms, and salty coastal breezes.",
  },
  {
    family: "Boisé Ambré",
    frenchName: "Smoked Woods & Warm Spices",
    character: "Intimate, comforting, contemplative",
    seasons: ["Autumn"],
    ingredients: "Saffron, Spiced Fig, Cedarwood, Baltic Amber, Roasted Tonka",
    description:
      "The warmth of open hearths, dry forest foliage, aged wood paneling, and aromatic golden resins.",
  },
  {
    family: "Minéral Givré",
    frenchName: "Frosted Resins & Cashmere",
    character: "Ethereal, architectural, serene",
    seasons: ["Winter"],
    ingredients: "White Musk, Frosted Iris, Cashmere Woods, Silver Pine",
    description:
      "The sublime hush of winter frost, crisp mountain air, and ancient sacred resins rising in quiet elegance.",
  },
];
