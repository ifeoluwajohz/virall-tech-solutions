import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Lienxify",
    template: "%s • Lienxify",
  },
  description: "Modern web agency crafting fast, scalable, and beautiful web applications.",
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://your-domain.com/",
    title: "Lienxify",
    description: "Modern web agency crafting fast, scalable, and beautiful web applications.",
    siteName: "Lienxify",
    images: [
      {
        url: "https://images.unsplash.com/photo-1634295852474-33648d53f644?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Lienxify",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lienxify",
    description: "Modern web agency crafting fast, scalable, and beautiful web applications.",
    images: [
      "https://images.unsplash.com/photo-1634295852474-33648d53f644?w=1200&auto=format&fit=crop&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className}`}>
        <Navbar />
        <main className=" ">{children}</main>
        <Footer />
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lienxify",
              url: "https://your-domain.com",
              logo: "https://your-domain.com/icon.png",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.linkedin.com/",
                "https://twitter.com/"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
