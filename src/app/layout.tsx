import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ui/client-layout";
import StructuredData from "@/components/ui/structured-data";

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
  keywords: "Maxime Mansiet, développeur full-stack, React, Next.js, TypeScript, Bordeaux, entrepreneur, Klyx, VertiFlow, développement web, UI/UX, GDG Bordeaux, portfolio développeur, développeur React Bordeaux, entrepreneur tech Bordeaux",
  author: "Maxime Mansiet",
  creator: "Maxime Mansiet",
  publisher: "Maxime Mansiet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://maximemansiet.fr',
  },
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Maxime Mansiet - Développeur Full-Stack & Entrepreneur",
    description: "Portfolio de Maxime Mansiet, développeur full-stack et entrepreneur basé à Bordeaux. Spécialisé en React, Next.js et développement web moderne.",
    url: 'https://maximemansiet.fr',
    siteName: 'Maxime Mansiet - Portfolio',
    images: [
      {
        url: '/moi.png',
        width: 1200,
        height: 630,
        alt: 'Maxime Mansiet - Développeur Full-Stack',
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime Mansiet - Développeur Full-Stack & Entrepreneur",
    description: "Portfolio de Maxime Mansiet, développeur full-stack et entrepreneur basé à Bordeaux.",
    images: ['/moi.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
