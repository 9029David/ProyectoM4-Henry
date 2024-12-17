export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                <h3 className="text-lg font-semibold mb-4">Tu tienda favorita</h3>
                <p className="text-sm mb-4">© 2024 Todos los derechos reservados.</p>
                <div className="flex justify-center gap-4">
                <a href="#" className="hover:text-gray-400">Política de privacidad</a>
                <a href="#" className="hover:text-gray-400">Términos</a>
                <a href="#" className="hover:text-gray-400">Contacto</a>
                </div>
            </div>
        </footer>
    )
}

