'use client';

import { motion } from 'framer-motion';
import { forwardRef, useState } from 'react';
import { Clock, MapPin, Send } from 'lucide-react';

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary mb-2 font-mono text-sm">// contact</p>
          <h2 className="text-2xl font-bold md:text-3xl">Let&apos;s Build Together</h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="space-y-4"
              onSubmit={e => {
                e.preventDefault();
                window.location.href = `mailto:mahadihasanfardin2015@gmail.com?subject=Hello from ${name}&body=${message}%0A%0AFrom: ${email}`;
              }}
            >
              <div className="bg-card border-border overflow-hidden rounded-lg border font-mono text-sm">
                <div className="border-border text-muted-foreground border-b px-4 py-2 text-xs">
                  contact-form.tsx
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <label className="text-muted-foreground mb-1 block text-xs">
                      <span className="text-accent">const</span> name =
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="'Your Name'"
                      className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-muted-foreground mb-1 block text-xs">
                      <span className="text-accent">const</span> email =
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="'you@example.com'"
                      className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-muted-foreground mb-1 block text-xs">
                      <span className="text-accent">const</span> message =
                    </label>
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="'Let's build something amazing...'"
                      rows={4}
                      className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 w-full resize-none rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-opacity hover:opacity-90"
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
            <div className="bg-card border-border w-full rounded-lg border p-6 font-mono text-sm shadow-sm">
              <p className="text-muted-foreground mb-3">$ cat status.txt</p>
              <div className="space-y-3">
                <div className="text-foreground flex items-center gap-3">
                  <MapPin size={14} className="text-primary shrink-0" />
                  <span>Remote / Dhaka / Cumilla</span>
                </div>
                <div className="text-foreground flex items-center gap-3">
                  <Clock size={14} className="text-primary shrink-0" />
                  <span>Response Time: {'<'} 24 hours</span>
                </div>
                <div className="text-primary flex items-center gap-3">
                  <span className="bg-primary h-2 w-2 shrink-0 animate-pulse rounded-full" />
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

ContactSection.displayName = 'ContactSection';

export default ContactSection;
