import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)

                if(response.status !== 200) throw new Error("Error al cargar los productos. Intenta nuevamente más tarde.")
                    
                setData(response.data)
            } catch (error) {
                setError(
                    error instanceof Error ? error.message : "Error interno del servidor"
                )
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { data, loading, error }
} 