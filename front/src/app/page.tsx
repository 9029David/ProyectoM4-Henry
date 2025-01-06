"use client"

import { Card } from "./shared/components/Card.component"
import SwiperComponent from "./shared/components/swiperCarousel/SwiperComponent"
import { benefitsData } from "./shared/config/benefitsData"
import ProductsComponent from "./shared/components/Products.component"
import { CardCategory } from "./shared/components/CardCategorie"
import { categories } from "./shared/config/categoriesLanding"




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