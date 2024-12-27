import BtnPrimaryComponent from "@/components/shared/components/buttons/BtnPrimary.component"
import { ProductInterface } from "../Product.interface"

export const CardStoreComponent = ({product} : {product: ProductInterface}) => {
    const {name, image, price, description} = product
    return (
        <>
            <img className="w-full h-64 object-contain" src={image} alt={name} />
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{name}</h3>
            <p className="text-blue-600 font-bold mt-2">${price}</p>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
            <BtnPrimaryComponent name="Agregar al carrito"/>
        </>
    )
}