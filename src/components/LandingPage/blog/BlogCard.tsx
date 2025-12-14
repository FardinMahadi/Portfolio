'use client';

import type { BlogCardProps } from '@/components/types/blog';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { generateArticleSchema } from '@/lib/seo';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getBlogCardTransitionName } from '@/lib/transitions';

import { Button } from '../../ui/button';
import { GlassmorphismPanel } from '../../effects/GlassmorphismPanel';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export function BlogCard({ post, index, isInView }: BlogCardProps) {
  const articleSchema = generateArticleSchema(
    post.title,
    post.excerpt,
    post.date,
    post.date,
    'Mahadi Hasan Fardin',
    `${siteUrl}/og-image.png`
  );

  return (
    <>
      <script
        key={`article-${post.title}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <motion.article
        key={post.title}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <Link
          href={post.slug ? `/blog/${post.slug}` : '#'}
          className="block h-full"
          aria-label={`Read article: ${post.title}`}
        >
          <GlassmorphismPanel
            className="flex h-full flex-col p-6"
            hover
            style={{
              viewTransitionName: post.slug ? getBlogCardTransitionName(post.slug) : undefined,
            }}
          >
            <div className="flex h-full cursor-pointer flex-col">
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

              <div className="mb-4 flex-1 space-y-3">
                <h3 className="text-theme-text group-hover:text-theme-primary text-xl font-semibold tracking-tight transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-theme-text/70 text-sm leading-relaxed">{post.excerpt}</p>
              </div>

              <Button
                variant="ghost"
                className="group/btn text-theme-text/70 hover:bg-theme-primary/5 hover:text-theme-primary min-h-[44px] w-full justify-between transition-all duration-300"
              >
                <span>Read article</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </GlassmorphismPanel>
        </Link>
      </motion.article>
    </>
  );
}
