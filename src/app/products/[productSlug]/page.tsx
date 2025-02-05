import { redirect } from "next/navigation";
import { getProduct } from "@/queries/productQueries";
import NavigationWrapper from "@/components/NavigationWrapper";
import NavBreadCrumbs from "@/components/NavBreadCrumbs";
import PicturesDisplaySection from "@/components/PicturesDisplaySection";
import ProductInfoSection from "@/components/ProductInfoSection";
import ProductTabsSection from "@/components/ProductTabsSection";
import { getCategories } from "@/queries/categoryQueries";
import getAnnouncements from "@/queries/announcementQueries";

export default async function ProductPage({
  params
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const productSlug = (await params).productSlug;
  const allCategories = await getCategories();
  const allAnnouncements = await getAnnouncements();
  const chosenProduct = await getProduct(productSlug);

  const productAnnouncements = allAnnouncements.filter(
    (announcement) =>
      announcement.location === "product" || announcement.location === "both"
  );

  if (!chosenProduct) {
    redirect("/");
  }

  return (
    <NavigationWrapper showBanner={false}>
      <main className='mx-32 p-9'>
        <NavBreadCrumbs product={chosenProduct} allCategories={allCategories} />
        <div className='flex gap-10 mb-10'>
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
