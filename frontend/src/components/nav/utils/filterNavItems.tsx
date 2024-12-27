import { useAuth } from "@/app/(auth)/shared/context/Auth.context"
import { INavItemProps } from "../interface/INavItemProps"

export const filterNavItems = (
    navConfig: INavItemProps[],
    role?: string // public, private, admin
) => {
    const {isAuthenticated} = useAuth()

    const result = navConfig.filter((element) => {
        // Logica para admin proximamente

        if(isAuthenticated) return element.isPrivate
        else return element.isPublic
    })

    return result
}