'use client';

import AboutSection from '@/components/about/AboutSection';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import BlogSection from '@/components/LandingPage/blog/BlogSection';
import ContactSection from '@/components/LandingPage/contact/ContactSection';
import Footer from '@/components/LandingPage/Footer/Footer';
import HeroSection from '@/components/LandingPage/hero/HeroSection';
import ProjectsSection from '@/components/LandingPage/projects/ProjectsSection';
import Navbar from '@/components/shared/navigation/Navigation';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';

export default function V011Page() {
  return (
    <ErrorBoundary>
      {/* Archive notice banner */}
      <div
        className="sticky top-0 z-999 flex items-center justify-between gap-4 px-4 py-2 text-xs"
        style={{
          background: 'var(--mag-900)',
          borderBottom: '1px solid color-mix(in srgb, var(--mag-500) 30%, transparent)',
          fontFamily: 'var(--font-dm-mono, monospace)',
          color: 'rgba(255,255,255,0.65)',
        }}
      >
        <span>
          <span style={{ color: 'var(--mag-400)' }}>▹ </span>
          archive<span style={{ color: 'var(--mag-400)' }}>/</span>v0.1.1
          <span className="ml-3 opacity-50">— read-only snapshot · March 2026</span>
        </span>
        <Link
          href="/"
          className="shrink-0 rounded px-2 py-0.5 text-xs transition-colors hover:text-white"
          style={{
            border: '1px solid color-mix(in srgb, var(--mag-500) 40%, transparent)',
            color: 'var(--mag-300)',
          }}
        >
          ← View current site
        </Link>
      </div>

      <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground focus:ring-primary/50 focus:ring-offset-background sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          Skip to main content
        </a>
        <header role="banner">
          <Navbar />
        </header>
        <main id="main-content" role="main">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}
