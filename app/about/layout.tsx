import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About • Lienxify",
  description:
    "Learn about Lienxify — a modern web agency crafting fast, scalable, and beautiful web applications that drive business results.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://your-domain.com/about",
    title: "About • Lienxify",
    description:
      "We craft fast, scalable, and beautiful web experiences. Discover our mission, values, and journey.",
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
    title: "About • Lienxify",
    description:
      "We craft fast, scalable, and beautiful web experiences. Discover our mission, values, and journey.",
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
  category: "technology",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://your-domain.com/about",
    },
    name: "About • Lienxify",
    description:
      "Learn about Lienxify — a modern web agency crafting fast, scalable, and beautiful web applications.",
    publisher: {
      "@type": "Organization",
      name: "Lienxify",
      url: "https://your-domain.com",
      logo: {
        "@type": "ImageObject",
        url: "https://your-domain.com/icon.png",
      },
    },
  };

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}


