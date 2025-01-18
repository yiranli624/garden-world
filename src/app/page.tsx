import Image from "next/image";
import styles from "./page.module.css";
import { SearchBar, NavigationBar, BrowsingSection } from "../components";
import { NavItems, navItems } from "../components/constants";
import { test_products } from "../components/testData";

export default function Home() {
  return (
    <div className='font-serif'>
      <div className="h-60 bg-[url('/assets/banner-3.png')] bg-no-repeat bg-cover bg-center"></div>
      <header className='flex px-10 py-10'>
        <div className='w-1/3'>My Garden world</div>
        <SearchBar />
      </header>
      <nav className='border-dotted border-y-2 border-emerald-900'>
        <NavigationBar allNavItems={navItems} />
      </nav>
      <main className='p-10'>
        <BrowsingSection listItems={test_products} />
      </main>
    </div>
  );
}
