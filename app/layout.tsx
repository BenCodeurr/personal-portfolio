import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Mukanirwa - Entrepreneur | Tech Leader | Innovator",
  description:
    "Hi, I'm Ben Mukanirwa. I love to be part of movements that empower others and solve real-world problems.",
  keywords:
    "Ben Drc, Ben Congo, Ben Mukanirwa, Benedict Obed, Benedict, Ben Bunia, Ben Mk, Congolese Entrepreneur, Congolese Tech Leader, Congolese Innovators, Innovateurs Congolais, Entrepreneurs Congolais",
  verification: {
    google: "jxCHUfyhG5sh5npIl_SEYjoNuGSmqQ5v252HItvX3TE",
  },
  openGraph: {
    title: "Ben Mukanirwa - Entrepreneur | Tech Leader | Innovator",
    description:
      "Hi, I'm Ben Mukanirwa. I love to be part of movements that empower others and solve real-world problems.",
    url: "https://www.benmukanirwa.info/",
    siteName: "Ben Mukanirwa",
    type: "website",
    locale: "en_US",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Mukanirwa - Entrepreneur | Tech Leader | Innovator",
    description:
      "Hi, I'm Ben Mukanirwa. I love to be part of movements that empower others and solve real-world problems.",
    images: ["/icon.png"],
    creator: "@benmukanirwa",
  },
  authors: [
    {
      name: "Ben Mukanirwa",
      url: "https://www.benmukanirwa.info",
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-019C5EHDRV" />
    </html>
  );
}
