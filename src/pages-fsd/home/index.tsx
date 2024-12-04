"use client";

import { useTranslations } from "next-intl";

export const HomePage = () => {
  const t = useTranslations("homePage");

  return <h1>{t("greeting")}</h1>;
};
