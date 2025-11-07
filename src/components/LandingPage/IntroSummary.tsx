import { motion } from "framer-motion";

export function IntroSummary() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#0c1020] to-[#0a0e1a]">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/70 bg-slate-900/40 text-sm text-slate-200 shadow-lg shadow-theme-primary/10"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
              aria-hidden="true"
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for collaborative builds & speaking engagements
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 space-y-5 text-slate-300 text-lg"
        >
          <p>
            Full-stack engineer crafting resilient, accessible digital products
            with React, Next.js, and expressive motion design. I love bringing
            complex ideas to life with clean code and thoughtful storytelling.
          </p>
          <p className="text-slate-400 text-base">
            From conference platforms with DevGenit to AI learning tools I build
            independently, I partner closely with founders and product teams to
            ship experiences that feel as good as they look.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
