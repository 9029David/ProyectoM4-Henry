import { navConfig, NavItem } from "@/config/navConfig"
import Link from "next/link"

const Nav = () => {
    return (
     <div>
        <ul className="py-4 bg-gray-500 flex justify-evenly">
            {navConfig.map((elemento: NavItem) => {
                return (
                    <li>
                        <Link href={elemento.path}>
                            <span>{elemento.text}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
     </div>
    )
}

export default Nav