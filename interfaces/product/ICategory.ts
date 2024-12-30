import { IProduct } from "../../components/shared/context/IProduct";


export interface ICategory {
    id: number
    name: string
    products: IProduct[];
}

