"use client"

import { useRouter } from "next/navigation"
import { BtnNavbar } from "./BtnNavbar";
import { useAuth } from "../../../app/(auth)/shared/context/Auth.context";
import { Fire, getAlert } from "./getAlert";
import { NavTopConfig } from "../config/Nav.config";

export const NavTop = () => {
    const {isAuthenticated, logout} = useAuth()
    const router = useRouter()

    const handlerLogout = () => {
        getAlert().then((result) => {
            if (result.isConfirmed) {
                logout()
                setTimeout(() => {
                    Fire("Session closed successfully","success")
                }, 200)
                router.push("/login")
            }
        });
    }

    const filteredNavTopConfig = isAuthenticated
    ? NavTopConfig.filter(element => !element.hiddenToPrivate)
    : NavTopConfig.filter(element => !element.isPrivate);

    return (
        <ul className="flex gap-4 items-center">
            { 
                filteredNavTopConfig.map((element) => (          
                    <BtnNavbar key={element.title} element={{...element, onClick: element.title === "logout" ? handlerLogout : null}}/>
                )) 
            }
        </ul>
    )
    

        

}

export default NavTop

