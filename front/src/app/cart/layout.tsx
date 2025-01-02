"use client"

import { useAuth } from "../(auth)/shared/context/Auth.context";
import { ButtonBase } from "../shared/components/ButtonBase";
import NavDefault from "../shared/components/nav/Nav.default";

export default function CartLayout({children}: {children: React.ReactNode}) {
    const { isAuthenticated } = useAuth()

    return (
        isAuthenticated ? 
        children : 
        <div className="w-full h-screen bg-white flex justify-center items-center">
            <div className="flex flex-col justify-center gap-2  max-w-xs rounded-lg bg-white">
                <h1 className="text-center text-xl text-gray-900 p-2 font-semibold">¡Hola! Para agregar al carrito, ingresá a tu cuenta</h1>
                <ButtonBase name="Crear cuenta" href={"/register"}/>
                <ButtonBase name="Ingresar" href={"/login"} variant="secondary"/>
            </div>
        </div>
    );
}