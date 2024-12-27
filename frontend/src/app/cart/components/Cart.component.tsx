import { ProductInterface } from "../../store/Product.interface"

export function btnDeleteProduct({product}: {product: ProductInterface}) {
    return <button  className="text-blue-600 bg-none px-4 py-2 hover:bg-blue-100 my-2">{"Eliminar"}</button>
}

export default function Card({product} : {product: ProductInterface}) {
    const { name, image, price, stock } = product

    return (
        // container card
        <div className="p-4">
            <div className="grid grid-cols-12 gap-2">
                {/* image */}
                <div className="col-span-1">
                    <div
                    className="bg-contain bg-center w-full h-full bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                    ></div>
                   
                </div>
                {/* name*/}
                <div className="col-span-6">
                    <div>
                        <h2 className="max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>
                    </div>
                </div>
                {/* stock */}
                <div className="col-span-2">
                    <button>eliminar</button>
                </div>
                {/* price */}
                <div className="col-span-3">
                    <span>{`$ ${price}`}</span>
                </div>
            </div>
        </div>
    )
}