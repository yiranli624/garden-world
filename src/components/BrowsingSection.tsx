import { ProductItem } from "../constants";
import { ItemCard } from "./";

export default function BrowsingSection({
  listItems
}: {
  listItems: ProductItem[];
}) {
  return (
    <div className='flex gap-8'>
      <div className='w-1/5 border-2 border-blue-700 border-solid'>
        Left pannel
      </div>
      <div className='w-4/5 flex flex-wrap gap-10'>
        {listItems.map((listItem, ind) => (
          <ItemCard listItem={listItem} key={listItem.name + ind} />
        ))}
      </div>
    </div>
  );
}
