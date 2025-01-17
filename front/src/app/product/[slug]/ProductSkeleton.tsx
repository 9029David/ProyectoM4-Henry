const ProductSkeleton = () => {
  return (
    <section className="overflow-hidden text-gray-700 bg-white animate-pulse">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col sm:flex-row mx-auto sm:w-4/5 animate-pulse">
                <div className="w-full md:w-1/3 h-[300px] bg-gray-300 rounded md:h-[400px] lg:w-1/2"></div>
                <div className="flex flex-col gap-3 w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                    <div className="h-6 bg-gray-300 rounded-md w-1/4"></div>
                    <div className="flex flex-col gap-2">
                        <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-1"></div>
                        <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-1"></div>
                        <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-1"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="h-4 bg-gray-300 rounded-md w-4/6"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-4/6"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-3/6"></div>
                    </div>
                    <div className="flex flex-col gap-4 pt-4">
                        <div className="h-9 bg-gray-300 rounded-lg w-2/6"></div>
                        <div className="flex flex-col gap-1">
                            <div className="h-10 bg-gray-300 rounded w-4/6"></div>
                            <div className="h-10 bg-gray-300 rounded w-4/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ProductSkeleton;


