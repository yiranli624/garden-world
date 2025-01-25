import { NavigationBar } from ".";
import { generateNavItems } from "./helpers";

export default function NavigationWrapper({
  showBanner = true,
  children
}: {
  showBanner?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      {showBanner && (
        <div className="h-60 bg-[url('/assets/banner-3.png')] bg-no-repeat bg-cover bg-center"></div>
      )}
      <nav className='border-dotted border-y-2 border-lime-700'>
        <NavigationBar allNavItems={generateNavItems()} />
      </nav>
      {children}
    </>
  );
}
