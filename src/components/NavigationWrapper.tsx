import { Category } from "@/types";
import NavigationBar from "./NavigationBar";
import { getCategories } from "@/app/cachedQueries";

export type NavItems = {
  slug: string;
  label: string;
  menu: Pick<Category, "label" | "slug">[];
  navIndex: number;
};

const generateNavItems = async (): Promise<NavItems[]> => {
  const allCategories = await getCategories();

  const allNavItems = allCategories.reduce<NavItems[]>((navItems, category) => {
    if (category.type === "nav-root") {
      const navItem: NavItems = {
        slug: category.slug,
        label: category.label,
        navIndex: category.navIndex!,
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
  }, []);

  allCategories.forEach((category) => {
    allNavItems.forEach((navItem) => {
      if (
        category.type === "nav-menu" &&
        navItem.slug === category.parentCategory!.slug
      ) {
        navItem.menu.push(category);
      }
    });
  });

  return allNavItems;
};

export default async function NavigationWrapper({
  showBanner = true,
  children
}: {
  showBanner?: boolean;
  children: React.ReactNode;
}) {
  const allNavItems = await generateNavItems();

  return (
    <>
      {showBanner && (
        <div className="h-60 bg-[url('/assets/banner-3.png')] bg-no-repeat bg-cover bg-center"></div>
      )}
      <nav className='border-dotted border-y-2 border-lime-700'>
        <NavigationBar allNavItems={allNavItems} />
      </nav>
      {children}
    </>
  );
}
