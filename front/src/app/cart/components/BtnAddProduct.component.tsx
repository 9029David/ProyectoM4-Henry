"use client"


import { useCart } from "@/app/cart/context/Cart.context"
import { Mixin } from "@/app/shared/components/MixinAlert"
import { IProduct } from "@/app/shared/context/IProduct"

import { useEffect, useState } from "react"

export default function BtnAddProduct({product}: {product: IProduct }) {
    const { addProductToCart, products, countProducts } = useCart()
    const [disabled, setDisabled] = useState(false)

    const handlerAddProduct = () => {
        addProductToCart(product) 
        Mixin.fire("Producto agregado", "", "success")
    }

    const MAX_PRODUCT_FOR_CATEGORY: number = 1
    useEffect(() => {
        // countProducts(product.id) >= product.stock && setDisabled(true)
        countProducts(product.id) >= MAX_PRODUCT_FOR_CATEGORY && setDisabled(true)
    }, [products])

    return (
        <>
            <button 
                onClick={handlerAddProduct} 
                disabled={disabled}
                className={
                    `${!disabled}` ? 
                    `text-blue-600 bg-blue-50 px-4 py-2 rounded hover:bg-blue-100 my-2` :
                    `opacity-50 cursor-not-allowed;`
                }
            >
                    Agregar al carrito
            </button>
            {disabled ? <span className="text-red-500 text-center">No hay stock</span> : null}
        </>
    )
}
