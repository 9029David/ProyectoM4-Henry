"use client"

import { IProduct } from "../interfaces/product/IProduct";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "../helpers/getEnvs";

interface ProductsContextType {
    products: IProduct[]
    loading: boolean
    error: string | undefined
    getProductById: (id: number) => IProduct | undefined
}

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    loading: true,
    error: undefined,
    getProductById: (id: number) => undefined
});

export const ProductsProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${NEXT_PUBLIC_API_URL}/products`)
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

    const getProductById = (id: number): IProduct | undefined => {
        return products.find(product => product.id === id) || undefined
    }

    return (
        <ProductsContext.Provider value={{products, loading, error, getProductById}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = (): ProductsContextType => {
    const context = useContext(ProductsContext)

    if(!context) throw new Error("useProdudcts must be used  within an ProductsProvider")
    return context
}