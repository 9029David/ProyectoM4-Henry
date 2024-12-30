"use client"

import { useEffect } from "react"
import { useAuth } from "../context/Auth.context"
import { usePathname, useRouter } from "next/navigation"

export default function usePublic(redirectRoutes: string[] = ["/login", "/register"]) {
    const router = useRouter()
    const pathname = usePathname()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if(isAuthenticated && redirectRoutes.includes(pathname)) {
            router.push("/home")
        }
            
    }, [isAuthenticated, pathname])
}