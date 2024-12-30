"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

import { useAuth } from "@/app/(auth)/shared/context/Auth.context"
import { IProduct } from "@/components/shared/context/IProduct"

interface CartContextType {
    products: IProduct[]
    addProductToCart: (product: IProduct) => void
    removeProductFromCart: (id: number) => void
    emptyCart: () => void
    countProducts: (id: number) => number
}

const CartContext = createContext<CartContextType>({
    products: [],
    addProductToCart: (product: IProduct) => {},
    removeProductFromCart: (id: number) => {},
    emptyCart: () => {},
    countProducts: (id: number) => 0
})

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        const savedProducts = localStorage.getItem("cart")
        if(savedProducts) return setProducts(JSON.parse(savedProducts))
        setProducts([])
    }, [])

    const addProductToCart = (product: IProduct) => {
        const updatedProducts = [...products, product]
        setProducts(updatedProducts)
        localStorage.setItem("cart", JSON.stringify(updatedProducts))
    }

    const removeProductFromCart = (id: number) => {
        const filteredProduct = products.filter((product) => product.id === id)
        setProducts(filteredProduct)
        localStorage.setItem("cart", JSON.stringify(filteredProduct))
    } 

    const emptyCart = () => {
        setProducts([])
        localStorage.removeItem("cart")
    }

    const countProducts = (id: number) => {
        return products.filter(product => product.id === id).length
    }


    const value = {
        products,
        addProductToCart,
        removeProductFromCart,
        emptyCart,
        countProducts
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => {
    const context = useContext(CartContext)
    // chequeo si puedo usar el useContext en esa parte de la aplicacion
    if(!context) throw new Error("useCart must be used  within an CartProvider")
    return context
}