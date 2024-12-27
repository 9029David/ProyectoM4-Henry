"use client"

import { all } from "axios"
import { useState } from "react"



export const CarouselComponent = ({images}: {images: string[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlerBack = () => {
        setCurrentIndex((index) => index === 0 ? images.length - 1 : index - 1)
    }

    const handlerNext = () => {
        setCurrentIndex((index) => index === images.length - 1 ? 0 : index + 1)
    }

    return (
        <div className="relative w-[1100px] max-w-xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ 
                    transform: `translate#d(-${currentIndex * 100}%, 0px, 0px)`,
                    transition: "all 0.5s ease"
                }}
            >
               {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-screen flex-shrink-0 object-cover"
                    />
                ))} 
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
                {images.map((_, index) => (
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
    )
}

export default CarouselComponent