import { PageTransition } from '@/components/effects/PageTransition';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Badge } from '@/components/ui/Badge';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/lib/data/skills';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About',
  description:
    'Mahadi Hasan Fardin — Full Stack Engineer. Learn about my background, approach to building products, and the technology I reach for.',
  keywords: ['about', 'full stack engineer', 'React', 'Next.js', 'Bangladesh', 'developer'],
  canonical: `${siteUrl}/about`,
});

const VALUES = [
  {
    label: 'Ship it.',
    body: 'Momentum beats perfection. I bias toward deployed and iterable over planned and theorized.',
  },
  {
    label: 'Read the room.',
    body: 'Great engineering is invisible. I build for the person using the product, not for the engineer reading the code.',
  },
  {
    label: 'Own the whole stack.',
    body: "From Figma frames to database migrations. I'm most useful when I can hold the full product context in my head.",
  },
] as const;

const PROCESS = [
  {
    step: '01',
    label: 'Understand',
    desc: 'Before a line of code, I map the problem — user intent, business constraint, and technical boundary.',
  },
  {
    step: '02',
    label: 'Design',
    desc: 'Component architecture first. Data shapes drive UI shapes. I sketch in Figma, prototype in code.',
  },
  {
    step: '03',
    label: 'Build',
    desc: 'Typed, tested, documented. I write code that the next engineer (often future me) can understand at 11pm.',
  },
  {
    step: '04',
    label: 'Ship',
    desc: 'CI/CD, Core Web Vitals audit, accessibility pass. Nothing leaves without being production-ready.',
  },
] as const;

export default function AboutPage() {
  return (
    <PageTransition variant="fade">
      <div className="bg-canvas relative flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="relative flex-1 pt-16">
          {/* Hero */}
          <section className="relative overflow-hidden py-20">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in srgb, var(--mag-500) 6%, transparent), transparent)',
              }}
              aria-hidden="true"
            />
            <div className="relative container mx-auto px-4 md:px-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-mag-500 block h-px" style={{ width: 22 }} aria-hidden="true" />
                <span className="text-n400 font-mono text-[11px] tracking-[0.25em] uppercase">
                  {'// about'}
                </span>
              </div>
              <SectionEyebrow number="01" className="mb-4">
                Who I Am
              </SectionEyebrow>
              <SectionHeading accent="build" className="mb-6">
                I design, build, and ship.
              </SectionHeading>
              <div className="max-w-3xl space-y-5">
                <p className="text-n600 text-lg leading-relaxed">
                  Full-stack engineer based in Dhaka, Bangladesh. I build resilient, accessible
                  digital products with React, Next.js, and expressive motion design. I started in
                  late 2023 and have since shipped work for clients across education, events, and
                  SaaS verticals.
                </p>
                <p className="text-n500 text-base leading-relaxed">
                  My professional thread runs from freelance product work to leading frontend
                  architecture at DevGenit — where I shipped the ACS Bangladesh Youth Summit
                  platform that ranked #1 on Google within days of launch.
                </p>
                <p className="text-n500 text-base leading-relaxed">
                  I&apos;m currently pursuing a BSc in Computer Science &amp; Engineering at Comilla
                  University while building full-time. I write about what I&apos;m learning at{' '}
                  <Link
                    href="/blog"
                    className="text-mag-500 hover:text-mag-400 underline underline-offset-2 transition-colors"
                  >
                    the blog
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="bg-canvas-sunken py-20">
            <div className="container mx-auto px-4 md:px-10">
              <div className="mb-10">
                <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em]">
                  {'// how_i_work'}
                </span>
                <SectionHeading accent="believe" className="mt-3">
                  What I believe.
                </SectionHeading>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {VALUES.map(({ label, body }) => (
                  <div
                    key={label}
                    className="border-n200 bg-canvas-raised rounded-sm border p-6"
                    style={{ borderLeftWidth: 3, borderLeftColor: 'var(--mag-500)' }}
                  >
                    <h3 className="font-display text-n900 mb-3 text-lg font-bold">{label}</h3>
                    <p className="text-n500 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20">
            <div className="container mx-auto px-4 md:px-10">
              <div className="mb-10">
                <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em]">
                  {'// process'}
                </span>
                <SectionHeading accent="ship" className="mt-3">
                  How I ship.
                </SectionHeading>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {PROCESS.map(({ step, label, desc }) => (
                  <div key={step} className="flex flex-col gap-3">
                    <span
                      className="font-mono text-4xl leading-none font-bold"
                      style={{ color: 'color-mix(in srgb, var(--mag-500) 30%, transparent)' }}
                    >
                      {step}
                    </span>
                    <h3 className="font-display text-n900 text-lg font-bold">{label}</h3>
                    <p className="text-n500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-canvas-sunken py-20">
            <div className="container mx-auto px-4 md:px-10">
              <div className="mb-10">
                <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em]">
                  {'// tech_stack'}
                </span>
                <SectionHeading accent="reach" className="mt-3">
                  What I reach for.
                </SectionHeading>
                <p className="text-n500 mt-3 max-w-xl text-base leading-relaxed">
                  Chosen for shipping speed, type safety, and long-term maintainability.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skills.map(category => (
                  <div
                    key={category.label}
                    className="border-n200 bg-canvas-raised rounded-sm border p-5"
                  >
                    <h3 className="text-mag-500 mb-4 font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase">
                      {category.label}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map(skill => (
                        <Badge key={skill.name} variant="neutral">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20">
            <div className="container mx-auto px-4 md:px-10">
              <div
                className="rounded-sm p-8 text-center"
                style={{
                  background: 'color-mix(in srgb, var(--mag-500) 6%, var(--canvas-raised))',
                }}
              >
                <span className="text-n400 block font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                  $ cat availability.txt
                </span>
                <p className="text-mag-500 mt-2 text-lg font-semibold">
                  ✓ Available for collaborative builds &amp; speaking
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href="/contact"
                    className="font-display inline-flex items-center gap-2 rounded-sm px-6 py-2.5 text-sm font-semibold text-white shadow-(--sh-mag) transition-all hover:brightness-110"
                    style={{
                      background: 'linear-gradient(135deg, var(--mag-700), var(--mag-500))',
                    }}
                  >
                    Get In Touch
                  </a>
                  <a
                    href="/docs/mahadi-hasan-fardin-cv.pdf"
                    download="Mahadi_Hasan_Fardin_CV.pdf"
                    className="border-n200 text-n600 hover:border-n400 hover:text-n900 font-display inline-flex items-center gap-2 rounded-sm border px-6 py-2.5 text-sm font-semibold transition-all"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
