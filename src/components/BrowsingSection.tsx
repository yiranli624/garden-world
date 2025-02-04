"use client";
import { useSearchParams } from "next/navigation";
import FiltersSection from "./FiltersSection";
import ItemCard from "./ItemCard";
import { FullProduct } from "@/queries/productQueries";

export default function BrowsingSection({
  listItems
}: {
  listItems: FullProduct[];
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
            item.collections
              .map((collection) => collection.slug)
              .includes(filterOption)
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
            <ItemCard listItem={listItem} key={listItem.id} />
          ))}
      </div>
    </div>
  );
}
