import { dDashboard, dHome, dLanding, dLogout, dUser } from "../icons/default/dValues";
import {IconDefault as IconDashboard} from "../icons/default/IconDefault";
import {IconDefault as IconHome} from "../icons/default/IconDefault";
import {IconDefault as IconLanding} from "../icons/default/IconDefault";
import {IconDefault as IconUser} from "../icons/default/IconDefault";
import {IconDefault as IconLogout} from "../icons/default/IconDefault";
import IconCart from "../icons/IconCart";

export interface INavItemProps {
    id: number,
    icon?: React.ReactNode
    title: string
    className?: string
    href?: string
    onClick?: () => void
    isPrivate?: boolean
    isPublic?: boolean
}

export const NavBottomConfig: INavItemProps[] = [
    { 
        id: 1, 
        href: "/store", 
        title: "store", 
        icon: <IconLanding dimention={dLanding}/>,
        isPrivate: true,
        isPublic: true
    },
    { 
        id: 2, 
        href: "/", 
        title: "landing", 
        icon: <IconHome dimention={dHome}/>,
        isPrivate: true,
        isPublic: true
    },
    { 
        id: 3,
        href: "/dashboard", 
        title: "dashboard", 
        icon: <IconDashboard dimention={dDashboard}/>,
        isPrivate: true,
        isPublic: false
    },
]

export const NavTopConfig: INavItemProps[] = [
    {
        id: 1,
        href: "/cart", 
        title: "cart", 
        icon: <IconCart/>,
        isPrivate: true,
        isPublic: false
    },
    {
        id: 2,
        href: "/dashboard",
        title: "/dashboard",
        icon: <IconUser dimention={dUser}/>,
        isPrivate: true,
        isPublic: false
    },
    {
        id: 3,
        icon: <IconLogout dimention={dLogout}/>,
        title: "logout",
        isPrivate: true,
        isPublic: false
    },
    {
        id: 4,
        href: "/login",
        title: "login",
        icon: <IconUser dimention={dUser}/>,
        isPrivate: false,
        isPublic: true
    }
]























