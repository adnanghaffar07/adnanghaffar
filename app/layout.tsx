import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Adnan Ghaffar's Portfolio | Professional App & Web Developer | Development & Testing Services Portfolio",
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
      <body className={lexendDeca.className}>{children}</body>
    </html>
  );
}
