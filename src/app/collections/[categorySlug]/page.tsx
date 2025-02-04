import { getAllProducts } from "@/queries/productQueries";
import BrowsingSection from "../../../components/BrowsingSection";
import NavigationWrapper from "../../../components/NavigationWrapper";
import { getCategories } from "@/queries/categoryQueries";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const categorySlug = (await params).categorySlug;
  const listItems = await getAllProducts();
  const allCategories = await getCategories();

  const filteredItems = listItems.filter((product) => {
    return (
      // when param is a collection
      // is param included in product collections
      product.collections
        .map((collection) => collection.slug)
        .includes(categorySlug) ||
      // when param is a menu
      // is product category matching the param
      product.category.slug === categorySlug ||
      // when param is a root
      // In flat category, if you are included in product collections, is your parent matching param
      allCategories.some(
        (eachCategory) =>
          product.category.slug === eachCategory.slug &&
          eachCategory.type === "nav-menu" &&
          eachCategory.parentCategory!.slug === categorySlug
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
