import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reung Khmer | Interactive Stories in Khmer for English Readers",
  description: "Reung Khmer is an immersive online platform designed to bridge the gap between Khmer culture and English-speaking audiences through interactive storytelling. ",
  openGraph: {
    images: 'https://ruengkhmer.vercel.app/metaimg.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" />
      <Analytics />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
