import { Metadata } from "next";
import ProtectedRoute from "../shared/helpers/ProtectedRoute";
import { OrderProvider } from "./Dashboard.context";

export const metadata: Metadata = {
    title: 'My orders'
}

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <ProtectedRoute title={"Hello! To view your dashboard, please log in to your account"}>
            <OrderProvider>  
                {children}
            </OrderProvider>
        </ProtectedRoute>
    );
}