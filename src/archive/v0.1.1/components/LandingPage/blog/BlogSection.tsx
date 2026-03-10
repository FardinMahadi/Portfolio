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
          <p className="font-mono text-sm text-primary mb-2">{"// blog"}</p>
          <h2 className="text-2xl md:text-3xl font-bold">Latest Thoughts</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 shadow-sm"
              >
                <span className="text-2xl mb-3 block">{emoji}</span>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read article <ArrowRight size={12} />
                </span>
              </MotionLink>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
