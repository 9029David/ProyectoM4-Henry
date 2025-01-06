"use client"

import { useAuth } from "@/app/(auth)/shared/context/Auth.context"
import { INavItemProps } from "./Nav.config"

export const useFilterNavItems = (navConfig: INavItemProps[]) => {
    const {isAuthenticated} = useAuth()

    const filteredNavItems = navConfig.filter((element) => {
        if(isAuthenticated) return element.isPrivate
        else return element.isPublic
    })

    return filteredNavItems
}