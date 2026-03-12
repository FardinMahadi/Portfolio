import { motion } from 'framer-motion';

const AboutSection = () => (
  <section id="about" className="bg-background py-20">
    <div className="container px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <p className="text-primary mb-2 text-left font-mono text-sm">// about me</p>
        <h2 className="font-inter mb-4 text-left text-2xl leading-tight font-bold md:text-3xl">
          Crafting experiences that{' '}
          <span className="text-gradient-primary">feel as good as they look.</span>
        </h2>
        <div className="text-muted-foreground font-inter max-w-3xl space-y-4 text-left text-lg leading-relaxed">
          <p>
            Full-stack engineer crafting resilient, accessible digital products with React, Next.js,
            and expressive motion design. I love bringing complex ideas to life with clean code and
            thoughtful storytelling.
          </p>
          <p>
            From conference platforms with DevGenit to AI learning tools I build independently, I
            partner closely with founders and product teams to ship experiences that feel as good as
            they look.
          </p>
        </div>

        <div className="bg-secondary/50 border-border/50 mt-12 inline-block w-full min-w-[300px] rounded-xl border p-6 text-left font-mono text-sm md:w-full">
          <p className="text-muted-foreground mb-2">$ cat availability.txt</p>
          <p className="text-primary flex items-center gap-2">
            <span>✓</span> Available for collaborative builds & speaking engagements
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
