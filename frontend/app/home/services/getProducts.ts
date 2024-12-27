import { productsData } from "@/shared/lib/productsData";
import { IProduct } from "@/shared/interfaces/product/IProduct";
import axios from "axios";

export const getProducts = async (): Promise<IProduct[]> => {
    const response = await axios.get("http://localhost:8080/products")
    return response.data
}   