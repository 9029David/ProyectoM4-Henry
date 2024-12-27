export default function Benefits() {
    return (
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
    )
}