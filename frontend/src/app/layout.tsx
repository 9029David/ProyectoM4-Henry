import "./globals.css";


import { AuthProvider } from "./(auth)/shared/context/Auth.context";
import { CartProvider } from "./cart/context/Cart.context";
import { FooterView } from "../components/footer/Footer.view";
import NavView from "../components/nav/Nav.view";
import ExcludedPaths from "../components/shared/helpers/ExcludedPath";


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-[#ECE7E7] text-white">
        <AuthProvider>
          <CartProvider>
            <ExcludedPaths children={<NavView/>}/>
              <main className="mx-auto max-w-[1100px] min-h-[100vh]">
                {children}
              </main>
            <ExcludedPaths children={<FooterView/>}/>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
