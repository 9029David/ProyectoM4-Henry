import { Route } from "@/routes/routes";
import { Card } from "../shared/components/Card.component";

export const benefitsData: Card[] = [
    {
        id: 1, 
        title: "Free shipping",
        image: { 
            src: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg", 
            alt: "logo shipping",
        },
        description: "Benefit for being your first purchase.",
        button: {
            name: "Show products",
            route: Route.HOME
        }
    },
    {
        id: 2, 
        title: "Sign in",
        image: { 
            src: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg", 
            alt: "logo account",
        },
        description: "Enjoy offers and buy without limits.",
        button: {
            name: "Login to your account",
            route: Route.LOGIN
        }
    },
    {
        id: 3, 
        title: "Payment methods",
        image: { 
            src: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg", 
            alt: "logo payment",
        },
        description: "Pay quickly and securely.",
        button: {
            name: "Payment methods",
            route: Route.HOME
        }
    },
    {
        id: 4, 
        title: "Our categories",
        image: { 
            src: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/categories.svg", 
            alt: "logo categories",
        },
        description: "Find cell phones, tablets, notebooks and more.",
        button: {
            name: "Go to Categories",
            route: Route.HOME
        }
    },
]