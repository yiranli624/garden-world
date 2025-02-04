import BrowsingSection from "../components/BrowsingSection";
import NavigationWrapper from "../components/NavigationWrapper";
import { test_products } from "../components/testData";

export default function Home() {
  return (
    <NavigationWrapper>
      <main className='p-10'>
        <BrowsingSection listItems={test_products} />
      </main>
    </NavigationWrapper>
  );
}
