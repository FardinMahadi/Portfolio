import type { Metadata } from 'next';

import { notFound } from 'next/navigation';
import Footer from '@/components/LandingPage/Footer/Footer';
import { BlogIndexPage } from '@/components/blog/BlogIndexPage';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { PageTransition } from '@/components/effects/PageTransition';
import Navbar from '@/components/shared/navigation/Navigation';
import { getCategories } from '@/lib/blogData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export function generateStaticParams() {
  return getCategories().map(category => ({ category: encodeURIComponent(category) }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = decodeURIComponent(params.category);
  return generateSEOMetadata({
    title: `${category} Articles`,
    description: `Browse all blog articles in the ${category} category — web development, engineering patterns, and the developer journey.`,
    keywords: ['blog', category.toLowerCase(), 'web development', 'articles'],
    canonical: `${siteUrl}/blog/category/${encodeURIComponent(category)}`,
  });
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category);
  const validCategories = getCategories();

  if (!validCategories.includes(category)) {
    notFound();
  }

  return (
    <PageTransition variant="fade">
      <div className="relative flex min-h-screen flex-col bg-canvas">
        <Navbar />
        <main className="relative flex-1 pt-16" style={{ zIndex: 1 }}>
          <BlogIndexPage initialCategory={category} />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
