import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PageTransition } from '@/components/effects/PageTransition';
import { CaseStudyHero } from '@/components/project/CaseStudyHero';
import { CaseStudyBody } from '@/components/project/CaseStudyBody';
import { ProjectMeta } from '@/components/project/ProjectMeta';
import { projects } from '@/lib/data/projects';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return generateSEOMetadata({
    title: project.title,
    description: project.shortDesc,
    keywords: [...project.stack, project.role, 'case study', 'portfolio'],
    canonical: `${siteUrl}/projects/${slug}`,
    ogImage: project.heroImage,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) notFound();

  return (
    <PageTransition variant="fade">
      <div className="relative flex min-h-screen flex-col bg-canvas">
        <Navbar />
        <main id="main-content" className="relative flex-1 pt-16">
          <div className="container mx-auto px-4 py-12 md:px-10">
            {/* Hero */}
            <CaseStudyHero project={project} />

            {/* Body — two column */}
            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_20rem]">
              {/* Left: narrative */}
              <CaseStudyBody project={project} />

              {/* Right: sticky meta */}
              <ProjectMeta project={project} />
            </div>

            {/* Screenshots */}
            {project.screens && project.screens.length > 0 && (
              <div className="mt-16">
                <div className="mb-6">
                  <span className="text-n400 font-mono text-[0.65rem] tracking-[0.15em] uppercase">
                    {'// screenshots'}
                  </span>
                  <h2 className="font-display text-n900 mt-2 text-2xl font-bold">
                    In the browser.
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.screens.map((src, i) => (
                    <div
                      key={i}
                      className="border-n200 relative overflow-hidden rounded-sm border bg-[#080612]"
                    >
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
                      </div>
                      <div className="relative h-52 w-full sm:h-64">
                        <Image
                          src={src}
                          alt={`${project.title} — screenshot ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="mt-16 border-n200 border-t pt-8">
              <Link
                href="/projects"
                className="text-n500 hover:text-mag-500 font-mono text-sm transition-colors"
              >
                ← Back to all projects
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
