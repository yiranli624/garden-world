import { BrowsingSection } from "@/components";
import { test_products } from "@/components/testData";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const categorySlug = (await params).categorySlug;
  const filteredItems = test_products.filter((product) =>
    product.categories.some((category) => category.slug === categorySlug)
  );

  return (
    <main className='p-10'>
      <BrowsingSection listItems={filteredItems} />
    </main>
  );
}
