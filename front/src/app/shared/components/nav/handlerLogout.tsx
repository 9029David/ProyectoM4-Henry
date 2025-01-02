import { Fire, getAlert } from "../FireAlert"


export const handlerLogout = async(router: any, route: string, logout: () => void,) => {
    const result = await getAlert()
        if (result.isConfirmed) {
            logout()
            setTimeout(() => {
                Fire("Session closed successfully","success")
            }, 1000)
            router.push(`/${route}`)
        }
}