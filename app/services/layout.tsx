import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services • Lienxify",
  description:
    "Explore services by Lienxify — web app development, UI/UX, SEO, security, maintenance, graphic design, social media ads, and digital marketing.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "https://your-domain.com/services",
    title: "Services • Lienxify",
    description:
      "Web app development, UI/UX, SEO, security, maintenance, and marketing services.",
    siteName: "Lienxify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services • Lienxify",
    description:
      "Web app development, UI/UX, SEO, security, maintenance, and marketing services.",
  },
  robots: { index: true, follow: true },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


