
import getProduct from "./services/getProduct";

export default async function ProductSlug({ params }: { params: Promise<{ slug: string  }> }) {
    const { slug } = await params;

    const {name, description, image, price} = await getProduct(Number(slug))
    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <header className="bg-white p-4 rounded shadow mb-6 text-center">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-gray-600 mt-2">{description}</p>
            </header>
            <main className="flex flex-col lg:flex-row bg-white p-6 rounded shadow gap-6">
                <div className="flex-shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">Detalles</h2>
                        <p className="text-gray-700 mt-2">{description}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-xl font-semibold text-green-500">
                            Precio: ${price.toFixed(2)}
                        </p>
                    </div>
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