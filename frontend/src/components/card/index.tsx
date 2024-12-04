// types
import { ICard } from "./types"

const Card: React.FC<ICard> = ({ title, description, price, img }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h1>{price}</h1>
            <p>{description ? description : "Sin descripción"}</p>
            <img src={img} alt={title} />
        </div>
    )
}

export default Card