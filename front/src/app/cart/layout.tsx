import { Metadata } from "next";
import ProductsComponent from "../shared/components/Products.component";
import ProtectedRoute from "../shared/helpers/ProtectedRoute";


export const metadata: Metadata = {
    title: 'Shopping cart'
}

export default function CartLayout({children}: {children: React.ReactNode}) {
    return (
        <ProtectedRoute title="Hello! To add to cart, please log in to your account">
            <div className="max-w-[1000px] mx-auto">
                {children}
                <ProductsComponent/>
            </div>
        </ProtectedRoute>
    )
    
}