"use client";

import { ReactNode } from "react";
import css from "./styles.module.scss";

export const Main = ({ children }: { children: ReactNode }) => {
  return <main className={css.main}>{children}</main>;
};
