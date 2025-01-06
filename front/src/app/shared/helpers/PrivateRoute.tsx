"use client";

import { useAuth } from "@/app/(auth)/shared/context/Auth.context";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";
import { Route } from "@/app/shared/constants/routes";

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

  const handleAuthenticatedUser = useCallback(() => {
    if (redirectRoutes.includes(pathname)) {
      const lastPath = localStorage.getItem("lastPath") || Route.LANDING;
      router.replace(lastPath);
    } else {
      localStorage.setItem("lastPath", pathname);
    }
  }, [pathname, redirectRoutes, router]);

  const handleUnauthenticatedUser = useCallback(() => {
    localStorage.removeItem("lastPath");
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      handleUnauthenticatedUser();
      return;
    } else {
      handleAuthenticatedUser();
      return;
    }
  }, [isAuthenticated, pathname, redirectRoutes, router, handleAuthenticatedUser, handleUnauthenticatedUser]);

  return children;
}