import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevePolers Games - Assety i Tworzenie Gier",
  description: "DevePolers Games - specjalizujemy się w sprzedaży assetów i tworzeniu gier. Profesjonalne rozwiązania dla Twojego projektu.",
  keywords: "gry, assety, game development, gamedev, unity, unreal, assets",
  authors: [{ name: "DevePolers Games" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
