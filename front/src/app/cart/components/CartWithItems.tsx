"use client"


import { useCart } from "../Cart.context"
import CartList from "./CartList"
import CartSummary from "./CartSummary"

export default function CartWithItems() {
    const { products } = useCart()

    return (
        <>
            <div className="w-full lg:w-[70%] min-h-[100px]" >
                <CartList products={products} />
            </div>
            
            <div className="w-full lg:w-[30%] sticky bottom-0">
                <CartSummary/>
            </div>
        </>  
    )
}