import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects • Virall Tech Solutions",
  description:
    "Selected projects by Virall Tech Solutions — modern web apps, design systems, and high-performance sites.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "https://your-domain.com/projects",
    title: "Projects • Virall Tech Solutions",
    description:
      "Modern web apps, design systems, and high-performance websites.",
    siteName: "Virall Tech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects • Virall Tech Solutions",
    description:
      "Modern web apps, design systems, and high-performance websites.",
  },
  robots: { index: true, follow: true },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


