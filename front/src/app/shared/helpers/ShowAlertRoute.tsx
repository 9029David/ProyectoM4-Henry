import { Mixin } from "@/app/shared/components/MixinAlert"
import { Route } from "@/app/shared/constants/routes"

export const ShowAlertRoute = (pathname: string) => {
    const message = pathname === Route.SIGNUP ? "Ya se encuentra Registrado" : "Ya se encuentra logueado"
    return (
        setTimeout(() => {
            Mixin.fire(message, "", "info")
        }, 1500)
    )
}