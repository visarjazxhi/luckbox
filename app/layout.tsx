import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LuckBox - Professional Poker Coaching",
  description: "Elevate your poker game with expert coaching and training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
