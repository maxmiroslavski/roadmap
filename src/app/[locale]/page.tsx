import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homePage");

  return <div>{t("greeting")}</div>;
}