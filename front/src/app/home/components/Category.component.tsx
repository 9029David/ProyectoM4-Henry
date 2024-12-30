export const CategorysConfig = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Tablets' },
    { id: 4, name: 'Accessories' },
    { id: 5, name: 'Headphones' },
    { id: 6, name: 'Cameras' },
    { id: 7, name: 'Monitors' },
    { id: 8, name: 'Storage' },
]

export const CategorysComponent = () => {
    return (
        <>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Categorías</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
                {CategorysConfig.map(({id, name}) => (
                <div
                    key={id}
                    className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow-md text-center hover:bg-blue-200 cursor-pointer"
                >
                    <p className="font-semibold">{name}</p>
                </div>
                ))}
            </div>
        </>
    ) 
}

export default CategorysComponent