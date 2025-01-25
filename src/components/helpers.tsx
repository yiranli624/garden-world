import { ALL_CATEGORIES, Category } from "./constants";

export type NavItems = {
  slug: string;
  label: string;
  menu: Pick<Category, "label" | "slug">[];
  navIndex: number;
};

export const generateNavItems = (): NavItems[] => {
  const allNavItems = ALL_CATEGORIES.reduce<NavItems[]>(
    (navItems, category) => {
      if (category.type === "nav-root") {
        const navItem: NavItems = {
          slug: category.slug,
          label: category.label,
          navIndex: category.navIndex,
          menu: []
        };
        if (category.slug !== "collections") {
          navItem.menu.push({
            slug: category.slug,
            label: `All ${category.label}`
          });
        }

        navItems.push(navItem);
      }
      navItems.sort((a, b) => a.navIndex - b.navIndex);
      return navItems;
    },
    []
  );

  ALL_CATEGORIES.forEach((category) => {
    allNavItems.forEach((navItem) => {
      if (category.type === "nav-menu" && navItem.slug === category.parent) {
        navItem.menu.push(category);
      }
    });
  });

  return allNavItems;
};
