'use client';

import type { CategoryFilterProps } from '@/components/types/blog';

import { blogPosts } from '@/lib/blogData';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map(p => p.category))).sort();
    return ['All', ...unique];
  }, []);

  useEffect(() => {
    if (selectedCategory && scrollContainerRef.current) {
      const btn = scrollContainerRef.current.querySelector(
        `[data-category="${selectedCategory}"]`
      ) as HTMLElement | null;
      btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedCategory]);

  function handleSelect(category: string) {
    const isAll = category === 'All';
    onCategoryChange(isAll ? null : category);
    if (isAll) {
      router.push('/blog');
    } else {
      router.push(`/blog/category/${encodeURIComponent(category)}`);
    }
  }

  return (
    <div className="relative mb-8">
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide -mx-6 flex snap-x gap-3 overflow-x-auto scroll-smooth px-6 pb-2 md:mx-0 md:snap-none md:overflow-visible md:px-0"
        style={{ scrollbarWidth: 'none' }}
      >
        {categories.map(category => {
          const isSelected =
            (category === 'All' && selectedCategory === null) || category === selectedCategory;

          return (
            <motion.button
              key={category}
              data-category={category}
              onClick={() => handleSelect(category)}
              className={cn(
                'relative flex min-h-11 snap-start items-center justify-center rounded-full px-4 py-2 font-mono text-sm whitespace-nowrap transition-all duration-200',
                isSelected
                  ? 'bg-mag-500 border-mag-500 border text-white'
                  : 'bg-canvas-raised border-n200 text-n600 hover:border-mag-500/40 hover:text-mag-500 border'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Filter by ${category}`}
              aria-pressed={isSelected}
            >
              {category}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
