import { IProduct } from "../../shared/interfaces/product/IProduct";


export default async function ProductSlug({ params }: { params: Promise<{ slug: string  }> }) {
    const { slug } = await params;

    // Simulando una llamada para obtener datos del producto
    const fetchProduct = async (slug: string): Promise<IProduct> => {
        // Aquí podrías hacer un fetch real
        return {
            id: 1,
            name: "Producto de ejemplo",
            description: "Esta es la descripción del producto.",
            price: 49.99,
            image: "https://via.placeholder.com/400",
        };
    };

  const product = await fetchProduct(slug);


    return (
        // <h1 className="text-4xl">Product {slug}</h1>
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            {/* Header */}
            <header className="bg-white p-4 rounded shadow mb-6 text-center">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-600 mt-2">{product.description}</p>
            </header>

            {/* Main Content */}
            <main className="flex flex-col lg:flex-row bg-white p-6 rounded shadow gap-6">
                {/* Product Image */}
                <div className="flex-shrink-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-lg"
                />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between flex-1">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Detalles</h2>
                    <p className="text-gray-700 mt-2">{product.description}</p>
                </div>
                <div className="mt-4">
                    <p className="text-xl font-semibold text-green-500">
                    Precio: ${product.price.toFixed(2)}
                    </p>
                </div>
                {/* Add to Cart Button */}
                <div className="mt-6">
                    <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Añadir al Carrito
                    </button>
                </div>
                </div>
            </main>
            </div>
    )
}