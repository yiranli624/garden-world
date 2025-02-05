import Image from "next/image";
import Link from "next/link";
import { FullProduct } from "@/queries/productQueries";
import { FullCategory } from "@/queries/categoryQueries";

const getBreadCrumbs = (
  chosenProduct: FullProduct,
  allCategories: FullCategory[]
) => {
  const lastCategory = allCategories.find(
    (category) => category.slug === chosenProduct.category.slug
  );
  if (lastCategory?.type === "nav-menu") {
    const parentCategory = allCategories.find(
      (category) => category.slug === lastCategory?.parentCategory?.slug
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

export default function NavBreadCrumbs({
  product,
  allCategories
}: {
  product: FullProduct;
  allCategories: FullCategory[];
}) {
  const breadCrumbs = getBreadCrumbs(product, allCategories);

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
