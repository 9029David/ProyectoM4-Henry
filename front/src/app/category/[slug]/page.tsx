import Contenedor from "./Contenedor"
import ViewProductByCategory from "./ViewProductByCategory"

export default async function Category({params}: {params: Promise<{slug: string}>}) {
    const { slug } = await params
    
    return (
        <Contenedor>
            <ViewProductByCategory id={Number(slug)}/>
        </Contenedor>
    )
}