import { getProducts } from "../getProducts";

export default async function getProductById(id: number) {
    const products = await getProducts()
    const product = products.find((product) => product.id === id)
    if(!product) throw Error("Product not found")
    return product
}