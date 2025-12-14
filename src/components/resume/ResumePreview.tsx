'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Palette, Eye } from 'lucide-react';

import { ResumePreviewModal } from './ResumePreviewModal';

const templates = [
  {
    key: 'modern',
    title: 'Modern Minimal',
    description: 'Clean two-column layout with accent dividers and focused typography.',
    highlights: [
      'Timeline-style experience bullets',
      'Link strip with quick contact access',
      'Grid-based competency overview',
    ],
  },
  {
    key: 'creative',
    title: 'Creative Professional',
    description: 'Bold sidebar treatment with vibrant colors and visual hierarchy.',
    highlights: [
      'Dark sidebar with photo + strengths',
      'Floating cards for experience + projects',
      'Chip-based tech stack showcase',
    ],
  },
  {
    key: 'classic',
    title: 'Classic Elegant',
    description: 'Traditional resume typography with generous white space and centered header.',
    highlights: [
      'Centered masthead for timeless feel',
      'Dense accomplishments section',
      'Single-column readability for ATS',
    ],
  },
];

function TemplateMock({ variant }: { variant: string }) {
  if (variant === 'creative') {
    return (
      <div className="border-theme-border/30 mb-5 flex gap-2 rounded-2xl border bg-[color-mix(in_srgb,var(--color-background)_85%,transparent)] p-2">
        <div className="bg-theme-primary/15 flex w-1/3 flex-col gap-2 rounded-xl p-2">
          <div className="bg-theme-primary/60 h-4 w-3/4 rounded-full" />
          <div className="bg-theme-primary/30 h-2 w-full rounded" />
          <div className="bg-theme-primary/30 h-2 w-2/3 rounded" />
          <div className="bg-theme-primary/40 mt-auto h-6 rounded" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="bg-theme-text/60 h-4 w-32 rounded-full" />
          <div className="border-theme-border/30 space-y-1 rounded-xl border p-2">
            <div className="bg-theme-text/30 h-2 w-full rounded" />
            <div className="bg-theme-text/20 h-2 w-4/5 rounded" />
            <div className="bg-theme-text/10 h-2 w-3/5 rounded" />
          </div>
          <div className="flex gap-2">
            <div className="border-theme-border/30 h-8 flex-1 rounded-lg border" />
            <div className="border-theme-border/30 h-8 flex-1 rounded-lg border" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'classic') {
    return (
      <div className="border-theme-border/30 mb-5 rounded-2xl border bg-[color-mix(in_srgb,var(--color-background)_90%,transparent)] p-3">
        <div className="bg-theme-text/60 mx-auto h-4 w-28 rounded-full" />
        <div className="bg-theme-text/30 mx-auto my-1 h-2 w-16 rounded-full" />
        <div className="bg-theme-border/40 my-3 h-0.5 w-full" />
        <div className="space-y-2">
          <div className="bg-theme-text/40 h-2 w-3/4 rounded" />
          <div className="bg-theme-text/20 h-2 w-full rounded" />
          <div className="bg-theme-text/15 h-2 w-full rounded" />
          <div className="bg-theme-text/25 h-2 w-4/5 rounded" />
        </div>
      </div>
    );
  }

  // modern default
  return (
    <div className="border-theme-border/30 mb-5 rounded-2xl border bg-[color-mix(in_srgb,var(--color-background)_75%,transparent)] p-3">
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <div className="bg-theme-text/70 h-4 w-32 rounded-full" />
          <div className="bg-theme-text/40 h-2 w-20 rounded" />
          <div className="border-theme-border/30 space-y-1 rounded-xl border p-2">
            <div className="bg-theme-text/30 h-2 w-full rounded" />
            <div className="bg-theme-text/20 h-2 w-5/6 rounded" />
            <div className="bg-theme-text/15 h-2 w-2/3 rounded" />
          </div>
          <div className="flex gap-1">
            <div className="bg-theme-primary/30 h-2 flex-1 rounded" />
            <div className="bg-theme-secondary/30 h-2 flex-1 rounded" />
            <div className="bg-theme-accent/30 h-2 flex-1 rounded" />
          </div>
        </div>
        <div className="border-theme-border/40 bg-theme-primary/10 w-16 rounded-xl border" />
      </div>
    </div>
  );
}

export function ResumePreview() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<{
    key: string;
    name: string;
  } | null>(null);

  const handleDownload = async (template: string) => {
    try {
      setDownloading(template);
      const response = await fetch(`/api/resume/${template}`, {
        cache: 'no-store',
      });
      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Failed to generate resume');
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Mahadi-Hasan-Fardin-${template}-resume.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert((error as Error).message || 'Unable to download resume. Please try again.');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-theme-text/80 text-base leading-relaxed">
          Each template mirrors the portfolio aesthetics with subtle lighting, glassmorphism, and
          type hierarchy. Pick the vibe that matches your outreach—from clean agency decks to
          creative submissions.
        </p>
        <div className="border-theme-border/40 text-theme-text/70 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <Palette className="text-theme-primary h-4 w-4" />
          Theme-aware colors adapt to your current palette selection.
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => (
          <motion.div
            key={template.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-theme-border/40 relative rounded-2xl border bg-gradient-to-br from-(--color-surface) to-[color-mix(in_srgb,var(--color-background)_80%,transparent)] p-5 shadow-lg shadow-black/10"
          >
            <TemplateMock variant={template.key} />
            <div className="mb-4">
              <p className="text-theme-primary/80 font-mono text-xs uppercase">
                Template {index + 1}
              </p>
              <h3 className="text-theme-text text-xl font-semibold">{template.title}</h3>
              <p className="text-theme-text/70 text-sm">{template.description}</p>
            </div>
            <ul className="text-theme-text/80 mb-5 space-y-2 text-sm">
              {template.highlights.map(highlight => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="bg-theme-primary mt-1 h-1.5 w-1.5 rounded-full" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-theme-border/40 hover:bg-theme-surface/50 flex-1 bg-transparent"
                onClick={() =>
                  setPreviewTemplate({
                    key: template.key,
                    name: template.title,
                  })
                }
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button
                className="flex-1 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                disabled={downloading === template.key}
                onClick={() => handleDownload(template.key)}
                style={{
                  background:
                    'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
                  boxShadow:
                    '0 10px 15px -3px rgba(0,0,0,0.2), 0 4px 6px -2px rgba(0,0,0,0.12), 0 0 25px -8px var(--color-primary)',
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                {downloading === template.key ? 'Generating...' : 'Download'}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <ResumePreviewModal
          isOpen={!!previewTemplate}
          onClose={() => setPreviewTemplate(null)}
          templateKey={previewTemplate.key}
          templateName={previewTemplate.name}
        />
      )}
    </div>
  );
}
