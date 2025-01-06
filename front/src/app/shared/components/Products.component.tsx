"use client";

import { ButtonBase } from "@/app/shared/components/ButtonBase";
import { IProduct } from "@/app/shared/interfaces/product/IProduct";
import { useProducts } from "@/app/shared/context/useProducts";
import Link from "next/link";
import { useAuth } from "../../(auth)/shared/context/Auth.context";
import { Route } from "@/app/shared/constants/routes";
import { getRoute } from "@/app/shared/utils/getRoute";

export const CardProductComponent = ({ product }: { product: IProduct }) => {
    const { name, image, price } = product;
    return (
        <div className="relative">
            {/* Imagen como fondo */}
            <div className="relative group">
                <img
                    className="w-full h-64 object-contain rounded transition duration-300 transform group-hover:scale-105"
                    src={image}
                    alt={name}
                />
                {/* Botón superpuesto */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300">
                    <ButtonBase name="Ver Detalles"/>
                </div>
            </div>
            {/* Información del producto */}
            <div className="mt-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">{name}</h3>
                <p className="font-bold text-blue-600">${price}</p>
            </div>
        </div>
    );
};

export const ProductsComponent = () => {
    const { products } = useProducts();
    const { user } = useAuth()

    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                    Productos Recomendados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        !products.length
                        ? Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-full h-64 bg-gray-200 animate-pulse rounded"></div>    
                        )) 
                        : products.slice(2, 6).map((product: IProduct) => (
                            <Link key={product.id} href={getRoute(Route.PRODUCT, { id: product.id })}>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <CardProductComponent product={product} />
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="flex justify-center mt-10">
                    <ButtonBase name="Ver más productos" href={Route.HOME} />
                </div>
                
                {/* {user?.role === "admin" ? <ButtonBase name="Botón de Admin" onClick={() => alert("Acción exclusiva para admin")}/> : <ButtonBase name="Botón de User" onClick={() => alert("Acción exclusiva para user")}/>} */}
            </div>
        </section>
        
        
    );
};

export default ProductsComponent;