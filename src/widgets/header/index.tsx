import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React from "react";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <header>
      <Link href="/">{t("home")}</Link>
      <Link href="/all-products">{t("allProducts")}</Link>
    </header>
  );
};
