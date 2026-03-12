import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/lib/types/project';
import { cn } from '@/lib/utils';
import { Calendar, Clock, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type CaseStudyHeroProps = {
  project: Project;
  className?: string;
};

export function CaseStudyHero({ project, className }: CaseStudyHeroProps) {
  const {
    title,
    shortDesc,
    role,
    company,
    date,
    duration,
    stack,
    liveUrl,
    codeUrl,
    heroImage,
    category,
  } = project;

  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={cn('relative overflow-hidden pt-12 pb-0', className)}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--mag-500) 8%, transparent), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative">
        {/* Eyebrow */}
        <div className="mb-4 flex items-center gap-3">
          <Link
            href="/projects"
            className="text-n400 hover:text-mag-500 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors"
          >
            ← All Projects
          </Link>
          <span className="text-n300" aria-hidden="true">
            /
          </span>
          <span className="text-n500 font-mono text-[11px] tracking-[0.2em] uppercase">
            Case Study
          </span>
        </div>

        {/* Category chips */}
        <div className="mb-4 flex flex-wrap gap-2">
          {category.map(cat => (
            <Badge key={cat} variant="violet">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display text-n900 mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {/* Tagline */}
        <p className="text-n500 mb-8 max-w-2xl text-lg leading-relaxed">{shortDesc}</p>

        {/* Meta strip */}
        <div className="border-n200 mb-8 flex flex-wrap gap-6 border-y py-4">
          <div>
            <span className="text-n400 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
              Role
            </span>
            <span className="text-n900 mt-0.5 block font-mono text-sm font-medium">{role}</span>
          </div>
          {company && (
            <div>
              <span className="text-n400 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
                Company
              </span>
              <span className="mt-0.5 block font-mono text-sm font-medium text-teal-600">
                {company}
              </span>
            </div>
          )}
          <div className="flex items-start gap-1.5">
            <Calendar size={12} className="text-n400 mt-1.5 shrink-0" />
            <div>
              <span className="text-n400 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
                Shipped
              </span>
              <span className="text-n900 mt-0.5 block font-mono text-sm">{formatted}</span>
            </div>
          </div>
          {duration && (
            <div className="flex items-start gap-1.5">
              <Clock size={12} className="text-n400 mt-1.5 shrink-0" />
              <div>
                <span className="text-n400 block font-mono text-[0.6rem] tracking-[0.15em] uppercase">
                  Duration
                </span>
                <span className="text-n900 mt-0.5 block font-mono text-sm">{duration}</span>
              </div>
            </div>
          )}
        </div>

        {/* Stack */}
        <div className="mb-8 flex flex-wrap gap-1.5">
          {stack.map(tech => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mb-10 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold text-white shadow-(--sh-mag) transition-all hover:-translate-y-px hover:brightness-110 active:translate-y-0"
              style={{ background: 'linear-gradient(135deg, var(--mag-700), var(--mag-500))' }}
            >
              <ExternalLink size={14} />
              Live Site
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-n200 text-n600 hover:border-n400 hover:text-n900 font-display inline-flex items-center gap-2 rounded-sm border px-5 py-2.5 text-sm font-semibold transition-all"
            >
              <Github size={14} />
              Source Code
            </a>
          )}
        </div>

        {/* Hero image */}
        {heroImage && (
          <div className="relative h-64 w-full overflow-hidden rounded-sm bg-[#080612] sm:h-80 md:h-[26rem]">
            <div
              className="absolute top-0 right-0 left-0 z-10 flex h-8 items-center gap-2 px-3"
              style={{ background: 'rgba(8, 6, 18, 0.96)' }}
              aria-hidden="true"
            >
              <div className="flex shrink-0 gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              </div>
              {liveUrl && (
                <div className="mx-auto max-w-[55%] truncate rounded-full bg-white/10 px-3 py-0.5 text-center font-mono text-[0.58rem] text-white/40">
                  {liveUrl.replace(/^https?:\/\//, '')}
                </div>
              )}
            </div>
            <Image
              src={heroImage}
              alt={`${title} — hero screenshot`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
