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
        <div className="benefit-container-card flex flex-col justify-center items-center bg-white rounded-lg p-2">
            <h1>{title}</h1>
            <div>
                <img src={image.src} alt={image.alt} width={100} height={100}/>
            </div>
            <span className="text-center line-clamp-1">{description}</span>
            <ButtonBase name={button.name} href={button.route} variant="secondary"/>
        </div>
    )
}