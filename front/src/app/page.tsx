"use client"

import { Card } from "./shared/components/Card.component"
import SwiperComponent from "./shared/components/swiperCarousel/SwiperComponent"
import { benefitsData } from "./root/benefitsData"
import ProductsComponent from "./root/Products.component"

export const categories = [
    { id: 1, name: 'Smartphones', image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/man-1868730_640.jpg" },
    { id: 2, name: 'Laptops',  image: "https://cdn.pixabay.com/photo/2023/09/06/06/37/laptop-8236497_1280.jpg" },
    { id: 3, name: 'Tablets', image: "https://cdn.pixabay.com/photo/2019/10/15/01/11/ipad-4550306_1280.jpg" },
    { id: 4, name: 'Accessories', image: "https://cdn.pixabay.com/photo/2016/11/29/06/16/apple-1867752_1280.jpg" },
    { id: 5, name: 'Headphones', image: "https://cdn.mos.cms.futurecdn.net/3Bfmms6bf9W5pER4jAd4WH-970-80.jpg.webp" },
    { id: 6, name: 'Cameras', image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/man-1868730_640.jpg" },
    { id: 7, name: 'Monitors', image: "https://cdn.pixabay.com/photo/2017/08/06/00/49/table-2587218_1280.jpg" },
    { id: 8, name: 'Storage', image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/man-1868730_640.jpg" },
]

export default function page() {
    return (
        <div className="flex flex-col ">
            <div className="relative">
                <section>
                    <SwiperComponent/>
                </section>

                <section className="benefit-container flex items-center w-full text-black px-6 absolute top-[400px] z-50 overflow-hidden animate-fadeIn">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {benefitsData.map((benefit) => <Card key={benefit.id} data={benefit}/> )}
                    </div>
                </section>
            </div>
            <section className="mt-28 px-6">
                <h1 className="my-5 text-3xl font-semibold text-gray-900 text-center">Categories</h1>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative bg-cover bg-center rounded-lg shadow-lg h-48 flex items-end text-white overflow-hidden"
                            style={{ backgroundImage: `url(${category.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/40 rounded-lg z-10"></div>
                            <div className="relative z-20 p-4 text-center w-full">
                                <h3 className="text-lg font-bold">{category.name}</h3>
                                <button className="mt-2 bg-white text-black px-4 py-1 rounded-lg shadow hover:bg-gray-200">
                                    Explorar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <ProductsComponent/>
            </section>
        </div>
    )
}