'use client';

import type { NotificationProps } from '@/components/types/landing/contact';

import { motion } from 'framer-motion';

export function Notification({ variant, message, Icon }: NotificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 rounded-lg border p-3 ${
        variant === 'success'
          ? 'border-green-500/50 bg-green-500/10 text-green-400'
          : 'border-red-500/50 bg-red-500/10 text-red-400'
      }`}
      role="alert"
    >
      <Icon className="h-5 w-5" />
      <p className="text-sm">{message}</p>
    </motion.div>
  );
}
