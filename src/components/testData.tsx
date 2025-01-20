export type ProductItem = {
  slug: string;
  label: string;
  image: string;
  originalPrice: number;
  shortDescription: string;
  categories: string[];
  sku: string;
  englishDescription: string;
  plantingGuild: string;
  chineseDescription?: string;
  additionalInfo: string;
  salesPrice?: number;
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
    englishDescription:
      "This Bok Choy grows upright. Plant is about 22cm tall, 35 cm wide. Leaf is dark green round shape, thick, smooth with short spoon shape petioles. Early maturing and productive. It can tolerant to cold weather and some hot weather. ",
    chineseDescription:
      "植株直立，叶柄与地面略成直角。株高22厘米，开展度35厘米。中横径12厘米。叶片深绿色，15-17片，椭圆形或近圆形，长21厘米，宽18厘米，肥厚，平滑，全缘，基部无裂片。叶柄短，叶柄基部宽5厘米，上部宽1.9厘米，厚1.6厘米。叶柄基部肥厚，向内弯曲如匙，上部扁平，绿色，叶脉突出明显。早熟，丰产，品质优良。适应性强，较耐热、耐寒。",
    additionalInfo: "",
    plantingGuild: "/assets/bok-choy-jade-star-planting.jpg",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
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
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 26
  }
];
