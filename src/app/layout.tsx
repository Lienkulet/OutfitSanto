import type { Metadata } from "next";

import {
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Outfit Santo",
  description: "Luxury fashion landing page",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`
        ${cinzel.variable}
        ${cinzelDecorative.variable}
        ${cormorant.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}