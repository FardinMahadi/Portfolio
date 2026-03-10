import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-mono text-sm text-primary mb-2 text-left">{"// about me"}</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-left font-inter">
            Crafting experiences that {" "}
            <span className="text-gradient-primary">feel as good as they look.</span>

          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-3xl text-left font-inter">
            <p>
              Full-stack engineer crafting resilient, accessible digital products with React, Next.js, and expressive motion design. I love bringing complex ideas to life with clean code and thoughtful storytelling.
            </p>
            <p>
              From conference platforms with DevGenit to AI learning tools I build independently, I partner closely with founders and product teams to ship experiences that feel as good as they look.
            </p>
          </div>

          <div className="mt-12 p-6 bg-secondary/50 border border-border/50 rounded-xl font-mono text-sm inline-block w-full md:w-full min-w-[300px] text-left">
            <p className="text-muted-foreground mb-2">$ cat availability.txt</p>
            <p className="text-primary flex items-center gap-2">
              <span>✓</span> Available for collaborative builds & speaking engagements
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
