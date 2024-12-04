import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import "@/shared/styles/index.scss";

import css from "./styles.module.scss";
import { Main } from "@/widgets/main";
import { NextSessionProvider } from "@/shared/config";
import { getServerSession } from "next-auth";
import { Header } from "@/widgets/header";

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "en" | "ru")) {
    notFound();
  }

  const messages = await getMessages();

  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <NextSessionProvider session={session}>
          <NextIntlClientProvider messages={messages}>
            <div className={css.wrap}>
              <Header />
              <Main>{children}</Main>
            </div>
          </NextIntlClientProvider>
        </NextSessionProvider>
      </body>
    </html>
  );
}
