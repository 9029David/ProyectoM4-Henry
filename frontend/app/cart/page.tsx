export default function Cart() {

    const products = [
        { id: 1, name: "Producto 1", price: 20, quantity: 1, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Producto 2", price: 15, quantity: 2, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Producto 3", price: 30, quantity: 1, image: "https://via.placeholder.com/150" },
    ];
    
    const calculateTotal = () => 
        products.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            {/* Header */}
            <header className="bg-white p-4 rounded shadow mb-6">
                <h1 className="text-2xl font-bold text-center">Carrito de Compras</h1>
            </header>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Product List */}
                <section className="flex-1 bg-white p-4 rounded shadow">
                <h2 className="text-lg font-bold mb-4">Tus Productos</h2>
                <div className="space-y-4">
                    {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col sm:flex-row items-center bg-gray-50 p-4 rounded-lg shadow-sm gap-4"
                    >
                        <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 rounded object-cover"
                        />
                        <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-sm text-gray-600">Precio: ${product.price}</p>
                        <p className="text-sm text-gray-600">Cantidad: {product.quantity}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                            Eliminar
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Editar
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                </section>

                {/* Order Summary */}
                <aside className="w-full lg:w-1/3 bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-bold mb-4">Resumen del Pedido</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>${calculateTotal()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Impuestos (15%):</span>
                            <span>${(calculateTotal() * 0.15).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span>${(calculateTotal() * 1.15).toFixed(2)}</span>
                        </div>
                    </div>
                    <button className="mt-6 w-full bg-green-500 text-white py-3 rounded hover:bg-green-600">
                        Proceder al Pago
                    </button>
                </aside>
            </div>
            </div>
    )
}

