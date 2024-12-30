"use client"

import { useAuth } from "../(auth)/shared/context/Auth.context"
import usePrivate from "../(auth)/shared/hooks/usePrivate.hook"
import Image from "next/image"

// id: number
//     name: string
//     email: string
//     address: string
//     phone: string
//     role: string
//     credential: {
//         id: number
//         password: string
//     }
//     orders: []



export interface ICardUser {
    id: number
    name: string
    email: string
    address: string
    phone: string
}

const CardUser = ({user}: {user: ICardUser}) => {
    return (
        <div className="flex items-center justify-between text-gray-900">
            <Image src={"/icon-user.png"} alt="icon-user" width={48} height={48}/>
            <div className="flex flex-col">
                <h2 className="text-base sm:text-lg font-bold">{user?.name}</h2>
                <span className="text-xl sm:text-2xl font-semibold">{user?.email}</span>
            </div>
        </div>
    )
}

export default function Dashboard() {
    usePrivate()
    const { user } = useAuth()

    return (
        <div className="bg-[#ECE7E7] mx-auto p-4 h-[100%] text-gray-900">
            <div className="mx-auto w-3/5">
                <div className="bg-gray-100 p-4 shadow rounded-lg flex flex-col">
                    {user ? <CardUser user={user}/> : ""}
                </div>
            </div>
        </div>
    )
}