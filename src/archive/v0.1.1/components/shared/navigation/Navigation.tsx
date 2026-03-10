'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ColorPaletteSwitcher } from "@/components/ui/ColorPaletteSwitcher";
import { NavLink } from "./NavLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : ""
        }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-mono text-sm text-primary">
          {"<FardinMahadi />"}
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("/") && !item.href.includes("#") ? (
                <NavLink
                  href={item.href}
                  exact={item.href === "/"}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md"
                  activeClassName="text-primary font-medium"
                >
                  {item.label}
                </NavLink>
              ) : (
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          <li className="flex items-center gap-2 ml-2">
            <ColorPaletteSwitcher />
            <a
              href="/mahadi-hasan-fardin.pdf"
              download="Mahadi_Hasan_Fardin_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ColorPaletteSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border"
        >
          <ul className="container mx-auto py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  activeClassName="text-primary font-medium"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="px-4 pt-2">
              <a
                href="/mahadi-hasan-fardin.pdf"
                download="Mahadi_Hasan_Fardin_CV.pdf"
                className="inline-block w-full text-center px-4 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
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
