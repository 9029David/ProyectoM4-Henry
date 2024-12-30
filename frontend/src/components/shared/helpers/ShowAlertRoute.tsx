import { Mixin } from "@/app/(auth)/shared/components/Form.mixin"

export const ShowAlertRoute = (pathname: string) => {
    const message = pathname === "/register" ? "Ya se encuentra Registrado" : "Ya se encuentra logueado"
    return (
        setTimeout(() => {
            Mixin.fire(message, "", "info")
        }, 1500)
    )
}