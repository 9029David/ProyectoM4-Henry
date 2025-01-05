"use client"

import { getAlert, Fire } from "../../shared/components/FireAlert";
import { IProduct } from "../../shared/interfaces/product/IProduct";
import { useCart } from "../Cart.context";

/**
 * Interfaz que definirá las propiedades que recibe el contenedor dentro del item del carrito.
 * 
 * @property { string } className - Clases de Tailwind CSS
 * @property { React.CSSProperties } [style] - Estilos opcionales
 * @property { React.ReactNode } [children] - Hijo/s opcionales
 */

export interface IComponentProps {
    className: string
    style?: React.CSSProperties 
    children?: React.ReactNode 
}

/**
 * Genera la configuración de los elementos para un producto en el carrito 
 * 
 * @param product 
 * @returns Array de configuraciones para renderizar cada item del producto en el carrito.
 */

export const generateCartItemConfig = (product: IProduct): IComponentProps[] => {
    const { id, name, image, price, stock } = product
    const { removeProductFromCart, countProducts } = useCart()
    
    return [
        {
            className: "col-span-2 w-24 h-24 bg-contain bg-no-repeat bg-center rounded-lg",
            style: { backgroundImage: `url(${image})` },
        },
        {
            className: "col-span-5",
            children: (
                <h2 className="text-lg font-semibold truncate max-w-[250px]">
                {name}
                </h2>
            ),
        },
        {
            className: "col-span-2",
            children: (
                <span className="text-gray-500 text-center">{countProducts(id)}</span>
            ),
        },
        {
            className: "col-span-2",
            children: <span className="text-xl font-bold">${price}</span>,
        },
        {
            className: "col-span-12 text-right",
            children: (
                <button
                onClick={() => {
                    getAlert("Delete", () => {
                        Fire("Deleted!", "Your file has been deleted.");
                        removeProductFromCart(product.id);
                    })
                }}
                className="text-red-600 hover:text-red-800 bg-none px-4 py-2 hover:bg-red-100 my-2 rounded-md"
                >
                    Eliminar
                </button>
            ),
        },
    ];
}