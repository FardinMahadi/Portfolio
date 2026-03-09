import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2">// about me</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Crafting experiences that <span className="text-gradient-primary">feel as good as they look.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Full-stack engineer crafting resilient, accessible digital products with React, Next.js, and expressive motion design. I love bringing complex ideas to life with clean code and thoughtful storytelling.
            </p>
            <p>
              From conference platforms with DevGenit to AI learning tools I build independently, I partner closely with founders and product teams to ship experiences that feel as good as they look.
            </p>
          </div>

          <div className="mt-8 p-4 bg-card border border-border rounded-lg font-mono text-sm">
            <p className="text-muted-foreground mb-1">$ cat availability.txt</p>
            <p className="text-primary">✓ Available for collaborative builds & speaking engagements</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
