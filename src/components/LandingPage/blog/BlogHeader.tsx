'use client';

import { motion } from 'framer-motion';

export function BlogHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="text-theme-accent mb-6 flex items-center gap-3">
        <span className="font-mono" aria-hidden="true">
          {'</'}
        </span>
        <h2 className="text-3xl font-bold">Latest Articles</h2>
        <span className="font-mono" aria-hidden="true">
          {'>'}
        </span>
      </div>
      <p className="text-theme-text/75 max-w-2xl text-lg">
        Discover articles about web development, programming tips, career insights, and practical
        lessons from real-world projects.
      </p>
    </motion.header>
  );
}
