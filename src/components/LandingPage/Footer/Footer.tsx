'use client';

import { forwardRef } from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => (
  <footer className="border-t border-border py-8" ref={ref}>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fardin Mahadi. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/FardinMahadi" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/mahadi-hasan-fardin" },
          { icon: Mail, href: "mailto:mahadihasanfardin2015@gmail.com" },
          { icon: MessageCircle, href: "https://discord.gg/fardinmahadi" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
