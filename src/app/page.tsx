import { getAllProducts } from "@/queries/productQueries";
import BrowsingSection from "../components/BrowsingSection";
import NavigationWrapper from "../components/NavigationWrapper";
import { test_products } from "../components/testData";

export default async function Home() {
  const listItems = await getAllProducts();

  return (
    <NavigationWrapper>
      <main className='p-10'>
        <BrowsingSection listItems={listItems} />
      </main>
    </NavigationWrapper>
  );
}
