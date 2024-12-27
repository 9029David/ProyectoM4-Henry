import { IProduct } from "@/shared/interfaces/product/IProduct";
import Link from "next/link";
import { Card } from "../components/card";

export default function ProductsView({products}: {products: IProduct[]}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: IProduct) => (
            <Link key={product.id} href={`product/${product.id}`}>
              <Card key={product.id} product={product} />
            </Link>
          ))}
        </div>
    )
}