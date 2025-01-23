import { ProductItem } from "@/components/testData";
import { FiltersSection, ItemCard } from "./";

export default function BrowsingSection({
  listItems
}: {
  listItems: ProductItem[];
}) {
  return (
    <div className='flex gap-10'>
      <FiltersSection />
      <div className='flex-[6_6_0%] grid grid-cols-4 gap-10'>
        {listItems
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((listItem, ind) => (
            <ItemCard listItem={listItem} key={listItem.slug + ind} />
          ))}
      </div>
    </div>
  );
}
