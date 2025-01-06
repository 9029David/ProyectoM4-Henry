import { IProduct } from "@/app/shared/interfaces/product/IProduct";
import { getAlert, Fire } from "@/app/shared/components/FireAlert";
import { useCart } from "../Cart.context";

/**
 * Interfaz que definirá las propiedades que recibe el contenedor principal del carrito.
 * 
 * @property { string } [className] - CLases de Tailwind CSS
 * @property { IComponentProps[] } divConfig - Configuración de los items del carrito
 */

export interface ICartItemProps {
    className?: string
    product: IProduct
}

/**
 * Componente "CartItem" encargado de renderiza un contendor para un item en el carrito.
 * 
 * @param { ICartItemProps } props - Propiedades que define el estilo y comportamiento del componente.
 * @param { string } [props.className] - Clases CSS para personalizar el contenedor principal
 * @param { IComponentProps[] } props.divConfig - Configuración del item del carrito
 * @returns { JSX.element } Retorna un contendor con el item del carrito
 */

export default function CartItem({ 
    product,
    className = "p-4 bg-white rounded-lg shadow-md"  
}: ICartItemProps) {
    const { countProducts, removeProductFromCart } = useCart()
    const {id, image, name, price} = product
    return (
        <div className={className}>
            <div className="grid grid-cols-12 gap-4 items-center">
                    <div 
                        className="col-span-2 w-24 h-24 bg-contain bg-no-repeat bg-center rounded-lg"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    <div className="col-span-5">
                        <h2 className="text-lg font-semibold truncate max-w-[250px]">
                            {name}
                        </h2>
                    </div>
                    <div className="col-span-2">
                        <span className="text-gray-500 text-center">
                            {countProducts(id)}
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span className="text-xl font-bold">${price}</span>
                    </div>
                    <div className="col-span-12 text-right">
                        <button
                            onClick={() => {
                                getAlert("Delete", () => {
                                    Fire("Deleted!");
                                    removeProductFromCart(product.id);
                                })
                            }}
                            className="text-red-600 hover:text-red-800 bg-none px-4 py-2 hover:bg-red-100 my-2 rounded-md"
                        >
                            Delete
                        </button>
                    </div>
                
            </div>
        </div>
    );
}