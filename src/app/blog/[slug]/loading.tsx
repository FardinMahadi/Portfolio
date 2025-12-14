'use client';

import { useEffect } from 'react';
import { ContentSkeleton } from '@/components/ui/loading';

export default function BlogPostLoading() {
  useEffect(() => {
    // Disable cursor effects on loading page
    document.body.dataset.cursorSuspended = 'true';
    window.dispatchEvent(new CustomEvent('target-cursor:suspend', { detail: true }));

    return () => {
      document.body.dataset.cursorSuspended = 'false';
      window.dispatchEvent(new CustomEvent('target-cursor:suspend', { detail: false }));
    };
  }, []);

  return (
    <div className="text-theme-text relative min-h-screen bg-(--color-background)">
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <ContentSkeleton type="blogPost" />
      </div>
    </div>
  );
}
