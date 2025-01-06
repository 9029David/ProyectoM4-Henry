"use client"

import React, { useState, useContext, createContext, useEffect } from "react";
import { UserInterface } from "../interfaces/User.interface";
import axios from "axios";
import { SignupInterface } from "../../signup/Signup.interface";
import { LoginInterface } from "../../login/Login.interface";
import { NEXT_PUBLIC_ADMIN_EMAIL, NEXT_PUBLIC_ADMIN_PASSWORD, NEXT_PUBLIC_API_URL } from "@/app/shared/config/getEnvs";
import Loading from "@/app/loading";
// import { jwtDecode } from "jwt-decode";

enum Role {
    ADMIN = "admin",
    USER = "user"
}

// interface CustomJWTInterface {
//     userId: number
//     role: Role
//     iat: number
// }

interface AuthContextInterface {
    user: UserInterface | null
    signup: (registerForm: SignupInterface) => void
    login: (loginForm: LoginInterface) => void
    logout: () => void
    isAuthenticated: boolean
    token: string | null
    isLoading: boolean
    isAdmin: boolean
}

const AuthContext = createContext<AuthContextInterface>({
    user: null,
    signup: () => {},
    login: () => {},
    logout: () => {},
    isAuthenticated: false,
    isLoading: true,
    token: null,
    isAdmin: false
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<UserInterface | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAdmin, setIsAdmin] = useState<boolean>(false)


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

        setIsLoading(false);
    }, [])

    if(isLoading) return <Loading/>

    const login = async (loginForm: LoginInterface) => { 
        const { email, password } = loginForm
        
        const { data } = await axios.post(`${NEXT_PUBLIC_API_URL}/users/login`, loginForm)
        
        const isAdmin = email === NEXT_PUBLIC_ADMIN_EMAIL && password === NEXT_PUBLIC_ADMIN_PASSWORD

        const modifiedUser = {
            ...data.user,
            role: isAdmin ? Role.ADMIN : data.user.role
        }

        setUser(modifiedUser)
        setToken(data.token)
        setIsAuthenticated(true)
        setIsAdmin(modifiedUser.role === Role.ADMIN)

        localStorage.setItem("user", JSON.stringify(modifiedUser))
        localStorage.setItem("token", data.token)  
    }

    const signup = async(signupForm: SignupInterface) => {
        await axios.post(`${NEXT_PUBLIC_API_URL}/users/register`, signupForm)
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
        signup,
        login,
        logout,
        isAuthenticated,
        isLoading,
        token,
        isAdmin
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
    if(!context) throw new Error("useAuth must be used  within an AuthProvider")
    return context
}





