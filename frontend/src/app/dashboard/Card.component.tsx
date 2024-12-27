import Image from "next/image"
import { UserInterface } from "../(auth)/shared/interfaces/User.interface"

export interface CardInterface {
    name: string
    email: string
}


export default function Card ({user}: {user: UserInterface}) {
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