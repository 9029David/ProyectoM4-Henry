"use client"

import { INavItemProps, NavTopConfig } from "../Nav.config";
import { NavItemProps } from "./NavItemProps";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/(auth)/shared/context/Auth.context";
import { Fire, getAlert } from "../../FireAlert";
import { useFilterNavItems } from "../filterNavItems";

export const NavTop = () => {
    const router = useRouter()
    const { logout } = useAuth()
    const filteredNavTopConfig = useFilterNavItems(NavTopConfig)

    const handlerLogout = async() => {
        await getAlert("logout", () => {
            logout()
            Fire("success")
            router.push(`/login`)
        })
    }

    return (
        <ul className="flex gap-4 items-center">
            { 
                filteredNavTopConfig.map((item: INavItemProps) => (          
                    <NavItemProps key={item.id} item={{ ...item, onClick: item.title === "logout" ? () => handlerLogout() : undefined }}/>
                )) 
            }
        </ul>
    )
}

export default NavTop

