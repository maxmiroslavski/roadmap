import { Link } from "@/i18n/routing";
import clsx from "clsx";
import css from "./styles.module.scss";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link className={clsx(css.link, className)} href={href}>
      {children}
    </Link>
  );
};
