'use client';

import type {
  ContactSectionProps,
  ContactFormData,
  ContactFormStatus,
  SocialLinksProps,
} from '@/components/types/landing/contact';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { FormEvent, useRef, useState } from 'react';
import socialLinksData from '@/data/socialLinks.json';
import { ArrowLeft, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

import { StatusPanel } from './StatusPanel';
import { QuickActions } from './QuickActions';
import { SocialLinksList } from './SocialLinksList';
import { ContactFormPanel } from './ContactFormPanel';
import { ContactBackground } from './ContactBackground';

type ToastKind = 'loading' | 'success' | 'error';

type ContactToast = {
  id: number;
  kind: ToastKind;
  message: string;
};

const iconMap = {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
} as const;

const socialLinks: SocialLinksProps[] = socialLinksData.map(item => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap],
}));

export function ContactSection({ variant = 'landing' }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<ContactFormStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [toasts, setToasts] = useState<ContactToast[]>([]);

  const addToast = (kind: ToastKind, message: string, duration = 3000) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts(prev => [...prev, { id, kind, message }]);

    if (duration > 0) {
      window.setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, duration);
    }

    return id;
  };

  const updateToast = (id: number, kind: Exclude<ToastKind, 'loading'>, message: string) => {
    setToasts(prev => prev.map(toast => (toast.id === id ? { ...toast, kind, message } : toast)));
    window.setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3500);
  };

  const handleFormChange = (updated: ContactFormData) => {
    setFormData(updated);
    setErrors(prevErrors => {
      const updatedErrors = { ...prevErrors };
      (['name', 'email', 'message'] as const).forEach(field => {
        if (prevErrors[field] && updated[field]) {
          updatedErrors[field] = undefined;
        }
      });
      return updatedErrors;
    });
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message is too long (max 5000 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypotValue = new FormData(e.currentTarget).get('companyWebsite')?.toString() ?? '';

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('loading');
    setSubmitMessage('');
    const loadingToastId = addToast('loading', 'Sending your message...', 0);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          companyWebsite: honeypotValue,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setSubmitMessage(data.message || "Thank you for your message! I'll get back to you soon.");
      updateToast(
        loadingToastId,
        'success',
        data.message || "Message sent. I'll get back to you soon."
      );
      setFormData({ name: '', email: '', message: '' });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
      setSubmitMessage(errorMessage);
      updateToast(loadingToastId, 'error', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`text-theme-text relative px-4 py-20 sm:px-6 lg:px-8 ${variant === 'page' ? 'bg-transparent' : 'bg-(--color-background)'}`}
      style={
        variant === 'page'
          ? undefined
          : {
              background:
                'linear-gradient(to bottom, color-mix(in srgb, var(--color-background) 92%, transparent), var(--color-background))',
            }
      }
    >
      {/* Background effects */}
      <ContactBackground />

      <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex max-w-sm flex-col gap-3">
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            className={`rounded-lg border p-3 shadow-lg backdrop-blur-sm ${
              toast.kind === 'success'
                ? 'border-green-500/50 bg-green-500/15 text-green-200'
                : toast.kind === 'error'
                  ? 'border-red-500/50 bg-red-500/15 text-red-200'
                  : 'border-theme-primary/40 bg-theme-surface/90 text-theme-text'
            }`}
            role="status"
            aria-live="polite"
          >
            <p className="text-sm">{toast.message}</p>
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl">
        {variant === 'page' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="border-theme-border/40 bg-theme-surface/70 text-theme-text/70 mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border p-4 text-sm"
          >
            <Link
              href="/"
              className="text-theme-primary hover:text-theme-accent inline-flex items-center gap-2 font-medium transition-colors"
              aria-label="Return to home page"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase">
              <span className="text-theme-text/60">avg. response</span>
              <span className="bg-theme-primary/10 text-theme-primary rounded-full px-3 py-1">
                &lt; 24h
              </span>
            </div>
          </motion.div>
        )}

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="text-theme-primary mb-6 flex items-center justify-center gap-3">
            <span className="text-theme-primary font-mono text-xl" aria-hidden="true">
              {'>'}_
            </span>
            <h2 className="text-theme-accent text-3xl font-bold">Get In Touch</h2>
          </div>
          <p className="text-theme-text/75 mx-auto max-w-2xl text-lg">
            Have a project idea or want to collaborate? I&apos;m always open to discussing new
            opportunities, freelance work, and exciting challenges in web development.
          </p>
        </motion.header>

        <div className="grid gap-12 md:grid-cols-2">
          <ContactFormPanel
            formData={formData}
            errors={errors}
            onChange={handleFormChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            status={submitStatus}
            message={submitMessage}
          />

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {variant === 'page' && <QuickActions isInView={isInView} />}
            <SocialLinksList socialLinks={socialLinks} isInView={isInView} />
            <StatusPanel isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
