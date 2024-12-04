"use client";

import { AuthButton } from "@/features/auth-button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import css from "./styles.module.scss";
import { useSession } from "next-auth/react";

export const Header = () => {
  const t = useTranslations("header");
  const { data: session } = useSession();

  return (
    <header className={css.header}>
      <Link className={css.link} href="/">
        {t("home")}
      </Link>
      <Link className={css.link} href="/all-products">
        {t("allProducts")}
      </Link>
      {session && (
        <Link className={css.link} href="/my-profile">
          {t("myProfile")}
        </Link>
      )}
      <Link className={css.link} href="/dynamic-page">
        {t("dynamicPage")}
      </Link>
      <AuthButton className={css.authButton} />
    </header>
  );
};
