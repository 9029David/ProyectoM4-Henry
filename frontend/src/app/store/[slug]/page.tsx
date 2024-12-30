"use client"

import ProductDetail from "./ProductDetail"
import axios from "axios"
import { API_URL } from "@/components/shared/helpers/getEnvs"
import { useEffect, useState } from "react"
import { IProduct } from "@/components/shared/context/IProduct"
import { useProducts } from "@/components/shared/context/useProducts"

export default function ProductPage({params} : {params: Promise<{slug : string}>}) {
    const [product, setProduct] = useState<IProduct | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const { products } = useProducts()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { slug } = await params
                const productFinded = products.find(product => product.id === Number(slug))
                if(productFinded) {
                    setProduct(productFinded)
                    setLoading(false)
                }

                const { data } = await axios.get(`${API_URL}/products/${slug}`)
                setProduct(data)
            } catch (error: any) {
                console.error(error)
                setError(error.response?.data?.message || "Error al cargar el product")
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [params])

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return product ? <ProductDetail product={product} /> : <p>Producto no encontrado</p>;
}

