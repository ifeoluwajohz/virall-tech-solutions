import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog • Virall Tech Solutions",
  description:
    "Insights on web performance, UX, TypeScript, and shipping modern apps.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "https://your-domain.com/blogs",
    title: "Blog • Virall Tech Solutions",
    description:
      "Insights on web performance, UX, TypeScript, and shipping modern apps.",
    siteName: "Virall Tech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog • Virall Tech Solutions",
    description:
      "Insights on web performance, UX, TypeScript, and shipping modern apps.",
  },
  robots: { index: true, follow: true },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
