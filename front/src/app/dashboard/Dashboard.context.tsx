"use client"

import { IOrder } from "@/app/shared/interfaces/user/IOrder"
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../(auth)/shared/context/Auth.context"
import axios from "axios"
import Swal from "sweetalert2"
import { NEXT_PUBLIC_API_URL } from "../shared/config/getEnvs"


interface DashboardContextInterface {
    orders: IOrder[]
    isLoading: boolean
    error: string | undefined
}

const OrderContext = createContext<DashboardContextInterface>({
    orders: [],
    isLoading: true,
    error: undefined,
})

export const OrderProvider = ({children}: {children: React.ReactNode}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | undefined>()
    const [orders, setOrders] = useState<IOrder[]>([])
    const { token } = useAuth()


    useEffect(() => {
        if (token) {
            axios.get(`${NEXT_PUBLIC_API_URL}/users/orders`, {
                headers: {
                    authorization: token,
                },
            })
            .then((res) => {
                setOrders(res.data.reverse());
            })
            .catch((error) => {
                Swal.fire(
                    "Error al obtener las órdenes del usuario",
                    error.message || "",
                    "error"
                );
                setError(error)
            })
            .finally(() => {
                setIsLoading(false); 
            });
        }
      }, [token]);
 
    
    const value = {
        orders,
        isLoading,
        error
    }

   return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
   )
        
}

export const useOrder = () => {
    const context = useContext(OrderContext)
    // chequeo si puedo usar el useContext en esa parte de la aplicacion
    if(!context) throw new Error("useOrder must be used  within an AuthProvider")
    return context
}
