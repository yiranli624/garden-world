import "./globals.css";
import { NavigationBar, SearchBar } from "@/components";
import { ALL_CATEGORIES, Category } from "../components/constants";

export type NavItems = {
  slug: string;
  label: string;
  menu: Pick<Category, "label" | "slug">[];
  navIndex: number;
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const generateNavItems = (): NavItems[] => {
    const allNavItems = ALL_CATEGORIES.reduce<NavItems[]>(
      (navItems, category) => {
        if (category.type === "nav-root") {
          const navItem = {
            slug: category.slug,
            label: category.label,
            navIndex: category.navIndex,
            menu: [
              {
                slug: category.slug === "solutions" ? "/" : category.slug,
                label: `All ${
                  category.slug === "solutions" ? "Items" : category.label
                }`
              }
            ]
          };
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

  return (
    <html lang='en'>
      <body className='font-serif'>
        <header className='flex px-10 py-10'>
          <div className='w-1/3'>My Garden world</div>
          <SearchBar />
        </header>
        <div className="h-60 bg-[url('/assets/banner-3.png')] bg-no-repeat bg-cover bg-center"></div>
        <nav className='border-dotted border-y-2 border-lime-700'>
          <NavigationBar allNavItems={generateNavItems()} />
        </nav>

        {children}
      </body>
    </html>
  );
}
