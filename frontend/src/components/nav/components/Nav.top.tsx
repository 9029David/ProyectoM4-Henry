"use client"

import { NavTopConfig } from "../config/Nav.config";
import { NavItemProps } from "./NavItemProps";
import { INavItemProps } from "../interface/INavItemProps";
import { filterNavItems } from "../utils/filterNavItems";
import { handlerLogout } from "../utils/handlerLogout";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/(auth)/shared/context/Auth.context";

export const NavTop = () => {
    const router = useRouter()
    const { logout } = useAuth()

    const filteredNavTopConfig = filterNavItems(NavTopConfig)

    return (
        <ul className="flex gap-4 items-center">
            { 
                filteredNavTopConfig.map((element: INavItemProps) => (          
                    <NavItemProps key={element.id} element={{ ...element, onClick: element.title === "logout" ? () => handlerLogout(router, "login", logout) : undefined }}/>
                )) 
            }
        </ul>
    )
}

export default NavTop

