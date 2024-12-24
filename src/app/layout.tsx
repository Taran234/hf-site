import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Website Design Company for Small Businesses",
  description:
    "Grow your Business online. Thousands of website designs to choose from; Get weekly SEO updates, 24/7 on call support, cheapest payment options and more...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-T7E1EDK0RD" />
        {/* <noscript>
          You need to{" "}
          <a
            href="https://www.openwidget.com/enable-javascript"
            rel="noopener nofollow"
          >
            enable JavaScript
          </a>{" "}
          to use the communication tool powered by{" "}
          <a
            href="https://www.openwidget.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            OpenWidget
          </a>
        </noscript> */}
        <meta name="trustpilot-one-time-domain-verification-id" content="191f1550-4544-41de-8adc-fee18b6bc60e" />
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
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
      </body>
    </html>
  );
}
