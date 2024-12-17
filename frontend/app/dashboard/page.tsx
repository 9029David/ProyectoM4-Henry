export default function DashboardView() {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Main Content */}
            <main className="flex-1 p-4 md:p-6">
                {/* Header */}
                <header className="flex flex-col sm:flex-row sm:justify-between items-center bg-white p-4 rounded shadow mb-6 gap-4">
                <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left">
                    Bienvenido al Dashboard
                </h2>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <input
                    type="text"
                    placeholder="Buscar..."
                    className="flex-1 sm:flex-none border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Buscar
                    </button>
                </div>
                </header>

                {/* Widgets/Stats */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Usuarios Activos", value: 1234 },
                    { title: "Nuevas Ventas", value: 567 },
                    { title: "Visitas Hoy", value: 890 },
                    { title: "Ganancias", value: "$12,345" },
                ].map((stat, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center"
                    >
                    <h3 className="text-sm sm:text-base font-semibold">{stat.title}</h3>
                    <p className="text-lg sm:text-2xl font-bold text-blue-500">{stat.value}</p>
                    </div>
                ))}
                </section>

                {/* Main Dashboard Content */}
                <section className="mt-6 bg-white rounded-lg shadow p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Últimos Datos</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base">
                    <thead>
                        <tr>
                        {["ID", "Nombre", "Rol", "Estado"].map((col, index) => (
                            <th
                            key={index}
                            className="px-4 py-2 border-b border-gray-300 text-left text-gray-600"
                            >
                            {col}
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[
                        { id: 1, name: "Juan Pérez", role: "Admin", status: "Activo" },
                        { id: 2, name: "Ana López", role: "Usuario", status: "Inactivo" },
                        { id: 3, name: "Carlos Ruiz", role: "Editor", status: "Activo" },
                        ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b border-gray-300">{row.id}</td>
                            <td className="px-4 py-2 border-b border-gray-300">{row.name}</td>
                            <td className="px-4 py-2 border-b border-gray-300">{row.role}</td>
                            <td className="px-4 py-2 border-b border-gray-300">{row.status}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </section>
            </main>
            </div>
    )
}
