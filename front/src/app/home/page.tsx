import BenefitsComponent from "./components/Benefits.component"
import { CategorysComponent } from "./components/Category.component"
import { ProductsComponent } from "./components/Products.component"
import WelcomeComponent from "./components/Welcome.component"

export default async function Home() {
    return (   
        <div className="bg-gray-100 text-gray-900">
            <section className="bg-blue-600 text-white py-12 px-6 text-center">
                <WelcomeComponent />
            </section>
  
            <section className="w-full bg-white py-12">
                <CategorysComponent/>
            </section>
          
            <section className="w-full bg-gray-200 py-12">
                <ProductsComponent/>
            </section>
    
            <section className="w-full bg-white py-12">
                <BenefitsComponent/>
            </section>
      </div>
    )
}
