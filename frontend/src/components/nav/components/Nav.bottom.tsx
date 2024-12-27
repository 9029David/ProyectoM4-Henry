"use client"

import { NavBottomConfig } from "../config/Nav.config"
import { NavItemProps } from "./NavItemProps"
import { INavItemProps } from "../interface/INavItemProps"
import { filterNavItems } from "../utils/filterNavItems"

export const NavBottom = () => {
    const filteredNavTopConfig = filterNavItems(NavBottomConfig)
    return ( 
        <ul className="flex justify-around items-center max-w-[500px]  mx-auto">
            { 
                filteredNavTopConfig.map((element: INavItemProps) => (
                    <NavItemProps key={element.id} element={element}/> 
                ))
            }
        </ul>     
    )
}

export default NavBottom