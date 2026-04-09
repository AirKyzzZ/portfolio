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
  title: "Portfolio BTS SIO SLAM — Maxime Mansiet | E4 Bloc 1 | EPSI Bordeaux",
  description: "Portfolio professionnel de Maxime Mansiet, étudiant BTS SIO option SLAM à l'EPSI Bordeaux. Présentation du parcours de professionnalisation et des réalisations couvrant les 6 compétences du Bloc 1 — Épreuve E4. Développeur fullstack chez Verana, fondateur de Klyx, ingénieur logiciel chez Hop Hop Immo.",
  keywords: "BTS SIO SLAM, E4, Bloc 1, EPSI Bordeaux, Maxime Mansiet, portfolio professionnel, compétences informatiques, développement web, stage informatique, Verana, Klyx, Hop Hop Immo, Next.js, TypeScript",
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
    canonical: 'https://e4.maximemansiet.fr',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Portfolio BTS SIO SLAM — Maxime Mansiet | E4 Bloc 1",
    description: "Portfolio BTS SIO SLAM de Maxime Mansiet (EPSI Bordeaux). Épreuve E4 Bloc 1 — parcours de professionnalisation, tableau de synthèse et compétences.",
    url: 'https://e4.maximemansiet.fr',
    siteName: 'Portfolio BTS SIO SLAM — Maxime Mansiet',
    images: [
      {
        url: 'https://e4.maximemansiet.fr/banner.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio BTS SIO SLAM — Maxime Mansiet',
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio BTS SIO SLAM — Maxime Mansiet | E4 Bloc 1",
    description: "Portfolio BTS SIO SLAM de Maxime Mansiet (EPSI Bordeaux). Épreuve E4 Bloc 1 — parcours de professionnalisation et tableau de synthèse.",
    images: ['https://e4.maximemansiet.fr/banner.png'],
  },
  verification: {
    google: 'your-google-verification-code',
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
