"use client";

import { useAuth } from "@/app/(auth)/shared/context/Auth.context";
import { AuthRequiredComponent } from "../components/AuthRequired.component";

const ProtectedRoute = ({ children, title }: { children: React.ReactNode; title?: string }) => {
    const { isAuthenticated } = useAuth();

    return !isAuthenticated ? <AuthRequiredComponent title={title || "Please log in to access this page"} /> : children
};

export default ProtectedRoute;