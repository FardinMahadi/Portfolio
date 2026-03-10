'use client';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Footer from '@/components/LandingPage/Footer/Footer';
import Navbar from '@/components/shared/navigation/Navigation';
import HeroSection from '@/components/LandingPage/hero/HeroSection';
import BlogSection from '@/components/LandingPage/blog/BlogSection';
import ContactSection from '@/components/LandingPage/contact/ContactSection';
import ProjectsSection from '@/components/LandingPage/projects/ProjectsSection';
import { Toaster } from '@/components/ui/toaster';
import AboutSection from '@/components/about/AboutSection';

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background focus:outline-none"
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
