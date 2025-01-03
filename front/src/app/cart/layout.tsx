"use client"

import { useAuth } from "../(auth)/shared/context/Auth.context";
import ProductsComponent from "../root/Products.component";
import { AuthRequiredComponent } from "../shared/components/AuthRequired.component";

export default function CartLayout({children}: {children: React.ReactNode}) {
    const { isAuthenticated } = useAuth()

    return (
        isAuthenticated ? 
        <div className="max-w-[1000px] mx-auto">
            {children}
            <ProductsComponent/>
        </div> : 
        <AuthRequiredComponent title="Hello! To add to cart, please log in to your account"/>
    );
}