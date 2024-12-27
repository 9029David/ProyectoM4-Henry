export interface UserInterface {
    id: number
    name: string
    email: string
    address: string
    phone: string
    role: string
    credential: {
        id: number
        password: string
    }
    orders: []

}