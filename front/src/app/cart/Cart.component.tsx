"use client"

import { IProduct } from "@/app/shared/context/IProduct"
import { useCart } from "./Cart.context"

export function btnDeleteProduct({ product }: { product: IProduct }) {
    return (
        <button className="text-red-600 hover:text-red-800 bg-none px-4 py-2 hover:bg-red-100 my-2 rounded-md">
            Eliminar
        </button>
    )
}

export default function Card({ product }: { product: IProduct }) {
    const { name, image, price, stock } = product
    const { removeProductFromCart } = useCart()
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2 w-24 h-24 bg-contain bg-no-repeat bg-center rounded-lg" style={{ backgroundImage: `url(${image})` }}></div>

                <div className="col-span-5">
                    <h2 className="text-lg font-semibold truncate max-w-[250px]">{name}</h2>
                </div>

                <div className="col-span-2">
                    <span className="text-gray-500">Stock: {stock}</span>
                </div>

                <div className="col-span-2">
                    <span className="text-xl font-bold">${price}</span>
                </div>

                <div className="col-span-12 text-right">
                    <button onClick={() => removeProductFromCart(product.id)} className="text-red-600 hover:text-red-800 bg-none px-4 py-2 hover:bg-red-100 my-2 rounded-md">
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}