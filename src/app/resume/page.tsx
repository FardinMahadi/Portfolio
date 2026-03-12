import { PageTransition } from '@/components/effects/PageTransition';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Download, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Mahadi Hasan Fardin',
  description:
    'Download the resume of Mahadi Hasan Fardin — Full Stack Engineer · MERN · Next.js · AI Integration.',
};

const CV_URL = '/docs/mahadi-hasan-fardin-cv.pdf';

export default function ResumePage() {
  return (
    <PageTransition variant="fade">
      <div className="bg-canvas relative flex min-h-screen flex-col">
        <Navbar />
        <main id="main-content" className="relative flex-1 pt-16">
          <div className="container mx-auto px-4 py-20 md:px-10">
            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-mag-500 block h-px" style={{ width: 22 }} aria-hidden="true" />
              <span className="text-n400 font-mono text-[11px] tracking-[0.25em] uppercase">
                {'// resume'}
              </span>
            </div>

            <SectionHeading accent="CV" className="mb-3">
              Download CV
            </SectionHeading>
            <p className="text-n500 mb-10 max-w-xl text-base leading-relaxed">
              A single-page overview of my experience, projects, and tech stack — ready to share.
            </p>

            {/* Download card */}
            <div
              className="border-n200 bg-canvas-raised mb-10 flex flex-col gap-6 rounded-sm border p-8 sm:flex-row sm:items-center sm:justify-between"
              style={{ borderLeftWidth: 3, borderLeftColor: 'var(--mag-500)' }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm"
                  style={{ background: 'color-mix(in srgb, var(--mag-500) 10%, transparent)' }}
                >
                  <FileText size={22} style={{ color: 'var(--mag-500)' }} />
                </div>
                <div>
                  <p className="font-display text-n900 text-base font-bold">
                    Mahadi_Hasan_Fardin_CV.pdf
                  </p>
                  <p className="text-n400 font-mono text-xs">
                    Full Stack Engineer · MERN · Next.js · AI Integration
                  </p>
                </div>
              </div>
              <a
                href={CV_URL}
                download="Mahadi_Hasan_Fardin_CV.pdf"
                className="font-display inline-flex shrink-0 items-center gap-2 rounded-sm px-6 py-2.5 text-sm font-semibold text-white shadow-(--sh-mag) transition-all hover:-translate-y-px hover:brightness-110 active:translate-y-0"
                style={{ background: 'linear-gradient(135deg, var(--mag-700), var(--mag-500))' }}
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>

            {/* PDF Preview */}
            <div className="border-n200 overflow-hidden rounded-sm border">
              <div
                className="flex h-10 items-center gap-2 border-b px-4"
                style={{ background: 'var(--canvas-sunken)', borderColor: 'var(--n200)' }}
              >
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-n400 font-mono text-[0.62rem]">
                  mahadi-hasan-fardin-cv.pdf
                </span>
              </div>
              <iframe
                src={CV_URL}
                title="Mahadi Hasan Fardin — CV Preview"
                className="h-[80vh] w-full border-0"
                aria-label="Resume PDF preview"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
