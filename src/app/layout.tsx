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

export const metadata: Metadata = {
  title: `${siteConfig.studio.name}`,
  description: siteConfig.studio.description,
  icons: { icon: "/favicon.png" },
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
