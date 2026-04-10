import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blinqq - Fintech Platform",
  description:
    "A secure, username-based fintech platform for instant local and cross-border payments, multi-currency wallets, and agent cash access.",
  keywords:
    "blinqq, fintech, @username transfers, multi-currency wallet, p2p payments, agent cash-in cash-out, cross-border payments, kyc, 2fa, fraud detection, stablecoin settlement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans text-white bg-midnight">
        {children}
      </body>
    </html>
  );
}
