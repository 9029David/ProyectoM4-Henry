import { IComponentProps } from "../config/generateCartItemConfig"

/**
 * Interfaz que definirá las propiedades que recibe el contenedor principal del carrito.
 * 
 * @property { string } [className] - CLases de Tailwind CSS
 * @property { IComponentProps[] } divConfig - Configuración de los items del carrito
 * @property { React.ReactNode } [children] - Hijo/s opcionales
 */

export interface ICartItemProps {
    className?: string
    divConfig: IComponentProps[]
    children?: React.ReactNode
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
    divConfig,
    className = "p-4 bg-white rounded-lg shadow-md"  
}: ICartItemProps) {
    return (
        <div className={className}>
            <div className="grid grid-cols-12 gap-4 items-center">
                {divConfig.map((config, index) => (
                    <div key={index} {...config}>
                        {config.children ?? null}
                    </div>
                ))}
            </div>
        </div>
    );
}