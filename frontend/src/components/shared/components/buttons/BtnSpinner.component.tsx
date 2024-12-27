"use client"

import Spinner from "./Spinner.component"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface BtnSpinnerProps {
    name: string,
    href: string,
}

export const BtnSpinner = ({
    name, 
    href
}: BtnSpinnerProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handlerOnClick = () => {
        setIsLoading(true)
        setTimeout(() => {
            router.push(href)
        }, 200)
    }

    const baseClass = "px-4 py-2 rounded border"
    const colorClass = `text-white bg-green-500 border-green-500 hover:bg-green-600`
    const disabledClass = isLoading ? "opacity-50 cursor-not-allowed" : ""


    return (
        <button 
            onClick={handlerOnClick}
            disabled={isLoading}
            className={`${baseClass} ${colorClass} ${disabledClass}`}
        >
            {
                isLoading ?  <Spinner/> : name
            }
        </button>
    )
}

export default BtnSpinner