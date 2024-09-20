import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "web page design Toronto | Website starting at Just $99",
  description: "Toronto's best all-in-one website design agency. Get weekly SEO updates, 24/7 on call support, affordable payment options and more...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-T7E1EDK0RD" />
    </html>
  );
}
