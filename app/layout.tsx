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
  title: "AI-Powered Full Stack and Automation Developer",
  description:
    "Experienced app and web developer offering professional development and testing services. Explore my portfolio for high-quality solutions tailored to your needs",
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
