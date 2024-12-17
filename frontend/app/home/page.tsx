import Link from "next/link"
import { IProduct } from "../shared/interfaces/product/IProduct"
import { getProducts } from "../shared/lib/getProducts"
import { Card } from "../shared/ui/card"

export default async function Home() {
  const products = await getProducts()
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Productos Destacados
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Explora nuestra selección de productos increíbles.
        </p>
      </header>

      {/* Products Grid */}
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: IProduct) => (
            <Link key={product.id} href={`product/${product.id}`}>
              <Card key={product.id} product={product} />
            </Link>
          ))}
        </div>
      </main>
    </div>
    
  )
}