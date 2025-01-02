export const BenefitsComponent = () => {
    const benefits = [
        { id: 1, title: "Envío Gratuito", description: "Envío rápido y gratis en todos los pedidos.", icon: "🚚" },
        { id: 2, title: "Devoluciones Fáciles", description: "Sin complicaciones en devoluciones y cambios.", icon: "🔄" },
        { id: 3, title: "Pago Seguro", description: "Transacciones protegidas y cifradas.", icon: "🔒" },
        { id: 4, title: "Atención 24/7", description: "Estamos aquí para ayudarte en cualquier momento.", icon: "📞" },
    ];

    return (
        <section className="text-gray-800 py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Beneficios Exclusivos</h2>
                <p className="text-lg text-center mb-8">
                    Aprovecha todas las ventajas que ofrecemos para una experiencia única.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            <div className="text-5xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BenefitsComponent