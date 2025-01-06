"use client"

import { useEffect } from "react"
import { useAuth } from "../context/Auth.context"
import { usePathname, useRouter } from "next/navigation"
import { Route } from "@/app/shared/constants/routes"

export default function usePublic(redirectRoutes: string[] = [Route.LOGIN, Route.SIGNUP]) {
    const router = useRouter()
    const pathname = usePathname()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if(isAuthenticated && redirectRoutes.includes(pathname)) {
            router.push(Route.HOME)
        }
            
    }, [isAuthenticated, pathname])
}