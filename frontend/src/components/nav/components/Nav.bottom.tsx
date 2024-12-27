"use client"

import { NavBottomConfig } from "../config/Nav.config"
import { useAuth } from "@/app/(auth)/shared/context/Auth.context"
import { BtnNavbar } from "./BtnNavbar"

export const NavBottom = () => {
    const {isAuthenticated} = useAuth()

    const filteredNavTopConfig = isAuthenticated ? 
    NavBottomConfig.filter(element => !element.hiddenToPrivate) : 
    NavBottomConfig.filter((element) => !element.isPrivate);

    return ( 
        <ul className="flex justify-around items-center max-w-[500px]  mx-auto">
            { 
                filteredNavTopConfig.map((element) => (
                    <BtnNavbar key={element.title} element={element}/> 
                ))
            }
        </ul>     
    )
}

export default NavBottom