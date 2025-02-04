import "./globals.css";
import SearchBar from "@/components/SearchBar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='font-serif'>
        <header className='flex px-10 py-10'>
          <div className='w-1/3'>My Garden world</div>
          <SearchBar />
        </header>

        {children}
      </body>
    </html>
  );
}
