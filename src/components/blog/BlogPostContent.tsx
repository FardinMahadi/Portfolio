'use client';

import type { BlogPostContentProps } from '@/components/types/blog';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer } from 'config/animations';
import { ArrowLeft, Calendar, Clock, Home } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getRelatedPosts } from '@/lib/blogData';
import { generateArticleSchema } from '@/lib/seo';
import { getBlogCardTransitionName, getBlogImageTransitionName } from '@/lib/transitions';

import { BlogCard } from './BlogCard';
import { MarkdownRenderer } from './MarkdownRenderer';

export function BlogPostContent({ post }: BlogPostContentProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';
  const publishedTime = new Date(post.date).toISOString();
  const related = getRelatedPosts(post.slug, 3);

  const articleSchema = generateArticleSchema(
    post.title,
    post.excerpt,
    publishedTime,
    publishedTime,
    'Mahadi Hasan Fardin',
    post.image ?? `${siteUrl}/og-image.png`
  );

  return (
    <article className="bg-canvas relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div
        className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full opacity-8 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--mag-500) 24%, transparent), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            asChild
            className="text-n600 hover:text-mag-500 hover:bg-mag-500/5 transition-all"
          >
            <Link href="/blog" aria-label="Back to blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="mb-6">
            <span className="bg-mag-500/10 text-mag-500 border-mag-500/20 rounded-full border px-3 py-1 font-mono text-xs">
              {post.category}
            </span>
          </div>

          <h1 className="text-n900 font-display mb-6 text-4xl leading-tight font-bold md:text-5xl">
            {post.title}
          </h1>

          <div className="text-n500 mb-8 flex flex-wrap items-center gap-4 font-mono text-sm">
            <time dateTime={publishedTime} className="flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {post.date}
            </time>
            <div className="flex items-center gap-2" aria-label={`Reading time: ${post.readTime}`}>
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </div>
          </div>
        </motion.header>

        {post.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-n200 mb-10 overflow-hidden rounded-xl border"
            style={{ viewTransitionName: getBlogCardTransitionName(post.slug) }}
          >
            <div
              className="relative h-72 w-full sm:h-56 lg:h-80"
              style={{ viewTransitionName: getBlogImageTransitionName(post.slug) }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="bg-canvas-raised border-n200 rounded-xl border p-8">
            <MarkdownRenderer content={post.content} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-n200 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
        >
          <Button
            variant="outline"
            asChild
            className="border-n300 text-n700 hover:border-mag-500 hover:text-mag-500 transition-all"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-n300 text-n700 hover:border-mag-500 hover:text-mag-500 transition-all"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
        </motion.div>

        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-mag-500 mb-2 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
              // related
            </div>
            <h2 className="text-n900 font-display mb-8 text-2xl font-bold">
              More in <span className="text-mag-500">{post.category}</span>
            </h2>
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </motion.div>
          </motion.section>
        )}
      </div>
    </article>
  );
}
