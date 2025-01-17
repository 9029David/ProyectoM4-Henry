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
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: string
}

export const ButtonBase = ({
    name,
    variant = "primary",
    href,
    isLoading,
    onClick
}: ButtonBaseProps) => {
    const variantStyles = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-blue-50 hover:bg-blue-100 text-[#3483fa]",
        terciary: "bg-green-500 hover:bg-green-600 text-white",
    }

    const ButtonClassName = clsx(
        "px-4 py-2 rounded-lg border",
        variantStyles[variant],
        isLoading ? "opacity-50 cursor-not-allowed" : ""
    )

    const Action = href ? <Link href={href}>{name}</Link> : name

    return (
        <button 
            onClick={onClick}
            disabled={isLoading}
            className={`${ButtonClassName} font-medium`}
        >
            {isLoading ?  <Spinner/> : Action}
        </button>
    )
}
