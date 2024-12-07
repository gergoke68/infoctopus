import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Infoctopus",
  description: "Infoctopus Inc. hivatalos weboldala",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={
          "antialiased w-screen min-h-screen text-white overflow-x-clip " +
          montserrat.className
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
