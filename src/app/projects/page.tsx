import { PageTransition } from '@/components/effects/PageTransition';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/lib/data/projects';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Projects',
  description:
    'A gallery of full-stack, frontend, and AI-integrated projects built by Mahadi Hasan Fardin — from conference platforms to AI-powered learning tools.',
  keywords: ['projects', 'portfolio', 'Next.js', 'React', 'full stack', 'web development'],
  canonical: `${siteUrl}/projects`,
});

export default function ProjectsPage() {
  return (
    <PageTransition variant="fade">
      <div className="bg-canvas relative flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="relative flex-1 pt-24">
          <div className="container mx-auto px-4 py-16 md:px-10">
            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-mag-500 block h-px" style={{ width: 22 }} aria-hidden="true" />
              <span className="text-n400 font-mono text-[11px] tracking-[0.25em] uppercase">
                {'// all · projects'}
              </span>
            </div>

            <div className="mb-4">
              <SectionEyebrow number="⋯">All Work</SectionEyebrow>
            </div>

            <div className="mb-4">
              <SectionHeading accent="Work">All Work</SectionHeading>
            </div>

            <p className="text-n500 mb-12 max-w-2xl text-base leading-relaxed">
              Every project is a decision log — what the problem was, what trade-off I made, and
              what shipped. Filter by discipline or browse everything.
            </p>

            <ProjectsGallery projects={projects} />
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
