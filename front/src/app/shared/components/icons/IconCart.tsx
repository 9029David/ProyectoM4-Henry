"use client"

import { useCart } from "@/app/cart/Cart.context"
import IconDefault from "./default/IconDefault"
import { dCart } from "./default/dValues"

export const IconCart = () => {
    const { products } = useCart()
    return (
        <div className="relative" title="cart">
            <IconDefault dimention={dCart}/>
            {products.length >= 1 ? <p className="absolute bottom-0 left-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 text-center">{products.length}</p> : null}
        </div>
    )
}

export default IconCart