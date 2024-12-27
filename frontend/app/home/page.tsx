import { IProduct } from "@/shared/interfaces/product/IProduct"
import SubHeader from "./components/subHeader"
import { getProducts } from "./services/getProducts"
import ProductsView from "./views/productsView"

export default async function Home() {
  const products: IProduct[] = await getProducts()
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-6">
        <SubHeader/>
      </header>
      <main className="p-6">
        <ProductsView products={products}/>
      </main>
    </div>
  )
}