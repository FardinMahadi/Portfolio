import { Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-theme-border/70 text-theme-text border-t bg-(--color-background) px-4 py-8 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-theme-text/70 flex items-center gap-2 text-sm">
            <Code2 className="text-theme-primary h-4 w-4" aria-hidden="true" />
            <span className="text-theme-text/75 font-mono">
              Built with{' '}
              <Heart
                className="text-theme-accent mx-1 inline h-4 w-4 fill-current"
                aria-label="love"
              />{' '}
              using Next.js, ShadCN, Framer-Motion, TypeScript & TailwindCSS
            </span>
          </div>

          <div className="text-theme-text/60 font-mono text-sm">
            © <time dateTime={currentYear.toString()}>{currentYear}</time> FardinMahadi. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
