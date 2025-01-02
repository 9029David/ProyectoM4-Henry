"use client"

import Link from "next/link"
import { INavItemProps } from "../Nav.config"
import { usePathname } from "next/navigation"

export const NavItemProps = ({ item }: { item: INavItemProps }) => {
    const pathname = usePathname()
    const { icon, title, className, href, onClick } = item
    const Content = href ? <Link href={href}>{icon}</Link> : icon

    return (
        <li 
            title={title} 
            onClick={onClick} 
            className={`${pathname === href ? 'bg-gray-100 text-blue-500' : ""} hover:bg-blue-200 rounded-full p-1 hover:opacity-75 ${className} list-none cursor-pointer`}
        >
            {Content}
        </li>
    )
}

