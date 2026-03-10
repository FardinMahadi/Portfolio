'use client';

import type { Components } from 'react-markdown';
import type { MarkdownRendererProps } from '@/components/types/blog';

import React from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const components: Partial<Components> = {
    // Headings
    h1: ({ ...props }) => (
      <h1 className="mt-8 mb-4 font-mono text-3xl font-bold text-slate-100" {...props} />
    ),
    h2: ({ ...props }) => (
      <h2 className="mt-6 mb-3 font-mono text-2xl font-bold text-slate-100" {...props} />
    ),
    h3: ({ ...props }) => (
      <h3 className="mt-5 mb-2 text-xl font-semibold text-slate-100" {...props} />
    ),
    h4: ({ ...props }) => (
      <h4 className="mt-4 mb-2 text-lg font-semibold text-slate-100" {...props} />
    ),
    // Paragraphs
    p: ({ ...props }) => <p className="mb-4 leading-relaxed text-slate-300" {...props} />,
    // Lists
    ul: ({ ...props }) => <ul className="my-4 list-none space-y-2" {...props} />,
    ol: ({ ...props }) => (
      <ol className="my-4 list-inside list-decimal space-y-2 text-slate-300" {...props} />
    ),
    li: ({ ...props }) => (
      <li className="flex items-start gap-3 text-slate-300" {...props}>
        <span className="text-theme-primary mt-1.5 shrink-0" aria-hidden="true">
          ▹
        </span>
        <span className="flex-1 leading-relaxed">{props.children}</span>
      </li>
    ),
    // Code blocks
    code: ({
      inline,
      className,
      children,
      ...props
    }: {
      inline?: boolean;
      className?: string;
      children?: React.ReactNode;
    } & React.HTMLAttributes<HTMLElement>) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';

      return !inline && language ? (
        <div className="my-6">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              background: '#0f172a',
              border: '1px solid rgba(51, 65, 85, 0.5)',
            }}
            PreTag="div"
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code
          className="rounded border border-slate-700/50 bg-slate-900/50 px-1.5 py-0.5 font-mono text-sm text-cyan-400"
          {...props}
        >
          {children}
        </code>
      );
    },
    // Links
    a: ({ ...props }) => (
      <a
        className="text-blue-400 underline underline-offset-2 transition-colors hover:text-blue-300"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    // Strong/Bold
    strong: ({ ...props }) => <strong className="font-semibold text-slate-100" {...props} />,
    // Emphasis/Italic
    em: ({ ...props }) => <em className="text-slate-200 italic" {...props} />,
    // Blockquotes
    blockquote: ({ ...props }) => (
      <blockquote
        className="my-4 rounded-r border-l-4 border-blue-500/50 bg-slate-900/30 py-2 pl-4 text-slate-300 italic"
        {...props}
      />
    ),
    // Horizontal rule
    hr: ({ ...props }) => <hr className="my-8 border-slate-700/50" {...props} />,
    // Tables
    table: ({ ...props }) => (
      <div className="my-4 overflow-x-auto">
        <table className="min-w-full border-collapse border border-slate-700/50" {...props} />
      </div>
    ),
    thead: ({ ...props }) => <thead className="bg-slate-900/50" {...props} />,
    tbody: ({ ...props }) => <tbody {...props} />,
    tr: ({ ...props }) => <tr className="border-b border-slate-700/50" {...props} />,
    th: ({ ...props }) => (
      <th
        className="border border-slate-700/50 px-4 py-2 text-left font-semibold text-slate-200"
        {...props}
      />
    ),
    td: ({ ...props }) => (
      <td className="border border-slate-700/50 px-4 py-2 text-slate-300" {...props} />
    ),
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
