"use client"

import { IProduct } from "@/app/shared/interfaces/product/IProduct"
import { useProducts } from "@/app/shared/context/useProducts"
import { NEXT_PUBLIC_API_URL } from "@/app/shared/helpers/getEnvs"
import ProductDetail from "./ProductDetail"
import axios from "axios"

import { useEffect, useState } from "react"
import ProductSkeleton from "./ProductSkeleton"


export default function ProductPage({params} : {params: Promise<{slug : string}>}) {
    const [product, setProduct] = useState<IProduct | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const { getProductById } = useProducts()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { slug } = await params
                const productFinded = getProductById(Number(slug))

                if(productFinded) {
                    setProduct(productFinded)
                } else {
                    const { data } = await axios.get(`${NEXT_PUBLIC_API_URL}/products/${slug}`)
                    setProduct(data)
                }
                
            } catch (error) {
                setError(
                    error instanceof Error ? error.message : "Error interno del servidor"
                )
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [params, getProductById])

    if (loading) return <ProductSkeleton/>
    if (error) return <p>Error: {error}</p>;

    return  product ? <ProductDetail product={product} /> : <p>Producto no encontrado</p>;
}

