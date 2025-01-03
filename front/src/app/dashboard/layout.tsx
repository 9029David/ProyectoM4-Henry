"use client"

import { useAuth } from "../(auth)/shared/context/Auth.context";
import { AuthRequiredComponent } from "../shared/components/AuthRequired.component";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    const { isAuthenticated } = useAuth()

    return (
        isAuthenticated ? 
        children : 
        <AuthRequiredComponent title="Hello! To view your dashboard, please log in to your account"/>
    );
}