"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import css from "./styles.module.scss";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export const AuthButton = ({ className }: { className?: string }) => {
  const { data: session } = useSession();
  const t = useTranslations("header");

  return (
    <button
      className={clsx(css.authButton, className)}
      onClick={() => (session ? signOut() : signIn())}
    >
      {t(session ? "logout" : "login")}
    </button>
  );
};
