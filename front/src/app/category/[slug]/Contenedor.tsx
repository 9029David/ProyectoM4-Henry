export default function Contenedor ({children}: {children: React.ReactNode}) {
    return (
        
        <main className="container mx-auto">
            <section className="px-4 flex flex-col">
                <h1 className="text-3xl text-blue-500 font-semibold py-4">Categoria destacada</h1>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    {children}
                </div>
            </section>
        </main>
        
    )
}