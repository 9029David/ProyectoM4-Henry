import Benefits from "@/root/components/benefits";
import FeaturedCategories from "./root/components/categories";
import Destacados from "./root/components/featured";
import Hero from "./root/components/hero";

export default function Landing() {
    return (
        <main>
            <div className="bg-gray-50 min-h-screen">
                <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16"><Hero/></section>
                <section className="py-12"><FeaturedCategories/></section>
                <section className="bg-gray-100 py-12"><Destacados/></section>
                <section className="py-12"><Benefits/></section>      
            </div>
        </main>
    )
}
  

