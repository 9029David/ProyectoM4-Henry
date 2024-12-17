export default function AuthLayout({children}: {children : React.ReactNode}) {
    return (
        <section>
            <div className="flex flex-row bg-green-500 h-screen items-center">
                <div className="bg-red-500 w-1/2 h-full">Esta es la parte izquierda</div>
                <div className="bg-blue-500 w-1/2 h-ful flex items-center justify-center">{children}</div>
            </div>
        </section>
    )
}