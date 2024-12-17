"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "./Navbar"

export default function ConditionalNavbar ({children}: {children: React.ReactNode}) {
    const pathname = usePathname()
    const reponse = ["/auth/login", "/auth/signup", "/"].includes(pathname)
    return (
        <>
            {!reponse && <Navbar />}
            <main>{children}</main>
        </>
    )
}