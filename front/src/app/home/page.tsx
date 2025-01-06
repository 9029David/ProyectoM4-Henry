"use client"

import React, { useState } from "react";
import { CardStoreComponent } from "./CardStore.component";
import { useProducts } from "../shared/context/useProducts";
import { ButtonBase } from "../shared/components/ButtonBase";
import HeroSection from "./Hero.component";
import { CategorysConfig } from "../shared/config/categoriesData";


export default function Home() {
    const { filteredProducts } = useProducts()
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    return (
        <div  className="bg-gray-100 text-gray-800">
            <HeroSection 
                title="Welcome to Our Store"
                description="Discover the best products in technology, fashion and more. Find what you need at the best price!"
            />
            
            <section className="py-8 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-bold mb-4">Categoríes</h2>
                    <div className="flex gap-4 overflow-x-auto"> 
                        <ButtonBase 
                            variant={selectedCategory === null ? "primary" : "secondary"} 
                            name="All" 
                            onClick={() => setSelectedCategory(null)}
                        />
                        
                        {
                            CategorysConfig.map((category) => (
                                <ButtonBase 
                                    key={category.id}
                                    variant={selectedCategory === category.id ? "primary": "secondary"} 
                                    name={category.name} 
                                    onClick={() => setSelectedCategory(category.id)}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="py-8 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-bold mb-4">
                        {
                            selectedCategory
                            ? `Products of ${CategorysConfig.find((category) => category.id === selectedCategory)?.name}`
                            : "All products"
                        }
                    </h2>
                    <div className="grid-responsive">
                        {filteredProducts(selectedCategory).map((product) => (
                            <CardStoreComponent key={product.id} product={product}/>
                        ))}
                    </div>
                    {
                        filteredProducts(selectedCategory).length === 0 && (
                            <p className="text-gray-500 text-center mt-6 h-[50vh]">
                                There are no products available in this category.
                            </p>
                        )
                    }
                </div>
            </section>
            
        </div>
    )
}
