export const HeroSection = ({title, description}: {title: string, description: string}) => {
    return (
        <section className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="text-lg">{description}</p>
            </div>      
        </section>
    )
}

export default HeroSection
