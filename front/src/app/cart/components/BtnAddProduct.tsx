"use client"

import { useCart } from "@/app/cart/Cart.context"
import { Mixin } from "@/app/shared/components/MixinAlert"
import { IProduct } from "@/app/shared/interfaces/product/IProduct"

import { useEffect, useState } from "react"
import { useAuth } from "../../(auth)/shared/context/Auth.context"

export default function BtnAddProduct({product}: {product: IProduct }) {
    const { addProductToCart, products, countProducts } = useCart()
    const [disabled, setDisabled] = useState(false)
    const {isAuthenticated} = useAuth()

    const handlerAddProduct = () => {
        if (!isAuthenticated) {
            Mixin.fire("You must log in to add products to the cart", "", "warning")
            return
        }
        addProductToCart(product) 
        Mixin.fire("Product added", "", "success")
    }

    const MAX_PRODUCT_FOR_CATEGORY: number = 1
    useEffect(() => {
        // countProducts(product.id) >= product.stock && setDisabled(true)
        if (countProducts(product.id) >= MAX_PRODUCT_FOR_CATEGORY) {
            setDisabled(true)
        }
    }, [products, countProducts, product.id])

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
                    Add to cart
            </button>
            {
                disabled ? 
                <div>
                    <span className="text-red-500 text-center font-semibold absolute">Out of stock</span>
                </div> : null
            }
        </>
    )
}
