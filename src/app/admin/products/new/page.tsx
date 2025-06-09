import { PageHeader } from "@/components/PageHeader"
import { db } from "@/drizzle/db"
import { CourseTable } from "@/drizzle/schema"
import { ProductForm } from "@/features/products/components/ProductForm"
import { asc } from "drizzle-orm"

export default async function NewProductPage() {
  return (
    <div className="container my-6">
      <PageHeader title="New Product" />
      <ProductForm courses={await getCourses()} />
    </div>
  )
}

async function getCourses() {
  return db.query.CourseTable.findMany({
    orderBy: asc(CourseTable.name),
    columns: { id: true, name: true },
  })
}
