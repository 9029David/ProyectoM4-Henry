import { ICredential } from "../../../shared/interfaces/user/ICredential"



export interface IRegisterSuccess {
    name: string
    email: string
    address: string
    phone: string
    id: number
    role: Role.USER
    credential: ICredential // password y id
}

enum Role {
    USER = "user",
    ADMIN = "admin"
}