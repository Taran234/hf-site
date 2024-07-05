import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harbourfront Web Designs",
  description: "Toronto's Best One-Stop Solution for all Website Needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><AnimatedCursor
        innerSize={10}
        outerSize={75}
        innerScale={1}
        outerScale={2}
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
        {children}</body>
    </html>
  );
}
