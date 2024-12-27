"use client"

import Spinner from "@/components/shared/components/buttons/Spinner.component"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const BtnCreateNewAccount = ({
    name, 
    href,
    delay = 200
}: {
    name: string, 
    href: string,
    delay?: number
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handlerOnClick = () => {
        setIsLoading(true)
        setTimeout(() => {
            router.push(href)
        }, delay)
    }
    
    const disabledClass = isLoading ? "opacity-50 cursor-not-allowed" : ""

    return (
        <button 
            onClick={handlerOnClick}
            disabled={isLoading}
            aria-busy={isLoading}
            className={`btn-terciary ${disabledClass}`}
        >
            {isLoading ? <Spinner/> : name}
        </button>
    )
}

export default BtnCreateNewAccount

