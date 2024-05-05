import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "~/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`font-sans ${inter.variable} container m-auto flex min-h-screen flex-col gap-6 bg-gradient-to-b from-[#2e026d] to-[#15162c] p-5 text-white lg:p-7`}
        >
          <Navbar links={[{ text: "Test", href: "/test" }]} allowAuth />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
