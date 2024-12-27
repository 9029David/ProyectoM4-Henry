import Link from "next/link"
import { ProductInterface } from "../../store/Product.interface"
import BtnPrimaryComponent from "../../../components/shared/components/buttons/BtnPrimary.component"


export const CardProductComponent = ({product} : {product: ProductInterface}) => {
    const {name, image, price} = product
    return (
        <>
            <img className="w-full h-64 object-contain mb-4 rounded" src={image} alt={name} />
            <h3 className="font-bold text-lg mb-2 line-clamp-2">{name}</h3>
            <p className="font-bold text-blue-600 mb-4">${price}</p>
            <BtnPrimaryComponent name="Comprar Ahora"/>
        </>
    )
}

export const ProductsComponent = ({productsData} : {productsData: ProductInterface[]}) => {
    const indexInitial = 0
    const indexEnd = 3

    const productsSlice = productsData.slice(indexInitial, indexEnd)

    return (
        <>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Productos Recomendados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productsSlice.map((product: ProductInterface) => (
                    <div
                        key={product.id}
                        className="bg-white text-gray-900 p-6 rounded-lg shadow-md text-center"
                    >
                        <Link href={`/store/${product.id}`}>
                            <CardProductComponent product={product}/>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <BtnPrimaryComponent name="Go Store" href="/store"/> 
            </div>
            
        </>
    )
}