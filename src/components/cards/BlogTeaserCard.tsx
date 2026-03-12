import type { BlogTeaserCardProps } from '@/components/types/cards/cards';

import Link from 'next/link';

import { cn } from '@/lib/utils';

export function BlogTeaserCard({ post, className }: BlogTeaserCardProps) {
  const { slug, title, date, excerpt, category, readTime } = post;

  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'group border-n200 bg-canvas-raised flex flex-col gap-3 rounded-sm border border-l-[3px] p-5',
        'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-(--sh-subtle)',
        className
      )}
      style={{ borderLeftColor: 'var(--mag-500)' }}
    >
      <div className="flex items-center gap-3">
        <span className="text-mag-500 font-mono text-[0.65rem] tracking-[0.15em] uppercase">
          {category}
        </span>
        <span className="text-n400 font-mono text-[0.65rem]">{formatted}</span>
        {readTime && <span className="text-n400 font-mono text-[0.65rem]">{readTime}</span>}
      </div>

      <h3 className="font-display text-n900 group-hover:text-mag-500 text-base font-bold transition-colors">
        {title}
      </h3>

      <p className="text-n500 line-clamp-2 text-sm leading-relaxed">{excerpt}</p>

      <span className="text-mag-500 mt-auto font-mono text-xs font-medium transition-colors">
        Read →
      </span>
    </Link>
  );
}
