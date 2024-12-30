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
                filteredNavTopConfig.map((item: INavItemProps) => (
                    <NavItemProps key={item.id} item={item}/> 
                ))
            }
        </ul>     
    )
}

export default NavBottom