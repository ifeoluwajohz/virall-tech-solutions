import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact • Lienxify",
  description:
    "Get in touch — tell us about your project, goals, and timelines.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
