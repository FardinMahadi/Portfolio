'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { blogPosts } from '@/lib/blogData';
import { generateArticleSchema } from '@/lib/seo';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getBlogImageTransitionName, getBlogCardTransitionName } from '@/lib/transitions';

import { CategoryFilter } from './CategoryFilter';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter blog posts based on selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="blog-index"
      className="text-theme-text relative min-h-screen scroll-mt-16 overflow-hidden bg-(--color-background) px-4 pt-24 pb-20 sm:px-6 md:scroll-mt-32 lg:px-8"
      style={{
        background:
          'linear-gradient(to bottom, color-mix(in srgb, var(--color-background) 94%, transparent), var(--color-background))',
        zIndex: 1,
      }}
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[200px]"
        style={{
          background:
            'radial-gradient(circle at center, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {blogPosts.map((post, index) => {
          const articleSchema = generateArticleSchema(
            post.title,
            post.excerpt,
            post.date,
            post.date,
            'Mahadi Hasan Fardin',
            `${siteUrl}/og-image.png`
          );
          return (
            <script
              key={`article-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(articleSchema),
              }}
            />
          );
        })}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <div className="text-theme-primary mb-6 flex items-center justify-center gap-3">
            <span className="font-mono" aria-hidden="true">
              {'</'}
            </span>
            <h1 className="text-theme-accent text-4xl font-bold">Blog Articles</h1>
            <span className="font-mono" aria-hidden="true">
              {'>'}
            </span>
          </div>
          <p className="text-theme-text/75 mx-auto max-w-2xl text-lg">
            Explore articles about web development, programming tips, career insights, and learning
            resources. Written to help developers grow and succeed in their journey.
          </p>
        </motion.header>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            className="mb-6 font-mono text-sm text-slate-400"
          >
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} in{' '}
            <span className="text-theme-primary">{selectedCategory}</span>
          </motion.div>
        )}

        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-12 text-center"
          >
            <p className="text-theme-text/70 text-lg">No articles found in this category.</p>
          </motion.div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
                data-blog-category={post.category}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block h-full"
                  aria-label={`Read article: ${post.title}`}
                >
                  <div
                    className="border-theme-border/60 hover:border-theme-primary/60 flex h-full cursor-pointer flex-col rounded-lg border p-6 backdrop-blur-sm transition-all duration-300"
                    style={{
                      background:
                        'linear-gradient(to bottom right, color-mix(in srgb, var(--color-surface) 90%, transparent), color-mix(in srgb, var(--color-background) 88%, transparent))',
                      viewTransitionName: getBlogCardTransitionName(post.slug),
                    }}
                  >
                    {post.image && (
                      <div
                        className="border-theme-border/50 relative mb-4 h-44 overflow-hidden rounded-lg border"
                        style={{
                          viewTransitionName: getBlogImageTransitionName(post.slug),
                        }}
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          priority={index === 0}
                        />
                      </div>
                    )}

                    {/* Category badge */}
                    <header className="mb-4 flex items-center justify-between">
                      <span className="bg-theme-primary/10 text-theme-primary border-theme-primary/20 rounded-full border px-3 py-1 font-mono text-xs">
                        {post.category}
                      </span>
                      <div className="text-theme-text/60 flex items-center gap-4 text-xs">
                        <time dateTime={post.date} className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          <span>{post.date}</span>
                        </time>
                        <div
                          className="flex items-center gap-1"
                          aria-label={`Reading time: ${post.readTime}`}
                        >
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </header>

                    {/* Content */}
                    <div className="mb-4 flex-1 space-y-3">
                      <h3 className="text-theme-text group-hover:text-theme-primary text-xl font-semibold tracking-tight transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-theme-text/70 text-sm leading-relaxed">{post.excerpt}</p>
                    </div>

                    {/* Read more */}
                    <div className="group/btn border-theme-border/40 text-theme-text/70 group-hover:border-theme-primary/60 group-hover:text-theme-primary flex h-[44px] w-full items-center justify-between rounded border px-4 transition-all duration-300">
                      <span className="text-sm font-medium">Read article</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
