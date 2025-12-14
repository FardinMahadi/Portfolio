'use client';

import { Button } from '../../ui/button';
import { MagneticButton } from '../../effects/MagneticButton';

const heroSecondaryActions = [
  {
    label: 'Hire Me',
    href: 'mailto:mahadihasanfardin2015@gmail.com',
  },
  {
    label: 'View GitHub',
    href: 'https://github.com/FardinMahadi',
  },
  {
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/mahadi-hasan-fardin',
  },
  {
    label: 'Join Discord',
    href: 'https://discord.gg/fardinmahadi',
  },
];

export function HeroActions() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        <MagneticButton magneticStrength={0.2}>
          <Button
            size="lg"
            className="min-h-[44px] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
              boxShadow:
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 20px -5px var(--color-primary)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background =
                'linear-gradient(to right, var(--color-primary), var(--color-secondary))';
              e.currentTarget.style.filter = 'brightness(1.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background =
                'linear-gradient(to right, var(--color-primary), var(--color-secondary))';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            aria-label="Navigate to projects section"
          >
            View Projects
          </Button>
        </MagneticButton>
        <MagneticButton magneticStrength={0.2}>
          <Button
            size="lg"
            variant="outline"
            className="border-theme-border/70 text-theme-text/85 hover:border-theme-accent hover:bg-theme-surface/60 hover:text-theme-accent min-h-[44px] transition-all duration-300"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            aria-label="Navigate to contact section"
          >
            Get In Touch
          </Button>
        </MagneticButton>
      </div>

      <div className="text-theme-text/75 flex flex-wrap justify-center gap-2 text-sm md:justify-start">
        {heroSecondaryActions.map(action => (
          <Button
            key={action.label}
            variant="ghost"
            size="sm"
            asChild
            className="text-theme-text/80 hover:text-theme-text hover:bg-theme-surface/70 border-theme-border/30 rounded-full border px-3 py-1"
          >
            <a href={action.href} target="_blank" rel="noreferrer" aria-label={action.label}>
              {action.label}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
