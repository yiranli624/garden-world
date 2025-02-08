import { redirect } from "next/navigation";
import NavigationWrapper from "@/components/NavigationWrapper";
import NavBreadCrumbs from "@/components/NavBreadCrumbs";
import PicturesDisplaySection from "@/components/PicturesDisplaySection";
import ProductInfoSection from "@/components/ProductInfoSection";
import ProductTabsSection from "@/components/ProductTabsSection";
import {
  getProduct,
  getCategories,
  getAnnouncements
} from "@/app/cachedQueries";
import Page404 from "@/components/404Page";

export default async function ProductPage({
  params
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const productSlug = (await params).productSlug;
  const chosenProduct = await getProduct(productSlug);
  if (!chosenProduct) {
    return (
      <NavigationWrapper showBanner={true}>
        <Page404 />
      </NavigationWrapper>
    );
  }

  const allCategories = await getCategories();
  const allAnnouncements = await getAnnouncements();

  const productAnnouncements = allAnnouncements.filter(
    (announcement) =>
      announcement.location === "product" || announcement.location === "both"
  );

  return (
    <NavigationWrapper showBanner={false}>
      <main className='py-9'>
        <NavBreadCrumbs product={chosenProduct} allCategories={allCategories} />
        <div className='flex px-32 gap-10 mb-10'>
          <PicturesDisplaySection product={chosenProduct} />
          <ProductInfoSection
            product={chosenProduct}
            allCategories={allCategories}
            announcements={productAnnouncements}
          />
        </div>
        <ProductTabsSection product={chosenProduct} />
      </main>
    </NavigationWrapper>
  );
}
