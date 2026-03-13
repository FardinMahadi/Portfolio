import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { BlogIndexPage } from '@/components/blog/BlogIndexPage';
import { PageTransition } from '@/components/effects/PageTransition';
import Footer from '@/components/LandingPage/Footer/Footer';
import Navbar from '@/components/shared/navigation/Navigation';
import { getCategories } from '@/lib/blogData';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export function generateStaticParams() {
  return getCategories().map(category => ({ category: encodeURIComponent(category) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory);
  return generateSEOMetadata({
    title: `${category} Articles`,
    description: `Browse all blog articles in the ${category} category — web development, engineering patterns, and the developer journey.`,
    keywords: ['blog', category.toLowerCase(), 'web development', 'articles'],
    canonical: `${siteUrl}/blog/category/${encodeURIComponent(category)}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory);
  const validCategories = getCategories();

  if (!validCategories.includes(category)) {
    notFound();
  }

  return (
    <PageTransition variant="fade">
      <div className="bg-canvas relative flex min-h-screen flex-col">
        <Navbar />
        <main className="relative flex-1 pt-16" style={{ zIndex: 1 }}>
          <BlogIndexPage initialCategory={category} />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
