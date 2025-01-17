import { ProductItem } from "../constants";

export default function ItemCard({ listItem }: { listItem: ProductItem }) {
  return (
    <div className={"h-80 w-1/4 border-2 border-blue-600 border-solid"}>
      <div
        className='h-3/5 w-full bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${listItem.image})` }}
      ></div>
      <div className='absolute'></div>
      <p className='text-lg py-2.5 text-center'>{listItem.label}</p>
    </div>
  );
}
