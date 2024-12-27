import { getProducts } from "@/home/services/getProducts";

export default async function getProduct(id: number) {
    const products = await getProducts()
    const response = products.find(product => product.id === id)
    if(!response) throw new Error("Product not found")
    return response
}