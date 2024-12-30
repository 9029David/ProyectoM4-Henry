import "./globals.css";

import { AuthProvider } from "./(auth)/shared/context/Auth.context";
import { CartProvider } from "./cart/context/Cart.context";
import { FooterView } from "./shared/components/footer/Footer.view";
import NavView from "./shared/components/nav/Nav.view";
import { ProductsProvider } from "./shared/context/useProducts";
import ExcludedPaths from "./shared/helpers/ExcludedPath";
import PrivateRoute from "./shared/helpers/PrivateRoute";





export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-[#ECE7E7] text-white">
        <AuthProvider>
            <CartProvider>
              <ProductsProvider>
                <PrivateRoute redirectRoutes={["/login", "/register"]}>
                  <ExcludedPaths children={<NavView/>}/>
                  {/* max-w-[1100px] mx-auto */}
                    <main className="min-h-[200vh] bg-[#ECE7E7] ">
                      {children}
                    </main>
                  <ExcludedPaths children={<FooterView/>}/>

                </PrivateRoute>
        
              </ProductsProvider>
            </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
