import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "./_components/site-layout";

const inter = localFont({ src: "../public/fonts/inter-latin.woff2", variable: "--font-inter", weight: "400 800", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://green-village-anuradhapura.nipunaj688426.chatgpt.site"),
  title: {
    default: "Green Village Anuradhapura",
    template: "%s | Green Village Anuradhapura",
  },
  description:
    "A peaceful family homestay and personal Anuradhapura experiences with Gunarathna, a local teacher and guide.",
  icons: {
    icon: "/green-village-icon.png",
    apple: "/green-village-logo.png",
  },
  openGraph: {
    title: "Green Village Anuradhapura",
    description: "Stay local. Explore ancient Anuradhapura.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Village Anuradhapura",
    description: "Stay local. Explore ancient Anuradhapura.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
