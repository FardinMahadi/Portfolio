'use client';

import type { BlogCardProps } from '@/components/types/blog';

import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { fadeUp } from 'config/animations';

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      transition={{ delay: index * 0.06 }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full" aria-label={`Read: ${post.title}`}>
        <div
          className={cn(
            'relative flex h-full flex-col overflow-hidden rounded-lg border p-6 transition-all duration-300',
            'bg-canvas-raised border-n200',
            'hover:border-mag-500/40 hover:shadow-(--sh-md)'
          )}
        >
          {/* Hover accent bar */}
          <motion.div
            className="bg-mag-500 absolute left-0 top-0 h-full w-0.5 origin-top rounded-r"
            initial={{ scaleY: 0 }}
            whileHover={{ scaleY: 1 }}
            transition={{ duration: 0.2 }}
          />

          {/* Eyebrow */}
          <div className="text-mag-500 mb-3 font-mono text-[0.6rem] tracking-[0.12em] uppercase">
            {'// '}{post.category}
          </div>

          {/* Title */}
          <h3 className="text-n900 group-hover:text-mag-500 font-display mb-3 text-lg font-bold leading-snug tracking-tight transition-colors duration-200">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-n600 mb-4 flex-1 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="border-n200 text-n400 flex items-center justify-between border-t pt-4 font-mono text-xs">
            <time dateTime={post.date} className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              {post.date}
            </time>
            <div className="flex items-center gap-1.5" aria-label={`Reading time: ${post.readTime}`}>
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readTime}
            </div>
          </div>

          {/* CTA */}
          <div className="text-n500 group-hover:text-mag-500 mt-4 flex items-center gap-2 font-mono text-xs transition-colors duration-200">
            <span>▹ Read article</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
