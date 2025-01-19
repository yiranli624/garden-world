import { BrowsingSection } from "@/components";
import { ALL_CATEGORIES } from "@/components/constants";
import { test_products } from "@/components/testData";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const categorySlug = (await params).categorySlug;

  const filteredItems = test_products.filter((product) => {
    return (
      // when param is a menu
      // are product categories include the param
      product.categories.includes(categorySlug) ||
      // when param is a root
      // In flat category, if you are included in product category, is your parent matching param
      ALL_CATEGORIES.some(
        (eachCategory) =>
          product.categories.includes(eachCategory.slug) &&
          eachCategory.type === "nav-menu" &&
          eachCategory.parent === categorySlug
      )
    );
  });

  return (
    <main className='p-10'>
      <BrowsingSection listItems={filteredItems} />
    </main>
  );
}
