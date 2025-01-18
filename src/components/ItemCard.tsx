import Image from "next/image";
import { ProductItem } from "../constants";

export default function ItemCard({ listItem }: { listItem: ProductItem }) {
  return (
    <div className='h-80 bg-slate-50'>
      <div className='relative'>
        <Image
          src={listItem.image}
          alt='picture of the selling item'
          width={384}
          height={384}
          className=''
        />
        <Image
          src='/assets/shopping-cart.svg'
          alt='picture of a shopping cart'
          width={45}
          height={45}
          className='absolute bottom-2 right-2 cursor-pointer'
        />
      </div>
      <p className='text-lg py-2.5 text-center'>{listItem.label}</p>
    </div>
  );
}
