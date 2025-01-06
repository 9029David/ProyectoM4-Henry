interface envInterface {
    key: string
    defaultValue?: string
}

const getEnv = ({key, defaultValue}: envInterface) => {
    const value = process.env[key]
    if(!value && defaultValue === undefined) throw new Error(`La variable de entorno ${key} no está definida y no tiene un valor predeterminado.`)
    return value || defaultValue

}

export const API_URL = getEnv({key:'API_URL', defaultValue:'http://localhost:8080'})
export const NEXT_PUBLIC_API_URL = getEnv({key:'NEXT_PUBLIC_API_URL', defaultValue:'http://localhost:8080'})
export const NEXT_PUBLIC_ADMIN_EMAIL = getEnv({key: 'NEXT_PUBLIC_ADMIN_EMAIL', defaultValue: 'admin@gmail.com'})
export const NEXT_PUBLIC_ADMIN_PASSWORD = getEnv({key: 'NEXT_PUBLIC_ADMIN_EMAIL', defaultValue: 'admin123'})