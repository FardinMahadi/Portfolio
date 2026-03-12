import type { Metadata } from 'next';

import Footer from '@/components/LandingPage/Footer/Footer';
import Navbar from '@/components/shared/navigation/Navigation';
import { BlogIndexPage } from '@/components/blog/BlogIndexPage';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { PageTransition } from '@/components/effects/PageTransition';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog Articles',
  description:
    'Read articles about web development, programming tips, career insights, and learning resources. Learn from practical examples and personal experiences in full-stack development.',
  keywords: ['blog', 'programming', 'web development', 'learning', 'tutorials', 'articles'],
  canonical: `${siteUrl}/blog`,
});

export default function BlogPage() {
  return (
    <PageTransition variant="fade">
      <div className="bg-canvas relative flex min-h-screen flex-col">
        <Navbar />
        <main className="relative flex-1 pt-16" style={{ zIndex: 1 }}>
          <BlogIndexPage />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
