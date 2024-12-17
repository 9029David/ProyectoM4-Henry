import { IProduct } from "../interfaces/product/IProduct"


export const Card = ({product} : {product : IProduct}) => {
    return (
        <div className="w-40 border-white border-2 bg-secondary">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <p>{product.description ?? "Sin descripción"}</p>
        </div>
    )
}
