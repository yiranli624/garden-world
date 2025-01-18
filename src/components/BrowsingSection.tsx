import { ProductItem } from "../constants";
import { ItemCard } from "./";

export default function BrowsingSection({
  listItems
}: {
  listItems: ProductItem[];
}) {
  return (
    <div className='flex gap-10'>
      <div className='w-1/5 border-2 border-blue-700'>Left pannel</div>
      <div className='grow grid grid-cols-4 gap-10'>
        {listItems.map((listItem, ind) => (
          <ItemCard listItem={listItem} key={listItem.name + ind} />
        ))}
      </div>
    </div>
  );
}
