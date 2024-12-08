import "./globals.css";

import Footer from "@/components/footer/FooterView";
import Navbar from "@/components/navbar/NavbarView";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
