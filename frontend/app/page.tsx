export default function Landing() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Encuentra lo que amas, al mejor precio</h1>
                    <p className="text-lg mb-8">Ofertas exclusivas y envíos rápidos para ti</p>
                    <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
                    Explorar la tienda
                    </button>
                </div>
            </section>
    
            {/* Categorías Destacadas */}
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Explora nuestras categorías</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {["Moda", "Tecnología", "Hogar", "Deportes"].map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                        <img
                            src={`https://via.placeholder.com/100`}
                            alt={category}
                            className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold">{category}</h3>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
    
            {/* Productos Destacados */}
            <section className="bg-gray-100 py-12">
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
            </section>
    
            {/* Beneficios */}
            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-8">¿Por qué elegirnos?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { icon: "🚚", text: "Envío gratis en pedidos mayores a $XX" },
                        { icon: "💳", text: "Paga en cuotas sin interés" },
                        { icon: "🔄", text: "Devoluciones fáciles" },
                        { icon: "⭐", text: "Clientes felices nos avalan" },
                    ].map((benefit, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-4">
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <p className="text-gray-700">{benefit.text}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>      
        </div>
    )
}
  

