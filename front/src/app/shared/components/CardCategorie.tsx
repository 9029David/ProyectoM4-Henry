
import { CategoryInterface } from "../config/categoriesLanding"
import { ButtonBase } from "./ButtonBase"

export const CardCategory = ({category}: {category: CategoryInterface}) => {

    return (
        <div
            key={category.id}
            className="relative bg-cover bg-center rounded-lg shadow-lg h-48 flex items-end text-white overflow-hidden"
            style={{ backgroundImage: `url(${category.image})` }}
        >
            <div className="absolute inset-0 bg-black/40 rounded-lg z-10"></div>
            <div className="relative z-20 p-4 text-center w-full">
                <h3 className="text-lg font-bold">{category.name}</h3>
                <ButtonBase name="Explorar" href={`/category/${category.id}`}/>
            </div>
        </div>
    ) 
}