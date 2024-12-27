import Link from "next/link"
import { NavTopConfig } from "../config/Nav.config"

export interface IBtnNavBarProps {
    icon: React.ReactNode
    title: string
    className?: string
    href?: string
    onClick?: any
    isPrivate?: boolean
}

export const BtnNavbar = ({
    element
}: { 
    element: IBtnNavBarProps
}) => {
    const {
        icon,
        title, 
        className,
        href,
        onClick,
        isPrivate
    } = element
    return (
        <li title={title} onClick={onClick} className={`hover:bg-blue-200 rounded-full p-1 hover:opacity-75 ${className} list-none cursor-pointer`}>
            {href ? <Link href={href}>{icon}</Link> : icon}
        </li>
    )
}

