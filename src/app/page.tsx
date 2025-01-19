import { BrowsingSection } from "../components";
import { test_products } from "../components/testData";

export default function Home() {
  return (
    <main className='p-10'>
      <BrowsingSection listItems={test_products} />
    </main>
  );
}
