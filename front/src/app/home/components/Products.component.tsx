"use client"

import { ButtonBase } from "@/app/shared/components/ButtonBase"
import { IProduct } from "@/app/shared/context/IProduct"
import { useProducts } from "@/app/shared/context/useProducts"
import Link from "next/link"

export const CardProductComponent = ({product} : {product: IProduct}) => {
    const {name, image, price} = product
    return (
        <>
            <img className="w-full h-64 object-contain mb-4 rounded" src={image} alt={name} />
            <h3 className="font-bold text-lg mb-2 line-clamp-1">{name}</h3>
            <p className="font-bold text-blue-600 mb-4">${price}</p>
            <ButtonBase name="Comprar Ahora"/>
        </>
    )
}

export const ProductsComponent = () => {
    const { products } = useProducts()
    
    return (
        <>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Productos Recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product: IProduct) => (
                    <Link href={`/store/${product.id}`}>
                        <div
                            key={product.id}
                            className="bg-white text-gray-900 p-6 rounded-lg shadow-md text-center"
                        >
                            <CardProductComponent product={product}/>
                        
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <ButtonBase name="Store" href="/store"/> 
            </div>
            
        </>
    )
}