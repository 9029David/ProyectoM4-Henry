"use client"

import { IProduct } from "../interfaces/product/IProduct";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "../config/getEnvs";

interface ProductsContextType {
    products: IProduct[]
    loading: boolean
    error: string | undefined
    getProductById: (id: number) => IProduct | undefined
    filteredProducts: (selectedCategory: number | null) => IProduct[]
}

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    loading: true,
    error: undefined,
    getProductById: (id: number) => undefined,
    filteredProducts: (selectedCategory: number | null) => []
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
    
    const filteredProducts = (selectedCategory: number | null): IProduct[] => {
        return selectedCategory
        ? products.filter((product) => product.categoryId === selectedCategory)
        : products;
    }

    const value = {
        products,
        loading,
        error,
        getProductById,
        filteredProducts
    }
    

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = (): ProductsContextType => {
    const context = useContext(ProductsContext)

    if(!context) throw new Error("useProdudcts must be used  within an ProductsProvider")
    return context
}