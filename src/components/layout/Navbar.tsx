'use client';

import { MobileNav } from '@/components/layout/MobileNav';
import { NavLink } from '@/components/layout/NavLink';
import type { NavbarProps } from '@/components/types/layout/layout';
import { AvailabilityChip } from '@/components/ui/AvailabilityChip';
import { site } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar({ className }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top: { backgroundColor: 'rgba(245,241,237,0)', backdropFilter: 'blur(0px)' },
          scrolled: {
            backgroundColor: 'rgba(245,241,237,0.92)',
            backdropFilter: 'blur(16px)',
          },
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          'fixed top-0 right-0 left-0 z-30 border-b border-transparent transition-[border-color] duration-300',
          scrolled && 'border-n200',
          className
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-n900 hover:text-mag-500 font-mono text-sm font-medium transition-colors"
          >
            &lt;<span className="text-mag-500">FardinMahadi</span> /&gt;
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {site.nav
              .filter(n => n.label !== 'Home')
              .map(({ label, href }) => (
                <NavLink key={href} href={href}>
                  {label}
                </NavLink>
              ))}
          </nav>

          {/* Right side */}
          <div className="hidden items-center gap-4 md:flex">
            <AvailabilityChip status={site.availability} />
            <a
              href="/docs/mahadi-hasan-fardin-cv.pdf"
              download="Mahadi_Hasan_Fardin_CV.pdf"
              className="bg-n900 font-display hover:bg-mag-600 rounded-sm px-4 py-2 text-sm font-semibold text-white shadow-(--sh-sm) transition-all hover:shadow-(--sh-mag)"
            >
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="text-n600 hover:text-n900 flex h-9 w-9 items-center justify-center rounded-sm transition-colors md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
