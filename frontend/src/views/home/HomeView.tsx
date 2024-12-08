"use client"

import Card from "@/components/card/card"
import { getProducts } from "@/helpers/getProducts"
import { IProduct } from "@/interfaces/product/IProduct"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomeView() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch(err => {
        alert("Error al obtener los productos")
      }) 
  }, [])

  return (
    <>
      {products.map((product: IProduct) => (
        <Link key={product.id} href={`product/${product.id}`}>
          <Card key={product.id} product={product} />
        </Link>
      ))}
    </>
  )
}