const ProductSkeleton = () => {
  return (
    <section className="overflow-hidden text-gray-700 bg-white body-font">
        <div  className="container px-5 py-24 mx-auto">
            <div className="flex fle-wrap mx-auto lg:w-4/5">
            {/* Imagen del producto */}
            <div className="w-full md:w-1/3 h-[600px] bg-gray-300 rounded lg:w-1/2"></div>

            {/* Contenido del producto */}
                <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                    {/* Nombre de la tienda */}
                    <div className="h-6 bg-gray-300 rounded-md w-2/4"></div>

                    {/* Título del producto */}
                    <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-1"></div>

                    {/* Descripción */}
                    <div className="space-y-4">
                    <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded-md w-4/6"></div>
                    </div>

                    <div className="flex flex-col pt-8">
                        {/* Precio */}
                        <div className="h-9 bg-gray-300 rounded-lg w-1/6 pb-8"></div>
                        {/* Botones */}
                        <div className="flex flex-col max-w-xs">
                            <div className="h-10 bg-gray-300 rounded w-xs my-2 px-4"></div>
                            <div className="h-10 bg-gray-300 rounded w-xs px-4"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default ProductSkeleton;
