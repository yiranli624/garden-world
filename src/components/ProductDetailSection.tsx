"use client";
import { ProductItem } from "./testData";
import {
  PicturesDisplaySection,
  ProductInfoSection,
  ProductTabsSection
} from "./";

const TABS = [
  { name: "about", label: "ABOUT" },
  { name: "planting-info", label: "PLANTING INFORMATION" },
  { name: "additional-info", label: "ADDITIONAL INFORMATION" }
];

function ProductDetailSection({ product }: { product: ProductItem }) {
  return (
    <div className=''>
      <div className='flex gap-10 mb-10'>
        <PicturesDisplaySection imgUrl={product.image} />
        <ProductInfoSection product={product} />
      </div>
      <ProductTabsSection product={product} />
    </div>
  );
}
