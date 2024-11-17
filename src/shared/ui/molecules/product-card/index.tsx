import { Product } from "@/shared/types";
import css from "./styles.module.scss";

export const ProductCard = ({ title, description, price }: Product) => {
  return (
    <div className={css.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
    </div>
  );
};
