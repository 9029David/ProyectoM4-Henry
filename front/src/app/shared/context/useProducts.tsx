"use client"

import { IProduct } from "./IProduct";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "../helpers/getEnvs";
import { IError } from "./IError";

interface ProductsContextType {
    products: IProduct[]
    loading: boolean
    error: string | undefined
}

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    loading: true,
    error: undefined
});

export const ProductsProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${NEXT_PUBLIC_API_URL}/products`)

                if(response.status !== 200) throw new Error("Error al cargar los productos. Intenta nuevamente más tarde.")
                    
                setProducts(response.data)
            } catch (error) {
                setError(
                    error instanceof Error ? error.message : "Error interno del servidor"
                )
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{products, loading, error}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = (): ProductsContextType => {
    const context = useContext(ProductsContext)
    return context
}