"use client"

import { Card } from "./shared/components/Card.component"
import SwiperComponent from "./shared/components/swiperCarousel/SwiperComponent"
import { benefitsData } from "./shared/config/benefitsData"
import ProductsComponent from "./shared/components/Products.component"
import { ButtonBase } from "./shared/components/ButtonBase"
import { CardCategory } from "./CardCategorie"

export interface CategoryInterface {
    id: number
    name: string
    image: string
}

export const categories: CategoryInterface[] = [
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
        <div className="flex flex-col gap-8">
            <div className="relative">
                <section className="h-[350px] ">
                    <SwiperComponent/>
                </section>

                <section className="flex items-center w-full text-gray-900 px-6 z-50 animate-fadeIn ">
                    <div className="grid-responsive mx-auto">
                        {benefitsData.map((benefit) => <Card key={benefit.id} data={benefit}/> )}
                    </div>
                </section>
            </div>
            <section className="px-6">
                <h1 className="my-5 text-3xl font-semibold text-gray-900 text-center">Categories</h1>
                <div className="grid-responsive">
                    {categories.map((category) => (
                        <CardCategory key={category.id} category={category}/>
                    ))}
                </div>
            </section>
            <section>
                <ProductsComponent/>
            </section>
        </div>
    )
}