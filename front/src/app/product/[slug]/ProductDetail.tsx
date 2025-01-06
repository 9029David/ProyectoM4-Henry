import BtnAddProduct from "@/app/cart/components/BtnAddProduct"
import Logo from "@/app/shared/components/icons/IconTechShop"
import { IProduct } from "@/app/shared/interfaces/product/IProduct"
import { ButtonBase } from "@/app/shared/components/ButtonBase"
import { Route } from "@/app/shared/constants/routes"
import { getRoute } from "@/app/shared/utils/getRoute"
import Image from "next/image"


export default function ProductDetail({product} : {product: IProduct}) {
    return (
        <div>
            <section className="overflow-hidden text-gray-700 bg-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col lg:flex-row mx-auto lg:w-4/5 gap-6">
                        <div className="w-full lg:w-1/2">
                            <Image 
                                src={product?.image} 
                                alt={product?.name} 
                                className="object-contain w-full border border-gray-200 rounded lg:h-auto"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-10 lg:py-6">
                            <Logo/>
                            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                                {product?.name}
                            </h1>
                            <div className="flex mb-4"></div>
                            <p className="leading-relaxed">{product?.description}</p>
                            <div className="flex flex-col pt-8">
                                <span className="text-3xl font-medium text-gray-900 title-font pb-8">
                                    {`$ ${product?.price}`}
                                </span>
                                <div className="flex flex-col max-w-full space-y-4"> 
                                    <ButtonBase name="Buy now" href={getRoute(Route.PRODUCT, { id: product.id })}/> 
                                    <BtnAddProduct product={product}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

