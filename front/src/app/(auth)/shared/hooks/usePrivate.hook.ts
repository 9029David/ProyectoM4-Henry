"use client"

import { useEffect } from "react"
import { useAuth } from "../context/Auth.context"
import { useRouter } from "next/navigation"
import { Route } from "@/routes/routes"

export default function usePrivate() {
    const router = useRouter()
    const { isAuthenticated } = useAuth()
    useEffect(() => {
        !isAuthenticated && router.push(Route.HOME)
    }, [])
}