import Image from "next/image";
import { ProductItem } from "./constants";

export default function ItemCard({ listItem }: { listItem: ProductItem }) {
  const originalPrice = (listItem.originalPrice / 100).toFixed(2);
  const currentPrice = listItem.salesPrice
    ? (listItem.salesPrice / 100).toFixed(2)
    : (listItem.originalPrice / 100).toFixed(2);

  return (
    <div className='h-80 bg-slate-50 text-lg flex flex-col'>
      <div className='relative'>
        <Image
          src={listItem.image}
          alt='picture of the selling item'
          width={384}
          height={384}
        />
        <Image
          src='/assets/shopping-cart.svg'
          alt='picture of a shopping cart'
          width={45}
          height={45}
          className='absolute bottom-2 right-2 cursor-pointer'
        />
      </div>
      <div className='h-full flex flex-col justify-center'>
        <p className='text-center'>{listItem.label}</p>
        <div className='flex justify-center gap-2 text-md'>
          {listItem.salesPrice && (
            <Image
              src='/assets/sale-tag.svg'
              alt='picture of a sale sign'
              width={30}
              height={30}
            />
          )}
          {listItem.salesPrice && (
            <p className='line-through text-slate-500'>${originalPrice}</p>
          )}
          <p className='font-bold'>${currentPrice}</p>
        </div>
      </div>
    </div>
  );
}
