import "@/styles/globals.css";
import "@uploadthing/react/styles.css";

import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import Header from "@/app/_components/Header";
import { cn } from "@/lib/utils";
import Footer from "./_components/Footer";

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});
const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
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
          className={cn("antialiased", fontHeading.variable, fontBody.variable)}
        >
          <Header links={[{ text: "Test", href: "/test" }]} allowAuth />
          <main className="container m-auto min-h-[calc(100dvh-70px)]">
            {children}
          </main>
          {modal}
          <div id="modal-root" />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
