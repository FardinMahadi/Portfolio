'use client';

import type { SocialLinksProps } from '@/components/types/landing/contact';

import { motion } from 'framer-motion';

export function SocialLinksList({
  socialLinks,
  isInView,
}: {
  socialLinks: SocialLinksProps[];
  isInView: boolean;
}) {
  return (
    <aside>
      <h3 className="text-theme-text mb-6 font-mono text-xl">Connect With Me</h3>
      <div className="space-y-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            whileHover={{ x: 10 }}
            className="group border-theme-border/40 shadow-theme-primary/5 hover:border-theme-primary/60 flex min-h-[44px] items-center gap-4 rounded-lg border p-4 shadow-lg backdrop-blur-sm transition-all duration-300"
            style={{
              background:
                'linear-gradient(145deg, color-mix(in srgb, var(--color-surface) 78%, transparent), color-mix(in srgb, var(--color-background) 60%, transparent))',
            }}
            aria-label={`Visit ${social.name} profile for ${social.username}`}
          >
            <div
              className={`border-theme-border/40 group-hover:border-theme-primary/50 rounded-lg border p-3 shadow-lg transition-all duration-300 ${social.glow}`}
              style={{
                background:
                  'linear-gradient(135deg, color-mix(in srgb, var(--color-surface) 85%, transparent), color-mix(in srgb, var(--color-background) 55%, transparent))',
              }}
            >
              <social.icon
                className={`text-theme-text h-5 w-5 ${social.color} drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] transition-colors duration-300`}
              />
            </div>
            <div className="flex-1">
              <div className="text-theme-text group-hover:text-theme-primary transition-colors duration-300">
                {social.name}
              </div>
              <div className="text-theme-text/85 font-mono text-sm">@{social.username}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </aside>
  );
}
