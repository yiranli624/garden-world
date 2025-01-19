export type ProductItem = {
  slug: string;
  label: string;
  image: string;
  originalPrice: number;
  shortDescription: string;
  categories: string[];
  sku: string;
  description: string;
  additionalInfo: string;
  salesPrice?: number;
  plantingGuild?: string;
  stockAmount?: number;
};

export const test_products: ProductItem[] = [
  {
    slug: "bok-choy-jade-star",
    label: "Bok Choy Jade Star",
    image: "/assets/Bok-Choy-Jade-star.jpg",
    originalPrice: 249,
    salesPrice: 149,
    shortDescription: "",
    categories: ["bok-choy", "leafy-greens", "cold-weather", "easy"],
    sku: "A083",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 110
  },
  {
    slug: "bok-choy-dark-green",
    label: "Bok Choy Dark Green",
    image: "/assets/Bok-Choy-Dark-Green.jpg",
    originalPrice: 199,
    shortDescription: "",
    categories: ["bok-choy", "leafy-greens", "cool-weather", "easy"],
    sku: "A073",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 149
  },
  {
    slug: "tong-ho-crispy-stem",
    label: "Tongho Crispy Stem",
    image: "/assets/Tongho-Crispy-Stem.jpg",
    originalPrice: 199,
    salesPrice: 99,
    shortDescription: "",
    categories: [
      "tong-ho",
      "leafy-greens",
      "stem-vegetables",
      "cold-weather",
      "easy"
    ],
    sku: "A051",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 73
  },
  {
    slug: "tong-ho-serrated-leaf",
    label: "Tongho Serrated Leaf",
    image: "/assets/Tongho-Serrated-Leaf.jpg",
    originalPrice: 199,
    shortDescription: "",
    categories: [
      "tong-ho",
      "leafy-greens",
      "stem-vegetables",
      "cold-weather",
      "easy"
    ],
    sku: "A050",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 56
  },
  {
    slug: "celtuce-big-head",
    label: "Celtuce Big Head",
    image: "/assets/celtuce-big-head.jpg",
    originalPrice: 249,
    salesPrice: 200,
    shortDescription: "",
    categories: ["celtuce", "stem-vegetables", "cold-weather", "easy"],
    sku: "A082",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 90
  },
  {
    slug: "celtuce-red-crispy",
    label: "Celtuce Red Crispy",
    image: "/assets/celtuce-red-crispy.jpg",
    originalPrice: 199,
    shortDescription: "",
    categories: ["celtuce", "stem-vegetables", "cool-weather", "very-easy"],
    sku: "A072",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 49
  },
  {
    slug: "cilantro-broad-leaf",
    label: "Cilantro Broad Leaf",
    image: "/assets/cilantro-broad-leaf.jpg",
    originalPrice: 199,
    salesPrice: 149,
    shortDescription: "",
    categories: ["cilantro", "flower-vegetables", "warm-weather", "medium"],
    sku: "A053",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 73
  },
  {
    slug: "cilantro-fragrance-queen",
    label: "Cilantro Fragrance Queen",
    image: "/assets/cilantro-fragrance-queen.jpg",
    originalPrice: 299,
    shortDescription: "",
    categories: ["cilantro", "flower-vegetables", "warm-weather", "medium"],
    sku: "A054",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 56
  },
  {
    slug: "fennel-round-bulb",
    label: "Fennel Round Bulb",
    image: "/assets/fennel-round-bulb.jpg",
    originalPrice: 249,
    shortDescription: "",
    categories: ["fennel", "heading-vegetables", "warm-weather", "hard"],
    sku: "A080",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 10
  },
  {
    slug: "radish-red-lady",
    label: "Radish Red Lady",
    image: "/assets/radish-red-lady.jpg",
    originalPrice: 299,
    salesPrice: 199,
    shortDescription: "",
    categories: ["radish", "root-and-tubers", "cold-weather", "hard"],
    sku: "A075",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 39
  },
  {
    slug: "green-onion-king-long",
    label: "Green Onion King Long",
    image: "/assets/green-onion-king-long.jpg",
    originalPrice: 199,
    shortDescription: "",
    categories: ["green-onion", "root-and-tubers", "cold-weather", "easy"],
    sku: "A052",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 173
  },
  {
    slug: "ag2t-pruner",
    label: "AG2T Stainless Steel Pruner",
    image: "/assets/ag2t-stainless-steel-pruner.png",
    originalPrice: 5000,
    shortDescription: "",
    categories: ["garden-tool"],
    sku: "C001",
    description: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 26
  }
];
