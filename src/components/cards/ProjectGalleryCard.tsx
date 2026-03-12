import type { ProjectGalleryCardProps } from '@/components/types/cards/cards';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

const VISIBLE_TAGS = 4;

export function ProjectGalleryCard({ project, className }: ProjectGalleryCardProps) {
  const { slug, title, shortDesc, stack, category, thumbnail, liveUrl, date } = project;

  const visibleStack = stack.slice(0, VISIBLE_TAGS);
  const overflow = stack.length - VISIBLE_TAGS;

  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <article
      className={cn(
        'group border-n200 bg-canvas-raised hover:border-mag-300 relative flex flex-col overflow-hidden rounded-sm border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-(--sh-mag)',
        className
      )}
    >
      <div
        className="bg-mag-500 absolute inset-y-0 left-0 w-[3px] opacity-30 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-[#080612]">
        {/* Browser chrome dots */}
        <div
          className="absolute top-0 right-0 left-0 z-10 flex h-6 items-center gap-2 px-3"
          style={{ background: 'rgba(8, 6, 18, 0.96)' }}
          aria-hidden="true"
        >
          <div className="flex shrink-0 gap-1">
            <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
            <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
          </div>
        </div>
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-white/20">no preview</span>
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(8,6,18,0.5))',
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Category + date */}
        <div className="flex items-center gap-2">
          {category.slice(0, 2).map(cat => (
            <span
              key={cat}
              className="text-mag-500 font-mono text-[0.6rem] tracking-[0.15em] uppercase"
            >
              {cat}
            </span>
          ))}
          <span className="text-n300 font-mono text-[0.6rem]">· {formatted}</span>
        </div>

        {/* Title + desc */}
        <div>
          <h3 className="font-display text-n900 group-hover:text-mag-500 text-base font-bold transition-colors">
            {title}
          </h3>
          <p className="text-n500 mt-1 line-clamp-2 text-sm leading-relaxed">{shortDesc}</p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {visibleStack.map(tech => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
          {overflow > 0 && <Badge variant="neutral">+{overflow}</Badge>}
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 font-mono text-[0.7rem] font-medium text-white transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, var(--mag-700), var(--mag-500))' }}
          >
            Case Study
            <ArrowRight size={12} />
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-n200 text-n600 hover:border-n400 hover:text-n900 inline-flex items-center gap-1.5 rounded-sm border bg-transparent px-3 py-1.5 font-mono text-[0.7rem] font-medium transition-all"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
