'use client';

import type { HeroSectionProps } from '@/components/types/hero/hero';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

import { cn } from '@/lib/utils';
import { site } from '@/lib/data/site';
import { ensureGsapPlugins } from '@/lib/gsap';
import { HeroCtas } from '@/components/hero/HeroCtas';
import { HeroText } from '@/components/hero/HeroText';
import { HeroPhoto } from '@/components/hero/HeroPhoto';
import { HeroStats } from '@/components/hero/HeroStats';

const PARTICLES: { x: string; y: string; size: number; delay: number; duration: number }[] = [
  { x: '6%', y: '18%', size: 3, delay: 0, duration: 4.2 },
  { x: '15%', y: '72%', size: 2, delay: 0.9, duration: 5.1 },
  { x: '38%', y: '12%', size: 2, delay: 1.5, duration: 6.0 },
  { x: '28%', y: '85%', size: 3, delay: 0.3, duration: 4.6 },
  { x: '48%', y: '55%', size: 2, delay: 2.1, duration: 5.4 },
  { x: '10%', y: '45%', size: 2, delay: 1.2, duration: 3.9 },
];

export function HeroSection({ className }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const photoPanelRef = useRef<HTMLDivElement>(null);
  // Targets only the image layer inside the photo panel — the angled
  // background div is intentionally excluded from scroll movement.
  const photoImageRef = useRef<HTMLDivElement>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const glowLayerRef = useRef<HTMLDivElement>(null);

  // Entrance animation element refs
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  // ─── Cursor glow ─────────────────────────────────────────────────────────
  const rawX = useMotionValue(30);
  const rawY = useMotionValue(50);
  const glowX = useSpring(rawX, { stiffness: 50, damping: 22 });
  const glowY = useSpring(rawY, { stiffness: 50, damping: 22 });

  // Subtle parallax: left column drifts slightly toward the cursor
  const parallaxX = useTransform(glowX, [0, 100], [-6, 6]);
  const parallaxY = useTransform(glowY, [0, 100], [-4, 4]);

  const glowBg = useMotionTemplate`radial-gradient(700px circle at ${glowX}% ${glowY}%, color-mix(in srgb, var(--mag-500) 10%, transparent), transparent)`;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - rect.left) / rect.width) * 100);
    rawY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  // ─── GSAP ─────────────────────────────────────────────────────────────────
  useLayoutEffect(() => {
    if (prefersReducedMotion) return () => {};

    ensureGsapPlugins();

    const section = sectionRef.current;
    if (!section) return () => {};

    // Guard: all entrance refs must be present
    const entranceTargets = [
      tagRef.current,
      headingRef.current,
      taglineRef.current,
      ctasRef.current,
      statsRef.current,
      statusBarRef.current,
      photoPanelRef.current,
      photoImageRef.current,
    ];
    if (entranceTargets.some(el => !el)) return () => {};

    let media: gsap.MatchMedia | null = null;

    const ctx = gsap.context(() => {
      // ── 1. ENTRANCE ANIMATION (runs once on mount) ──────────────────────
      //
      //  Timeline layout (seconds):
      //   0.00  photo panel slides in from right
      //   0.18  tag badge fades + rises
      //   0.30  heading fades + rises
      //   0.44  tagline fades + rises
      //   0.56  CTAs   fades + rises
      //   0.68  stats  fades + rises → triggers counter-up on complete
      //   0.82  status bar fades + rises

      gsap.set(
        [
          tagRef.current,
          headingRef.current,
          taglineRef.current,
          ctasRef.current,
          statusBarRef.current,
        ],
        { opacity: 0, y: 32, willChange: 'transform, opacity' }
      );
      gsap.set(statsRef.current, { opacity: 0, y: 20, willChange: 'transform, opacity' });
      gsap.set(photoPanelRef.current, { opacity: 0, x: 56, willChange: 'transform, opacity' });

      const entrance = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.08,
      });

      entrance
        // Photo panel wipes in from right
        .to(photoPanelRef.current, { opacity: 1, x: 0, duration: 1.1 }, 0)

        // Left column — staggered cascade
        .to(tagRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.18)
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.65 }, 0.3)
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.55 }, 0.44)
        .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.56)

        // Stats row — fades in, then triggers counter-up
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            onComplete() {
              // Animate every element that carries a [data-stat-target] attribute
              section.querySelectorAll<HTMLElement>('[data-stat-target]').forEach(el => {
                const end = parseInt(el.dataset.statTarget ?? '0', 10);
                const obj = { val: 0 };
                gsap.to(obj, {
                  val: end,
                  duration: 1.25,
                  ease: 'power2.out',
                  onUpdate() {
                    el.textContent = Math.floor(obj.val) + '+';
                  },
                  onComplete() {
                    el.textContent = end + '+';
                  },
                });
              });
            },
          },
          0.68
        )

        // Status bar creeps up last
        .to(statusBarRef.current, { opacity: 1, y: 0, duration: 0.45 }, 0.82);

      // ── 2. SCROLL PARALLAX (existing logic — untouched) ─────────────────
      media = gsap.matchMedia();

      media.add('(min-width: 1024px)', () => {
        if (
          !contentRef.current ||
          !photoImageRef.current ||
          !statusBarRef.current ||
          !ambientRef.current ||
          !glowLayerRef.current
        )
          return;

        gsap.set(
          [
            contentRef.current,
            photoImageRef.current,
            statusBarRef.current,
            ambientRef.current,
            glowLayerRef.current,
          ],
          { willChange: 'transform, opacity' }
        );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.95,
              invalidateOnRefresh: true,
            },
          })
          .to(contentRef.current, { y: -28, opacity: 0.95, ease: 'none' }, 0)
          // Only the image scrolls up — background polygon stays locked
          .to(photoImageRef.current, { y: -72, ease: 'none' }, 0)
          .to(statusBarRef.current, { y: -12, opacity: 0.74, ease: 'none' }, 0)
          .to(ambientRef.current, { opacity: 0.66, ease: 'none' }, 0)
          .to(glowLayerRef.current, { opacity: 0.58, ease: 'none' }, 0);
      });

      media.add('(max-width: 1023px)', () => {
        if (
          !contentRef.current ||
          !statusBarRef.current ||
          !ambientRef.current ||
          !glowLayerRef.current
        )
          return;

        gsap.set(
          [contentRef.current, statusBarRef.current, ambientRef.current, glowLayerRef.current],
          { willChange: 'transform, opacity' }
        );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.75,
              invalidateOnRefresh: true,
            },
          })
          .to(contentRef.current, { y: -12, opacity: 0.985, ease: 'none' }, 0)
          .to(statusBarRef.current, { opacity: 0.88, ease: 'none' }, 0)
          .to(ambientRef.current, { opacity: 0.78, ease: 'none' }, 0)
          .to(glowLayerRef.current, { opacity: 0.72, ease: 'none' }, 0);
      });
    }, section);

    return () => {
      media?.revert();
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  // ─── JSX ──────────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className={cn('bg-canvas relative flex flex-col overflow-hidden', className)}
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
    >
      {/* Static ambient gradient */}
      <div
        ref={ambientRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, color-mix(in srgb, var(--mag-050) 90%, transparent), transparent)',
        }}
      />

      {/* Cursor-following glow */}
      <motion.div
        ref={glowLayerRef}
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBg }}
      />

      {/* Floating ambient particles — left half only */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 overflow-hidden"
        aria-hidden
      >
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="bg-mag-500 absolute rounded-full"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [-14, 14, -14], opacity: [0.15, 0.35, 0.15] }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ── Two-column grid ─────────────────────────────────────────────── */}
      <div className="relative z-10 grid min-h-[calc(100vh-52px)] grid-cols-1 lg:grid-cols-2">
        {/* Left — text content */}
        <div ref={contentRef} className="flex flex-col justify-center px-8 py-20 lg:px-16 xl:px-20">
          {/*
            Each block gets its own ref for independent stagger timing.
            data-hero attributes are optional — the refs are used directly.
          */}

          {/* Tag badge */}
          <div ref={tagRef}>
            {/* If you have a tag/badge component, place it here.
                Otherwise render inline, e.g.: */}
            {/* <HeroTag /> */}
          </div>

          {/* Heading */}
          <div ref={headingRef}>
            <HeroText name={site.name} tagline={site.tagline} />
          </div>

          {/*
            Tagline — wrap whatever element carries the subtitle/description.
            If HeroText already renders the tagline internally, move taglineRef
            onto headingRef and remove this wrapper.
          */}
          <div ref={taglineRef}>
            {/* <p className="mt-4 text-canvas-muted ...">Your tagline here</p> */}
          </div>

          {/* CTAs */}
          <div ref={ctasRef} className="mt-9">
            <HeroCtas />
          </div>

          {/*
            Stats — add data-stat-target="N" to the number elements inside
            HeroStats so the counter-up tween can find them, e.g.:
              <span data-stat-target="30">30+</span>
          */}
          <div ref={statsRef} className="mt-8">
            <HeroStats stats={site.stats.map(s => ({ ...s, suffix: s.suffix || undefined }))} />
          </div>
        </div>

        {/* Right — dark photo panel (desktop only) */}
        <div ref={photoPanelRef} className="relative hidden overflow-hidden lg:block">
          {/* Angled background — intentionally static, never moved */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(160deg, var(--mag-800) 0%, var(--canvas-dark) 65%)',
              clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          />
          {/* Image layer — GSAP scrolls this, Framer Motion handles cursor parallax */}
          <motion.div
            ref={photoImageRef}
            className="absolute inset-0"
            style={{ x: parallaxX, y: parallaxY }}
          >
            <HeroPhoto
              src="/images/avatar/fardin-mahadi-no-bg.png"
              alt={`${site.name} — Full Stack Engineer`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
