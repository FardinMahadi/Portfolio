import type { Metadata } from 'next';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { education, experience } from '@/lib/data/experience';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceCard } from '@/components/cards/ExperienceCard';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { PageTransition } from '@/components/effects/PageTransition';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Experience',
  description:
    'Full work history and education for Mahadi Hasan Fardin — Frontend Engineer at DevGenit, freelance full-stack developer, and BSc Computer Science student.',
  keywords: ['experience', 'work history', 'DevGenit', 'full stack', 'frontend engineer'],
  canonical: `${siteUrl}/experience`,
});

export default function ExperiencePage() {
  return (
    <PageTransition variant="fade">
      <div className="bg-canvas relative flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="relative flex-1 pt-16">
          {/* Page header */}
          <section className="relative overflow-hidden py-20">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 0% 40%, color-mix(in srgb, var(--mag-050) 12%, transparent), transparent)',
              }}
              aria-hidden="true"
            />
            <div className="relative container mx-auto px-4 md:px-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-mag-500 block h-px" style={{ width: 22 }} aria-hidden="true" />
                <span className="text-n400 font-mono text-[11px] tracking-[0.25em] uppercase">
                  // career
                </span>
              </div>
              <SectionEyebrow number="03" className="mb-4">
                Career
              </SectionEyebrow>
              <SectionHeading accent="built" className="mb-4">
                Where I&apos;ve built.
              </SectionHeading>
              <p className="text-n500 max-w-xl text-base leading-relaxed">
                A focused track record — remote-first, impact-driven, and always shipping.
              </p>
            </div>
          </section>

          {/* Main content */}
          <section className="py-12">
            <div className="container mx-auto px-4 md:px-10">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_22rem]">
                {/* Work experience */}
                <div>
                  <h2 className="text-n400 mb-8 font-mono text-[0.7rem] tracking-widest uppercase">
                    Work Experience
                  </h2>
                  {experience.map((entry, i) => (
                    <ExperienceCard
                      key={`${entry.company}-${entry.startDate}`}
                      entry={entry}
                      isLast={i === experience.length - 1}
                    />
                  ))}
                </div>

                {/* Education */}
                <aside>
                  <h2 className="text-n400 mb-8 font-mono text-[0.7rem] tracking-widest uppercase">
                    Education
                  </h2>
                  {education.map((edu, i) => {
                    const start = new Date(edu.startDate).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    });
                    const end =
                      edu.endDate === 'present'
                        ? 'Present'
                        : new Date(edu.endDate).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                          });
                    return (
                      <div key={i} className="relative flex gap-5">
                        <div className="flex flex-col items-center">
                          <div className="border-n300 bg-canvas mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2" />
                          {i < education.length - 1 && <div className="bg-n200 w-px flex-1" />}
                        </div>
                        <div
                          className={`flex flex-col gap-2 ${i < education.length - 1 ? 'pb-8' : ''}`}
                        >
                          <span className="font-display text-n900 text-base font-bold">
                            {edu.institution}
                          </span>
                          <span className="text-mag-500 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
                            {edu.degree} · {edu.field}
                          </span>
                          <span className="text-n400 font-mono text-xs">
                            {start} — {end}
                          </span>
                          {edu.highlights && (
                            <ul className="mt-1 flex flex-col gap-1">
                              {edu.highlights.map((h, j) => (
                                <li key={j} className="text-n500 flex gap-2 text-sm">
                                  <span className="text-n300">▹</span>
                                  {h}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Availability block */}
                  <div
                    className="mt-8 rounded-sm px-5 py-4 font-mono text-sm"
                    style={{
                      background: 'color-mix(in srgb, var(--mag-500) 6%, var(--canvas-raised))',
                      border: '1px solid color-mix(in srgb, var(--mag-500) 18%, transparent)',
                    }}
                  >
                    <span className="text-n400">$ cat status.txt</span>
                    <br />
                    <span className="text-mag-500">✓ Open to new opportunities</span>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
