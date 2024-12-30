"use client"

import { Card } from "./shared/components/Card.component"
import SwiperComponent from "./shared/components/swiperCarousel/SwiperComponent"
import { benefitsData } from "./root/Root.config"

export default function page() {
    return (
        <div className="flex flex-col ">
            <div className="relative">
                <div>
                    <SwiperComponent/>
                </div>

                <div className="benefit-container flex items-center w-[100%] text-black px-6">
                    <div className="grid grid-cols-4 gap-4">
                        {benefitsData.map((benefit) => <Card key={benefit.id} data={benefit}/> )}
                    </div>
                </div>
            </div>
            
        </div>
    )
}