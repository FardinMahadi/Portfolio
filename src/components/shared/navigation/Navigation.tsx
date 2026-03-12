'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { ColorPaletteSwitcher } from '@/components/ui/ColorPaletteSwitcher';

import { NavLink } from './NavLink';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Resume', href: '/resume' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 border-border border-b backdrop-blur-xl' : ''
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-primary font-mono text-sm">
          {'<FardinMahadi />'}
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(item => (
            <li key={item.label}>
              {item.href.startsWith('/') && !item.href.includes('#') ? (
                <NavLink
                  href={item.href}
                  exact={item.href === '/'}
                  className="text-muted-foreground hover:text-primary rounded-md px-4 py-2 text-sm transition-colors"
                  activeClassName="text-primary font-medium"
                >
                  {item.label}
                </NavLink>
              ) : (
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary rounded-md px-4 py-2 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li className="ml-2 flex items-center gap-2">
            <ColorPaletteSwitcher />
            <a
              href="/docs/mahadi-hasan-fardin-cv.pdf"
              download="Mahadi_Hasan_Fardin_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm transition-opacity hover:opacity-90"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ColorPaletteSwitcher />
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border-border border-b md:hidden"
        >
          <ul className="container mx-auto flex flex-col gap-2 py-4">
            {navItems.map(item => (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-primary block px-4 py-2 text-sm transition-colors"
                  activeClassName="text-primary font-medium"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="px-4 pt-2">
              <a
                href="/docs/mahadi-hasan-fardin-cv.pdf"
                download="Mahadi_Hasan_Fardin_CV.pdf"
                className="bg-primary text-primary-foreground inline-block w-full rounded-md px-4 py-3 text-center text-sm font-medium transition-opacity hover:opacity-90"
              >
                Download CV
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
