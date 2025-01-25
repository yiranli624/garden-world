"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { ProductItem } from "./testData";
import { ALL_CATEGORIES } from "./constants";

export default function ProductInfoSection({
  product
}: {
  product: ProductItem;
}) {
  const [quantity, setQuantity] = useState(1);

  const originalPrice = (product.price.originalPrice / 100).toFixed(2);
  const currentPrice = product.price.salesPrice
    ? (product.price.salesPrice / 100).toFixed(2)
    : (product.price.originalPrice / 100).toFixed(2);
  const isInStock = product.stockAmount > 0;
  const collectionsWithCategory = [product.category, ...product.collections];

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numericInput = Number(event.target.value);
    setQuantity(numericInput > 1 ? numericInput : 1);
  };

  return (
    <div className='h-full flex flex-col gap-6'>
      <div>
        <p className='font-bold text-3xl'>{product.label}</p>
        <p className='text-slate-500'>{product.sku}</p>
      </div>

      <div className='flex gap-3 text-2xl items-center'>
        {product.price.salesPrice && (
          <p className='line-through text-slate-500'>${originalPrice}</p>
        )}
        <p className='font-bold'>${currentPrice}</p>
        {product.amountPerPack && (
          <p className='text-lg'>
            (~ {product.amountPerPack} seeds/每包约{product.amountPerPack}粒)
          </p>
        )}
      </div>

      <div className='flex flex-col gap-4 '>
        <p>{product.englishDescription}</p>
        {product.chineseDescription && <p>{product.chineseDescription}</p>}
      </div>

      <div className='flex flex-col gap-2'>
        <label>Quantity</label>
        <div className='flex w-1/5 h-10 border border-slate-400'>
          <button
            className={classNames("w-1/3 flex justify-center items-center", {
              "hover:cursor-pointer": quantity > 1,
              "hover:cursor-not-allowed": quantity <= 1
            })}
            disabled={quantity <= 1}
            onClick={() => {
              setQuantity((prev) => prev - 1);
            }}
          >
            <Image
              src='/assets/minus.svg'
              alt='picture of minus sign'
              width={20}
              height={20}
            />
          </button>
          <input
            type='number'
            min={1}
            step={1}
            className='w-1/3 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-500 focus-visible:outline-offset-4 focus-visible:shadow-sm z-10'
            value={quantity}
            onChange={(event) => {
              handleQuantityChange(event);
            }}
          ></input>
          <button
            className='w-1/3 flex justify-center items-center hover:cursor-pointer'
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            <Image
              src='/assets/plus.svg'
              alt='picture of plus sign'
              width={20}
              height={20}
            />
          </button>
        </div>
        <button
          className={classNames(
            "h-12 w-full bg-lime-700 rounded-sm text-white text-lg",
            {
              "cursor-not-allowed": !isInStock
            }
          )}
          disabled={!isInStock}
        >
          {isInStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>

      <div className='h-1/5 bg-olive flex flex-col items-center justify-center p-2'>
        {product.specialSellMessages?.map((message, ind) => (
          <p key={ind}>{message}</p>
        ))}
      </div>

      <div className='text-base'>
        <p className=''>Collections: </p>
        <ul className='grid grid-cols-3 gap-2'>
          {collectionsWithCategory.map((collection, ind) => (
            <Link
              key={ind}
              href={`/collections/${collection}`}
              className='flex items-center p-1 cursor-pointer text-lime-700 hover:bg-olive'
            >
              {/* hover:scale-110 hover:text-slate-700 
              hover:shadow-lg hover:bg-lime-700 hover:text-white hover:rounded-sm */}
              <Image
                src={"/assets/lightbulb.svg"}
                alt='picture of light bulb'
                width={45}
                height={45}
              />
              <p className='text-sm'>
                {
                  ALL_CATEGORIES.find(
                    (categoryMenu) => categoryMenu.slug === collection
                  )?.label
                }
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
