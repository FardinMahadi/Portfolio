import type { Metadata } from 'next';

import { Clock, Github, Linkedin, Mail, MapPin } from 'lucide-react';

import { site } from '@/lib/data/site';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PulseDot } from '@/components/ui/PulseDot';
import { ContactForm } from '@/components/contact/ContactForm';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { PageTransition } from '@/components/effects/PageTransition';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact',
  description:
    'Ready to collaborate? Reach out to discuss full-stack web development opportunities, freelance work, or consulting engagements.',
  keywords: [
    'contact',
    'hire',
    'full stack developer',
    'web development',
    'React',
    'Next.js',
    'freelance',
  ],
  canonical: `${siteUrl}/contact`,
});

const INFO = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Location', value: site.location, href: null },
  { icon: Clock, label: 'Response time', value: '< 24 hours', href: null },
] as const;

export default function ContactPage() {
  return (
    <PageTransition variant="fade">
      <div className="bg-canvas min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 pt-32 pb-24">
          {/* Header */}
          <div className="mb-12 flex flex-col gap-3">
            <span className="text-n400 font-mono text-[0.65rem] tracking-[0.12em]">// contact</span>
            <h1 className="font-display text-n900 text-4xl font-bold md:text-5xl">
              Got something to build?
            </h1>
            <p className="text-n500 max-w-xl text-base leading-relaxed">
              I&apos;m available for freelance projects, contract roles, and interesting
              collaborations. Tell me what you&apos;re working on.
            </p>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
            {/* Left — form */}
            <ContactForm />

            {/* Right — info panel */}
            <aside className="flex flex-col gap-6">
              {/* Availability */}
              <div className="border-n200 bg-canvas-raised rounded-sm border p-5">
                <p className="text-mag-500 mb-3 font-mono text-[0.68rem] tracking-[0.15em] uppercase">
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <PulseDot color="teal" />
                  <span className="font-mono text-sm text-teal-600">Available for work</span>
                </div>
                <p className="text-n400 mt-2 text-xs">
                  Open to freelance projects and contract engagements.
                </p>
              </div>

              {/* Contact details */}
              <div className="border-n200 bg-canvas-raised rounded-sm border p-5">
                <p className="text-mag-500 mb-4 font-mono text-[0.68rem] tracking-[0.15em] uppercase">
                  Details
                </p>
                <ul className="flex flex-col gap-3">
                  {INFO.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      <Icon size={14} className="text-n400 mt-0.5 shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-n400 font-mono text-[0.6rem] tracking-[0.12em] uppercase">
                          {label}
                        </span>
                        {href ? (
                          <a
                            href={href}
                            className="text-n700 hover:text-mag-500 text-sm underline-offset-4 hover:underline"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-n700 text-sm">{value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div className="border-n200 bg-canvas-raised rounded-sm border p-5">
                <p className="text-mag-500 mb-4 font-mono text-[0.68rem] tracking-[0.15em] uppercase">
                  Connect
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-n600 hover:text-n900 flex items-center gap-3 text-sm transition-colors"
                  >
                    <Github size={15} className="text-n400" />
                    github.com/FardinMahadi
                  </a>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-n600 hover:text-n900 flex items-center gap-3 text-sm transition-colors"
                  >
                    <Linkedin size={15} className="text-n400" />
                    linkedin.com/in/mahadi-hasan-fardin
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
