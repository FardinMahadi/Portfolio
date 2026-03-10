'use client';

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary mb-2">{"// contact"}</p>
          <h2 className="text-2xl md:text-3xl font-bold">Let&apos;s Build Together</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:mahadihasanfardin2015@gmail.com?subject=Hello from ${name}&body=${message}%0A%0AFrom: ${email}`;
              }}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden font-mono text-sm">
                <div className="px-4 py-2 border-b border-border text-xs text-muted-foreground">
                  contact-form.tsx
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">
                      <span className="text-accent">const</span> name =
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="'Your Name'"
                      className="w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">
                      <span className="text-accent">const</span> email =
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="'you@example.com'"
                      className="w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">
                      <span className="text-accent">const</span> message =
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="'Let's build something amazing...'"
                      rows={4}
                      className="w-full bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity text-sm"
                  >
                    <Send size={14} /> Send Message
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm w-full shadow-sm">
              <p className="text-muted-foreground mb-3">$ cat status.txt</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin size={14} className="text-primary shrink-0" />
                  <span>Remote / Dhaka / Cumilla</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Clock size={14} className="text-primary shrink-0" />
                  <span>Response Time: {"<"} 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
