"use client";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { ProductItem } from "./testData";

export default function ProductTabsSection({
  product
}: {
  product: ProductItem;
}) {
  const isToolProduct = product.category.includes("tool");

  const tabs = isToolProduct
    ? ["INSTRUCTION", "ADDITIONAL INFORMATION"]
    : ["PLANTING INFORMATION", "ADDITIONAL INFORMATION"];

  const [chosenTab, setChosenTab] = useState(0);

  return (
    <div className='w-full h-full'>
      <ul className='flex text-base gap-1'>
        {tabs.map((tabName, index) => (
          <li
            className={classNames("cursor-pointer relative border-t-4", {
              "bg-slate-100 border-lime-700": chosenTab === index,
              "bg-stone-300 border-stone-400": chosenTab !== index
            })}
            key={tabName}
          >
            <a className='block p-4' onClick={() => setChosenTab(index)}>
              {tabName}
            </a>
            {chosenTab === index && (
              <Image
                src='/assets/down-arrow.svg'
                alt='picture of a pointing down arrow'
                width={25}
                height={25}
                className='absolute left-[calc(50%-10px)] bottom-[-8px]'
              />
            )}
          </li>
        ))}
      </ul>
      <div className='flex flex-wrap gap-10 bg-slate-100 p-6 justify-between '>
        {chosenTab === 0 &&
          product.instructionImageUrls.map((instructionImgUrl) => (
            <Image
              key={instructionImgUrl}
              src={instructionImgUrl}
              alt='picture of planting guildence of the product'
              width={385}
              height={490}
              className='w-auto'
              // style={{ width: "auto", }}
            />

            // <p>
            //   {product.englishDescription} {product.chineseDescription}
            //   {product.englishDescription} {product.chineseDescription}
            //   {product.englishDescription} {product.chineseDescription}
            //   {product.englishDescription} {product.chineseDescription}
            // </p>
          ))}
        {chosenTab === 1 && <p>{product.additionalInfo}</p>}
      </div>
    </div>
  );
}
