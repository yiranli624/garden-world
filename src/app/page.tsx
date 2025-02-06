import BrowsingSection from "../components/BrowsingSection";
import NavigationWrapper from "../components/NavigationWrapper";
import { getAllProducts } from "./cachedQueries";

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
