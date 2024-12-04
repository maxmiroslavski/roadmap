"use client";

import { useTranslations } from "next-intl";

export const DynamicComponent = () => {
  const t = useTranslations("dynamicPage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("dynamicComponent")}</p>
    </div>
  );
};
