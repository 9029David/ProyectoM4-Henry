import "./globals.css";

import { AuthProvider } from "./(auth)/shared/context/Auth.context";
import { CartProvider } from "./cart/Cart.context";
import { FooterView } from "./shared/components/footer/Footer.view";
import NavView from "./shared/components/nav/Nav.view";
import { ProductsProvider } from "./shared/context/useProducts";
import ExcludedPaths from "./shared/helpers/ExcludedPath";
import PrivateRoute from "./shared/helpers/PrivateRoute";
import { montserrat } from "./shared/fonts/fonts";
import { Metadata } from "next";
import { Route } from "@/app/shared/constants/routes";


export const metadata: Metadata = {
  title: 'TechShop - Argentina'
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`bg-[#ECE7E7] text-white ${montserrat.className} antialiased`}>
        <AuthProvider>
            <CartProvider>
              <ProductsProvider>
                  <PrivateRoute redirectRoutes={[Route.LOGIN, Route.SIGNUP]}>
                    <ExcludedPaths>
                      <NavView />
                    </ExcludedPaths>
                    <main className="bg-[#ECE7E7] min-h-screen">
                      {children}
                    </main>
                    <ExcludedPaths>
                      <FooterView />
                    </ExcludedPaths>
                  </PrivateRoute> 
                </ProductsProvider>
              </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
