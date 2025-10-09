import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects • Lienxify",
  description:
    "Selected projects by Lienxify — modern web apps, design systems, and high-performance sites.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "https://your-domain.com/projects",
    title: "Projects • Lienxify",
    description:
      "Modern web apps, design systems, and high-performance websites.",
    siteName: "Lienxify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects • Lienxify",
    description:
      "Modern web apps, design systems, and high-performance websites.",
  },
  robots: { index: true, follow: true },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


