import "./globals.css"
import ConditionalNavbar from "./shared/ui/ConditionalNavbar";

import { Footer } from "./shared/ui/Footer";
import { Navbar } from "./shared/ui/Navbar";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <ConditionalNavbar>
          <Navbar/>
        </ConditionalNavbar>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
