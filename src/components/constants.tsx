export type NavItems = {
  slug: string;
  label: string;
  menu: Category[];
};

type Category = {
  slug: string;
  label: string;
};

type VegetableCategory =
  | "Tong Ho"
  | "Cucumber"
  | "Green Bean"
  | "Long Bean"
  | "Celtuce"
  | "Lettuce"
  | "Bok Choy"
  | "Wu Choy"
  | "Chives Root";

type HerbCategory = "Chive" | "Green Onion" | "Cilantro" | "Fennel";

type ToolCategory = "Cookware" | "Gardening Tool";

type PlantFamilyCategory =
  | "Bean & Peas"
  | "Leafy Greens"
  | "Heading Vegetables"
  | "Stem Vegetables"
  | "Flower Vegetables"
  | "Root & Tubers";

type WeatherCategory =
  | "Cold Weather"
  | "Cool Weather"
  | "Mild Weather"
  | "Warm Weather"
  | "Hot Weather";

type DifficultyCategory =
  | "Very Easy"
  | "Easy"
  | "Medium"
  | "Difficult"
  | "Very Difficult";

export type ProductItem = {
  slug: string;
  label: string;
  image: string;
  price: number;
  shortDescription: string;
  categories: Category[];
  sku: string;
  description: string;
  additionalInfo: string;
  onSale: boolean;
  plantingGuild?: string;
  stockAmount?: number;
};

export const navItems: NavItems[] = [
  {
    slug: "vegetable-seeds",
    label: "Vegetable Seeds",
    menu: [
      { slug: "all-vegetable-seeds", label: "All Vegetable Seeds" },
      { slug: "tong-ho", label: "Tong Ho" },
      { slug: "cucumber", label: "Cucumber" },
      { slug: "green-bean", label: "Green Bean" },
      { slug: "long-bean", label: "Long Bean" },
      { slug: "celtuce", label: "Celtuce" },
      { slug: "lettuce", label: "Lettuce" },
      { slug: "bok-choy", label: "Bok Choy" },
      { slug: "wu-choy", label: "Wu Choy" },
      { slug: "chives", label: "Chives Root" }
    ]
  },
  {
    slug: "herb-seeds",
    label: "Herb Seeds",
    menu: [
      { slug: "all-herb-seeds", label: "All Herb Seeds" },
      { slug: "chive", label: "Chive" },
      { slug: "green-onion", label: "Green Onion" },
      { slug: "cilantro", label: "Cilantro" },
      { slug: "fennel", label: "Fennel" }
    ]
  },
  {
    slug: "tools",
    label: "Tools",
    menu: [
      { slug: "all-tools", label: "All Tools" },
      { slug: "cookware", label: "Cookware" },
      { slug: "garden-tool", label: "Gardening Tool" }
    ]
  },
  {
    slug: "solutions",
    label: "Shop by Solutions",
    menu: [
      { slug: "all-items", label: "All Items" },
      { slug: "bean-and-peas", label: "Bean & Peas" },
      { slug: "leafy-greens", label: "Leafy Greens" },
      { slug: "heading-vegetables", label: "Heading Vegetables" },
      { slug: "stem-vegetables", label: "Stem Vegetables" },
      { slug: "flower-vegetables", label: "Flower Vegetables" },
      { slug: "root-and-tubers", label: "Root & Tubers" }
    ]
  }
];
