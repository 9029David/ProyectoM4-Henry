import { Fire, getAlert } from "../FireAlert"


export const handlerLogout = async(router: any, route: string, logout: () => void,) => {
    const result = await getAlert("logout", () => {
        logout()
        Fire("Session closed successfully","success")
        router.push(`/${route}`)
    })
}