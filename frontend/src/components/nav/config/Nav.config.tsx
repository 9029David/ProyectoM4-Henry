import { dDashboard, dHome, dLanding, dLogout, dUser } from "../components/icons/default/dValues";
import {IconDefault as IconDashboard} from "../components/icons/default/IconDefault";
import {IconDefault as IconHome} from "../components/icons/default/IconDefault";
import {IconDefault as IconLanding} from "../components/icons/default/IconDefault";
import {IconDefault as IconUser} from "../components/icons/default/IconDefault";
import {IconDefault as IconLogout} from "../components/icons/default/IconDefault";
import IconCart from "../components/icons/IconCart";
import { INavItemProps } from "../interface/INavItemProps";

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
        href: "/home", 
        title: "home", 
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
        title: "profile",
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























