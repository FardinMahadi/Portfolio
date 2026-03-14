'use client';

import { useEffect, useState } from 'react';

import { ErrorBoundary } from '@/archive/v1/components/ErrorBoundary';
import { VersionBanner } from '@/archive/v1/components/VersionBanner';
import { Footer } from '@/archive/v1/components/LandingPage/Footer/Footer';
import { Navigation } from '@/archive/v1/components/shared/navigation/Navigation';
import { BlogSection } from '@/archive/v1/components/LandingPage/blog/BlogSection';
import { HeroSection } from '@/archive/v1/components/LandingPage/hero/HeroSection';
import { ContactSection } from '@/archive/v1/components/LandingPage/contact/ContactSection';
import { IntroSummary } from '@/archive/v1/components/LandingPage/IntroSummary/IntroSummary';
import { ProjectsSection } from '@/archive/v1/components/LandingPage/projects/ProjectsSection';

export function V1App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add('dark');

    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-expect-error - legacy browser compat
          navigator.msMaxTouchPoints > 0
      );
    };
    checkTouchDevice();

    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <ErrorBoundary>
      <VersionBanner />
      <div
        className={`min-h-screen overflow-x-hidden bg-[#0a0e1a] text-slate-100 ${
          mounted && !isTouchDevice ? 'cursor-none' : ''
        }`}
      >
        <a
          href="#v1-main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0e1a] focus:outline-none"
        >
          Skip to main content
        </a>
        <header role="banner">
          <Navigation />
        </header>
        <main id="v1-main-content" role="main">
          <HeroSection />
          <IntroSummary />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
