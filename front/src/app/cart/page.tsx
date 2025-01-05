"use client"

import { useCart } from "./Cart.context"
import CartWithItems from "./components/CartWithItems"
import CartWithoutItems from "./components/CartWithoutItems"

export default function Cart() {
    const { products } = useCart()
    return  (
        <div className="text-gray-900 bg-[#ECE7E7] flex gap-8 my-8">
            { products.length ? <CartWithItems/> : <CartWithoutItems/> }
        </div>
    )
}


