'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { FileTab } from '@/components/ui/FileTab';
import { cn } from '@/lib/utils';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type FieldProps = {
  id: string;
  label: string;
  keyword: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, keyword, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-[0.65rem] text-n400">
        <span className="text-teal-600">const</span> {label} ={' '}
        <span className="text-n300 text-[0.6rem]">// {keyword}</span>
      </label>
      {children}
      {error && (
        <span className="font-mono text-[0.62rem] text-red-500">{error}</span>
      )}
    </div>
  );
}

const inputBase =
  'w-full rounded-sm border bg-canvas px-3 py-2.5 font-mono text-sm text-n900 placeholder:text-n300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mag-400/30';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [apiError, setApiError] = useState('');
  const [errors, setErrors] = useState<Partial<Record<'name' | 'email' | 'message', string>>>({});

  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields(f => ({ ...f, [key]: e.target.value }));
  }

  function validate() {
    const errs: typeof errors = {};
    if (!fields.name.trim()) errs.name = 'Name is required';
    if (!fields.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = 'Enter a valid email address';
    if (!fields.message.trim()) errs.message = 'Message is required';
    else if (fields.message.length > 5000) errs.message = 'Message must be under 5000 characters';
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState('submitting');
    setApiError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const json = await res.json();
      if (!res.ok) {
        setApiError(json.error || 'Something went wrong. Please try again.');
        setState('error');
      } else {
        setState('success');
      }
    } catch {
      setApiError('Network error. Check your connection and try again.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-sm border border-teal-200 bg-canvas-raised px-8 py-16 text-center"
      >
        <CheckCircle size={40} className="text-teal-500" />
        <h3 className="font-display text-xl font-bold text-n900">Message sent.</h3>
        <p className="max-w-sm text-sm text-n500">
          Thanks for reaching out — I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setState('idle'); setFields({ name: '', email: '', subject: '', message: '' }); }}
          className="mt-2 font-mono text-xs text-mag-500 underline-offset-4 hover:underline"
        >
          Send another →
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-sm border border-n200 bg-canvas-raised">
      <div className="border-b border-n200">
        <FileTab path="contact-form.ts" active />
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 p-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="name" label="name" keyword="required" error={errors.name}>
            <input
              id="name"
              type="text"
              value={fields.name}
              onChange={set('name')}
              placeholder="'Your Name'"
              autoComplete="name"
              className={cn(inputBase, errors.name ? 'border-red-300 focus:ring-red-300/30' : 'border-n200 focus:border-mag-300')}
            />
          </Field>

          <Field id="email" label="email" keyword="required" error={errors.email}>
            <input
              id="email"
              type="email"
              value={fields.email}
              onChange={set('email')}
              placeholder="'you@example.com'"
              autoComplete="email"
              className={cn(inputBase, errors.email ? 'border-red-300 focus:ring-red-300/30' : 'border-n200 focus:border-mag-300')}
            />
          </Field>
        </div>

        <Field id="subject" label="subject" keyword="optional">
          <input
            id="subject"
            type="text"
            value={fields.subject}
            onChange={set('subject')}
            placeholder="'What is this about?'"
            className={cn(inputBase, 'border-n200 focus:border-mag-300')}
          />
        </Field>

        <Field id="message" label="message" keyword="required" error={errors.message}>
          <textarea
            id="message"
            rows={6}
            value={fields.message}
            onChange={set('message')}
            placeholder="'Tell me about your project...'"
            className={cn(inputBase, 'resize-none', errors.message ? 'border-red-300 focus:ring-red-300/30' : 'border-n200 focus:border-mag-300')}
          />
          <span className="self-end font-mono text-[0.6rem] text-n300">
            {fields.message.length} / 5000
          </span>
        </Field>

        <AnimatePresence>
          {state === 'error' && apiError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 rounded-sm border border-red-200 bg-red-50 px-4 py-3 font-mono text-xs text-red-600"
            >
              <AlertCircle size={14} />
              {apiError}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={state === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-mag-500 px-6 py-3 font-display text-sm font-bold text-white shadow-(--sh-mag) transition-all duration-200 hover:bg-mag-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === 'submitting' ? (
            <>
              <Loader size={15} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={15} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
