"use client"

import { CardStoreComponent } from "@/app/home/CardStore.component"
import { useProducts } from "@/app/shared/context/useProducts"
import { IProduct } from "@/app/shared/interfaces/product/IProduct"

const getProductsByCategory = (id: number) => {
    const {filteredProducts} = useProducts()
    return filteredProducts(id)
}

export default function ViewProductByCategory({id}: {id: number}) {
    const productsByCategory =  getProductsByCategory(id)
    return (
        productsByCategory.map((product: IProduct) => <CardStoreComponent product={product}/>) 
    )
} 