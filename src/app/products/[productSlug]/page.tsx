import {
  PicturesDisplaySection,
  ProductInfoSection,
  ProductTabsSection
} from "@/components";
import { test_products } from "@/components/testData";
import { redirect } from "next/navigation";

export default async function ProductPage({
  params
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const productSlug = (await params).productSlug;
  const chosenProduct = test_products.find(
    (product) => product.slug === productSlug
  );

  if (!chosenProduct) {
    redirect("/");
  }

  return (
    <main className='mx-36 p-9'>
      <div className='flex gap-10 mb-10'>
        <PicturesDisplaySection imagesUrls={chosenProduct.imagesUrls} />
        <ProductInfoSection product={chosenProduct} />
      </div>
      <ProductTabsSection product={chosenProduct} />
    </main>
  );
}
