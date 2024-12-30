import { IUser } from "../user/IUser"

export interface ILoginSuccess {
    login: boolean
    user: IUser 
    token: string
}