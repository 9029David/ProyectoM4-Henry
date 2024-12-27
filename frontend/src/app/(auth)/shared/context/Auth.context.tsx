"use client"

import React, { useState, useContext, createContext, useEffect } from "react";
import { UserInterface } from "../interfaces/User.interface";
import { ILogin } from "../../login/interfaces/ILogin";

import axios from "axios";
import { IRegister } from "../../register/interfaces/IRegister";
import { NEXT_PUBLIC_API_URL } from "../../../../components/shared/helpers/getEnvs";
import { useRouter } from "next/navigation";
import { Fire, getAlert } from "@/components/nav/components/getAlert";

interface AuthContextInterface {
    user: UserInterface | null
    register: (registerForm: IRegister) => void
    login: (loginForm: ILogin) => void
    logout: () => void
    isAuthenticated: boolean
    token: string | null
}

const AuthContext = createContext<AuthContextInterface>({
    user: null,
    register: (registerForm: IRegister) => {},
    login: (loginForm: ILogin) => {},
    logout: () => {},
    isAuthenticated: false,
    token: null
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<UserInterface | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
 
    useEffect(() => {
        const user = localStorage.getItem("user")
        const token = localStorage.getItem("token")
        
        if(user && token) {
            setUser(JSON.parse(user))
            setToken(token)
            setIsAuthenticated(true)
        } else {
            setUser(null)
            setToken(null)
            setIsAuthenticated(false)
        }
    }, [])

    const login = async (loginForm: ILogin) => { 
        const { data } = await axios.post(`${NEXT_PUBLIC_API_URL}/users/login`, loginForm)
        setUser(data.user)
        setToken(data.token)

        setIsAuthenticated(true)
        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("token", data.token)  
    }

    const register = async(registerForm: IRegister) => {
        await axios.post(`${NEXT_PUBLIC_API_URL}/users/register`, registerForm)
    }

    const logout = async () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        setIsAuthenticated(false)
        setToken(null)
    }

    const value = {
        user,
        register,
        login,
        logout,
        isAuthenticated,
        token
    }

   return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
   )
        
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    // chequeo si puedo usar el useContext en esa parte de la aplicacion
    // if(!context) throw new Error("useAuth must be used  within an AuthProvider")
    return context
}



