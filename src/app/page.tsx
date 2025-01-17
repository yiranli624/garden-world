import Image from "next/image";
import styles from "./page.module.css";
import { SearchBar, NavigationBar, BrowsingSection } from "../components";
import { NavItems, navItems } from "../components/constants";
import { test_products } from "../components/testData";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="h-60 bg-[url('/assets/banner-3.png')] bg-no-repeat bg-cover bg-center"></div>
      {/* <Image
        src='/assets/banner-2.png'
        alt='picture of some vVegetable'
        width={1200}
        height={300}
        className='w-screen'
        priority
      /> */}

      <header>
        <div className='w-1/3'>My Garden world</div>
        <SearchBar />
      </header>
      <nav className='border-dotted border-y-2 border-emerald-900'>
        {/* p-4 */}
        <NavigationBar allNavItems={navItems} />
      </nav>
      <main>
        <BrowsingSection listItems={test_products} />
      </main>
    </div>
  );
}
