import BtnAddProduct from "@/app/cart/components/BtnAddProduct.component";
import Logo from "@/app/shared/components/nav/components/icons/IconTechShop";
import BtnPrimaryComponent from "@/app/shared/components/buttons/BtnPrimary.component";
import { IProduct } from "@/app/shared/context/IProduct";


export const ProductDetails = ({ product } : { product: IProduct }) => {
    return (
        <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
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
                <BtnPrimaryComponent name="Comprar Ahora" href=""/> 
                <BtnAddProduct product={product}/>
            </div>
        </div>
    )
}

export default ProductDetails