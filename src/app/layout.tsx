import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-T7E1EDK0RD" />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#d97706"
          initialPosition={0.3}
          crawlSpeed={500}
          height={6}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={400}

          zIndex={1600}
          showAtBottom={false}
        />
        {children}
      </body>
    </html>
  );
}
