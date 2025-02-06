type NavRootCategory = {
  type: "nav-root";
  slug: string;
  label: string;
  navIndex: number;
};

type NavMenuCategory = {
  type: "nav-menu";
  slug: string;
  label: string;
  parent: string;
};

type NoneNavCategory = {
  type: "none-nav";
  slug: string;
  label: string;
};

type Category = NavRootCategory | NavMenuCategory | NoneNavCategory;

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

export const ALL_CATEGORIES: Category[] = [
  {
    type: "nav-root",
    slug: "vegetable-seeds",
    label: "Vegetable Seeds",
    navIndex: 0
  },
  {
    type: "nav-menu",
    slug: "tong-ho",
    label: "Tong Ho 茼蒿",
    parent: "vegetable-seeds"
  },
  {
    type: "nav-menu",
    slug: "cucumber",
    label: "Cucumber 黄瓜",
    parent: "vegetable-seeds"
  },
  {
    type: "nav-menu",
    slug: "green-bean",
    label: "Green Bean 芸豆",
    parent: "vegetable-seeds"
  },
  {
    type: "nav-menu",
    slug: "long-bean",
    label: "Long Bean 豇豆",
    parent: "vegetable-seeds"
  },
  {
    type: "nav-menu",
    slug: "celtuce",
    label: "Celtuce 莴笋",
    parent: "vegetable-seeds"
  },
  {
    type: "nav-menu",
    slug: "lettuce",
    label: "Lettuce 生菜",
    parent: "vegetable-seeds"
  },
  {
    type: "nav-menu",
    slug: "bok-choy",
    label: "Bok Choy 小青菜",
    parent: "vegetable-seeds"
  },
  {
    type: "nav-menu",
    slug: "wu-choy",
    label: "Wu Choy 乌菜",
    parent: "vegetable-seeds"
  },
  {
    type: "nav-menu",
    slug: "chives",
    label: "Chives Root 韭菜根",
    parent: "vegetable-seeds"
  },
  // herb below
  { type: "nav-root", slug: "herb-seeds", label: "Herb Seeds", navIndex: 1 },
  {
    type: "nav-menu",
    slug: "chive",
    label: "Chive 韭菜",
    parent: "herb-seeds"
  },
  {
    type: "nav-menu",
    slug: "green-onion",
    label: "Green Onion 大葱",
    parent: "herb-seeds"
  },
  {
    type: "nav-menu",
    slug: "cilantro",
    label: "Cilantro 香菜",
    parent: "herb-seeds"
  },
  {
    type: "nav-menu",
    slug: "fennel",
    label: "Fennel 茴香",
    parent: "herb-seeds"
  },
  // tools below
  { type: "nav-root", slug: "tools", label: " Tools", navIndex: 2 },
  {
    type: "nav-menu",
    slug: "cookware",
    label: "Cookware 厨具",
    parent: "tools"
  },
  {
    type: "nav-menu",
    slug: "garden-tool",
    label: "Gardening Tool 工具",
    parent: "tools"
  },
  // collections below
  { type: "nav-root", slug: "collections", label: "Collections", navIndex: 3 },
  {
    type: "nav-menu",
    slug: "bean-and-peas",
    label: "Bean & Peas",
    parent: "collections"
  },
  {
    type: "nav-menu",
    slug: "leafy-greens",
    label: "Leafy Greens 叶类",
    parent: "collections"
  },
  {
    type: "nav-menu",
    slug: "heading-vegetables",
    label: "Heading Vegetables 结球",
    parent: "collections"
  },
  {
    type: "nav-menu",
    slug: "stem-vegetables",
    label: "Stem Vegetables 杆类",
    parent: "collections"
  },
  {
    type: "nav-menu",
    slug: "flower-vegetables",
    label: "Flower Vegetables 花类",
    parent: "collections"
  },
  {
    type: "nav-menu",
    slug: "root-and-tubers",
    label: "Root & Tubers 根类",
    parent: "collections"
  },

  // weather below
  {
    type: "none-nav",
    slug: "cold-weather",
    label: "Cold Weather"
  },
  {
    type: "none-nav",
    slug: "cool-weather",
    label: "Cool Weather"
  },
  {
    type: "none-nav",
    slug: "mild-weather",
    label: "Mild Weather"
  },
  {
    type: "none-nav",
    slug: "warm-weather",
    label: "Warm Weather"
  },
  {
    type: "none-nav",
    slug: "hot-weather",
    label: "Hot Weather"
  },
  // difficulty below
  {
    type: "none-nav",
    slug: "very-easy",
    label: "Very Easy 非常容易"
  },
  {
    type: "none-nav",
    slug: "easy",
    label: "Easy 容易"
  },
  {
    type: "none-nav",
    slug: "medium",
    label: "Medium"
  },
  {
    type: "none-nav",
    slug: "difficult",
    label: "Difficult"
  },
  {
    type: "none-nav",
    slug: "very-difficult",
    label: "Very Difficult"
  }
];
