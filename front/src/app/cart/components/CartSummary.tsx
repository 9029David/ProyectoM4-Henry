"use client"

import axios from "axios";
import { getAlert, Fire } from "../../shared/components/FireAlert";
import { NEXT_PUBLIC_API_URL } from "../../shared/config/getEnvs";
import { useRouter } from "next/navigation";
import { useAuth } from "../../(auth)/shared/context/Auth.context";
import { useCart } from "../Cart.context";
import { ButtonBase } from "../../shared/components/ButtonBase";
import { Route } from "@/app/shared/constants/routes";


export default function CartSummary () {
    const { products, emptyCart } = useCart()
    const { token, user } = useAuth()
    const router = useRouter()

    const totalPrice = products.reduce((total, product) => total + product.price, 0)


    const handlerEmptyCart = () => {
        getAlert("Clear cart", () => {
            emptyCart()
            Fire("Deleted!", "Your file has been deleted.")
        })
    }

    const handlerCheckout = () => {
        getAlert("Checkout", () => {
            axios
                .post(`${NEXT_PUBLIC_API_URL}/orders`, 
                    {
                        userId: user?.id,
                        products: products.map(product => product.id)
                    },
                    {
                        headers: { authorization: token }
                    }
                )
                .then(res => {
                    Fire("Deleted!", "Your file has been deleted.")
                    emptyCart()
                    router.push(Route.DASHBOARD)
                })
                .catch(error => {
                    Fire("Deleted!", "Your file has been deleted.")
                })           
        });
    }

    
    return (
        <div className="bg-white rounded-lg shadow-gray-300 shadow-md h-auto sticky top-8 right-0 p-4">
            <h2 className="text-lg font-semibold">Cart Summary</h2>
            <hr className="my-2"/>
            <div className="flex justify-between mb-2">
                <span className="font-medium">Products:</span>
                <span>{products.length}</span>
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-end gap-4 mt-4">
                <ButtonBase name="Clear cart" onClick={handlerEmptyCart} />
                <ButtonBase name="Checkout" onClick={handlerCheckout} />
            </div>
        </div>
    )
} 