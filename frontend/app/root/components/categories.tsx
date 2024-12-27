export default function FeaturedCategories() {
    return (
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
       
    )
}


    