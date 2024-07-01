import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { Inter } from "next/font/google";
import Navbar from "~/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Next Gallary",
  description: "An app built using Next, RSC, Drizzle, PostgreSQL and Tailwind",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body
          className={`font-sans ${inter.variable} container m-auto flex min-h-screen flex-col gap-6 bg-gradient-to-b from-[#2e026d] to-[#15162c] p-5 text-white lg:p-7`}
        >
          <Navbar links={[{ text: "Test", href: "/test" }]} allowAuth />
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
