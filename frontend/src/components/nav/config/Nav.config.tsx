import { dDashboard, dHome, dLanding, dLogout, dUser } from "../components/icons/default/dValues";
import {IconDefault as IconDashboard} from "../components/icons/default/IconDefault";
import {IconDefault as IconHome} from "../components/icons/default/IconDefault";
import {IconDefault as IconLanding} from "../components/icons/default/IconDefault";
import {IconDefault as IconUser} from "../components/icons/default/IconDefault";
import {IconDefault as IconLogout} from "../components/icons/default/IconDefault";
import IconCart from "../components/icons/IconCart";


import { INav } from "../interface/INav";

export const NavBottomConfig: INav[] = [
    { 
        id: 1, 
        href: "/store", 
        title: "store", 
        isPrivate: false,
        icon: <IconLanding dimention={dLanding}/>,
        hiddenToPrivate: false
    },
    { 
        id: 2, 
        href: "/home", 
        title: "home", 
        isPrivate: false,
        icon: <IconHome dimention={dHome}/>,
        hiddenToPrivate: false
    },
    { 
        id: 3,
        href: "/dashboard", 
        title: "dashboard", 
        isPrivate: true,
        icon: <IconDashboard dimention={dDashboard}/>,
        hiddenToPrivate: false
    },
]

export const NavTopConfig: INav[] = [
    {
        id: 1,
        href: "/cart", 
        title: "cart", 
        isPrivate: true,
        icon: <IconCart/>,
        hiddenToPrivate: false
    },
    {
        id: 2,
        href: "/dashboard",
        title: "profile",
        isPrivate: true,
        icon: <IconUser dimention={dUser}/>,
        hiddenToPrivate: false
    },
    {
        id: 3,
        title: "logout",
        href: "",
        isPrivate: true,
        icon: <IconLogout dimention={dLogout}/>,
        hiddenToPrivate: false
    },
    {
        id: 4,
        href: "/login",
        title: "login",
        isPrivate: false,
        icon: <IconUser dimention={dUser}/>,
        hiddenToPrivate: true
    }
]























