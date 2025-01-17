export type NavItems = {
  name: string;
  label: string;
  menu: string[];
};

type Category =
  | "Cold Weather"
  | "Cool Weather"
  | "Mild Weather"
  | "Warm Weather"
  | "Hot Weather"
  | "Very Easy"
  | "Easy"
  | "Medium"
  | "Difficult"
  | "Very Difficult"
  | "Been & Peas"
  | "Leafy Greens"
  | "Heading Vegetables"
  | "Flower Vegetables"
  | "Root & Tubers";

export type ProductItem = {
  name: string;
  label: string;
  image: string;
  price: number;
  shortDescription: string;
  categories: Category[];
  sku: string;
  description: string;
  additionalInfo: string;
  plantingGuild?: string;
  stockAmount?: number;
};

export const navItems: NavItems[] = [
  {
    name: "vegetableSeeds",
    label: "Vegetable Seeds",
    menu: [
      "Tong Ho",
      "Cucumber",
      "Green Bean",
      "Long Bean",
      "Celtuce",
      "Lettuce",
      "Bok Choy",
      "Wu Choy",
      "Chives Root"
    ]
  },
  {
    name: "herbSeeds",
    label: "Herb Seeds",
    menu: ["Chive", "Green Onion", "Cilantro", "Fennel"]
  },
  {
    name: "tools",
    label: "Tools",
    menu: ["Cookware", "Gardening Tool"]
  },
  {
    name: "solutions",
    label: "Shop by Solutions",
    menu: [
      "Been & Peas",
      "Leafy Greens",
      "Heading Vegetables",
      "Flower Vegetables",
      "Root & Tubers"
    ]
  }
];
