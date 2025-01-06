import Image from "next/image"
import { ButtonBase } from "./ButtonBase"

type Image = {
    src: string,
    alt: string
}

type Button = {
    name: string,
    route: string,
}

export interface Card {
    id: number,
    title: string,
    image: Image,
    description: string,
    button: Button
}

export const Card = ({data} : {data: Card}) => {
    const {title, image, description, button} = data

    return (
        <div className="hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col justify-between items-center bg-white rounded-lg p-4 shadow-md h-[300px] w-full space-y-4">
                <h1 className="text-lg font-semibold text-center line-clamp-2 h-[48px]">{title}</h1>
                <div className="w-32 h-32 overflow-hidden">
                    <Image className="w-full h-full object-contain" src={image.src} alt={image.alt} width={100} height={100}/>
                </div>
                <span className="text-sm text-gray-600 text-center line-clamp-2 h-[56px]">{description}</span>
                <div className="h-[40px] flex items-center">
                    <ButtonBase name={button.name} href={button.route} variant="secondary"/>
                </div>
            </div>
        </div>
    )
}