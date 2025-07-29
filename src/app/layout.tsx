import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ui/client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata should be in a separate metadata file or directly exported without 'use client'
export const metadata = {
  title: "Maxime Mansiet - Développeur Full-Stack & Entrepreneur | React, Next.js, Bordeaux",
  description: "Portfolio de Maxime Mansiet, développeur full-stack et entrepreneur basé à Bordeaux. Spécialisé en React, Next.js et développement web moderne. Fondateur de Klyx et VertiFlow. Découvrez mes projets et expériences.",
  keywords: "Maxime Mansiet, développeur full-stack, React, Next.js, TypeScript, Bordeaux, entrepreneur, Klyx, VertiFlow, développement web, UI/UX, GDG Bordeaux",
  author: "Maxime Mansiet",
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    title: "Maxime Mansiet - Développeur Full-Stack & Entrepreneur",
    description: "Portfolio de Maxime Mansiet, développeur full-stack et entrepreneur basé à Bordeaux. Spécialisé en React, Next.js et développement web moderne.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime Mansiet - Développeur Full-Stack & Entrepreneur",
    description: "Portfolio de Maxime Mansiet, développeur full-stack et entrepreneur basé à Bordeaux.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
