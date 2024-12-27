"use client"

import React, { useEffect, useState } from "react";
import { CategorysConfig } from "../home/components/Category.component";
import { CardStoreComponent } from "./components/CardStore.component";
import Link from "next/link";
import { ProductInterface } from "./Product.interface";

export const Store = () => {
    const [products, setProducts] = useState<Array<ProductInterface>>([])

    useEffect(() => {
        fetch("http://localhost:8080/products", {
            cache: "no-cache"
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.categoryId === selectedCategory)
        : products;


    return (
        <div  className="bg-gray-100 text-gray-800">
            <section className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4">Bienvenido a Nuestra Tienda</h1>
                    <p className="text-lg">
                        Descubre los mejores productos de tecnología, moda y más. ¡Encuentra lo que necesitas al mejor precio!
                    </p>
                </div>
            </section>

            <section className="py-8 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                <h2 className="text-xl font-bold mb-4">Categorías</h2>
                <div className="flex gap-4 overflow-x-auto">
                    <button
                    className={`px-4 py-2 rounded-lg font-medium ${
                        selectedCategory === null
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setSelectedCategory(null)}
                    >
                    Todas
                    </button>
                    {CategorysConfig.map((category) => (
                    <button
                        key={category.id}
                        className={`px-4 py-2 rounded-lg font-medium ${
                        selectedCategory === category.id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.name}
                    </button>
                    ))}
                </div>
                </div>
            </section>

            <section className="py-8 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-bold mb-4">
                        {selectedCategory
                        ? `Productos de ${CategorysConfig.find((category) => category.id === selectedCategory)?.name}`
                        : "Todos los Productos"}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-lg p-6 overflow-hidden text-center transition-all hover:scale-105"
                        >
                            <Link href={`/store/${product.id}`}>
                                <CardStoreComponent product={product}/>
                            </Link>
                            
                        </div>
                    
                        ))}
                    </div>
                    {
                        filteredProducts.length === 0 && (
                            <p className="text-gray-500 text-center mt-6 h-[50vh]">
                                No hay productos disponibles en esta categoría.
                            </p>
                        )
                    }
                    
                </div>
            </section>
        </div>
    )
}

export default Store