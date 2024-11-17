import { AllProductsPage } from "@/widgets/all-products-page";

async function getData() {
  const data = await fetch("https://dummyjson.com/products?limit=5");

  const res = await data.json();

  return await res.products;
}

export default async function AllProducts() {
  const data = await getData();

  return <AllProductsPage products={data} />;
}
