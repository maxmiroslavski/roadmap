import { Product } from "@/shared/types";
import { ProductCard } from "@/shared/ui/molecules";
import { useTranslations } from "next-intl";
import React from "react";

export const AllProductsPage = ({ products }: { products: Product[] }) => {
  const t = useTranslations("allProductsPage");

  return (
    <div>
      <h1>{t("title")}</h1>
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};
