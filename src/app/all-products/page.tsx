import { Product } from "@/shared/types";
import { ProductCard } from "@/shared/ui/molecules";

async function getData() {
  const data = await fetch("https://dummyjson.com/products?limit=5");

  const res = await data.json();

  return await res.products;
}

export default async function AllProducts() {
  const data = await getData();

  return (
    <div>
      <h1>All Products</h1>
      {data.map((product: Product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
