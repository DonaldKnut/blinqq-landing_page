import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blinqq - Instant Digital Payments & Fintech Platform",
  description: "Send money instantly, pay bills, invest, borrow, and earn rewards. Your all-in-one fintech platform for seamless digital payments.",
  keywords: "fintech, digital payments, mobile banking, money transfer, bill payments, crypto, investments, loans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
