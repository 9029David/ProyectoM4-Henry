import Link from "next/link"
import { INavItemProps } from "../interface/INavItemProps"

export const NavItemProps = ({ item }: { item: INavItemProps }) => {
    const { icon, title, className, href, onClick } = item
    const Content = href ? <Link href={href}>{icon}</Link> : icon

    return (
        <li title={title} onClick={onClick} className={`hover:bg-blue-200 rounded-full p-1 hover:opacity-75 ${className} list-none cursor-pointer`}>
            {Content}
        </li>
    )
}

