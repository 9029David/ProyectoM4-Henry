import { useAuth } from "@/app/(auth)/shared/context/Auth.context"
import { INavItemProps } from "./Nav.config"

export const filterNavItems = (
    navConfig: INavItemProps[],
    role?: string // public, private, admin
) => {
    const {isAuthenticated} = useAuth()

    const result = navConfig.filter((element) => {
        if(isAuthenticated) return element.isPrivate
        else return element.isPublic
    })

    return result
}