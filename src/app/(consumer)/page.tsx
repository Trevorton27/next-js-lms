import { db } from "@/drizzle/db"
import { ProductTable } from "@/drizzle/schema"
import { ProductCard } from "@/features/products/components/ProductCard"
import { wherePublicProducts } from "@/features/products/permissions/products"
import { asc } from "drizzle-orm"
import LandingPage from "@/app/LandingPage"

export default async function HomePage() {
  const products = await getPublicProducts()

  return (
    <div className="container my-6">
      <LandingPage />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

async function getPublicProducts() {


  return db.query.ProductTable.findMany({
    columns: {
      id: true,
      name: true,
      description: true,
      priceInDollars: true,
      imageUrl: true,
    },
    where: wherePublicProducts,
    orderBy: asc(ProductTable.name),
  })
}
