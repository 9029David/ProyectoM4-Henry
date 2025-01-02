"use client"

import { useCart } from "./Cart.context"
import Card from "./Cart.component"
import Swal from "sweetalert2"

import axios from "axios"
import { useAuth } from "../(auth)/shared/context/Auth.context"
import { useRouter } from "next/navigation"
import { NEXT_PUBLIC_API_URL } from "../shared/helpers/getEnvs"
import { ButtonBase } from "../shared/components/ButtonBase"

export default function Cart() {
    const {products, emptyCart} = useCart()
    const {token, user} = useAuth()
    const router = useRouter()

    const totalPrice = products.reduce((total, product) => total + product.price, 0)

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
            // <div className="text-gray-900 bg-[#ECE7E7] flex gap-8 my-8">
            //     <div className="w-[70%] min-h-[100px]">
            //         {products.length ? ( 
            //             <div>
            //                 <div className="bg-white rounded-lg shadow-gray-300 shadow-md">
            //                     {products.map((product) => (
            //                         <Card product={product}/>
            //                     ))}
            //                 </div>

            //                 <div className="flex justify-end gap-4">
            //                     <ButtonBase name="Clear cart" onClick={handlerEmptyCart}/>
            //                     <ButtonBase name="Checkeout" onClick={handlerCheckout}/>
            //                 </div>
            //             </div>
                        
            //         ): ( <span>No hay productos en el carrito</span> )}
            //     </div>
            //     <div className="w-[30%] relative border border-green-500">
            //         <div className="bg-white rounded-lg shadow-gray-300 shadow-md h-36 sticky top-8 right-0">
            //             aside
            //         </div>
            //     </div>
            // </div>
            <div className="text-gray-900 bg-[#ECE7E7] flex gap-8 my-8">
                {/* Sección de productos */}
                <div className="w-[70%] min-h-[100px]">
                    {products.length ? (
                        <div>
                            <div className="bg-white rounded-lg shadow-gray-300 shadow-md">
                                {products.map((product) => (
                                    <Card key={product.id} product={product} />
                                ))}
                            </div>

                            <div className="flex justify-end gap-4 mt-4">
                                <ButtonBase name="Clear cart" onClick={handlerEmptyCart} />
                                <ButtonBase name="Checkout" onClick={handlerCheckout} />
                            </div>
                        </div>
                    ) : (
                        <span>No hay productos en el carrito</span>
                    )}
                </div>

                {/* Sección de resumen */}
                <div className="w-[30%] relative">
                    <div className="bg-white rounded-lg shadow-gray-300 shadow-md h-auto sticky top-8 right-0 p-4">
                        <h2 className="text-lg font-semibold mb-4">Resumen del carrito</h2>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Productos:</span>
                            <span>{products.length}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Total:</span>
                            <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}


