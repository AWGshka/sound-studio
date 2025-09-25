import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const appUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl.startsWith("http") ? appUrl : `https://${appUrl}`),
  title: {
    default: `${siteConfig.studio.name}`,
    template: `%s | ${siteConfig.studio.name}`,
  },
  description: siteConfig.studio.description,
  applicationName: siteConfig.studio.name,
  authors: [{ name: siteConfig.studio.name, url: siteConfig.studio.contact.url }],
  creator: siteConfig.studio.name,
  publisher: siteConfig.studio.name,
  keywords: siteConfig.studio.keywords,
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.studio.name,
    title: siteConfig.studio.name,
    description: siteConfig.studio.description,
    images: [
      {
        url: siteConfig.studio.logo,
        width: 1200,
        height: 630,
        alt: siteConfig.studio.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.studio.name,
    description: siteConfig.studio.description,
    images: [siteConfig.studio.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "music",
  alternates: { canonical: "/" },
  referrer: "origin-when-cross-origin",
  verification: { yandex: "0e17ab6acb0c55a3" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-black`}>
        <Script src="https://api-maps.yandex.ru/v3/?apikey=12431c91-f332-47dc-b491-87a5de79c3f8&lang=ru_RU" strategy="beforeInteractive" />
        {/* Global video background */}
        <div className="fixed inset-0 z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.4 }}>
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
