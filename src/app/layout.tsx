import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harbourfront Web Designs - Your All-In-One Website Solution",
  description: "Transform your online presence with Harbourfront Web Designs, Toronto's premier one-stop solution for all your website needs. Get unlimited tasks, monthly subscriptions, 24/7 support, and a dedicated development team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedCursor
          innerSize={5}
          outerSize={50}
          innerScale={1}
          outerScale={1.5}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: 'white',
            backgroundBlendMode: 'difference',
            mixBlendMode: 'difference',
          }}
          outerStyle={{
            border: '3px solid white',
            mixBlendMode: 'difference',
            backgroundBlendMode: 'difference'
          }}
          clickables={[
            'a',
            'button',
            'Link',
          ]}
        />
        {children}
      </body>
    </html>
  );
}
