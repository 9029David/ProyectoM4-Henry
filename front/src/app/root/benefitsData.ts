import { Card } from "../shared/components/Card.component";

export const benefitsData: Card[] = [
    {
        id: 1, 
        title: "Envío gratis",
        image: { 
            src: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg", 
            alt: "logo envio",
        },
        description: "Beneficio por ser tu primera compra.",
        button: {
            name: "Mostrar productos",
            route: "/home"
        }
    },
    {
        id: 2, 
        title: "Incia sesion",
        image: { 
            src: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg", 
            alt: "logo cuenta",
        },
        description: "Disfrutá de ofertas y comprá sin limites.",
        button: {
            name: "Ingresar a tu cuenta",
            route: "/login"
        }
    },
    {
        id: 3, 
        title: "Medios de pago",
        image: { 
            src: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg", 
            alt: "logo pago",
        },
        description: "Paga de forma rápida y segura.",
        button: {
            name: "Medios de pago",
            route: "/home"
        }
    },
    {
        id: 4, 
        title: "Nuestras categorias",
        image: { 
            src: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/categories.svg", 
            alt: "logo categorias",
        },
        description: "Encontrá celulares, tablets, notebooks y más.",
        button: {
            name: "Ir a Categorias",
            route: "/home"
        }
    },
]