"use client"

import { useCart } from "./context/Cart.context"
import Card from "./components/Cart.component"
import Swal from "sweetalert2"

import axios from "axios"
import { useAuth } from "../(auth)/shared/context/Auth.context"
import { useRouter } from "next/navigation"
import BtnCart from "./components/Cart.btn"
import { NEXT_PUBLIC_API_URL } from "../shared/helpers/getEnvs"

export default function Cart() {
    const {products, emptyCart} = useCart()
    const {token, user} = useAuth()
    const router = useRouter()

    const handlerEmptyCart = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                emptyCart()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
          });
    }

    const handlerCheckout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .post(`${NEXT_PUBLIC_API_URL}/orders`, 
                        {
                            userId: user?.id,
                            products: products.map(product => product.id)
                        },
                        {
                        headers: {
                            authorization: token
                        }
                    })
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        emptyCart()
                        router.push("/dashboard")
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })           
            }
          });
    }

    return (
            <div className="text-gray-900 bg-[#ECE7E7] flex gap-8 my-8">
                <div className="w-[70%] min-h-[100px]">
                    {products.length ? ( 
                        <div>
                            <div className="bg-white rounded-lg shadow-gray-300 shadow-md">
                                {products.map((product) => (
                                    <Card product={product}/>
                                ))}
                            </div>

                            <div className="flex justify-end gap-4">
                                <BtnCart
                                    onClick={handlerEmptyCart} 
                                    name="Clear cart"
                                />
                                <BtnCart 
                                    onClick={handlerCheckout}
                                    name="Checkout"
                                />
                            </div>
                        </div>
                        
                    ): ( <span>No hay productos en el carrito</span> )}
                </div>
                <div className="w-[30%] relative border border-green-500">
                    <div className="bg-white rounded-lg shadow-gray-300 shadow-md h-36 sticky top-8 right-0">
                        aside
                    </div>
                </div>
            </div>
    )
}


