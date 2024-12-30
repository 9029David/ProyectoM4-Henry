"use client"

import { IProduct } from "./IProduct";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "../helpers/getEnvs";

interface ProductsContextType {
    products: IProduct[]
    loading: boolean
    error: string | null
}

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    loading: true,
    error: null
});

export const ProductsProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${NEXT_PUBLIC_API_URL}/products`)
                if(!response) throw new Error("Error al cargar los products")
                setProducts(response.data)

            } catch (error: any) {
                setError(error.response.data.message)
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