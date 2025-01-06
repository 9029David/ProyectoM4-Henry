"use client"

import { useCart } from "./Cart.context"
import CartWithItems from "./components/CartWithItems"
import CartWithoutItems from "./components/CartWithoutItems"


export default function Cart() {
    const { products } = useCart()
    return  (
        <div className="text-gray-900 bg-[#ECE7E7] my-8 relative">
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                { products.length ? <CartWithItems/> : <CartWithoutItems/> }
            </div>
        </div>
    )
}


