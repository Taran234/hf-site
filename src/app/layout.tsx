import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toronto Web Designs Agency - Best website services in Toronto",
  description: "Toronto's best one-stop website design and development solution. Get unlimited edits, 24/7 support, monthly payment options ...",
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
