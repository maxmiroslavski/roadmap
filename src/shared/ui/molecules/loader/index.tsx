import css from "./styles.module.scss";

interface LoaderProps {
  isLoading?: boolean;
}

export const SkeletonLoader = ({ isLoading }: LoaderProps) => {
  if (!isLoading) return null;

  return <div className={css.skeleton} />;
};
