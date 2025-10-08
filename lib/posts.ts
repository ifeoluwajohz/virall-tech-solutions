export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO date string
};

export const posts: BlogPost[] = [
  {
    slug: "designing-for-performance",
    title: "Designing for Performance",
    excerpt: "Core Web Vitals and practical strategies for fast UX.",
    content:
      "Performance is a design constraint. Focus on Core Web Vitals, measure with Lighthouse, and iterate with budgets.",
    date: "2025-01-10",
  },
  {
    slug: "typescript-patterns",
    title: "TypeScript Patterns",
    excerpt: "Safer React code with helpful patterns and guards.",
    content:
      "Prefer discriminated unions, narrow early with user-defined type guards, and avoid any by modeling domain types.",
    date: "2025-02-02",
  },
  {
    slug: "seo-for-nextjs-apps",
    title: "SEO for Next.js Apps",
    excerpt: "Technical SEO tips tailored for the app router.",
    content:
      "Use the Metadata API for titles and descriptions, semantic HTML, and a sitemap to help crawlers discover pages.",
    date: "2025-03-15",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}


