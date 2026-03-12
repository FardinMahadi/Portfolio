'use client';

import type { ProjectSlideProps, ProjectsSectionProps } from '@/components/types/sections/projects';
import { Badge } from '@/components/ui/Badge';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { featuredProjects, projects } from '@/lib/data/projects';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';

// ─── Slide: Intro ────────────────────────────────────────────────────────────

function IntroSlide() {
  return (
    <div
      className="flex h-full w-[85vw] max-w-3xl shrink-0 flex-col items-start justify-center gap-8 pr-16"
      aria-hidden="false"
    >
      {/* Eyebrow line */}
      <div className="flex items-center gap-3">
        <span
          className="block h-px w-6"
          style={{ background: 'var(--mag-500)' }}
          aria-hidden="true"
        />
        <span className="text-n400 font-mono text-[11px] tracking-[0.25em] uppercase">
          {'// 02 · projects'}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <SectionEyebrow number="02">Projects</SectionEyebrow>
        <SectionHeading accent="Work">Featured Work</SectionHeading>
        <p className="text-n500 max-w-sm text-base leading-relaxed">
          Every project is a decision log — what the problem was, what trade-off I made, and what
          shipped.
        </p>
      </div>

      {/* Scroll hint */}
      <div className="text-n300 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase">
        <span>Scroll to explore</span>
        <svg
          width="24"
          height="10"
          viewBox="0 0 24 10"
          fill="none"
          aria-hidden="true"
          className="scroll-hint-arrow"
        >
          <path
            d="M0 5h22M17 1l5 4-5 4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

// ─── Slide: Single Project ────────────────────────────────────────────────────

function ProjectSlide({ project, index, total }: ProjectSlideProps) {
  const {
    slug,
    title,
    shortDesc,
    problem,
    decision,
    result,
    role,
    company,
    stack,
    liveUrl,
    codeUrl,
    thumbnail,
  } = project;

  const num = String(index + 1).padStart(2, '0');
  const VISIBLE_TAGS = 5;
  const visibleStack = stack.slice(0, VISIBLE_TAGS);
  const overflow = stack.length - VISIBLE_TAGS;

  return (
    <article
      className="project-slide relative flex h-full w-[90vw] max-w-5xl shrink-0 items-center gap-0 overflow-hidden rounded-sm"
      style={{
        background: 'var(--canvas-raised)',
        border: '1px solid var(--n200)',
        boxShadow: 'var(--sh-md)',
      }}
    >
      {/* Left magenta accent bar */}
      <div
        className="accent-bar absolute inset-y-0 left-0 z-10 w-[3px]"
        style={{
          background: 'var(--mag-500)',
          transformOrigin: 'top',
          transform: 'scaleY(0)',
        }}
        aria-hidden="true"
      />

      {/* ── Image panel ── */}
      <Link
        href={`/projects/${slug}`}
        className="group relative h-full w-[55%] shrink-0 overflow-hidden bg-[#080612] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mag-500"
        aria-label={`View ${title} case study`}
        tabIndex={0}
      >
        {/* Browser chrome */}
        <div
          className="absolute top-0 right-0 left-0 z-10 flex h-7 items-center gap-2 px-3"
          style={{ background: 'rgba(8, 6, 18, 0.96)' }}
          aria-hidden="true"
        >
          <div className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
          </div>
          {liveUrl && (
            <div className="mx-auto max-w-[55%] truncate rounded-full bg-white/10 px-3 py-0.5 text-center font-mono text-[0.6rem] text-white/40">
              {liveUrl.replace(/^https?:\/\//, '')}
            </div>
          )}
        </div>

        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover object-top opacity-85 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 55vw"
        />

        {/* Edge fade toward content */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, transparent 55%, color-mix(in srgb, var(--canvas-raised) 30%, transparent))',
          }}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'color-mix(in srgb, var(--mag-500) 14%, transparent)' }}
        >
          <span className="rounded-sm border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-[0.65rem] font-medium tracking-[0.15em] text-white uppercase backdrop-blur-sm">
            View Case Study →
          </span>
        </div>
      </Link>

      {/* ── Content panel ── */}
      <div className="slide-content flex h-full w-[45%] flex-col justify-center gap-5 p-8 xl:p-10">
        {/* Number + counter */}
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-[0.65rem] font-bold tracking-[0.25em]"
            style={{ color: 'var(--mag-500)' }}
          >
            #{num}
          </span>
          <span
            className="h-px flex-1"
            style={{ background: 'var(--n200)', maxWidth: '2rem' }}
            aria-hidden="true"
          />
          <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
            {index + 1} of {total}
          </span>
        </div>

        {/* Title + short desc */}
        <div>
          <h3 className="font-display text-n900 text-2xl font-extrabold tracking-tight xl:text-3xl">
            {title}
          </h3>
          <p className="text-n500 mt-1 text-sm leading-relaxed">{shortDesc}</p>
        </div>

        {/* Role / company */}
        <p className="text-n400 font-mono text-[0.65rem] tracking-[0.15em] uppercase">
          {role}
          {company && (
            <>
              <span className="text-n300 mx-1.5">·</span>
              <span style={{ color: 'var(--teal-600)' }}>{company}</span>
            </>
          )}
        </p>

        {/* PDR */}
        <dl className="flex flex-col gap-2">
          {(
            [
              { label: 'Problem', value: problem },
              { label: 'Decision', value: decision },
              { label: 'Result', value: result },
            ] as const
          ).map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[5rem_1fr] items-start gap-2">
              <dt
                className="font-mono text-[0.65rem] font-medium tracking-[0.15em] uppercase"
                style={{ color: 'var(--mag-500)' }}
              >
                {label}
              </dt>
              <dd className="text-n600 text-xs leading-relaxed">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5">
          {visibleStack.map(tech => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
          {overflow > 0 && <Badge variant="neutral">+{overflow} more</Badge>}
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-1.5 rounded-sm px-4 py-2 font-display text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px active:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, var(--mag-700), var(--mag-500))',
              boxShadow: 'var(--sh-mag)',
            }}
          >
            View Case Study
            <ArrowRight size={14} aria-hidden="true" />
          </Link>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-n200 text-n600 inline-flex items-center gap-1.5 rounded-sm border bg-transparent px-4 py-2 font-display text-sm font-semibold transition-all duration-200 hover:border-teal-400 hover:text-teal-500"
            >
              Live Demo
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}

          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-n200 text-n600 inline-flex items-center gap-1.5 rounded-sm border bg-transparent px-4 py-2 font-display text-sm font-semibold transition-all duration-200 hover:border-n400 hover:text-n900"
            >
              <Github size={14} aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Slide: View All CTA ─────────────────────────────────────────────────────

function ViewAllSlide() {
  return (
    <div className="flex h-full w-[60vw] max-w-xl shrink-0 flex-col items-start justify-center gap-6 pl-16">
      {/* Background count texture */}
      <span
        className="pointer-events-none select-none font-display text-[10rem] font-extrabold leading-none tracking-tighter xl:text-[14rem]"
        style={{ color: 'var(--n100)', lineHeight: 1 }}
        aria-hidden="true"
      >
        {String(projects.length).padStart(2, '0')}
      </span>

      <div className="-mt-6 flex flex-col gap-4">
        <p className="text-n500 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
          projects shipped
        </p>

        <Link
          href="/projects"
          className="font-display inline-flex items-center gap-2 text-lg font-bold underline-offset-4 transition-all duration-200 hover:gap-4 hover:underline"
          style={{ color: 'var(--mag-500)' }}
        >
          View All Projects
          <ArrowRight size={18} aria-hidden="true" />
        </Link>

        <span
          className="border-n200 bg-n100 text-n500 self-start rounded-sm border px-2 py-0.5 font-mono text-[10px]"
        >
          {projects.length}+ shipped
        </span>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function ProjectsSection({ className }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!section || !outer || !track) return;

    const ctx = gsap.context(() => {
      // ── 1. Calculate how far the track needs to scroll horizontally ──
      const getScrollDistance = () => track.scrollWidth - outer.offsetWidth;

      // ── 2. Main horizontal scrub tween ──
      const mainTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: self => {
            // Progress bar
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
            // Slide counter — which project slide are we on?
            if (counterRef.current) {
              const total = featuredProjects.length;
              // progress 0 = intro, progress 1 = viewAll
              const slideProgress = (self.progress * (total + 2) - 1) / total;
              const current = Math.min(total, Math.max(1, Math.ceil(slideProgress * total)));
              counterRef.current.textContent =
                slideProgress < 0 ? '··' : `${String(current).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
            }
          },
        },
      });

      // ── 3. Per-slide accent bar + content reveal ──
      const slides = track.querySelectorAll<HTMLElement>('.project-slide');
      slides.forEach(slide => {
        const accentBar = slide.querySelector<HTMLElement>('.accent-bar');
        const content = slide.querySelector<HTMLElement>('.slide-content');

        if (accentBar) {
          gsap.to(accentBar, {
            scaleY: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: slide,
              containerAnimation: mainTween,
              start: 'left 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: slide,
                containerAnimation: mainTween,
                start: 'left 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      // ── 4. Scroll hint arrow loop ──
      gsap.to('.scroll-hint-arrow', {
        x: 6,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: 'power1.inOut',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={cn('relative bg-canvas', className)}
      aria-label="Featured projects"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, color-mix(in srgb, var(--mag-050) 10%, transparent), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Overflow clip wrapper — GSAP pins the section; this clips the track */}
      <div ref={outerRef} className="relative h-screen overflow-hidden">
        {/* Counter overlay */}
        <div
          className="pointer-events-none absolute top-6 right-8 z-20 flex items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-n300 font-mono text-[0.65rem] tracking-[0.2em]">project</span>
          <span
            ref={counterRef}
            className="text-n500 font-mono text-[0.65rem] font-bold tabular-nums tracking-[0.2em]"
          >
            ··
          </span>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          className="flex h-full items-center gap-8 px-[8vw] will-change-transform"
        >
          <IntroSlide />
          {featuredProjects.map((project, i) => (
            <ProjectSlide
              key={project.slug}
              project={project}
              index={i}
              total={featuredProjects.length}
            />
          ))}
          <ViewAllSlide />
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 transition-none"
          ref={progressBarRef}
          style={{ background: 'var(--mag-500)' }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
