import ProductDetailSection from "@/components/ProductDetailSection";
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
    <main className='p-10'>
      <div className='flex gap-10'>
        <div className='flex-1 border-2 border-blue-700'>Left pannel</div>
        <div className='flex-[6_6_0%]'>
          <ProductDetailSection product={chosenProduct} />
        </div>
      </div>
    </main>
  );
}
