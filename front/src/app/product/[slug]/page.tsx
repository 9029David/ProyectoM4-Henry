"use client"

import { IProduct } from "@/app/shared/interfaces/product/IProduct"
import { useProducts } from "@/app/shared/context/useProducts"
import { NEXT_PUBLIC_API_URL } from "@/app/shared/config/getEnvs"
import ProductDetail from "./ProductDetail"
import axios from "axios"
import { useEffect, useState } from "react"
import ProductSkeleton from "./ProductSkeleton"
import NotFound from "@/app/shared/helpers/not-found"


export default function ProductPage({params} : {params: Promise<{slug : string}>}) {
    const [product, setProduct] = useState<IProduct | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const { getProductById } = useProducts()

    useEffect(() => {
        const fetchProduct = async () => {
            const { slug } = await params

            try {
                const productFinded = getProductById(Number(slug))

                if(productFinded) {
                    setProduct(productFinded)
                } else {
                    const { data } = await axios.get(`${NEXT_PUBLIC_API_URL}/products/${slug}`)
                    setProduct(data)
                }
                
            } catch (error) {
                setError(
                    `the product of id "${slug}" does not exist`
                )
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [params, getProductById])

    if (loading) return <ProductSkeleton/>
    if (error) return <NotFound title={error}/>

    return  product ? <ProductDetail product={product} /> : <p>Product not found</p>;
}

