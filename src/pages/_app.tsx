import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Noto_Sans_Thai } from "next/font/google";
import { NextUIProvider } from "../../lib/next-ui/next-ui-provider";
import Navbar from "~/components/Navbar"

import { api } from "~/utils/api";

import "~/styles/globals.css";

const noto = Noto_Sans_Thai({
  weight:['100', "200",  "300",  "400",  "500",  "600",  "700",  "800",  "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
          <main className={noto.className}>
          <NextUIProvider>
              <Navbar/>
              <Component {...pageProps} />
          </NextUIProvider>
          </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);