import { Mixin } from "@/app/shared/components/MixinAlert"

export const ShowAlertRoute = (pathname: string) => {
    const message = pathname === "/register" ? "Ya se encuentra Registrado" : "Ya se encuentra logueado"
    return (
        setTimeout(() => {
            Mixin.fire(message, "", "info")
        }, 1500)
    )
}