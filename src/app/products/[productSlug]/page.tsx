import { redirect } from "next/navigation";
import { getProduct } from "@/queries/productQueries";
import NavigationWrapper from "@/components/NavigationWrapper";
import NavBreadCrumbs from "@/components/NavBreadCrumbs";
import PicturesDisplaySection from "@/components/PicturesDisplaySection";
import ProductInfoSection from "@/components/ProductInfoSection";
import ProductTabsSection from "@/components/ProductTabsSection";

export default async function ProductPage({
  params
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const productSlug = (await params).productSlug;
  // const chosenProduct = test_products.find(
  //   (product) => product.slug === productSlug
  // );
  const chosenProduct = await getProduct(productSlug);

  if (!chosenProduct) {
    redirect("/");
  }

  return (
    <NavigationWrapper showBanner={false}>
      <main className='mx-32 p-9'>
        <NavBreadCrumbs product={chosenProduct} />
        <div className='flex gap-10 mb-10'>
          <PicturesDisplaySection product={chosenProduct} />
          <ProductInfoSection product={chosenProduct} />
        </div>
        <ProductTabsSection product={chosenProduct} />
      </main>
    </NavigationWrapper>
  );
}
