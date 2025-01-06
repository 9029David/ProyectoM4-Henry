import { JSX } from "react";
import { IProduct } from "../../shared/interfaces/product/IProduct";
import CartItem from "./CartItem";

/**
 *  Interfaz que definirá las propiedades que recibe CartList.
 * 
 * @property { IProduct[] } products - Arreglo de products que se renderizaran como items de carrito
 */
interface ICartListProps {
    products: IProduct[]
}

/**
 * 
 * @param { ICartListProps } props - Propiedades que define la lista de productos
 * @param { IProduct[] } props.products - Arreglo de productos a renderizar
 * @returns { JSX.Element } Retorna un contendor con la lista de ítems del carrito
 * 
 */

export default function CartList({ products }: ICartListProps): JSX.Element {
    return (
        <div>
            <div className="flex flex-col gap-4">
                {products.map((product: IProduct) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}