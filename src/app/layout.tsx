import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">Home</Link>
          <Link href="/all-products">All Products</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
