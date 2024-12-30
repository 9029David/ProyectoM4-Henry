"use client"

import BtnSecondaryComponent from "@/components/shared/components/buttons/BtnSecondary.component";
import SwiperComponent from "@/components/shared/components/swiperCarousel/SwiperComponent";

type Image = {
    src: string,
    alt: string
}

type Button = {
    name: string,
    route: string,
}

interface IBenefit {
    id: number,
    title: string,
    image: Image,
    description: string,
    button: Button
}

export const CardBenefit = ({benefit} : {benefit: IBenefit}) => {
    const {title, image, description, button} = benefit

    return (
        <div className="benefit-container-card flex flex-col justify-center items-center bg-white rounded-lg p-2">
            <h1>{title}</h1>
            <div>
                <img src={image.src} alt={image.alt} width={100} height={100}/>
            </div>
            <span className="text-center line-clamp-1">{description}</span>
            <BtnSecondaryComponent name={button.name} href={button.route}/>
        </div>
    )
}


const benefitsData: IBenefit[] = [
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
            route: "/store"
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
            route: "/store"
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
            route: "/store"
        }
    },
]


export default function page() {
    return (
        <div className="flex flex-col ">
            <div className="relative">
                <div>
                    <SwiperComponent/>
                </div>

                <div className="benefit-container flex items-center w-[100%] text-black px-6">
                    <div className="grid grid-cols-4 gap-4">
                        {benefitsData.map((benefit) => <CardBenefit key={benefit.id} benefit={benefit}/> )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}