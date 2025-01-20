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
  const originalPrice = (product.price.originalPrice / 100).toFixed(2);
  const currentPrice = product.price.salesPrice
    ? (product.price.salesPrice / 100).toFixed(2)
    : (product.price.originalPrice / 100).toFixed(2);
  const isInStock = product.stockAmount > 0;

  return (
    <div className=''>
      {/* left section */}
      <div className='flex gap-10 mb-10'>
        <div className='flex-none h-full'>
          <Image
            src={product.image}
            alt='picture of the selling item'
            width={384}
            height={384}
          />
          <div className='border-4 border-slate-600'>
            smaller window section
          </div>
        </div>
        {/* right section */}
        <div className='h-full flex flex-col gap-6'>
          <div>
            <p className='font-bold text-3xl'>{product.label}</p>
            <p className='text-slate-500'>{product.sku}</p>
          </div>

          <div className='flex gap-3 text-lg items-center'>
            {/* {product.salesPrice && (
              <p className='line-through text-slate-500'>${originalPrice}</p>
            )} */}
            <p className='font-bold text-2xl'>${currentPrice}</p>{" "}
            <p>
              (~ {product.seedsPerPack} seeds/每包约{product.seedsPerPack}粒)
            </p>
          </div>

          <div className='flex flex-col gap-4 '>
            <p>{product.englishDescription}</p>
            {product.chineseDescription && <p>{product.chineseDescription}</p>}
          </div>

          <div className='flex flex-col gap-2'>
            <label>Quantity</label>
            <input className='w-1/3 h-10'></input>
            <button
              className={classNames(
                "h-10 w-full bg-lime-700 rounded text-white text-lg",
                {
                  disabled: !isInStock,
                  "cursor-not-allowed": !isInStock
                }
              )}
            >
              {isInStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>

          <div className='h-1/5 bg-olive flex flex-col items-center justify-center'>
            {product.specialSellMessages?.map((message, ind) => (
              <p key={ind}>{message}</p>
            ))}
          </div>

          <div className='flex gap-2 text-base'>
            <p>Features: </p>
            <ul className='flex gap-2'>
              {product.categories.map((category, ind) => (
                <li key={ind} className='cursor-pointer flex hover:scale-110'>
                  <Image
                    src={"/assets/lightbulb.svg"}
                    alt='picture of light bulb'
                    width={25}
                    height={25}
                  />
                  <a>{category}</a>
                </li>
              ))}
            </ul>
          </div>

          <div></div>
        </div>
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
