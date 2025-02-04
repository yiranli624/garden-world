"use client";
import { useSearchParams } from "next/navigation";
import { ProductItem } from "@/components/testData";
import FiltersSection from "./FiltersSection";
import ItemCard from "./ItemCard";

export default function BrowsingSection({
  listItems
}: {
  listItems: ProductItem[];
}) {
  const searchParams = useSearchParams();
  const filterGroups = [
    searchParams.getAll("growing_weather"),
    searchParams.getAll("growing_difficulty")
  ];

  const filteredItems = listItems.filter((item) => {
    return filterGroups.reduce((finalDecision, filterGroup) => {
      if (filterGroup.length > 0) {
        return (
          finalDecision &&
          filterGroup.some((filterOption) =>
            item.collections.includes(filterOption)
          )
        );
      }
      return finalDecision;
    }, true);
  });

  return (
    <div className='flex gap-10'>
      <FiltersSection />
      <div className='flex-[6_6_0%] grid grid-cols-4 gap-10'>
        {filteredItems
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((listItem, ind) => (
            <ItemCard listItem={listItem} key={listItem.slug + ind} />
          ))}
      </div>
    </div>
  );
}
