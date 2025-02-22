import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Website Design Agency | Best Website Design Company',
  description: 'Top-rated design agency specializing in custom website solutions, offering services such as website development, website redesign, portfolio design, and building a business website.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-T7E1EDK0RD" />
        <meta name="p:domain_verify" content="f903c26a3d0b6ac3480611f9156333d2" />
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
