import { motion } from 'framer-motion';

export function IntroSummary() {
  return (
    <section
      className="text-theme-text bg-(--color-background) px-4 py-16 sm:px-6 lg:px-8"
      style={{
        background:
          'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--color-background) 88%, transparent) 55%, var(--color-background))',
      }}
    >
      <div className="mx-auto max-w-5xl text-center md:text-left">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-theme-border/70 bg-theme-surface/70 text-theme-text/85 shadow-theme-primary/10 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-lg backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="bg-theme-primary/70 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              aria-hidden="true"
            />
            <span className="bg-theme-primary relative inline-flex h-2 w-2 rounded-full" />
          </span>
          Available for collaborative builds & speaking engagements
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-theme-text/85 mt-8 space-y-5 text-lg"
        >
          <p>
            Full-stack engineer crafting resilient, accessible digital products with React, Next.js,
            and expressive motion design. I love bringing complex ideas to life with clean code and
            thoughtful storytelling.
          </p>
          <p className="text-theme-text/70 text-base">
            From conference platforms with DevGenit to AI learning tools I build independently, I
            partner closely with founders and product teams to ship experiences that feel as good as
            they look.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
