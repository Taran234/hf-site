import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Designs Toronto | Custom Web Page Design Company Toronto",
  description:
    "Canada's best all-in-one website design agency. Get weekly SEO updates, 24/7 on call support, affordable payment options and more...",
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
        <noscript>
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
        </noscript>
        <meta name="trustpilot-one-time-domain-verification-id" content="191f1550-4544-41de-8adc-fee18b6bc60e" />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          id="openwidget-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.__ow = window.__ow || {};
              window.__ow.organizationId = "74381bb4-f49c-467f-b915-098d2104ef54";
              window.__ow.integration_name = "manual_settings";
              window.__ow.product_name = "openwidget";   
              (function(n,t,c){
                function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
                var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0;n.type="text/javascript";n.src="https://cdn.openwidget.com/openwidget.js";t.head.appendChild(n)}};
                !n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e
              }(window,document,[].slice));
            `,
          }}
        />
      </body>
    </html>
  );
}
