export default function Featured() {
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Nuestros favoritos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((product) => (
                <div key={product} className="bg-white rounded-lg shadow p-4 text-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt={`Producto ${product}`}
                    className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Producto {product}</h3>
                <p className="text-gray-700">$99.99</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Comprar ahora
                </button>
                </div>
            ))}
            </div>
        </div>
    )
}