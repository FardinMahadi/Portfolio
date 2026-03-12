'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { blogPosts } from '@/lib/blogData';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer } from 'config/animations';
import { BlogCard } from './BlogCard';
import { CategoryFilter } from './CategoryFilter';

type BlogIndexPageProps = {
  initialCategory?: string;
};

export function BlogIndexPage({ initialCategory }: BlogIndexPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory ?? null);

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="blog-index"
      className="bg-canvas relative min-h-screen overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[200px]"
        style={{ background: 'radial-gradient(circle, var(--mag-500), transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="text-n400 mb-4 font-mono text-[0.65rem] tracking-[0.12em]">
            {'// 04_writing'}
          </div>
          <SectionEyebrow number="04">Writing</SectionEyebrow>
          <SectionHeading accent="Articles" className="mt-4">
            Blog
          </SectionHeading>
          <p className="text-n500 mt-4 max-w-2xl text-base leading-relaxed">
            Practical articles on web development, engineering patterns, and the developer journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </motion.div>

        {/* Results count */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-n500 mb-6 font-mono text-sm"
          >
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} in{' '}
            <span className="text-mag-500">{selectedCategory}</span>
          </motion.div>
        )}

        {/* Grid */}
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12 text-center"
          >
            <p className="text-n500 text-lg">No articles found in this category.</p>
          </motion.div>
        ) : (
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}