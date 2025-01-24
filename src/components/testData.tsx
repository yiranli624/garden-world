export type ProductItem = {
  slug: string;
  label: string;
  imagesUrls: string[];
  videoIds?: string[];
  price: { originalPrice: number; salesPrice?: number };
  category: string;
  collections: string[];
  sku: string;
  englishDescription: string;
  chineseDescription?: string;
  plantingGuild: string;
  additionalInfo: string;
  stockAmount: number;
  seedsPerPack?: number;
  specialSellMessages?: string[];
};

export const test_products: ProductItem[] = [
  {
    slug: "bok-choy-jade-star",
    label: "Bok Choy Jade Star",
    imagesUrls: ["/assets/Bok-Choy-Jade-star.jpg"],
    videoIds: ["QM4-1ApxSyA"],
    price: {
      originalPrice: 249,
      salesPrice: 149
    },
    category: "bok-choy",
    collections: [
      "leafy-greens",
      "easy",
      "cold-weather",
      "cool-weather",
      "very-easy"
    ],
    sku: "A083",
    englishDescription:
      "Heat resistant Bok Choy, plant is upright and large, ~24 cm tall, ~30 cm wide. Round leaf is green and wavy, pale green petiole is wide and short. Single plant can grow ~16 leaves and weighs up to 800g. It could be grown for baby/young plant or a full size. ",
    chineseDescription:
      "耐热青梗菜，株型中大而直立，束腰。成株株高24cm，开展度30cm＊30cm；叶片绿色，卵圆形，叶缘不平呈波状，长24cm，宽15cm，叶柄绿白色、稍短（4.5cm）而宽（6.2cm)；单株叶片16，重可达800克秋季栽培20天可采收菜秧，冬春栽培则需50-60天。移栽株行距22cm＊25cm，适温季节30天即可采收大棵菜。",
    additionalInfo: "",
    plantingGuild: "/assets/bok-choy-jade-star-planting.jpg",
    stockAmount: 110,
    seedsPerPack: 1000,
    specialSellMessages: [
      "Free Shipping on Seed orders over $50",
      "use code 50Free (excluding Canada)"
    ]
  },
  {
    slug: "bok-choy-dark-green",
    label: "Bok Choy Dark Green",
    imagesUrls: ["/assets/Bok-Choy-Dark-Green.jpg"],
    videoIds: ["zvedJyMOXic"],
    price: {
      originalPrice: 199
    },
    category: "bok-choy",
    collections: ["leafy-greens", "cool-weather", "easy"],
    sku: "A073",
    englishDescription:
      "This Bok Choy grows upright. Plant is about 22cm tall, 35 cm wide. Leaf is dark green round shape, thick, smooth with short spoon shape petioles. Early maturing and productive. It can tolerant to cold weather and some hot weather. ",
    chineseDescription:
      "植株直立，叶柄与地面略成直角。株高22厘米，开展度35厘米。中横径12厘米。叶片深绿色，15-17片，椭圆形或近圆形，长21厘米，宽18厘米，肥厚，平滑，全缘，基部无裂片。叶柄短，叶柄基部宽5厘米，上部宽1.9厘米，厚1.6厘米。叶柄基部肥厚，向内弯曲如匙，上部扁平，绿色，叶脉突出明显。早熟，丰产，品质优良。适应性强，较耐热、耐寒。",
    additionalInfo: "",
    plantingGuild: "/assets/bok-choy-jade-star-planting.jpg",
    stockAmount: 0
  },
  {
    slug: "tong-ho-crispy-stem",
    label: "Tongho Crispy Stem",
    imagesUrls: ["/assets/Tongho-Crispy-Stem.jpg"],
    price: {
      originalPrice: 199,
      salesPrice: 99
    },
    category: "tong-ho",
    collections: ["leafy-greens", "stem-vegetables", "cold-weather", "easy"],
    sku: "A051",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 73
  },
  {
    slug: "tong-ho-serrated-leaf",
    label: "Tongho Serrated Leaf",
    imagesUrls: ["/assets/Tongho-Serrated-Leaf.jpg"],
    price: {
      originalPrice: 199
    },
    category: "tong-ho",
    collections: ["leafy-greens", "stem-vegetables", "cold-weather", "easy"],
    sku: "A050",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 56
  },
  {
    slug: "celtuce-big-head",
    label: "Celtuce Big Head",
    imagesUrls: ["/assets/celtuce-big-head.jpg"],
    price: {
      originalPrice: 249,
      salesPrice: 200
    },
    category: "celtuce",
    collections: ["stem-vegetables", "cold-weather", "easy"],
    sku: "A082",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 90
  },
  {
    slug: "celtuce-red-crispy",
    label: "Celtuce Red Crispy",
    imagesUrls: ["/assets/celtuce-red-crispy.jpg"],
    price: {
      originalPrice: 199
    },
    category: "celtuce",
    collections: ["stem-vegetables", "cool-weather", "very-easy"],
    sku: "A072",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 49
  },
  {
    slug: "cilantro-broad-leaf",
    label: "Cilantro Broad Leaf",
    imagesUrls: ["/assets/cilantro-broad-leaf.jpg"],
    price: {
      originalPrice: 199,
      salesPrice: 149
    },
    category: "cilantro",
    collections: ["flower-vegetables", "warm-weather", "medium"],
    sku: "A053",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 73
  },
  {
    slug: "cilantro-fragrance-queen",
    label: "Cilantro Fragrance Queen",
    imagesUrls: ["/assets/cilantro-fragrance-queen.jpg"],
    price: {
      originalPrice: 299
    },
    category: "cilantro",
    collections: ["flower-vegetables", "warm-weather", "medium"],
    sku: "A054",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 56
  },
  {
    slug: "fennel-round-bulb",
    label: "Fennel Round Bulb",
    imagesUrls: ["/assets/fennel-round-bulb.jpg"],
    price: {
      originalPrice: 249
    },
    category: "fennel",
    collections: ["heading-vegetables", "warm-weather", "hard"],
    sku: "A080",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 10
  },
  {
    slug: "radish-red-lady",
    label: "Radish Red Lady",
    imagesUrls: ["/assets/radish-red-lady.jpg"],
    price: {
      originalPrice: 299,
      salesPrice: 199
    },
    category: "radish",
    collections: ["root-and-tubers", "cold-weather", "hard"],
    sku: "A075",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 39
  },
  {
    slug: "green-onion-king-long",
    label: "Green Onion King Long",
    imagesUrls: ["/assets/green-onion-king-long.jpg"],
    price: {
      originalPrice: 199
    },
    category: "green-onion",
    collections: ["root-and-tubers", "cold-weather", "easy"],
    sku: "A052",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 173
  },
  {
    slug: "ag2t-pruner",
    label: "AG2T Stainless Steel Pruner",
    imagesUrls: ["/assets/ag2t-stainless-steel-pruner.png"],
    price: {
      originalPrice: 5000
    },
    category: "garden-tool",
    collections: [],
    sku: "C001",
    englishDescription: "",
    additionalInfo: "",
    plantingGuild: "",
    stockAmount: 26
  }
];
