import { IUser } from "@/app/shared/interfaces/user/IUser"
import Image from "next/image"

export default function Card ({user}: {user: IUser}) {
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