"use client"

import { useCart } from "./Cart.context"

export default function CartStatus({
    className,
} : {
    className?: string
}) {
    const {products} = useCart()
    return <p className={className}>{products.length}</p>
}