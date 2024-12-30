"use client"

import { useEffect, useState } from "react"
import { useAuth } from "../(auth)/shared/context/Auth.context"
import usePrivate from "../(auth)/shared/hooks/usePrivate.hook"
import Card from "./Card.component"
import axios from "axios"

import Swal from "sweetalert2"
import { NEXT_PUBLIC_API_URL } from "../shared/helpers/getEnvs"


export interface OrderInterface {
    id: number
    status: string
    date: Date
}

export default function Dashboard() {
    usePrivate()
    const { user, token } = useAuth()
    const [userOrders, setUserOrders] = useState([].reverse())

    
    useEffect(() => {
        token && 
            axios
                .get(`${NEXT_PUBLIC_API_URL}/users/orders`, {
                    headers : {
                        authorization: token
                    },
                }).then((res) => {
                    setUserOrders(res.data)
                }).catch((error) => {
                    Swal.fire("Error al obtener las ordenas del usuario", "", "error")
                })
    }, [token])

    return (
        <div className="bg-[#ECE7E7] mx-auto p-4 h-[100%] text-gray-900">
            <div className="mx-auto w-3/5">
                <div className="bg-gray-100 p-4 shadow rounded-lg flex flex-col">
                    {user ? <Card user={user}/> : ""}
                </div>

                <hr className="my-4"/>

                <div className="bg-gray-100 p-4 shadow rounded-lg flex flex-col">
                    {
                        userOrders.length ? (
                            <div>
                                {userOrders.map((order: OrderInterface) => (
                                    <div key={order.id}>
                                        {order.id}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>
                                Yo dont't have any order yet. click para ir a comprar
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}