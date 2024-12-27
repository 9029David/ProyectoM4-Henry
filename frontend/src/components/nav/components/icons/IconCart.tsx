"use client"

import { useCart } from "@/app/cart/context/Cart.context"
import CartStatus from "@/app/cart/utils/Cart.status"
import IconDefault from "./default/IconDefault"
import { dCart } from "./default/dValues"

export const IconCart = () => {
    const { products } = useCart()
    return (
        <div className="relative" title="cart">
            <IconDefault dimention={dCart}/>
            {products.length >= 1 ? <CartStatus className="absolute bottom-0 left-0 bg-red-500 text-white text-xs rounded-full w-4 h-4"/> : null}
        </div>
    )
}

export default IconCart