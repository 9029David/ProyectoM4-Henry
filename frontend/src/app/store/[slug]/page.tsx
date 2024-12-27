import getProductById from "./getProductById"
import ProductDetail from "./ProductDetail"

export default async function ProductPage({params} : {params: Promise<{slug : string}>}) {
    const {slug} = await params
    const product = await getProductById(Number(slug))
    return <ProductDetail product={product}/>
}

