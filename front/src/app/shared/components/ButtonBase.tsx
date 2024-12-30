"use client"

import clsx from "clsx"
import Spinner from "./buttons/Spinner.component"
import Link from "next/link"

type ButtonVariants = "primary" | "secondary" | "terciary"

interface ButtonBaseProps {
    name: string
    variant?: ButtonVariants
    href?: string 
    isLoading?: boolean
}

export const ButtonBase = ({
    name,
    variant = "primary",
    href,
    isLoading,
}: ButtonBaseProps) => {
    const variantStyles = {
        primary: "bg-blue-600 hover:bg-blue-700",
        secondary: "text-blue-900 bg-blue-50 hover:bg-blue-100",
        terciary: "bg-green-500 hover:bg-green-600",
    }

    const ButtonClassName = clsx(
        "px-4 py-2 rounded border text-white",
        variantStyles[variant],
        isLoading ? "opacity-50 cursor-not-allowed" : ""
    )

    const Action = href ? <Link href={href}>{name}</Link> : name

    return (
        <button 
            disabled={isLoading}
            className={`${ButtonClassName}`}
        >
            {isLoading ?  <Spinner/> : Action}
        </button>
    )
}
