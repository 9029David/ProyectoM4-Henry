import { ICredential } from "./ICredential"
import { IOrder } from "./IOrder"


export interface IUser {
    id: number
    name: string
    email: string
    address: string
    phone: string
    role: Role.USER
    credential: ICredential
    orders: IOrder[]
}

enum Role {
    ADMIN = "admin",
    USER = "user"
}


