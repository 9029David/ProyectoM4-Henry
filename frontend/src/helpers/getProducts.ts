import productsData from "@/config/productsData"
import { IProduct } from "@/interfaces/product/IProduct";

export const getProducts = async (): Promise<IProduct[]> => {
    return productsData;
}