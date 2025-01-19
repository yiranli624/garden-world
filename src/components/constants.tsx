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
  originalPrice: number;
  shortDescription: string;
  categories: Category[];
  sku: string;
  description: string;
  additionalInfo: string;
  salesPrice?: number;
  plantingGuild?: string;
  stockAmount?: number;
};

export const navItems: NavItems[] = [
  {
    slug: "vegetable-seeds",
    label: "Vegetable Seeds",
    menu: [
      { slug: "all-vegetable-seeds", label: "All Vegetable Seeds" },
      { slug: "tong-ho", label: "Tong Ho 茼蒿" },
      { slug: "cucumber", label: "Cucumber 黄瓜" },
      { slug: "green-bean", label: "Green Bean 芸豆" },
      { slug: "long-bean", label: "Long Bean 豇豆" },
      { slug: "celtuce", label: "Celtuce 莴笋" },
      { slug: "lettuce", label: "Lettuce 生菜" },
      { slug: "bok-choy", label: "Bok Choy 小青菜" },
      { slug: "wu-choy", label: "Wu Choy 乌菜" },
      { slug: "chives", label: "Chives Root 韭菜根" }
    ]
  },
  {
    slug: "herb-seeds",
    label: "Herb Seeds",
    menu: [
      { slug: "all-herb-seeds", label: "All Herb Seeds" },
      { slug: "chive", label: "Chive 韭菜" },
      { slug: "green-onion", label: "Green Onion 大葱" },
      { slug: "cilantro", label: "Cilantro 香菜" },
      { slug: "fennel", label: "Fennel 茴香" }
    ]
  },
  {
    slug: "tools",
    label: "Tools",
    menu: [
      { slug: "all-tools", label: "All Tools" },
      { slug: "cookware", label: "Cookware 厨具" },
      { slug: "garden-tool", label: "Gardening Tool 工具" }
    ]
  },
  {
    slug: "solutions",
    label: "Shop by Solutions",
    menu: [
      { slug: "all-items", label: "All Items" },
      { slug: "bean-and-peas", label: "Bean & Peas" },
      { slug: "leafy-greens", label: "Leafy Greens 叶类" },
      { slug: "heading-vegetables", label: "Heading Vegetables 结球" },
      { slug: "stem-vegetables", label: "Stem Vegetables 杆类" },
      { slug: "flower-vegetables", label: "Flower Vegetables 花类" },
      { slug: "root-and-tubers", label: "Root & Tubers 根类" }
    ]
  }
];
