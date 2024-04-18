import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amron",
  description: "Real estate, Property sale, Property buy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Real estate, Property sale, Property buy"
        />
        <meta
          name="description"
          content="Real estate, Property sale, Property buy"
        />
        <meta property="og:site_name" content="Homy" />
        <meta property="og:url" content="https://creativegigstf.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Real estate, Property sale, Property buy"
        />
        <meta name="og:image" content="/images/assets/ogg.png" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0D1A1C" />
        <meta name="msapplication-navbutton-color" content="#0D1A1C" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0D1A1C" />
        <title>Amron</title>
        <link
          rel="icon"
          type="image/png"
          sizes="56x56"
          href="/images/fav-icon/icon.png"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/bootstrap.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/style.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/responsive.css"
          media="all"
        />
      </head>

      <body className={inter.className}>
        {children}

        {/* <Script src="http://html5shiv.googlecode.com/svn/trunk/html5.js" /> */}
        {/* <Script src="/vendor/html5shiv.js" /> */}
        {/* <Script src="/vendor/respond.js" /> */}
        <Script src="/vendor/jquery.min.js" />
        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="/vendor/wow/wow.min.js" />
        <Script src="/vendor/slick/slick.min.js" />
        <Script src="/vendor/fancybox/fancybox.umd.js" />
        <Script src="/vendor/jquery.lazy.min.js" />
        <Script src="/vendor/jquery.counterup.min.js" />
        <Script src="/vendor/jquery.waypoints.min.js" />
        <Script src="/vendor/nice-select/jquery.nice-select.min.js" />
        <Script src="/vendor/validator.js" />
        <Script src="/vendor/chart.js" />

        <Script src="/js/theme.js" />
      </body>
    </html>
  );
}
