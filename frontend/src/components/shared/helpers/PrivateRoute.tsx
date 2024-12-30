"use client";

import { useAuth } from "@/app/(auth)/shared/context/Auth.context";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShowAlertRoute } from "./ShowAlertRoute";
import { LoadingSpinner } from "./LoadingSpinner";

interface PrivateRouteProps {
  redirectRoutes: string[];
  children: React.ReactNode;
}

export default function PrivateRoute({
    redirectRoutes,
    children,
}: PrivateRouteProps) {
    const router = useRouter();
    const pathname = usePathname();
    const { isAuthenticated } = useAuth();
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            handleUnauthenticatedUser()
            return
        } else {
            handleAuthenticatedUser()
            return
        }
        
    }, [isAuthenticated, pathname])



    const handleAuthenticatedUser = () => {
        if (redirectRoutes.includes(pathname)) {
            const lastPath = localStorage.getItem("lastPath") || "/home";
            setShouldRender(false);
            router.replace(lastPath);
        } else {
            localStorage.setItem("lastPath", pathname);
            setShouldRender(true);
        }
    };
    
    const handleUnauthenticatedUser = () => {
        localStorage.removeItem("lastPath");
        setShouldRender(true);
    };

    return children 
}