import { IProduct } from "../product/IProduct";
import { IUser } from "../user/IUser";

export interface IOrderSucess {
    status: Status.APPROVED,
    date: Date,
    user: IUser,
    products: IProduct[]
}

enum Status {
    APPROVED = "approved",
    DESAPROVED = "desaproved"
}