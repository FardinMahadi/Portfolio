'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/blogData';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';

import { BlogList } from './BlogList';
import { BlogHeader } from './BlogHeader';
import { BlogBackground } from './BlogBackground';

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Limit to 4 most recent blog posts
  const displayedPosts = blogPosts.slice(0, 4);

  return (
    <section
      id="blog"
      className="text-theme-text relative overflow-hidden bg-(--color-background) px-4 py-20 sm:px-6 lg:px-8"
      style={{
        background:
          'linear-gradient(to bottom, color-mix(in srgb, var(--color-background) 92%, transparent), var(--color-background))',
      }}
    >
      <BlogBackground />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <BlogHeader />

        <BlogList posts={displayedPosts} isInView={isInView} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-theme-border/70 text-theme-text/80 hover:border-theme-primary hover:bg-theme-primary/10 hover:text-theme-primary transition-all duration-300"
            asChild
          >
            <Link href="/blog" aria-label="View all blog articles">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
