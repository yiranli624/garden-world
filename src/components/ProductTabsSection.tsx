"use client";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { FullProduct } from "@/queries/productQueries";
import { generateImgUrl } from "./helpers";

export default function ProductTabsSection({
  product
}: {
  product: FullProduct;
}) {
  const isToolProduct = product.category.slug.includes("tool");

  const tabs = isToolProduct
    ? ["INSTRUCTION", "ADDITIONAL INFORMATION"]
    : ["PLANTING INFORMATION", "ADDITIONAL INFORMATION"];

  const [chosenTab, setChosenTab] = useState(0);
  const getAdditionalInfo = () => {
    return Object.entries(product.additionalInfo).map(([key, value], ind) => (
      <div key={ind} className='flex px-2 rounded justify-center'>
        <p className='px-2 border-b-2 border-lime-700'>{key}:</p>
        {typeof value === "string" && (
          <p className='px-2 border-b-2 border-stone-200'>{value}</p>
        )}
      </div>
    ));
  };

  return (
    <div className='w-full h-full'>
      <ul className='flex text-base gap-1 justify-center'>
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
      <div className='flex gap-10 bg-slate-100 py-10 justify-center'>
        {chosenTab === 0 &&
          product.instructionImageUrls.map((instructionImgUrl) => (
            <Image
              key={instructionImgUrl}
              src={generateImgUrl(instructionImgUrl)}
              alt='picture of planting guildence of the product'
              width={385}
              height={490}
              className='w-auto'
            />
          ))}
        {chosenTab === 1 && (
          <div className='flex flex-col gap-4 justify-center'>
            {getAdditionalInfo()}
          </div>
        )}
      </div>
    </div>
  );
}
