"use client"

import { INavItemProps, NavTopConfig } from "../Nav.config";
import { NavItemProps } from "./NavItemProps";
import { filterNavItems } from "../filterNavItems";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/(auth)/shared/context/Auth.context";
import { handlerLogout } from "../handlerLogout";

export const NavTop = () => {
    const router = useRouter()
    const { logout } = useAuth()
    const filteredNavTopConfig = filterNavItems(NavTopConfig)

    return (
        <ul className="flex gap-4 items-center">
            { 
                filteredNavTopConfig.map((item: INavItemProps) => (          
                    <NavItemProps key={item.id} item={{ ...item, onClick: item.title === "logout" ? () => handlerLogout(router, "login", logout) : undefined }}/>
                )) 
            }
        </ul>
    )
}

export default NavTop

