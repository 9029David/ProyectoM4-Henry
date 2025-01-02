"use client"

import { filterNavItems } from "../filterNavItems"
import { INavItemProps, NavBottomConfig } from "../Nav.config"
import { NavItemProps } from "./NavItemProps"

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