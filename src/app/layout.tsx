import { getAnnouncements } from "./cachedQueries";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allAnnouncements = await getAnnouncements();
  const bannerAnnouncements = allAnnouncements.filter(
    (announcement) =>
      announcement.location === "top" || announcement.location === "both"
  );

  return (
    <html lang='en'>
      <body className='font-serif'>
        <header>
          <div className='h-1/5 bg-lime-700 text-white flex flex-col items-center justify-center p-2'>
            {bannerAnnouncements.map((announcement) => (
              <p key={announcement.id}>{announcement.text}</p>
            ))}
          </div>
          <div className='flex px-10 py-10'>
            <div className='w-1/3'>My Garden world</div>
            <SearchBar />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
