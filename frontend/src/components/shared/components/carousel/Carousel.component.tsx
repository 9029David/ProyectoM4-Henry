"use client"
import { useState } from "react"



interface IImage { id: number, name: string}


interface IProps {
    image: IImage
    currentIndex: number
}


const imagesMuestra: IImage[] = [
    {id: 1, name: "https://http2.mlstatic.com/D_NQ_641725-MLA81582377215_122024-OO.webp"},
    {id: 2, name: "https://http2.mlstatic.com/D_NQ_641725-MLA81582377215_122024-OO.webp"},
    {id: 3, name: "https://http2.mlstatic.com/D_NQ_641725-MLA81582377215_122024-OO.webp"},
    {id: 4, name: "https://http2.mlstatic.com/D_NQ_641725-MLA81582377215_122024-OO.webp"},
    {id: 5, name: "https://http2.mlstatic.com/D_NQ_641725-MLA81582377215_122024-OO.webp"}
]

const CarouselCard = ({props} : {props: IProps}) => {
    const {currentIndex, image} = props
    return (
        <div
            className="flex transition-transform duration-500"
            style={{ 
                transform: `translate#d(-${currentIndex * 100}%, 0px, 0px)`,
                transition: "all 0.5s ease"
            }}
        >
            <img src={image.name} alt="image" className="w-screen flex-shrink-0 object-cover"/>
        </div>
    )
}




export const CarouselComponent = ({images} : {images: IImage[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlerBack = () => {
        setCurrentIndex((index) => index === 0 ? images.length - 1 : index - 1)
    }

    const handlerNext = () => {
        setCurrentIndex((index) => index === images.length - 1 ? 0 : index + 1)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    images.map((image: IImage) => (
                        <CarouselCard key={image.id} props={{ image, currentIndex }}/>
                    )) 
                }
            </div>
            <button
                onClick={handlerBack}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
            >
                Back
            </button>

            <button
                onClick={handlerNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
            >
                Next
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {imagesMuestra.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex ? "bg-white" : "bg-gray-500"
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarouselComponent