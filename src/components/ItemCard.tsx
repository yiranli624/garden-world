import Image from "next/image";
import { ProductItem } from "@/components/testData";
import Link from "next/link";

export default function ItemCard({ listItem }: { listItem: ProductItem }) {
  const originalPrice = (listItem.price.originalPrice / 100).toFixed(2);
  const currentPrice = listItem.price.salesPrice
    ? (listItem.price.salesPrice / 100).toFixed(2)
    : (listItem.price.originalPrice / 100).toFixed(2);
  const isInStock = listItem.stockAmount > 0;

  return (
    <Link
      className='h-80 bg-slate-50 text-lg flex flex-col cursor-pointer'
      href={`/products/${listItem.slug}`}
    >
      <div className='relative'>
        <Image
          src={listItem.imagesUrls[0]}
          alt='picture of the selling item'
          width={384}
          height={384}
        />
        {isInStock && (
          <Image
            src='/assets/shopping-cart.svg'
            alt='picture of a shopping cart'
            width={45}
            height={45}
            className='absolute bottom-2 right-2 cursor-pointer hover:border-2 border-stone-900 rounded-full'
          />
        )}
        {!isInStock && (
          <div className='absolute top-4 left-0 bg-slate-200'>
            <p className='px-3 py-1 text-sm'>Out of stock</p>
          </div>
        )}
      </div>
      <div className='h-full flex flex-col justify-center'>
        <p className='text-center'>{listItem.label}</p>
        <div className='flex justify-center gap-2 text-md'>
          {listItem.price.salesPrice && (
            <Image
              src='/assets/sale-tag.svg'
              alt='picture of a sale sign'
              width={30}
              height={30}
            />
          )}
          {listItem.price.salesPrice && (
            <p className='line-through text-slate-500'>${originalPrice}</p>
          )}
          <p className='font-bold'>${currentPrice}</p>
        </div>
      </div>
    </Link>
  );
}
