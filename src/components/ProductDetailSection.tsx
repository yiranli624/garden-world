"use client";
import Image from "next/image";
import { ProductItem } from "./testData";
import { useState } from "react";
import classNames from "classnames";

const TABS = [
  { name: "about", label: "ABOUT" },
  { name: "planting-info", label: "PLANTING INFORMATION" },
  { name: "additional-info", label: "ADDITIONAL INFORMATION" }
];

export default function ProductDetailSection({
  product
}: {
  product: ProductItem;
}) {
  const [chosenTab, setChosenTab] = useState("about");
  const displayAboutSection = chosenTab === "about";
  const displayPlantingSection = chosenTab === "planting-info";
  const displayAdditionalSection = chosenTab === "additional-info";

  return (
    <div>
      <div className='flex gap-10 mb-10'>
        <Image
          src={product.image}
          alt='picture of the selling item'
          width={384}
          height={384}
        />
        <p className='text-3xl'>{product.label}</p>
      </div>

      <ul className='flex text-base gap-1'>
        {TABS.map((tab) => (
          <li
            className={classNames("cursor-pointer relative border-t-4", {
              "bg-slate-100 border-lime-700": chosenTab === tab.name,
              "bg-stone-300 border-stone-400": chosenTab !== tab.name
            })}
            key={tab.name}
          >
            <a className='block p-4' onClick={() => setChosenTab(tab.name)}>
              {tab.label}
            </a>
            {chosenTab === tab.name && (
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

      <div className='bg-slate-100 p-6'>
        {displayAboutSection && (
          <div className='flex flex-col gap-4'>
            <p>{product.englishDescription}</p>
            {product.chineseDescription && <p>{product.chineseDescription}</p>}
          </div>
        )}

        {displayPlantingSection && (
          <Image
            src={product.plantingGuild}
            alt='picture of planting guildence of the product'
            width={385}
            height={385}
          />
        )}

        {displayAdditionalSection && <p>{product.additionalInfo}</p>}
      </div>
    </div>
  );
}
