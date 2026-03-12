'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { blogPosts } from '@/lib/blogData';

const MotionLink = motion.create(Link);

const BlogSection = () => {
  // Limit to 3 most recent blog posts for the landing page
  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary mb-2 font-mono text-sm">// blog</p>
          <h2 className="text-2xl font-bold md:text-3xl">Latest Thoughts</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {displayedPosts.map((post, i) => {
            // Extract emoji from title if it exists, otherwise use a default
            const emojiMatch = post.title.match(/^(\p{Emoji_Presentation}|\p{Emoji})/u);
            const emoji = emojiMatch ? emojiMatch[0] : '📝';
            const title = post.title.replace(/^(\p{Emoji_Presentation}|\p{Emoji})\s*/u, '');

            return (
              <MotionLink
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card border-border hover:border-primary/30 rounded-xl border p-6 shadow-sm transition-all duration-300"
              >
                <span className="mb-3 block text-2xl">{emoji}</span>
                <h3 className="group-hover:text-primary mb-2 text-sm leading-snug font-semibold transition-colors">
                  {title}
                </h3>
                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">{post.excerpt}</p>
                <span className="text-primary flex items-center gap-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                  Read article <ArrowRight size={12} />
                </span>
              </MotionLink>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-primary text-sm transition-colors"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
