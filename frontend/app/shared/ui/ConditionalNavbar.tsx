"use client"

import { usePathname } from "next/navigation"

export default function ConditionalNavbar ({children}: {children: React.ReactNode}) {
    const pathname = usePathname()
    const excludePath = ["/auth/login", "/auth/signup", "/"].includes(pathname)

    if(!excludePath) return children
}