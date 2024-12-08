// interfaces
import { IProduct } from "@/interfaces/product/IProduct"


const Card = ({product} : {product : IProduct}) => {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <p>{product.description ?? "Sin descripción"}</p>
        </div>
    )
}

export default Card