import Image from "next/image";
import { ProductItem } from "../constants";

export default function ItemCard({ listItem }: { listItem: ProductItem }) {
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
      <div className='h-full flex flex-col text-center justify-center'>
        <p>{listItem.label}</p>
        <div className='flex justify-center gap-2'>
          {listItem.onSale && (
            <Image
              src='/assets/sale-tag.svg'
              alt='picture of a sale sign'
              width={30}
              height={30}
            />
          )}
          <p className=''>${(listItem.price / 100).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
