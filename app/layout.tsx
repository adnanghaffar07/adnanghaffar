import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Adnan Ghaffar | AI Agents, Workflow Automation & Modern Web Solutions",
  description:
    "Building intelligent AI agents, automation systems, and modern applications that streamline operations and drive business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={lexendDeca.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
