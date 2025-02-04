import BrowsingSection from "../../../components/BrowsingSection";
import NavigationWrapper from "../../../components/NavigationWrapper";
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
      // when param is a collection
      // is param included in product collections
      product.collections.includes(categorySlug) ||
      // when param is a menu
      // is product category matching the param
      product.category === categorySlug ||
      // when param is a root
      // In flat category, if you are included in product collections, is your parent matching param
      ALL_CATEGORIES.some(
        (eachCategory) =>
          product.category === eachCategory.slug &&
          eachCategory.type === "nav-menu" &&
          eachCategory.parent === categorySlug
      )
    );
  });

  return (
    <NavigationWrapper>
      <main className='p-10'>
        <BrowsingSection listItems={filteredItems} />
      </main>
    </NavigationWrapper>
  );
}
