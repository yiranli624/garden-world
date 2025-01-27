import Image from "next/image";
import Link from "next/link";
import { ALL_CATEGORIES } from "./constants";
import { FullProduct } from "@/queries/productQueries";

const getBreadCrumbs = (chosenProduct: FullProduct) => {
  const lastCategory = ALL_CATEGORIES.find(
    (category) => category.slug === chosenProduct.category.slug
  );
  if (lastCategory?.type === "nav-menu") {
    const parentCategory = ALL_CATEGORIES.find(
      (category) => category.slug === lastCategory?.parent
    );
    return [
      { href: "/", label: "Home" },
      {
        href: `/collections/${parentCategory?.slug}`,
        label: parentCategory?.label
      },
      { href: `/collections/${lastCategory.slug}`, label: lastCategory.label }
    ];
  }
};

export default function NavBreadCrumbs({ product }: { product: FullProduct }) {
  const breadCrumbs = getBreadCrumbs(product);

  return (
    <ul className='flex mb-6 items-center text-slate-500'>
      {breadCrumbs?.map((eachRoute) => (
        <Link
          key={eachRoute.href}
          href={eachRoute.href}
          className='flex items-center'
        >
          <p>{eachRoute.label}</p>
          <Image
            src={"/assets/arrow-right.svg"}
            alt='picture of arrow pointing right'
            width={25}
            height={25}
          />
        </Link>
      ))}
    </ul>
  );
}
