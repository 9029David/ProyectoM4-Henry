"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

import { useAuth } from "@/app/(auth)/shared/context/Auth.context"
import { IProduct } from "../shared/interfaces/product/IProduct"


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
    countProducts: (id: number) => 0,
})

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const { isAuthenticated, user } = useAuth()

    useEffect(() => { 
        if(isAuthenticated) {
            const userCart = localStorage.getItem(`cart_${user?.id}`)
            setProducts(userCart ? JSON.parse(userCart) : [])
        }
    }, [isAuthenticated, user])


    useEffect(() => {
        const syncCartAcrossTabs = (event: StorageEvent) => {
            if (event.key === `cart_${user?.id}` && event.newValue) {
            setProducts(JSON.parse(event.newValue));
            }
        };
    
        window.addEventListener("storage", syncCartAcrossTabs);
    
        return () => {
            window.removeEventListener("storage", syncCartAcrossTabs);
        };
    }, [user]);

    
    const saveCart = (updatedProducts: IProduct[]) => {
        if (isAuthenticated) {
            localStorage.setItem(`cart_${user?.id}`, JSON.stringify(updatedProducts));
        }
    };

    const clearCart = () => {
        if (isAuthenticated) {
            localStorage.removeItem(`cart_${user?.id}`);
        }
    }

    const addProductToCart = (product: IProduct) => {
        if (!isAuthenticated) {
            alert("Debes iniciar sesión para agregar productos al carrito.");
            return;
        }
        const updatedProducts = [...products, product]
        setProducts(updatedProducts)
        saveCart(updatedProducts)
    }

    const removeProductFromCart = (id: number) => {
        const filteredProduct = products.filter((product) => product.id !== id)
        setProducts(filteredProduct)
        saveCart(filteredProduct)
    } 

    const emptyCart = () => {
        setProducts([])
        clearCart()
    }

    const countProducts = (id: number) => {
        return products.filter(product => product.id === id).length
    }



    const value = {
        products,
        addProductToCart,
        removeProductFromCart,
        emptyCart,
        countProducts,
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